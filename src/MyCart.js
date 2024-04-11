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
          <Button variant="outlined" className="flex items-center gap-3">
        Refresh
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
          <b><hr class="separator" /></b>
          </CardBody>
          <CardFooter className="pt-0">
          <Button color="green" appearance="primary" > 
           SAVE FOR LATER</Button> <br></br><br></br>
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
          <Button variant="outlined" className="flex items-center gap-3">
        Refresh
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
          <b><hr class="separator" /></b>
          </CardBody>
          <CardFooter className="pt-0">
          <Button color="green" appearance="primary" > 
           SAVE FOR LATER</Button> <br></br><br></br>
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
            <b><hr class="separator" /></b>
            <div style={{ width: '38rem' }}>
    <b><button>PRICE DETAILS</button></b> 
    <br></br>
    <b><hr class="separator" /></b>
<br></br>
<div>Price(2 Items):300 </div>
<br></br>
<div>Discount : 50/-</div>
<br></br>
<div>Delivery Charges: FREE</div>
<br></br>
<b><hr class="separator" /></b>
<br></br>
<b><div>Total Amount: 150/-</div></b>
<br></br>
<b><hr class="separator" /></b>
<br></br>
<h1 style={{ color: 'Red' }}><b><div>Note: If you cancel within 60 seconds of placing your order, a 100% refund will be issues ,No refund for cancellation made after 60 seconds</div></b></h1>

<br></br>
<h1 style={{ color: 'Red' }}><b><div>Avoid cancellation as it leads to food wastaged</div></b></h1>
    <br></br>
    <Button color="red" appearance="primary" > 
           PLACE ORDER</Button> 
           <b><hr class="separator"/></b>
   

     </div>
     <br></br>
            </CardBody>
        </CardHeader>
      </card>

  

    </div>
   

  );

  
}

export default MyCart;

