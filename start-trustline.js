const io = require('socket.io-client'),
 socket = io('http://localhost:8080'),
 readline = require('readline');

console.log('Welcome to your trustline!');

let rl = readline.createInterface(process.stdin),
  clientAddress = process.argv[2],
  clientCurrency = process.argv[3];

socket.emit('data', {"address": clientAddress, "currency": clientCurrency});

rl.on('line', (cmd) => {
    if(cmd.match(/balance/)){
      socket.emit('balance', {"address": clientAddress});
    }
    if(cmd.match(/send/)){
      let wordArray = cmd.split(" ");
      // send transfer for 10 xrp CD9FB1E148CCD8442E5AA74904CC73BF6FB54D1D54D333BD596AA9BB4BB4E961
      socket.emit('sendFunds', {"fromAddress": clientAddress, "toAddress": wordArray[5], "amount": parseInt(wordArray[3]), "currency": wordArray[4]})
    }
});

socket.on('balance', function(result) {
   console.log(`Your Trustline balance is: ${result.balance} ${result.currency}`);
});

socket.on('sendFunds', function(result) {
   console.log(`You've sent: ${result.amountSent} ${result.currency} to ${result.address}`);
});

socket.on('receivedFunds', function(result) {
   console.log(`You've received: ${result.balance} ${result.currency} from ${result.address}`);
});
