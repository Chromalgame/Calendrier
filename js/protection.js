import Case from '/js/case.js'

const element = new Case(new Date('2022-11-28'), 10);

dateJ = new Date()

console.log(dateJ)
console.log(element.Date())

if(element.Date() > dateJ){
    console.log('yes')
}