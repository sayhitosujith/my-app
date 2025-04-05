import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { BsCart3 } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Checkbox,
  Breadcrumbs,
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

]

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1; 
const currentDate = new Date().getDate();


const CardItem = ({ item }) => (
  <Card className="w-96">
    <CardHeader
      variant="gradient"
      color="green"
      className="mb-5 grid h-10 place-items-center">
      <Typography variant="h3" color="white">
        {item.id} : {item.name}
      </Typography>
    </CardHeader>


    <div className='flex justify-center items-center '>
      <img style={{ width: '200px', height: '200px' }} src={item.src} />
    </div>
    <CardBody className="flex flex-col gap-4 ">
      <div className="-mr-50">
      </div>
      <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100 object-cover rounded-full">
        <svg className="h-5 w-5" fill="red" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21.638l-1.625-1.473C5.303 15.013 2 11.12 2 7.25 2 4.364 4.364 2 7.25 2c1.79 0 3.462 1.144 4.75 2.977C13.288 3.144 14.96 2 16.75 2 19.636 2 22 4.364 22 7.25c0 3.87-3.303 7.762-8.375 13.917L12 21.638z" />
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

        <div className="w-72">
          <form class="max-w-sm mx-auto">
            <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Quantity:</label>
            <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
          </form>
        </div>
        <label>
        </label>
      </Typography>
    </CardFooter>


    <br></br>

    <Button color="black" appearance="primary" className="text-lg font-semibold">
      <a href="/MyCart" className="flex items-center gap-10">
        <span>ADD TO CART</span>
        <span> - </span>
        <BsCart3 size={25} color="white" />

      </a>
    </Button>


  </Card>

)

function App() {
  return (
    <div className="p-10">

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
      </Breadcrumbs>

      <b><hr class="separator" /></b>

      <div className="mb-4 shadow-sm px-4 py-2 flex justify-center items-center bg-yellow-800 overflow-x-auto whitespace-nowrap">
        <Typography variant="h6" color="black" className="text-md inline-block"><i>
          <figure className="relative h-99 w-full">

            <img
              className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
              src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png"
              alt="banner image"
            />

            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Welcome to Foodie World
                </Typography>
                <Typography color="gray" className="mt-2 font-normal">
                Date : {currentDate} - {currentMonth} - {currentYear}
                Time : {new Date().toLocaleTimeString()}
                              </Typography>
              </div>
              <Typography variant="h5" color="blue-gray">
                Growth
              </Typography>
            </figcaption>
          </figure>

          NEW | 🛍️ Arrivals Alert! Fresh food,Deserts and must-have picks just dropped. Shop now before they're gone! 🔥✨!
        </i> </Typography>

        <IconButton color="white" variant="text" className="inline-block ml-4">
          ✖
        </IconButton>
      </div>
      
      <b><hr class="separator" /></b>

      <Typography variant="h3" color="orange" className="flex justify-center items-center gap-4">
        <img
          className="h-20 w-40 object-cover object-center"
          src="data:image/png;base64,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"
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


          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          <div class="inline-flex left">
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


          <Button size="sm" color="orange" className="flex items-center gap-3">
            <a href="/MyCart">
              My cart
            </a>
            <IoCartOutline size={25} color="white" /> </Button>

          <Button size="sm" color="orange" className="flex items-center gap-4">
            <a href="/my-app">
              Logout
            </a>
            <IoLogOutOutline size={20} color="white" />
          </Button>
        </div>



        <br></br>
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
      </Typography>

      <b><hr class="separator" /></b>



      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(0, 5).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(6, 11).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(12, 15).map((item) => <CardItem item={item} />)
        }
      </div>
    </div>

  );



}


export default App;



