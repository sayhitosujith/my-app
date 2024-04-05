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
  Avatar,
  data

} from "@material-tailwind/react";




const CardItem = ({item}) => (
    
    <Card className="w-96">
      
          <CardHeader
              variant="gradient"
              color="green"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h2" color="grey">
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
      <a href="#">HomePage</a>
    </Breadcrumbs>
    <Avatar src="https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425" alt="avatar"size="xxl" div style={{float: 'right'}}></Avatar>
    <Typography variant="h2" color="Black">
      <br></br>
      <img style={{width: '5%', height: '10vh'}} src="https://logowik.com/content/uploads/images/maven-apache3537.jpg" />

      <b><hr class="separator" /></b>


      <Typography variant="small" className="mt-8 flex flex justify-center items-center">
           <b>Access your provisioned services below. Switch services any time from the Apps icon in the top right corner of your screen.</b>
           <Typography
                as="a"
                href="#signup"
                variant="Medium"
                color="blue-gray"
                className="ml-1 font-bold">
              </Typography>
           </Typography>

    <div style={{float: 'right'}}>



            </div>
        </Typography>
 
      <img style={{width: '100%', height: '65vh'}} src="https://kyari.co/cdn/shop/files/HP_Desktop_option_2-01.png?v=1708169023" />

       
     <br></br> 

        <br></br>
        <b><hr class="separator" /></b>

        <div className='flex justify-center items-center'>
       <Typography variant="h2" color="Black">
      <br></br>
    Our Customers <br></br>
      <br></br>
      <div></div>
      <Avatar
      size="xxl"
      alt="avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCtZ3TP29Od5dmWVgLi3KGGbiR9dBS12NVnzhRQeTDg&s"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
               <b>              </b>  
     <Avatar
      size="xxl"
      alt="avatar"
      src="https://assets.untappd.com/site/brewery_logos_hd/brewery-353492_f8cb2_hd.jpeg"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
            <b>              </b>  

     <Avatar
      size="xxl"
      alt="avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSIdXHY0RfTWs3eo705sFof5SL4RJy9pvOyyb0L_oEA&s"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
               <b>            </b> 
      <Avatar
      size="xxl"
      alt="avatar"
      src="https://lh3.googleusercontent.com/KZdcDokR9jQgQk7FGh_z9vueezoeBWESSAK0U5r494Sav4WGp_ObBL8T_vzICe3k-rcZz5OAzuPT9XWslotw4xReGlNSzjONORvxob4"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
      </Typography>
    </div>

    <div className='flex justify-center items-center'>
       <Typography variant="h7" color="Black">
      <br></br>
      </Typography>
    </div>
    </div>
 );
 
}
export default Welcome;



