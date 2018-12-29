<template>
    <div class="panel">
        <h4>Client panel demo</h4>
        <h5>Listening to order channel: {{ channel }}</h5>
        <p>
            Set order token:
            <input type="text" v-model="channel">
        </p>
        <h3>
            Status: {{ status }}
        </h3>
    </div>
</template>

<script>
    export default {
        name: "Client",
        data() {
            return {
                channel: "order.token",
                status: "not fetched"
            }
        },

        watch: {
            channel: function (val, oldVal) {
                this.status = "not fetched"
                Echo.leave(oldVal);
                Echo.private(val).listen('OrderStatusChanged', (e) => {
                    this.status = e.status;
                });
            },
        }
    }
</script>

<style scoped>
    .panel {
        margin: 10px;
        padding: 10px;
        border: black solid 1px;
    }
</style>