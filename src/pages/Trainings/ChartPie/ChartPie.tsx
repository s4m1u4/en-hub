import React, { FC } from "react";
import {
  Pie,
  Cell,
  Legend,
  Tooltip,
  PieChart,
  ResponsiveContainer,
} from "recharts";
import { Box, Button, Card, CardContent } from "@mui/material";

import { ChartPieProps, ICustomTooltip } from "./types";
import { COLORS } from "./constants";
import { Link } from "react-router-dom";

export const ChartPie: FC<ChartPieProps> = ({ data }) => {
  const customTooltip = ({ active, payload }: ICustomTooltip | any) => {
    if (active) {
      return (
        <div
          style={{
            color: "#000",
            padding: "5px",
            backgroundColor: "#fff",
            border: "1px solid #cccc",
            borderRadius: "6px",
          }}
        >
          <p>{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardContent
        sx={{
          gap: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          "&:last-child": { p: 2 },
        }}
      >
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend iconType="circle" />
            <Tooltip content={customTooltip} />
          </PieChart>
        </ResponsiveContainer>
        <Box>
          <Button variant="outlined" component={Link} to="/trainings">
            To the training list
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
