<template>
    <div class="panel">
        <h4>Cook panel demo</h4>
        <h5>Channel name: {{ channel }}</h5>
        <p>
            Set restaurant token:
            <input type="text" v-model="channel">
        </p>
        <div v-for="order in orders" class="order">
            <div>token: {{order.token}}</div>
            <div>phone: {{order.phone_number}}</div>
            <div>delivery: {{order.delivery_address}}</div>
            <div>price: {{order.price}}</div>
            <div>status: {{order.status}}</div>
            <ul v-for="pizza in order.pizzas">
                <li>{{pizza.description}} - {{ pizza.price}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cook",
        data() {
            return {
                channel: "restaurant.token",
                orders: []
            }
        },

        watch: {
            channel: function (val, oldVal) {
                Echo.leave(oldVal)
                this.orders = []
                Echo.private(val).listen('OrderPlaced', (e) => {
                    this.orders.push(e.order)
                });
            },
        }
    }
</script>

<style scoped>
    .order {
        padding: 20px;
        background: #eaeaea;
        margin-top: 20px;
    }
    .order > ul {
        margin-top: 20px;
    }
    .panel {
        margin: 10px;
        padding: 10px;
        border: black solid 1px;
    }
</style>