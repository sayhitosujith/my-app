import './App.css';
import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";


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
           Maven MEAL ADMIN
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <div></div>
              <Checkbox label="Remember Me" /><div></div>
              <a href="#desired_content">Forgot Password? Click here to Reset</a>

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
            
        <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
      >
        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
 
      <br></br>
        <Button
        size="lg"
        variant="gradient"
        color="light-blue"
        className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
      >
        Sign in with Twitter
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
          <img src="https://docs.material-tailwind.com/icons/twitter.svg" alt="metamask" className="h-6 w-6" />
        </span>
      </Button>
  
      <br></br>

      <Button size="lg" color="white" className="flex items-center gap-3">
        <img src="https://docs.material-tailwind.com/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Connect Wallet
      </Button>

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

      <img style={{width: '100%', height: '100vh'}} src="https://www.macobserver.com/wp-content/uploads/2023/04/How-To-Fix-a-Blurry-iPhone-Home-Screen.jpg" 
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

