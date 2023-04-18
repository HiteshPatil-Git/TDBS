import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/spring-mvc-boot/users";
const TIMESLOT_API_BASE_URL = "http://localhost:8080/timeslot";
const TEMPLEADMIN_API_BASE_URL = "http://localhost:8080/temples/";
class TempleService{
   
    getAllTemple(){
        return axios.get(TEMPLEADMIN_API_BASE_URL).then(response => {
       
            if (response) {
                localStorage.setItem("alltemple", JSON.stringify(response.data));
            }
        return response;
        });
    }

    createTemple(user){
        return axios.post(TEMPLEADMIN_API_BASE_URL,user)
    }
    getTempleById(userId){
        return axios.get(TEMPLEADMIN_API_BASE_URL+userId)
    }
    updateTemple(user,templeId){
        return axios.put(TEMPLEADMIN_API_BASE_URL+templeId,user).then(updatedresponse => {
       
            if (updatedresponse) {
                localStorage.setItem("user", JSON.stringify(updatedresponse.data));
                console.log('In temple service =>' + updatedresponse.data.role);
            }
        return updatedresponse;
        });
    }

    makePayment(payment){
       
        return axios.post("http://localhost:8080/spring-mvc-boot/users/donate",payment)
            .then(response => {
       
                if (response) {
                    localStorage.setItem("payment", JSON.stringify(response.data));
                }
            return response;
            });
    }

    getAllDonations(){
        return axios.get("http://localhost:8080/spring-mvc-boot/users/donation");
    }

      getDonationDetailsId(donationId){
        return axios.get("http://localhost:8080/spring-mvc-boot/users"+ '/' +donationId)
    }
}
export default new TempleService()