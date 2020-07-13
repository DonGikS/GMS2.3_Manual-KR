rh._.exports({"0":["If Mouse Released"],"1":["DnD™ Action - If Mouse Released"],"2":["If Mouse Released"],"3":["\n  ","\n  ","\n  ","This action checks for when a mouse button has been released. It will return ","true"," on the single game step (frame) that the mouse button is released on and ","false"," at all other times. If you enable the ","not"," modifier, this action\n    will be reversed, and check if the mouse button has ","not"," been released, returning ","false"," on the game step (frame) that it has been released on and ","true"," at all other times.","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","\n  ","These actions will now be run if the \"if\" evaluates to ","true",", while any actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Mouse Button","\n        ","The name of the mouse button to check (left, middle, right).","\n      ","\n      ","\n        ","Not","\n        ","Negate the check (true becomes false and vice versa)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code polls the mouse button state every step and if it\n    is being held down it checks for the initial mouse down press. If the check is ","true"," on the initial down press the instance speed is set, then, while the button is down, the sprite blending is changed to red. If the mouse is not being held\n    down, a check is done on the mouse release to reset the blending colour to white and set the speed to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mouse And Keyboard Actions","\n        ","Next: ","If Keyboard Pressed"," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Mouse Released"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"219"})