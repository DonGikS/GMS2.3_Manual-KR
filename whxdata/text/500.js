rh._.exports({"0":["array_get"],"1":["array_get"],"2":["array_get"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve the value from an index in an array. The function requires you to provide a variable that holds the array and the index to get the value from within that array. Note that if the array index given is out of bounds\n    then the game will crash with an error. This function can also be used for multi-dimension arrays, as long as you specify which dimension you want to get when you supply the array index, following this pattern:","\n  ","// 1D array"," array_get(my_array, 0);"," // 2D array"," array_get(my_array[0], 0);"," // 3D array"," array_get(my_array[0][0], 0);"," // etc...","\n  "," ","\n  ","\n  ","array_get(variable, index);","\n  \n    ","\n      ","\n        ","\n          ","Argument","\n          ","Description","\n        ","\n        ","\n          ","variable","\n          ","The variable that holds the array.","\n        ","\n        ","\n          ","index","\n          ","The index of the array to get the value from.","\n        ","\n      ","\n    ","\n  \n  "," ","\n  ","\n  ","Any valid data type that an array can hold.","\n  "," ","\n  ","\n  ","for (var i = 0; i < 10; ++i;)","     {\n    ","     show_debug_message(array_get(my_array, i));","     }\n  ","\n  ","The above code will output the first 10 items of the given to the console.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","array_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["array_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"500"})