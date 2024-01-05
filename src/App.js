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


function App() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-92">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            Dabbwala ADMIN 
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
              <Checkbox label="Forgot Password" />

            </div>
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
             Log In
            </Button>
            &nbsp;
           
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
            
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
          

        </Card>
      </div>
      <Carousel className="rounded-xl">

      <img style={{width: '100%', height: '100vh'}} src="https://images.projectsgeek.com/2016/07/Dabbawala-Android-Project.jpg" 
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

export default App;

