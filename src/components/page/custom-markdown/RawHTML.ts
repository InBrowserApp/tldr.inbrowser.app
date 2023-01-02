import { defineComponent } from "vue";
import DOMPurify from "dompurify";

//
//  v-html component
//  <v-html :html="HTML_STRING" />
//
export default defineComponent({
  name: "VHtml",
  props: {
    html: {
      type: String,
      required: true,
    },
  },
  directives: {
    swap: {
      mounted(el, binding) {
        // createContextualFragment allows script execution
        // why you would probably want to sanitize the html
        // e.g. using https://github.com/cure53/DOMPurify
        const safe = DOMPurify.sanitize(binding.value);

        const frag = document.createRange().createContextualFragment(safe);
        el.replaceWith(frag);
      },
    },
  },
  template: '<div v-swap="html"></div>',
});
