import { ref } from "vue";
// import { useIntervalFn } from "@vueuse/core";

const placeholders = [
  "cat",
  "tldr",
  "tar",
  "git",
  "sed",
  "man",
  "jq",
  "which",
  "sudo",
  "ssh",
  "curl",
  "wget",
  "cd",
  "ls",
  "mkdir",
  "cp",
  "mv",
  "ln",
  "rm",
  "chmod",
  "chown",
  "diff",
  "tail",
  "dig",
  "kill",
  "ps",
  "fg",
  "git add",
  "git commit",
  "git push",
  "git pull",
];

export function useRandomPlaceholder() {
  const placeholder = ref(
    placeholders[Math.floor(Math.random() * placeholders.length)]
  );

  // const updatePlaceholder = () => {
  //   const index = Math.floor(Math.random() * placeholders.length);
  //   placeholder.value = placeholders[index];
  // };

  // useIntervalFn(updatePlaceholder, 1500);

  return { placeholder };
}
