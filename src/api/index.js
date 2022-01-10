import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.github.com' });

const getUserRequestsInfo = async () => API.get('/rate_limit');

export const getNumberOfUserRepositories = async (username) => {
  let numberOfRepositories = 0;
  let statusCode = 0;

  await API.get(`/users/${username}`)
    .then((res) => {
      numberOfRepositories = res.data.public_repos;
      statusCode = res.status;
    })
    .catch((error) => {
      statusCode = error.toJSON().status;
    });

  return { statusCode, numberOfRepositories };
};

export const getAllUserRepositories = async (username) => {
  const pages = [];
  const serverResponse = {
    statusCode: 0,
    numberOfRepositories: 0,
    repositories: [],
    requestInfo: {},
  };

  serverResponse.requestInfo = await getUserRequestsInfo();
  const { statusCode, numberOfRepositories } = await getNumberOfUserRepositories(username);

  serverResponse.statusCode = statusCode;
  serverResponse.numberOfRepositories = numberOfRepositories;

  if (statusCode !== 200) {
    return serverResponse;
  }

  for (let i = 1; i <= numberOfRepositories / 100 + 1; i += 1) {
    pages.push(i);
  }

  // eslint-disable-next-line no-restricted-syntax
  for await (const partialRepositories of pages.map((page) => API.get(`/users/${username}/repos?per_page=100&page=${page}`))) {
    partialRepositories.data.forEach((repository) => {
      serverResponse.repositories.push(repository);
    });
  }

  return serverResponse;
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
