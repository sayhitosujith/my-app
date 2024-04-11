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
        <h1 style={{ color: 'Green' }}><b><div>BILL DETAILS</div></b></h1>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-5">
          <b><div>North Indian Meal</div></b>
          <Avatar src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw" alt="avatar" size="xxl" variant="square"/>
          <h1 style={{ color: 'red' }}><b><div>Out of Stock </div></b></h1>
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
          <b> NOTE: From the Saved Address the order will be processed,Please add new Address if required </b>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-6">
          <b><div>Chines Meal</div></b>
          <Avatar src="https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220" alt="avatar" size="xxl" variant="square"/>
          <h1 style={{ color: 'Green' }}><b><div>In Stock </div></b></h1>
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

          <b> NOTE: From the Saved Address the order will be processed,Please add new Address if required </b>

        <Typography variant="small" className="mt-6 flex justify-center">
    
        
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

            <b><hr class="w-1/2 flex items-center justify-center" /></b>
            <div style={{ width: '38rem' }}>
            <h1 style={{ color: 'Orange' }}><b><div>Review your order and address details to avoid cancellations</div></b></h1>
    <b><hr class="separator" /></b>
<br></br>
<div>Item Total(2 Items): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 300/- </div>
<br></br>
<b><hr class="separator"/></b>
<br></br>
<div>Delivery Tip :<h1 style={{ color: 'orange' }}><b><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Tip</div></b></h1>
</div>
<br></br>
<div>Discount : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50/-</div>
<br></br>
<div>Delivery Charges: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free/-</div>
<br></br>
<div>GST and Restaurant Charges:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50/-</div>
<br></br>
<b><hr class="separator" /></b>
<br></br>
<b><div>To Pay: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 350/-</div></b>
<br></br>
<b><hr class="separator" /></b>
<br></br>
<h1 style={{ color: 'Red' }}><b><div><u>NOTE</u>: If you cancel within 60 seconds of placing your order, a 100% refund will be issues ,No refund for cancellation made after 60 seconds</div></b></h1>

<br></br>
<h1 style={{ color: 'Red' }}><b><div>Avoid cancellation as it leads to food wastaged</div></b></h1>
    <br></br>
    <b><hr class="separator"/></b>
<br></br>
    <Button color="red" appearance="primary" > 
           PLACE ORDER</Button> 
   

     </div>
     <br></br>
            </CardBody>
        </CardHeader>
      </card>

    </div>
    

  );

  
}

export default MyCart;

