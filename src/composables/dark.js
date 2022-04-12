import { useRoute } from "vue-router";
import { computed } from "vue";
import { usePreferredDark } from "@vueuse/core";

export function useDark() {
  const route = useRoute()
  if (route.query.dark) return computed(() => route.query.dark === "true")

  return usePreferredDark()
}
