import './App.css';
import { Avatar } from "@material-tailwind/react";
import { DocSearch } from "@docsearch/react";
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  Button,
  Select,
  Option,
  Checkbox,
  Input
} from "@material-tailwind/react";




function BuyNow() {
  return (

    <div className="flex flex-row gap-5">
        
      <div className='w-1/2 h-screen flex items-center fullWidth justify-center'>
        
        <Card className="w-98">
        <h1 style={{ color: 'Green' }}><b><div>Contact</div></b></h1>

          <b><hr class="separator" /></b>

         
          

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-6">
          <Input label="Email or Mobile Number " size="lg" />
          <h1 style={{ color: 'Green' }}><b><div>Delivery </div></b></h1>

          <div className="w-72">
              <Select label="Country/Region">
                <Option>India</Option>
                <Option>Srlkanka</Option>
                <Option>Thailand</Option>
                <Option>China</Option>

              </Select>
            </div>
         <b> <div><button><h1 style={{ color: 'red' }}><b><div>-</div></b></h1></button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button><h1 style={{ color: 'Red' }}><b><div>+</div></b></h1></button></div></b>

          <Checkbox label="Select Meal" />
         
          <b><hr class="separator" /></b>
          </CardBody>
          <CardFooter className="pt-0">
          <Button color="green" appearance="primary" > 
           SAVE FOR LATER</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="green" appearance="primary" > 

           CANCEL</Button> 
           
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <b><u>NOTE</u>: From the Saved Address the order will be processed,Please add new Address if required </b>

        <Typography variant="small" className="mt-6 flex justify-center">
    
        <br></br>

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
      <br></br>
     

    </div>
    

  );

  
}

export default BuyNow;

