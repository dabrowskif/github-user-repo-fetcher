import axios from 'axios';

const REQUEST_LIMIT = 50;

const API = axios.create({ baseURL: 'https://api.github.com' });

const getUserRequestsInfo = async () => API.get('/rate_limit');

export const getNumberOfUserRepositories = async (username) => {
  const userInfo = await API.get(`/users/${username}`);
  return userInfo.data.public_repos;
};

export const getAllUserRepositories = async (username) => {
  const numberOfRepositories = await getNumberOfUserRepositories(username);
  const repositories = [];

  let requestInfo = await getUserRequestsInfo();
  let partialRepositories = [];
  let page = 1;

  do {
  // eslint-disable-next-line no-await-in-loop
    partialRepositories = await API.get(`/users/${username}/repos?per_page=100&page=${page}`);
    partialRepositories.data.forEach((repository) => {
      repositories.push(repository);
    });
    // eslint-disable-next-line no-await-in-loop
    requestInfo = await getUserRequestsInfo();
    page += 1;
    console.log('Fetched ', repositories.length, ' repositories');
  } while (requestInfo.data.rate.used < REQUEST_LIMIT && partialRepositories.data.length !== 0);

  console.log(`Fetched ${repositories.length}/${numberOfRepositories}`);

  return { repositories, numberOfRepositories, requestInfo };
};

// This function is not useful for the case of exercise, as GitHub doesn't allow fetching repositories already filtered by stars.
// It is useful however, if you just want to get list of all repositories sorted by names nicely paginated.
export const getUserRepositoriesOnPage = async (username, page, rowsPerPage) => {
  const requestsInfo = await getUserRequestsInfo();
  if (requestsInfo.data.rate.used < requestsInfo.data.rate.total) {
    return API.get(`/users/${username}/repos?per_page=${rowsPerPage}&page=${page}`);
  }
  throw new Error(`Exceeded request limit. API request blocked. ${requestsInfo.data.rate.used}/${requestsInfo.data.rate.limit}`);
};
