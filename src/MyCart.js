import './App.css';
import { Avatar } from "@material-tailwind/react";
import React from 'react';
import { TrashIcon } from "@heroicons/react/24/solid";
import { Alert } from "@material-tailwind/react";
import { useState } from 'react'; // Import useState
import { FaLocationDot } from "react-icons/fa6";

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
  Textarea,
} from "@material-tailwind/react";




function MyCart() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(1); // State to track the count

  const handleOpen = () => setOpen(!open);
  const incrementCount = () => {
    setCount(count + 1); // Increment the count
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1); // Decrement the count, but not below 1
    }
  };

  return (

    <div className="flex flex-row gap-5">

      <div className='w-1/2 h-screen flex items-center fullWidth justify-center'>

        <Card className="w-98">
          <h1 style={{ color: 'Green' }}><b><div>APPOINTMENT DETAILS</div></b></h1>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-5">
            <b><div>Book a Clinic Appointment Near You</div></b>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <FaLocationDot className="mr-2" style={{ color: '#ff5200' }} />
              <select
                className="outline-none w-full bg-white"
                defaultValue=""
                style={{ color: '#f35208ff' }}
              >
                <option value="" disabled>
                  Select your location
                </option>
                <option value="Bangalore">Brisbane</option>
                <option value="Delhi">Melbourn</option>
                <option value="Chennai">Sydney</option>
                <option value="Mumbai">Maryborough</option>
                <option value="Hyderabad">Adilade</option>
              </select>
            </div>

             <label>
                      <b> Enter your Name:</b>
                      <Textarea label="" />
                    </label>
            
                   <label>
                      <b> Enter Your Phone Number:</b>
                      <Textarea label="" />
                    </label>

                    <label>
                      <b> Enter your Email Id:</b>
                      <Textarea label="" />
                    </label>

            <b>  <div>
              <button
                onClick={decrementCount}
                style={{ fontSize: '24px', color: 'red', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                -
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ border: '1px solid black', padding: '5px 50px', borderRadius: '1px' }}>
                {count}
              </span>                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={incrementCount} style={{ fontSize: '24px', color: 'red', fontWeight: 'bold' }}>
                +
              </button>
            </div>
            </b>
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

            <b><hr class="separator" /></b>
          </CardBody>
          <CardFooter className="pt-0">
            <Button style={{ backgroundColor: '#ff5200' }}
              appearance="primary" >
              SUBMIT</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{ backgroundColor: '#ff5200' }}

              appearance="primary" >
              CANCEL</Button>
            <Typography
              variant="p"
              sx={{ letterSpacing: '1.5px', marginLeft: '4px' }}>
            </Typography>
          </CardFooter>

          <b><hr class="separator" /></b>



          <Typography
            variant="p"
            sx={{ letterSpacing: '1.5px', marginLeft: '4px' }}>
          </Typography>


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
            <br></br>
            <img
              className="h-96 w-100 rounded-lg object-cover object-center"
              src="https://api.qrserver.com/v1/create-qr-code/?size=225x225&data=upi%3A%2F%2Fpay%3Fpa%3D9480860587%40mobile.npci%26pn%3Dfood%26cu%3DINR"
              alt="nature image"
            />
            <b><hr class="w-1/2 flex items-center justify-center" /></b>
            <br></br>
            <div style={{ width: '38rem' }}>
              <h1 style={{ color: 'Green' }}><b><div>Scan the QR Code from your mobile to pay via different UPI Apps Online</div></b></h1>
              <b><hr class="separator" /></b>
              <br></br>
              <div>Item Total(1): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4500/- </div>
              <br></br>
              <b><hr class="separator" /></b>
              <br></br>
              <div>Delivery Tip :<h1 style={{ color: 'orange' }}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  style={{ backgroundColor: '#ff5200' }}
                  appearance="primary"
                  onClick={() => window.location.href = '/BuyNow'}
                >
                  ADD TIP
                </Button>
              </b></h1>

              </div>
              <br></br>
              <div>Discount : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50/-</div>
              <br></br>
              <div>Consultation Charges: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;300/-</div>
              <br></br>
              <div>GST:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50/-</div>
              <br></br>
              <b><hr class="separator" /></b>
              <br></br>
              <b><div>To Pay: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /-</div></b>
              <br></br>
              <b><hr class="separator" /></b>
              <br></br>
              <h1 style={{ color: 'Red' }}><b><div><u>NOTE</u>: If you cancel within 60 seconds of placing your order, a 100% refund will be issues </div></b></h1>

              <br></br>
              <h1 style={{ color: 'Red' }}><b><div>No refund for cancellation made after 60 seconds</div></b></h1>
              <br></br>
              <b><hr class="separator" /></b>
              <br></br>
              <Button style={{ backgroundColor: '#ff5200' }} appearance="primary" >
                <a href="/BuyNow">
                  BOOK APPOINTMENT
                </a>
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{ backgroundColor: '#ff5200' }} appearance="primary" > CANCEL</Button>
            </div>
            <br></br>
          </CardBody>
        </CardHeader>
      </card>

    </div>

  );


}

export default MyCart;

