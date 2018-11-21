<template>
    <v-card raised class="container">
        <v-card-title class='display-1' >Cadastre-se </v-card-title>    
        <v-form @submit="submitForm">
            <v-text-field label="Nome" v-model='name'/>
            <v-layout row wrap>
                <v-flex class="pswd" xs6>
                    <v-text-field  type='password' label="Senha" v-model='password'/>
                </v-flex>
                <v-flex xs6>
                    <v-text-field type='password' label="Confirmação de Senha" v-model='passwordConf'/> 
                </v-flex>
            </v-layout>
            <v-text-field v-model="birthday" slot="activator" label="Data de nascimento" prepend-icon="event">
            </v-text-field>
            <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="menu"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <v-text-field
                slot="activator"
                v-model="formatedDate"
                label="Data de Nascimento"
                prepend-icon="event"
                readonly
                ></v-text-field>
                <v-date-picker v-model="date" no-title scrollable locale="pt-br"
                 hint="DD/MM/YYYY format">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
            </v-menu>
            <v-btn type='submit'> Enviar </v-btn>
        </v-form>
    </v-card>
</template>

<script>

import { User } from 'controllers'

export default {
    name: 'UserRegister',
    data(){
        return {
            name:'',
            password: '',
            passwordConf: '',
            birthday: '',
            date: '',
            formatedDate: '',
            menu: false
        }
    },
    watch : {
        date(newDate) {
            this.formatedDate = this.formatDate(newDate)
        }
    },
    methods :{
        submitForm: async function(e) {
            e.preventDefault()
            try {
                if(this.password == this.passwordConf){
                    console.log(this.name,this.password,this.date)
                    const user = await User.register(this.name,this.password,this.date)
                }
            }catch(error){
                console.log(error)
            }
        },
        formatDate: date => {
            const [ano,mes,dia] = date.split('-')
            this.formatedDate = date.toString()
            return `${dia}/${mes}/${ano}`
        }
    }    
}
</script>

<style scoped>

.pswd {
    padding-right: 20px;
}

</style>


