# 401k_contribution_page
A single-page web application that provides a clear and intuitive interface for a user to manage their 401(k) contribution  
  
This project allows users to do the following:  
- contribute to their 401k with a specific dollar amount of their paycheck or a percentage of their paycheck  
- adjust the contribution rate via an input field or a slider  
- view year-to-date contributions alongside the  contributions for future months  
- view projected savings for years to come until retirement  
  
## How to use
1. Clone the repository
2. Run the server.py file ('python3 server.py 0.0.0.0:8080' in the terminal)
3. Go to a web browser and use the link 'http://localhost:8080/index.html'
4. Choose your desired contribution type and amount and view how that effects your savings 
  
## Features to implement in the future
- add graphs to visually display rather than just numbers in a table  
- incorporate employer contributions to the 401k 
- use compounding interest for consecutive months/years instead of just a linear number  

## Files
server.py - allows many kinds of files to be run locally and accessed from a web browser  
index.html - the html file of the 401k contribution page  
401k.js - the javascript file that handles calculations and various varibles for the 401k contribution page  
README.md - this file  
  