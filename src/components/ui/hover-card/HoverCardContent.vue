<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  HoverCardContent,
  type HoverCardContentProps,
  HoverCardPortal,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<HoverCardContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="forwardedProps"
      :class="
        cn(
          'darkz-50 darkw-64 darkrounded-md darkborder darkbg-popover darkp-4 darktext-popover-foreground darkshadow-md darkoutline-none data-[state=open]:darkanimate-in data-[state=closed]:darkanimate-out data-[state=closed]:darkfade-out-0 data-[state=open]:darkfade-in-0 data-[state=closed]:darkzoom-out-95 data-[state=open]:darkzoom-in-95 data-[side=bottom]:darkslide-in-from-top-2 data-[side=left]:darkslide-in-from-right-2 data-[side=right]:darkslide-in-from-left-2 data-[side=top]:darkslide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
