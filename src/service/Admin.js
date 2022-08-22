import axios from "axios";

const server=`127.0.0.1:8080`;
const base_url=`http://${server}`

const counter_home_dash=`${base_url}/api/admin/adam_count_home`;
const counter_customer=`${base_url}/api/admin/adam_count_customer`;
const counter_servicepro=`${base_url}/api/admin/adam_count_serviceProvider`;

class Admin{
    
    fetchAllCountForDashboardHome(){
        return axios.get(counter_home_dash)
    }
    fetchAllCountForCustomers(){
        return axios.get(counter_customer);
    }
    fetchAllCountForServiceProviders(){
        return axios.get(counter_servicepro);
    }

}
export default new Admin();