import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);
  const { formData } = useSelector((state) => state?.form);
  const { email } = formData;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    setData(jsonData);
  };

  console.log("data000", data);
  return (
    <>
      <Box
        sx={{
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Email: {email}
      </Box>
      <Table
        sx={{
          minWidth: 650,
          border: "1px solid #ccc",
          borderRadius: 4,
          overflow: "hidden",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "text.secondary" }}>Name</TableCell>
            <TableCell align="right" sx={{ color: "text.secondary" }}>
              Email
            </TableCell>
            <TableCell align="right" sx={{ color: "text.secondary" }}>
              Username
            </TableCell>
            <TableCell align="right" sx={{ color: "text.secondary" }}>
              Phone
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row?.id}
              sx={{
                bgcolor: "background.paper",
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Home;
