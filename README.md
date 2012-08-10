Gauravity JS
===========

A library to make javascript inheritence simple.

Instant Gratification
---------------------
    Gauravity.define('CA.ui.Button',{
      initilize: function(){
         console.log("-> CA.ui.Button initilize"); 
      },
        properties: {
     		text: "Label",
     		width: 300,
     		height: 22,
     		border: 2,
     		backgroundColor: '0x000000',
     		foregroundColor: '0xFFFFFF'
   	  },
     	sayHello: function() {
     		return 'Button::sayHello() ' + this.text;
     	}
    });

    Gauravity.define('CA.ui.BackButton', {
      extend: 'CA.ui.Button',

      initilize: function(){
         console.log("-> CA.ui.BackButton initilize"); 
      },
      properties: {
        text: 'Back',
        backgroundColor: 'grey',
      },
      goodBye: function () {
        return 'Button::goodBye()';
      }
    });

API
------------------------------

### Gauravity.define([String namespace],[Object config]); ###

Define function is used to create an object with properties and functions is one 
single step. 

    Gauravity.define('CA.ui.Button',{
      initilize: function(){
         console.log("-> CA.ui.Button initilize"); 
      },
        properties: {
         	text: "Label",
     		width: 300,
     		height: 22,
     		border: 2,
     		backgroundColor: '0x000000',
     		foregroundColor: '0xFFFFFF'
   	  },
     	sayHello: function() {
     		return 'Button::sayHello() ' + this.text;
     	}
    });

In the above example we create an object called Button in a namespace that was 
created automatically for us. Then we defined an initilize function that gets
excecuted automaticacly then this object is created. 

We are also passing some properties related to this object and public function as 
sayHello();. All these properties and functions are added to the object and we 
can access the object these functions as CA.ui.Button.sayHello();

You can also implement inheritence by adding the extend keyword and Object name.

    Gauravity.define('CA.ui.BackButton', {
      extend: 'CA.ui.Button',

      initilize: function(){
         console.log("-> CA.ui.BackButton initilize"); 
      },
      properties: {
        text: 'Back',
        backgroundColor: 'grey',
      },
      goodBye: function () {
        return 'Button::goodBye()';
      }
    });

In the above example CA.ui.BackButton is inheriting all properties from 
CA.ui.Button and added its own properies as well. You can now access sayHello() 
function in BackButton now. 

    CA.ui.BackButton.sayHello();
    

### Gauravity.namespaces([String namespace],[Object option]); ###

The function will create an object namespace for you in one single step. You can 
also pass optional parameter for options if you want to create just a top level
object hierarchy.

    Gauravity.namespaces('CA.ui.Button');

This is create a namespace as CA -> ui -> Button

    Gauravity.namespaces('CA.ui.Navigation', {level: "TOP"});
    
This is create a namespace as CA -> ui


More documentation coming soon.
------------------------------