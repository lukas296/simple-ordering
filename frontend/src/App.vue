<script setup lang="ts">
</script>

<template>
    <div id="app">
        <header>
            <div class="header-content">
                <h1>Simple Ordering</h1>
                <nav>
                    <router-link to="/orders">Orders</router-link>
                    |
                    <router-link to="/create">Create Order</router-link>
                </nav>
            </div>
        </header>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style>
header {
    border-bottom: 1px solid #ddd;
}

.header-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

#app {
    font-family: Helvetica, Arial, sans-serif;
}
</style>
