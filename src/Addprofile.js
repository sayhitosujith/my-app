import './App.css';
import { Avatar } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,

} from "@material-tailwind/react";




function Addprofile() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            ADD PROFILE
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
          <Avatar src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="avatar" size="xxl" />
            
          
 

       
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>

<Input label="First Name *" size="lg" />
            <Input label="Last Name *" size="lg" />
            <Input label="Email *" size="lg" />
            <Input label="Phone Number *" size="lg" />
            <Input label="Password *" size="lg" />
            <Input label="Confirm Password *" size="lg" />
            <Input label="Aadhar Number *" size="lg" />
            <Input label="Address *" size="lg" />
            <Input label="Zip Code *" size="lg" />   
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
             Add
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
           <b>NOTE : Add a new Customer profile, from Admin from backend.......................!!</b>
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
      <img style={{width: '60%', height: '100vh'}} src="https://user-images.githubusercontent.com/74038190/219923823-bf1ce878-c6b8-4faa-be07-93e6b1006521.gif" />
    </div>
   

   
  );

  
}

export default Addprofile;

