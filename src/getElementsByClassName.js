// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var checkElements = function (element) {
    if (element.firstElementChild) {
      checkElements(element.firstElementChild)
    }
    if (element.nextElementSibling) {
      checkElements(element.nextElementSibling)
    }
    if (className.test(element.getAttribute("class"))) {
      result.unshift(element);
    }
  }
  className = new RegExp("(^|\\s)" + className + "(\\s|$)");
  var result = [];
  var element = document.body;
  checkElements(element);
  return result;
};