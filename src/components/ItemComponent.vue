<template>
    <ul>
        <li>
            <slot></slot>
        </li>
    </ul>
</template>
<script>
export default {
    name: "ItemComponent",
    props: {
        item: Object
    }
}
</script>