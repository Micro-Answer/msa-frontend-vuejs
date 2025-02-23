import {ref, computed} from "vue";

export default function userSignUp() {
    const userId = ref("");
    const pw = ref("");
    const pwCheck = ref("");
    const role = ref("");

    const isValidUserId = computed(() => {
        const hasNumber = /\d/.test(userId.value);
        const isValidFormat = /^[A-Za-z0-9]+$/.test(userId.value);
        return userId.value.length >= 4 && userId.value.length <= 12 && hasNumber && isValidFormat;
    })

    const userIdMessage = computed(() => {
        if(userId.value.length == 0){
            return "4~12글자의 영문 소문자와 숫자를 모두 포함한 아이디를 입력해주세요";
        }
        return isValidUserId.value ? "사용 가능한 아이디입니다" : "아이디는 4~12자의 영문과 숫자로 입력해주세요"; 
    })

    const isValidPassword = computed(() => {
        const hasNumber = /\d/.test(pw.value);
        const hasSpecial = /[@$!%*#?&]/.test(pw.value);
        const isValidFormat = /^[A-Za-z0-9@$!%*#?&]+$/.test(pw.value);
        return pw.value.length >= 8 && pw.value.length <= 20 && hasNumber && hasSpecial && isValidFormat;
    })

    const userPwMessage = computed(() => {
        if(pw.value.length == 0){
            return "8~20글자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요";
        }
        return isValidPassword.value ? "사용 가능한 비밀번호입니다" : "비밀번호를 올바르게 설정해주세요";
    })

    const pwCheckCorrect = computed(() => {
        return pw.value == pwCheck.value;
    })

    const pwCheckMessage = computed(() => {
        return pwCheckCorrect.value ? "" : "비밀번호를 동일하게 입력해주세요." 
    })

    const signUp = async () => {
        if(!isValidUserId.value) {
            alert("아이디를 올바르게 입력해주세요.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8081/api/v1/general/sign-up", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: userId.value,  // ✅ this.userId → userId.value
                pw: pw.value,  // ✅ this.pw → pw.value
                role: role.value,  // ✅ this.selectRole → role.value
              }),
            });
      
            if (!response.ok) {
                throw new Error("Sign up failed");
            }
      
            alert("Sign up successful");
        }
        catch (error) {
            console.error(error);
            alert("Error signing up");
        }
    };

    return {
        userId,
        pw,
        pwCheck,
        role,
        isValidUserId,
        userIdMessage,
        isValidPassword,
        userPwMessage,
        pwCheckCorrect,
        pwCheckMessage,
        signUp,
    };
}