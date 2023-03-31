<template>
    <ItemComponent v-for="item in Items" >
        <template >
           <span> {{ item.name }}</span><br>
        </template>
    </ItemComponent>
</template>
<script>
import ButtonComponent from './ButtonCompoent.vue';
import ItemComponent from './ItemComponent.vue';
export default {
    name: 'Item',
    components: {
        ButtonComponent,
        ItemComponent
    },
    data() {
        return {
            Items: [
                {
                    id: 1,
                    name: 'Item 1',
                    price: 100,
                    image: 'https://via.placeholder.com/150x150'
                },
                {
                    id: 2,
                    name: 'Item 2',
                    price: 100,
                    image: 'https://via.placeholder.com/150x150'
                },
                {
                    id: 3,
                    name: 'Item 3',
                    price: 100,
                    image: 'https://via.placeholder.com/150x150'
                },
                {
                    id: 4,
                    name: 'Item 4',
                    price: 100,
                    image: 'https://via.placeholder.com/150x150'
                },
                
            ]
        }
    }
}
</script>
