import './App.css';
import { Badge } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Checkbox } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { MdDelete } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

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
  Avatar,
  Textarea,
  Chip,
  

} from "@material-tailwind/react";


const data = [
  { id: 1, name: 'Veg Green Salad', src: 'https://i.ytimg.com/vi/ln_P2jNCSA0/maxresdefault.jpg', },
  {id: 2, name: 'Chole Meal', src: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/j/u/p5908-15671490325d68cbe8b52d8.jpg?tr=tr:n-xlarge',},
  {id: 3, name: 'Puliogre', src: 'https://www.harfieldtableware.co.uk/wp-content/uploads/2020/09/856BLU-for-website-scaled.jpg',},
  {id: 4, name: 'Veg combo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwbIEMBVwW6NnJzUIhy0OZ7rRhHkss4Sh2A&s',},
  {id: 5, name: 'Non-veg Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.1SxzeKMtZ9qeVnA1JQ8IqgHaE8&pid=Api&P=0&h=220',},
  {id: 6, name: 'Chicken biriyani', src: 'https://thumbs.dreamstime.com/b/meal-lunch-boxes-packaging-meal-lunch-boxes-isolated-white-background-121017730.jpg',},
  {id: 7, name: 'Veg salad', src: 'https://sammyapproves.com/wp-content/uploads/2019/08/028-min.jpg',},
  {id: 8, name: 'Rice & Curry', src: 'https://images-na.ssl-images-amazon.com/images/I/61HFT-GD82L._AC_SY450_.jpg',},
  {id: 9, name: 'Veg Sandwitch', src: 'https://tse1.mm.bing.net/th?id=OIP.VHHFXZA8vZMlCfMN5BbwcAHaHa&pid=Api&P=0&h=220',},
  {id: 10, name: 'Fish Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220',},
  {id: 11, name: 'Veg Sandwitch', src: 'https://tse1.mm.bing.net/th?id=OIP.VHHFXZA8vZMlCfMN5BbwcAHaHa&pid=Api&P=0&h=220',},
  {id: 12, name: 'Fish Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220',},
  {id: 13, name: 'veg Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.1SxzeKMtZ9qeVnA1JQ8IqgHaE8&pid=Api&P=0&h=220',},
  {id: 14, name: 'Lemon Rice', src: 'https://indiancurrytrail.com/wp-content/uploads/2019/03/Lunchbox-Idea-1-1.jpg',},
  {id: 15, name: 'Cure Rice', src: 'https://i.ytimg.com/vi/B2ZO4tN_8-c/sddefault.jpg',},

]

const CardItem = ({item}) => (
    <Card className="w-96">
      
          <CardHeader
              variant="gradient"
              color="green"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h3" color="white">
                {item.id} : {item.name}  
             </Typography>
            </CardHeader>
       
            <div className="flex items-center justify-between w-full">
              
            <CiHeart size={30} color="black"/></div>

            <div className='flex justify-center items-center'>
            <img style={{width: '180px', height: '180px'}} src={item.src}/>
            </div>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h10" color="black">

            <div className="flex items-center justify-between w-full">
            <IoCartOutline size={30} color="green" />
           <MdDelete size={30} color="red" />
</div>

            <br></br>
            
      <div className="w-72">
      <Select label="Select Item">
        <Option>Chapati</Option>
        <Option>Poori</Option>
        <Option>Dosa</Option>
        <Option>Idli & Vada</Option>


      </Select>
    </div>
  
    <br></br>

<div className="w-72">
<form class="max-w-sm mx-auto">
    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Quantity:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required/>
</form>
    </div>
        <label>
     <b> Description:</b>
     <Textarea label="" />

    </label>
          </Typography>
          </CardFooter>
      
          <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Publish to Customer</span>
</label>    
<br></br>
        </Card>
)

function App() {
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
       
          <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
              delete
            </Typography>
        </svg>
      </a>

      <a href="#" className="opacity-60">
      <a href="#">
      <a href="/Welcome">
             Welcome 
               </a>    
      </a>
      </a>
      <a href="#">Admin Home</a>
    </Breadcrumbs>
    
    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"size="xl" div style={{float: 'right'}}></Avatar>
    <Typography variant="h2" color="Black">
      <br></br>
      <div className="w-72">
  <Select label="Select Status">
    <Option>
      <Chip
        variant="ghost"
        color="green"
        size="sm"
        value="Available"
        icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900" />}
      />
    </Option>
    <Option>
      <Chip
        variant="ghost"
        color="blue"
        size="sm"
        value="Busy"
        icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-blue-900" />}
      />
    </Option>
    <Option>
      <Chip
        variant="ghost"
        color="gray"
        size="sm"
        value="Closed"
        icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-gray-900" />}
      />
    </Option>
    <Option>
      <Chip
        variant="ghost"
        color="red"
        size="sm"
        value="Out Of Stock"
        icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900" />}
      />
    </Option>
  </Select>
</div>


       <br></br>

 {/* Add Meal Button */}
<div className="relative">
  <div className="absolute top-0 right-0 m-4 flex gap-4">
    <Button color="red" appearance="primary">
      <a href="/AddMeal">+ Add Meal</a>
    </Button>
     {/* Download Button */}
    <Button className="flex items-center gap-3" size="sl">
      <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
    </Button>
  </div>
 

<br></br>
<Button color="green" appearance="primary"> 
           <a href="/DeliveryBoy">
           + Add Delivey Captain 
               </a> 
           </Button> 

    &nbsp;&nbsp;
    <div class="inline-flex items-left">
   
    <Switch color="green" defaultChecked />
  <label htmlFor="desc" class="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none">
    <div>
      <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Veg Only
      </p>
    </div>
  </label>
</div>

<div style={{float: 'right'}}>
<br></br>

 {/* Profile Select Dropdown */}
 <div className="w-full lg:w-1/2">
        <Select label="Profile">
          <Option>
            <a href="/HomePage">About</a>
          </Option>
          <Option>
            <a href="/ResetPassword">Change Password</a>
          </Option>
          <Option>
            <a href="/Settings">Settings</a>
          </Option>
          <button>
            <Option>
              <a href="/my-app">Logout</a>
            </Option>
          </button>
        </Select>
      </div>
</div>


            </div>
        </Typography>




        <div className='w-full flex mt-20 gap-5'>
            {
                data.slice(0,5).map((item) => <CardItem item={item} />)
            }
        </div>
        <div className='w-full flex mt-20 gap-5'>
            {
                data.slice(6, 11).map((item) => <CardItem item={item} />)
            }
        </div>
        <div className='w-full flex mt-20 gap-5'>
            {
                data.slice(7, 12).map((item) => <CardItem item={item} />)
            }
        </div>
        <br></br>

    </div>
 );
 
 
}


export default App;



