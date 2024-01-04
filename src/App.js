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
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            Welcome to dabbawala 
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
      <img style={{width: '60%', height: '100vh'}} src="https://c4.wallpaperflare.com/wallpaper/210/692/56/5bd0314602e6f-wallpaper-preview.jpg" />
    </div>
  );

  
}

export default App;

