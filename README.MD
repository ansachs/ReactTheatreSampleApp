#THEATRE SCHEDULER

###by Alexander Sachs

I tried to build this app with using a container/component style. It is also my first Redux app. 

features:
-react-router for navigation 
-redux for handling state

**initial view**

user can enter a movie by title, year, rating, and runtime. The app will validate the data before submission is possible. After mutating state, a card with the new movie is added to the home screen. Clicking on a movie title will take the user to the schedule view (it's not very exciting). 

To calculate the times, I used a 24 hour format to store data, converted everything to minutes and then converted back to a 12 hour clock for output.