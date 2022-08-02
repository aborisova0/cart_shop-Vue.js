const App = {
    data() {
        return {
            totalPrice: 0,
            cartItems: [
                {
                    title: 'Apple MacBook Air 13',
                    count: 1,
                    price: 250000,
                    img: ''
                },
                {
                    title: 'Apple Mac 2022',
                    count: 1,
                    price: 1100000,
                    img: ''
                },
                {
                    title: 'Apple iPhone 13',
                    count: 1,
                    price: 75000,
                    img: ''
                }
            ]
        }
    },
    methods: {
        incItemCount(item){
            item.count++   
        },
        decItemCount(item){
            item.count--
        },
        deleteItem(item){
            this.cartItems = this.cartItems.filter(i => i !== item)           
        }
    },
    computed: {
        calcPrice(){
            let sum = 0
            for(item of this.cartItems){
                sum += item.price * item.count
            }
            return this.totalPrice = sum
        }, 
        itemTotal(){
            let items = 0
            for(item of this.cartItems){
                items += item.count
            }
            return items
        }
    },
    watch: {

    }
}

Vue.createApp(App).mount('#app')