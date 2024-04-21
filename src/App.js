import './App.css';
import { Input, Typography } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
            ADMIN
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <div className="w-[32rem]">
      <Input type="password" label="Password" />
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
        Use at least 8 characters, one uppercase, one lowercase and one number.
      </Typography>
    </div>            <div className="-ml-2.5">
              <div></div>
              <Checkbox label="Remember Me" /><div></div>
              <a href="/ResetPassword">Forgot Password? Click here to <u><b>Reset</b></u>
              </a>
            </div>
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
            <a href="/Home">
             LOGIN 
               </a>              
            </Button>
            <br></br>
            <Button variant="gradient" fullWidth>
            <a href="/">
               Cancel 
               </a>   
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
        className="flex items-center gap-3">

        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
        <a href="/Customer_Home">
        Continue with Google 
               </a> 
      </Button>
 
      <br></br>
        <Button
        size="lg"
        variant="gradient"
        color="light-blue"
        className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
      >
        <a href="/Customer_Home">
        Continue with Twitter
               </a> 
        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
          <img src="https://docs.material-tailwind.com/icons/twitter.svg" alt="metamask" className="h-6 w-6" />
        </span>
      </Button>
  
      <br></br>

      <Button size="lg" color="white" className="flex items-center gap-3">
        <img src="https://docs.material-tailwind.com/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
        Connect to the Wallet
      </Button>

            <Typography variant="small" className="mt-8 flex justify-center">
              Don&apos;t you have an account? click here link to
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
               <u><a href="/NewRegistration">Sign up</a></u> 

              </Typography>
            </Typography>
          </CardFooter>
          

        </Card>
      </div>
              <img style={{width: '60%', height: '100vh'}} src="https://png.pngtree.com/background/20230618/original/pngtree-online-food-delivery-concept-computer-generated-3d-render-of-food-flying-picture-image_3756857.jpg" 
      alt="image 1"
        className="h-full w-full object-cover"
        />

    </div>
  );

  
}

export default App;

