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
