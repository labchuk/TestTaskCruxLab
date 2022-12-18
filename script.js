const fs = require('fs')

const data = fs.readFileSync('passwords.txt','utf-8')

function getQuantityValidPassword(data){
    return data.split('\n').reduce((acc,current)=>{
        let item = current.split(' ')
        let quantitySymbol = item[2].split(item[0]).length-1
        let requirements = item[1].split('-')
        let min = requirements[0]
        let max = requirements[1].split(':')[0]
        if (quantitySymbol >= min && quantitySymbol <= max) {
            acc++
        }
        return acc
    },0)
}
console.log(getQuantityValidPassword(data))
