import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.github.com' });

const getUserRequestsInfo = async () => API.get('/rate_limit');

export const getNumberOfUserRepositories = async (username) => {
  const userInfo = await API.get(`/users/${username}`);
  return userInfo.data.public_repos;
};

export const getAllUserRepositories = async (username) => {
  const numberOfRepositories = await getNumberOfUserRepositories(username);
  const pages = [];
  const repositories = [];

  const requestInfo = await getUserRequestsInfo();
  for (let i = 1; i <= numberOfRepositories / 100 + 1; i += 1) {
    pages.push(i);
  }

  // eslint-disable-next-line no-restricted-syntax
  for await (const partialRepositories of pages.map((page) => API.get(`/users/${username}/repos?per_page=100&page=${page}`))) {
    partialRepositories.data.forEach((repository) => {
      repositories.push(repository);
    });
  }

  return {
    repositories, numberOfRepositories, requestInfo,
  };
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
