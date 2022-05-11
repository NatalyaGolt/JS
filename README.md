# JS
### Домашнее заданиe 1
### Файлы:
### my first HW JS.html
### my first HW JS.js
 1. Создать переменную “item_1”
 2. Присвоить переменной item_1 цифру 5
 3. Вывести в консоль item_1
   
        let item_1
        item_1= 5
        console.log(item_1)

 4. Создать переменную “item_2”
 5. Присвоить переменной item_2 цифру 3
 6. Вывести в консоль item_2
   
        let item_2
        item_2= 3
        console.log(item_2)
 7. Создать переменную “item_3”
 8. Присвоить переменной item_3 сложение item_1 и item_2
 9. Вывести в консоль item_3

        let item_3
        item_3= item_1 + item_2
        console.log(item_3)
 10. Создать переменную “item_4”
 11. Присвоить переменной item_4 строку “Yolochka”
 12. Вывести в консоль item_4
    
         let item_4
         item_4= 'Yolochka'
         console.log(item_4)
 13.  Вывести в консоль сложение item_3 и item_4

          console.log(item_1 + item_4)

 14. Вывести в консоль умножение item_3 и item_4

         console.log(item_3 * item_4)

 15. Создать переменную “item_5”
 16. Присвоить переменной item_5 переменную item_3

         let item_5
         item_5= item_3
 17. Создать переменную item_6
 18. Создать переменную item_6_type
 19. Присвоить переменной item_6 значение 15
 20. Присвоить переменной item_6_type тип переменной item_6
 21. Вывести в консоль тип данных item_6 в виде ——  “item_6 == ”  item_6,  “item_6_type == ”  item_6_type
   
         let item_6
         let item_6_type
         item_6 = 15
         typeof(item_6_type) == typeof(item_6)
         console.log('item_6 == '+ typeof (item_6)+', item_6_type == '+ typeof (item_6_type))
 22. Создать переменную item_7 и в ней преобразовать item_6 в String.
 23. Создать переменную item_7_type
 24. Присвоить переменной item_7_type тип переменной item_7
 25. Вывести в консоль тип данных item_7 в виде ——  “item_7 == ”  item_7,  “item_7_type == ”  item_7_type

         let item_7 = String(item_6)
         let item_7_type
         typeof(item_7_type) == typeof(item_7)
         console.log('item_7 == ' + typeof(item_7)+ ', item_7_type == ' + typeof(item_7_type))
 26. Создать переменную “age_1” и присвоить ей значение 10
 27. Создать переменную “age_2” и присвоить ей значение 18
 28. Создать переменную “age_3” и присвоить ей значение 60
 29. Создать if в котором будите проверять значение переменной age_1
 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”
 33. Иначе выводите “Technical work”

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
34. Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Пример: const checkAge = function(age) {Ваши преобразования}. Вывести в консоль результат работы функции с возрастами 17, 18, 61
    
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
         else {
               console.log('Technical work')
              }
        }

        checkAge1(17)
        checkAge1(18)
        checkAge1(61)

35. Преобразовать задание 34 таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка

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
         else {
               console.log('Insert numbers')
              }
        }

        checkAge2(17)
        checkAge2(18)
        checkAge2(61)
        checkAge2('Abrakadabra')

36. Преобразовать 35 таким образом, чтобы значение '2' (тип данных строка в которой лежит ТОЛЬКО ЦИФРА '2') пропускалось, преобразовываясь в number

        let age_2_36 = 18
        let age_3_36 = 60
        const checkAge3 = function(age_1_36) {
        age_1_36 = Number(age_1_36)
         if (!isNaN(age_1_36)) {
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
         else {
               console.log('Insert numbers')
              }
         }
         
        checkAge3(17)
        checkAge3(18)
        checkAge3(61)
        checkAge3('2')

37. Преобразовать задание 36 таким образом, чтобы возраст выводился используя функцию prompt в привязанной верстке
    - Создан файл my first HW JS.html:

            <!DOCTYPE html>
             <html lang="en">
              <head>
               <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>Document</title>
              </head>
              <body>
               <script src="my first HW JS.js"></script>
              </body>
             </html>
    - Код JS:

                let age_2_37 = 18
                let age_3_37 = 60
                const checkAge4 = function(age_1_37) {
                 if(Number(age_1_37)) {
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
                 else {
                       alert('Insert numbers')
                      }
                }

                const ageChecking = prompt ('Insert your age')
                checkAge4(ageChecking)