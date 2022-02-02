<script>
import ReactComponent from "svelte-react";
import Excalidraw from "excalidraw";
import { onMount } from "svelte";
import service from "/src/service.js";
import debounce from "/src/util/debounce";
import "excalidraw/dist/excalidraw.min.css";

$: ({
    decoded,
} = $service.context);

const options = { zenModeEnabled : true, viewBackgroundColor : "white" };

let width = window.innerWidth;
let height = window.innerHeight;

const onResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
};

onMount(() => {
    window.addEventListener("resize", onResize);
});

const onChange = debounce((elements, state) => {
    const data = {
        ...decoded,
        draw : elements,
    };

    service.send({
        type : "plugin:url-context:UPDATE",
        data,
    });
}, 200);
</script>

<style type="scss">
    @import "draw";
</style>

<div class="draw">
    <ReactComponent 
        this={Excalidraw}
        width={width}
        height={height}
        initialData={decoded.draw}
        onChange={onChange}
        options={options}
    />
</div>

