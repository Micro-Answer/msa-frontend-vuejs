<template>
    <div class="signup-wrapper">
      <h2>Sign Up</h2>
      <form id="signup-form" @submit.prevent="signUp">
        <input v-model="userId" type="text" name="userId" placeholder="아이디">
        <input v-model="pw" type="password" name="userPassword" placeholder="비밀번호">
        <select v-model="selectRole">
          <option value="general">General</option>
          <option value="expert">Expert</option>
        </select>
        <input type="submit" value="회원가입">
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import apiClient from "@/api/API";
  import { defineComponent, ref } from "vue";
  import "../assets/css/SignUpPage.css";
  
  // 프론트는 8080, 백엔드는 8081 포트 사용하여 코드 작성
  // 백엔드에 @CrossOrigin(origins = "http://localhost:8080") 추가로 작성하여 CORS 에러 방지
  export default defineComponent({
    name: "SignUpPage",
    data() {
      return{
        userId: '',
        pw: '',
        role: '',
      };
    },
    methods: {
      async signUp() {
        try {
          const response = await fetch('http://localhost:8081/api/v1/general/sign-up', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({userId: this.userId, pw: this.pw, role: this.selectRole}),
          });
          if(!response.ok) {
            throw new Error('Sign up failed');
          }
          alert('Sign up successful');
        } catch(error){
          console.error(error);
          alert('Error signing up')
        }
      }
    },
    setup() {
      const selectRole = ref('general');
      return{
        selectRole
      };
    }
  });

  </script>
  