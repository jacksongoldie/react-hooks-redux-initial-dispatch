let state;

// function changeState(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "counter/increment":
//       return { count: state.count + 1 };
//     default:
//       return state;
//   }
// }

// function dispatch(action) {
//   state = changeState(state, action);
//   render();
// }

// function render() {
//   const app = document.querySelector("#app");
//   app.textContent = state.count;
// }

// dispatch({ type: '@@INIT' })

function changeState(state = { count: 3 }, action){
  switch(action.type) {
    case "count/increment":
      return { count: state.count + 1 };
    case "count/decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action)
  render()
}

function render() {
  let app = document.getElementById("app")
  app.textContent = state.count
}

dispatch({ type: "@@INIT" })