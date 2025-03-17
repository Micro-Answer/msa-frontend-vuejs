import { useRouter } from "vue-router";

export default function useQnAPage() {
    const router = useRouter();

    const goToWriteQuestion = () => {
        router.push("/qna/write");
    }


    return {goToWriteQuestion};
}