<template>
    <div class="center">
        <h1>Login page</h1>
        <v-row> 
            <v-col cols="10" offset="1" sm="6" offset-sm="3" md="4" offset-md="4">
                <v-avatar color="primary" size="56" tile>
                    <v-img src="@/assets/logo.png"></v-img>                
                    </v-avatar>
                    <v-text-field label="username"  v-model="username"></v-text-field>
                    <v-text-field label="password" type="password" v-model="password"></v-text-field>
                    <template>
                            <v-btn block class="base-inverted" @click="authenticate()" >LOGIN</v-btn>
                        
                    </template>
            </v-col>


        </v-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: null,
                password: null,
            }
        },
        methods: {
            authenticate() {
                alert("login successfull")
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>