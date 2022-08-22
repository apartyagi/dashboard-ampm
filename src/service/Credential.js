import axios from "axios"
const server='localhost'
const remote='23.23.60.46';
const base_url=`http://${remote}:8080`;
const BASE_URL_FOR_LOGIN= `${base_url}/api/sign-in`;
class Credential{

    loginuserAPI(logindetails){
       return axios.post(BASE_URL_FOR_LOGIN,logindetails,logindetails);
    }
    loginUserInFrontEnd(token){
        localStorage.setItem('token',token);
    }
    logoutUserInFrontEnd(){
        localStorage.removeItem('token');
    }
    saveLoginUserInformationInFrontEnd(){
        
    }
    isLoggedIn(){
        if(localStorage.getItem('token') === null || localStorage.getItem('token') === '' || localStorage.getItem('token')==='undefined' || localStorage.getItem('token').length === 0){
            return false;
        }
        else{
            return true;
        }
    }

}
export default new Credential();