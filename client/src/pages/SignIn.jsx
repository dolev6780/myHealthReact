import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignin } from "../hooks/useSignin";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import InputWithIcon from "../components/InputWithIcon";
import Loader from "../components/Loader";
export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signin, error, isLoading } = useSignin();
  const checkDetails = () => {
    signin(email, password);
  };

  return (
    <div className="p-8 w-full h-[89vh] flex justify-center items-center text-white">
      <div
        className="py-10 flex flex-col bg-green-500 border w-full rounded-lg mb-20 md:w-auto md:p-16">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl md:mb-10">
          Sign In
        </h1>
        <div className="mt-4 sm:w-[500px] m-auto">
          <InputWithIcon
            icon={<AlternateEmailIcon/>}
            type={"email"}
            setState={setEmail}
            isrequired={true}
            placeholder={"Email"}
          />
        </div>
        <div className="mt-4 sm:w-[500px] m-auto">
          <InputWithIcon
            icon={<PasswordIcon />}
            type={"password"}
            setState={setPassword}
            isrequired={true}
            placeholder={"Password"}
          />
        </div>
        <button
          className="py-2 px-4 mt-4 m-auto rounded-lg bg-white bg-opacity-0 border-white border-2 text-white font-bold md:p-4 md:pr-6 md:pl-6 md:mt-14"
          onClick={checkDetails}
        >
          {isLoading ? <Loader /> : "Sign In"}
        </button>
        <span className="mt-4 md:mt-6 font-semibold">
          Not signed up yet?{" "}
          <span
            className="font-extrabold md:hover:underline"
            onClick={() => {
              navigate("/signup");
            }}
          >
            sign up
          </span>
        </span>
      </div>
    </div>
  );
}
