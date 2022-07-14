export const serviceproviderColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field:"companyName",
      headerName:"Company Name",
      // width:230
      flex:1
    },
    {
      field: "email",
      headerName: "Email",
      // width: 230,
      flex:1

    },
    {
      field:"companyAddress",
      headerName:"Company Address",
      // width:230
      flex:1
    }, 
     {
      field:"status",
      headerName:"Status",
      // width:230
      flex:1,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
    }
  }
  ];


export const serviceProviderRow = [

    {
      id: 1,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceproq@gmail.com",
      place:"helsinki",
      status: "active",
    },
    {
      id: 2,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceprow@gmail.com",
      place:"berlin",
      status: "inactive",
    },
    {
      id: 3,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceproe@gmail.com",
      place:"tokyo",
      status: "active",
    },
    {
      id: 4,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "servicepror@gmail.com",
      place:"rio",
      status: "inactive",
    },
    {
      id: 5,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceprot@gmail.com",
      status: "active",
      place:"palermo",
    },
    {
      id: 6,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceproy@gmail.com",
      status: "inactive",
      place:"france",
    },
    {
      id: 7,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceprou@gmail.com",
      place:"prof",
      status: "active",
    },
    {
      id: 8,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceproi@gmail.com",
      place:"templace",
      status: "active",
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "serviceproo@gmail.com",
      place:"anonymous",
      status: "active",
    },
    {
      id: 10,
      username: "servicePro",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      place:"denver",
      email: "serviceprop@gmail.com",
    },
  ];