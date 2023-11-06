import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return { 
            email: "",
            firstName: "",
            lastNmae: "",
            restaurantName: "",
            restaurantDiscription: "",
            restaurantType: "",
            location: "",
            username: "",
            token: "",
        }
    },
    actions: {
    }
  })