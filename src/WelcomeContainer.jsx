import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
    query GetCountries($code: ID!)
    {
        country(code: $code)
        {
            name
        }
    }
`;

function ActualDataDisplay({code, setCode})
{
    console.log("Code: " + code)

    const regex = new RegExp("[A-Z]")
    
    if(code.length == 2 && regex.test(code))
    {
        const {loading, error, data} = useQuery(GET_COUNTRIES,
            {variables: {code}});
    
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error.message}</p>;
        if (data) return(
            <div>
                <p>data: {data.country.name}</p>
                <button 
                type="button"
                onClick={console.log("this does not work if we try to setCode. bad rex, bad")}
                className="bg-custom-purple-500 shadow-sm py-1 px-2 rounded">Go Back</button>
            </div>
        );
        else return <p>Unknown Error. </p>;
    }
    else
    {
        return <p>did not enter valid country code</p>
    }
    
};

function FormDisplay({onFormSubmit})
{
    const [inputValue, setInputValue] = useState("");
    const regex = new RegExp("[A-Z]")

    function handleSubmit(e)
    {
        //forms get submitted, not text input :)
        e.preventDefault();
        if(inputValue.length == 2 && regex.test(inputValue))
        {
            onFormSubmit(inputValue);
        }
        else
        {
            onFormSubmit("");
        }
      
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <div>
            <p className="font-medium">Country Code</p>
                <form className="pt-2 " onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="Country"
                placeholder="Country Code"
                onChange={handleInputChange}
                className=" border-1 rounded-md w-3/4 max-w-40 placeholder-shown:text-pink-600" />
                </form>
        </div>
    );
}



function WelcomeContainer()
{
    const [code, setCode] = useState("");

    const handleFormSubmit = (inputValue) => {
        setCode(inputValue)
    };

    return(
        <div className="max-w-1/2 shadow-lg h-fit pb-5 border-1 rounded-md text-center bg-custom-purple-300 ">
            <h1 className="pt-3 px-3 font-semibold">Welcome to LeetStats</h1>
            <div className="mb-3">
            <p className="">   
                <span className="italic font-semibold">All </span> 
                your stats in one place.</p>
            </div>

            <div className="pt-1 shadow-md bg-custom-purple-200 border-1 rounded-md w-3/4 content-center m-auto">
                    <div className="pb-2 pt-1">
                        {code ? <ActualDataDisplay code={code} setCode={setCode}/> :  <FormDisplay onFormSubmit={handleFormSubmit}/>}                      
                    </div> 
            </div>
        </div>
    );
}

export default WelcomeContainer;