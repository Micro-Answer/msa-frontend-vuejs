<template>
    <div class="q_block" @click="goToDetailView">
        <div class="profile_box">
            <div class="profile_pic"></div>
            <div class="user_nickname">
                <p>{{ question.nickname }}</p>
            </div>
        </div>
        <div class="content_box">
            <p class="title">{{ question.title }}</p>
            <p class="time">{{ formattedDate }}</p>
            <p class="body">{{ question.body }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import "../assets/css/QuestionViewComponent.css";
import useQuestionView from "@/assets/ts/QuestionViewComponent";

export default defineComponent({
    name: "QuestionViewComponent",
    props: {
        question: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        return useQuestionView(props);
    }
})
</script>