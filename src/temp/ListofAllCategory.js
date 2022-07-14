export const categoryColumns = [
    { field: "id", headerName: "ID", width: 70 },
    
    {
      field: "name",
      headerName: "name",
      width: 200,
    },
    {
      field: "description",
      headerName: "description",
      width: 230,
    },
    {
      field:"subCategory",
      headerName:"SubCategory",
      valueGetter: (params) =>{},
      width:250
    }
  
  ];


export const categoryRow = [
    {
      id: 1,
      name: "HVAC",
      // img: "https://images.pexels.com/photos/4122760/pexels-photo-4122760.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "i am description of hvac",
      subcat:"commercial,residential"
    },
    {
      id: 2,
      name: "ELECTRICAL",
      // img: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "i am description of electrical",
      subcat:"commercial,residential"
    },
    {
      id: 3,
      name: "LOCKSMITH",
      // img: "https://images.pexels.com/photos/3828944/pexels-photo-3828944.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "i am description of locksmith",
      subcat:"commercial,residential"
    },
    {
      id: 4,
      name: "Plumber",
      // img: "https://media.istockphoto.com/photos/now-it-should-be-ok-picture-id513054216",
      description: "i am description of plumber",
      subcat:"commercial,roadside"
    },
  ];