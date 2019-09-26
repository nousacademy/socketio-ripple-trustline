# NodeJS / Socket.io Trustline
- [x] A “trustline” is a way to keep track of debt between two parties.
- [x] Each user should interact with a separate instance of the program that keeps track of the trustline balance
- [x] The trustline services should communicate directly with one another, not through a central server or intermediary
- [x] State does not have to persist between sessions


- [x] Write a program that implements a trustline
- [x] and exposes an interface (such as an API or interactive shell) for a user to interact with the trustline.
- [x] Each user will run a separate instance of the service
- [x] and once both processes are started, each user should be able to
- [x] send money to the other and view their own balance.


Using Node.js version v10.15.3

- Download or clone repository
- cd into the `trustline` directory
- Run command `npm install` in terminal
- In (one) terminal session, run the command `node trustline.js` in terminal
- Open (second) terminal session and run the command `node start-trustline.js 3BC51062973C458D5A6F2D8D64A023246354AD7E064B1E4E009EC8A0699A3043 XRP` in the terminal
- Open (third) terminal session and run the command `node start-trustline.js CD9FB1E148CCD8442E5AA74904CC73BF6FB54D1D54D333BD596AA9BB4BB4E961 XRP`
- In the second terminal session type `balance` and press ENTER, to view the balance set in the Trustline for Alice
- In the third terminal session type `balance` and press ENTER, to view the balance set in the Trustline for Bob
- Go to second terminal session and type `send transfer for 10 xrp CD9FB1E148CCD8442E5AA74904CC73BF6FB54D1D54D333BD596AA9BB4BB4E961`
- View terminal logs for updated output
- In the second terminal session type `balance` and press ENTER, to view the updated balance set in the Trustline for Alice
- In the third terminal session type `balance` and press ENTER, to view the updated balance set in the Trustline for Bob

- When done press `CTRL + C` to quit all processes

3BC51062973C458D5A6F2D8D64A023246354AD7E064B1E4E009EC8A0699A3043 : SHA-256 encrypted for "Alice"
CD9FB1E148CCD8442E5AA74904CC73BF6FB54D1D54D333BD596AA9BB4BB4E961 : SHA-256 encrypted for "Bob"
