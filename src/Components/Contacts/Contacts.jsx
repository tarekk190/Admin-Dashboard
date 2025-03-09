import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows , columns } from "./data";
import Header from "../Header/Header";

export default function Contacts() {
  return (
    <div style={{ height: 600, width: "95%", margin: "0 auto" }}>
      <Header title={"contact"} subtitle={"list of contacts for future reference"}/>
      <DataGrid
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
