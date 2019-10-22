const multiplyCache = {}

const multiplyBy2 = num => {
  if (multiplyCache[num]) {
    return multiplyCache[num]
  }
  const total = num * 2
  console.log('Loading...') // To represent this process taking time
  multiplyCache[num] = total
  return total
}

console.log(multiplyBy2(5))
console.log(multiplyBy2(2))
console.log(multiplyBy2(5))
console.log(multiplyBy2(2))