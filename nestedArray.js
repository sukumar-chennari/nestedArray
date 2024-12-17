const input=[1,2,3,4,5,6]
const middle=input.length/2
const newArray=[input.slice(0,Math.floor(middle)),input.slice(Math.floor(middle+1),input.length)]
console.log(newArray)
