import React, { useState } from "react"; //importing react library
import "./styles.css"; //importing css styles.

var userName = "Lalit"; //this can be used directly in HTML.

const emojiDictionary = {
  "😊": "smiling"
};

export default function App() {
  //usestate is a function to which we give a value that var should have.
  //usestate returns two value that is an array.
  //first value is the count, and second value is a function

  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState("");
  function clickListener() {
    var newCount = count + 1;
    // console.log(count);
    setCount(newCount); //this is used
  }
  // console.log("Counter", count); //this is in view so we can now use in html
  function inputChangeHandler(event) {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  }
  function onChangeInput(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
    // var inputMeaning = emojiDictionary[userInput];
    // setMeaning(inputMeaning);
  }

  return (
    <div className="App">
      <h1>
        Hello <span style={{ color: "blue" }}>{userName}</span>
      </h1>
      <h2>This is my first React application.</h2>
      <button onClick={clickListener}>Click me</button> {count}
      <br />
      <br />
      <input onChange={inputChangeHandler}></input>
      <div>
        Welcome <span style={{ color: "blue" }}>{userInput} </span> !!
      </div>
      <input onChange={onChangeInput}></input>
      <div>this means {meaning}</div>
    </div>
  );
}

//Points to note:
//1. here we can see className instead of class that
// is because class is a reserved keyword.
//2. what ever we work on App.js will be seen in output.
//3. we can add css directly using the style element.
//4. {} ---> variable
//5. {{}} -----> object.
//6. in HTML we used to write it as userName.innerText... this is
// called an imperative statements. but in react we use declarative
//statement it means for eg: I want this here so now it is react
//job to put it there.
// VISER - render view, interact with view, update state in event handler, render it.
