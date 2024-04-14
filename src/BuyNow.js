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

<style>
.footer 
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
   clearfix overflow: auto;

</style>


function BuyNow() {
  return (

    <div className="flex flex-row gap-5">
        <header>
        <Typography variant="small" className="mt-0 justify-center">
 <img style={{width: '45%', height: '25vh'}} src="https://mms.businesswire.com/media/20191209005536/en/761245/23/FoodMaven-Logo.jpg" /> </Typography>      
 <br></br>
 <br></br>
   
  </header>

  <br></br>
  <br></br>
  <br></br>
  <br></br>

      <div className="flex flex-col gap-5">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <b><hr class="separator" /></b>

      <Typography variant="h3" color="Black">
        <h1 style={{ color: 'Green' }}><b><div>Contact</div></b></h1> </Typography>  
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
            <Input label="First Name " size="lg" />

            <Input label="Last Name " size="lg" />

            <Input label="Company (Optional) " size="lg" />

            <Input label="Address " size="lg" />
            <Input label="City " size="lg" />
            <Input label="State " size="lg" />
            <Input label="Pincode " size="lg" />
            <Input label="Phone " size="lg" />

          <Checkbox label="Save this information for next time" />
          <Checkbox label="Text me with news and offers" />
          
          
          <b><hr class="separator" /></b>

          <h1 style={{ color: 'Green' }}><b><div>PAYMENT </div></b></h1>

         <label>
            <input type="radio" value="option1" checked={false} />&nbsp;&nbsp;
            Razorpay Secure (UPI, Cards, Wallets, NetBanking)
            </label>

            <label>
            <input type="radio" value="option1" checked={true} />&nbsp;&nbsp;
            Cash on Delivery(COD)
            </label>
          
            <b><hr class="separator" /></b>

          </CardBody>
          <CardFooter className="pt-0">
          <Button color="green" appearance="primary" > 
           COMPLETE ORDER</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="green" appearance="primary" > 

           CANCEL</Button> 
           <br></br>
           <br></br>

            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
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
      </div>
      
      <br></br>
     

    </div>
    

  );

  
}

export default BuyNow;

