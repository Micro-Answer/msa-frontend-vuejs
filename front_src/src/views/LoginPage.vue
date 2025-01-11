<template>
    <div class="login-wrapper">
      <h2>Login</h2>
      <form id="login-form">
        <input type="text" name="userId" placeholder="아이디">
        <input type="password" name="userPassword" placeholder="비밀번호">
        <input type="submit" value="로그인">
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import "../assets/css/LoginPage.css";
  
  export default defineComponent({
    name: "LoginPage",
  });
  </script>
  