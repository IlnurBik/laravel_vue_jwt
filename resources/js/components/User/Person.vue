<template>
<div>
    <ul v-if="person">
        <li><strong>Id: </strong>{{ person.id }}</li>
        <li><strong>Name: </strong>{{ person.name }}</li>
        <li><strong>Email: </strong>{{ person.email }}</li>
    </ul>
</div>
</template>

<script>
import api from "../../api";
export default {
    name: "Person",
    data(){
        return {
            person: null,
        }
    },
    methods:{
        getPerson(){
            api.post('/api/auth/me')
            .then(res => {
                this.person = res.data;
            })
        }
    },
    mounted() {
        this.getPerson()
    }

}
</script>

<style scoped>

</style>
