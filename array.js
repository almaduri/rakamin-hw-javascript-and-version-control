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

const minArrayOdd = minArray(arrayOdd)
const maxArrayOdd = maxArray(arrayOdd)
const totalArrayOdd = totalArray(arrayOdd)
const averageArrayOdd = averageArray(arrayOdd)

const minArrayEven = minArray(arrayEven)
const maxArrayEven = maxArray(arrayEven)
const totalArrayEven = totalArray(arrayEven)
const averageArrayEven = averageArray(arrayEven)
