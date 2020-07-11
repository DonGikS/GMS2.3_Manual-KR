rh._.exports({"0":["Structs"],"1":["Structs"],"2":["structs,new,constructor,delete,struct"],"3":["\n  ","\n  ","\n  ","A ","struct ","is - to put it simply - a variable that holds a collection other variables. The variables that a struct holds can be of any ","data type"," previously mentioned and these variables can be read from and\n    written to after the initial struct declaration, and you can also add more variables to a struct after it has been declared. The variables used in a struct should follow conventional naming schemes, ie: they cannot start with a number and should only\n    be made up of alphanumeric characters and the underscore \"_\" character, and also note that the contents of a struct are ","independent of the instance or function that created it",", and as such you can - if you wish - use the built-in\n    variable names like ","image_index"," or ","x"," and ","y",".","\n  ","After the initial creation, structs have no processing overhead while they exist, although they ","will"," take up space in memory. The struct syntax is as follows:","\n  ","<variable>"," = {","\n    ","<variable>"," : ","<value>",",","\n    ","<variable>"," : ","<value>",",","     etc...\n    ","     };\n  ","\n  ","So, an example of this in practice would be:","\n  ","mystruct = {","     a : 20,","     b : \"Hello World\"","     };\n  ","\n  ","The above code creates an instance scope struct in the variable \"mystruct\" and populates it with some values (structs can be created at local, instance and global scope, just like any other variable - see the section on ","Variables and Variable Scope","    for more information). Note that you don't have to populate the contents of a struct when it is created initially and you can create an empty struct by simply doing this:","\n  ","mystruct = {};","\n  ","This struct can then be added to at a later point in the game code. Here is an example of a struct with various variables and data types:","\n  ","var _xx = 100;"," mystruct = {","     a : 10,","     b : \"Hello World\",","     c : int64(5),","     d : _xx + 50,","     e : function(a, b)","         {\n    ","         return a + b;","         },\n    ","     f : [ 10, 20, 30, 40, 50 ],","     g : image_index","     };\n  ","\n  ","You'll notice in the above code that you can also define methods and use runtime functions in structs, and you can also use local variables and instance variables within the struct.","\n  ","You'll notice in the above example that the struct variable \"g\" is being set to ","image_index",", which is an instance variable. You might think that you'd need to use the ","keyword","    ","other"," in this case to get the instance variable, but this is not necessary. Essentially, when you define struct",", all member variables on the left-hand side of the colon \":\" are the ","struct"," variables, and the values and variables on the right-hand side are from the scope of whatever it is ","that is doing the defining",".","\n  ","Let's look at a simple example to illustrate this. Say you want to define a struct with the variables \"x\" and \"y\" and you want to set them to the \"x\" and \"y\" of the instance defining the struct. In practice\n    the code would look like this:","\n  ","mystruct = {","     x : x,","     y : y","     };\n  ","\n  ","In the above code the struct member variables \"x\" and \"y\" are being set to the values held in the instance variables \"x\" and \"y\", since the right-hand of the colon \":\" refers to the instance that is\n    defining the struct. It is worth noting that this means you c","annot"," use struct member variables as part of the definition of other variables within the struct when it is being created. For example, the following would give you an error:","\n  ","mystruct = {","     a : 10,","     b : 10,","     c : a + b","     }","\n  ","The error occurs because the variables \"a\" and \"b\" are actually being evaluated at the scope of whatever is defining the struct (they are on the right of the colon \":\"), and are ","not"," the ones being defined within\n    the struct itself. ","\n  ","Once a struct has been defined, you can access the data within using the \"point\" notation, like this:","\n  ","mystruct = {","     a : 20,","     b : \"Hello World\"","     }\n    "," mystring = mystruct.b + string(mystruct.a);","\n  ","You can also perform operations on the variables within a structure or use them in functions, just as you would any other variable. For example:","\n  ","mystruct.a += 1;"," mystruct.b = mystruct.a + 20;"," mydir = point_direction(mouse_x, mouse_y, mystruct.xx, mystruct.yy);","\n  ","Finally, structs can have other structs nested inside of them, like this:","\n  ","mystruct = {","     a : {","         aa : \"This is an example\"","         },\n    ","     b : {","         bb : \"And another one\"","         },\n    ","     };\n  ","\n  ","To access such nested structs you would still use the point notation, like this:","\n  ","var _str = mystuct.a.aa + \" \" + mystruct.b.bb;"," show_debug_message(_str);\n  ","\n  ","When a struct is no longer required it can be removed from memory using the ","delete"," operator, which flags the struct as being able to be garbage collected. This is not strictly required as the ","garbage collector"," may do this automatically in the following game steps if the struct is no longer referenced in your code, but it is good practice to do so and we recommend it (for example, call ","delete","    in the ","Clean Up event"," of an instance to explicitly tell the garbage collector that an instance scope struct is to be deleted).","\n  ","Also note that structs can be created using ","script functions"," and ","methods",", which requires the use of the ","new"," operator and the keyword\n    ","constructor",", as shown in the following example:","\n  ","Vector2 = function(_x, _y) constructor","     {\n    ","     x = _x;","     y = _y;","     static Add = function( _other )","         {\n    ","         x += _other.x;","         y += _other.y;","         }\n    ","     }\n  ","\n  ","Here we are creating the function ","Vector2"," and telling GameMaker Studio 2 that this is a function for making a struct by adding the ","constructor"," keyword after the definition. You can then call this function like this:","\n  ","v1 = new Vector2(10, 10);","\n  ","Now the variable ","v1"," will reference a struct with the variables ","x"," and ","y"," and the ","method variable"," ","Add",". Structs created this way will also support single level ","inheritance",", ie:\n    you can create a struct using a function that inherits the data from another constructor function. For example, we created a ","Vector2"," function above, so we can then use that as the \"parent\" for another function ","Vector3",":","\n  ","function Vector3(_x, _y, _z) : Vector2(_x, _y) constructor","     {\n    ","     z = _z;","     static Add = function( _other )","         {\n    ","         x += _other.x;","         y += _other.y;","         z += _other.z;","         }\n    ","     }\n  ","\n  ","As you can see, when defining the function we use a colon \":\" to separate the new function from the \"parent\" function to be inherited from, and we can now do things like this:","\n  ","var v1 = new Vector3(10, 10, 20);"," var v2 = new Vector3(100, 100, 200);"," v1.Add(v2);\n    "," show_debug_message(v1);\n  ","\n  ","The output shown for the above code would be:","\n  ","{ 110, 110, 220 }","\n  ","For more details on the ","new"," and ","delete"," operators, please see the following pages:","\n  ","\n    ","new","\n    ","delete","\n      ","\n    ","\n  ","\n  ","One final thing to mention about structs is that you can change what is output to the console from them for debugging. By default, calling the function ","show_debug_message()"," on\n    a struct will output the contents of the struct (as shown above). However, it's possible to customise this message by adding a specifically named method to the struct called ","toString",":","\n  ","mystruct = {","     a : 20,","     b : \"Hello World\",","     toString: function()","         {","         return \"This stuct says \" + b + \", \" + string(a) + \" times!!!\";","         }","     }\n    "," show_debug_message(mystruct);\n  ","\n  ","Now when the ","show_debug_message()"," function is called, the ","toString"," method will be used to generate the output and - with the above example - you'll get:","\n  ","This struct says Hello World, 20 times!!!","\n  ","Note that you can also call the ","string()"," function on a struct reference and use that to display the contents - or the ","toString"," method - to the\n    screen, or save it to a file, or whatever, eg:","\n  ","var _str = string(mystruct);"," draw_text(32, 32, _str);","\n  ","Finally, there are a number of runtime functions that you can use on structs to get the variables they contain as well as a few other things. You can find them in the following section:","\n  ","\n    ","Variable Functions","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Language Features","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Structs"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"464"})