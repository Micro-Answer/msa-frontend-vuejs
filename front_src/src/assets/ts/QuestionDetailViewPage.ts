import { useRouter } from "vue-router";

export default function useDetailPage() {
    const router = useRouter();

    const goToWriteQuestion = () => {
        router.push("/qna/write");
    }


    return {goToWriteQuestion};
}