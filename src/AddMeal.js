import './App.css';
import { Avatar } from "@material-tailwind/react";


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
} from "@material-tailwind/react";




function AddMeal() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            Add Meal Box 
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
          <Avatar src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="avatar" size="xxl" />
            
          
 

       
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>

            
<div className="w-72">
      <Select label="Select Item">
        <Option>Chapati</Option>
        <Option>Poori</Option>
      </Select>
    </div>


    <div className="w-72">
<form class="max-w-sm mx-auto">
    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Quantity:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required/>
</form>   
</div>

<label>
     <b> Description:</b>
     <Textarea label="" />

    </label>

    <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
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
            <a href="/Home">
              ADD
               </a>  
            </Button>
            <br></br>
            <Button variant="gradient" fullWidth>
            <a href="/">
              Cancel
               </a> 
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>
          
        <Typography variant="small" className="mt-6 flex justify-center">
           <b>NOTE : Add a new Meal box as per customer Request, User can request multiple meal boxes</b>
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
      <img style={{width: '60%', height: '100vh'}} src="https://80a12acdf128618db717-c22bdc94c381e6a71ffe213927c1cf90.ssl.cf1.rackcdn.com/auto2.gif" />
    </div>
   

   
  );

  
}

export default AddMeal;

