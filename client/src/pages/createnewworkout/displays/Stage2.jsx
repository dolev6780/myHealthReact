import React, { useState } from "react";
import CustomSelect from "../../../components/CustomSelect";
import Snackbar from "@mui/material/Snackbar";
export default function Stage2({ handleDisplay, setBodyType }) {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [flagAlert, setFlagAlert] = useState(true);
  const genders = ["Male", "Female", "I prefer not to say"];
  const ages = ["Under 18", "18-29", "30-39", "Above 40"];
  const weights = [];
  const heights = [];

  for (let index = 45; index <= 130; index++) {
    weights.push(`${index} kg`);
  }
  for (let index = 150; index <= 230; index++) {
    heights.push(`${index} cm`);
  }

  const backStage = () => {
    handleDisplay("stage1");
  };
  const nextStage = async () => {
    if (
      gender.length === 0 ||
      age.length === 0 ||
      weight.length === 0 ||
      height.length === 0
    ) {
      setFlagAlert(false);
      setTimeout(() => {
        setFlagAlert(true);
      }, 3000);
      return;
    }
    await setBodyType({
      gender: gender,
      age: age,
      weight: weight,
      height: height,
    });
    handleDisplay("stage3");
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Body type</h1>
      <CustomSelect
        options={genders}
        setState={setGender}
        theChoose={gender}
        label={"Gender"}
      />
      <CustomSelect
        options={ages}
        setState={setAge}
        theChoose={age}
        label={"Age"}
      />
      <CustomSelect
        options={weights}
        setState={setWeight}
        theChoose={weight}
        label={"Weight"}
      />
      <CustomSelect
        options={heights}
        setState={setHeight}
        theChoose={height}
        label={"Height"}
      />
      <div className="flex justify-between px-10">
        <button
          onClick={backStage}
          className="mt-2 bg-green-500 text-white font-bold py-3 px-8 rounded shadow-lg active:shadow-none"
        >
          Back
        </button>
        <button
          onClick={nextStage}
          className="mt-2 bg-green-500 text-white font-bold py-3 px-8 rounded shadow-lg active:shadow-none"
        >
          Next
        </button>
      </div>
      <Snackbar
        ContentProps={{ sx: { backgroundColor: "#f87171" } }}
        open={!flagAlert}
        autoHideDuration={4000}
        message="All fields must be filled"
      />
    </div>
  );
}
