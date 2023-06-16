// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../src/firebase/config";

const firebaseInstance = initializeApp(firebaseConfig);

const auth = getAuth(firebaseInstance);

async function handleEmailSignIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    // eslint-disable-next-line no-unused-vars
    .then((userCredential) => {
      console.log(userCredential);
      return window.localStorage.setItem(
        `firebase:authUser:${firebaseConfig.projectId}:[DEFAULT]`,
        JSON.stringify(auth.currentUser.toJSON())
      );
    });
}

Cypress.Commands.add("login", (email, password) => {
  return handleEmailSignIn(email, password);
});
