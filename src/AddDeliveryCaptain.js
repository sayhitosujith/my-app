import './App.css';
import { Avatar } from "@material-tailwind/react";


import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Checkbox,

} from "@material-tailwind/react";




function AddDeliveryCaptain() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
        <Typography>
       ADD DELIVERY CAPTAINS  </Typography> 
                  <CardBody className="flex flex-col gap-4">
          <Avatar src="https://cdn-icons-png.flaticon.com/512/305/305976.png" alt="avatar" size="xxl" />
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image(JPEG,PNG)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>

            <Input label="First Name *" size="lg" />
            <Input label="Last Name *" size="lg" />
            <Input label="Email *" size="lg" />
            <Input label="Phone Number *" size="lg" />
            <Input label="Password *" size="lg" />
            <Input label="Aadhar Number *" size="lg" />
            <Input label="Address *" size="lg" />
            <Input label="DL Number *" size="lg" />   
        
            <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
            <a href="/DeliveryBoy">
             ADD 
               </a>    
            </Button>
            <br></br>
            <Button variant="gradient" fullWidth>
             Cancel
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>
          
        <Typography variant="small" className="mt-6 flex justify-center">
           <b>NOTE : Add a new Delivery captains profile, by verifying His/Her Identity.!!</b>
           </Typography>

        </Card>
      </div>
      <img style={{width: '60%', height: '100vh'}} src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/delivery-boy.gif"/>
      Add meals image
    </div>
   

   
  );

  
}

export default AddDeliveryCaptain;

