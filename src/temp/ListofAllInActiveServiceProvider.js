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

