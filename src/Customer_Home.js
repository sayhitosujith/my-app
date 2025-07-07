import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { BsCart3 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import logo from './assets/foodmaven.png'; // adjust the path as necessary
import { Carousel } from "@material-tailwind/react";
import { IoSettingsOutline } from "react-icons/io5";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
  Rating,
  Switch
} from "@material-tailwind/react";

const data = [
  { id: 1, name: 'Veg Green Salad', src: 'https://i.ytimg.com/vi/ln_P2jNCSA0/maxresdefault.jpg', },
  { id: 2, name: 'Chole Meal', src: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/j/u/p5908-15671490325d68cbe8b52d8.jpg?tr=tr:n-xlarge', },
  { id: 3, name: 'Puliogre', src: 'https://www.harfieldtableware.co.uk/wp-content/uploads/2020/09/856BLU-for-website-scaled.jpg', },
  { id: 4, name: 'Veg combo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKfY4-8bnrTwpHepBSSHA1_nTNvDFM7WA6A&s', },
  { id: 5, name: 'Non-veg Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.1SxzeKMtZ9qeVnA1JQ8IqgHaE8&pid=Api&P=0&h=220', },
  { id: 6, name: 'Chicken biriyani', src: 'https://thumbs.dreamstime.com/b/meal-lunch-boxes-packaging-meal-lunch-boxes-isolated-white-background-121017730.jpg', },
  { id: 7, name: 'Veg salad', src: 'https://sammyapproves.com/wp-content/uploads/2019/08/028-min.jpg', },
  { id: 8, name: 'Rice & Curry', src: 'https://images-na.ssl-images-amazon.com/images/I/61HFT-GD82L._AC_SY450_.jpg', },
  { id: 9, name: 'Veg Sandwitch', src: 'https://tse1.mm.bing.net/th?id=OIP.VHHFXZA8vZMlCfMN5BbwcAHaHa&pid=Api&P=0&h=220', },
  { id: 10, name: 'Fish Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220', },
  { id: 11, name: 'Veg Sandwitch', src: 'https://tse1.mm.bing.net/th?id=OIP.VHHFXZA8vZMlCfMN5BbwcAHaHa&pid=Api&P=0&h=220', },
  { id: 12, name: 'Fish Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.yORsSgJVQYcn7xIZ3Aa12AHaFj&pid=Api&P=0&h=220', },
  { id: 13, name: 'veg Meal', src: 'https://tse3.mm.bing.net/th?id=OIP.1SxzeKMtZ9qeVnA1JQ8IqgHaE8&pid=Api&P=0&h=220', },
  { id: 14, name: 'Lemon Rice', src: 'https://indiancurrytrail.com/wp-content/uploads/2019/03/Lunchbox-Idea-1-1.jpg', },
  { id: 15, name: 'Cure Rice', src: 'https://i.ytimg.com/vi/B2ZO4tN_8-c/sddefault.jpg', },
  { id: 16, name: 'Pav bhaji', src: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/8997', },
  { id: 17, name: 'Ghee Toor Dal Khichdi Thali', src: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/12090', },
  { id: 18, name: 'Desi Box', src: 'https://assets.box8.co.in/rectangle-19x10/xhdpi/product/5005', },


]

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; 
const currentDate = new Date().getDate();
const now = new Date();
const startDate = new Date('2025-04-05T08:00:00'); // Start time
const endDate = new Date('2026-04-08T23:59:59');   // End time
const isBannerActive = now >= startDate && now <= endDate;


const CardItem = ({ item }) => (
  <Card className="w-96 bg-green-50">
    <CardHeader
      variant="gradient"
      color="green"
      className="mb-5 grid h-10 place-items-center">
      <Typography variant="h3" color="white">
        {item.id} : {item.name}
      </Typography>
    </CardHeader>


    <div className='flex justify-center items-center'>
      <img style={{ width: '200px', height: '200px' }} src={item.src} />
    </div>
    <CardBody className="flex flex-col gap-4 ">
      <div className="-mr-50">
      </div>
      <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 object-cover rounded-full">
        <svg className="h-5 w-5" fill="red" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21.638l-1.625-1.473C5.3F03 15.013 2 11.12 2 7.25 2 4.364 4.364 2 7.25 2c1.79 0 3.462 1.144 4.75 2.977C13.288 3.144 14.96 2 16.75 2 19.636 2 22 4.364 22 7.25c0 3.87-3.303 7.762-8.375 13.917L12 21.638z" />
        </svg>
      </Typography>
    </CardBody>
    <CardFooter className="pt-0" >
      <Typography variant="h10" color="orange">
        <div>

          <b><hr class="separator" /></b>

          <button> <Typography variant="h6"> Discount - 5%</Typography></button>
          <b><hr class="separator" /></b>

        </div>
        <Rating value={4} readonly />

        <Checkbox label="Select Item" />
        {
          (
            <div className="w-72">
              <Select label="Select">
                <Option>Chapati & Chatni</Option>
                <Option>Poori & Saagu</Option>
                <Option>Masala Dosa & Saagu</Option>
                <Option>Idli and Uddina Vada</Option>

              </Select>
            </div>
          )}

        <br></br>

        <div className="product-card-footer">
  <div
    className="text-lg font-semibold text-black px-4 py-2 rounded"
  >
    ₹ 199
  </div>
</div>
      </Typography>
    </CardFooter>


    <br></br>


    <div className="flex justify-end ">
  <Button color="white" appearance="primary" className="text-lg font-semibold">
    <a href="/MyCart">
      <button className="text-green-600 border se-4 py-2 rounded bg-green-50">
        ADD
      </button>
    </a>
  </Button>
</div>

  </Card>

)

function App() {
  return (
    
    <div className="p-5 bg-green-10">
<img
        style={{ width: '6%', height: '6%' }}
        src={logo}
        alt="Application_logo"
      />
{/* 
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
          <a href="/Welcome">
            Welcome
          </a>
        </a>
        <a href="#">Customer_Home</a>
      </Breadcrumbs> */}

      
      <div style={{ float: 'right' }}>
          <div className="w-74">
            <Select label="Profile">

              <Option>
              </Option>
              <Button>
                <a href="/MyCart">
                  <CiWallet size={20} color="white" /> My wallet
                </a>

              </Button>
              <Option>
                <a href="/HomePage">
                  About
                </a>
              </Option>
              <Option>
                <a href="/ResetPassword">
                  Change Password
                </a>
              </Option>

            </Select>
          </div>
        </div>

        
      <div className="absolute top-4 right-4 flex items-center space-x-3">

        
      <Button size="sm" color="white" className="flex items-center gap-2">
  <a href="/Settings"
   className="text-black">
  </a>
  <div className="relative">
    <IoSettingsOutline  size={35} color="black" />
  </div>
</Button>

<Button size="sm" color="white" className="flex items-center gap-2">
  <a href="/MyCart" className="text-black">
    My cart
  </a>
  <div className="relative">
    <IoCartOutline size={35} color="black" />
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
      2
    </span>
  </div>
</Button>

  <PiLineVerticalThin size={35} color="black"/>

  <a href="">
  <div className="relative inline-block">
  <IoIosNotificationsOutline color="black" size={30} />
  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
    1
  </span>
</div>  </a>
  <PiLineVerticalThin size={50} color="black" />
  <a href="/Logout">
  <div className="relative group cursor-pointer">
  <FaPowerOff color="black" size={30} />
  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    Logout
  </span>
</div>

  </a>
</div>

{/* Location Button with Textbox */}
<div className="mt-4 flex items-center space-x-4 mb-4"> {/* Added mb-4 here */}
<button className="px-4 py-2 bg-white text-black border border-gray rounded hover:bg-green-700 transition">
  LOCATION
</button>

  <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
  <FaLocationDot className="text-black mr-2" />
  <select
    className="outline-none w-full bg-white"
    defaultValue=""
  >
    <option value="" disabled>
      Select your location
    </option>
    <option value="Bangalore">Bangalore</option>
    <option value="Delhi">Delhi</option>
    <option value="Chennai">Chennai</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Hyderabad">Hyderabad</option>
  </select>
</div>
</div>


   <div
     className="mb-5 shadow-sm px-4 py-4 flex justify-center items-center overflow-x-auto whitespace-nowrap rounded-xl"
     style={{ backgroundColor: '#65f740' }}
   >
     {isBannerActive && (
       <div className="w-full overflow-hidden relative">
         <div className="animate-scroll whitespace-nowrap inline-block">
           <Typography variant="h1" className="text-md text-black">
             <i>
               🛍️ NEW ARRIVALS ALERT! 🥗 Fresh on the Menu! Tantalizing tastes and trendy treats have arrived. Don’t miss out — shop your favorites now! 🍽️💫🔥✨
             </i>
           </Typography>
         </div>
       </div>
     )}
   </div>       

      <b><hr class="separator" /></b>

      <div className="mb-4 shadow-sm px-4 py-2 flex justify-center items-center bg-orange-900 overflow-x-auto whitespace-nowrap">
  <Carousel className="w-full">
    {/* Image 1 */}
    <figure className="relative h-96 w-full">
      <img
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png"
        alt="banner image 1"
      />
      <figcaption className="absolute bottom-8 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            NEW | 🛍️ Arrivals Alert! Fresh food, desserts and must-have picks just dropped. Shop now before they're gone! 🔥✨
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            Date: {currentDate} - {currentMonth} - {currentYear}
            <br />
            Time: {new Date().toLocaleTimeString()}
          </Typography>
        </div>
      </figcaption>
    </figure>

    {/* ✅ New Image 2 */}
    <figure className="relative h-96 w-full">
      <img
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://assets.box8.co.in/horizontal-rectangle/web/banner/2288"
        alt="banner image 2"
      />
      <figcaption className="absolute bottom-8 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Tasty Bites Await 🍽️ — Don't miss today's specials!
          </Typography>
        </div>
      </figcaption>
    </figure>

    {/* ✅ New Image 3 */}
    <figure className="relative h-96 w-full">
      <img
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src="https://assets.box8.co.in/horizontal-rectangle/web/banner/1820"
        alt="banner image 2"
      />
      <figcaption className="absolute bottom-8 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Exciting offers Await 🍽️ — Don't miss today's Deals!
          </Typography>
        </div>
      </figcaption>
    </figure>
  </Carousel>
</div>
      
      <b><hr class="separator" /></b>

      <Typography variant="h3" color="orange" className="flex justify-center items-center gap-4">
        <img
          className="h-30 w-50 object-cover left-4  z-50"
          src="data:image/jpeg;base64,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"
          alt="Logo image"
        />


        <div className="flex gap-2">
          <div className="w-72">
            <Select label="Restaurant Status">
              <Option><Chip variant="ghost" color="green" size="sm" value="Available" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
              <Option><Chip variant="ghost" color="blue" size="sm" value="Busy" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
              <Option><Chip variant="ghost" color="white" size="sm" value="Closed" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
              <Option><Chip variant="ghost" color="red" size="sm" value="Out of Service" icon={<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />} /></Option>
            </Select>


          </div>


          <div class="inline-flex left ">
            <Switch color="green" defaultChecked />
            <label htmlFor="desc" class="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none">
              <div>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                </p>
              </div>
            </label>
          </div>

          <div class="inline-flex left">
            <Switch color="red" defaultChecked />
            <label htmlFor="desc" class="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none">
              <div>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                </p>
              </div>
            </label>
          </div>


          <div class="relative flex w-full gap-2 md:w-max">
            <div class="relative h-10 w-full  min-w-[288px]">
              <input type="Enter Delivery Pincode" placeholder="Search for a Meal"
                class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <div class="!absolute left-3 top-[13px]">
              <svg width="13" height="14" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                  fill="#CFD8DC"></path>
                <path
                  d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                  stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>

        </div>

      </Typography>

      <b><hr class="separator" /></b>



      <div className='w-full flex mt-20 gap-5 '>
        {
          data.slice(0, 6).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(6, 12).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(12, 18).map((item) => <CardItem item={item} />)
        }
      </div>
    </div>

    

  );



}


export default App;



