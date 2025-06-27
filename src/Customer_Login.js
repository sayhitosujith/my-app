import './App.css';
import { Carousel } from "@material-tailwind/react";
import { IoMdFingerPrint } from "react-icons/io";


import {
  Card,
  CardHeader,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";


function Customer_Login() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
      <Card style={{width:"80%", height:"40%"}}> 
          
          <CardHeader
            variant="gradient"
            color="gray"
           className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            Login to Maven Meal 
            </Typography>
          </CardHeader>
          &nbsp;

          <Input label="Enter your Mobile Number" size="md" />
          &nbsp;
            <a href="/OTP" className="block w-full">
            <div className="flex justify-center">
  <Button variant="gradient" color="green" className="w-40">
    Get OTP
  </Button>
</div>
</a>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
            
        &nbsp;

        <div className="flex justify-center items-center mt-4">
      <IoMdFingerPrint className="text-6xl text-black hover:text-green-600 transition-colors duration-300 cursor-pointer" />
       </div>


        

 <div className="flex justify-center items-center mt-4">
<h1 style={{ color: 'Green' }}><b><div>Get access to your Orders, Wishlist and Recommendations </div></b></h1>
</div>


<Typography variant="small" className="mt-6 flex justify-center">
  Don&apos;t have an account?
  <Typography
    as="a"
    href="#signup"
    variant="small"
    color="red"
    className="ml-1 font-bold"
  >
    REGISTER FOR FREE
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

