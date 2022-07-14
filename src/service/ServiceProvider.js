import axios from "axios";
const server='23.23.60.46';
// const remote='23.23.60.46'
const base_url=`http://${server}`;
const Base_URL_FOR_SERVICE_PROVIDER = `${base_url}:8080/admin/fetchallserviceproviders`;
const BASE_URL_FOR_SINGLE_SERVICE_PROVIDER = `${base_url}:8080/admin/single-serviceProvider/`;
const BASE_URL_FOR_ALL_ACTIVE_SERVICE_PROVIDERS = `${base_url}:8080/admin/single-active-serpro/`;
const BASE_URL_FOR_ALL_INACTIVE_SERVICE_PROVIDERS = `${base_url}:8080/admin/single-inactive-serpro/`;
const BASE_URL_FOR_COUNT_ALL_SERVICE_PROVIDERS = `${base_url}:8080/admin/count-alSer`;
const BASE_URL_FOR_COUNT_ALL_ACTIVE_SERVICE_PROVIDERS = `${base_url}:8080/admin/count-acSer`;
const BASE_URL_FOR_COUNT_ALL_IN_ACTIVE_SERVICE_PROVIDERS = `${base_url}:8080/admin/count-inSer`;
// const BASE_URL_FOR_DIABLE_SERVICE_PROVIDERS = `${base_url}:8080/admin/user/enable/`;
// const BASE_URL_FOR_ENABLE_ALL_SERVICE_PROVIDERS = `${base_url}:8080/admin/user/disable/`;

class ServiceProviderService {
  fetchAllServiceProvider() {
    return axios.get(Base_URL_FOR_SERVICE_PROVIDER);
  }
  fetchSingleServiceProvider(id) {
    return axios.get(`${BASE_URL_FOR_SINGLE_SERVICE_PROVIDER}+${id}`);
  }
  fetchAllActiveServiceProviders() {
    return axios.get(BASE_URL_FOR_ALL_ACTIVE_SERVICE_PROVIDERS);
  }
  fetchAllINACTIVE_SERVICE_PROVIDERS() {
    return axios.get(BASE_URL_FOR_ALL_INACTIVE_SERVICE_PROVIDERS);
  }
  findCountForActiveServiceProviders(){
    return axios.get(BASE_URL_FOR_COUNT_ALL_ACTIVE_SERVICE_PROVIDERS);
  }
  findCountForInActiveServiceProviders() {
     return axios.get(BASE_URL_FOR_COUNT_ALL_IN_ACTIVE_SERVICE_PROVIDERS);
  }
  findCountForAllServiceProviders(){
    return axios.get(BASE_URL_FOR_COUNT_ALL_SERVICE_PROVIDERS);
  }
  // enableUserfromserver(id,message){
    
  // }
  // disableUserfromserver(id){
    
  // }
}
export default new ServiceProviderService();
