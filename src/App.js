import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";
import { BasicTable } from "./components/BasicTable";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { ColumnFilter } from "./components/ColumnFIlter";
import { PaginationTable } from "./components/Pagination";
import { ExpenseItem } from "./ExpenseItem";

// import { StickyTable } from "./components/StickyTable";
//#region

// class App extends React.Component {
//   render() {
//     return (
//             <div>
//               <ReactTable
//                 data={data_}
//                 column={columns_}
//                 defaultPageSize={2}
//                 pageSizeOptions={[2, 4, 6]}
//               ></ReactTable>
//             </div>

//       <div>
//         <h1>App Home</h1>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <h1>App Home</h1>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <h1>Hello World</h1>
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }
//#endregion

function App() {
  return (
    <div className="App">
      <BasicTable />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <SortingTable /> {/*SortingTable*/}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <FilteringTable /> {/* Global FilteringTable + Column filtering */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       {/* <ExpenseItem></ExpenseItem> */}
//       <ExpenseItem />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <PaginationTable /> {/*Pagination */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <StickyTable /> {/*Sticky table */}
//     </div>
//   );
// }

export default App;
