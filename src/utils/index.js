import orderBy from 'lodash/orderBy'

export function generateYears(max = 100) {
  const yearOptions = []

  for (let y = 0; y < max; y++) {
    let year = new Date().getFullYear() - y
    yearOptions.push({ key: year, value: year, text: year})
  }

  return yearOptions
}

export function changeOrderDirection(state, field) {
    if (state && state === field) {
      return '-' + field
    }

    return field
}

export function orderMoviesBy(movies, field) {
  let reverse = field.startsWith('-')
  if (reverse) {
    field = field.slice(1)
  }

  let orderFunc = (movie) => {
    switch (field) {
      case 'genres':
        return movie.genres.join(',')
      default:
        return movie[field]
    }
  }

  if (field === 'date') {
    reverse = !reverse
  }

  return orderBy(movies, [orderFunc], [reverse ? 'desc' : 'asc'])
}

export function filterMoviesByQuery(movies, query) {
  if (!query) {
    return movies
  }

  return movies.filter((movie) => {
    let targets = [
      movie.title.toLowerCase(),
      movie.year.toString(),
      movie.genres.join(',').toLowerCase()
    ]

    return targets.some((target) => {
      return target.indexOf(query.toLowerCase()) !== -1
    })
  })
}
