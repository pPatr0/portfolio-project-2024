<template>
    <div class="bg-light text-dark">
        <div class="container flex justify-center py-20 mx-auto">
            <div>
                <div>
                    <h2 class="pb-8 text-4xl font-bold uppercase font-primary">{{ specificPortfolioItem.name }}</h2>
                    <p class="font-secondary"><span class="font-bold">Category:</span> {{ specificPortfolioItem.category }}</p>
                    <p class="font-secondary"><span class="font-bold">Technology:</span> {{ specificPortfolioItem.technology }}</p>
                    <p class="pt-4 font-secondary"><span class="font-bold">Description:</span></p>
                </div>
                <div class="flex flex-col">
                    <div class="max-w-3xl pt-3 pr-0 lg:pr-3 lg:pt-0">
                        <p>{{ specificPortfolioItem.description }}<br><br></p>
                        <p>{{ specificPortfolioItem.description2 }}<br><br></p>
                        <p>{{ specificPortfolioItem.description3 }}</p>
                    </div>
                    <div class="max-w-3xl mt-3 lg:pt-0">
                        <img :src="specificPortfolioItem.image" :alt="specificPortfolioItem.name">
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import getPortfolio from '@/modules/getPortfolio'

const {portfolioItems} = getPortfolio()

const route = useRoute()

const id = ref(route.params.id)

const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)
console.log(specificPortfolioItem)


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
