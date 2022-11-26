<template>
    <div id="product-list">
        <div class="col-sm-12 product-list-all">
            <div id="filters">
                <div class="sidebar">
                    <section class="section size">
                        <div class="wrapper">
                            <!-- Loop for sizes -->
                            <a href="#" v-for ="size in sizes" class="size-cel" :class="{selected:isActive(size)}" @click.prevent = "setActive(size)">
                                {{size}}
                            </a>
                        </div>
                    </section>
                </div>
            </div>
            <div id='product-list-wrapper'>
                <div class="col-sm-12">
                    <div class="grid-list">
                        <div class="col-sm-12">
                            <section v-for ="product in filteredItems">
                                <div class="grid-item">
                                    <div class="grid-image">
                                        <img :src='product.image' :alt="product.name">
                                    </div>
                                    <div class="grid-item-color">
                                        <div class="header">
                                            <span v-if='product.color.length == 1'> {{product.color.length }} Color</span>
                                            <span v-else-if='product.color.length > 1'> {{product.color.length }} Colors</span>
                                            <span v-else > No color</span>
                                            - {{product.color }}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                shopbymenu: true,
                productItemsNumbers: 19,
                filtertoApply:['size'],
                filtersAppied: [],
                colors: ['red','blue','black', 'white', 'gold'],
                materials:['leather','recycled cork','microfiber','mesh','wool','canvas','knit','Rubber'],
                sizes:[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 12.5, 13, 14],
                colorsActive: [],
                sizesActive: [],
                filteredItems2:[],

                products:[
                    {
                        id: 1,
                        name: 'Shoes Male Only Pair',
                        price: 5,
                        gender: ['male'],
                        description: 'Bold & solid.',
                        category: 'shoes',
                        tag: '',
                        image: 'http://via.placeholder.com/350x350',
                        size: [7,7.5, 8],
                        color:['red','blue','black']
                    },
                    {
                        id: 2,
                        name: 'Footbed Thin',
                        price: 1,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [7,7.5, 8],
                        color:['blue']
                    },
                    {
                        id: 3,
                        name: 'The Square 3434Pair',
                        price: 99,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [7,7.5, 8],
                        color:['blue', 'red']
                    },
                    {
                        id: 4,
                        name: 'The Square 3434Pair',
                        price: 99,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [14],
                        color:['blue']
                    },
                    {
                        id: 5,
                        name: 'No color ',
                        price: 999,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [14],
                        color:[ ]
                    },
                    {
                        id: 6,
                        name: 'The Square 3434Pair',
                        price: 1,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [10],
                        color:['blue']
                    },
                    {
                        id: 7,
                        name: 'The Square 3434Pair',
                        price: 1,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [10],
                        color:['blue']
                    },
                    {
                        id: 8,
                        name: 'The Square 3434Pair',
                        price: 1,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [10],
                        color:['red']
                    },
                    {
                        id: 9,
                        name: 'The Square 3434Pair',
                        price: 1,
                        gender: ['male','female'],
                        description: 'Bold & solid.fdff',
                        category: 'footbed',
                        tag: 'dddddd',
                        image: 'http://via.placeholder.com/350x350',
                        size: [10],
                        color:['blue']
                    }
                ],
            }
        },
        computed: {
            filteredItems() {
                return this.products.filter( product => {
                    return this.filtersAppied.every( filterAppied => {
                        if (product.color.includes(filterAppied)) {
                            return product.color.includes(filterAppied);
                        }
                        if (product.size.includes(filterAppied)) {
                            return product.size.includes(filterAppied);
                        }
                    });
                });
            },
        },

        methods:{
            setActive (element){
                if(this.filtersAppied.indexOf(element) > -1){
                    this.filtersAppied.pop(element)
                } else{
                    this.filtersAppied.push(element)
                }
            },
            isActive: function (menuItem) {
                return this.filtersAppied.indexOf(menuItem) > -1
            },

        }
    }
</script>

<style lang="scss">
    .wrapper {
        a {
            margin-right: 10px;   
            &.selected {
                color: red;
            }
        }
    }
</style>
