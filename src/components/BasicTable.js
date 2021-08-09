import React, { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./columns";
import "./table.css";
import axios from "axios";

const baseUrl = "http://localhost:56964/Employee"; // "https://localhost:44371/Employee";
//const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
export const BasicTable = () => {
  // const columns = useMemo(() => COLUMNS, []); // Replace the 'COLUMNS' in this statement with 'Grouped_Columns' and you'll get group headers
  // const data = useMemo(() => MOCK_DATA, []);

  const [id, setpost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseUrl).then((response) => {
  //     setpost(response.data);
  //   });
  // }, []);

  React.useEffect(() => {
    axios
      .get(baseUrl, {
        mode: "cors",
        //  withCredenials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
        // rejectUnauthorized: false,
        // requestCert: false,
        // agent: false,
      })
      .then((response) => {
        setpost(response.data);
      });
  }, []);

  // 'Access-Control-Allow-Origin' : '*',
  //      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

  //if (!id) return null;
  //  // const tableInstance = useTable({
  //  //   columns,
  //  //   data,
  //  // });

  //  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //  //   tableInstance;

  return (
    <div>
      <h1>{id}</h1>
      {/* <h2>{id.title}</h2>
      <h3>{id.body}</h3> */}
    </div>
  );

  /// Basic Table  Below from here....
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   footerGroups, // this is for footer
  //   rows,
  //   prepareRow,
  // } = useTable({
  //   columns,
  //   data,
  // });

  // return (
  //   <table {...getTableProps()}>
  //     <thead>
  //       {headerGroups.map((headerGroup) => (
  //         <tr {...headerGroup.getHeaderGroupProps()}>
  //           {headerGroup.headers.map((column) => (
  //             <th {...column.getHeaderProps()}>{column.render("Header")}</th>
  //           ))}
  //         </tr>
  //       ))}
  //     </thead>

  //     <tbody {...getTableBodyProps()}>
  //       {rows.map((row) => {
  //         prepareRow(row);
  //         return (
  //           <tr {...row.getRowProps()}>
  //             {row.cells.map((cell) => {
  //               return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
  //             })}
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //     <tfoot>
  //       {footerGroups.map((footerGroup) => (
  //         <tr {...footerGroup.getFooterGroupProps()}>
  //           {footerGroup.headers.map((column) => (
  //             <td {...column.getFooterProps}>{column.render("Footer")}</td>
  //           ))}
  //         </tr>
  //       ))}
  //     </tfoot>
  //   </table>
  // );
};
