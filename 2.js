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

const dummy = [3, 4, 5, 1, 2]
console.log(Ascending(dummy))
