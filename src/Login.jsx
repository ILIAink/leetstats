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

      <div className="pt-1 shadow-md bg-custom-purple-200 border-1 rounded-md w-3/4 content-center m-auto">
        <div className="pb-2 pt-1">
          <p1 className="font-medium">Username</p1>
          <form className="pt-2">
            <input
              type="text"
              name="Username"
              className="p-2 border-1 rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
