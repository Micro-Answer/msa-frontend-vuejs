<template>
    <div class="q_block" @click="goToDetailView(question)">
        <div class="profile_box">
            <div class="profile_pic"></div>
            <div class="user_nickname">
                <p>{{ question?.userId }}</p>
            </div>
        </div>
        <div class="content_box">
            <p class="title">{{ question?.title }}</p>
            <p class="time">{{ formattedDate }}</p>
            <p class="body">{{ question?.content }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import "../assets/css/QuestionViewComponent.css";
import useQuestionView from "@/assets/ts/QuestionViewComponent";
import { Question } from "@/api/Question";

export default defineComponent({
    name: "QuestionViewComponent",
    props: {
        question: {
            type: Object as PropType<Question>,
            required: true
        }
    },
    setup(props) {
        const { goToDetailView, formattedDate } = useQuestionView(props);
        return { goToDetailView, formattedDate };
    },
})
</script>