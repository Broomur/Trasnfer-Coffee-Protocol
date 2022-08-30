const vue = Vue.createApp({
    data() {
        return {
            coffeeArray: [
                {
                    name: "Guillaume",
                    coffee: false,
                    dosettes: false
                },
                {
                    name: "Mustapha",
                    coffee: true,
                    dosettes: false
                },
                {
                    name: "Antoine",
                    coffee: true,
                    dosettes: true
                },
                {
                    name: "Orian",
                    coffee: true,
                    dosettes: false
                },
                {
                    name: "Bastien",
                    coffee: false,
                    dosettes: false
                },
                {
                    name: "Benjamin",
                    coffee: true,
                    dosettes: false
                },
                {
                    name: "Dekpo",
                    coffee: true,
                    dosettes: true
                },
                {
                    name: "Tatiana",
                    coffee: false,
                    dosettes: true
                },
                {
                    name: "Yasser",
                    coffee: false,
                    dosettes: false
                },
                {
                    name: "Sebastien",
                    coffee: true,
                    dosettes: false
                },
                {
                    name: "Simon",
                    coffee: true,
                    dosettes: true
                },
                {
                    name: "Laure",
                    coffee: true,
                    dosettes: true,
                    capuccino: true,
                    multiprise: true
                }
            ]
        }
    },
    computed: {
        coffeeAddict() {
            for(item in this.coffeeArray) {
                item.coffee = !item.coffee;
            }
        }
    }
})

vue.mount('#app')