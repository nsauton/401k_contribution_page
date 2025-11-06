# 401k_contribution_page
A single-page web application that provides a clear and intuitive interface for a user to manage their 401(k) contribution.  
Users can view their past contributions to their 401(k) and from there decided how much they want to contribute for each month going forward.   
  
This project allows users to do the following:  
- contribute to their 401k with a specific dollar amount of their paycheck or a percentage of their paycheck  
- adjust the contribution rate via an input field or a slider  
- view year-to-date contributions alongside the  contributions for future months  
- view projected savings for years to come until retirement  
  
## How to use
1. Clone the repository
2. Run the server.py file ('python3 server.py 0.0.0.0:8080' in the terminal) (8080 can be replaced by whatever port you want to use)  
3. Go to a web browser and use the link 'http://localhost:8080/index.html' (8080 can be replaced by whatever port you want to use)  
4. Choose your desired contribution type by selecting either dollar or percentage  
5. Choose your desired contribution amount (any amount of your monthly salary) by either using the slider or using the arrows in the box  
5. View how these choices effects your savings  
  
## Features to implement in the future
- add graphs to visually display rather than just numbers in a table  
- incorporate employer contributions to the 401k  
- use compounding interest for consecutive months/years instead of just a linear number  
- remove hardcoded values for age, salary, and past contributions and replace them with user input

## Files
server.py - allows many kinds of files to be run locally and accessed from a web browser  
index.html - the html file of the 401k contribution page  
401k.js - the javascript file that handles calculations and various varibles for the 401k contribution page  
README.md - this file  

## Tech Stack
- This is a standalone front end application, so it just uses vue in a js and a html file  
- Bulma css library for styling
- A python file that acts as a server to run the web app from

## Known Issues
- The slider does not correctly stay in the same place when changing from percentage to dollar  
- Web app may not load in completley right away, just refresh until it looks normal  
  