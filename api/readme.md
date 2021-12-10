## Environment Configure

Create a .env file in project route with the following variables, replace ```<username>``` and ```<password>``` with your own mongodb credentials

```c
NODE_ENV=development

MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.1hgwd.mongodb.net/assignment?retryWrites=true&w=majority"

PORT=4000
```

#### Run server with nodemon
```cmd
	yarn dev
```

#### Run server in production
```cmd
	yarn start
```