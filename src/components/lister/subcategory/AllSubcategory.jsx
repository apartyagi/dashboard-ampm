import "./subcategory.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  subCategoryColumns,
  subCategoryRow,
} from "../../../temp/ListofAllSubCategory";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography';

const Allusers = () => {
  const [data, setData] = useState(subCategoryRow);

  useEffect(() => {
    fetchAllSubCategory();
  }, []);

  const fetchAllSubCategory = async () => {
    const dat = await axios.get(
      `http://localhost:8080/admin/fetchallsubcategory`
    );
    console.log(dat.data);
    setData(dat.data);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const SubCategory = [
    {
      categoryId: "1",
      categoryName: "Plumber",
      SubCategory: [
        {
          subcatid: "1",
          subcatname: "commercial",
        },
        {
          subcatid: "2",
          subcatname: "residensital",
        },
      ],
    },
    {
      categoryId: "2",
      categoryName: "Electrical",
      SubCategory: [
        {
          subcatid: "3",
          subcatname: "commercial",
        },
        {
          subcatid: "4",
          subcatname: "residensital",
        },
      ],
    },
    {
      categoryId: "3",
      categoryName: "HVAC",
      SubCategory: [
        {
          subcatid: "5",
          subcatname: "commercial",
        },
        {
          subcatid: "6",
          subcatname: "roadside",
        },
      ],
    },
    {
      categoryId: "4",
      categoryName: "LockSmith",
      SubCategory: [
        {
          subcatid: "7",
          subcatname: "residensital",
        },
        {
          subcatid: "8",
          subcatname: "roadside",
        },
      ],
    },
  ];
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}
      >
        <Grid
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {SubCategory.map((doa, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Typography variant="h2" component="h2">
                {doa.categoryName}
                </Typography>
                {doa.SubCategory.map((res) => (
                  <div>
                    <p>{res.subcatname}</p>
                  </div>
                ))}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Allusers;
