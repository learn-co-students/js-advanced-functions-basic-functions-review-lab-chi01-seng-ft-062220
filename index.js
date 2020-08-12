function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(character = "*"){
    return function(adjective = "special"){
        return `You are ${character}${adjective}${character}!`
    }
}

const Calculator = {
    add: function(a,b){return a + b},
    subtract: function(a,b){return a - b},
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a / b}
}

function actionApplyer(integer, array){
    if (array.length === 0){
        return integer
    }else{
        let value = integer
        array.forEach(transformation => { 
            value = transformation(value)
        })
        return value
    }
}