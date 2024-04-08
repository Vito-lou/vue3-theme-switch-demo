import { ref, watchEffect } from "vue";
type Theme = "light" | "dark" | "OS";
const LOCAL_KEY = "__theme__";
const theme = ref<Theme>((localStorage.getItem(LOCAL_KEY) as Theme) || "light");

//https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
const match = matchMedia("(prefers-color-scheme: dark)");

function followOS() {
  if (match.matches) {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    //The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
  }
}
watchEffect(() => {
  localStorage.setItem(LOCAL_KEY, theme.value);
  if (theme.value === "OS") {
    followOS();
    match.addEventListener("change", followOS);
  } else {
    document.documentElement.dataset.theme = theme.value;
    match.removeEventListener("change", followOS);
  }
});

export default function useTheme() {
  return {
    theme,
  };
}
