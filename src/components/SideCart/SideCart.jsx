import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ watchTime }) => {
  const [time, setTime] = useState(watchTime);
  //break time
  const [breakTime, setBreakTime] = useState(0);
  //break time 2
  const [breakTime2, setBreakTime2] = useState(0);
  //break time 3
  const [breakTime3, setBreakTime3] = useState(0);
  useEffect(() => {
    const getWatchTimeFromStroage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStroage);
    //break time
    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
    // break time 2
    const getBreakTime2 = localStorage.getItem("breakTime2");
    setBreakTime2(getBreakTime2);

    // break time 3
    const getBreakTime3 = localStorage.getItem("breakTime3");
    setBreakTime2(getBreakTime3);
  }, [watchTime]);

  // break time
  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };

  // break time 2
  const handleBreakTime2 = (bt2) => {
    localStorage.setItem("breakTime", bt2);
    setBreakTime2(bt2);
  };

  // break time 3
  const handleBreakTime3 = (bt3) => {
    localStorage.setItem("breakTime", bt3);
    setBreakTime3(bt3);
  };

  // use tract tostify
  const handleComplete = () => {
    toast("Wow so easy!");
  };
  return (
    <div>
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>Total Watch Time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={() => handleBreakTime(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button
        onClick={() => handleBreakTime2(20)}
        className="w-25 btn-circle bg-warning btn btn-info"
      >
        20
      </button>
      <button
        onClick={() => handleBreakTime3(25)}
        className="w-25 btn-circle m-1 bg-danger btn btn-info"
      >
        25
      </button>

      <input type="text" value={breakTime} disabled />
      <input type="text" value={breakTime2} disabled />
      <input type="text" value={breakTime3} disabled />
      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  );
};

export default SideCart;
