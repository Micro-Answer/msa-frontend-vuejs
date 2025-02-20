<template>
    <div class="signup-wrapper">
      <h2>회원가입</h2>
      <form id="signup-form" @submit.prevent="signUp">
        <div class="id_div">
          <input v-model="userId" class="id_input" type="text" name="userId" placeholder="아이디">
          <input type="submit" class="check_id" value="중복 확인">
        </div>
        <span class="id_desc" :class="{valid: isValidUserId, invalid: !isValidUserId && userId.length > 0}">{{ userIdMessage }}</span>
        <input v-model="pw" class="password_input" type="password" name="userPassword" placeholder="비밀번호">
        <span class="pw_desc">8~20글자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요</span>
        <select v-model="role">
          <option value="general">일반 회원</option>
          <option value="expert">전문가</option>
        </select>
        <input type="submit" value="회원가입">
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import apiClient from "@/api/API";
  import { defineComponent, ref } from "vue";
  import "../assets/css/SignUpPage.css";
  import "../assets/ts/SignUpPage.ts";
import userSignUp from "../assets/ts/SignUpPage";
  
  // 프론트는 8080, 백엔드는 8081 포트 사용하여 코드 작성
  // 백엔드에 @CrossOrigin(origins = "http://localhost:8080") 추가로 작성하여 CORS 에러 방지
  export default defineComponent({
    name: "SignUpPage",
    setup() {
      const { userId, pw, role, isValidUserId, userIdMessage, signUp } = userSignUp();
      return { userId, pw, role, isValidUserId, userIdMessage, signUp};
    }
  });

  </script>
  