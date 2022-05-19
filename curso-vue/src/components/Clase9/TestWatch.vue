<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: "",
            answer: "Questions usually contain a question mark. ;-)",
        };
    },
    watch: {
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf("?") > -1) {
                this.getAnswer();
            }
        },
    },
    methods: {
        async getAnswer() {
            this.answer = "Thinking...";
            try {
                const res = await fetch("https://yesno.wtf/api");
                this.answer = (await res.json()).answer;
            } catch (error) {
                this.answer = "Error! Could not reach the API. " + error;
            }
        },
    },
};
</script>

<style>
</style>
