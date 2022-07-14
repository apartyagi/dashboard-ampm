import axios from "axios";
const server='localhost';
const remote='23.23.60.46'
const base_url=`http://${server}`;
const BASE_URL_FOR_CATEGORY=`${base_url}:8080/admin/fetchallcategory`;
const BASE_URL_FOR_ADD_CATEGORY=`${base_url}:8080/admin/addcategory`;
const BASE_URL_FOR_ADD_SubCATEG=`${base_url}:8080/admin/addsubcategory`;

class CategoryS{
    fetchAllCategory(){
        return axios.get(BASE_URL_FOR_CATEGORY);
    }
    saveNewCategory(category){
        return axios.post(BASE_URL_FOR_CATEGORY,category);
    }
    saveSubCategory(subcategory){
        return axios.post(BASE_URL_FOR_ADD_SubCATEG,subcategory);
    }

}
export default new CategoryS();