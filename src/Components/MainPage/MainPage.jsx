import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SideList } from "../SideList/SideList";
import { ImgView } from "../ImgView/ImgView";
import PropTypes from "prop-types";
import React from "react";

const DateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export default function MainPageTest() {
  //states
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState([]);

  // fetch start here
  useEffect(() => {
    fetch("http://127.0.0.1:5010/articles")
      .then((res) => {
        const resulte = res.json();
        return resulte;
      })
      .then((resulte) => {
        setData(resulte.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      {data === null ? (
        isloading && (
          <span className=" text-red-600 bold text-xl h-30 ">is loading </span>
        )
      ) : (
        <>
          <p className=" text-lg w-40 bg-red-600 text-white p-4 ml-0 mb-0 mt-4">
            اخبار متنوعه
          </p>
          <hr className="h-2 mb-2 bg-red-600 border-0 "></hr>
          <div>
            {data.map((item) => (
              <div key={item.id}>
                <img style={{ height: 400, width: 200 }} alt="" />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
