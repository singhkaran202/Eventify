# EventNEXUS

Designed for a community to plan and manage events easily and efficiently

## Features

- Organizers can host all the necessary information about their event on the platform
- Users interested in participating can simply provide their email address to join the event
- Once a participant provides email, EventNEXUS app sends a pre-drafted email provided by the event organizer during registration
- And this above process is **automated** through **Nodemailer** with **Oauth 2.0** security
- This process simplifies event organization and participation, making it accessible to all

## Important steps

1. Authentication and authorization
2. Planning Event
3. Display Events
4. Gmail Integration

## Screenshots

### Dashboard + Plan Event Page
   
### Display Event 

### Profile

### Architecture Explained
   #### Sign In
   
   #### Sign Up
   
   #### Plan Event


## Contributing Guidelines
### To get started with frontend project on your local environment, follow the steps:
#### Fork the repository

#### Run in terminal: 
```bash
git clone repo-url
```

#### change directory to client
 ```bash
(cd ./client)
```

#### Now run: 
```bash
npm install
```

#### To let this app connect to backend, need to create .env file in following format:
```bash
REACT_APP_BACKEND_URL=http://localhost:PORT
```

#### Run:

```bash
npm start
```
 
#### Now, hop to server side :)

## Server Side
### To get started with server side project on your local environment, follow the steps:

#### Change directory to server
```bash
cd ./server
```

#### Install all npm dependencies needed
```bash
npm install
```
 
#### Create .env file in following format

```bash
MONGODB_URI = [add mongodb_database url]
JWT_SECRET = [Add your secret text]
```

#### Start the server
```bash
npm run dev
```
    



   




