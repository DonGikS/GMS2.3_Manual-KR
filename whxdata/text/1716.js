rh._.exports({"0":["gamepad_hat_value"],"1":["gamepad_hat_value"],"2":["gamepad_hat_value"],"3":["\n\n\n\n  ","\n  ","\n  ","With this function you can get the current value of a gamepad \"hat\". Each hat value is a bit-mask for the different directions where:","\n  ","\n    ","Up = 1","\n    ","Right = 2","\n    ","Down = 4","\n    ","Left = 8","\n  ","\n  ","Note that these can be combined (for example, supplying a hat index of 3 would be checking up and right) but only at most 2 bits can be pressed at once. The function will return a real value between 0 and 1, where 0 is not pressed and 1 is fully pressed\n    (and there may be values in between depending on whether the gamepad supports analog input for hats).","\n  "," ","\n  ","\n  ","gamepad_hat_value(device, hatindex);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","hatindex","\n        ","Which gamepad hat (or hats) to check for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var _dir = gamepad_hat_value(global.PadIndex, 0);"," switch (_dir)","     {\n    ","     case 1: y -= 3; break;","     case 2: x += 3; break;","     case 3: y -= 3; x += 3; break;","     case 4: x -= 3; break;","     case 6: y += 3; x += 3; break;","     case 8: y += 3; break;","     case 9: y -= 3; x -= 3; break;","        case 12: y += 3; x -= 3; break;","     }\n  ","\n  ","The above code stores the state of the hat \"0\" in a local variable, then checks to see what the return value is and acts accordingly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: ","gamepad_get_mapping","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_hat_value"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1716"})