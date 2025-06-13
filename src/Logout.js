import './App.css';
import { Input, Typography } from "@material-tailwind/react";
import React from 'react';
import packageJson from '../package.json';
import RCB from './assets/RCB.png'; // adjust the path as necessary

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Button,
} from "@material-tailwind/react";


function Logout() {
  return (
    
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center bg-green-100'>
        <Card className="w-92">
        <CardHeader
  variant="gradient"
  color="green"
  className="mb-4 grid h-28 place-items-center"
>
  <Typography variant="h3" color="white">
    LOGOUT
  </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
          <div className="w-[32rem]">
  
      <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
       User has been successfully logged out. Thank you for using our service!
      </Typography>
    </div>            <div className="-ml-2.5">
             
            
            </div>
            
          </CardBody>
          <CardFooter className="pt-0 flex flex-col items-center gap-4">
         
          <div className="flex justify-center items-center h-full">
  <a
    href="/my-app"
    className="underline text-green-700 text-lg font-medium"
  >
    Click here to LOGIN
  </a>
</div>


  {/* Centered Application Version */}
  <div className="mt-4">
    <Typography variant="small" color="black" className="text-center">
      Application Build Version: {packageJson.version}
    </Typography>
  </div>
</CardFooter>
        
        </Card>
      </div>
       {/* <img style={{width: '90%', height: '100vh'}} src="https://media.glamour.com/photos/66b395f7626a69f05aa0b823/master/w_2560%2Cc_limit/0807-earlydinner.gif"   */}
       <img style={{width: '130vh', height: '100vh'}} src={RCB}
      alt=" Lunch box"
      
        className="h-full w-full object-cover"
        />
    </div>
  );
}

export default Logout;

