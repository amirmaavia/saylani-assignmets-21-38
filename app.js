//Chapter 21-25
// Question 1
//var firstname = prompt("first name")
//var lastname = prompt("last name")
//fullname = firstname + " " + lastname
//alert(fullname)
//Question 1
//Question 2
// var favphone = prompt("what is your fav phone")
//         var length =  favphone.length 
//         alert("My favorite phone is: " +  " " + favphone + "length of string" + " " + length )
//Question 2
//Question 3
// var country = "Pakistani"
// alert(country.length)
//  var n = country.indexOf("n")
//  alert("pakistani index of 'n'" +" " + n)
//Question 3
//Question 4
// var str = "Hello World"
// var l = str.lastIndexOf("l")
// alert(l)
//Question 4
//Question 5
// var str = "pakistani"
//       var index = 3 
//       alert(" pakistani Character at index 3 " + str.charAt(index))
//Question 5
//Question 6
// var firstname = prompt("first name")
// var lastname = prompt("last name")
// fullname = firstname.concat( " " + lastname)
// alert(fullname)
//Question 6
//Question 7
// var city =  "Hyderabad"
//   var replace = city.replace("Hyder" , "islam")
//   alert("City:"+ " " + city  +" " + "after replacement" + " " + replace)
//Question 7
//Question 8
// var str = '472'
//   var num = 472
//   alert( str +" " + typeof(str))
//   alert( num +" " + typeof(num))
//Question 8
//Question 9
// var str = prompt("name ")
// str1 = str.toLocaleUpperCase()
// alert(str1)
//Question 9
//Question 10
// var str = prompt("name")
//  str1 = str.charAt(0).toUpperCase() + str.slice(1); 
//  alert(str1)
//Question 10
//Question 11
// var num = 36.36
// num = num.toString()
// console.log(num)
//Question 11
//Question 12
// var user = prompt("Enter your name")

// if((user>0 && user<=47)||(user>=58 && user<=64)||
//        (user>=91 && user<=96)||(user>=123 && user<=127)){
//            alert("your Name is invalid")
//        }
//        else{
//            alert("your Name is correct")
//        }

//Question 12

//Question 13
// var cos = prompt("Welcome to Fruits bakery what you want sir/ma'm")
//          var items = ["apple","mango","watermelon","strawberry","banana"]
//          cos = cos.toLowerCase()
//          var match = false
//          for(i=0; i<items.length; i++){
//          var  index =  items.indexOf(i)
//             if (cos === items[i]){
//                 match = true
//                 break
            
            
//             }
//          }
        
//          if(match == true){
//              alert("Yes" + " " + cos + " " + "is availeble"   )
//          }
//          else{
//              alert("Sorry Sir This fruit this time finish")
//          }
//Question 13
//Question 15
// var user= prompt("Generate the password")
//   if(user >= 65 && user <= 90  && user >= 97 && user <= 122  && user >= 48 && user <= 57){
// alert("Your Password is valid")
//                }
//                else{
//                    alert("your password is invalid")
//                }

//Question 15
//Question 16
// var university = "university of karachi"
//   university = university.toUpperCase()
//   university = university.split('')

//   document.write(university)
//Question 16
//Chapter 21-25
//Chapter 26-30
//Question 1
// var num = 3.4890
//   num1 = Math.round(num)
//   num3 = Math.floor(num)
//   num2 = Math.ceil(num)
//   result = `number ${num} <br> round of value ${num2} <br> floor Value ${num3} <br> ceil Value${num2}`
// document.write(result)
  
