import React, { useState } from "react";
import Stage1 from "./displays/Stage1";
import Stage2 from "./displays/Stage2";
import Stage3 from "./displays/Stage3";
import { useNewWorkout } from "../../hooks/useNewWorkout";
import { useUserContext } from "../../hooks/useUserContext";
export default function CreateWorkout() {
  const [whichDisplay, setWhichDisplay] = useState(`stage1`);
  const [trainingType, setTrainingType] = useState({});
  const [bodyType, setBodyType] = useState({});
  const [buildExercise, setBuildExercise] = useState([]);
  const { user } = useUserContext();
  const userId = user?.user._id;
  const { createWorkout, error, isLoading } = useNewWorkout();
  const checkDetails = () => {
    createWorkout(trainingType, bodyType, buildExercise, userId);
  };
  const handleDisplay = (whichDisplay) => {
    setWhichDisplay(whichDisplay);
  };
  const showDisplay = (whichDisplay) => {
    switch (whichDisplay) {
      case `stage1`:
        return (
          <Stage1
            handleDisplay={handleDisplay}
            setTrainingType={setTrainingType}
          />
        );
      case `stage2`:
        return (
          <Stage2 handleDisplay={handleDisplay} setBodyType={setBodyType} />
        );
      case `stage3`:
        return (
          <Stage3
            handleDisplay={handleDisplay}
            setBuildExercise={setBuildExercise}
            checkDetails={checkDetails}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="">
      <h1 className="font-bold text-4xl mb-10 mt-10">Create new workout</h1>
      {showDisplay(whichDisplay)}
    </div>
  );
}
