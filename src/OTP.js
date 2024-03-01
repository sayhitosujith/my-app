import './App.css';
import OtpInput from 'react-otp-input';


import {
  Card,
  CardHeader,
  Typography,
  Input,
  Button,
  otp,
  setOtp,
} from "@material-tailwind/react";


function OTP() {
  return (
    <div className="flex flex-row gap-5">
      <div className='w-1/2 h-screen flex items-center justify-center'>
      <Card style={{width:"80%", height:"40%"}}> 
          
          <CardHeader
            variant="gradient"
            color="gray"
           className="mb-4 grid h-28 place-items-center">
            <Typography variant="h3" color="white">
            OTP Verification 
            </Typography>
          </CardHeader>
          &nbsp;

          <div className="w-[32rem]">
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      size="ls"
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
      <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        Use at least 6 characters.
      </Typography>
    </div>            &nbsp;
            <Button variant="gradient" fullWidth>
             V E R I F Y
            </Button>
            <Typography
          variant="p"
          sx={{ letterSpacing: '1.5px', marginLeft: '4px'  }}>
        </Typography>
            
        &nbsp;

        <Typography>If you didn't recieve a code! <u> <a href="https://example.com/faq.html" rel="noreferrer">
      RESEND
  </a></u></Typography>
       

        </Card>
      </div>
      <img style={{width: '60%', height: '100vh'}} src="https://cdn.dribbble.com/users/3821672/screenshots/7172846/otp.gif" />
    </div>

  );

  
}

export default OTP;

