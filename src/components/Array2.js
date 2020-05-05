import React, { Component } from 'react'
import '../App.css'

// const initialProductList = [
//     { id: 1, name: "produit 1", price: 50, quantity: 1 },
//     { id: 2, name: "produit 2", price: 75, quantity: 2 },
//     { id: 3, name: "produit 3", price: 20, quantity: 5 },
// ];


class Array2 extends Component {
    state = {
        ProductList: [
            { id: 1, name: "produit 1", price: 50, quantity: 1 },
            { id: 2, name: "produit 2", price: 75, quantity: 2 },
            { id: 3, name: "produit 3", price: 20, quantity: 5 },
        ]
    }

    handleChange = (e) => {
        let product = this.state.ProductList
        product.forEach(item => {
        if (item.id === parseInt(e.target.id)){ 
            item.quantity = e.target.value}
        // let result = 0
        //     let result = item.quantity = e.target.value
        //         return result,
        this.setState({ProductList : product})
        })}

    handleAdd = () => {
        result = {items.price * items.quantity}
    }
        
    render () {
    const {ProductList, handleChange} = this.state
    return (
        <div className="App">
            <h1>Ma commande</h1>
            <table>
                <tr>
                    <td className="td">Produit</td>
                    <td className="td">Prix unitaire</td>
                    <td className="td">Quantité</td>
                    <td className="td">Prix total</td>
                </tr>
                    {ProductList.map(items => (
                <tr key={items.id}>
                    <td className="td">{items.name}</td>
                    <td className="td">{items.price} €</td>
                    <td><input type="number" id={items.id} htmlfor="number" onChange={handleChange}/></td>                   
                    <td className="td">{items.price * items.quantity}</td>
                    
                </tr>
                ))}
            </table>
            <p>Montant de la commande :{ProductList.map(productPrice => productPrice.quantity * productPrice.price).reduce((a, b) => a + b)} €</p>
            <div>
                <form>
                    <h2>Ajouter un produit</h2>
                        <label className="field">Nom :</label>
                        <input type="text" id="name" name="name" onChange="" value=""/>                        
                        <label className="field">Prix :</label>
                        <input type="number" id="number" name="prix" onChange="" value=""/> 
                    <input className= "button" type="submit" value="Ajouter" />
                </form>
            </div>
        </div>
    )
}}

export default Array2