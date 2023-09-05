import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import InputWithIcon from '../components/InputWithIcon';
import Loader from '../components/Loader';
export default function SignUp() {
  const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {signup, error, isLoading} = useSignup();

    const sendDetails = async () => {
      signup(email, password);
    };
  return (
    <div className="p-8 w-full h-[89vh] flex justify-center items-center text-white">
      <div
        className="py-10 flex flex-col bg-green-500 border w-full rounded-lg mb-20 md:w-auto md:p-16
      "
      >
        <h1 className="text-4xl font-bold mb-4 md:text-6xl md:mb-10">
          Sign Up
        </h1>
        <div className="mt-4 sm:w-[500px] m-auto">
          <InputWithIcon
            icon={<AlternateEmailIcon />}
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
          onClick={sendDetails}
        >
          {isLoading ? <Loader/> :'Sign Up'}
        </button>
        <span className="mt-4 md:mt-6 font-semibold">
          Already signed up?{" "}
          <span
            className="font-extrabold md:hover:underline"
            onClick={() => {
              navigate("/signin");
            }}
          >
            sign in
          </span>
        </span>
      </div>
    </div>
  );
}
