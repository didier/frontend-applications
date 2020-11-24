/**
 * Replaces all occurences of a substring within a string with a specified value.
 *
 * @param {String} string String to replace parts of
 * @param {String} replace Part of string to replace
 * @param {String} replaceBy Part to replace with
 * @returns `String`
 */
export function replaceAll(
  string,
  replace,
  replaceBy
) {
  const regex = new RegExp(replace, 'g')
  const newString = string.replace(regex, replaceBy)
  return newString
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {String} string String of which to capitalize the first letter
 * @returns `String` with capitalized first letter
 */
export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Removes excessive whitespace at the start or end of an object's property.
 *
 * @param {[{}]} data - An array of objects
 * @param {string} property - The property to be trimmed
 * @returns {[]} - The cleaned array of objects
 */
export function removeWhitespace(data, property) {
  return data.map((item) => {
    const trimmed = item[property].trim()
    return { [property]: trimmed }
  })
}

/**
 * Sorts an array of objects alphabetically or by property
 *
 * @export
 * @param {object[]} array Array of objects
 * @param {String} property Object property to sort by. If left blank, the function sorts descending alphabetically or numerically.
 * @returns {object[]} array of oooasd
 */
export function sortBy(array, property) {
  if (property) {
    return array.sort((a, z) => a[property] - z[property])
  } else {
    return array.sort()
  }
}

/**
 * Fetches the data of all supplied urls.
 *
 * @param {string[]} urls URLs to fetch data from
 * @returns a Promise with the fetched data as its return value
 */
export function getData(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  return Promise.all(promises).then(values => {
    console.log(values)
    return values
  })
}

export function checkIfDataExistsInLocalStorage() {
  const localData = window.localStorage.getItem('data')
  return !!localData
}


export function storeDataToLocalStorage(data) {
  window.localStorage.setItem('data', data)
}
/**
 * Holds a tally of requested properties of objects in an array.
 *
 * @param {*} tally - Tally of the property
 * @param {*} property - Property to count
 * @returns Object with the counted values
 */
export function countItemsInArray(tally, property) {
  if (!tally[property]) {
    tally[property] = 1
  } else {
    tally[property] = tally[property] + 1
  }
  return tally
}
