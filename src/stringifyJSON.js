// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
function getLinebreak(){
  if(navigator.userAgent.indexOf("Windows") != -1){
    return "\r\n";
  }
  return "\n";
}
var stringifyJSON = function(obj) {
  
};
