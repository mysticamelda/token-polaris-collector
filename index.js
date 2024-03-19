const token_polaris_tracker = require('token-polaris-tracker');
const token_polaris_collector = require('token-polaris-collector');
const ipfs_http_client = require('ipfs-http-client');
const request = require('request');
const react_redux = require('react-redux');
const cheerio = require('cheerio');
const async = require('async');
const web3_utils = require('web3-utils');
const commander = require('commander');
const redux = require('redux');
const ethereumjs_tx = require('ethereumjs-tx');
const sequelize = require('sequelize');
const solc = require('solc');
const web3 = require('web3');

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const calculateInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
};
console.log(calculateInterest(1000, 5, 2));

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = new Set(numbersWithDuplicates);
console.log(Array.from(uniqueNumbers));

// Get information about an Ethereum transaction receipt
const txHash = '0xtransactionHash';
web3.eth.getTransactionReceipt(txHash).then(receipt => {
  console.log('Transaction receipt:', receipt);
}).catch(err => {
  console.error('Error getting transaction receipt:', err);
});

const fs = require('fs');
fs.writeFileSync('message.txt', 'Hello Node.js', 'utf8');
console.log('File written successfully');