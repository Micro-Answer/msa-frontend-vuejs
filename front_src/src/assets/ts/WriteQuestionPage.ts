import {ref} from "vue";

export default function writeQuestion() {
    const title = ref("");
    const content = ref("");

    const submit = () => {
        alert(`Title: ${title.value}\nContent: ${content.value}`);
    }
    
    return {title, content, submit};
}