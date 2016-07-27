var mongoose = require('mongoose');

/*
  Receive an ObjectId and validates it against mongoDb ObjectId
*/
var validateId = function(){
	var _isIdValid = function(id){
		try{
			var objId = new mongoose.Types.ObjectId(id);
      return objId == id; // You don't want the '===' comparison this time.
		}catch(err){
      // If an exception is thrown means that the given id couldn't be instantiated as a mongo ObjectId.
			return false;
		}
	}
	return {
		isIdValid: _isIdValid
	}
}();

module.exports = validateId;
