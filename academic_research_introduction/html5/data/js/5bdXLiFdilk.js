﻿window.globalProvideData('slide', '{"title":"Please wait as your data is saved 60 percent complete","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":12,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide12","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":35,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5bdXLiFdilk","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[]},"ActGrpOnAllTimelinesComplete":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[]},"ReviewInt_66UJagUoW90":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5yVV77Dy5Qi"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5bdXLiFdilk","typea":"var","valueb":"5gRdn4g1DkL","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5gRdn4g1DkL.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_66UJagUoW90"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5gRdn4g1DkL.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_66UJagUoW90"}]}]}]},"ReviewIntCorrectIncorrect_66UJagUoW90":{"kind":"actiongroup","actions":[]},"AnsweredInt_66UJagUoW90":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_66UJagUoW90"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_66UJagUoW90":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5yVV77Dy5Qi"},"enabled":{"type":"boolean","value":false}}]},"66UJagUoW90_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5qCL8Aq6Vww.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_66UJagUoW90"}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionPreviousSlide_5bdXLiFdilk":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"adjustvar","variable":"_player.StudentJournalTitle","operator":"set","value":{"type":"var","value":"_player.#JournalTitle"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5yVV77Dy5Qi.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5qCL8Aq6Vww"}],"elseActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"onallopentimelinescomplete","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnAllTimelinesComplete"}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontimelinecomplete","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6CcYhJeERXN.5ftTDs96tTt"}}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5lxEWeI7zd4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5lxEWeI7zd4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_66UJagUoW90","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_66UJagUoW90"}],"elseActions":[{"kind":"exe_actiongroup","id":"66UJagUoW90_CheckAnswered"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5bdXLiFdilk"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":250,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5yVV77Dy5Qi"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5gjR1xspQwh"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zc1oL5j4De"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fYD3mXpudr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MurF3B1Uob"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MurF3B1Uob.5tB9YnIB0At"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MurF3B1Uob.5xUEs67Yzmo"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5vYUvlFrXpx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5vYUvlFrXpx.5WYepWynU4Y"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5vYUvlFrXpx.6EEI9oPmvc2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5vYUvlFrXpx.5k6pCqlmD7j"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5vYUvlFrXpx.5t7RGg5LMDr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5vYUvlFrXpx.6IktxIHdIL2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.5dTIL3u6AEc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.6R0OMVxJHFN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.60loNAC6TDV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.6o6tjR105Rd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.60pP9Ztng5t"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.6FA6PBlvlH2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.6QnrBQbLHs7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.6MFUhc5HZDA.6RYPOvQIWNn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5x74GhbSquQ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5x74GhbSquQ.6K2Tk2ldkjc"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5x74GhbSquQ.66o1VfnPi2N"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LDuJYvmfLv.5x74GhbSquQ.5voemzNyRNq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xCduLVnuVt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Sh6cOvdvXT"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.StudentJournalTitle","align":"left","verticalAlign":"center","rtl":false,"numeric":false,"multiline":false,"maxchars":256,"placeholder":"type your text here","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Articulate Charset0_v8MBBDD1F1C","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":740,"yPos":78,"tabIndex":3,"tabEnabled":false,"referenceName":"5yVV77Dy5Qi","xOffset":0,"yOffset":0,"rotateXPos":323.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5yVV77Dy5Qi","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":628,"height":30,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":142,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":162}}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":30,"strokewidth":1}},"width":648,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":649,"bottom":31,"altText":"","pngfb":false,"pr":{"l":"Lib","i":161}}},"id":"5yVV77Dy5Qi","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.StudentJournalTitle","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.5qCL8Aq6Vww"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5gjR1xspQwh_1464315695","id":"01","linkId":"txt__default_5gjR1xspQwh","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":30,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:left;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Articulate Charset0_v8MBBDD1F1C\',\'Articulate\'; font-size:24.6667px; color:#000000;line-height:28.5393333333333px;\\">Journal Title</span></p>","vectortext":{"left":0,"top":0,"right":155,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":182}}}],"shapemaskId":"","xPos":740,"yPos":22,"tabIndex":1,"tabEnabled":false,"referenceName":"5gjR1xspQwh","xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":40,"altText":"","pngfb":false,"pr":{"l":"Lib","i":163}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":40,"strokewidth":0}},"width":648,"height":40,"resume":true,"useHandCursor":true,"id":"5gjR1xspQwh"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":11,"id":"01","url":"story_content/5nNDJBtsQ2c.png","type":"normal","altText":"","width":1440,"height":1091,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":24,"yPos":-32,"tabIndex":0,"tabEnabled":false,"referenceName":"5zc1oL5j4De","xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":307,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":614,"altText":"","pngfb":false,"pr":{"l":"Lib","i":58}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":614,"strokewidth":0}},"width":720,"height":614,"resume":true,"useHandCursor":true,"id":"5zc1oL5j4De"},{"kind":"vectorshape","rotation":343.61,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":30,"id":"01","url":"story_content/6qpwED7nwbO.png","type":"normal","altText":"","width":558,"height":244,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":89,"yPos":249,"tabIndex":28,"tabEnabled":false,"referenceName":"6fYD3mXpudr","xOffset":0,"yOffset":0,"rotateXPos":186.5,"rotateYPos":81.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":373,"bottom":163,"altText":"","pngfb":false,"pr":{"l":"Lib","i":167}},"html5data":{"xPos":0,"yPos":0,"width":373,"height":163,"strokewidth":0}},"width":373,"height":163,"resume":true,"useHandCursor":true,"id":"6fYD3mXpudr"},{"kind":"objgroup","objects":[{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":6,"tabEnabled":false,"referenceName":"5tB9YnIB0At","xOffset":0,"yOffset":0,"rotateXPos":200.5,"rotateYPos":200.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":401,"bottom":401,"altText":"","pngfb":false,"pr":{"l":"Lib","i":168}},"html5data":{"xPos":0,"yPos":0,"width":401,"height":401,"strokewidth":0}},"width":401,"height":401,"resume":true,"useHandCursor":true,"id":"5tB9YnIB0At"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":41,"yPos":44,"tabIndex":7,"tabEnabled":false,"referenceName":"5xUEs67Yzmo","xOffset":0,"yOffset":0,"rotateXPos":157.5,"rotateYPos":157.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":317,"bottom":317,"altText":"","pngfb":false,"pr":{"l":"Lib","i":169}},"html5data":{"xPos":-1,"yPos":-1,"width":318,"height":318,"strokewidth":1}},"width":316,"height":316,"resume":true,"useHandCursor":true,"id":"5xUEs67Yzmo"}],"accType":"text","altText":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"referenceName":"6MurF3B1Uob","xOffset":0,"yOffset":0,"rotateXPos":200.5,"rotateYPos":200.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":401,"height":401,"resume":true,"useHandCursor":true,"id":"6MurF3B1Uob","actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]}}},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":16,"tabIndex":21,"tabEnabled":false,"referenceName":"5WYepWynU4Y","xOffset":0,"yOffset":0,"rotateXPos":8,"rotateYPos":8,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":17,"bottom":16,"altText":"","pngfb":false,"pr":{"l":"Lib","i":170}},"html5data":{"xPos":0,"yPos":0,"width":17,"height":16,"strokewidth":0}},"width":16,"height":16,"resume":true,"useHandCursor":true,"id":"5WYepWynU4Y"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":32,"yPos":16,"tabIndex":22,"tabEnabled":false,"referenceName":"6EEI9oPmvc2","xOffset":0,"yOffset":0,"rotateXPos":8,"rotateYPos":8,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":16,"bottom":16,"altText":"","pngfb":false,"pr":{"l":"Lib","i":170}},"html5data":{"xPos":0,"yPos":0,"width":16,"height":16,"strokewidth":0}},"width":16,"height":16,"resume":true,"useHandCursor":true,"id":"6EEI9oPmvc2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":40,"yPos":40,"tabIndex":24,"tabEnabled":false,"referenceName":"5k6pCqlmD7j","xOffset":0,"yOffset":0,"rotateXPos":8,"rotateYPos":8,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":16,"bottom":16,"altText":"","pngfb":false,"pr":{"l":"Lib","i":170}},"html5data":{"xPos":0,"yPos":0,"width":16,"height":16,"strokewidth":0}},"width":16,"height":16,"resume":true,"useHandCursor":true,"id":"5k6pCqlmD7j"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":80,"yPos":0,"tabIndex":20,"tabEnabled":false,"referenceName":"5t7RGg5LMDr","xOffset":0,"yOffset":0,"rotateXPos":8,"rotateYPos":8,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":16,"bottom":16,"altText":"","pngfb":false,"pr":{"l":"Lib","i":170}},"html5data":{"xPos":0,"yPos":0,"width":16,"height":16,"strokewidth":0}},"width":16,"height":16,"resume":true,"useHandCursor":true,"id":"5t7RGg5LMDr"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":88,"yPos":32,"tabIndex":23,"tabEnabled":false,"referenceName":"6IktxIHdIL2","xOffset":0,"yOffset":0,"rotateXPos":8,"rotateYPos":8,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":16,"bottom":16,"altText":"","pngfb":false,"pr":{"l":"Lib","i":170}},"html5data":{"xPos":0,"yPos":0,"width":16,"height":16,"strokewidth":0}},"width":16,"height":16,"resume":true,"useHandCursor":true,"id":"6IktxIHdIL2"}],"accType":"text","altText":"","shapemaskId":"","xPos":134,"yPos":257,"tabIndex":8,"tabEnabled":false,"referenceName":"5vYUvlFrXpx","xOffset":0,"yOffset":0,"rotateXPos":52,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"width":104,"height":56,"resume":true,"useHandCursor":true,"id":"5vYUvlFrXpx","actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]}}},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":9,"tabEnabled":false,"referenceName":"5dTIL3u6AEc","xOffset":0,"yOffset":0,"rotateXPos":88,"rotateYPos":88,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":177,"bottom":177,"altText":"","pngfb":false,"pr":{"l":"Lib","i":171}},"html5data":{"xPos":0,"yPos":0,"width":177,"height":177,"strokewidth":0}},"width":176,"height":176,"resume":true,"useHandCursor":true,"id":"5dTIL3u6AEc"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":40,"yPos":24,"tabIndex":11,"tabEnabled":false,"referenceName":"6R0OMVxJHFN","xOffset":0,"yOffset":0,"rotateXPos":12,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":24,"bottom":24,"altText":"","pngfb":false,"pr":{"l":"Lib","i":172}},"html5data":{"xPos":0,"yPos":0,"width":24,"height":24,"strokewidth":0}},"width":24,"height":24,"resume":true,"useHandCursor":true,"id":"6R0OMVxJHFN"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":24,"yPos":72,"tabIndex":13,"tabEnabled":false,"referenceName":"60loNAC6TDV","xOffset":0,"yOffset":0,"rotateXPos":12,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":25,"bottom":24,"altText":"","pngfb":false,"pr":{"l":"Lib","i":172}},"html5data":{"xPos":0,"yPos":0,"width":25,"height":24,"strokewidth":0}},"width":24,"height":24,"resume":true,"useHandCursor":true,"id":"60loNAC6TDV"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":75,"yPos":88,"tabIndex":15,"tabEnabled":false,"referenceName":"6o6tjR105Rd","xOffset":0,"yOffset":0,"rotateXPos":10,"rotateYPos":10,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":20,"bottom":20,"altText":"","pngfb":false,"pr":{"l":"Lib","i":173}},"html5data":{"xPos":0,"yPos":0,"width":20,"height":20,"strokewidth":0}},"width":20,"height":20,"resume":true,"useHandCursor":true,"id":"6o6tjR105Rd"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":59,"yPos":128,"tabIndex":16,"tabEnabled":false,"referenceName":"60pP9Ztng5t","xOffset":0,"yOffset":0,"rotateXPos":10,"rotateYPos":10,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":20,"bottom":20,"altText":"","pngfb":false,"pr":{"l":"Lib","i":173}},"html5data":{"xPos":0,"yPos":0,"width":20,"height":20,"strokewidth":0}},"width":20,"height":20,"resume":true,"useHandCursor":true,"id":"60pP9Ztng5t"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":94,"yPos":8,"tabIndex":10,"tabEnabled":false,"referenceName":"6FA6PBlvlH2","xOffset":0,"yOffset":0,"rotateXPos":12,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":24,"bottom":24,"altText":"","pngfb":false,"pr":{"l":"Lib","i":172}},"html5data":{"xPos":0,"yPos":0,"width":24,"height":24,"strokewidth":0}},"width":24,"height":24,"resume":true,"useHandCursor":true,"id":"6FA6PBlvlH2"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":78,"yPos":56,"tabIndex":12,"tabEnabled":false,"referenceName":"6QnrBQbLHs7","xOffset":0,"yOffset":0,"rotateXPos":12,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":24,"bottom":24,"altText":"","pngfb":false,"pr":{"l":"Lib","i":172}},"html5data":{"xPos":0,"yPos":0,"width":24,"height":24,"strokewidth":0}},"width":24,"height":24,"resume":true,"useHandCursor":true,"id":"6QnrBQbLHs7"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":138,"yPos":72,"tabIndex":14,"tabEnabled":false,"referenceName":"6RYPOvQIWNn","xOffset":0,"yOffset":0,"rotateXPos":10,"rotateYPos":10,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":20,"bottom":20,"altText":"","pngfb":false,"pr":{"l":"Lib","i":173}},"html5data":{"xPos":0,"yPos":0,"width":20,"height":20,"strokewidth":0}},"width":20,"height":20,"resume":true,"useHandCursor":true,"id":"6RYPOvQIWNn"}],"accType":"text","altText":"","shapemaskId":"","xPos":110,"yPos":81,"tabIndex":25,"tabEnabled":false,"referenceName":"6MFUhc5HZDA","xOffset":0,"yOffset":0,"rotateXPos":88,"rotateYPos":88,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"width":176,"height":176,"resume":true,"useHandCursor":true,"id":"6MFUhc5HZDA","actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]}}},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":20,"tabIndex":19,"tabEnabled":false,"referenceName":"6K2Tk2ldkjc","xOffset":0,"yOffset":0,"rotateXPos":31,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":63,"bottom":56,"altText":"","pngfb":false,"pr":{"l":"Lib","i":174}},"html5data":{"xPos":0,"yPos":0,"width":63,"height":56,"strokewidth":0}},"width":62,"height":56,"resume":true,"useHandCursor":true,"id":"6K2Tk2ldkjc"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":6,"yPos":0,"tabIndex":17,"tabEnabled":false,"referenceName":"66o1VfnPi2N","xOffset":0,"yOffset":0,"rotateXPos":31,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":63,"bottom":56,"altText":"","pngfb":false,"pr":{"l":"Lib","i":174}},"html5data":{"xPos":0,"yPos":0,"width":63,"height":56,"strokewidth":0}},"width":62,"height":56,"resume":true,"useHandCursor":true,"id":"66o1VfnPi2N"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":37,"yPos":4,"tabIndex":18,"tabEnabled":false,"referenceName":"5voemzNyRNq","xOffset":0,"yOffset":0,"rotateXPos":31,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":63,"bottom":56,"altText":"","pngfb":false,"pr":{"l":"Lib","i":174}},"html5data":{"xPos":0,"yPos":0,"width":63,"height":56,"strokewidth":0}},"width":62,"height":56,"resume":true,"useHandCursor":true,"id":"5voemzNyRNq"}],"accType":"text","altText":"","shapemaskId":"","xPos":190,"yPos":197,"tabIndex":26,"tabEnabled":false,"referenceName":"5x74GhbSquQ","xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":38,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"width":99,"height":76,"resume":true,"useHandCursor":true,"id":"5x74GhbSquQ","actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]}}}],"accType":"text","altText":"","shapemaskId":"","xPos":367,"yPos":191,"tabIndex":4,"tabEnabled":false,"referenceName":"6LDuJYvmfLv","xOffset":0,"yOffset":0,"rotateXPos":200.5,"rotateYPos":200.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"width":401,"height":401,"resume":true,"useHandCursor":true,"id":"6LDuJYvmfLv","actionGroups":{"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"_children.ActGrpClearHoverState"}]}}},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5xCduLVnuVt_1174913392","id":"01","linkId":"txt__default_5xCduLVnuVt","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":515,"height":132,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\\"text-align:left;direction: ltr; padding-left: 0px\\"><span style=\\"font-family: \'Articulate Charset0_v8MBBDD1F1C\',\'Articulate\'; font-size:37.3333px; color:#000000;line-height:64.792px;\\">Please wait one moment while your data is submitted!</span></p>","vectortext":{"left":0,"top":0,"right":516,"bottom":115,"pngfb":false,"pr":{"l":"Lib","i":166}}}],"shapemaskId":"","xPos":144,"yPos":54,"tabIndex":2,"tabEnabled":false,"referenceName":"5xCduLVnuVt","xOffset":0,"yOffset":0,"rotateXPos":268,"rotateYPos":71,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":536,"bottom":142,"altText":"","pngfb":false,"pr":{"l":"Lib","i":165}},"html5data":{"xPos":0,"yPos":0,"width":536,"height":142,"strokewidth":0}},"width":536,"height":142,"resume":true,"useHandCursor":true,"id":"5xCduLVnuVt"},{"kind":"vectorshape","rotation":96.509,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":12,"id":"01","url":"story_content/5yhcFSOhw1N.png","type":"normal","altText":"","width":193,"height":224,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-22,"yPos":368,"tabIndex":29,"tabEnabled":false,"referenceName":"6Sh6cOvdvXT","xOffset":0,"yOffset":0,"rotateXPos":96.5,"rotateYPos":112,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":193,"bottom":224,"altText":"","pngfb":false,"pr":{"l":"Lib","i":175}},"html5data":{"xPos":0,"yPos":0,"width":193,"height":224,"strokewidth":0}},"width":193,"height":224,"resume":true,"useHandCursor":true,"id":"6Sh6cOvdvXT"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"66UJagUoW90_CorrectReview","id":"01","linkId":"66UJagUoW90_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":401,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":177}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":30,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":176}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"66UJagUoW90_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"66UJagUoW90_IncorrectReview","id":"01","linkId":"66UJagUoW90_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":408,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":179}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":31,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":178}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"66UJagUoW90_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');