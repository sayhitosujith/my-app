import './App.css';


import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";


function Success() {
  return (
   
    <section>
    <div className="w-full px-4">
      <div className="grid h-screen place-items-center">
        <Card className="max-w-xl">
          <CardBody>
            <div className="flex w-full justify-end">
              <IconButton variant="text">
                <i className="fas fa-close text-xl"></i>
              </IconButton>
            </div>
            <div className="text-center px-6">
              <Typography
                color="blue-gray"
                className="mb-6 mt-10"
                variant="h4"
              >
              </Typography>
              <Typography className="text-[20px] font-normal text-gray-500">
              Don&apos;t miss out on the latest deals and promotions.
              </Typography>
              <Button size="lg" className="mt-8">
              <a href="/">
               Success 
               </a>   
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Success;

