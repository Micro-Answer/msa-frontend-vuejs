import { reactive, watch } from "vue";

export default function useHashtag(emit: (event: "updateHashtags", payload: string[]) => void) {
    const hashState = reactive({
        hashArr: [] as string[],
        hashtag: "",
    });

    const onKeyUpSpace = () => {
        let tag = hashState.hashtag.trim();
        
        if (tag) {
            tag = tag.replace(/^#/, "");

            if (!hashState.hashArr.includes(tag) && hashState.hashArr.length < 5) {
                hashState.hashArr.push(tag);
                hashState.hashtag = "";
            }
        }
    };

    const removeTag = (index: number) => {
        if (index >= 0 && index < hashState.hashArr.length) {
            hashState.hashArr.splice(index, 1);
        }
    };

    const onKeyUpBackspace = (e: KeyboardEvent) => {
        if (e.code === 'Backspace' && hashState.hashtag === '') {
            if (hashState.hashArr.length > 0) {
                hashState.hashArr.pop();
            }
        }
    };

    // 해시태그 배열이 변경될 때마다 부모에게 전달
    watch(() => hashState.hashArr, (newArr) => {
        emit("updateHashtags", newArr); // 해시태그 배열을 부모 컴포넌트로 전달
    }, { deep: true });

    return { hashState, onKeyUpSpace, removeTag, onKeyUpBackspace };
}
