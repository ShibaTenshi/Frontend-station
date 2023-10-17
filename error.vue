<template>
    <Header :logo="true"/>
    <div class="main">
        <div class="content">
                    <div class="text">
                        <p>404 Not Found</p>
                    </div>
                    <div class="image">
                        <img src="@/assets/RestaurantLogo.png" alt="">
                    </div>
                    <div class="link">
                        <button><NuxtLink to="/login" style="text-decoration: none; background-color: transparent; color: black;">Return</NuxtLink></button>
                    </div>
        </div>
    </div>
</template>

<style>
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
        background-color: whitesmoke;
    }

    .text {
        margin-top: 2rem;
        text-align: center;
    }
    .text p{
        font-size: 40px;
        font-weight: bold;
    }

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
    }
    @media screen and (max-width: 420px){
        img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    }

    .content .link{
        text-align: center;
    }
    .content .link button{
        background-color: rgb(121, 142, 102);
        padding: 10px 30px;
        border-radius: 20px;
    }

</style>