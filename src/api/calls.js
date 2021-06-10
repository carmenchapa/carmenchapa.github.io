import axios from 'axios'
export const getColors = () =>
  axios
    .get(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    )
    .then((res) => res)

export const getRepos = () =>
  axios.get('https://api.github.com/users/carmenchapa/repos').then((res) => {
    const repos = res.data
      .filter((repo) => !repo.fork)
      // .sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count)
      .slice(0, 6)
    return repos
  })
