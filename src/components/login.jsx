import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const handleChange = (e) => {
    e.preventDefault();
    // axios.post("https://reqres.in/api/login",{email,password}).then((data)=>{
    //     console.log(data)
    // }

    // ).catch((err)=>{
    //     console.log("login unsuccessful")
    // })
    //     const data = async () =>{
    //     const response = await axios.get("https://reqres.in/api/users?page=2")
    //     // console.log(response);
    //     setUserName(response.data.data)}
    //     data();
    //     console.log(userName[0].first_name);
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Welcome!
          </h1>
          <p className="leading-relaxed mt-4">
            Saving a penny makes a million if done enough times.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Savers are rich!
          </h2>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="throwErrors p-2 text-right text-red-600"></div>
          <button
            className="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg"
            onClick={handleChange}
          >
            Login
          </button>
          {/* {userName.map((user, index) => {
  return <p key={index}>first name: {user.first_name}</p>;
})} */}
          <p className="text-xs text-gray-500 mt-3">
            Don't have an account? Sign up
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
