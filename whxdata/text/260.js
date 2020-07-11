rh._.exports({"0":["Draw Sprite"],"1":["DnD™ Action - Draw Sprite"],"2":["Draw Sprite"],"3":["\n  ","\n  ","\n  ","This action will draw a sprite somewhere in the room. You specify the sprite, the position (either an absolute position within the room, or a relative position to the instance doing the drawing) and the animation frame of the sprite, if it has multiple\n    frames (note that image frames are numbered from 0 upwards). If you have an animated sprite and you want it to draw the frames as if it was assigned to the object, then use -1 for the frame index or the built in instance variable ","image_index",",\n    but note that if the instance has no sprite assigned then it will not animate, and if the sprite assigned has a different number of frames to the one being drawn then the sprite will be drawn with extra frames or missed frames.","\n  ","IMPORTANT: ","This action will not draw the sprite transformed, even if you have changed the image blend or scale. For that see the action ","Draw Sprite Transformed",".","\n  ","NOTE",": This action is only for use in the various ","Draw Events",", and will not draw anything if used elsewhere.","\n  "," ","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Sprite","\n        ","The sprite to draw","\n      ","\n      ","\n        ","x","\n        ","The x position to draw at","\n      ","\n      ","\n        ","y","\n        ","The y position to draw at","\n      ","\n      ","\n        ","Frame Index","\n        ","The frame index to draw","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code draws a \"shadow\" sprite at the same relative position as the\n    instance, then draws the instance sprite over the top.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing Actions","\n        ","Next: ","Draw Sprite Transformed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Draw Sprite"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"260"})