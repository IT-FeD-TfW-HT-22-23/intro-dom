// we now know what the DOM is so lets learn how to make our code actually do something
// like react to something that happens in the DOM
// and for that we need an event listener
// an event is something that happens on the page for example:
// a mouse click, keypress, mouse moving or many other events
// with a event listener we can wait for a certain event to happens and then react to it

// in order to listen for events we first need to select the element
// where the event should happen
// in this example we will listen to the button element
// so when we click something should happen

// first we collect the element
// we need to grab the classname first so lets check our html
// we can select it by class and use the .btn-click or we can select the id 'btn'
document.querySelector(".btn-click").addEventListener("click", function () {
  // the first need to pass in the type of event => click
  // and then tell the event listener what to do - specify the reaction to the event
  // we do that by defining a function and the function will be containing exactly the code that
  // will be executed whenever this click event happens on this button
  // this is called the event handler
  // REMEMBER that a function is just a value, and if a function is a value then we can also pass it
  // as an argument into another function like any other value string/nr etc
  document.querySelector(".message").textContent = "You clicked the button!";
  // we can aslo manipulate the dom on events for example this text
  // there are multiple ways to listen to events in js but this is the best way
  // and also the most used one
});
