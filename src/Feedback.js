import React, { useState } from "react";
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const [selectedRating, setSelectedRating] = useState(null);
  const navigate = useNavigate();

  const handleRating = (value) => {
    setSelectedRating(value);
  };

  const handleLogout = () => {
    if (selectedRating !== null) {
      localStorage.setItem("logoutFeedbackRating", selectedRating);
    }
    navigate("/logout"); // ✅ redirect to Logout page
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4 items-center">
          <Typography variant="h5" className="mb-2">
            How was your experience?
          </Typography>

          <div className="flex gap-2">
            {[1,2,3,4,5,6,7,8,9,10].map((num) => (
              <Button
                key={num}
                onClick={() => handleRating(num)}
                color={selectedRating === num ? "orange" : "gray"}
                className="rounded-full w-10 h-10 p-0"
              >
                {num}
              </Button>
            ))}
          </div>
        </CardBody>

        <CardFooter className="flex justify-center">
          <Button
            color="red"
            onClick={handleLogout}
            disabled={selectedRating === null}
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Feedback;
