let input = prompt("When's your birthday? (mm/dd/yyyy)")

let today = new Date()
let date = new Date(input.toString())

const difference = today.getTime() - date.getTime()
const differenceInYears = Math.floor(difference / (1000 * 3600 * 24 * 365))

console.log(`You are ${differenceInYears} years young!`)