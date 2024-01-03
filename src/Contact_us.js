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




function Contact_us() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            Send us a Message. 
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="First Name" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Subject" size="lg" />
            <Input label="Comments" size="lg" />
            <Input label="Confirm password" size="lg" />
            
            
          </CardBody>
            <Button variant="gradient" fullWidth>
             Send message
            </Button>
            &nbsp;
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
          
          
        <Typography variant="small" className="mt-6 flex justify-center">
           <b>Address : 23, Navyog Mension, Sleater Road, Naushir Bharucha Marg, Opposite Krishna Palace Hotel,Grant Road, Mumbai - 400007 info@mumbaidabbawala.in</b>
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
      <img style={{width: '60%', height: '100vh'}} src="https://mocomi.com/wp-content/uploads/2016/09/MOC_GIFO_DABBAWALAS.gif" />
    </div>
   

   
  );

  
}

export default Contact_us;

