import { useRouter } from "vue-router";
import {ref, onMounted} from "vue";
import axios from "axios";
import {Question} from "@/api/Question"

export default function useQnAPage() {
    const router = useRouter();
    const questions = ref<Question[]>([]);

    const category = ref("IT");
    const offset = ref(0);
    const limit = ref(12);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get<Question[]>("/v1/api/rag/questions/titles", {
                params: {category: category.value, offset: offset.value, limit: limit.value}
            });

            console.log("백엔드 응답: ", response.data);
            questions.value = response.data.map((q:Question) => ({
                questionId: q.questionId,
                content: q.content,
                title: q.title,
                userId: q.userId,
                createdAt: q.createdAt
            }));
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