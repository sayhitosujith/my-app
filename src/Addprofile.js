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




function Addprofile() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          
          <CardBody className="flex flex-col gap-4">
          <Avatar src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="avatar" size="xxl" />
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image(JPEG,PNG)</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>

<Input label="First Name *" size="lg" />
            <Input label="Last Name *" size="lg" />
            <Input label="Email *" size="lg" />
            <Input label="Phone Number *" size="lg" />
            <Input label="Password *" size="lg" />
            <Input label="Aadhar Number *" size="lg" />
            <Input label="Address *" size="lg" />
            <Input label="Zip Code *" size="lg" />   
        
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
          <div className="space-y-4">
  <a href="/Profile" className="block">
    <Button variant="gradient" fullWidth color="green">
      ADD
    </Button>
  </a>

  <Button variant="gradient" fullWidth color="red">
    Cancel
  </Button>
</div>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>
          
        <Typography variant="small" className="mt-6 flex justify-center">
           <b>NOTE : Add a new Customer profile, from Admin from backend.......................!!</b>
           </Typography>

        </Card>
      </div>

Notes / Complaints

    </div>
   

   
  );

  
}

export default Addprofile;

