<template>
    <div class="signup-wrapper">
      <h2>Sign Up</h2>
      <form id="signup-form">
        <input type="text" name="userId" placeholder="아이디">
        <input type="password" name="userPassword" placeholder="비밀번호">
        <select v-model="selectRole">
          <option value="general">General</option>
          <option value="expert">Expert</option>
        </select>
        <input type="submit" value="회원가입">
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import "../assets/css/SignUpPage.css";
  
  export default defineComponent({
    name: "SignUpPage",
    setup() {
      const selectRole = ref('general');
      return{
        selectRole
      };
    }
  });

  </script>
  