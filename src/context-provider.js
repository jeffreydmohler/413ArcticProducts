import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        this.actions = {
            // functions here
        }
        this.state = {
            categories: {},
            products: {},
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

}
