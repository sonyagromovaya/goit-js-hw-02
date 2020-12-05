"use strict";
const spam = "spam";
const sale = "sale";

const checkForSpam = function(message) {
    const messagelowerCase = message.toLowerCase();
    if(messagelowerCase.includes( 'spam') || messagelowerCase.includes('sale')){
        return true;
    };
    return false;
  };
  

  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true