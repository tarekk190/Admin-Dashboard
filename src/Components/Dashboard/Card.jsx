import { Box, Paper, Stack, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Card({ icon, subtitle, title, data, increase }) {
  return (
    <Paper
      sx={{
        mt:"15px",
        minWidth: "300px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "auto", 
        boxShadow: 3,
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography
          variant="body2"
          sx={{ fontSize: "13px", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "13px", color: "text.secondary" }}
        >
          {subtitle}
        </Typography>
      </Stack>

      <Box sx={{ height: "200px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={6}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      <Typography
        variant="body2"
        sx={{ fontSize: "13px", color: "text.primary", mt: 1 }}
      >
        {increase}
      </Typography>
    </Paper>
  );
}
