import type { marked } from "marked";
import type { VNode } from "vue";
import { h } from "vue";
import type { RenderFunctions } from "./render-token";
import { render } from "./render-token";

type Token = marked.Token;

export function renderTokens(
  tokens: Token[],
  parser: Partial<RenderFunctions>
): VNode {
  return h(
    "div",
    tokens.map((token) => render(token, parser))
  );
}
