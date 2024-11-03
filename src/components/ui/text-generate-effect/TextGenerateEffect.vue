<template>
        <button class="text-white ml-2" @click="skip">→</button>
        <div :class="cn('leading-snug tracking-wide', props.class)">
                <div ref="scope">
                        <span v-for="(word, idx) in wordsArray" :key="word + idx" :style="spanStyle">
                                <template v-if="word === '<br-token>'">
                                        <br />
                                </template>
                                <template v-else>
                                        {{ word }}&nbsp;
                                </template>
                        </span>
                </div>
        </div>
</template>

<script setup lang="ts">
import { computed, type HTMLAttributes, onMounted, watch, ref } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
        defineProps<{
                words: string;
                filter?: boolean;
                duration?: number;
                class: HTMLAttributes["class"];
        }>(),
        { duration: 0.7, filter: true },
);

const scope = ref(null);
const wordsArray = computed(() => props.words.replace(/\n/g, " <br-token> ").split(" "));
const speed = ref(200);

const spanStyle = computed(() => ({
        opacity: 0,
        filter: props.filter ? "blur(10px)" : "none",
        transition: `opacity ${props.duration}s, filter ${props.duration}s`,
}));

const skip = () => {
        speed.value = 4;
}

const effect = () => {
        if (scope.value) {
                const spans = (scope.value as HTMLElement).querySelectorAll("span");
                spans.forEach((span: HTMLElement, index: number) => {
                        setTimeout(() => {
                                span.style.opacity = "1";
                                span.style.filter = props.filter ? "blur(0px)" : "none";
                        }, index * speed.value);
                });
        }
}

watch(speed, () => {
        effect()
})

onMounted(() => {
        effect()
});
</script>
