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

More documentation coming soon.
------------------------------