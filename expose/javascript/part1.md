Question 1 -> 20

Question 2 -> 20

Question 3 -> 20

Question 4 -> Error. This is because result was declared using the let keyword  in the if block. So when we try accessing it outside on line 13 we get a "result not defined" error as we are accessing result outside the scope of the result variable.

Question 5 -> Error. This is because result was declared using the const keyword. In the if block we try to reassign it by doing num1 + num2 leading to a "assignment to constant variable". 

Question 6 -> Error. This is because result was declared using the const keyword in the if block. So when we try accessing it outside on line 13 we get a "result not defined" error as we are accessing result outside the scope of the result variable.

Question 1 -> 3 is printed. This is because variable i was declared using var keyword and so when we are trying to print it outside the for loop we do not get an error. The value of i is 3 because after the iteration of i = 2 it is increased to i = 3 but does not go into the for loop as 3 < 3 is not true and thus prints 3

Question 2 -> 150 is printed. This is because variable discountedPrice was declared using var keyword and so when we are trying to print it outside the for loop we do not get an error. The value of discountedPrice is 150 because in the iteration of i = 2 it is set to prices[2]*(1-0.5).

Question 3 -> 150 is printed. This is because variable finalPrice was declared using var keyword and so when we are trying to print it outside the for loop we do not get an error. The value of finalPrice is 150 because in the iteration of i = 2 it is set to (discountedPrice * 100)/100.

Question 4 -> The function returns [ 50, 100, 150 ]. This is because discounted is declared using var keyword and in the function we calculate the discountedPrice for every value of the array that was passed in i.e prices and for each corresponding value we push it to a discounted array which is what we are returning at the end.

Question 5 -> Error. This is because we declared i using the let keyword in the for block. So when we try accessing it outside on line 12 we get a "i not defined" error as we are accessing i outside the scope of the i variable.

Question 6 -> Error. This is because we declared discountedPrice using the let keyword in the for block. So when we try accessing it outside on line 13 we get a "result not defined" error as we are accessing discountedPrice outside the scope of the discountedPrice variable.

Question 7 -> 150 is printed. This is because even though the variable finalPrice was declared using let keyword, it is still in its scope for the whole function and so when we are trying to print it outside the for loop we do not get an error. The value of finalPrice is 150 because in the iteration of i = 2 it is set to (discountedPrice * 100)/100.

Question 8 -> The function returns [ 50, 100, 150 ]. This is because even though discounted is declared using let keyword it is in the scope of the return statement. In the function we calculate the discountedPrice for every value of the array that was passed in i.e prices and for each corresponding value we push it to a discounted array which is what we are returning at the end.

Question 9 -> Error. This is because we declared i using the let keyword in the for block. So when we try accessing it outside on line 12 we get a "i not defined" error as we are accessing i outside the scope of the i variable.

Question 10 -> 3 is printed because length is defined using the const keyword and its scope is the function. Because it is also not reassigned at a later point we get no error and get 3 instead which is the length of the prices array that was passed in.

Question 11 -> The function returns [ 50, 100, 150 ]. This is because even though discounted is declared using const keyword, the return statement is still in the scope of the discounted variable. Moreover in the function we are not reassigning discounted to anything else so we do not get an error. In the function we calculate the discountedPrice for every value of the array that was passed in i.e prices and for each corresponding value we push it to a discounted array which is what we are returning at the end.
