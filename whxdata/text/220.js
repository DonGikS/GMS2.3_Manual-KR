rh._.exports({"0":["If Key Pressed"],"1":["DnD™ Action - If Key Pressed"],"2":["If Key Pressed Action"],"3":["\n  ","\n  ","\n  ","This action checks for the initial press on a keyboard key. It will return ","true"," on the single game step (frame) that the key is initially pressed down and ","false"," at all other times. If you enable the ","not"," modifier, this action\n    will be reversed, and check if the key has ","not"," been pressed down, returning ","false"," on the game step (frame) that it has been pressed down and ","true"," at all other times. If you need to check for a key being held down and not just\n    the initial press event, then use the action ","If Key Down",".","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","Any actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Key","\n        ","The name of the key to check.","\n      ","\n      ","\n        ","Not","\n        ","Negate the check (true becomes false and vice versa)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code polls the keyboard state every step and if a key is\n    being held down it checks for the initial key down press. If the check is ","true"," on the initial down press, a sound is played, then, while the key is held down, the sprite blending is changed to red. If the key is not being held down, a check\n    is done on the key release to reset the blending colour to white.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mouse And Keyboard Actions","\n        ","Next: ","If Keyboard Down","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Key Pressed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"220"})