<template>
    
</template>
<script>
import ButtonComponent from './ButtonCompoent.vue';
export default {
    name: 'Item',
    components: {
        ButtonComponent
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
