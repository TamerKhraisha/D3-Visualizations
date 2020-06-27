# D3.js Visualizations
<a href="https://d3js.org"><img src="https://d3js.org/logo.svg" align="left" hspace="10" vspace="6"></a>

**D3** (or **D3.js**) is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML. D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the full capabilities of modern browsers and the freedom to design the right visual interface for your data.

This repository contains a collection of data visualizations and data-driven design ideas using D3.js.

All visualizations in D3.js using v3 and v4.



## Local testing

Note that if you want to test these visualizations on your local machine, then you are likely to run into CORS policy issues which will prevent the visualization from being displayed correctly. This happens for example when a script tries to access a file using the local file system. My suggestion is to run a Python simple local server according to the following steps:

- Pull the repository
- cd to the folder D3-Visualizations
- Run a simple local HTTP server using Python
   - Make sure you install Python
   - Check the Python version you have (type "python -V" into a terminal)
   - If Python version returned above is 3.X -> run "python3 -m http.server"
   - If Python version returned above is 2.X -> run "python -m SimpleHTTPServer"


More information on how to set up a local server: https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
