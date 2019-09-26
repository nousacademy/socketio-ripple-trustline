module.exports = class Connection {
  constructor(address, currency, socket) {
    this.address = address;
    this.currency = currency;
    this.socket = socket;
    this.balance = 0;
  }
  sendTransaction(connctns, client) {
    const giver = connctns.filter((item) => item.address === client.fromAddress),
      receiver = connctns.filter((item) => item.address === client.toAddress);
    // check if currencies match
    // and update balances
    if(giver[0].currency === receiver[0].currency){
      giver[0].balance = giver[0].balance - client.amount;
      receiver[0].balance = receiver[0].balance + client.amount;
    }

    giver[0].socket.emit('sendFunds', {"amountSent": client.amount, "currency": giver[0].currency, "address": giver[0].address});
    receiver[0].socket.emit('receivedFunds', {"balance": receiver[0].balance, "currency": receiver[0].currency, "address": receiver[0].address});
  }
  checkBalance(connctns, addr) {
    let trustline = connctns.filter(item => item.address === addr);
    return trustline[0].socket.emit('balance', {"balance": trustline[0].balance, "currency": trustline[0].currency});
  }
}
