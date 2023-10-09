<template>
    <Header :logo="true" :login="true"/>
    <div class="detailBox" id="detailBox">
        <div class="logo">
            <img src="@/assets/login.png" alt="">
            <div class="signup">
                <p>Restaurant</p>
                <p>Detail</p>
            </div>
        </div>
        <div class="form">
            <ul>
                <li>
                    <p>Restaurant Name</p>
                    <input type="text" name="restaurantNameField" id="restaurantNameField">
                </li>
                <li>
                    <p>Restaurant Type</p>
                    <input type="text" name="restaurantTypeField" id="restaurantTypeField">
                </li>
                <li>
                    <p>Description</p>
                    <input type="text" name="descriptionField" id="descriptionField">
                </li>
                <li>
                    <p>Location</p>
                    <input type="text" name="locationField" id="locationField">
                </li>
                <li>
                    <p>Upload Image</p>
                    <input type="text" name="imageField" id="imageField">
                </li>
            </ul>
            <div class="enter">
                <button v-on:click="requestForm"><p>Request</p></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                restaurantName: null,
                restaurantType: null,
                description: null,
                location: null,
                image: null
            }
        },
        methods:{
            haveLocalStorage(){
                const arr = localStorage.getItem("h1")
                if (arr == null){
                    location.replace('/')
                }
            },

            getRestaurantName(){ return document.querySelector("restaurantNameField") },
            
            requestForm(){
                let buff = localStorage.getItem("h1")
                let arry = JSON.parse(buff)
                console.log(arry)

                arry[3] = this.restaurantName
                arry[4] = this.restaurantType
                arry[5] = this.description
                arry[6] = this.location
                arry[7] = this.image
                console.log(arry)
            }

        },
        mounted: function(){
            this.$nextTick(this.haveLocalStorage())
        }
    }
</script>

<style scoped src="@/assets/styles/signupDetail.css"></style>