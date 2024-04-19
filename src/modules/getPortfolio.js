import { ref } from 'vue'

const getPortfolio = () => {
    const portfolioItems = ref([
        {
          id: 1,
          name: 'Redesigning Trapholt Museum',
          image: '/images/projects/trapholtHero.png',
          category: 'Web design',
          description: 'Our task was that we had to make a new website for Trapholt (https://trapholt.dk). We needed to make an appealing website, that gives information about current exhibitions and Trapholt in general. Alongside their new website and improved visual identity, we needed to update their printed materials as well.',
          description2: 'The site we were about to make will appeal to several user groups - but our target group was assigned by random. Our target group was public institutions.',
          description3: 'Apart from actual website with specific requirments, part of our website was to do some digital products. For example logo, trifolder, poster, some posts etc. Also report was needed.',
          technology: 'Visual Studio Code, XD'
        },
        {
          id: 2,
          name: 'My own website',
          image: '/images/projects/mentalHealthHero.png',
          category: 'Web design',
          description: 'In the first semester before the final exam, we were assigned the project "Your own website". The assignment was very simple, because we had to make our own website + mockup. The theme was arbitrary',
          description2: 'I was inspired by the website www.mentalhealth.org.uk. Thanks to this site I decided to make my own site with a darker theme',
          technology: 'Visual Studio Code, XD'
        },
        {
          id: 3,
          name: 'Poster for International day',
          image: '/images/projects/foodPoster.png',
          category: 'Illustration',
          description: 'Our task was to create a poster for International Day at our university. We had to make three different sizes - A4, A3 and 1920x1080 px for screens',
          technology: 'Adobe Illustrator'
        },
        {
          id: 4,
          name: 'Redesigning logo for Tamam Health',
          image: '/images/projects/tamamLogo.png',
          category: 'Logo design',
          description: 'Based on the 16Personalities website, we were divided into groups of mostly four. And our task was to design a new logo for Tamam Health.',
          description2: 'Part of the assignment involved brainstorming with my group and a lot of designing. You can see our finished product in the image below',
          technology: 'Adobe Illustrator'
        },
        {
          id: 5,
          name: 'Own Project in Blender',
          image: '/images/projects/blenderRender.png',
          category: 'Blender',
          description: 'In high school as a final assignment we got to do a render in Blender. We were given about 2 weeks to do it and the topic was arbitrary. The teacher was extremely happy with the result.',
          technology: 'Blender'
        }
      ])

      return {portfolioItems}
}

export default getPortfolio

