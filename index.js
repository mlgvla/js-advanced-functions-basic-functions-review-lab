function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = "*") {
    return function (thing = "special") {
        return `You are ${flair}${thing}${flair}!`
    }
}

const Calculator = {  
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(integer, functionArray) {
    if (!functionArray){
        return integer
    } else {
        for (let i = 0; i < functionArray.length; i++) {
            integer = functionArray[i](integer)
        }
    }
    return integer
}