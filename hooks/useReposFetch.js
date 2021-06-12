import React, { useEffect, useState, useReducer } from 'react'
import { getColors, getRepos } from '../src/api/calls'

const INITIAL_REPOS = {
  repos: [],
  colors: []
}

function reposReducer(state, action) {
  switch (action.type) {
    case 'SET_COLORS': {
      return { ...state, colors: action.colors }
    }
    case 'SET_REPOS': {
      return { ...state, repos: action.repos }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

const useReposFetch = (query) => {
  const [status, setStatus] = useState('idle')
  // const [data, setData] = useState([])
  const [data, setData] = useReducer(reposReducer, INITIAL_REPOS)

  useEffect(() => {
    // if (!query) return

    const fetchData = async () => {
      setStatus('fetching')
      const colors = await getColors()
      setData({ type: 'SET_COLORS', colors })
      const repos = await getRepos()
      setData({ type: 'SET_REPOS', repos })
      setStatus('fetched')
    }

    fetchData()
  }, [])

  return { status, data }
}

export default useReposFetch
