import React from "react";
import { useTable } from "react-table";
import makeData from "./makeData";
import { Styles, AppBar, Button,Title } from "./IncomeTableStyles";
import IncomeDialog from "./IncomeDialog";



function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
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
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function IncomeTable() {
  const [openDialog, setDialogOpen] = React.useState(false);

  const handleIncomeDialogOpen = () => {
    setDialogOpen(true);
  };

  function Header() {
    return <AppBar>
        <Title style={{alignSelf:'center'}}>Income Stats</Title>
        <Button onClick={handleIncomeDialogOpen} variant="outlined" color="primary">Add Income</Button>
    </AppBar>;
  }

  const handleIncomeDialogClose = () => {
    setDialogOpen(false);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Date of Transaction",
        accessor: "dot",
      },
      {
        Header: "From",
        accessor: "source",
      },
      {
        Header: "Receiving Account",
        accessor: "account",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Type",
        accessor: "transaction_type",
      },
      {
        Header: "Reason",
        accessor: "transaction_reason",
      },
    ],
    []
  );
  const temp = makeData(20);

  const data = React.useMemo(() => temp, []);

  return (
    <>
      <Header />
      <IncomeDialog
        open={openDialog}
        handleClickOpen={handleIncomeDialogOpen}
        handleClose={handleIncomeDialogClose}
      />
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </>
  );
}

export default IncomeTable;
