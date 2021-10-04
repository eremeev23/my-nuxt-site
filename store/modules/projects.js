export default {
    actions: {},

    mutations: { 
        changeTheme(state) {
            state.themeStatus = !state.themeStatus
        }
    },

    state: {

        projects: [
            {   
                id: 1,
                title: 'Online store cart',
                description: 'Online store car on Vue.js with Vuex store.  You can increase and reduce number of items with reactive load on your bill.',
                image: '/assets/img3.png',
                link: 'https://shopping-cart-maxon32.vercel.app/'
            },
            {   
                id: 2,
                title: 'Task list',
                description: "Task list on Vue.js with Vuex store. There are two types of tasks: Global(main) task and Subtask. You can change subtsask, delete them or add new.",
                image: '/assets/img4.png',
                link: 'https://task-list-dusky.vercel.app/'
            },

            {   
                id: 3,
                title: 'To do list',
                description: "To do list on pure JS. It's saving current todos in Local Storage.",
                image: '/assets/img2.png',
                link: 'https://todolist-ashy-nu.vercel.app/'
            },
            {
                id: 4,
                title: 'React To do list',
                description: 'To do list as the first one, but made with React.js',
                image: '/assets/img8.png',
                link: 'https://github.com/maxon32/React-todo'
            },
            {   
                id: 5,
                title: 'Landing Page',
                description: 'Landing Page with adapted slider and menu. Also, there are grid-net for content and added video. Made with Vue.js.',
                image: '/assets/img7.png',
                link: 'https://vue-jokes-rouge.vercel.app/'
            },  
            {   
                id: 6,
                title: 'SPA with two filters',
                description: 'SPA with two dependent filters. Made with Vue.js',
                image: '/assets/img6.png',
                link: 'https://github.com/maxon32/vue-test-spa'
            },
            {   
                id: 7,
                title: 'Jokes',
                description: 'The list of jokes, loaded from Jokes API via axios. Made with Vue.js',
                image: '/assets/img5.png',
                link: 'https://vue-jokes-rouge.vercel.app/'
            },
            {   
                id: 8,
                title: 'Online clock',
                description: 'Online clock made with pure JS. Simple dark design.',
                image: '/assets/img9.png',
                link: 'https://clock-maxon32.vercel.app/'
            },
            {   
                id: 9,
                title: 'Online calculator',
                description: 'Online calculator made with pure JS.',
                image: '/assets/img10.png',
                link: 'https://calculator-ten-rouge.vercel.app/'
            },
        ],

        themeStatus: true,

    },

    getters: {

        getProjects(state) {
            return state.projects
        },
        
        getTheme(state) {
            return state.themeStatus
        }
    },
}