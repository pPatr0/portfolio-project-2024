<template>
  <main>
    <div class="bg-light">
      <div class="container py-[13rem] mx-auto">
        <div class="flex justify-center text-center font-primary text-dark">
          <h1 class="lg:max-w-xl max-w-72 font-bold lg:leading-[110px] leading-[50px] lg:text-8xl text-5xl">Hi, my name is Patrik</h1>
        </div>
        <div class="flex justify-center pt-4 text-center font-primary text-dark">
          <h2 class="text-lg lg:text-2xl font-primary">Multimedia Designer</h2>
        </div>
        <div class="flex justify-center pt-3">
          <hr class="w-24 border-2 border-primary">
        </div>
        <div class="flex justify-center py-4 text-center font-secondary text-dark">
          <p class="text-base lg:max-w-lg max-w-[18.5rem] lg:text-xl ">I am digital creator. I enjoy bringing ideas to life through digital projects. So take a tour and explore the innovative and quality experiences I've crafted with passion and dedication.</p>
        </div>
        <div class="flex justify-center space-x-3 text-sm font-bold lg:space-x-5 font-primary">
          <button class="py-3 border-[3px] border-primary rounded-full lg:px-10 px-8 font-primary bg-primary text-dark">
            <a href="#about" @click="scrollTo('about')">About Me</a>
          </button>
          <button class="py-3 border-[3px] rounded-full lg:px-10 px-8 font-primary border-primary text-dark">
            <a href="/images/Sevcik-CV.pdf" target="_blank">Download CV</a>
          </button>
        </div>
      </div>
    </div>
    <div class="py-20 bg-secondary" id="portfolio">
      <div class="container max-w-6xl mx-auto">
        <div class="flex justify-center">
          <h2 class="pb-0 text-4xl font-bold uppercase lg:pb-12 font-primary text-dark">My projects</h2>
        </div>
          <div class="flex justify-center pb-12 font-primary text-dark">
            <div class="hidden px-4 py-2 space-x-2 border-2 rounded-full bg-light border-primary lg:block">
              <button @click="selectedCategory = 'Web design' " class="px-6 py-1 rounded-full" :class="{ 'bg-dark text-light': selectedCategory === 'Web design' }">Web Design</button>
              <button @click="selectedCategory = 'Logo design' " class="px-6 py-1 rounded-full" :class="{ 'bg-dark text-light': selectedCategory === 'Logo design' }">Logo Design</button>
              <button @click="selectedCategory = 'Illustration' " class="px-6 py-1 rounded-full" :class="{ 'bg-dark text-light': selectedCategory === 'Illustration' }">Illustration</button>
              <button @click="selectedCategory = 'Blender' " class="px-6 py-1 rounded-full" :class="{ 'bg-dark text-light': selectedCategory === 'Blender' }">Blender</button>
              <button @click="selectedCategory = '' " class="px-6">All</button>
            </div>
          </div>
            <div class="max-w-[21rem] pb-8 lg:hidden block-wrap">
              <div class="flex justify-between py-1">
                <button @click="selectedCategory = 'Web design' " class="py-3 border-[3px] rounded-full lg:px-10 px-6 font-primary border-primary text-dark bg-light shadow-md mr-1">Web design</button>
                <button @click="selectedCategory = 'Logo design' " class="py-3 border-[3px] rounded-full lg:px-10 px-6 font-primary border-primary text-dark bg-light shadow-md ml-1">Logo design</button>
              </div>
              <div class="py-1">
                <button @click="selectedCategory = 'Illustration' " class="py-3 border-[3px] rounded-full lg:px-10 px-6 font-primary border-primary text-dark bg-light shadow-md mr-1">Illustration</button>
                <button @click="selectedCategory = 'Blender' " class="py-3 border-[3px] rounded-full lg:px-10 px-6 font-primary border-primary text-dark bg-light shadow-md mx-1">Blender</button>
                <button @click="selectedCategory = '' " class="py-3 border-[3px] rounded-full lg:px-10 px-6 font-primary border-primary text-dark bg-light shadow-md ml-1">All</button>
              </div>
            </div>
        <div class="grid justify-center grid-cols-1 col-span-2 gap-5 xl:grid-cols-3 sm:grid-cols-2 text-dark">
          <div
            v-for="portfolioItem in filteredPortfolioItems" 
            :key="portfolioItem" 
            class="flex flex-col px-5 py-5 border border-dark bg-light"
          >
            <p>
              <span class="font-bold font-secondary">
                Name:
              </span> 
              {{ portfolioItem.name }}
            </p>
            <p>
              <span class="font-bold font-secondary">
                Category:
              </span> 
              {{ portfolioItem.category }}
            </p>
            <img :src="portfolioItem.image" :alt="portfolioItem.name" class="h-full pt-2">
            <div class="mx-auto">
              <router-link :to="`/portfoliodetail/${portfolioItem.id}`">
                <button class="py-3 mx-auto mt-5 rounded-full px-14 font-primary bg-dark text-light">More...</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container py-20 mx-auto"  id="about">
        <div class="flex justify-center">
          <h2 class="pb-12 text-4xl font-bold uppercase font-primary text-dark">About me</h2>
        </div>
        <div class="flex flex-col justify-between px-8 lg:flex-row">
          <div>
            <iframe class="lg:w-[40rem] w-full lg:h-full h-[12rem]" src="https://www.youtube.com/embed/YPV2dEr3AAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="flex flex-col justify-between max-w-2xl pt-8 lg:pt-0">
            <div>
              <p class="text-base lg:text-xl font-secondary text-dark">
                My name is Patrik Ševčík, and I was born in Czech Republic. Here I attended to a Business Academy OAVM in the field of IT, where I learned about being creative and making things with my own hands.<br><br> After graduation, I moved to Denmark where I study multimedia design. Throughout this programme, I am improving my skill at programmes such as Illustrator, Photoshop etc. Or I learn here something new such as using Visual Studio Code with Tailwind or Vue.<br><br> When I'm not occupied, you can often find me working out or indulging in my lifelong passion for football. I believe in the power of teamwork both on and off the field, and I'm constantly seeking opportunities to grow.
              </p>
            </div>
            <div class="pt-8">
              <button class="py-3 border-[3px] border-primary rounded-full lg:px-10 px-8 font-primary bg-primary text-dark font-bold lg:text-base text-sm">Contact me</button>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-between px-8 pt-20 gap-y-5">
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/illustrator.png" alt="Illustrator" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/photoshop.png" alt="Photoshop" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/premier.png" alt="Premier" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/creativeCloud.png" alt="Cloud" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/blender.png" alt="Blender" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/html.png" alt="Html" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/CSS3.png" alt="Css" class="h-[3rem] lg:h-[6rem]">
          </div>
          <div class="lg:w-[10rem] lg:h-[10rem] w-[4rem] h-[4rem] bg-secondary flex justify-center items-center rounded-lg shadow-lg">
            <img src="/images/tailwind.png" alt="Tailwind" class="h-[2rem] px-2 lg:h-[5rem]">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
    import {ref, computed} from 'vue'
    import getPortfolio from '@/modules/getPortfolio';
    const {portfolioItems} = getPortfolio();
  
    const selectedCategory = ref('')
  
    const filteredPortfolioItems = computed(() => {
      if(selectedCategory.value == ''){
        return portfolioItems.value
      }else{
        return portfolioItems.value.filter(item => item.category == selectedCategory.value)
      }
    })
  </script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>

