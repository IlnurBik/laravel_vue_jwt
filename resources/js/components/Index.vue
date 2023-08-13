<template>
<div class="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-if="$store.getters.showMenu">
                        <router-link class="nav-link " :to="{name: 'cars.index'}">Cars</router-link>
                    </li>
                    <li v-if="!$store.getters.showMenu">
                        <router-link class="nav-link " :to="{name: 'user.login'}">Login</router-link>
                    </li>
                    <li v-if="!$store.getters.showMenu">
                        <router-link class="nav-link " :to="{name: 'user.registration'}">Registration</router-link>
                    </li>
                    <li v-if="$store.getters.showMenu">
                        <router-link class="nav-link " :to="{name: 'user.person'}">Person</router-link>
                    </li>
                    <li v-if="$store.getters.showMenu">
                        <a class="nav-link" @click.prevent="logout" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</div>
</template>

<script>
import API from "../api";
export default {
    name: "Index",
    data(){
      return {
          token: null,
      }
    },
    updated() {
        this.getToken();
        console.log('updated')
    },
    methods:{
        logout(){
            API.post('/api/auth/logout')
            .then(res => {
                localStorage.removeItem('access_token');
                this.$router.push({name: 'user.login'});
                this.$store.commit('setShowMenu', false)
            })
        },
        getToken(){
            this.token = localStorage.getItem('access_token');
            if(localStorage.getItem('access_token')){
                this.$store.commit('setShowMenu', true);
            }
        }
    },
    mounted() {
        this.getToken();
    },
}
</script>

<style>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.app{
    padding: 20px;
}
</style>
