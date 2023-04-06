import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../reset.css";
import "../styles/Listings.css";
import DeleteIcon from "@mui/icons-material/Delete";
import cookie from "cookie";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Listings(props) {
  const cookies = cookie.parse(document.cookie);
  return (
    <div className="listings-container">
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none" }}
        className="table-container"
      >
        <Table sx={{ maxWidth: "90%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Hours</TableCell>
              <TableCell align="right">Address</TableCell>
              {cookies.loggedIn && <TableCell align="right">Remove</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business, index) => (
              <TableRow
                key={business.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="business">
                  <Link to={`/details/${business.name}`}>{business.name}</Link>
                </TableCell>

                <TableCell align="right">{business.description}</TableCell>
                <TableCell align="right">{business.hours}</TableCell>
                <TableCell align="right">{business.address}</TableCell>
                {cookies.loggedIn && (
                  <TableCell align="right">
                    <Button
                      color="error"
                      onClick={() => {
                        props.removeBusiness(index);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
