import { useRouter } from "vue-router";
import {ref, onMounted} from "vue";
import axios from "axios";

export default function useQnAPage() {
    const router = useRouter();
    const questions = ref([]);

    const category = ref("");
    const offset = ref(0);
    const limit = ref(12);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get("v1/api/rag/questions/titles", {
                params: {category: category.value, offset: offset.value, limit: limit.value}
            });
            questions.value = response.data;
        }catch(error) {
            console.error("질문을 불러올 수 없습니다.", error);
        }
    }

    const goToWriteQuestion = () => {
        router.push("/qna/write");
    }

    onMounted(fetchQuestions)

    return {questions, goToWriteQuestion};
}