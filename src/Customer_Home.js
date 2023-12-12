import './App.css';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


function App() {
  return (
    <div className="flex flex-row gap-5">
                      <Typography variant="h2" color="Black">
              <div>Available Items</div>
              </Typography>

      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-96">
          <CardHeader
              variant="gradient"
              color="green"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h3" color="white">
              1.Meal box 
              </Typography>
            </CardHeader>
            <Typography variant="h3" color="red">
            <img style={{width: '100%', height: '30vh'}} src="https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw" />
          </Typography>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h10" color="black">

            <b>Select Item:</b>
        <b><select name="selectedDish">
        <option value="Select">Select</option>
        <option value="Chapati">Chapati</option>
        <option value="Poori">Poori</option>
         </select></b>

         <b>Quantity:</b>
        <b><select name="Quantity">
        <option value="Select">Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>


         </select></b>
    

            <label>
           </label>
          </Typography>
          </CardFooter>
          <Button variant="gradient" fullWidth>
             Check out
            </Button>
        </Card>
      </div>
    </div>
 );
 
}


export default App;



