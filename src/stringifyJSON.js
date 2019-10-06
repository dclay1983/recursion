// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {
  // Assign linebreak variable based on system
  var nl = navigator.userAgent.indexOf("Windows") != -1 ? "\r\n" : "\n";

  // assign primitives a simple stringify function
  var stringifyPrimitive = function (obj) {
    return typeof obj === "string" ? `"${obj}"` : `${obj}`
  }
  var stringifyArray = function (obj) {
    var result = "";
    obj.forEach( function (element) {
      result += `${stringifyJSON(element)},`;
    })
    return result;
  }
  var stringifyObject = function (obj) {
    var string = "";
    for (let key in obj) {
      var result = stringifyJSON(obj[key]);
      if (!(result === undefined)) {
        string += `"${key}":${result},`;
      }
    }
    return string;
  }
  // declare string to store stringified obj
  var stringified = "";
  // if obj is undefined or function return undefined
  if(obj === undefined || typeof obj === "function") {
    return undefined;
  } else if (!(obj instanceof Object)) {
    return stringifyPrimitive(obj);
  } else if (Array.isArray(obj)) {
    stringified += `[${stringifyArray(obj)}`;
    ;
    if (stringified[stringified.length - 1] === ",") {
      return stringified.slice(0, -1) + "]"
    }
    return stringified + "]"
  } else {
    stringified += `{${stringifyObject(obj)}`;
    if (stringified[stringified.length - 1] === ",") {
      return stringified.slice(0, -1) + "}"
    }
    return stringified + "}";
  }
  // determine what obj is and iterate through obj as needed

};
