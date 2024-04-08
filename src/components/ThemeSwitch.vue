<template>
    <select class="theme-select" v-model="theme">
        <option value="OS">跟随系统</option>
        <option value="light">亮色</option>
        <option value="dark">暗色</option>
    </select>
</template>
<script setup lang="ts">
import useTheme from '../hooks/useTheme'
const { theme } = useTheme()
</script>
<style scoped>
.theme-select {
    font-size: inherit;
    padding: 5px 20px;
    background: lightslategray;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;

}
</style>