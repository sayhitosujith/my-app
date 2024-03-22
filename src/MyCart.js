import './App.css';
import { Avatar } from "@material-tailwind/react";
import { DocSearch } from "@docsearch/react";


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
  Navbar
} from "@material-tailwind/react";




function MyCart() {
  return (

    <div className="flex flex-row gap-5">
        
      <div className='w-1/2 h-screen flex items-center fullWidth justify-center'>
        
        <Card className="w-98">


          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-5">
          <b><div>North Indian Meal</div></b>
          <Avatar src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw" alt="avatar" size="xxl" variant="square"/>
          <h1 style={{ color: 'red' }}><b><div>Out of Stock </div></b></h1>
          <Checkbox label="Select Meal" />
          <b><hr class="separator" /></b>
          </CardBody>
          <CardFooter className="pt-0">
          <Button color="white" appearance="primary" > 
           SAVE FOR LATER</Button> 
            <Button color="white" appearance="primary" > 
           REMOVE</Button> 
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-6">
          <b><div>Chines Meal</div></b>
          <Avatar src="https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220" alt="avatar" size="xxl" variant="square"/>
          <h1 style={{ color: 'Green' }}><b><div>In Stock </div></b></h1>
          <Checkbox label="Select Meal" />
          <b><hr class="separator" /></b>
          </CardBody>
          <CardFooter className="pt-0">
          <Button color="white" appearance="primary" > 
           SAVE FOR LATER</Button> 
            <Button color="white" appearance="primary" > 
           REMOVE</Button> 
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <b><hr class="separator" /></b>
          
        <Typography variant="small" className="mt-6 flex justify-center">
    
           <b> NOTE: From the Saved Address the order will be processed,Please add new Address if required </b>
        
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
      
      <card >
        <CardHeader >
            <CardBody>
            <b><hr class="separator" /></b>
            <div style={{ width: '38rem' }}>
    <b><button>PRICE DETAILS</button></b> 
    <br></br>
    <b><hr class="separator" /></b>
<br></br>
<div>Price(2 Items):300 </div>
<br></br>
<div>Discount : 50/</div>
<br></br>
<div>Delivery Charges: FREE</div>
<br></br>
<b><hr class="separator" /></b>
<br></br>
<b><div>Total Amount: 150/-</div></b>
<br></br>
<b><hr class="separator" /></b>
<br></br>
<h1 style={{ color: 'Green' }}><b><div>You will save ₹150/- on this order </div></b></h1>

    <b><hr class="separator" /></b>
    <br></br>
    <Button color="red" appearance="primary" > 
           PLACE ORDER</Button> 
     </div>
            </CardBody>
        </CardHeader>
      </card>

   

    </div>
   

  );

  
}

export default MyCart;

