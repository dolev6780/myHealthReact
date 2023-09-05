import React, { useState } from "react";
import CustomInput from "../../../components/CustomInput";
import CustomSelect from "../../../components/CustomSelect";
import { motion } from "framer-motion";
import Snackbar from "@mui/material/Snackbar";
export default function Stage1({ handleDisplay, setTrainingType }) {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [amountPerWeek, setAmountPerWeek] = useState("");
  const [goal, setGoal] = useState("");
  const trainingPerWeek = [1, 2, 3, 4, 5, 6, 7];
  const goals = ["Lose Weight", "Gain Muscles", "Get Shredded"];
  const [flagAlert, setFlagAlert] = useState(true);

  const nextStage = async () => {
    if (
      workoutTitle.length === 0 ||
      amountPerWeek.length === 0 ||
      goal.length === 0
    ) {
      setFlagAlert(false);
      setTimeout(() => {
        setFlagAlert(true);
      }, 3000);
      return;
    }
    localStorage.setItem("stage1_trainingPerWeek", amountPerWeek);
    await setTrainingType({
      title: workoutTitle,
      amountPerWeek: amountPerWeek,
      goal: goal,
    });
    handleDisplay("stage2");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Training type</h1>
      <CustomInput
        type={"text"}
        placeholder={"title"}
        setState={setWorkoutTitle}
      />

      <CustomSelect
        options={trainingPerWeek}
        setState={setAmountPerWeek}
        theChoose={amountPerWeek}
        label={"Amount of training per week"}
      />
      <CustomSelect
        options={goals}
        setState={setGoal}
        theChoose={goal}
        label={"Choose your goal"}
      />
      <motion.button
        onClick={nextStage}
        className="mt-2 bg-green-500 text-white font-bold py-3 px-8 rounded shadow-lg active:shadow-none"
      >
        Next
      </motion.button>
      <Snackbar
      ContentProps={{sx:{backgroundColor:"#f87171"}}}
        open={!flagAlert}
        autoHideDuration={4000}
        message="All fields must be filled"
      />
    </div>
  );
}
