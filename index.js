
const bruteForceTwoSum = (array, sum) => {
  let pair = []
  for (let i = 0; i < array.length - 1; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (array[i] + array[k] === sum) {
        pair.push([array[i], array[k]])
      }
    }
  }
  return pair
}


const binarySearchTwoSum = () => {

}
