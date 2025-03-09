import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../Header/Header";

export default function Team() {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID", align: "center", headerAlign: "center" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access === "Admin"
                  ? // @ts-ignore
                    theme.palette.primary.dark
                  : access === "Manager"
                  ? // @ts-ignore
                    theme.palette.secondary.dark
                  : "#3da58a",
              width: "99px",
              p: "5px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-evenly",
              mx: "auto",
              my: 1,
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined sx={{ color: "#fff" }} />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} />
            )}
            {access === "User" && <LockOpenOutlined sx={{ color: "#fff" }} />}
            <Typography sx={{ color: "#fff" }} variant="body1">
              {" "}
              {access}{" "}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "95%", margin: "0 auto" }}>
      <Header title={"team"} subtitle={"managing the team members"}/>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}
