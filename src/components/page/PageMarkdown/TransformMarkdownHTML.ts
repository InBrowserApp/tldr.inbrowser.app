// <code>tar cf {{target.tar}} {{file1}}</code>
// transform to
// <code>tar cf <span class="code-placeholder">target.tar</span> <span class="code-placeholder"></span></code>
export function handlePlaceholder(html: string) {
  const placeholder = html.match(/{{.*?}}/g);
  if (placeholder) {
    placeholder.forEach((item) => {
      const placeholderName = item.replace(/{{|}}/g, "");
      html = html.replace(
        item,
        `<span class="code-placeholder">${placeholderName}</span>`
      );
    });
  }
  return html;
}

// <li>[c]reate an archive and write it to a [f]ile:</li>
// transform to
// <li><span class="mnemonics">c</span>reate an archive and write it to a <span class="mnemonics">f</span>ile:</li>
export function handleMnemonics(html: string) {
  const mnemonics = html.match(/\[[a-z]\]/g);
  if (mnemonics) {
    mnemonics.forEach((item) => {
      const mnemonic = item.replace(/\[|\]/g, "");
      html = html.replace(item, `<span class="mnemonics">${mnemonic}</span>`);
    });
  }
  return html;
}

export function handleHighlight(html: string) {
  let newHtml = handlePlaceholder(html);
  newHtml = handleMnemonics(newHtml);
  return newHtml;
}
