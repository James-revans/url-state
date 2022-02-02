<script>
import { tab } from "/src/stores";
import { onMount } from "svelte";
import service from "/src/service.js";

$: ({
    decoded,
} = $service.context);
   
export let tabs;
let currentView;

onMount(() => {
    if(decoded.tab) {
        tab.set(decoded.tab);
    }

    tab.subscribe((val) => {
        currentView = val;
        const data = {
            ...decoded,
            tab  : val,
        };

        service.send({
            type : "plugin:url-context:UPDATE",
            data,
        });
    });
});
</script>

<style lang="scss">
    @import "tab-bar";
</style>

<div class="tab-bar">
    {#each tabs as tabView}
    <button on:click={() => tab.set(tabView)} class:active={currentView === tabView}>
        {tabView}
    </button>
    {/each}
</div>

