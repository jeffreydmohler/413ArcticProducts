import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import {produce} from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            // functions here
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            recountCart: this.recountCart
        }
        this.state = {
            categories: {},
            products: {},
            cart: {},
            cartCount: 0,
        }

        //load categories here (in constructor) is a bad idea.. it would freeze the system. // just initialize categories, products
    }

    render() {
        // if (!this.state.categories) {
        //     return <div>Loading...</div>
        // }

        return ( // ... is a spreader. 
            <AppContext.Provider value={{...this.state, ...this.actions}}> 
                <App />
            </AppContext.Provider>
        )
    }

    //XMLHttpRequest - pain to use, old
    //window.fetch still work and normal
    //axios - third party

    async componentDidMount() {
        const catresp = await axios.get('http://localhost:8000/api/category/')
        const cats = {}
        
        for (const cat of catresp.data) {
            cats[cat.id] = cat
        }
        //console.log(cats)
        this.setState(
            {categories: cats} // data type is an array
        )
        

        const prodresp = await axios.get('http://localhost:8000/api/product/')
        const prods = {}

        for (const prod of prodresp.data) {
            prods[prod.id] = prod
        }
        //console.log(prods)
        this.setState(
            {products: prods} // data type is an array
        )
        
    }

    addToCart = (pid) => 
    {
        console.log("another") //show where i click add cart
        console.log(this.state.cart[pid] + " this product to start")
        console.log(this.state.cartCount + " cart count to start")
        if (!this.state.cart[pid])
        {
            console.log("something")
            this.setState(state => produce(state, draft => {
                draft.cart[pid] = 1
                //console.log(draft.cart[pid])
            }))
            //console.log(this.state.cart[pid] + " after adding")
        }
        else {
            this.setState(state => produce(state, draft => {
                draft.cart[pid] = draft.cart[pid] + 1
                //console.log(draft.cart[pid])
            }))
            //console.log(this.state.cart[pid] + " after adding")
        }

        this.recountCart()
    }

    removeFromCart = (pid) => 
    {
        this.setState(state => produce(state, draft => {
            draft.cart[pid] = undefined
            console.log(draft.cart[pid])
        }))

        this.recountCart()
    }

    recountCart = () =>
    {
        let tot = 0

        for (const c of Object.values(this.state.cart))
        {
            tot = tot + c
            console.log('total: ' + tot)
        }

        this.setState(state => produce(state, draft => {
            draft.cartCount = tot
        }))
    }

}
