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
} from "@material-tailwind/react";




function MyCart() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center fullWidth justify-center'>
        <Card className="w-98">

          <CardBody className="flex flex-col gap-4">
            <b><div>South Indian Meal</div></b>
          <Avatar src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw" alt="avatar" size="xxl" variant="square"/>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"color="white" fullWidth>
             SAVE FOR LATER
            </Button>
            <br></br>
            <Button variant="gradient" color="white" fullWidth>
             REMOVE
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-4">
          <b><div>North Indian Meal</div></b>
          <Avatar src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw" alt="avatar" size="xxl" variant="square"/>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"color="white" fullWidth>
             SAVE FOR LATER
            </Button>
            <br></br>
            <Button variant="gradient" color="white" fullWidth>
             REMOVE
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <b><hr class="separator" /></b>

          <CardBody className="flex flex-col gap-4">
          <b><div>Chines Meal</div></b>
          <Avatar src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw" alt="avatar" size="xxl" variant="square"/>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient"color="white" fullWidth>
             SAVE FOR LATER
            </Button>
            <br></br>
            <Button variant="gradient" color="white" fullWidth>
             REMOVE
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>

          <b><hr class="separator" /></b>

          
        <Typography variant="small" className="mt-6 flex justify-center">
    
           <b>NOTE: From the Saved Address the order will be processed
            </b>
            <Button color="red" appearance="primary" > 
           PLACE ORDER</Button> 
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
      

      <div style={{ float: 'right' }}>
     <button>PRICE DETAILS</button>
     </div>

    </div>
   

  );

  
}

export default MyCart;

