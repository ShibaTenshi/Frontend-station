<template>
    <Header :logo="true" :logout="true"/>

    <div class="content">
        <button>
            <NuxtLink to="usrs/manages">Manage Profile</NuxtLink>
        </button>
        <button>
            <NuxtLink to="usrs/manages/tableAvalibility">Manage Table Avalibility</NuxtLink>
        </button>
        <button>
            <NuxtLink to="usrs/manages/manageQueue">Manage Queue</NuxtLink>
        </button>
        <button>
            <NuxtLink to="usrs/information">Restaurant Information</NuxtLink>
        </button>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })

</script>



<script>
export default {
    data(){
        return{

        }
    },
    methods:{}
}
</script>