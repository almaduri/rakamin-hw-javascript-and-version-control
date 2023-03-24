// Random number antara 2 nilai (inclusive)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Menentukan apakah nilai ganjil 
function isOdd(num) {
  return num % 2 === 1
}

// Min dalam array
function minArray(array) {
  let min = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    } 
  }

  return min
}

// Max dalam array
function maxArray(array) {
  let max = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    } 
  }

  return max
}

// Total dalam array
function totalArray(array) {
  let total = 0

  for (const num of array) {
    total += num
  }

  return total
}

// Rata rata array
function averageArray(array) {
  return totalArray(array) / array.length
}

// Membandingkan nilai
function compare(name, valueArrayOdd, valueArrayEven) {
  let result

  if (valueArrayOdd === valueArrayEven) {
    result = `${name} memiliki nilai sama antara array genap dan ganjil`
  } else if (valueArrayOdd > valueArrayEven) {
    result = `${name} lebih besar array ganjil`
  } else if (valueArrayEven > valueArrayOdd) {
    result = `${name} lebih besar array genap`
  } else {
    result = "Nilai tidak valid"
  }

  return result
}

// Total index dari suatu array
function totalIndex(array) {
  return array.length
}

const array = []
const arrayOdd = []
const arrayEven = []

// Isi array dengan 100 nilai random (1 - 50)
for (let i = 1; i <= 100; i++) {
  array.push(getRandomIntInclusive(1, 50))
}

// Perulangan pada array untuk menentukan index ganjil atau genap
for (let i = 0; i < array.length; i++) {
  if (isOdd(i)) {
    // Array Ganjil
    arrayOdd.push(array[i])
  } else {
    // Array Genap
    arrayEven.push(array[i])
  }
}

// Nilai array ganjil
const minArrayOdd = minArray(arrayOdd)
const maxArrayOdd = maxArray(arrayOdd)
const totalArrayOdd = totalArray(arrayOdd)
const averageArrayOdd = averageArray(arrayOdd)

// Nilai array genap
const minArrayEven = minArray(arrayEven)
const maxArrayEven = maxArray(arrayEven)
const totalArrayEven = totalArray(arrayEven)
const averageArrayEven = averageArray(arrayEven)

// Perbandingan array ganjil dan genap
const minCompared = compare("Min", minArrayOdd, minArrayEven)
const maxCompared = compare("Max", maxArrayOdd, maxArrayEven)
const totalCompared = compare("Total", totalArrayOdd, totalArrayEven)
const averageCompared = compare("Rata rata", averageArrayOdd, averageArrayEven)

// Total index array
const totalIndexArray = totalIndex(array)
const totalIndexArrayOdd = totalIndex(arrayOdd)
const totalIndexArrayEven = totalIndex(arrayEven)

console.log(`Min array ganjil = ${minArrayOdd}, Min array genap = ${minArrayEven}\n${minCompared}\n`)
console.log(`Max array ganjil = ${maxArrayOdd}, Max array genap = ${maxArrayEven}\n${maxCompared}\n`)
console.log(`Total array ganjil = ${totalArrayOdd}, Total array genap = ${totalArrayEven}\n${totalCompared}\n`)
console.log(`Rata rata array ganjil = ${averageArrayOdd}, Rata rata array genap = ${averageArrayEven}\n${averageCompared}`)
