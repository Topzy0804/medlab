import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";
import { useUser } from "./userContext";

import { Facebook, Linkedin, Mail, Instagram } from "lucide-react";

import imgReg from "../assets/img1.png";

const Login = () => {
  const navigate = useNavigate();
  const userCtx = useUser();
  const setUser = userCtx?.setUser ?? (() => {});
  // const getLoggedInUser = userCtx?.getLoggedInUser ?? null;
  const [error, setError] = useState(null);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    setError(null);
    try {
      await account.deleteSessions("current").catch(() => {});

      await account.createEmailPasswordSession(
        userDetails.email,
        userDetails.password,
      );

      const currentUser = await account.get();

      setUser(currentUser);

      const AdminEmail =
        import.meta.env.VITE_ADMIN_EMAIL || "azeezullahtolulope1004@gmail.com";

      if (currentUser.email === AdminEmail) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log("Login failed", err);
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <div>
      <div className="relative md:h-140 mb-20">
        <div className="w-full h-full overflow-hidden">
          <img
            src={imgReg}
            alt="Login Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-green-900/90 py-30 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white font-serif text-6xl py-4">Log in</h1>
          <nav>
            <ul className="flex justify-center items-center gap-4 p-4 text-white">
              <li>Home</li>
              <li className="mx-2">-</li>
              <li>Log in</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="shadow-lg md:p-6 p-3 md:m-10 m-4 border-t-4 border-green-600 mt-15 md:w-1/2 md:mx-auto">
        <h2>Log in</h2>

        <div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 md:px-10 md:py-10 p-6"
          >
            {error && <div className="text-red-500">{error}</div>}
            <div className="flex flex-col font-sans gap-3 justify-center items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                className="px-2 w-full h-15 border border-gray-300"
              />
            </div>

            <div className="flex flex-col font-sans gap-3 justify-center items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                className="px-2 w-full h-15 border border-gray-300"
              />
            </div>

            <div className="flex gap-4">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">I agree to the terms and conditions</label>
            </div>
            <button
              type="submit"
              className="border border-gray-300 w-full h-15 bg-green-600 font-bold"
            >
              Log in
            </button>
          </form>
        </div>

        <p>or</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-10 md:py-10 p-6">
          <p className="flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-blue-400 p-5">
            <Facebook size={20} /> import from facebook
          </p>
          <p className="flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-red-700 p-5">
            <Mail size={20} /> import from google
          </p>
          <p className="flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-pink-400 p-5">
            <Instagram size={20} /> import from instagram
          </p>
          <p className="flex justify-center items-center gap-3 border hover:text-white font-sans border-gray-300 hover:bg-blue-700 p-5">
            <Linkedin size={20} /> import from linkedin
          </p>
        </div>
        <p>
          Don't have an account?{" "}
          <Link
            to="/registration"
            className="text-green-500 hover:text-green-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
