import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
export default function AlertDialog({ sendExerciseInfo }) {
  const [muscle, setMuscle] = useState("");
  const [exercise, setExercise] = useState("");
  const [set, setSet] = useState(0);
  const [rep, setRep] = useState(0);
  const [rest, setRest] = useState(0);
  const muscles = [
    "Chest",
    "Biceps",
    "Legs",
    "Back",
    "Triceps",
    "Shoulders",
    "Other",
  ];
  const sets = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const reps = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const rests = [
    "00:15",
    "00:30",
    "00:45",
    "01:00",
    "01:15",
    "01:30",
    "01:45",
    "02:00",
    "02:15",
    "02:30",
    "02:45",
    "03:00",
    "03:15",
    "03:30",
    "03:45",
    "04:00",
    "04:15",
    "04:30",
    "04:45",
    "05:00",
  ];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (muscle && exercise && set && rep && rest) {
      const exerciseInfo = {
        muscle,
        exercise,
        set,
        rep,
        rest,
      };
      sendExerciseInfo(exerciseInfo);
      // console.log(exerciseInfo)
    }
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="px-2 py-2 bg-green-500 text-white rounded-lg shadow-lg active:shadow-none"
      >
        <div className="text-2xl items-center flex font-bold">
          <AddIcon fontSize="inherit" />
        </div>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontSize: 36,
            color: "black",
            fontWeight: 700,
          }}
        >
          {"Add exercise"}
        </DialogTitle>
        <DialogContent>
          <div>
            <CustomSelect
              label={"Choose muscle"}
              options={muscles}
              setState={setMuscle}
              theChoose={muscle}
            />
            <CustomInput
              placeholder={"Choose exercise"}
              type={"text"}
              setState={setExercise}
            />
            <CustomSelect
              label={"How many sets"}
              options={sets}
              setState={setSet}
              theChoose={`${set} sets`}
            />
            <CustomSelect
              label={"How many reps"}
              options={reps}
              setState={setRep}
              theChoose={`${rep} reps`}
            />
            <CustomSelect
              label={"time to rest"}
              options={rests}
              setState={setRest}
              theChoose={rest}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <div>
            <button
              className="px-6 py-2 text-xl bg-green-500 text-white rounded-lg shadow-lg active:shadow-none"
              onClick={handleClose}
            >
              Add
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
