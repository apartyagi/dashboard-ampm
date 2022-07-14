import axios from "axios";
const server='23.23.60.46';
// const remote='23.23.60.46'
const base_url=`http://${server}`;
const BaseUrlForCustomer=`${base_url}:8080/admin/fetchallcustomer`;
const BaseUrlForSingleCustomer=`${base_url}:8080/admin/single-customer/`;
const BASE_URL_FOR_COUNT_ALL_CUSTOMERS = `${base_url}:8080/admin/count-acCus`;
const BASE_URL_FOR_COUNT_ALL_ACTIVE_CUSTOMERS = `${base_url}:8080/admin/count-acCus`;
const BASE_URL_FOR_COUNT_ALL_IN_ACTIVE_CUSTOMERS = `${base_url}:8080/admin/count-inCus`;
class Customer{

    fetchAllCustomerFromApi(){
        return axios.get(BaseUrlForCustomer);
    }

    fetchSingleCustomerfromApi(id){
        return axios.get(`${BaseUrlForSingleCustomer}+${id}`);
    }
    findCountForActiveServiceProviders(){
        return axios.get(BASE_URL_FOR_COUNT_ALL_ACTIVE_CUSTOMERS);
      }
      findCountForInActiveServiceProviders() {
         return axios.get(BASE_URL_FOR_COUNT_ALL_IN_ACTIVE_CUSTOMERS);
      }
      findCountForAllCustomers(){
        return axios.get(BASE_URL_FOR_COUNT_ALL_CUSTOMERS);
      }
  
}
export default new Customer();