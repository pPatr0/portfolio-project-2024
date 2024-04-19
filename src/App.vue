<script setup>
import { RouterLink } from 'vue-router'

const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  
};
</script>


<template>
  <header>
    <div>
      <nav class="bg-[#DCE1E1] w-full mx-auto flex justify-center lg:space-x-12 space-x-8 py-8 font-bold lg:text-lg  text-base font-primary">
        <router-link to="/" class="text-[#231F20] hover:underline">Home</router-link>
        <a href="#portfolio" class="text-[#231F20] hover:underline" @click="scrollTo('portfolio')">Portfolio</a>
        <a href="#about" class="text-[#231F20] hover:underline" @click="scrollTo('about')">About Me</a>
        <a href="#contact" class="text-[#231F20] hover:underline" @click="scrollTo('contact')">Contact</a>
      </nav>
    </div>
  </header>

  <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
      <h2>{{ portfolioItem.title }}</h2>
      <p>{{ portfolioItem.description }}</p>
      <p>{{ portfolioItem.id }}</p>
      <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>

      <img :src="portfolioItem.image" alt="">
      <div v-if="portfolioItem.link">
        <a :href="portfolioItem.link">Link</a>
      </div>
      <div v-else>

      </div>
  </div>

  


  <RouterView v-slot="{Component}">
    <Transition mode="out-in" name="bounce">
      <component :is="Component"/>
    </Transition>
  </RouterView>
  


  <footer>
    <div class="bg-[#DCE1E1] text-[#231F20] font-primary">
      <div class="container mx-auto lg:px-[10rem] px-8">
        <div class="flex lg:flex-row flex-col justify-between pt-[4rem] pb-4">
          <div class="flex flex-col pb-6 space-y-1 lg:pb-0">
            <p class="pb-1 font-bold">Contact Me</p>
            <p>patasevcik@seznam.cz</p>
            <p>patsev01@easv365.dk</p>
            <p>+45 50 23 02 46</p>
          </div>
          <div class="flex flex-col pb-6 space-y-1 lg:pb-0">
            <p class="pb-1 font-bold">Follow Me</p>
            <a href="https://www.instagram.com/p_sevca/">instagram.com/p_sevca</a>
            <a href="https://www.linkedin.com/in/sevcikpatrik/">linkedin.com/in/sevcikpatrik</a>
          </div>
          <div class="flex flex-col pb-4 space-y-1 lg:pb-0">
            <p class="pb-1 font-bold">Links</p>
            <a href="/">Home</a>
            <a href="#about">About Me</a>
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>
        <div>
            <hr class="border-[#231F20] pb-4" id="contact">
        </div>
        <div class="flex justify-center pb-[3rem]">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

