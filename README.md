# Loading styles/ components conditionally

This react app is loading two stylessheets, one is global while the other one is conditional which is only loaded in pageA. This can be acheived simply bu dynamically importing the stylesheet in the component itself and returning it along with the component. 

In page A the stylesheet is loaded along with the component.
In page B the stylesheet is loaded based on a flag DOM element.

Live URL: [https://dynamicstyleloading.netlify.app/](https://dynamicstyleloading.netlify.app/)