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
