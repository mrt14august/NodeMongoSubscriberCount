This mini project is a demonstration of use of Rest APIs with the help of mongoDB.
yes , it is a pre requisite that you have mongoDb installed in your PC or you know how to use mongo atlas

Here I have used cloud version of MongoDB and used its URL to connect with my App, 
there are plenty of tutorials on Youtube for connecting a node app to mongoDB atlas

for testing purpose i could use Postman but instead i used a plugin called RestClient and testing in VScode itself,
and created the testing file  TEstingAPI.REST and there are pre written endpoints for every functionality,
 you guys just change the value and play and if you want, can test in postman or any other app as well 

About Project and working: 
This project is covering a hypothetical scenario which 
1. Adds your subscriber(let's say youtube) into DataBase
2. Show all of your Subscriber's name at once 
3. Show any specific Subscribers' information (name, subscribedTo Channel, and date), but to get this, 
you will have to pass the _id gennerated by mongoDB into paramater
for example ->:
http://localhost:4001/subscriber/627f6060fcfa06725f518613 
where last parameter is the id of the subscriber
you can copy it, while creating the new subscriber (it returns all the information along with ID, so you can copy it and perform future operations)
4. Delete any specific subscriber (same thing, you'll have to pass the id of that subscriber)
5. Update any information of the subscriber(again pass the Id in parameter), then pass the value in json format..
if you dont pass any value (name etc nothing), it will simply return the orginal/previous info of that objetc/subscriber
 