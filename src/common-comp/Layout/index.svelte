<script lang="ts">
    import Navbar from '../Navbar/index.svelte';
</script>
<style>
    .page {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .header {
        flex:0;
        display: block;
        background: blue;

    }
    .contentBody {
        flex:1;
        display: flex;
        flex-direction: column;
        background: red;
    }
</style>

<div class="page">
    <div class="header">
        <Navbar />
    </div>
    <div class="contentBody">
        Hello World
    </div>
</div>