import axios from "axios";
const server='127.0.0.1';
const remote='23.23.60.46'
const base_url=`http://${server}:8080`;
const BASE_URL_FOR_CATEGORY=`${base_url}/api/admin/fetch_all_category`;


class CategoryS{
    fetchAllCategory(){
        return axios.get(BASE_URL_FOR_CATEGORY);
    }
    // saveNewCategory(category){
    //     return axios.post(BASE_URL_FOR_CATEGORY,category);
    // }
    // saveSubCategory(subcategory){
    //     return axios.post(BASE_URL_FOR_ADD_SubCATEG,subcategory);
    // }

}
export default new CategoryS();