const CardItem = ({ item, navigate }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [clinic, setClinic] = useState("");
  const [showHover, setShowHover] = useState(false);

  const [booked, setBooked] = useState(false);
  const [booking, setBooking] = useState(null);

  // ✅ Load booking from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];

    const found = saved.find((b) => b.item.id === item.id);

    if (found) {
      setBooked(true);
      setBooking(found);
    } else {
      setBooked(false);
      setBooking(null);
    }
  }, [item.id]);

  // ✅ BOOK handler
  const handleBook = () => {
    if (!country || !city || !clinic) {
      alert("Please select country, city and clinic first");
      return;
    }

    const newBooking = {
      item,
      country,
      city,
      clinic,
      id: Date.now(),
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];

    // prevent duplicate booking for same item
    const updated = [
      ...existing.filter((b) => b.item.id !== item.id),
      newBooking,
    ];

    localStorage.setItem("bookings", JSON.stringify(updated));

    setBooked(true);
    setBooking(newBooking);

    navigate("/MyCart");
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <Card className="w-72 p-4 rounded-xl shadow-md relative">
        {/* BOOKED BADGE */}
        {booked && (
          <div className="absolute top-2 right-2 z-10">
            <Chip value="BOOKED" color="green" />
          </div>
        )}

        <CardHeader
          className="mb-5 grid h-12 w-full place-items-center rounded-lg"
          style={{ background: "linear-gradient(to right, #912d7d, #64459b)" }}
        >
          <Typography variant="h6" color="white" className="text-sm">
            {item.id} : {item.name}
          </Typography>
        </CardHeader>

        <div className="flex justify-center mb-3">
          <img src={item.src} alt={item.name} className="w-[150px] h-[150px]" />
        </div>

        <CardBody className="flex flex-col gap-3 p-2">
          <Rating value={4} readonly />

          {/* COUNTRY */}
          <select
            className="border p-2 rounded w-full"
            value={country}
            disabled={booked}
            onChange={(e) => {
              setCountry(e.target.value);
              setCity("");
              setClinic("");
            }}
          >
            <option value="">Select Country</option>
            {Object.keys(locationData).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* CITY */}
          <select
            className="border p-2 rounded w-full"
            value={city}
            disabled={!country || booked}
            onChange={(e) => {
              setCity(e.target.value);
              setClinic("");
            }}
          >
            <option value="">Select City</option>
            {country &&
              locationData[country].map((ct) => (
                <option key={ct} value={ct}>
                  {ct}
                </option>
              ))}
          </select>

          {/* CLINIC */}
          <select
            className="border p-2 rounded w-full"
            value={clinic}
            disabled={!city || booked}
            onChange={(e) => setClinic(e.target.value)}
          >
            <option value="">Select Clinic</option>
            {city &&
              clinicData[city]?.map((cl) => (
                <option key={cl} value={cl}>
                  {cl}
                </option>
              ))}
          </select>
        </CardBody>

        <CardFooter>
          <Button
            onClick={handleBook}
            disabled={booked}
            className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white"
          >
            {booked ? "BOOKED" : "BOOK NOW"}
          </Button>
        </CardFooter>

        {/* HOVER DETAILS */}
        {booked && showHover && booking && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white shadow-xl border rounded-lg p-3 z-20">
            <Typography className="font-bold text-sm mb-2 text-purple-700">
              Booking Details
            </Typography>

            <p className="text-sm">Country: {booking.country}</p>
            <p className="text-sm">City: {booking.city}</p>
            <p className="text-sm">Clinic: {booking.clinic}</p>
          </div>
        )}
      </Card>
    </div>
  );
};