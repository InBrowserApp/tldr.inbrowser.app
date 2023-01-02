import type { RenderFunctions } from "../custom-markdown/render-token";
import {
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NDivider,
  NP,
  NOl,
  NUl,
  NLi,
  NText,
  NBlockquote,
  NA,
} from "naive-ui";
import { h } from "vue";
import { unescape } from "html-escaper";
import MarkdownCode from "./MarkdownCode.vue";

export const parser: Partial<RenderFunctions> = {
  code: (token) =>
    h(MarkdownCode, { code: unescape(token.text), language: token.lang }),
  hr: () => h(NDivider),
  paragraph: (token, render) => h(NP, () => token.tokens.map(render)),
  blockquote: (token, render) => h(NBlockquote, () => token.tokens.map(render)),
  del: (token, render) =>
    h(NText, { delete: true }, () => token.tokens.map(render)),
  em: (token, render) =>
    h(NText, { italic: true }, () => token.tokens.map(render)),
  strong: (token, render) =>
    h(
      NText,
      {
        strong: true,
      },
      () => token.tokens.map(render)
    ),
  list: (token, render) => {
    const ListComponent = token.ordered ? NOl : NUl;
    const startAttr =
      token.ordered && token.start !== 1 ? { start: token.start } : {};
    return h(ListComponent, startAttr, () => token.items.map(render));
  },
  list_item: (token, render) => h(NLi, () => token.tokens.map(render)),
  heading: (token, render) => {
    const props = {
      prefix: "bar",
      "align-text": true,
    };
    switch (token.depth) {
      case 1:
        return h(NH1, props, () => token.tokens.map(render));
      case 2:
        return h(NH2, props, () => token.tokens.map(render));
      case 3:
        return h(NH3, props, () => token.tokens.map(render));
      case 4:
        return h(NH4, props, () => token.tokens.map(render));
      case 5:
        return h(NH5, props, () => token.tokens.map(render));
      case 6:
        return h(NH6, props, () => token.tokens.map(render));
      default:
        return h(NH6, props, () => token.tokens.map(render));
    }
  },
  codespan: (token) => h(NText, { code: true }, () => unescape(token.text)),
  link: (token, render) =>
    h(NA, { href: token.href }, () => token.tokens.map(render)),
};
