<template>
    <div>
        <Head>
            <Title>ShibaStation</Title>
        </Head>
        <div class="header">
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">LOGO</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
</template>

<style>
    .header nav ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px;
        list-style: none;
        background-color: rgb(148, 166, 132);
    }

    NextLink{
        text-decoration: none;
    }
</style>