import {ref} from "vue";

export default function writeQuestion() {
    const title = ref("");
    const content = ref("");
    const hashtags = ref<string[]>([]);

    const updateHashtags = (newHashtags: string[]) => {
        hashtags.value = newHashtags;
    }

    const submit = () => {
        alert(`Title: ${title.value}\nHashtags: ${hashtags.value.join(", ")}\nContent: ${content.value}`);
    }
    
    return {title, content, updateHashtags, submit};
}