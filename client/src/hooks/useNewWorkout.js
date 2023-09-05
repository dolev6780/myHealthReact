import { useState } from "react";
// import {useUserContext} from './useUserContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useNewWorkout = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  //   const { dispatch } = useUserContext();
  const createWorkout = (trainingType, bodyType, buildExercise, userId) => {
    setIsLoading(true);
    setError(null);
    console.log("in");
    axios
      .post("/api/newWorkout/createworkout", {
        trainingType,
        bodyType,
        buildExercise,
        userId,
      })
      .then((res) => {
        setIsLoading(false);
        // localStorage.setItem("user", JSON.stringify(res.data));

        // dispatch({ type: "SIGNIN", payload: res.data });

        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.log(err);
      });
  };

  return { createWorkout, isLoading, error };
};
