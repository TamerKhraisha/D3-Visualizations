# D3.js Visualizations

A collection of data visualizations and data-driven design ideas using D3.js.

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
