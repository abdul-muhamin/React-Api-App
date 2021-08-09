import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "@testing-library/react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Contact from "./contact";
import Users from "./users";
import Notfound from "./NotFound";
import { BasicTable } from "./components/BasicTable";
import { LearningReact } from "./components/LearningReact";
{
  /* <Route exact path="http://localhost:3000/" component={App} />; */
}
//         <Route path="/users" component={Users} />
//         <Route path="/contact" component={Contact} />
//         <Route component={Notfound} />
//       </Switch>
//     </div>
//   </Router>
// );

// ReactDOM.render(routing, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <App />
//     </div>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <BasicTable />
//     </div>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   <React.StrictMode>
//     <Contact />
//   </React.StrictMode>,
//   <React.StrictMode>
//     <Users />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
