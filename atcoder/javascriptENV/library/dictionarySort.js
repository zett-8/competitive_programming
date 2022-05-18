/*

  String dictionary sort

 */

'abc'.localeCompare('bcd')

/*

  Array dictionary sort (Number)

 */

const ds = (a, b, i) => !a[i] ? 1 : a[i] === b[i] ? ds(a, b, i+1) : a[i] - b[i]

