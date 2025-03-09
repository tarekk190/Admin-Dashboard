import { Box } from "@mui/material";
import Header from "../Header/Header";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 1000, pv: 8000 },
  { name: "Page B", uv: 1300, pv: 10000 },
  { name: "Page C", uv: 1600, pv: 11000 },
  { name: "Page D", uv: 1900, pv: 13000 },
  { name: "Page E", uv: 2019, pv: 16000 },
];

const BarChartt = (isDashboard = false) => {

  return (
    <Box
      // @ts-ignore
      height={Boolean(isDashboard ? 600 : 300)}
    >
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BarChartt;
