import { ref, onMounted, onUnmounted } from "vue";
import { useMediaQuery } from "@vueuse/core";

export function isMobile() {
  const query = "(max-width: 500px)";
  const bool = useMediaQuery(query);
  return { bool };
}
