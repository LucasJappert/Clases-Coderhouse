<template>
    <div v-for="user in users" :key="user.id">
        {{ user.firstName }}
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
    async setup(){
        let users = ref(null);

        let result = await axios.get("https://dummyjson.com/users")
            .then(response => response.data.users);
        users.value = result;

        return { users }
    }
}
</script>

<style>

</style>
