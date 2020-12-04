# LHL Final Project

This was created as the final project for Lighthouse Labs Web Development Bootcamp.
 
A web application designed to target the need to schedule work groups within an organization. Wehave chosen a landscaping company as an example and tailored the features of the web applicationto the common requirements of the landscaping industry. The application can potentially be usedacross many different industries, because there’s a global need for scheduling and forming workgroups.
The default view when you click on a day is a list of all jobs for that day. Having a view of all jobs for a given day is really useful because it facilitates decision making. Each job is labelled with its name, the number of workers assigned to that job and the estimated time it will take. The user gets a snapshot of how each day looks like and can make decisions accordingly. 

New Job form can be accessed right from the main view and the user can easily find a spot for the new job in the calendar.

Clicking on Details or on any job in the calendar will display important information about that job. This information is only displayed upon request by clicking the section the user is interested in, for example, Customer information.  The Requirements section, is a list of all tasks related to the selected job, with the number of workers and amount of time required to complete it. This is valuable information that can be used for scheduling and costing estimates. The Difficulty value is used by the program to filter the list of employees and only look for workers with a certain skill level. Below, in the Assignments table, the names of the assigned workers are displayed with the date and time of the assignment.

This project has been created with Node, Express and PostgreSQL in the back-end, and React and Material UI in the front-end.

## Getting started
1. Install dependencies using the `npm install` command.
2. Start the web server from root directory using the `npm start` command.
3. Go to /react-front-end and use `npm start` command to serve the app at <http://localhost:4000/>.

## Deployed Version
<https://lighthouse-bootcamp-final.herokuapp.com/>

## Screenshots


