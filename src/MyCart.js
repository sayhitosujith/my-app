import './App.css';
import { Avatar } from "@material-tailwind/react";
import React from 'react';
import { TrashIcon } from "@heroicons/react/24/solid";
import { Alert } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";




function MyCart() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (

    <div className="flex flex-row gap-5">
        
      <div className='w-1/2 h-screen flex items-center fullWidth justify-center'>
        
        <Card className="w-98">
        <h1 style={{ color: 'Green' }}><b><div>BILLING DETAILS</div></b></h1>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-5">
          <b><div>North Indian Meal</div></b>
          <Avatar src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw"
           alt="avatar" size="xxl" variant="square"/> 
          <Chip variant="ghost"color="red"size="sm"value="Out Of stock" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/>
          <b> <div><button><h1 style={{ color: 'red' }}><b><div>-</div></b></h1></button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button><h1 style={{ color: 'Red' }}><b><div>
          +
          </div></b></h1></button></div></b>
         <Button
            size="sm"
            variant="text"
            color="red"
            className="flex items-center gap-2"
          >
            <TrashIcon className="h-4 w-4 text-red-500" />
            <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
            <Button onClick={handleOpen} variant="gradient">
             DELETE 
             </Button>
             <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>REMOVE ITEM</DialogHeader>
        <DialogBody>
          Are you sure want to remove this item.?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
          <a href="/MyCart">
            <span>Confirm</span>
            </a> 
          </Button>
        </DialogFooter>
      </Dialog>

            </Typography>
          </Button>
                 <b><Checkbox label="Select Meal" /></b>
        
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

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-6">
          <b><div>Chines Meal</div></b>
          <Avatar src="https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220" alt="avatar" size="xxl" variant="square"/>
          <Chip variant="ghost"color="green"size="sm"value="Available" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/>
         <b> <div><button><h1 style={{ color: 'red' }}><b><div>-</div></b></h1></button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button><h1 style={{ color: 'Red' }}><b><div>+</div></b></h1></button></div></b>
         <Button
            size="sm"
            variant="text"
            color="red"
            className="flex items-center gap-2"
          >
            <TrashIcon className="h-4 w-5 text-red-500" />
            <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
            <Button onClick={handleOpen} variant="gradient">
             DELETE 
             </Button>
             <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>REMOVE ITEM</DialogHeader>
        <DialogBody>
          Are you sure want to remove this item.?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
          <a href="/MyCart">
            <span>Confirm</span>
            </a> 
          </Button>
        </DialogFooter>
      </Dialog>
            </Typography>
          </Button>

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
      <card >
        <CardHeader >
            <CardBody>

<img
      className="h-96 w-full rounded-lg object-cover object-center"
      src="https://media.licdn.com/dms/image/C5112AQHUgnYzLZFzrw/article-cover_image-shrink_600_2000/0/1572953249284?e=2147483647&v=beta&t=A_GoOK8Cn093eUx3dSF2wpi1t_G8GZRcCJTK_sIp8oU"
      alt="nature image"
    />
            <b><hr class="w-1/2 flex items-center justify-center" /></b>
            <br></br>
            <div style={{ width: '38rem' }}>
            <h1 style={{ color: 'Green' }}><b><div>Review your order and address details to avoid cancellations</div></b></h1>
    <b><hr class="separator" /></b>
<br></br>
<div>Item Total(2 Items): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 300/- </div>
<br></br>
<b><hr class="separator"/></b>
<br></br>
<div>Delivery Tip :<h1 style={{ color: 'orange' }}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
            <Button onClick={handleOpen} variant="gradient" color="orange">
             ADD TIP 
             </Button>
             <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>ADD DELIVERY TIP</DialogHeader>
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Thankyou for the Tip
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
            </Typography>
            <Input label="Enter the Amount" size="lg" />
            <div className="-ml-2.5 -mt-3">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              SUBMIT TIP
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
            </Typography>
      </b>    
 </h1>
  
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
    <a href="/BuyNow">
    PLACE ORDER
 </a> 
    </Button> 
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button color="red" appearance="primary" > CANCEL</Button>
     </div>
     <br></br>
            </CardBody>
        </CardHeader>
      </card>

    </div>
    

  );

  
}

export default MyCart;

