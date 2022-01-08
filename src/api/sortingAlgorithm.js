export default function sortRepositoriesByStars(firstRepository, secondRepository) {
  if (firstRepository.stargazers_count < secondRepository.stargazers_count) {
    return 1;
  }
  if (firstRepository.stargazers_count > secondRepository.stargazers_count) {
    return -1;
  }
  return 0;
}
