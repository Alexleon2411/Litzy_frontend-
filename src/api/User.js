import api from "@/lib/axios";

export default {
  getUserAppoitments(userId){
    return api.get(`/users/${userId}/appoitments`)
  }
}
