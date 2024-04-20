import './App.css';

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
            ADMIN
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <div></div>
              <Checkbox label="Remember Me" /><div></div>
              <a href="/ResetPassword">Forgot Password? Click here to <b>Reset</b>
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
              Don&apos;t you have an account? click on the link to
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                <a href="/NewRegistration">Sign up</a>

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

