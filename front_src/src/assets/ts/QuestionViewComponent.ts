import { useRouter } from "vue-router";

export default function useQuestionView() {
    const router = useRouter();

    const goToDetailView = () => {
        router.push("qna/number");
    }

    return{goToDetailView};
}