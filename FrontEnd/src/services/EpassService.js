import axios from 'axios';

const EPASS_API_BASE_URL = "http://localhost:8080/epass/"
const TIMESLOT_API_BASE_URL = "http://localhost:8080/timeslot/";
class EpassService {

    getEpass() {
        return axios.get(EPASS_API_BASE_URL);
    }

    createEpass(pass, slotId, userId) {
        return axios.post(EPASS_API_BASE_URL + 'devotee/' + userId, pass,
            {
                params: {
                    slotId: slotId,
                }
            })
            .then(response => {

                if (response) {
                    localStorage.setItem("bookedpass", JSON.stringify(response.data));
                }
                return response;
            });
    }

    deleteEpass(passId) {
        return axios.delete(EPASS_API_BASE_URL + passId);

    }
    getPassByPassId(passv) {
        console.log('Epass service method called');
        return axios.post("http://localhost:8080/epass/passverification",passv).then(epassByPassId => {
            console.log('response received');

                if (epassByPassId != null) {
                    localStorage.setItem("epassByPassId", JSON.stringify(epassByPassId.data));
                }
                else{
                    console.log('response received is null');
                }
                return epassByPassId;
            });
    }

    getPassByUserId(userId) {
        return axios.get(EPASS_API_BASE_URL+'userId/', {
            params: {
                userId: userId,
            }
        })
            .then(epassByUserId => {

                if (epassByUserId) {
                    localStorage.setItem("epassByUserId", JSON.stringify(epassByUserId.data));
                }
                return epassByUserId;
            });

    }
}
export default new EpassService()