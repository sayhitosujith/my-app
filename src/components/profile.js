import './../App.css';
import ReactDOM from 'react-dom/client';


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  refreshPage,
} from "@material-tailwind/react";


function Profile() {
  return (
    <div className="flex flex-row gap-7">

            <img style={{width: '65%', height: '100vh'}} src="https://static.vecteezy.com/system/resources/previews/024/264/951/non_2x/blurred-spring-background-nature-with-blooming-glade-generative-ai-technology-free-photo.jpg" />

             The current time is
             <b><h7>{new Date().toLocaleTimeString()}IST</h7></b> 
    </div>
  );
}

export default Profile;

