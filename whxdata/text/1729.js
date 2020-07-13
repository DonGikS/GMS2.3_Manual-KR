rh._.exports({"0":["Data Structures"],"2":["Data Structures"],"3":["\n  ","\n  ","\n  ","In games you often need to store information in a precise and ordered way. For example, you may need to store lists of items that a person carries or you may want to store a grid of places that still need to be visited. Now, you ","can"," use the arrays\n    for this, but if you want to do more complicated operations, like sorting the data or searching for a particular item, you need to write large pieces of GML code which can be slow to execute, difficult to debug and a real pain to write!","\n  ","To remedy this, GameMaker Studio 2 has a number of built-in ","data structures"," that can be accessed through specialist functions. There are six different types of data structure available, each one having its own benefits depending on the\n    type of information that you are looking to store and how you wish to manipulate it later: stacks, queues, lists, maps, priority queues, and grids.","\n  ","Essentially, all data structures work in the same way - You create a data structure and store its ","index value"," in a variable. You then use this index to reference the data structure in all further function calls that can perform operations on\n    it. Finally, once you are done you destroy the data structure again to remove it from memory. You can use as many of the structures at the same time as you need, and all structures can store any of the available ","data types",".","\n  ","NOTE: ","As with all dynamic resources, data structures take up memory and so should ","always"," be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that different data structures can have the ","same"," index value, so if in doubt you should be using the ","ds_exists","    function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards, and we recommend that you set any variable that holds a DS index to -1 after having destroyed\n    the data structure.","\n  ","Information on the different data structures can be found in the following sections:","\n  "," ","\n  ","\n    ","Grids","\n    ","Lists","\n    ","Maps","\n    ","Priority Queues","\n    ","Queues","\n    ","Stacks","\n  ","\n  "," ","\n  ","Before using data structures in your game, you should also be aware that there are certain moments when, due to rounding errors, you may get a result that is not what you expected. This may be resolved by changing the DS precision using the following\n    function:","\n  "," ","\n  ","\n    ","ds_set_precision","\n  ","\n  "," ","\n  ","There is also a special function for checking to see whether a data structure of any given type exists:","\n  "," ","\n  ","\n    ","ds_exists","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Reference","\n        ","Next: ","Strings","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Data Structures"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1729"})