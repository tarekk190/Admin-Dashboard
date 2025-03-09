import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Box, Button, capitalize, Typography, useTheme } from '@mui/material'
import { DownloadDoneOutlined } from '@mui/icons-material'
import Header from '../Header/Header'

export default function Dashboard() {
  const theme = useTheme();

  return (
    <div>
      <Header isDashboard={true} title={"dashboard"} subtitle={"wlcome to your dashboard"}/>
      <Box textAlign={{xs:"left" , sm:"right"}}>
        <Button
          sx={{ textTransform: "capitalize" , flexWrap:"wrap"}}
          variant="contained"
          color="primary"
        >
          <DownloadDoneOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}
