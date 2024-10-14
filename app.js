// 1. /Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.


// let maths1 = 3;
// let maths2 = 5;
// let result =  `Sum of ${maths1} and ${maths2} is ${maths1+maths2}`;
// console.log(result);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

//  Subtraction
// let maths1 = 3;
// let maths2 = 5;
// let result =  `Sum of ${maths1} and ${maths2} is ${maths1-maths2}`;
// console.log(result);

//  Multiplication
// let maths3 = 3;
// let maths4 = 5;
// let result1 =  `Sum of ${maths3} and ${maths4} is ${maths3*maths4}`;
// console.log(result1);

// //  Division
// let maths5 = 3;
// let maths6 = 5;
// let result2 =  `Sum of ${maths5} and ${maths6} is ${maths5/maths6}`;
// console.log(result2);

//  Modulus

// let maths7 = 3;
// let maths8 = 5;
// let result3 =  `Sum of ${maths7} and ${maths8} is ${maths7%maths8}`;
// console.log(result3);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.


// let myVariable;
// document.write("value after declaration is is " + myVariable + "<br>");
// myVariable = 5;
// document.write("Initial value is" + myVariable + "<br>");
// myVariable++;
// document.write("value after increment is" + myVariable + "<br>");
// myVariable += 7;
// document.write("Value after addition is" + myVariable + "<br>");
// myVariable --;
// document.write("Value after decreament is" + myVariable + "<br>");
// let remainder = myVariable % 3;
// document.write("The remainder is" + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output

// let ticketPrice = 600;
// let ticketQauntity = 5;
// let totalPrice = ticketPrice * ticketQauntity;

// document.write("Total cost to buy" + ticketQauntity + "ticket to a movie is" + totalPrice);

// 5. Write a script to display multiplication table of any 
// number in your browser. E.g


// let number = 4;
// document.write("<h1>" + "Table of " + number + "</h1>" + "<br>");

// for(let i = 1; i<=10; i++){
//     let result = number * i;
//     document.write(number + " x " + i + " = " + result  + "<br>")
// };

// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// let celsiusTemperature = 25; 

        
//         let fahrenheitTemperature =(celsiusTemperature * 9/5) + 32;
//         document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

      
//         fahrenheitTemperature = 77; 

        
//         celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
//         document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// // the following in variables 
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges



// let items1Price = 650;
// let items2Price = 100;
// let quantityItem1 = 3;
// let quantityItem2 = 7;

// let ShippingCharges = 100;

// let totalPrice1 = items1Price * quantityItem1;
// let totalPrice2 = items2Price * quantityItem2;
// let totalCost  = totalPrice1 + totalPrice2 + ShippingCharges;

// document.write("<h1> Shopping Cart </h1>");
// document.write("Price of item 1 is " + totalPrice1 + "<br>");
// document.write("quantity of item 1 is " + quantityItem1 + "<br>");
// document.write("Price of item 2 is " + totalPrice2 + "<br>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.write("Shipping Charges " + ShippingCharges + "<br>");
// document.write("Total Cost of your order is " + totalCost + "<br>");

// let totalMarks = 980;
// let marksObtained  = 804;

// let percentage = marksObtained / totalMarks * 100;

// document.write("<h1> Marks Sheet </h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: "  + percentage + "%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
 
// let usDollar = 10;
// let Riyals = 25;

// let convertDollar = usDollar * 104.80;
// let convertRiyal = Riyals * 28;

// document.write("<h1> Currency in PKR </h1>");
// document.write("Total Currency in PKR: " +(convertDollar + convertRiyal));

// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let myVariable = 10;

// let result = ((myVariable + 5) * 10) / 2;

// document.write(result);

// The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// let currentYear = 2024;
// let birthYear = 2001;

// let age = currentYear - birthYear;

// document.write("Current Year: " +  currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable. b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// let radius = 20;
// let pi = 3.142;
// let circumfernce  = 2 * pi * radius;
// let area = pi * radius * radius;

// document.write("Radius of a circle: " + radius +  "<br>")
// document.write("The cicrumference is: " + circumfernce + "<br>");
// document.write("The area is: " + area);



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

// let snack = "Chocalate Chip";
// let age = 23;
// let maxAge = 80;
// let amount = 3;

// let result = (maxAge - age) * 365;
// let result1 = result * 3;

// document.write("<h1> The Lifetime Supply Calculator </h1>" + "<br>");
// document.write("Favourite Snack:" + snack + "<br>");
// document.write("Current Age:" + age + "<br>");
// document.write("Esitimated Maximum AGe" + maxAge + "<br>");
// document.write("Amount of Snack per day" + amount + "<br>");
// document.write("You will need 150 choclate chip to last younuntil the ripe old age of 65" + result1 + "<br>");

//              ----End----