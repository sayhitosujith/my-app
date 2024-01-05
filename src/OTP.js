import './App.css';
import { Carousel } from "@material-tailwind/react";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";


function OTP() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
      <Card style={{width:"80%", height:"40%"}}> 
          
          <CardHeader
            variant="gradient"
            color="gray"
           className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            OTP Verification 
            </Typography>
          </CardHeader>
          &nbsp;

          <b><Input variant="standard" placeholder="Please enter OTP sent to your Mobile Number / Email ID "/></b>
            &nbsp;
            <Button variant="gradient" fullWidth>
             Validate
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
            
        &nbsp;

        <Typography>If you didn't recieve a code! <u> <a href="https://example.com/faq.html" rel="noreferrer">
      Resend
  </a></u></Typography>
       

          

        </Card>
      </div>
    

    </div>
  );

  
}

export default OTP;

