# SneakPeak User Frontend App
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

You can set up this app by following these steps:

## 1. Prerequisites

- Ensure that you have followed all instructions provided [here](https://github.com/sneakpeak-git)
- This project needs [Data API](https://github.com/sneakpeak-git/sneakpeak-api-data) to run. Make sure it is running before proceeding.

### Firebase app setup

The authentication provider for this app is Firebase, so you need to set up a Firebase project first.
You also need to create a test account in order to enable frontend auth testing.

- Navigate to [Firebase Console](https://console.firebase.google.com) and click 'Create a new project'
- Follow the setup instructions
- After the setup, choose the 'Web' option below the Get Started message
- Register the app and continue to the console
- Choose 'Authentication' and then 'Get started'
- Enable Google and Email/Password as authentication providers
- Go to the 'Users' tab and add a new user with email `test@sneak.peak` and password `sptest`

### Create config files

This project uses config files which need to be created manually to connect to your Firebase project and Data API.

- Go to `/sneakpeak/src/config` and rename **api.js.example** to **api.js**
- Replace the host address with the address of your Data API instance (for example `http://localhost:3000` if you are running it locally)
- Go to `/sneakpeak/src/firebase` and rename **config.js.example** to **config.js**
- Navigate to [Firebase Console](https://console.firebase.google.com) and go to your Project Settings
- Scroll down and choose 'Config' under SDK setup and configuration
- Replace the values in your **config.js** file with the ones from that snippet

## 2. Set Up Dependencies

- Open your terminal.
- Navigate to your project directory using the `cd` command.
- Install the project's dependencies by running:
    ```
    yarn
    ```
  or
    ```
    yarn install
    ```
- You can add any additional dependencies you might want to use with `yarn add <dependency>`.

## 3. Run Your Project

- Start the project by running
    ```
    yarn start
    ```
    
## Testing

This project comes with end-to-end tests ran by Cypress.
These tests are located in `/sneakpeak/cypress/e2e`. You can write more tests or edit the current ones there.

### Automatic testing

- To run tests automatically, run `yarn test`. This initializes all tests from the `e2e` folder and saves the recording of the test to `/sneakpeak/cypress/videos`.

This is an example of a test video:

![](https://raw.githubusercontent.com/sneakpeak-git/sneakpeak-documentation/main/assets/cypress_video.gif)

### Manual tests

- To lauch the Cypress GUI, run `yarn cypress`. You can tweak settings and run tests manually from here.

## Useful Documentation

[Node.js](https://nodejs.org/en/doc)
[React](https://react.dev/)
[Firebase](https://firebase.google.com/docs)
[Cypress](https://docs.cypress.io/guides/overview/why-cypress)
