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
                    <input type="text" name="restaurantNameField" id="restaurantNameField" class="text">
                </li>
                <li>
                    <p>Restaurant Type</p>
                    <select name="type" id="typeDropDown" v-on:change="getTypeDropDown">
                        <option value="">Select Type Restaurant</option>
                    </select>
                </li>
                <li>
                    <p>Description</p>
                    <input type="text" name="descriptionField" id="descriptionField" class="text">
                </li>
                <li>
                    <p>Location</p>
                    <input type="text" name="locationField" id="locationField" class="text">
                </li>
                <li>
                    <p>Upload Image</p>
                    <input type="file" accept=".jpg, .jpeg, .png" name="imageField" id="imageField" class="text">
                </li>
            </ul>
            <div class="enter">
                <button v-on:click="requestForm"><p>Request</p></button>
            </div>
        </div>
    </div>
</template>

<script>
import { getType } from '~/utils/getType'
//api category notcomplete
//api signup   notcomplete

    export default{
        data(){
            return{
                category: null,
                restaurantName: null,
                restaurantType: null,
                description: null,
                location: null,
                image: null
            }
        },
        methods:{
            getRestaurantName(){ return document.querySelector("input[name=restaurantNameField]").value },
            getDescription(){ return document.querySelector("input[name=descriptionField]").value},
            getLocation(){ return document.querySelector("input[name=locationField]").value},
            getImage(){return document.getElementById("imageField").value},

            islogin(){
                const cookie = useCookie('token')
                if (cookie.value != ""){
                    navigateTo('/usrs')
                }
            },

            getTypeDropDown(){
                let selectElement = document.querySelector('#typeDropDown');
                this.restaurantType = selectElement.options[selectElement.selectedIndex].value;
            },

            haveLocalStorage(){
                const arr = localStorage.getItem("h1")
                if (arr == null){
                    location.replace('/')
                }
            },
            setDropDown(){
                async function getTag(){
                    const axios = useNuxtApp().$axios
                    const api = 'http://localhost:5041/content/category'
                    let select = document.getElementById("typeDropDown")

                    await  axios.get(api).then((response) => {
                        const tagRestaurant = response.data
                        for (let tagindex = 0 ; tagindex < tagRestaurant.length; tagindex++){

                            let option = document.createElement("option");
                            option.setAttribute('value', tagRestaurant[tagindex]);
                            let optionText = document.createTextNode(tagRestaurant[tagindex]);
                            option.appendChild(optionText);
                            select.appendChild(option);
                        }
                    })
                }
                getTag()
            },

            queryForm(){
                this.restaurantName = this.getRestaurantName()
                this.description = this.getDescription()
                this.location = this.getLocation()
                this.image = this.getImage()
                //console.log(restaurantName)
            },

            
            requestForm(){
                this.queryForm()
                let buff = localStorage.getItem("h1")
                let arry = JSON.parse(buff)

                arry[3] = this.restaurantName
                arry[4] = this.restaurantType
                arry[5] = this.description
                arry[6] = this.location
                arry[7] = this.image
                console.log(arry)

                //useSignUpForm(arry[0], arry[1], arry[2],arry[3],arry[4],arry[5],arry[6],arry[7])
            }

        },
        mounted: function(){
            this.$nextTick(this.haveLocalStorage())
            this.$nextTick(this.setDropDown())
            this.$nextTick(this.islogin())
        }
    }
</script>

<style scoped src="@/assets/styles/signupDetail.css"></style>