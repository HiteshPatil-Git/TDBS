import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users";
const TIMESLOT_API_BASE_URL = "http://localhost:8080/spring-mvc-boot/timeslot";
//const USER_API_BASE_URL = "http://localhost:8080/users/login";
class UserService{
    loginUser(user) {
        console.log('In user service  immediate=>' + user.email);
        
      
//backend login URL
return axios.post("http://localhost:8080/users/login",user)
.then(response => {
       
    if (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log('In user service =>' + response.data.role);
    }
return response;
});
    }


    createUser(user){
        return axios.post("http://localhost:8080/users/",user)
    }
    getUserById(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId)
    }
    updateUser(user,userId){
        return axios.put(USER_API_BASE_URL+ '/' +userId,user)
        .then(updatedresponse => {
       
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
export default new UserService()