import './App.css';
import { Button, Input, Textarea, Breadcrumbs,Typography,Select ,Option,Badge,Avatar} from "@material-tailwind/react";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";

function CustomerCare() {
  return (
    <section className="px-8 py-8 lg:py-16">
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
      <a href="#">CustomerCare</a>
    </Breadcrumbs>

    <div className="absolute top-4 right-4 flex items-center space-x-3">
  <a href="">
    <IoIosNotificationsOutline color="black" size={30} />
  </a>
  <a href="/Logout">
    <FaPowerOff color="black" size={20} />
  </a>
</div>


    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"size="xl" div style={{float: 'right'}}></Avatar>
    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
    <br></br>      
  <div style={{ float: 'right' }}>
  <div className="w-74">
      <Select label="My Profile">
        
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
        <a href="/">
             Logout 
               </a>    
          </Option></button>
      </Select>
       </div>
        </div>
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
         Welcome to Customer Care
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src="https://thumbs.dreamstime.com/b/closeup-beautiful-business-customer-service-woman-smiling-30207893.jpg"
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
          />
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Select Options for Business Engagement
            </Typography>
            <div className="flex gap-4">
              <Button variant="outlined" className="max-w-fit">
                General inquiry
              </Button>
              <Button variant="outlined" className="max-w-fit">
                Product Support
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              Send message
            </Button>
            
          </form>
        </div>
      </div>
    </section>

  );
}


export default CustomerCare;



