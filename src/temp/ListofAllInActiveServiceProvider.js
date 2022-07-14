export const inactiveserviceproviderColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "companyName",
      headerName: "Company Name",
      // width: 230,
      flex:1,
    },
    {
      field: "email",
      headerName: "Email",
      // width: 230,
      flex:1
    },
  
    {
      field: "companyAddress",
      headerName: "Company Address",
      // width: 100,
      flex:1
    },
    {
      field: "status",
      headerName: "Status",
      // width: 160,
      flex:1,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];


export const inactiveserviceProviderRow = [

    {
      id: 1,
      user: "Jamie Lannister",
      email: "servicepro1@gmail.com",
      place:"helsinki",
      status: "inactive",
    },
    {
      id: 2,
      user: "Lannister",
    
      email: "servicepro2@gmail.com",
      place:"berlin",
      status: "inactive",
    },
    {
      id: 3,
      user: "Stark",
    
      email: "servicepro3@gmail.com",
      place:"tokyo",
      status: "inactive",
    },
    {
      id: 4,
      user: "Targaryen",
  
      email: "servicepro4@gmail.com",
      place:"rio",
      status: "inactive",
    },
    {
      id: 5,
      user: "Melisandre",

      email: "servicepro5@gmail.com",
      status: "inactive",
      place:"palermo",
    },
    {
      id: 6,
      user: "Clifford",
      
      email: "servicepro6@gmail.com",
      status: "inactive",
      place:"france",
    },
    {
      id: 7,
      user: "Frances",
      
      email: "servicepro7@gmail.com",
      place:"prof",
      status: "inactive",
    },
    {
      id: 8,
      user: "Roxie",
      
      email: "servicepro8@gmail.com",
      place:"templace",
      status: "inactive",
    },
    {
      id: 9,
      user: "Roxie",
      
      email: "servicepro9@gmail.com",
      place:"anonymous",
      status: "inactive",
    },
    {
      id: 10,
      user: "servicePro",
    
      status: "inactive",
      place:"denver",
      email: "servicepro10@gmail.com",
    },
  ];