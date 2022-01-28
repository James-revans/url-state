<script>
import service from "/src/service.js";
$: url = window.location.href;
let showCopied;


const handleCopyURL = () => {
    navigator.clipboard.writeText(window.location.href);
    showCopied = true;

    setTimeout(() => {
        showCopied = false;
    }, 2000);
};

</script>

<style lang="scss">
@import "url";
</style>

<div class="url-share-bar">
    <p class="">{url}</p>
    <button
        class="button"
        on:click="{handleCopyURL}"
    >
        Copy
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">    
            <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/>
        </svg>
    </button>
</div>

<div class="copied text-dark" class:show="{showCopied}">Copied to clipboard!</div>
