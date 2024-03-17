import './App.css';
import { Badge } from "@material-tailwind/react";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Select,
  Option,
  Breadcrumbs,

} from "@material-tailwind/react";

const data = [
  {id: 1, name: 'Admin', src: 'https://media.istockphoto.com/id/1192884194/vector/admin-sign-on-laptop-icon-stock-vector.jpg?s=170667a&w=0&k=20&c=S274xvXNsp27UyKxzNjhmZEzAb3Zqi2pFOqZjLsZJz0=',},
  {id: 2, name: 'Customer', src: 'https://img.freepik.com/premium-vector/customer-concept-2-colored-icon-simple-blue-element-illustration-customer-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-3585.jpg',},
  {id: 3, name: 'Analytics', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCswCYnhK7o9KobHw5jmOtXQKY6JV8xuixdQ&usqp=CAU',},

]


const CardItem = ({item}) => (
    
    <Card className="w-96">
      
          <CardHeader
              variant="gradient"
              color="blue"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h3" color="white">
                {item.id} : {item.name}  
             </Typography>
            </CardHeader>

            <div className='flex justify-center items-center'>
            <img style={{width: '200px', height: '200px'}} src={item.src} className='rounded-full' />
            </div>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h10" color="black">
    <br></br>
          </Typography>
          </CardFooter>
       
<br></br>
        </Card>
)

function Welcome() {
  return (
    <div className="p-10">
            <br></br>
            <Breadcrumbs>
      <a href="#" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>

      <a href="#" className="opacity-60">
      <a href="#">Profile</a>
      </a>
      <a href="#">Admin Home</a>
    </Breadcrumbs>

    <Typography variant="h2" color="Black">
      <br></br>
      Welcome to My DB-APP
      <br></br>
      <br></br>

      <Typography variant="small" className="mt-8 flex justify-center">
           <b>Access your provisioned services below. Switch services any time from the Apps icon in the Middle of your screen.</b>
           <Typography
                as="a"
                href="#signup"
                variant="Medium"
                color="blue-gray"
                className="ml-1 font-bold">
              </Typography>
           </Typography>

    <div style={{float: 'right'}}>

      <div className="w-74">
      <Select label="Sujith">
        
        <Option>    
        </Option>
    <Badge content="6">
    <Button>My cart </Button>
    </Badge>
       <Option>About</Option>
       <Option>Change Password</Option>
        <button><Option>Logout</Option></button>
      </Select>
    </div>

            </div>
        </Typography>




        <div className='w-full flex mt-20 gap-5'>
            {
                data.slice(0,3).map((item) => <CardItem item={item} />)
            }
        </div>
      
        <br></br>

    </div>
 );
 
}
export default Welcome;



