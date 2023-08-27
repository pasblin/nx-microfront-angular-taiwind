## Start the app

To start the development server run `nx serve root --devRemotes=login,dashboard,app-one,app-two `. Open your browser and navigate to http://localhost:4200/. 
Or you can run `docker build -t my-app:v1 .` and then `docker run -p 80:80 -p 4201:4201 -p 4202:4202 -p 4203:4203 -p 4204:4204 my-app:v1
` to see in prod mode.  
Happy coding!
