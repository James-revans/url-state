<script>
import ReactComponent from "svelte-react";
import Excalidraw from "excalidraw";
import { onMount } from "svelte";
import service from "/src/service.js";
import debounce from "/src/util/debounce";
import "excalidraw/dist/excalidraw.min.css";

const data = {
    name : "",
    note : "",
};
let width = window.innerWidth;
let height = window.innerHeight;
const options = { zenModeEnabled : true, viewBackgroundColor : "white" };

$: ({
    decoded,
} = $service.context);

const onResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
};

onMount(() => {
    window.addEventListener("resize", onResize);
    data.note = decoded.note;
});

const onChange = debounce((elements, state) => {
    data.name = elements;
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
        initialData={decoded.name}
        onChange={onChange}
        options={options}
    />
</div>

