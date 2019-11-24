/*
Emma is playing a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
She can jump on any cumulus cloud having a number that is equal to the number 
of the current cloud plus  or . She must avoid the thunderheads. 
Determine the minimum number of jumps it will take Emma to jump from her starting postion 
to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe 
or if they must be avoided. For example,  
indexed from . The number on each cloud is its index in the list so she must avoid 
the clouds at indexes  and . She could follow the following two paths:  
or . The first path takes  jumps while the second takes .

Function Description

Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

c: an array of binary integers
Input Format

The first line contains an integer , the total number of clouds. 
The second line contains  space-separated binary integers describing clouds  where .

Output Format

Print the minimum number of jumps needed to win the game.

Sample Input A
7
0 0 1 0 0 1 0

Sample Output A
4

Sample Input B
6
0 0 0 0 1 0

Sample Output B
3
*/

// Complete the jumpingOnClouds function below. 0 0 0 1 0 0
function jumpingOnClouds(c) {

    let count = 0;
    let nextCloud = 0;
    let currentCloud = 0;
    
    for(let i = 0; i < c.length; i++){
        let steps = 0;
        currentCloud = nextCloud;
        nextCloud = c[i+1];

        if(currentCloud === 0 && nextCloud === 0){
            steps = 1;
            if(nextCloud === c[i + 2]){
                steps = 2;
                nextCloud = c[i + 2];
                i+= 1;
            }
            count ++;
        }
        if(nextCloud === 1){
            steps = 1;
            if(c[i+2] === 0){
                steps = 2;
                i+=1;
            }
            nextCloud = 0;
            count ++;
        }
            console.log(steps)
    }
    return console.log(`emma win in ${count} jumps`);
}

let binary = [0,0,0,1,0,0,1,0]

jumpingOnClouds(binary);
