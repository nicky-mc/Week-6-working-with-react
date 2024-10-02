//import { useState } from 'react'

//useState hook is used to manage state in a functional component. In this case, the counter variable is managed by useState. The counter variable is initialized to 0. The increment function increments the counter variable by 1. The decrement function decrements the counter variable by 1. The reset function resets the counter variable to 0. The counter variable is rendered to the screen. The increment, decrement, and reset functions are called when the corresponding buttons are clicked. The onClick event listener listens for a click event on the button element. When the button is clicked, the corresponding function is called.
// i.e let state = 0;
// we need to control how we update the value of state
// i.e const [state, setState] = useState(initialValue)
//the initial stat variable can be any data type such as string, number, boolean, object, array
// i.e const [] useState(0); //initial value of state is 0
// to control the initial value we need the state variable name and the mutation function
// by convention we use the word set to name out mutation function
// i.e setCount is the mutation function for the state variable count
// the only task of the mutation function is to update the value of the state variable
//! we cannot update the value of the state variable without a mutation function
// const [cookieCounter, setCookieCounter] = useState(0);
// setCookieCounter((cookieCounter = CookieCounter + 1));
//import {db} from "./utils/useState";
//{db} is a named import from the file "./utils/useState" which is a file that contains the function db is also a destructured element from the object that is exported from the file. here we are destructuring the object that is exported from the file and we are getting the value of the db key from the object that is exported from the file and where we stored the function db

// you can destructure an array as well as elements from an object

// const [cookieCounter, setCookieCounter] = useState(0); is an example of destructuring an array where we are getting the value of the first element of the array and the second element of the array and storing them in the variables cookieCounter and setCookieCounter respectively; the first element of the array is the value of the state variable and the second element of the array is the mutation function for the state variable
// we can use this effectively in a cookie clicker game where we can use the state variable to store the number of cookies that the user has and the mutation function to update the number of cookies that the user has
//for example: const [cookies, setCookies] = useState(0); is an example of destructuring an array where we are getting the value of the first element of the array and the second element of the array and storing them in the variables cookies and setCookies respectively; the first element of the array is the value of the state variable and the second element of the array is the mutation function for the state variable
//export default function App() {
// const [cookies, setCookies] = useState(0);
//return (
//<div className="App">
// <div className="main-lesson">
//<h3>How it works</h3>
//<p>
//When you click the button, the counter increments by 1. <br />
// When you click the button again, the counter increments by 1 again
//Clicking Decrement button will decrement the counter by 1 Clicking
// Reset button will reset the counter to 0{" "}
//</p>
//<h3>How it Works</h3>
//<p>
// useState is a React hook that allows you to manage state in a
// functional component. In this case, the counter variable is managed by
//  useState. The counter variable is initialized to 0. The increment
// function increments the counter variable by 1. The decrement function
//decrements the counter variable by 1. The reset function resets the
//  counter variable to 0. The counter variable is rendered to the screen.
// The increment, decrement, and reset functions are called when the
//  corresponding buttons are clicked. The onClick event listener listens
// for a click event on the button element. When the button is clicked, the
// corresponding function is called.
//</p>
//<div className="counter">
//  <button onClick={() => setCookies((cookies) => cookies + 1)}>
//    Add Cookie
// </button>
//  <p>{cookies}</p>
// <button onClick={() => setCookies((cookies) => cookies - 1)}>
//   Remove Cookie
// </button>
// <button onClick={() => setCookies(0)}>Reset</button>
//</div>
//</div>
//</div>
// );
//}
// once we have destructured an array into a useState we can no longer update it without the mutation function
//let[cookies, setCookies] = useState(0);
// a mutation factor would be: setCookies(cookies + 1); this would update the value of the cookies variable by incrementing it by 1
//export default function App() {
//let [cookies, setCookies] = useState(0);
//return (
// <div className="App">
//<div className="main-lesson">
//<h3>How it works</h3>
//<p>
// When you click the button, the counter increments by 1. <br />
// When you click the button again, the counter increments by 1 again
// Clicking Decrement button will decrement the counter by 1 Clicking
//Reset button will reset the counter to 0{" "}
// </p>
// <h3>How it Works</h3>
// <p>
//  useState is a React hook that allows you to manage state in a
// functional component. In this case, the counter variable is managed by
// useState. The counter variable is initialized to 0. The increment
//  function increments the counter variable by 1. The decrement function
// decrements the counter variable by 1. The reset function resets the
// counter variable to 0. The counter //variable is rendered to the screen.
// The increment, decrement, and reset functions are called when the
// corresponding buttons are clicked. The onClick event listener listens
// for a click event on the button element. When the button is clicked, the
// corresponding function is called.
//</p>
//<div className="counter">
// <button onClick={() => setCookies((cookies) => cookies + 1)}>
//   Add Cookie
// </button>
// <p>{cookies}</p>
// <button onClick={() => setCookies((cookies) => cookies - 1)}>
//   Remove Cookie
//</button>
//<button onClick={() => setCookies(0)}>Reset</button>
//</div>
// </div>
// </div>
///);
//}

//an example of creating a component that uses an api to fetch a store to purchase upgrades from would be:  import {useState, useEffect} from "react";
//import {db} from "./utils/useState";
//export default function App() {
//const [store, setStore] = useState([]);
//useEffect(() => {
//db.collection("store").onSnapshot((snapshot) => {
//setStore(snapshot.docs.map((doc) => doc.data()));
//});
//}, []);
//return (
//<div className="App">
// <div className="main-lesson">
//  <h3>How it works</h3>
//  <p>
//   When you click the button, the counter increments by 1. <br />
//   When you click the button again, the counter increments by 1 again
//   Clicking Decrement button will decrement the counter by 1 Clicking
//   Reset button will reset the counter to 0{" "}
//  </p>
//  <h3>How it Works</h3>
//  <p>
//   useState is a React hook that allows you to manage state in a
//   functional component. In this case, the counter variable is managed by
//   useState. The counter variable is initialized to 0. The increment
//   function increments the counter variable by 1. The decrement function
//   decrements the counter variable by 1. The reset function resets the
//   counter variable to 0. The counter variable is rendered to the screen.
