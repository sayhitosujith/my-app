import './App.css';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";


function App() {
  return (
    <div className="flex flex-row gap-5">
      
      <div className='w-1/2 h-screen flex items-center justify-center'>
        
        <Card className="w-96">
          <CardHeader
              variant="gradient"
              color="blue"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h3" color="white">
              Meal box <Checkbox label="Enable" />
              </Typography>
            </CardHeader>
            <Typography variant="h3" color="red">
            <img style={{width: '100%', height: '40vh'}} src="https://uploads-ssl.webflow.com/60a6bf8ff99a7114bef9523f/60f8424e438ba79547a5455f_Image%202.jpeg" />

          </Typography>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className="mt-6 flex justify-center">
            
            <b><label>Name<input name="Name"/></label></b>
            <b><label>Quantity<input name="Quantity"/></label></b>
            &nbsp;
            <label>
           <b>Pick a fruit:</b>
        <b> <select name="selectedFruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select></b>

    </label>
          </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>


    
  );
}
export default App;

