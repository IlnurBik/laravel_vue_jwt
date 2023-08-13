<template>
<div class="w-25">
    <div class="mt-2">
        <input v-model="email" type="text" class="form-control" placeholder="Email">
    </div>
    <div class="mt-2">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
    </div>
    <div class="mt-2">
        <button @click="login"  class="btn btn-primary">Войти</button>
    </div>
</div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            email: null,
            password: null,
        }
    },
    methods:{
        login(){
            axios.post('/api/auth/login/', {email: this.email, password: this.password})
            .then(res => {
                console.log(res.data.access_token)
                localStorage.setItem('access_token', res.data.access_token)
                this.$router.push({name: 'user.person'});
                this.$store.commit('setShowMenu', true)
            })
        },

    }
}
</script>

<style scoped>

</style>
