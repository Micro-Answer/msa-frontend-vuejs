import { computed } from "vue";
import { useRouter } from "vue-router";
import {Question} from "@/api/Question"

export default function useQuestionView(props: {question: any}) {
    const router = useRouter();

    const goToDetailView = (question: Question) => {
        if (!question) {
            alert("선택된 질문이 없습니다.");
            return;
        }
        alert(`유저 아이디: ${question.userId}\n제목: ${question.title}\n작성 날짜: ${question.createdAt}\n내용: ${question.content}`);
        router.push("/qna/number");
    };


    const formattedDate = computed(() => {
        const { createdAt } = props.question;
    
        // createdAt이 존재하지 않거나 유효하지 않으면 기본값 반환
        if (!createdAt) {
            return "날짜 정보가 없습니다.";
        }
    
        const date = new Date(createdAt);
    
        // 유효한 날짜인지 확인
        if (isNaN(date.getTime())) {
            return "잘못된 날짜입니다.";
        }
    
        // 날짜를 원하는 포맷으로 직접 처리
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');  // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        // 오전/오후 계산
        const ampm = hours >= 12 ? "오후" : "오전";
        const hourIn12HourFormat = hours > 12 ? hours - 12 : hours;
        const formattedHour = String(hourIn12HourFormat).padStart(2, '0');
    
        return `${year}.${month}.${day}. ${ampm} ${formattedHour}:${minutes}`;
    });
    

    return{goToDetailView, formattedDate};
}