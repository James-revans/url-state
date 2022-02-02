<script>
import Editor from "../editor/editor.svelte";
import Draw from "../draw/draw.svelte";
import { onMount } from "svelte";
import { tab } from "/src/stores";

let currentView = "Type";

onMount(() => {
    tab.subscribe((val) => {
        currentView = val;
    });
});

const tabViews = {
    Type : Editor,
    Draw,
};
</script>

<svelte:component this={tabViews[currentView]}/>