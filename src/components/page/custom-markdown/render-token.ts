import type { marked } from "marked";
import type { VNode } from "vue";
import { h } from "vue";
import { unescape } from "html-escaper";
import DefaultRenderer from "./DefaultRenderer.vue";

type Token = marked.Token;

type renderFunction = (token: Token) => RenderResult;

type RenderResult = VNode | string;

export interface RenderFunctions {
  space: (token: marked.Tokens.Space, render: renderFunction) => RenderResult;
  code: (token: marked.Tokens.Code, render: renderFunction) => RenderResult;
  heading: (
    token: marked.Tokens.Heading,
    render: renderFunction
  ) => RenderResult;
  table: (token: marked.Tokens.Table, render: renderFunction) => RenderResult;
  hr: (token: marked.Tokens.Hr, render: renderFunction) => RenderResult;
  blockquote: (
    token: marked.Tokens.Blockquote,
    render: renderFunction
  ) => RenderResult;
  list: (token: marked.Tokens.List, render: renderFunction) => RenderResult;
  list_item: (
    token: marked.Tokens.ListItem,
    render: renderFunction
  ) => RenderResult;
  paragraph: (
    token: marked.Tokens.Paragraph,
    render: renderFunction
  ) => RenderResult;
  html: (token: marked.Tokens.HTML, render: renderFunction) => RenderResult;
  text: (token: marked.Tokens.Text, render: renderFunction) => RenderResult;
  def: (token: marked.Tokens.Def, render: renderFunction) => RenderResult;
  escape: (token: marked.Tokens.Escape, render: renderFunction) => RenderResult;
  tag: (token: marked.Tokens.Tag, render: renderFunction) => RenderResult;
  link: (token: marked.Tokens.Link, render: renderFunction) => RenderResult;
  image: (token: marked.Tokens.Image, render: renderFunction) => RenderResult;
  strong: (token: marked.Tokens.Strong, render: renderFunction) => RenderResult;
  em: (token: marked.Tokens.Em, render: renderFunction) => RenderResult;
  codespan: (
    token: marked.Tokens.Codespan,
    render: renderFunction
  ) => RenderResult;
  br: (token: marked.Tokens.Br, render: renderFunction) => RenderResult;
  del: (token: marked.Tokens.Del, render: renderFunction) => RenderResult;
  generic: (
    token: marked.Tokens.Generic,
    render: renderFunction
  ) => RenderResult;
}

const defaultRenderFunction: renderFunction = (token) =>
  h(DefaultRenderer, {
    token,
  });

const defaultRenderFunctions: RenderFunctions = {
  // https://github.com/markedjs/marked/blob/master/src/Renderer.js
  space: (token) => token.raw,
  code: (token) => h("pre", h("code", token.text)),
  heading: (token, render) =>
    h(`h${token.depth}`, () => token.tokens.map(render)),
  table: (token) => h("table", token.raw), // TODO
  hr: () => h("hr"),
  blockquote: (token, render) =>
    h("blockquote", () => token.tokens.map(render)),
  list: (token, render) => {
    const tag = token.ordered ? "ol" : "ul";
    return h(tag, () => token.items.map(render)); // TODO
  },
  list_item: (token, render) => h("li", () => token.tokens.map(render)),
  paragraph: (token, render) => h("p", () => token.tokens.map(render)),
  html: (token) =>
    h("div", {
      "v-html": token.raw,
    }),
  text: (token) => unescape(token.text),
  def: (token) => h("div", token.raw), // TODO
  escape: (token) => unescape(token.text),
  tag: (token) => unescape(token.text),
  link: (token, render) =>
    h(
      "a",
      {
        href: token.href,
        title: token.title,
      },
      () => token.tokens.map(render)
    ),
  image: (token) =>
    h("img", {
      src: token.href,
      alt: token.text,
      title: token.title,
    }),
  strong: (token, render) => h("strong", () => token.tokens.map(render)),
  em: (token, render) => h("em", () => token.tokens.map(render)),
  codespan: (token) => h("code", token.text),
  br: () => h("br"),
  del: (token, render) => h("del", () => token.tokens.map(render)),
  generic: (token, render) =>
    h("div", () => (token?.tokens ? token.tokens.map(render) : token.raw)),
};

export function render(
  token: marked.Token,
  parser_: Partial<RenderFunctions>
): RenderResult {
  const render_ = (token: marked.Token) => render(token, parser);
  const parser = {
    ...defaultRenderFunctions,
    ...parser_,
  };

  switch (token.type) {
    case "space":
      return parser.space(token, render_);
    case "code":
      return parser.code(token, render_);
    case "heading":
      return parser.heading(token, render_);
    case "table":
      return parser.table(token, render_);
    case "hr":
      return parser.hr(token, render_);
    case "blockquote":
      return parser.blockquote(token, render_);
    case "list":
      return parser.list(token, render_);
    case "list_item":
      return parser.list_item(token, render_);
    case "paragraph":
      return parser.paragraph(token, render_);
    case "html":
      return parser.html(token as marked.Tokens.HTML, render_);
    case "text":
      return parser.text(token as marked.Tokens.Text, render_);
    case "def":
      return parser.def(token, render_);
    case "escape":
      return parser.escape(token, render_);
    case "link":
      return parser.link(token, render_);
    case "image":
      return parser.image(token, render_);
    case "strong":
      return parser.strong(token, render_);
    case "em":
      return parser.em(token, render_);
    case "codespan":
      return parser.codespan(token, render_);
    case "br":
      return parser.br(token, render_);
    case "del":
      return parser.del(token, render_);
    default:
      return parser.generic(token, render_);
  }
}
