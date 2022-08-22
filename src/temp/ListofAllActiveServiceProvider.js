export const activeserviceproviderColumns = [
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
      flex:1,
    },
  
    {
      field: "companyAddress",
      headerName: "Company Address",
      // width: 
      flex:1,
    },
    {
      field: "sta",
      headerName: "Status",
      // width: 160,
      flex:1,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.sta}`}>
            {params.row.sta}
          </div>
        );
      },
    },
  ];


export const activeserviceProviderRow = [

    {
      id: 1,
      user: "Jamie Lannister",
      
      email: "serviceproa@gmail.com",
      place:"helsinki",
      status: "active",
    },
    {
      id: 2,
      user: "Lannister",
      
      email: "serviceprob@gmail.com",
      place:"berlin",
      status: "active",
    },
    {
      id: 3,
      user: "Stark",
      
      email: "serviceproc@gmail.com",
      place:"tokyo",
      status: "active",
    },
    {
      id: 4,
      user: "Targaryen",
      
      email: "serviceprod@gmail.com",
      place:"rio",
      status: "active",
    },
    {
      id: 5,
      user: "Melisandre",
      
      email: "serviceproe@gmail.com",
      status: "active",
      place:"palermo",
    },
    {
      id: 6,
      user: "Clifford",
      
      email: "serviceprof@gmail.com",
      status: "active",
      place:"france",
    },
    {
      id: 7,
      user: "Frances",
      
      email: "serviceprog@gmail.com",
      place:"prof",
      status: "active",
    },
    {
      id: 8,
      user: "Roxie",
      
      email: "serviceproh@gmail.com",
      place:"templace",
      status: "active",
    },
    {
      id: 9,
      user: "Roxie",
      
      email: "serviceproi@gmail.com",
      place:"anonymous",
      status: "active",
    },
    {
      id: 10,
      user: "servicePro",

      status: "active",
      place:"denver",
      email: "serviceproj@gmail.com",
    },
  ];