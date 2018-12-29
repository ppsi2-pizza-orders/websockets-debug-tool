<template>
    <div class="panel">
        <h4>Token</h4>
        <h5>Current token: {{ token }}</h5>
        <p>
            Set bearer JWT:
            <input type="text" v-model="token">
        </p>
    </div>
</template>

<script>
    export default {
        name: "Client",
        data() {
            return {
                token: "token here",
            }
        },
        watch: {
            token: function (val) {
                Echo.connector.pusher.config.auth.headers = {
                    'Authorization': 'Bearer ' + val
                }
            },
        }
    }
</script>

<style scoped>
    .panel {
        margin: 10px;
        padding: 10px;
        border: black solid 1px;
        overflow: hidden;
    }
</style>