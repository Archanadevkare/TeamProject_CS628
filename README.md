Project title: Employee Portal 
Course Number : CS628 - Full Stack Development II
Quarter and Year: Winter 2021
Team Name: T04
Team members: Archana Deepak Kumar ,Adrian Wilkinson, Hussein Mohamud, Kefan Yao

***** The latest code available in master branch****

**Instructions on How to Run Local**
Clone the project to local
Open the root project in terminal
Perform 'npm install'
The API will be available in localhost: 'http://localhost:4000/graphql
The UI will be available in localhost: 'http://localhost:3000/
Use the below sample for POST API for data creation
mutation addEmployee($employee : inEmployee!)
{ 
addEmployee(input:$employee)
}
in variables, give {"employee":{"empid":123,"fullName":"erzsf","address":"dfvxdgxf","age":12,"email":"dfzfd@gmail.com","phoneNumber":"fszdgfzdg"}} by changing the employee details
For UI, navigate to ui in the terminal and run the command 'npm run compile' and 'npm start'
Open localhost:3000 in your browser and you will be able to see the UI working
For API, navigate to api in the terminal and run the command 'npm start'
open localhost:4000/graphql and you will be able to see the api working
