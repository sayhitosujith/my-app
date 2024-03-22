import './App.css';
import { Avatar } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { Progress } from "@material-tailwind/react";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";




function BuyNow() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardBody className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" variant="square" />
        <div>
         
          <Typography variant="h6">SUJITH</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            SDET
          </Typography>
        </div>
      </div>       
          </CardBody>
          <CardFooter className="pt-0">
           <Progress value={50} label="Completed" />

            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
          </Typography>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                Login
              </Typography>
            </Typography>
          </CardFooter>
          
        <Typography variant="small" className="mt-6 flex justify-center">
           <b>To verify your number</b>
           <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
              </Typography>
           </Typography>


           

        </Card>
      </div>
    </div>
   

   
  );

  
}

export default BuyNow;

