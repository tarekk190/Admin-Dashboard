// @ts-nocheck
import { Box, Paper, Typography, useTheme } from "@mui/material";
import PieChartt from "../Pie/Pie";
import BarChartt from "../BarChart/BarChart";

export default function Row3() {
  const theme = useTheme();
  return (
    <Box mt={2} display={"flex"} gap={2}>
      <Paper sx={{ maxHeight: 380, width: "50%", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
          color={theme.palette.secondary.main}
        >
          Compaign
        </Typography>
        <Box height={280}> 
        <PieChartt />
          <Typography variant="h6" align="center">
            $48,324 revenue generated
          </Typography>
          <Typography variant="body2" align="center" px={0.7} pb={3}>
            includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Paper>
      <Paper sx={{ width: "50%", flexGrow: 1, maxHeight: 380, p: 3 }}>
        <Typography variant="h6" fontWeight={600} padding={"30px 30px 0 30px"}>
          Sales Quantity
        </Typography>
        <BarChartt isDashboard={false} />
      </Paper>
    </Box>
  );
}
