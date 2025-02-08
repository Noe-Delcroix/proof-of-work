var ValidatorHandler = function ValidatorHandler(){

  var self = this;

  this.calculateHash = calculateHash;
  this.generateProof = generateProof;

  function calculateHash(chain){
    console.log("calculateHash");
    console.log(transaction);

    var transaction = chain.transaction[0];
    var timestamp = chain.timestamp;
    
    if(!transaction || transaction.sender === undefined || transaction.receiver === undefined){
      return false;
    }

    return generateHashFromString(""+transaction.sender)+"-"+generateHashFromString(transaction.receiver)+"-"+generateHashFromString(""+timestamp);
  }

  function generateProof(transaction){
    if (!transaction || transaction.sender === undefined || !transaction.receiver || transaction.amount === undefined) {
        return false;
    }

    console.log("grocaca");
    if(transaction.sender === 0){
      return generateIntegerFromAddress(transaction.receiver) * parseFloat(transaction.amount);
    }
    return Math.abs(generateIntegerFromAddress(transaction.sender)-generateIntegerFromAddress(transaction.receiver)) * parseFloat(transaction.amount);
  }

  function generateHashFromString(string){
    var hex, i;
    var result = "";
    for (i=0; i<string.length; i++) {
      hex = string.charCodeAt(i).toString(16);
      result += ("0"+hex).slice(-4);
    }
    return result;
  }

  function generateIntegerFromAddress(address){
    return parseInt(address.match(/[0-9]+/g).join(""));
  }

  if(ValidatorHandler.caller != ValidatorHandler.getInstance){
    throw new Error("This object cannot be instanciated");
  }

};


ValidatorHandler.instance = null;
ValidatorHandler.getInstance = function(){
  if(this.instance === null){
    this.instance = new ValidatorHandler();
  }
  return this.instance;
};

module.exports = ValidatorHandler.getInstance();
