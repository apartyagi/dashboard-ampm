import axios from "axios";
const server='localhost';
const remote='23.23.60.46'
const base_url=`http://${remote}:8080`;

const URL_fetchAllServiceProvider =`${base_url}/api/admin/fetch_all_serviceProviders`;
const URL_fetchAllActiveServiceProvider =`${base_url}/api/admin/all_active_serPro`;
const URL_fetchAllInactiveServiceProvider =`${base_url}/api/admin/all_inactive_serPro`;
const URL_fetchSingleServiceProvider=`${base_url}/api/admin/single_serviceProvider`;

class ServiceProviderService {

  fetchAllActiveServiceproviders(){
      return axios.get(URL_fetchAllActiveServiceProvider);
  }
  fetchAllInActiveServiceproviders(){
    return axios.get(URL_fetchAllInactiveServiceProvider);
  }
  fetchAllServiceProvider(){
    return axios.get(URL_fetchAllServiceProvider)
  }
  fetchSingleServiceProvider(id){
    return axios.get(`${URL_fetchSingleServiceProvider}/${id}`);
  }

}
export default new ServiceProviderService();
