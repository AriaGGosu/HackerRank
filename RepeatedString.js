/*

Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  
letters of Lilah's infinite string.

For example, if the string s='abcac' and n=10, the substring we consider is abcacabcac , 
the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. 
It should return an integer representing the number of occurrences of a in the prefix 
of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, s.
The second line contains an integer, n.

Constraints

For  of the test cases, .
Output Format

Print a single integer denoting the number of letter a's in the first 
letters of the infinite string created by repeating infinitely many times.

Sample Input A
aba
10

Sample Output A
7

Explanation A
The first  letters of the infinite string are abaabaabaa. 
Because there are  a's, we print  on a new line.

Sample Input B
a
1000000000000

Sample Output B
1000000000000

*/


// Complete the repeatedString function below. abaabaabaa

function repeatedString(s, n) {

    let string = '';
    let total = 0;

    while(string.length < n){
        string += s;
    }


    for(let char = 0; char < n; char++){
        if(string.charAt(char) === "a"){
            total ++
        }
    }
    return total;
}

console.log(repeatedString("a",1000000));