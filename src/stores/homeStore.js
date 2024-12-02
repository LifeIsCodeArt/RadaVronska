import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeItemsStore = defineStore('homeItems', () => {

    const darkTheme = ref(false)

    const changeTheme = () => {

        darkTheme.value = !darkTheme.value;

    }

    const itemsVidget = [1,2,3,4,5,6,7,8,9,10]

    const themeCheck = computed(()=> darkTheme.value)

    const appInfo = ref([{
        avatar:'./src/assets/images/app/app-avatar.png',
        avatar_description:'Character image',
        header:'Lorem Ipsum is simply dummy',
        total:'./src/assets/images/app/app-total.png',
        total_votes:'12',
        own_rating:'5.2'
    }]


)

    const downloadItems = ref([

        {
            id:1,
            icon:'/assets/icons/homepage-links/android-icon.png',
            link:'/',
            icon_description:'Android Download',
            text:'Android'
        },

        {
            id:2,
            icon:'/assets/icons/homepage-links/apple-icon.png',
            link:'/',
            icon_description:'Apple Download',
            text:'iOS'
        },

        {
            id:3,
            icon:'/assets/icons/homepage-links/download-icon.png',
            link:'/',
            icon_description:'PC Download',
            text:'Download on PC'
        },



    ])

    const templatesItemsBurger = ref([

        {
            id:1,
            text:'item'
        },

        {
            id:2,
            text:'item'
        },

        {
            id:3,
            text:'item'
        },

        {
            id:4,
            text:'item'
        },

        {
            id:5,
            text:'item'
        },

        {
            id:6,
            text:'item'
        },


    ])

    const templatesItems = templatesItemsBurger.value.filter((item) => item.id<5)


    const articleItems = ref([

        {
            id:1,
            text:'Нитковий живопис #1',
            author:'Рада Вронська',
            image: '/assets/images/article/1.jpg',
            image_description:'Нитковий живопис #1'
        },

        {
            id:2,
            text:'Нитковий живопис #2',
            author:'Рада Вронська',
            image: '/assets/images/article/2.jpg',
            image_description:'Нитковий живопис #2'
        },

        {
            id:3,
            text:'Нитковий живопис #3',
            author:'Рада Вронська',
            image: '/assets/images/article/3.jpg',
            image_description:'Нитковий живопис #3'
        },

        {
            id:4,
            text:'Нитковий живопис #4',
            author:'Рада Вронська',
            image: '/assets/images/article/4.jpg',
            image_description:'Нитковий живопис #4'
        },

        {
            id:5,
            text:'Нитковий живопис #5',
            author:'Рада Вронська',
            image: '/assets/images/article/5.jpg',
            image_description:'Нитковий живопис #5'
        },

        {
            id:6,
            text:'Нитковий живопис #6',
            author:'Рада Вронська',
            image: '/assets/images/article/6.jpg',
            image_description:'Нитковий живопис #6'
        }


    ])

    const articleItems2 = ref([

        {
            id:1,
            text:'Гобелен #1',
            author:'Рада Вронська',
            image: '/assets/images/article/11.jpg',
            image_description:'Гобелен'
        },

        {
            id:2,
            text:'Гобелен #2',
            author:'Рада Вронська',
            image: '/assets/images/article/22.jpg',
            image_description:'Гобелен'
        },

        {
            id:3,
            text:'Гобелен #3',
            author:'Рада Вронська',
            image: '/assets/images/article/33.jpg',
            image_description:'Гобелен'
        },

        {
            id:4,
            text:'Гобелен #4',
            author:'Рада Вронська',
            image: '/assets/images/article/44.jpg',
            image_description:'Гобелен'
        },

        {
            id:5,
            text:'Гобелен #5',
            author:'Рада Вронська',
            image: '/assets/images/article/De4946.jpg',
            image_description:'Гобелен'
        },

        {
            id:6,
            text:'Гобелен #6',
            author:'Рада Вронська',
            image: '/assets/images/article/De4945.jpg',
            image_description:'Гобелен'
        }

    ])

    const articleItems3 = ref([

        {
            id:1,
            text:'Бісероплетіння #1',
            author:'Рада Вронська',
            image: '/assets/images/article/1111.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:2,
            text:'Бісероплетіння #2',
            author:'Рада Вронська',
            image: '/assets/images/article/2222.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:3,
            text:'Бісероплетіння #3',
            author:'Рада Вронська',
            image: '/assets/images/article/3333.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:4,
            text:'Бісероплетіння #4',
            author:'Рада Вронська',
            image: '/assets/images/article/4444.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:5,
            text:'Бісероплетіння #5',
            author:'Рада Вронська',
            image: '/assets/images/article/5555.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:5,
            text:'Бісероплетіння #6',
            author:'Рада Вронська',
            image: '/assets/images/article/444444.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:6,
            text:'Бісероплетіння #7',
            author:'Рада Вронська',
            image: '/assets/images/article/333333.jpg',
            image_description:'Бісероплетіння'
        },

        {
            id:6,
            text:'Бісероплетіння #7',
            author:'Рада Вронська',
            image: '/assets/images/article/111111.jpg',
            image_description:'Бісероплетіння'
        }

    ])

    const articleItems4 = ref([

        {
            id:1,
            text:'Вишивка #1',
            author:'Рада Вронська',
            image: '/assets/images/article/11111.jpg',
            image_description:'Вишивка'
        },

        {
            id:2,
            text:'Вишивка #2',
            author:'Рада Вронська',
            image: '/assets/images/article/22222.jpg',
            image_description:'Вишивка'
        },

        {
            id:3,
            text:'Вишивка #3',
            author:'Рада Вронська',
            image: '/assets/images/article/33333.jpg',
            image_description:'Вишивка'
        },

        {
            id:4,
            text:'Вишивка #4',
            author:'Рада Вронська',
            image: '/assets/images/article/44444.jpg',
            image_description:'Вишивка'
        },

        {
            id:5,
            text:'Вишивка #5',
            author:'Рада Вронська',
            image: '/assets/images/article/55555.jpg',
            image_description:'Вишивка'
        },

        {
            id:6,
            text:'Вишивка #6',
            author:'Рада Вронська',
            image: '/assets/images/article/555555.jpg',
            image_description:'Вишивка'
        },

        {
            id:7,
            text:'Вишивка #7',
            author:'Рада Вронська',
            image: '/assets/images/article/666666.jpg',
            image_description:'Вишивка'
        },

        {
            id:8,
            text:'Вишивка #8',
            author:'Рада Вронська',
            image: '/assets/images/article/777777.jpg',
            image_description:'Вишивка'
        },

        {
            id:9,
            text:'Вишивка #9',
            author:'Рада Вронська',
            image: '/assets/images/article/222222.jpg',
            image_description:'Вишивка'
        },


    ])

    const sideIcons = ref([

        {
            id:1,
            icon_path:'/assets/icons/side/facebook-side.png',
            icon_description:'Facebook link',
            path:'/',
            bg: 'bg-[#3A579A]'
        },

        {
            id:2,
            icon_path:'/assets/icons/side/twitter-side.png',
            icon_description:'Twitter link',
            path:'/',
            bg: 'bg-[#00ABF0]'
        },

        {
            id:3,
            icon_path:'/assets/icons/side/telegram-side.png',
            icon_description:'Telegram link',
            path:'/',
            bg: 'bg-[#24A2E0]'
        },

        {
            id:4,
            icon_path:'/assets/icons/side/pinterest-side.png',
            icon_description:'Pinterest link',
            path:'/',
            bg: 'bg-[#CD1C1F]'
        },

        {
            id:5,
            icon_path:'/assets/icons/side/reddit-side.png',
            icon_description:'Reddit link',
            path:'/',
            bg: 'bg-[#FC461E]'
        },

        {
            id:6,
            icon_path:'/assets/icons/side/heart-side.png',
            icon_description:'Heart link',
            path:'/',
            bg: 'bg-[#F95149]'
        },


    ])


    return { appInfo, downloadItems, templatesItems, templatesItemsBurger, articleItems, articleItems2, articleItems3, articleItems4, darkTheme, changeTheme, themeCheck, itemsVidget, sideIcons}
})
