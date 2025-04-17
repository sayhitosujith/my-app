import './App.css';
import { Avatar } from "@material-tailwind/react";
import React, { useState } from 'react'; // Import useState
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
      <div className="w-1/2 h-screen flex items-center fullWidth justify-center">
        <Card className="w-98">
          <h1 style={{ color: 'Green' }}>
            <b>
              <div>BILLING DETAILS</div>
            </b>
          </h1>

          <b>
            <hr className="separator" />
          </b>

          <CardBody className="flex flex-col gap-5">
            <b>
              <div>North Indian Meal</div>
            </b>
            <img
              className="h-full w-full rounded-xl object-cover object-center"
              src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw"
              alt="nature image"
            />
            <Chip
              variant="ghost"
              color="green"
              size="sm"
              value="Available"
              icon={
                <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
              }
            />
            <b>
              <div>
                <button onClick={decrementCount}>
                  <h1 style={{ color: 'red' }}>
                    <b>
                      <div>-</div>
                    </b>
                  </h1>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{count}</span> {/* Display the count */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={incrementCount}>
                  <h2 style={{ color: 'Red' }}>
                    <b>
                      <div>+</div>
                    </b>
                  </h2>
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
                    <Button
                      variant="gradient"
                      color="green"
                      onClick={handleOpen}
                    >
                      <a href="/MyCart">
                        <span>Confirm</span>
                      </a>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </Typography>
            </Button>

            <b>
              <hr className="separator" />
            </b>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" appearance="primary">
              SAVE FOR LATER
            </Button>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="green" appearance="primary">
              CANCEL
            </Button>
            <Typography
              variant="p"
              sx={{ letterSpacing: '1.5px', marginLeft: '4px' }}
            ></Typography>
          </CardFooter>

          <b>
            <hr className="separator" />
          </b>

          <Typography
            variant="p"
            sx={{ letterSpacing: '1.5px', marginLeft: '4px' }}
          ></Typography>

          <b>
            <u>NOTE</u>: From the Saved Address the order will be processed,
            Please add new Address if required{' '}
          </b>

          <Typography variant="small" className="mt-6 flex justify-center">
            <br></br>

            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            ></Typography>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

export default MyCart;