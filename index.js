// Code your solutions in this file
let eventName = "birthday"
let messages = []
function writeCards(names, eventName){
  for (let i = 0; i < names.length; i++){
    console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return messages;
}

writeCards(names, eventName);


function countDown(number){
  while (number > 0){
    console.log(number);
    number -= 1;
  }
  console.log(number);
}
