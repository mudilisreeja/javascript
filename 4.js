// print all even numbers from 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }

};
//secret number game
let guess= prompt("Enter your number: ");
secret_number=25;
while(guess != secret_number){
   guess = prompt("wrong guess.enter again: ");
}
console.log("congratulations you entered a correct number");

