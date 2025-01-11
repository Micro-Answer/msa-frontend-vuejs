<template>
    <div id="Header">
        <div class="logo">
            <router-link to="/">Logo</router-link>
        </div>
        <div class="top_util">
            <ul class="menu_list">
                <li class="join">
                    <router-link to="/signup">회원가입</router-link>
                </li>
                <li class="login">
                    <router-link to="/login">로그인</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/AppHeader.css";
import { RouterLink } from "vue-router";

export default defineComponent({
    name: "AppHeader",
});
</script>