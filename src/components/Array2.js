import React, { Component } from 'react'
import Form from './Form'
import '../App.css'

// const initialProductList = [
//     { id: 1, name: "produit 1", price: 50, quantity: 1 },
//     { id: 2, name: "produit 2", price: 75, quantity: 2 },
//     { id: 3, name: "produit 3", price: 20, quantity: 5 },
// ];


class Array2 extends Component {
    state = {
        ProductList: [
            { id: 0, name: 'produit 1', price: 50, quantity: 1 },
            { id: 1, name: 'produit 2', price: 75, quantity: 2 },
            { id: 2, name: 'produit 3', price: 20, quantity: 5 }
        ],
    }   
    
    handleChange = e => {
        let list = [...initialProductList]
        list.forEach(item => {
            if(item.id === parseInt(e.target.id)) {   
                item.quantity = e.target.value
            }
                this.setState({productList : list})
        })}


    render () {
    const {list, handleChange} = this.state
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
                    {list.map(items => (
                <tr key={items.id}>
                    <td className="td">{items.name}</td>
                    <td className="td">{items.price}</td>
                    <td><input id={items.id} type="number" value={items.quantity} onChange={handleChange}/></td>                   
                    <td className="td">{items.quantity * items.price}</td>
                    
                </tr>
                ))}
            </table>
            <p>Montant de la commande :</p>
            <Form />
        </div>
    )
}}

export default Array2