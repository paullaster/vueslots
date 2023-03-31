<template>
    <ul>
        <li :item="item">
            <slot>
                {{item.name}}
            </slot>
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

