import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Header from "../Header/Header";

export default function Invoices() {
  return (
    <div style={{ height: 600, width: "95%", margin: "0 auto" }}>
      <Header title={"invoices"} subtitle={"list of invoices balances"}/>
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}
