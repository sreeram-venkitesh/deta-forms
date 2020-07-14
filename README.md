# deta-forms
## Creating customisable forms with Deta

### How to get up and running with a working form in minutes :- 

1. Clone this repo
2. Create a new Deta Micros project in your machine with ```deta new```
3. Copy the files inside the [example/simple](https://github.com/fillerInk/deta-forms/tree/master/examples/simple) directory and copy the files into your project
4. Edit the index.html file as per your needs
5. Add a .env file in the project directory and add your project key and base names there. Don't forget to add this file to your .gitignore
5. Edit the [index.js](https://github.com/fillerInk/deta-forms/blob/master/examples/simple/index.js) file and add the project key and Base name there.
6. Change the ```db.put()``` function to write your own data as you edited in the form
7. Deploy the Micro with ```deta deploy``` 
#### Tada! Your form is live and can write responses into your Deta Base now!