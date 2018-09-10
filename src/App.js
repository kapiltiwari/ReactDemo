import React from "react";
import Header from "./header/Header";

import Main from "./main/Main";


const App = () => {
  console.log ('API KEY is here = ', process.env.REACT_APP_TMDB_API_KEY);

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
