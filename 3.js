function Ascending(data) {
  var temp = null
  for (var i = 0; i < data.length - 1; i++) {
    for (var j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }
  return data
}

function symmetricDifference(dataA, dataB) {
  var allData = []

  for (let i = 0; i < dataA.length; i++) {
    allData.push(dataA[i])
  }
  for (let i = 0; i < dataB.length; i++) {
    allData.push(dataB[i])
  }

  allData = Ascending(allData)

  var result = []

  for (let i = 0; i < allData.length; i++) {
    var flag = true

    if (allData[i - 1] == allData[i] || allData[i + 1] == allData[i]) {
      flag = false
    }

    if (flag) {
      result.push(allData[i])
    }
  }

  return result
}

console.log(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]))

//   [1, 2, 5, 7, 8]
