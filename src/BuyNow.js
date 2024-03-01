import './App.css';
import { Avatar } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";


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
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            BuyNow
                        </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
          <Avatar src="https://media.licdn.com/dms/image/D5603AQFxv9b5cCxs2w/profile-displayphoto-shrink_400_400/0/1703428628673?e=1709769600&v=beta&t=8mgWsJuWJNrgjbsLZpe_vQCFOdMKgLQSE6ruvd5OgkU" alt="avatar" size="xxl" />
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
             Register
            </Button>
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

