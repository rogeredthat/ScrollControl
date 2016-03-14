# ScrollControl
A library to implement scroll control in web pages.



Get Current Scroll Amount in the variable doc_ScrollCurrent.

Set Target Scroll Amount in the variable doc_ScrollTarget.

Bind new DOM elements to the scroll using 

getDOM([selector]).addControl({prop1:[from,to],prop2:[from,to]},[starting point in the page],[ending point in the page]);

Example:

getDOM("div").addControl({"opacity":[1,0.8]},1000,2000);
