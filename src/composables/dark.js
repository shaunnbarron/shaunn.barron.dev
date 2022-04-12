import { useRoute } from "vue-router";
import { computed } from "vue";

export function useDark() {
  const route = useRoute()
  return computed(() => route.query.dark === "true")
}
