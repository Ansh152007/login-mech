"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
  /**
   * The login page.
   *
   * This page renders a form that allows a user to login.
   * It uses the `useState` hook to store the user's input in
   * the component's state. The input is passed to the
   * `OnSignIn` function when the form is submitted.
   *
   * The `OnSignIn` function sends a POST request to the `/api/users/login`
   * API route with the user's input. If the request is successful, it logs
   * the user in and redirects them to the home page.
   *
   * If the request fails, it logs the error message.
   *
   * The page also renders a button that is disabled until the user has
   * entered a valid email and password.
   */
const page = () => {
  const router = useRouter();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const [loader, setloader] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbutton(true);
    } else {
      setbutton(false);
    }
  }, [user]);

  const [button, setbutton] = useState(false);

  const OnSignIn = async () => {
    try {
      setloader(true);
      const response = await axios.post("api/users/login", user);
      console.log("Signedin successfully", response.data);
      router.push("/profile")
    } catch (err:any) {
      console.log(err.message,"Login failed");
    } finally {
      setloader(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col font-bold text-2xl text-center">
        <h1>{loader ? "Siging Up..." : "Sign Up"}</h1>
        <div className="my-4">
          <input
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            value={user.email}
            className="p-2 rounded-xl text-black"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="my-2">
          <input
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            value={user.password}
            className="p-2 rounded-xl text-black"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="my-2">
          <button
            onClick={button ? OnSignIn : () => {}}
            disabled={!button}
            className={`p-2 rounded-xl text-black ${
              button
                ? "bg-gray-700 cursor-pointer active:bg-gray-600 active:scale-95"
                : "bg-gray-400 cursor-not-allowed"
            } transition-all`}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
