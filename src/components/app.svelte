<script>
    import URLShareBar from "./url/url.svelte";
    import TabBar from "./tab-bar/tab-bar.svelte";
    import TabView from "./tab-view/tab-view.svelte";
</script>

<style>
    .app {
        display: flex;
        justify-content: center;
        background: rgb(28, 28, 28);
    }

    .content {
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }
</style>

<div class="app">
    <div class="content">
        <URLShareBar />
        <TabBar tabs={[ "Type", "Draw" ]}/>
        <TabView />
    </div>
</div>
