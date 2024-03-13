import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";




function DataDisplay()
{
    //const [country, setCountry] = useState('');

    return(
        <div className="max-w-1/2 shadow-lg h-fit pb-5 border-1 rounded-md text-center bg-custom-purple-300 ">
            <h1 className="pt-3 px-3 font-semibold">Welcome to LeetStats</h1>
            <div className="mb-3">
            <p1 className="">
                <span className="italic font-semibold">All </span> 
                your stats in one place.</p1>
            </div>

            <div className="pt-1 shadow-md bg-custom-purple-200 border-1 rounded-md w-3/4 content-center m-auto">
                    <div className="pb-2 pt-1">
                    <p1 className="font-medium">Country</p1>
                        <form className="pt-2" onSubmit={
                            (e) => {
                                //forms get submitted, not text input :)
                                e.preventDefault();
                                console.log(e)
                            }
                        }>
                        <input type="text" name="Country" className=" border-1 rounded-md w-3/4 max-w-40" />
                        </form>
                    </div> 
            </div>
        </div>
    );
}

export default DataDisplay