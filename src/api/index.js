import axios from 'axios';
import sortRepositoriesByStars from './sortingAlgorithm';

const RATE_LIMIT = 50;

const API = axios.create({ baseURL: 'https://api.github.com' });

const getUserRequestsUsed = async () => {
  const userInfo = await API.get('/rate_limit');
  console.log(`Used ${userInfo.data.rate.used}/${RATE_LIMIT} requests.`);
  return userInfo.data.rate.used;
};

export const getNumberOfUserRepositories = async (username) => {
  const userInfo = await API.get(`/users/${username}`);
  return userInfo.data.public_repos;
};

export const getAllUserRepositories = async (username) => {
  const numberOfRepositories = await getNumberOfUserRepositories(username);
  let requestsUsed = await getUserRequestsUsed();
  let partialRepositories = [];
  const repositories = [];
  let page = 1;

  if (requestsUsed < RATE_LIMIT) {
    partialRepositories = await API.get(`/users/${username}/repos?per_page=100&page=${page}`);
  }

  while (requestsUsed < RATE_LIMIT && partialRepositories.data.length !== 0) {
    // eslint-disable-next-line no-await-in-loop
    partialRepositories = await API.get(`/users/${username}/repos?per_page=100&page=${page}`);
    partialRepositories.data.forEach((repository) => {
      repositories.push(repository);
    });

    page += 1;
    // eslint-disable-next-line no-await-in-loop
    requestsUsed = await getUserRequestsUsed();
  }

  console.log(`Fetched ${repositories.length}/${numberOfRepositories}`);
  repositories.sort(sortRepositoriesByStars);

  return { repositories, numberOfRepositories };
};

// This function is not useful for the case of exercise, as GitHub doesn't allow fetching repositories already filtered by stars.
// It is useful however, if you just want to get list of all repositories sorted by names nicely paginated.
export const getUserRepositoriesOnPage = async (username, page, rowsPerPage) => {
  const requestsUsed = await getUserRequestsUsed();
  if (requestsUsed < RATE_LIMIT) {
    return API.get(`/users/${username}/repos?per_page=${rowsPerPage}&page=${page}`);
  }
  console.log(`Exceeded request limit. API request blocked. ${requestsUsed}/${RATE_LIMIT}`);
  return null;
};
