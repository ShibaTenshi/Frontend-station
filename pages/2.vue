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
                    <p>Open Date</p>
                    <select name="type" id="hours" v-on:change="getOpenHoursDropDown">
                        <option value="">Select Hours</option>
                    </select>
                    <select name="type" id="minutes" v-on:change="getOpenMinutesDropDown">
                        <option value="">Select Minutes</option>
                    </select>
                </li>
                <li>
                    <p>Close Date</p>
                    <select name="type" id="hours2" v-on:change="getCloseHoursDropDown">
                        <option value="">Select Hours</option>
                    </select>
                    <select name="type" id="minutes2" v-on:change="getCloseMinutesDropDown">
                        <option value="">Select Minutes</option>
                    </select>
                </li>
            </ul>
            <div class="enter">
                <button v-on:click="saveForm"><p>Next</p></button>
            </div>
            <div class="back">
                <button v-on:click="goBack">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
//api signup   notcomplete

    export default{
        data(){
            return{
                category: null,
                restaurantName: null,
                restaurantType: '',
                description: null,
                location: null,
                image: null,
                opendate: null,
                closedate: null
            }
        },
        methods:{
            getRestaurantName(){ return document.querySelector("input[name=restaurantNameField]").value },
            getDescription(){ return document.querySelector("input[name=descriptionField]").value},
            getLocation(){ return document.querySelector("input[name=locationField]").value},

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
            getOpenHoursDropDown(){
                let select = document.getElementById("hours")
                let data = select.options[select.selectedIndex].text
                if (data.length > 2){
                    return null
                }else{
                    return data
                }
            },
            getOpenMinutesDropDown(){
                let select = document.getElementById("minutes")
                let data = select.options[select.selectedIndex].text
                if (data.length > 2){
                    return null
                }else{
                    return data
                }
            },
            getCloseHoursDropDown(){
                let select = document.getElementById("hours2")
                let data = select.options[select.selectedIndex].text
                if (data.length > 2){
                    return null
                }else{
                    return data
                }
            },
            getCloseMinutesDropDown(){
                let select = document.getElementById("minutes2")
                let data = select.options[select.selectedIndex].text
                if (data.length > 2){
                    return null
                }else{
                    return data
                }
            },

            haveLocalStorage(){
                const arr = localStorage.getItem("h1")
                if (arr == null){
                    location.replace('/')
                }
            },
            setTypeDropDown(){
                async function getTag(){
                    const axios = useNuxtApp().$axios
                    const api = 'http://10.147.17.253:5041/content/category'
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

            setHours(){
                let select = document.getElementById("hours")
                for (let hours = 0; hours < 24; hours++) {
                    let data = document.createElement("option");
                    data.setAttribute('value',hours);
                    let dataText = document.createTextNode(hours);
                    data.appendChild(dataText);                    
                    select.appendChild(data)     
                }

                let select2 = document.getElementById("hours2")
                for (let hours = 0; hours < 24; hours++) {
                    let data = document.createElement("option");
                    data.setAttribute('value',hours);
                    let dataText = document.createTextNode(hours);
                    data.appendChild(dataText);
                    select2.appendChild(data)     
                }
            },
            setMinutes(){
                let select = document.getElementById("minutes")
                for (let minutes = 0; minutes < 60; minutes++) {
                    let data = document.createElement("option");
                    data.setAttribute('value',minutes);
                    let dataText = document.createTextNode(minutes);
                    data.appendChild(dataText);                    
                    select.appendChild(data)     
                }

                let select2 = document.getElementById("minutes2")
                for (let minutes = 0; minutes < 60; minutes++) {
                    let data = document.createElement("option");
                    data.setAttribute('value',minutes);
                    let dataText = document.createTextNode(minutes);
                    data.appendChild(dataText);                    
                    select2.appendChild(data)      
                }
            },

            queryForm(){
                this.restaurantName = this.getRestaurantName()
                this.description = this.getDescription()
                this.location = this.getLocation()
                this.opendate = this.getOpenHoursDropDown() + ":" + this.getOpenMinutesDropDown()
                this.closedate = this.getCloseHoursDropDown() + ":" + this.getCloseMinutesDropDown()
            },

            
            saveForm(){
                this.queryForm()
                let buff = localStorage.getItem("h1")
                let arry = JSON.parse(buff)

                if (this.restaurantType != '' && this.opendate.length <= 5 && this.closedate.length <= 5){
                    arry[3] = this.restaurantName
                    arry[4] = this.restaurantType
                    arry[5] = this.description
                    arry[6] = this.location
                    arry[7] = this.opendate
                    arry[8] = this.closedate

                    let buff = JSON.stringify(arry)
                    localStorage.setItem("h1",buff)
                    navigateTo("/3")
                }
                else{
                    alert("please enter filed")
                }
            },
            goBack(){
                localStorage.removeItem("h1")
                navigateTo("/")
            }

        },
        mounted: function(){
            this.$nextTick(this.haveLocalStorage())
            this.$nextTick(this.setTypeDropDown())
            this.$nextTick(this.islogin())
            this.$nextTick(this.setHours())
            this.$nextTick(this.setMinutes())
        }
    }
</script>

<style scoped src="@/assets/styles/signupDetail.css"></style>