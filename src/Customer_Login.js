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


function Customer_Login() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
      <Card style={{width:"80%", height:"60%"}}> 
          
          <CardHeader
            variant="gradient"
            color="gray"
           className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            Login to Dabbawala 
            </Typography>
          </CardHeader>
          &nbsp;

            <Input label="Enter Email ID / Mobile Number" size="lg" />
            &nbsp;
            <Button variant="gradient" fullWidth>
             Request OTP
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
            
        &nbsp;

<Typography>Get access to your Orders, Wishlist and Recommendations

</Typography>


            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                Create New Account
              </Typography>
            </Typography>
          

        </Card>
      </div>
      <Carousel className="rounded-xl">

      <img style={{width: '100%', height: '100vh'}} src="https://i.ytimg.com/vi/kiIPHm_4fbM/maxresdefault.jpg" 
      alt="image 1"
        className="h-full w-full object-cover"
        />
              <img style={{width: '100%', height: '100vh'}} src="https://www.dabbawala.live/img/img1.png" 
      alt="image 1"
        className="h-full w-full object-cover"
        />
              <img style={{width: '100%', height: '100vh'}} src="https://www.dabbawala.live/img/img3.png" 
      alt="image 1"
        className="h-full w-full object-cover"
        />
            </Carousel>

    </div>
  );

  
}

export default Customer_Login;

