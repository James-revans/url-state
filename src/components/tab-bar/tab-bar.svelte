<script>
import { tabView } from "/src/stores";
import { onMount } from "svelte";
   
export let tabs;
let currentView;

onMount(() => {
    tabView.subscribe((val) => {
        currentView = val;
    });
});
</script>

<style lang="scss">
    @import "tab-bar";
</style>

<div class="tab-bar">
    {#each tabs as tab}
    <button on:click={() => tabView.set(tab)} class:active={currentView === tab}>
        {tab}
    </button>
    {/each}
</div>

