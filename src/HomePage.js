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
  data,
  Input,
  Checkbox

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
              <img style={{width: '15%', height: '15vh'}} src="https://mms.businesswire.com/media/20191209005536/en/761245/23/FoodMaven-Logo.jpg" />          
    <Avatar src="https://fellows.ias.ac.in/public/images/stock/avatar.svg?v=105894425" alt="avatar"size="xxl" div style={{float: 'right'}}></Avatar>
    <Typography variant="h2" color="Black">
      <Typography variant="small" className="mt-8 flex flex justify-center items-center">
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
      <br></br>Our Customers <br></br>

      <br></br>
      <div></div>
      <Avatar
      size="xxl"
      alt="avatar"
      variant="rounded"
      src="https://www.kitchenherald.com/wp-content/uploads/2023/10/Virat-1.png"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
               <b>              </b>  
     <Avatar
      size="xxl"
      alt="avatar"
      variant="rounded"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCtZ3TP29Od5dmWVgLi3KGGbiR9dBS12NVnzhRQeTDg&s"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
            <b>              </b>  

     <Avatar
      size="xxl"
      alt="avatar"
      variant="rounded"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSIdXHY0RfTWs3eo705sFof5SL4RJy9pvOyyb0L_oEA&s"
      className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
    />
         <b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjyDtZJPb5c2S42BIohdtt7NxJ--UafzIZIgNQns18A&s"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://artude.com/logos/logo-akshayas.jpg"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANzRPr2aZNqLevUOcIonhHoEAcwWH19nWc5GoafQm1A&s"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://idealdesigns.in/wp-content/uploads/2020/08/best-hotels-logo-design-in-hyderabad-hotel-branding-bangalore-best-hotel-in-India-kaveri.jpg"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://idealbranding.in/wp-content/uploads/2018/04/restaurant-logo-design-hotel-shubham-palace2.jpg"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://www.tajhotels.com/content/dam/tajhotels/icons/style-icons/logo--Taj.png"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://i.pinimg.com/originals/f6/f1/bc/f6f1bccf8d36edee548acb2c90db5e14.jpg"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://graphicdesigneye.com/images/hotel-logo-design-service.png"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  

<Avatar
 size="xxl"
 alt="avatar"
 variant="rounded"
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERlpItS51IO_Y8UBZ0aXQTeq3Drrjf-scnz_LeZzZKg&s"
 className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
/>
<b>              </b>  


      </Typography>
    </div>

    <br></br>
    <br></br>
    <br></br>

    <b><hr class="separator" /></b>
    <div className='flex justify-center items-center'>
       <Typography variant="h2" color="Black">
      <br></br>
     Customer Success Stories 
   <br></br>
   <br></br>



     <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
        <Card className="w-98">
          <CardHeader
            variant="gradient"
            color="white"
            className="mb-4 grid h-28 place-items-center">
         <b>One Commune - Virat Kohli</b>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
         </CardBody>
          <CardFooter className="pt-0">
          <img style={{width: '100%', height: '50vh'}} src="https://www.kitchenherald.com/wp-content/uploads/2023/10/Virat-1.png" />
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>     
          </CardFooter>  
        <Typography variant="small" className="mt-6 flex justify-center">
        <b>Celebrated cricketer Virat Kohli is a culinary connoisseur at heart—but you knew that already. Sepia-toned pictures from his childhood regularly make the rounds on online fanclubs, capturing the twinkle in his eyes as he gingerly lifts a burger or crunches down on potato chips. But perhaps what the photos fail to convey at first glance is that food is more than just a passion for the Delhi boy—it is a ritual. Today, he credits the simple joys of coming home to a steaming plate of his mother’s rajma chawal or bingeing on chole bathure in the labyrinthine lanes of Delhi as a formative memory of growing up. His childhood coach, meanwhile, speaks fondly of the time when the young trainee would implore him to leave his lunch behind so they could instead feast on the biryani and kebabs he’d 
            brought from home. While Kohli would go on to achieve immense success and proclaim endless laurels in the world of cricket, it is perhaps this love for bringing people together over food that serves as the raw, beating heart of his culinary venture, one8 Commune.</b>
           <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
              </Typography>
           </Typography>
        </Card>
 <br></br>

 <br></br>

        <Card className="w-98">
          <CardHeader
            variant="gradient"
            color="white"
            className="mb-4 grid h-28 place-items-center">
         <b>Rameshwaram cafe</b>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
         </CardBody>
          <CardFooter className="pt-0">
          <img style={{width: '100%', height: '50vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCtZ3TP29Od5dmWVgLi3KGGbiR9dBS12NVnzhRQeTDg&s" />
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
          </CardFooter>
        <Typography variant="small" className="mt-6 flex justify-center">
        <br></br>
        <b>The Rameshwaram Cafe was founded by CA Divya Raghavendra Rao and Raghavendra Rao in 2021.
When asked about the cafe’s origin story, Divya told us that from her time in IIM Ahmedabad as a postgraduate student, she envisioned bringing traditional South Indian cuisine to the limelight with consistent quality and service; the same way global chain restaurants like KFC and McDonalds were able to.
This dream was furthered when she met Raghavendra, who had a humble food cart in Seshadripuram and brought along with him, 15+ years of experience in the food industry.  
Together, they launched The Rameshwaram Cafe; a name chosen to pay tribute to the late Mr. Dr. APJ Abdul Kalam’s birthplace -</b>
<br></br>

           <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
              </Typography>
           </Typography>
        </Card>
      </div>
    </div>
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



