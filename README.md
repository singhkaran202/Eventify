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
![Screenshot from 2024-03-14 15-46-59](https://github.com/singhkaran202/EventNexus/assets/105576642/df46e93f-b2ca-439f-8cd7-8204d141caa0)


### Display Event 
![Screenshot from 2024-03-14 16-59-30](https://github.com/singhkaran202/EventNexus/assets/105576642/89f8bab4-6fcd-4e27-a03c-2052f5905a5f)


### Profile
![Screenshot from 2024-04-11 18-30-57](https://github.com/singhkaran202/EventNexus/assets/105576642/b144f0e4-238f-43b4-9775-8068bd84ff64)



### Architecture Explained
   #### Sign In
   ![Signin (1)](https://github.com/singhkaran202/EventNexus/assets/105576642/4f887e11-6647-454f-af1c-7bc790232541)

   
   #### Sign Up
   ![DSA jpeg (1)](https://github.com/singhkaran202/EventNexus/assets/105576642/824640a1-9a2a-4480-a096-4e317e8ae630)
Up
   
   #### Plan Event
![Plan event (1)](https://github.com/singhkaran202/EventNexus/assets/105576642/92725cbb-6cec-494a-86f6-40a9f9618b0a)


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
    



   




