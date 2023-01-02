import { marked } from "marked";
import type { VNode, PropType } from "vue";
import { defineComponent } from "vue";
import { renderTokens } from "./render-tokens";
import type { RenderFunctions } from "./render-token";

type Token = marked.Token;

export function renderMarkdown(
  markdown: string,
  parser?: Partial<RenderFunctions>
): VNode {
  const tokens = marked.lexer(markdown);
  console.log(JSON.stringify(tokens));
  const tokensArray: Token[] = [...tokens];

  return renderTokens(tokensArray, parser ?? {});
}

export default defineComponent({
  props: {
    markdown: { type: String, required: true },
    parser: {
      type: Object as PropType<Partial<RenderFunctions>>,
      required: false,
    },
  },
  setup(props) {
    return () => renderMarkdown(props.markdown, props.parser);
  },
});
