var validatorUtilities = require('./validator');

var ChainUtilities = function ChainUtilities(){

  var self = this;

  this.isValidChain = isValidChain;

  function isValidChain(chain){
    if (chain.length == 1) return true;
    
    if(chain.length>1){
      for (var i = 1; i < chain.length; i++) {
        var current = chain[i];
        var previous = chain[i-1];
        
        console.log(i);
        console.log("==================== Chain courrante [i] ====================");
        console.log(current);
        console.log("==================== Chain précédente [i-1] ====================");
        console.log(previous);

        
        console.log("==================== Vérif hash prev-current ====================");
        var lastBlockHash = validatorUtilities.calculateHash(previous);
        console.log(lastBlockHash);
        console.log(current.previousHash);

        if(lastBlockHash !== current.previousHash){
          return false;
        }

        var proof = validatorUtilities.generateProof(current.transaction[0]);
        console.log("==================== Vérif proof current ====================");
        console.log(proof);
        console.log(current.proof);

        if(proof !== current.proof){
          return false;
        }
      }
    }
    return true;
  }

  if(ChainUtilities.caller != ChainUtilities.getInstance){
		throw new Error("This object cannot be instanciated");
	}

};


ChainUtilities.instance = null;
ChainUtilities.getInstance = function(){
	if(this.instance === null){
		this.instance = new ChainUtilities();
	}
	return this.instance;
};

module.exports = ChainUtilities.getInstance();
