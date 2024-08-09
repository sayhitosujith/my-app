import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";


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
  { id: 4, name: 'Veg combo', src: 'https://sites.udel.edu/eli/files/2017/12/bento-box-1pmzqgv.jpg', },
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


    <div className='flex justify-center items-center'>
      <img style={{ width: '200px', height: '200px' }} src={item.src}  />
    </div>
    <CardBody className="flex flex-col gap-4">
      <div className="-mr-50">
      </div>
      <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="grey" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.638l-1.625-1.473C5.303 15.013 2 11.12 2 7.25 2 4.364 4.364 2 7.25 2c1.79 0 3.462 1.144 4.75 2.977C13.288 3.144 14.96 2 16.75 2 19.636 2 22 4.364 22 7.25c0 3.87-3.303 7.762-8.375 13.917L12 21.638z"/>
              </svg>
            </Typography>
    </CardBody>
    <CardFooter className="pt-0">
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

    <Button color="green" appearance="primary"> 
           <a href="/OrderDetails">
           BUY NOW @ (₹199) 
               </a> 
           </Button> 
           

    <br></br>

    <Button color="orange" appearance="primary"> 
           <a href="/MyCart">
           ADD TO CART
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

      <Typography variant="h3" color="orange">
        CUSTOMER HOME
        <div className="flex gap-2">
  
          
        <div className="w-72">
              <Select label="Restaurant Status">
                <Option><Chip variant="ghost"color="green"size="sm"value="Available" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="blue"size="sm"value="Busy" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="white"size="sm"value="Closed" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="red"size="sm"value="Out of Service" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
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
        Veg-Only
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
      <button
        class="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button">
        Search
      </button>

      <Button size="lg" color="green" className="flex items-center gap-3">
        My Wallet
        <img src="https://docs.material-tailwind.com/icons/metamask.svg" alt="metamask" className="h-6 w-6" />
      </Button>
      </div>
      <div style={{ float: 'right' }}>
            <button> <Chip variant="ghost"color="green"size="sm"value="Available" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></button>
              </div>
<br></br>      
  <div style={{ float: 'right' }}>
  <div className="w-74">
      <Select label="Profile">
        
        <Option>    
        </Option>
    <Badge content="6" color="white">
    <Button>
    <a href="/MyCart">
             MyCart 
               </a> 
      
    </Button>
    </Badge>
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
      

        <button><Option> 
        <a href="/my-app">
             Logout 
               </a>    
          </Option></button>
      </Select>
       </div>
        </div>
      </Typography>

 

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