//Question 1
//Question 2
// var num = -2.4890
// num1 = Math.round(num)
// num3 = Math.floor(num)
// num2 = Math.ceil(num)
// result = `number ${num} <br> round of value ${num2} <br> floor Value ${num3} <br> ceil Value${num2}`
// document.write(result)
//Question 2
//Question 3
// var num = -4 
// num2 = Math.abs(num)
// alert(num)
// alert(num2)
// var num1 = 5
// num3 = Math.abs(num1)
// alert(num1)
// alert(num3)
//Question 3
//Question 4
// var num = Math.random() * 6
// num = Math.floor(num)
// alert(num)
//Question 4
//Question 5 
// var num = Math.random() * 2
// num = Math.floor(num)
// console.log(num)
// if(num === 1){
//     alert("Head")
// }
// else{
//     alert("Tail")
// }
//Question 5 
//Question 6
// var num = Math.random() * 100
// num = Math.floor(num)
// console.log(num)
// var result = `Random number between 1 to 100 number is  ${num}`
// document.write(result)
//Question 6
//Question 7
// var age = parseInt(prompt("Enter you age in kg "))
// age = Math.floor(age)
// alert(age + " " + "Kilograms") 
//Question 7
//Question 8
// var user = parseInt(prompt("Enter your lucky number"))
// var secret = Math.random() * 10
// secret = Math.floor(secret)
// console.log(secret)
// if(secret === user){
//     alert("Congratulations! you are winner this lucky draw")
// } 
// else{
//     alert("Try Again")
//Question 8
//Chapter 26-30
//Chapter 31-35
//Question 1
// var date =  new Date()
// alert(date)
//Question 1
//Question 2
// var months = ["january","fabury","march","april","may","june","july","august","september","october","november","december"]
// var date = new Date()
// var month = date.getMonth()
// var nameofmonths = months[month]
// alert(nameofmonths)
//Question 2
//Question 3
// var days = ["sat","sun","mon","tues","wed","thur","fri"]
// var date = new Date()
// var day = date.getDay()
// console.log(day)
// var nameofdays = days[day]
// alert(nameofdays)
//Question 3
//Question 4
// var days = ["sat","sun","mon","tues","wed","thur","fri"]
// var date = new Date()
// var day = date.getDay()
// console.log(day)
// var nameofdays = days[day]
// alert(nameofdays)
// if(nameofdays == "sun"){
//     alert("It's fun day")
// }
// else{
//     alert("Working Day")
// }
//Question 4
//Question 5
// var date = new Date()
// var month = date.getMonth()
// alert(month)
// if(month => 1 || month <= 15){
//     alert("First Fifteen Days of Month")
// }
// else{
//     "last days of month"
// }
//Question 5
//Question 6
// var date1 = new Date("june 14 2019")
// var date2 = new Date("june 14 1970")
// var time = date1.getTime() - date2.getTime()
// var days = time / (1000 * 60 * 60 * 24)
// var minutes = time / (1000 * 60 )
// var sec = time / (1000)
// alert(days+ " " +" Days" ) 
// alert(minutes + " "  + "minutes" )
// alert(sec + " " + "seconds" )
//Question 6
//Question 7
// var laterdate = new Date("31 Dec 2020")
// alert(lastdate)
//Question 7
//Question 8
// var date = new Date("jan 1 2015")
// var ramdan = new Date("june 15 2015")
// var time =  ramdan.getTime() - date.getTime()
// var diff = time / (1000 * 60 * 60 *24)
// alert(diff + " " + "Days have passed since 1st ramdan , 2015")
//Question 8
//Question 9
// var date = new Date()
// var date1 = new Date("dec 31 2020")

// var time =  date1.getTime() - date.getTime()
// var diff = time / (1000 * 60)
// diff = Math.floor(diff)
// alert( "on Refrence Date" + ' ' + date + " " +diff + " " + "seconds had passes since begginig 2020" ) 
//Question 9
//Question 10 
// var date = new Date("sat Dec 05 2015 22:08:16 GMT+0500(PKT)")
// var date1 = new Date("sat Dec 05 2015 23:08:16 GMT+0500(PKT)")
// var time = date1.getTime() - date.getTime()
// var diff = time / (1000 * 60 * 60)
// alert("Current Date" + " " + date  +" " + diff + " " + "ago is" + " " + date1)
//Question 10 
//Question 11
// var date = new Date(" Dec 05 2015 23:08:16 GMT+0500(PKT)")
// var date1 = new Date(" Dec 05 1915 23:08:16 GMT+0500(PKT)")
// var time =   date.getTime() - date1.getTime()
// var diff = time / (1000 * 60 * 60 * 24 * 30 * 365)

// diff = Math.floor(diff)
// alert("Current date:" + " " + date + " " + diff +" " + "years back it's was " + " " + date1)

//Question 11
//Question 12
// var costumer = prompt("Coustumer Name")
// var months = ["january","fabury","march","april","may","june","july","august","september","october","november","december"]
// var date = new Date()
// var month = date.getMonth()
// var nameofmonths = months[month]
// var chargesperpoint = 16
// var unitsbill = chargesperpoint * 120
// unitsbill = Math.floor(unitsbill)
// var netamount = unitsbill
// var latepayment =  350
// var groosamountafter = latepayment + unitsbill
// var result = `<center><table>
//     <h1>K-ELECTIC BILL</h1><br><p>Costumer Name: ${costumer}</p><br><p>Current Month: ${nameofmonths}</p>
//  <br><p>NUMBER OF UNIT BILL: ${unitsbill}</p><br><p>CHARGES PER UNIT: ${chargesperpoint}</p><br><p>NET AMOUNT PAYABAILE{DUE DATE}: ${unitsbill}</p><br><p>LATE PAYMENT CHARGES: ${latepayment}</p><br><p>GROSS AMOUNT PAYABLE: ${groosamountafter}</p>
//     </table></center>`
//     document.write(result)
//Question 12
//Chapter 31-35
