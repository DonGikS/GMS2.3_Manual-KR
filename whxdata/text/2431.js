rh._.exports({"0":["buffer_decompress"],"1":["buffer_decompress"],"2":["buffer_decompress"],"3":["\n  ","\n  ","\n  ","With this function you can decompress a previously compressed buffer using ","zlib compression",". You supply the buffer ID to decompress, and the function will return a new buffer ID that contains the uncompressed\n    data. If the decompression has failed (for example, you are supplying a buffer that hasn't been compressed) then the function will instead return a value less than 0.","\n  "," ","\n  ","\n  ","buffer_decompress(buffer);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to decompress.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Buffer ID","\n  "," ","\n  ","\n  ","var cmpBuff = buffer_load(\"Player_Save.sav\");"," var srcBuff = buffer_decompress(cmpBuff);"," global.DataString = buffer_read(srcBuff, buffer_string);","\n  ","The above code will first load a saved buffer, then decompress it and finally read the string data from the decompressed buffer into a global variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_async_group_begin","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_decompress"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2431"})