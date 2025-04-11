import './App.css';
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Badge } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Checkbox,
} from "@material-tailwind/react";




function ResetPassword() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            RESET PASSWORD 
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Old Password *" size="lg" />
            <Input label="New Password  *" size="lg" />
            <Input label="confirm Password  *" size="lg" />
           
            <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
            <a href="/Success">
               RESET 
               </a>    
            </Button>
            <br></br>

            <Button variant="gradient" fullWidth>
            <a href="/resetpassword">
               CANCEL 
               </a>  
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
          
          </CardFooter>
          
        <Typography variant="small" className="mt-6 flex justify-center">
           <b>Please enter old password , Password and confirm password to reset your password</b>
           <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
              </Typography>
           </Typography>

        </Card>

        {/* Logout Icon */}
            <div className="absolute top-4 right-4 flex items-center space-x-8">
          <a href="">
          <Badge content="6">
            <IoIosNotificationsOutline color="black" size={30} />
         </Badge>
          </a>
          <a href="/my-app">
            <FaPowerOff color="black" size={20} />
          </a>
        </div>
      </div>
      <img style={{width: '50%', height: '100vh'}} src="https://courseuniv.com/app/assets/images/register_02.gif" />
    </div>
   

   
  );

  
}

export default ResetPassword;

