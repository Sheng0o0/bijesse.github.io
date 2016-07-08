// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

for(var beer = 100; beer>=0; beer--){
  if(beer > 1){    
    console.log(beer + " bottles of beer on the wall");
  }
  else if(beer === 1){
    console.log(beer + " bottle of beer on the wall"); 
  }
  else{
    console.log("no more bottles of beer on the wall!");
  }

}