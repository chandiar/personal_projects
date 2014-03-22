// Constructor syntax

// Constructor notation
var ClassName = function (arg1, arg2){
  this.prop1 = arg1;
  this.prop2 = arg2;
  // private property
  var prop3 = "prop3";
  this.method1 = function(arg1, arg2){
    // Do something
  };
}

// Literal notation: {}
var object_name = {
  prop1: "prop1",
  prop2: "prop2",
  method1: function (arg1, arg2) {
    // Do something
  }
};


// NOTE: you don't need 'this' when returning
// a private variable inside a method.


// Instantiate a class: create an object
var object = new ClassName("prop1", "prop2");

// Dot-notation to access object's properties and methods
object.method1("arg1", "arg2");
object.prop1;
