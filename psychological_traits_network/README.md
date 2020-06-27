# Psychological-Traits-Network

This repository contains the code used to visualize the network of associations between psychological attributes, available at this webpage http://www.tamerkhraisha.com/Post10.html .

Six files are needed to run the visualization:

1- index.html : this is the main html code that visualizes the graph.

2- BigScreen.js : this is the actual D3 code that produces the visualization and it is called big because it will read by index.html if the minimum resolution of your screen is 1367px.

3- SmallScreen.js : the same as BigScreen.js but with the only difference that it contains some styling that is fit for screens with resolution smaller than 1367px.

4- Data.json : this is the network data used to create the network in BigScreen.js or SmallScreen.js.

5- StyleSrebVis.css : this contain the CSS stylig of the html page

6- Two background images, one for big screens (>=1367px) and the other for smaller screen (<1367px).




Interested users can take the code and adapt it to their needs, however the data included in Data.json is confidential and therefore cannot be used without the permission of the author (please send an email to sreb.letina@gmail.com ).

For more information on the visualization or advise on creating interactive visualizations please contact me on : tamer.khraisha2@gmail.com
