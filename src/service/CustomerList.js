import axios from "axios";
const server='127.0.0.1';
const remote='23.23.60.46'
const base_url=`http://${remote}:8080`;
const BaseUrlForCustomer=`${base_url}/api/admin/fetch_all_customer`;
const BaseUrlForSingleCustomer=`${base_url}/api/admin/single_customer`;
class Customer{

    fetchAllCustomerFromApi(){
        return axios.get(BaseUrlForCustomer);
    }
    fetchSingleCustomerFromApi(id){
        return axios.get(`${BaseUrlForSingleCustomer}/${id}`);
    }
  
}
export default new Customer();