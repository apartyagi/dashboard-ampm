export const customerColumns = [
    { field: "id", headerName: "ID", width: 20 },
    {
      field: "user",
      headerName: "Customer Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
  
    {
      field: "contact",
      headerName: "Contact No",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];


export const customersRow = [
    
  {
    id: 1,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 2,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 3,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 4,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 5,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 6,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 7,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 8,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 9,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 10,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 11,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 12,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 13,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 14,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  {
    id: 15,
    username: "Test1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "inactive",
    dob:"22-08-652",
    contact:"22856325",
    city:"berlin",
    address:"uk",
    email: "customer@gmail.com",
  },
  ];