import React from "react";
import { ReactDOM } from "react";

function Login() {
  return (
    <div className="w-1/3 shadow-lg h-fit pb-5 border-1 rounded-md text-center bg-custom-purple-300 ">
      <h1 className="pt-3 font-semibold">Welcome to LeetStats</h1>
      <div className="mb-3">
        <p1 className="">
          <span className="italic font-semibold">All </span>
          your stats in one place.
        </p1>
      </div>
      <div className="pt-1 h-40 flex justify-center items-center shadow-md bg-custom-purple-200 border-1 rounded-md w-3/4 content-center m-auto">
        <div className="flex flex-col items-start pb-2 pt-1">
          <p1 className="font-medium">Username: </p1>
          <form className="pt-2 flex gap-2">
            <input
              type="text"
              name="Username"
              className="p-2 border-1 rounded-md"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="p-2 rounded-md bg-slate-500"
              type="submit"
            >
              Fetch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
