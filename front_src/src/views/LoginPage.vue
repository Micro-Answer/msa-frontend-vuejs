<template>
    <div class="login-wrapper">
      <h2>로그인</h2>
      <form id="login-form" @submit.prevent="login">
        <input v-model="userId" type="text" name="userId" placeholder="아이디">
        <input v-model="pw" type="password" name="userPassword" placeholder="비밀번호">
        <input type="submit" value="로그인">
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import "../assets/css/LoginPage.css";
  
  export default defineComponent({
    name: "LoginPage",
    data() {
        return{
          userId: '',
          pw: '',
        };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost:8080/api/v1/user/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId: this.userId, pw: this.pw}),
          });
          if(!response.ok) {
            throw new Error('login failed');
          }
          alert('login successful');
        } catch(error){
          console.error(error);
          alert('Error login')
        }
      }
    },
  });
  </script>
  