import React from "react";
import { useState } from "react";
// import PureChart from 'react-native-pure-chart';

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Chart", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  //&nbsp; is used for the words spacing in html tag//

  return (
    <div className="flex basis-1/2">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-800 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-gray-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4  w-16 h-8 items-center">
          <img
            src="./src/assets/logoo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />

          <h1
            className={`text-gray-100  origin-left font-semibold text-xl duration-200 ${
              !open && "scale-0"
            }`} //&nbsp; is used for the words spacing in html tag//
          >
            Mero&nbsp;Paisa
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-green-600 text-gray-100 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Made some changes on the code to shift the starting balance at the corner */}
      {/* <div className="grid grid-cols-2 gap-4 place-content-between h-48 p-10  ">
        <div>
          <h1 className="title-font p-4 m-12 font-extralarge font-bold text-4xl text-orange-600 mt-6">
            Monthly&nbsp;Budget
          </h1>
        </div>
        <div className="grid justify-end items-end mt-2">
          <p className="font-semibold ml-12 mt-2">
            Starting Balance: Rs 51,000
          </p>
        </div>
      </div> */}
      {/*       
      <div className="grid grid-cols-2 gap-4 place-content-between h-48 p-10  ">
        <p className=" grid col-start-1 col-end-7 "> Good afternoon, Rabin Pandey!!</p>
        <div>
          <div className="text-left">
            <h1 className="title-font p-4 m-2 font-extralarge font-bold text-4xl text-orange-600 mt-20">
              Monthly&nbsp;Budget
            </h1>
          </div>
        </div>
        <div className="grid justify-end items-end mt-2">
          <div
            className="font-semibold  sm:block ml-12 mt-2"
            style={{ position: "absolute", top: 135, right: 20 }}
          >
            Starting Balance: Rs 51,000
          </div>
        </div>
        <div className=" grid  place-content-between h-15 mt-8 m-4">
          <p className="text-3xl text-gray-400">
            {" "}
            Hello there is a multiple classes okay dude and thers is a int the
            row
          </p>
        </div>
        <div className=" grid  place-content-between h-15 mt-8 m-4">
          <p className="text-3xl text-gray-400">
            {" "}
            Hello there is a multiple classes okay dude and thers is a int the
            row
          </p>
        </div>
      </div> */}
      <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-extralarge font-bold text-4xl text-orange-600">
              Monthly&nbsp;Budget
            </h1>
            <p className="leading-relaxed mt-4">
             Here comes Bar Chart
            </p>
          </div>
          <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Savers are rich 
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
