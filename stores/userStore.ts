import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return { 
            username: "test",
            fullName: "",
            token: ""
        }
    },
    actions: {
    }
  })