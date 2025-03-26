import {ref} from "vue";

export default function writeQuestion() {
    const title = ref("");
    const content = ref("");
    const hashtags = ref<string[]>([]);

    const updateHashtags = (newHashtags: string[]) => {
        hashtags.value = newHashtags;
    }

    

    const submit = async () => {
        const apiUrl = "/v1/api/rag/questions"
        if(title.value.length < 5 || title.value.length > 100) {
            alert("제목을 5글자 이상, 100글자 이하로 작성해주세요.");
            return;
        }
        if(content.value.length < 10 || content.value.length > 5000) {
            alert("내용을 10글자 이상, 5000글자 이하로 작성해주세요.");
            return;
        }
        if(hashtags.value.length == 0) {
            alert("해시태그를 작성해주세요.");
            return;
        }

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    // ToDo: userId 받아오는 로직 추가해야 함함
                    userId: "test",
                    title: title.value,
                    category: hashtags.value,
                    content: content.value
                }),
            });
            
            if(!response.ok) {
                throw new Error("질문 작성을 실패하였습니다.\n질문 내용을 다시 확인해주세요.")
            }

            alert("질문 작성이 완료되었습니다!");
        }
        catch (error) {
            console.error(error);
            alert("질문 작성 중 오류가 발생했습니다.");
        }
    }
    
    return {title, content, updateHashtags, submit};
}