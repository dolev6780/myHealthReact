import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/myhelathLogo.png";
import { useScreensize } from "../hooks/useScreenSize"; //import { useUserContext } from "../hooks/useUserContext";
//import { useSignout } from "../hooks/useSignout";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import CircleAvatar from "./CircleAvatar";
import "../App.css";
import { useUserContext } from "../hooks/useUserContext";
import { useSignout } from "../hooks/useSignout";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function NavBar() {
  const navigate = useNavigate();
  const { screenSize } = useScreensize();
  const { user } = useUserContext();
  const [displayName, setDisplayName] = useState("");
  const { signout } = useSignout();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    return setDisplayName(user ? user.user.email : "");
  }, [user]);
  return (
    <div>
      {screenSize.dynamicWidth > 700 ? (
        <nav className="flex justify-between p-4 font-sans bg-green-500">
          <div className="flex items-center">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <img src={Logo} alt="" width={70} />
            </div>
            <div className="ml-4 bg-opacity-40 p-2 text-xl">
              <p className="font-bold tracking-wider">displayName</p>
            </div>
          </div>
          {user ? (
            <div className="flex items-center">
              <button
                onClick={() => {
                  // signout();
                  navigate("/");
                  window.location.reload();
                }}
                className="mr-4 p-2 bg-opacity-50 text-white font-bold text-2xl"
              >
                sign out
              </button>
            </div>
          ) : (
            <div className="flex">
              <button
                onClick={() => {
                  navigate("signin");
                }}
                className="mr-4 p-2   text-white font-bold text-2xl"
              >
                sign in
              </button>
              <button
                onClick={() => {
                  navigate("signup");
                }}
                className="p-2 text-white font-bold text-2xl"
              >
                sign up
              </button>
            </div>
          )}
        </nav>
      ) : (
        // mobile
        <nav className="flex justify-between items-center p-4 font-sans bg-green-500">
          <div className="flex items-center">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="cursor-pointer"
            >
              <img src={Logo} alt="" width={60} />
            </div>
          </div>
          <motion.div
            initial={false}
            animate={showMenu ? "open" : "closed"}
            className="bg-green-500"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMenu(!showMenu)}
              className="text-4xl text-white"
            >
              <MenuIcon fontSize="inherit" />
            </motion.button>
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              className="z-10 absolute right-[0.75rem] bg-green-500 bg-opacity-90 text-white font-bold mt-10 flex flex-col gap-3 w-64 p-4"
              style={{ pointerEvents: showMenu ? "auto" : "none" }}
            >
              <motion.li variants={itemVariants}>
                {user ? (
                  <CircleAvatar user={displayName} />
                ) : (
                  <button
                    onClick={() => {
                      navigate("signin");
                      setShowMenu(!showMenu);
                    }}
                    className="px-2 py-1 rounded  bg-white text-green-500 shadow-md"
                  >
                    Sign In
                  </button>
                )}
              </motion.li>
              <hr />
              <motion.button
                className="px-2 py-1 rounded  bg-white text-green-500 shadow-md"
                onClick={() => {
                  navigate("/creatneworkout");
                  setShowMenu(!showMenu);
                }}
                variants={itemVariants}
              >
                Create new workout
              </motion.button>
              <motion.button
                className="px-2 py-1 rounded  bg-white text-green-500 shadow-md"
                onClick={() => {
                  navigate("/createnewproduct");
                  setShowMenu(!showMenu);
                }}
                variants={itemVariants}
              >
                Add new product
              </motion.button>
              <hr />
              <motion.button variants={itemVariants}>About</motion.button>
              <motion.button onClick={null} variants={itemVariants}>
                Settings
              </motion.button>
              <hr />
              {user ? (
                <motion.button
                  className="bg-white text-green-500 w-fit m-auto px-2 py-1 rounded"
                  onClick={() => {
                    signout();
                    setDisplayName("");
                    navigate("/");
                    setShowMenu(!showMenu);
                    window.location.reload();
                  }}
                  variants={itemVariants}
                >
                  Sign Out
                </motion.button>
              ) : null}
            </motion.ul>
          </motion.div>
        </nav>
      )}
    </div>
  );
}
