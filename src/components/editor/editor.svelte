<script>
import { onMount } from "svelte";
import service from "/src/service.js";

let editor;
  
const toolbarOptions = [
    [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "ordered" }],
    [{ align: [] }],
    ["clean"]
];
  
onMount(async () => {
      const { default: Quill } = await import("quill");
  
    let quill = new Quill(editor, {
        modules: {
        toolbar: toolbarOptions
        },
        theme: "snow",
        placeholder: "Notes go here..."
    });

    quill.setContents(decoded.note);

    quill.on('text-change', function(delta, oldDelta, source) {
        if (source == 'api') {
        } else if (source == 'user') {
            data.note = quill.getContents();
            service.send({
                type : "plugin:url-context:UPDATE",
                data,
            });
        }
    });
});

</script>

<style lang="scss">
    @import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
    @import "editor";
</style>
 
<div class="editor-wrapper">
    <div bind:this={editor} />
</div>

