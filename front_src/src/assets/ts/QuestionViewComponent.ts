import { computed } from "vue";
import { useRouter } from "vue-router";

export default function useQuestionView(props: {question: any}) {
    const router = useRouter();

    const goToDetailView = () => {
        router.push("qna/number");
    }


    const formattedDate = computed(() => {
        const date = new Date(props.question.createdAt);
        return date.toLocaleString("ko-KR", { dateStyle: "full", timeStyle: "short" });
    })

    return{goToDetailView, formattedDate};
}