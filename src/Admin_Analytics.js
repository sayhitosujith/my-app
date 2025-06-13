import './App.css';
import { Select, Option } from "@material-tailwind/react";
import { Badge } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Slider } from "@material-tailwind/react";
import FileDownloader from './FileDownloader';
import { MdDeleteOutline } from "react-icons/md";
import { FaRegClone } from "react-icons/fa";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";

import {
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Breadcrumbs,
  Avatar,
  Chip,
  Tooltip,
  Input,
    } from "@material-tailwind/react";

    import {
      Dialog,
      DialogHeader,
      DialogBody,
      DialogFooter,
    } from "@material-tailwind/react";

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", "Actions"];
 

const TABLE_ROWS = [
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "$2,500",
      date: "Wed 3:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
      name: "Amazon",
      amount: "$5,000",
      date: "Wed 1:00pm",
      status: "paid",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
      name: "Pinterest",
      amount: "$3,400",
      date: "Mon 7:40pm",
      status: "pending",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      name: "Google",
      amount: "$1,000",
      date: "Wed 5:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
      name: "netflix",
      amount: "$14,000",
      date: "Wed 3:30am",
      status: "cancelled",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
    },
  ];

const data = [
    {id: 1, name: 'Registred Users', src: 'https://images.klipfolio.com/website/public/143ce3cb-0458-43af-a761-ce7b9673efe4/website-analytics-completions-metric.png',},
    {id: 2, name: 'Todays Orders', src: 'https://media.licdn.com/dms/image/D5612AQERVZ2zcWRhUA/article-cover_image-shrink_720_1280/0/1683168912775?e=2147483647&v=beta&t=hZyQJXBr0hNXuf7KYighwiqkhIRoTgQlqqOP1Tipfi0',},
    {id: 3, name: 'Added to Cart', src: 'https://images.klipfolio.com/website/public/cf3d1718-8c3e-4567-bbed-ec56cfd4c7d6/website-analytics-sessions-metric.png',},
    {id: 4, name: 'Total Sales', src: 'https://lordicon.com/icons/wired/gradient/976-web-analytics.svg',},
    {id: 5, name: 'Active Countries', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbk-T3O-4_zcnjU3F35X-SeiuAPTp9gUqzLw&usqp=CAU',},

]

const CardItem = ({item}) => (
    <Card className="w-200">
          <CardHeader
              variant="gradient"
              color="green"
              className="mb-5 grid h-10 place-items-center">
              <Typography variant="h3" color="white">
              {item.id} : {item.name} 
              </Typography>
            </CardHeader>

            <div className='flex justify-center items-center'>
            <img style={{width: '200px', height: '200px'}} src={item.src} className="h-96 w-full object-cover object-center" />
            </div>
          <CardBody className="flex flex-col gap-4">
            <div className="-mr-50">
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h10" color="black">
           <div className="w-72">
           <Typography as="caption" variant="small" className="mt-2 text-center font-normal">
        {/* Image caption */}
      </Typography>
            </div>
            <label>
           </label>
          </Typography>
          </CardFooter>
        </Card>
        
)

function Admin_Analytics() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleConfirmDelete = () => {
    // Perform delete action here, e.g., call an API or update state
    console.log("Deleting item:", selectedItem);
    setOpen(false);
    setSelectedItem(null);
  };


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
      <a href="#">Admin Analytics</a>
    </Breadcrumbs>


    <div className="absolute top-4 right-4 flex items-center space-x-3">
  <a href="">
    <IoIosNotificationsOutline color="black" size={30} />
  </a>
  <a href="/Logout">
    <FaPowerOff color="black" size={20} />
  </a>
</div>
    <br></br>
    <Typography variant="h3" color="Black">
    Dashboard

    <div style={{float: 'right'}}>
    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"size="xl" div style={{float: 'right'}}></Avatar>
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

        <div className='w-full flex mt-20 gap-7'>
            {
                data.slice(0,5).map((item) => <CardItem item={item} />)
            }
        </div>
        <div className='w-full flex mt-20 gap-7'>
            {
                data.slice(6, 10).map((item) => <CardItem item={item} />)
            }
        </div>
        <div className='w-full flex mt-20 gap-7'>
            {
                data.slice(11, 15).map((item) => <CardItem item={item} />)
            }
        </div>
       
        <div className="w-96">
    <Slider
      defaultValue={50}
      className="text-[#2ec947]"
      barClassName="rounded-none bg-[#2ec946]"
      thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
      trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
    />
  </div>

       
        <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> 
              <FileDownloader />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                            {account.split("-").join(" ")} {accountNumber}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-6 w-6" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip content="Delete User">
                   <IconButton variant="text"color="red" onClick={() => handleOpen(name)}>
                   <MdDeleteOutline className="h-6 w-6" />
                     </IconButton>
                    </Tooltip>

<Dialog open={open} handler={setOpen}>
  <DialogHeader>Confirm Deletion</DialogHeader>
  <DialogBody>
    Are you sure you want to delete <strong>{selectedItem}</strong>?
  </DialogBody>
  <DialogFooter>
    <Button variant="text" color="gray" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button variant="gradient" color="red" onClick={handleConfirmDelete}>
      Confirm
    </Button>
  </DialogFooter>
</Dialog>

                      
                      <Tooltip content="Clone User">
                        <IconButton color="green"variant="text">
                          <FaRegClone  className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
    </div>

    
 );
 
}


export default Admin_Analytics;



