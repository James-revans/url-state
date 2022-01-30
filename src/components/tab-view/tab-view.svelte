<script>
import Editor from "../editor/editor.svelte";
import Draw from "../draw/draw.svelte";
import { onMount } from "svelte";
import { tabView } from "/src/stores";

let currentView = "Text";

onMount(() => {
    tabView.subscribe((value) => {
        currentView = value;
    });
});

const tabViews = {
    Type : Editor,
    Draw,
};
</script>

<svelte:component this={tabViews[currentView]}/>