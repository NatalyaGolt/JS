let item_1
item_1= 5
console.log(item_1)


let item_2
item_2= 3
console.log(item_2)


let item_3
item_3= item_1 + item_2
console.log(item_3)


let item_4
item_4= 'Yolochka'
console.log(item_4)


console.log(item_1 + item_4)


console.log(item_3 * item_4) // NaN нечисловое значение - содержит цифры и не цифры


let item_5
item_5= item_3


let item_6
let item_6_type
item_6 = 15
typeof(item_6_type) == typeof(item_6)
console.log('item_6 == '+ typeof (item_6)+', item_6_type == '+ typeof (item_6_type))


let item_7 = String(item_6)
let item_7_type
typeof(item_7_type) == typeof(item_7)
console.log('item_7 == ' + typeof(item_7)+ ', item_7_type == ' + typeof(item_7_type))


let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2) {
    console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then ' + age_2)
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome!')
    }
    else if (age_1 > age_3) {
    console.log('Keep calm and look Culture channel')
    }
    else {console.log('Technical work')}



    let age_2_34 = 18
    let age_3_34 = 60
    const checkAge1 = function(age_1_34) {
    if (age_1_34 < age_2_34) {
    console.log('You don’t have access cause your age is ' + age_1_34 + ' It’s less then ' + age_2_34)
    }
    else if (age_1_34 >= age_2_34 && age_1_34 < age_3_34) {
    console.log('Welcome!')
    }
    else if (age_1_34 > age_3_34) {
    console.log('Keep calm and look Culture channel')
    }
    else {console.log('Technical work')}
    }
checkAge1(17)
checkAge1(18)
checkAge1(61)



let age_2_35 = 18
let age_3_35 = 60
const checkAge2 = function(age_1_35) {
    if (typeof(age_1_35) == 'number') {
    if (age_1_35 < age_2_35) {
    console.log('You don’t have access cause your age is ' + age_1_35 + ' It’s less then ' + age_2_35)
    }
    else if (age_1_35 >= age_2_35 && age_1_35 < age_3_35) {
    console.log('Welcome!')
    }
    else if (age_1_35 > age_3_35) {
    console.log('Keep calm and look Culture channel')
    }
    }
    else {console.log('Insert numbers')}
    }
checkAge2(17)
checkAge2(18)
checkAge2(61)
checkAge2('Abrakadabra')



let age_2_36 = 18
let age_3_36 = 60
const checkAge3 = function(age_1_36) {
age_1_36 = Number(age_1_36)
    if (!isNaN(age_1_36)) { // ! - отрицание !isNaN(age_1_36) - age_1_36 не значение типа NaN
    if (age_1_36 < age_2_36) {
    console.log('You don’t have access cause your age is ' + age_1_36 + ' It’s less then ' + age_2_36)
    }
    else if (age_1_36 >= age_2_36 && age_1_36 < age_3_36) {
    console.log('Welcome!')
    }
    else if (age_1_36 > age_3_36) {
    console.log('Keep calm and look Culture channel')
    }
    }
    else {console.log('Insert numbers')}
    }
checkAge3(17)
checkAge3(18)
checkAge3(61)
checkAge3('22dgsrh')


let age_2_37 = 18
let age_3_37 = 60
const checkAge4 = function(age_1_37) {
    // age_1_37 = Number(age_1_37)
    // if (!isNaN(age_1_37)) { // ! - отрицание !isNaN(age_1_37) - age_1_37 не значение типа NaN
    if(Number(age_1_37)) { // если age_1_37 типа number
    if (age_1_37 < age_2_37) {
        alert('You don’t have access cause your age is ' + age_1_37 + ' It’s less then ' + age_2_37)
    }
    else if (age_1_37 >= age_2_37 && age_1_37 < age_3_37) {
    alert('Welcome!')
    }
    else if (age_1_37 > age_3_37) {
    alert('Keep calm and look Culture channel')
    }
 }
 else {alert('Insert numbers')}
}

const ageChecking = prompt ('Insert your age')
checkAge4(ageChecking)



