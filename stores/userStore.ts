import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return { 
            email: "",
            firstName: "",
            lastNmae: "",
            restaurantName: "",
            username: "",
            token: "",
        }
    },
    actions: {
    }
  })