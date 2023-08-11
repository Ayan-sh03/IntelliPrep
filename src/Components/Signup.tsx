import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface formType {
  email: string;
  username: string;
  password: string;
}

interface ApiResponse {
  email: string;
  token: string;
  username: string;
}
export default function SignUp() {
  const [form, setForm] = useState<formType>({
    username: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevForm: formType) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    axios
      .post<ApiResponse>(
        "https://intelliprep.onrender.com/account/register/",
        form
      )
      .then((response) => {
        // Handle the response data here
        // console.log(response.data.email);
        // console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);

        // console.log(response.data.username);
        navigate("/");
      })
      .catch((error) => {
        // Handle errors here
        console.log("Error:", error);
      });
  }
  /////////// --- Fetch Request ------ //////////////////////////
  // const handleSubmit = async (event: FormEvent) => {
  //   event.preventDefault();

  //   const requestOptions: RequestInit = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json", // Set the appropriate content type
  //     },
  //     body: JSON.stringify(form),
  //     redirect: "follow",
  //   };

  //   try {
  //     const response = await fetch(
  //       "https://intelliprep.onrender.com/account/register/",
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden font-montserrat ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-4xl font-semibold text-center text-purple-700 underline">
          Sign Up
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-800 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-lg font-semibold text-gray-800 "
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-lg font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              SignUp
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already Registered?{" "}
          <a
            href="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
