# Skinology - Skincare Recommendation App (React Native)

Welcome to the Skincare Recommendation App! This app is built using React Native and aims to provide personalized skincare recommendations based on user's skin type, concerns, and preferences.

## Getting Started

1. Clone the repository to your local machine

git clone https://github.com/saraaliahmed123/Skinology.git

2. Install the required dependencies for both client and server folders by splitting your terminal 

For the client:

    - cd client
    - npm install or npm i

For the server:

    - cd server
    - npm install or npm i

3. Start the development servers for both client and server folders

For the client:

    - cd client
    - npm start or npx expo start

For the server:

    - cd server
    - nodemon server.js

4. Update the baseURL within all context files in the client

    - Open Command Prompt in your windows
    - Enter ipconfig into the command line
    - Retrieve your IPv4 Address
    - Open the .env file within the clinet
    - Enter the address as the PORT
        e.g PORT = http://<Your_address>:3001

5. Run the app on an emulator or a physical device

cd client
npm run android or npm run ios

## Features

- Personalized product recommendations
- Product reviews and ratings
- Record daily skincare routine
- Track progress through images

## Tech Stack

- React Native
- Expo CLI
- Axios
- Node.js
- Mongoose
- MongoDB
