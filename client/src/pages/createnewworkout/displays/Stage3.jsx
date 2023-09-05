import React, { useState } from "react";
import Accordion from "../../../components/Accordion";
import Snackbar from "@mui/material/Snackbar";
export default function Stage3({
  handleDisplay,
  setBuildExercise,
  checkDetails,
}) {
  // initial days///////////////////////////
  const num = localStorage.getItem("stage1_trainingPerWeek")
  const dayNums = Array.from(Array(parseInt(num) + 1), (_, index) => index).filter(
    (option) => option !== 0
  );
  // initial days///////////////////////////
    // const data = [{1:[{},{},{}],{2:[{},{},{}]},{3:[{},{},{}]}] 
  const [exerciseData, setExerciseData] = useState([]);
  const [flagAlert, setFlagAlert] = useState(true);
  const collectExerciseInfo = (dayNum, exerciseInfo) => {
    setExerciseData((prevData) => {
      // Create a deep copy of the previous data array
      const newData = prevData.map(item => ({ ...item }));
  
      const indexToUpdate = newData.findIndex((data) => data.dayNum === dayNum);
  
      if (Array.isArray(exerciseInfo)) {
        exerciseInfo = [...exerciseInfo]; // Create a copy of exerciseInfo if it's an array
      } else {
        exerciseInfo = [exerciseInfo]; // Wrap exerciseInfo in an array if it's not
      }
  
      if (indexToUpdate !== -1) {
        // If the dayNum already exists
        if (Array.isArray(newData[indexToUpdate].exercises)) {
          // If existing exercises is an array, append exerciseInfo to it
          newData[indexToUpdate].exercises = [...newData[indexToUpdate].exercises, ...exerciseInfo];
        } else {
          // If existing exercises is not an array, convert it to an array and append exerciseInfo
          newData[indexToUpdate].exercises = [newData[indexToUpdate].exercises, ...exerciseInfo];
        }
      } else {
        // If the dayNum doesn't exist, create a new object with exercises array
        newData.push({
          dayNum: dayNum,
          exercises: exerciseInfo,
        });
      }
  
      return newData;
    });
  };
  const backStage = () => {
    handleDisplay("stage2");
  };
   const Finish = async() => {
    if(exerciseData.length !== parseInt(num)){
      setFlagAlert(false);
      setTimeout(() => {
        setFlagAlert(true);
      }, 3000);
      return
    }
    await setBuildExercise(exerciseData)
   checkDetails();
    
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Build exercise</h1>
      <div className="max-h-[50vh] overflow-scroll p-4">
        {dayNums.map((d, i) => {
          return (
            <div key={i}>
              <Accordion
                exerciseData={exerciseData[d-1]?.exercises}
                dayNum={d}
                sendExerciseInfo={collectExerciseInfo}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full justify-between flex p-4">
        <button
          onClick={backStage}
          className="mt-2 bg-green-500 text-white font-bold py-3 px-8 rounded shadow-lg active:shadow-none"
        >
          Back
        </button>
        <button
          onClick={Finish}
          className="mt-2 bg-green-500 text-white font-bold py-3 px-8 rounded shadow-lg active:shadow-none"
        >
          Finish
        </button>
      </div>
      <Snackbar
      ContentProps={{sx:{backgroundColor:"#f87171"}}}
        open={!flagAlert}
        autoHideDuration={4000}
        message="All days must be filled"
      />
    </div>
  );
}
