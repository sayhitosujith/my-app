import './App.css';
import { Avatar } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { Progress } from "@material-tailwind/react";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Radio,
  Button,
} from "@material-tailwind/react";




function BuyNow() {
  return (
    <div className="flex flex-row gap-5">
    
      <div className='w-1/1 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardBody className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
        <div>
        </div>
      </div>       
          </CardBody>
          <CardFooter className="pt-0">

            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
          </Typography>
            <Typography variant="small" className="mt-6 flex justify-center">
            <Radio name="color" color="red" />
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                 <b> <Typography>DELIVERY ADDRESS</Typography></b>
                 <b><hr class="separator" /></b>

                Sujith - 9480860587 
                <br></br>
                <div></div>
                Medahalli - 560049
                <div></div>
                <b><hr class="separator" /></b>
               <button> <h1 style={{ color: 'red' }}><b><div>EDIT</div></b></h1></button>
<br></br>
                <Button color="red" appearance="primary"> 
          DELIVER HERE</Button> 
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div></div>
      <Progress value={50} label="Completed" />

    </div>
   

   
  );

  
}

export default BuyNow;


