<template>
<div>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Марка автомобиля</th>
            <th scope="col">Страна</th>
            <th scope="col">Основатель</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="car in cars">
            <th scope="row">{{ car.id }}</th>
            <td>{{ car.car_brand }}</td>
            <td>{{ car.country }}</td>
            <td>{{ car.founder }}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import API from "../../api";
export default {
    name: "Index",
    data(){
        return {
            cars: null,
        }
    },
    methods:{
        getCars(){
            API.get('/api/cars')
            .then(res => {
                this.cars = res.data.data;
            })
        },
    },
    mounted() {
        this.getCars()
    }
}
</script>

<style scoped>

</style>
