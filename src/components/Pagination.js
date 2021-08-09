import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, Grouped_Columns } from "./columns";
import "./table.css";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []); // Replace the 'COLUMNS' in this statement with 'Grouped_Columns' and you'll get group headers
  const data = useMemo(() => MOCK_DATA, []);

  // const tableInstance = useTable({
  //   columns,
  //   data,
  // });

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>

        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Pervious
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
  );
};
