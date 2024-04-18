import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
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
} from "@material-tailwind/react";

const data = [
  { id: 1, name: 'South Indian Meal', src: 'https://lh3.googleusercontent.com/NU4IkpoLvslBNf-uQLkOlDoMo8382HeTXOp5U6uw8kO2LWFORZE-QlvqBuscORT9leTX47dfXJuy-uod7k6Fz5GNhth75QqKd9H0pRII=h450-rw', },
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
      color="orange"
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
      <Typography variant="h10" color="black">
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
           BUY NOW @ (₹199)</Button> 

    <br></br>

    <Button color="green" appearance="primary"> 
           ADD TO CART</Button> 
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
          <a href="#">Profile</a>
        </a>
        <a href="#">Customer_Home</a>
      </Breadcrumbs>

      <Typography variant="h3" color="Black">
        CUSTOMER HOME
        <div className="flex gap-2">
      
        <div className="w-72">
          
              <Select label="Select Status">
                <Option><Chip variant="ghost"color="green"size="sm"value="Available" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="red"size="sm"value="Busy" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color="white"size="sm"value="Offline" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
                <Option><Chip variant="ghost"color=""size="sm"value="--Do not Distrub--" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></Option>
       </Select>
       
       
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



  <search>
  <form>
    <input name="fsrch" id="fsrch" placeholder="Search for a Meal"/>
  </form>
</search>


      </div>
      <div style={{ float: 'right' }}>
            <button> <Chip variant="ghost"color="green"size="sm"value="Available" icon={ <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />  }/></button>
              </div>
<br></br>      
  <div style={{ float: 'right' }}>
          <div className="w-74">
            <Select label= "Maven Meal">
              <Option>
              </Option>
              <Option>About</Option>
              <Option>Change Password</Option>
              <button><Option>
              <Button variant="gradient" fullWidth>
            <a href="/">
               Logout 
               </a>   
            </Button>
                
                </Option></button>
            </Select>
          </div>
        </div>
      </Typography>

 

      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(0, 6).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(7, 13).map((item) => <CardItem item={item} />)
        }
      </div>
      <div className='w-full flex mt-20 gap-5'>
        {
          data.slice(7, 13).map((item) => <CardItem item={item} />)
        }
      </div>
    </div>

  );



}


export default App;



