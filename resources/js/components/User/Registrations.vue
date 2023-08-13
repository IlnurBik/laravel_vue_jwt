<template>
    <div class="w-25">
        <div class="mt-2">
            <input v-model="name" type="text" class="form-control" placeholder="Name">
        </div>
        <div class="mt-2">
            <input v-model="email" type="text" class="form-control" placeholder="Email">
        </div>
        <div class="mt-2">
            <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <div class="mt-2">
            <input v-model="password_confirm" type="password" class="form-control" placeholder="Password confirm">
        </div>
        <div class="mt-2">
            <button @click="addUser"  class="btn btn-primary">Регистрация</button>
        </div>
        <div class="mt-2" v-if="errorResponse">
            <p class="text-danger">{{ errorResponse }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Registrations",
    data(){
        return {
            name: null,
            email: null,
            password: null,
            password_confirm: null,
            errorResponse: null,
        }
    },
    methods:{
        addUser(){
            axios.post('/api/users/registration', {name: this.name, email: this.email, password: this.password,
                password_confirm: this.password_confirm})
            .then(res => {
                console.log(res)
                localStorage.setItem('access_token', res.data)
                this.$router.push({name: 'user.person'});
                this.$store.commit('setShowMenu', true)
            })
            .catch(error =>{
                this.errorResponse = error.response.data.message;
            })
        }
    }
}
</script>

<style scoped>

</style>
