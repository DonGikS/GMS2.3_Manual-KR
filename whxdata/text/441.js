rh._.exports({"0":["Runtime Functions"],"1":["Runtime Functions"],"2":["functions,built-in functions"],"3":["\n  ","\n  ","\n  ","The general definition of a function is something like this:","\n  ","A function has an input and an output, and the output is related somehow to the input.","\n  ","In GameMaker Studio 2 this translates into two different things, but they both work the same way:","\n  ","\n    ","Runtime Functions"," - A ","runtime"," function is one that is supplied as part of the ","GameMaker Language"," (GML). These are built in to the language and can be used to make things happen in your games and there are a great number of GML\n      runtime functions available to you, all of which are explained in the ","Language Reference"," section of the manual.","\n    ","Script Functions And Methods ","- ","Script ","functions and ","M","ethod Variables"," are functions that you have created yourself using the basic building blocks of the ","GameMaker Language"," (GML), and these can include runtime\n      functions as part of their code.","\n  ","\n  ","In both of the above cases a function has the form of a function ","name",", followed by the ","input ","argument","s"," between brackets ","()"," and separated\n    by commas (if the function has no input arguments then just brackets are used). This page concentrates on the ","runtime functions"," (ie: the ones that are built-in to GameMaker to form the GameMaker Language), but the general rules shown\n    below follow for all function types.","\n  ","Here is an outline of the structure of a function:","\n  ","<function>(<arg0>, <arg1> ,... <argN>);","\n  ","Some functions can return values and can be used in ","expression","s",", while others simply execute commands, as illustrated in the following two runtime function\n    examples:","\n  ","// Destroy the calling instance"," // This requires no arguments and returns nothing"," instance_destroy();\n    ","\n    "," // Get the distance from the current instance position to the mouse position"," // This takes four arguments and returns a real value"," dist = point_distance(x, y, mouse_x, mouse_y);","\n  ","Sometimes the return value of a function may be a value that you want to use in an ","assignment",", but you should note that it is impossible to use any function ","directly"," as the left-hand\n    side of an assignment. For example, the following code to set the speed on an instance would give you an error:","\n  ","instance_nearest(x, y, obj).speed = 0;","\n  ","The return value for the expression in that code example is an integer number (the unique ID value for the nearest instance) and so it must be enclosed in brackets to be used in this way and properly address the instance required (see ","Addressing Variables In Other Instances","    for more information). The above code would be correctly written as:","\n  ","(instance_nearest(x, y, obj)).speed = 0;","\n    "," //or more correctly still","\n    "," var inst = instance_nearest(x, y, obj);"," inst.speed = 0;","\n  ","The ","Language Reference"," section of the manual lists all of the runtime functions available to you and gives examples of how they can be used as well as other important information about what they may return\n    or any events that they may trigger, etc... For more information on user defined script functions and methods, see the section on ","Script Functions"," and the section on ","Method Variables",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Commenting Code","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Runtime Functions"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"441"})