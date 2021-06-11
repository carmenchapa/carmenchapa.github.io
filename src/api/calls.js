import axios from 'axios'

const reposArray = ['notionToFigma', 'haik', 'DoubleClick-assets-downloader']

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
      .filter((e) => reposArray.includes(e.name))
      .reverse()
    return repos
  })
