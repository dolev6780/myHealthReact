import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomInput2 from "./CustomInput2";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
export default function NutritionTable({ typeOfProduct }) {
  const [amount, setAmount] = useState("");
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows([...rows, { name: "", value1: "", value2: "" }]);
  };

  const handleNameChange = (index, newName) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].name = newName;
      return updatedRows;
    });
  };
  const handleValue1Change = (index, newValue1) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].value1 = newValue1;
      return updatedRows;
    });
  };
  const handleValue2Change = (index, newValue2) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index].value2 = newValue2;
      return updatedRows;
    });
  };
  const handleRemoveRow = (index) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(index, 1);
      return updatedRows;
    });
  };
  // console.log(rows);
  return (
    <section>
      <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
        <Table>
          <TableHead></TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Nutrition Value for
              </TableCell>
              <TableCell component="th" scope="row">
                100{" "}
                {typeOfProduct === "Drink" ? (
                  <span className="font-bold">(ml)</span>
                ) : typeOfProduct === "Food" ? (
                  <span className="font-bold">(g)</span>
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                <CustomInput2
                  type={"text"}
                  placeholder={"Enter amount"}
                  setState={setAmount}
                />{" "}
                {typeOfProduct === "Drink" ? (
                  <span className="font-bold">(ml)</span>
                ) : typeOfProduct === "Food" ? (
                  <span className="font-bold">(g)</span>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
            {rows.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <input
                      className="border-2 border-green-500 rounded p-1 w-12"
                      type="text"
                      value={row.name}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                      placeholder="enter value"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <input
                      className="border-2 border-green-500 rounded p-1 w-12"
                      type="text"
                      value={row.value1}
                      onChange={(e) =>
                        handleValue1Change(index, e.target.value)
                      }
                      placeholder="enter value"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <input
                      className="border-2 border-green-500 rounded p-1 w-12"
                      type="text"
                      value={row.value2}
                      onChange={(e) =>
                        handleValue2Change(index, e.target.value)
                      }
                      placeholder="enter value"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <button
                      onClick={() => handleRemoveRow(index)}
                      className="px-2 py-1 text-xl bg-green-500 text-white rounded-lg shadow-lg active:shadow-none"
                    >
                      <DeleteIcon />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleAddRow}
          className="px-2 py-1 text-xl bg-green-500 text-white rounded-lg shadow-lg active:shadow-none"
        >
          <AddIcon />
        </button>
        <button className="px-2 py-1 text-xl bg-green-500 text-white rounded-lg shadow-lg active:shadow-none">
          Finish
        </button>
      </div>
    </section>
  );
}
