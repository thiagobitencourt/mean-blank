'use strict';
var BlankController = function() {

  var validateObjectId = require(__base + 'utils/validateObjectId');
  var _Blank = require(__base + 'models/blankModel');

  var controller = {
    save: save,
    remove: remove,
    update: update,
    retrieveAll: retrieveAll,
    retrieveOne: retrieveOne
  };
  return controller;

  function save(saveObj, callback) {
    var obj = _Blank(saveObj);
    obj.save(function(err, saved) {
      if(err) return callback(err);
      return callback(null, saved);
    });
  }

  function remove(objId, callback) {
    if(validateObjectId.isIdValid(objId)) {
      _Blank.findOne({_id: objId})
      .exec(function(err, obj) {
        if(err) return callback(err);
        obj.remove(function(err, del) {
          if(err) return callback(err);
          return callback(err, del);
        });
      })
    } else {
      return callback("Invalid ID");
    }
  }

  function update(objId, newObj, callback) {
    if(validateObjectId.isIdValid(objId)) {
      _Blank.findOne({_id: objId})
      .exec(function(err, obj) {
        if(err) return callback(err);
        for(var attr in newObj) {
          obj[attr] = newObj[attr];
        }
        obj.save(function(err, saved){
          if(err) return callback(err);

          return callback(null, saved);
        });
      });
    } else {
      return callback("Invalid ID");
    }
  }

  function retrieveAll(callback) {
    _Blank
      .find()
      .exec(function(err, all) {
        if (err) return callback(err);
        return callback(null, all);
      });
  }

  function retrieveOne(objId, callback) {
    if(validateObjectId.isIdValid(objId)) {
      _Blank
        .findOne({_id: objId})
        .exec(function(err, blank) {
          if(err) return callback(err);
          return callback(null, blank);
        });
    } else {
      return callback("Invalid ID");
    }
  }
}();

module.exports = BlankController;
