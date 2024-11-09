type SetQuery = (
  query: string | URLSearchParams,
  objects: { key: string; value: string | number }[]
) => URLSearchParams

const setQuery: SetQuery = (query, objects) => {
  const currentParams = new URLSearchParams(query)
  objects.forEach(({ key, value }) => {
    currentParams.set(key, '' + value)
  })

  return currentParams
}

const getParamValue = (key: string, defaultValue: string = ''): string => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(key) || defaultValue
  }
  return defaultValue
}

export { getParamValue, setQuery }
