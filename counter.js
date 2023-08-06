// Q. 取數字陣列交集
// using counter
const getNumArrayIntersection = (array1, array2) => {
    const exsistNums = {}
  
    array1.forEach(array1Item => {
      if (!exsistNums[array1Item]) {
        exsistNums[array1Item] = 1
      } else {
        exsistNums[array1Item] += 1
      }
    })
  
    let intersection = []
  
    array2.forEach(array2Item => {
      if (exsistNums[array2Item]) {
        intersection.push(array2Item)
      }
    })
  
    return intersection
  }
  console.log(getNumArrayIntersection([1, 1, 2, 3], [5, 16, 1, 3]))
  console.log(getNumArrayIntersection([15, 3, 6, 8, 24, 16], [11, 3, 9, 6, 15, 8]))