import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slice/counterSlice";

const CounterPage = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.value);

  const incrementByCustomNumber = (number, event) => {
    event.preventDefault();
    const value = parseInt(number);
    dispatch(incrementByAmount(value));
  };

  return (
    <div className="h-96 my-36">
      <div className="w-full h-full bg-gray-300 rounded-lg">
        <div className="">
          <h1 className="text-center pt-10 font-bold ">Simple counter app</h1>
          <p className="text-center font-semibold">{number}</p>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center gap-10 mt-20">
          <button
            onClick={() => dispatch(decrement())}
            className="py-2 px-8 bg-indigo-600 rounded-lg text-white text-xl font-bold hover:bg-indigo-400 transition duration-500"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="py-2 px-8 bg-indigo-600 rounded-lg text-white text-xl font-bold hover:bg-indigo-400 transition duration-500"
          >
            Increment
          </button>
        </div>
        {/* Button */}

        {/* Increment by N */}
        <form
          className="flex gap-5 justify-center items-center mt-10"
          onSubmit={() => incrementByCustomNumber(value, event)}
        >
          <input
            type="number"
            placeholder="Increment by"
            className="py-2 px-8 rounded-lg"
            value={value}
            onChange={(e) => {
              console.log(e.target.value);
              setValue(e.target.value);
            }}
          />
          <button className="py-2 px-8 bg-indigo-600 rounded-lg text-white text-xl font-bold hover:bg-indigo-400 transition duration-500">
            submit
          </button>
        </form>
        {/* Increment by N */}
      </div>
    </div>
  );
};

export default CounterPage;
