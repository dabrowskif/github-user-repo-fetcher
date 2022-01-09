export const FORKS = 'forks';
export const STARS = 'stars';
export const ISSUES = 'issues';

export default function sortArrayByValue(array, value) {
  switch (value) {
    case STARS: return array.sort(sortRepositoriesByStars);
    case FORKS: return array.sort(sortRepositoriesByForks);
    case ISSUES: return array.sort(sortRepositoriesByIssues);
    default: throw new Error('Wrong sorting value!');
  }
}

function sortRepositoriesByStars(firstRepository, secondRepository) {
  if (firstRepository.stargazers_count < secondRepository.stargazers_count) {
    return 1;
  }
  if (firstRepository.stargazers_count > secondRepository.stargazers_count) {
    return -1;
  }
  return 0;
}

function sortRepositoriesByForks(firstRepository, secondRepository) {
  if (firstRepository.forks_count < secondRepository.forks_count) {
    return 1;
  }
  if (firstRepository.forks_count > secondRepository.forks_count) {
    return -1;
  }
  return 0;
}

function sortRepositoriesByIssues(firstRepository, secondRepository) {
  if (firstRepository.open_issues < secondRepository.open_issues) {
    return 1;
  }
  if (firstRepository.open_issues > secondRepository.open_issues) {
    return -1;
  }
  return 0;
}
