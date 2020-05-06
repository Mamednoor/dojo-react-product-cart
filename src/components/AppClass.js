import React, { Component } from 'react'
import '../App.css'

const initialProductList = [
    { id: 1, name: "produit 1", price: 50, quantity: 1 },
    { id: 2, name: "produit 2", price: 75, quantity: 2 },
    { id: 3, name: "produit 3", price: 20, quantity: 5 },
];


class Array2 extends Component {
    state = {
        initialProductList
    }

handleChange = (id,e) => {
    let quantite = parseInt(e.target.value)
        if (quantite===0) { 
            if(window.confirm("Etes-vous sûr de bien vouloir retirer ce produit de la liste ?")){
            this.setState(prevState => ({
                initialProductList: prevState.initialProductList
                .map(product => (product.id === id ? Object.assign(product, {quantity: quantite}): product))
            }))
            }
        }
        else {
            this.setState(prevState => ({
            initialProductList: prevState.initialProductList.map(
            product => (product.id === id ? Object.assign(product, { quantity: quantite }) : product))
            }))
        }
    }


handleAddingProduct = (e) => {
    e.preventDefault()
    let etat = this.state.initialProductList
    let aleatoire = Math.floor(Math.random()*100)
    let nom = document.getElementById("newProduct").value
    let prix = document.getElementById("newPrice").value
    etat.push({ id: aleatoire, name: nom, price: prix, quantity: 1 })
    
    // console.log("poulet2:", etat)
    // console.log("poulet3:", etat.push({ id: 100, name: 'Pdt 1', price: 50, quantity: 1 }))
    // ))
    this.setState(prevState => ({initialProductList : etat}))
}

    render () {
    const {initialProductList} = this.state
    
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
                    {initialProductList.map(product => (
                <tr key={product.id}>
                    <td className="td">{product.name}</td>
                    <td className="td">{product.price} €</td>
                    <td><input type="number" id={product.id} htmlfor="number" onChange={(e) => this.handleChange(product.id,e)}/></td>                   
                    <td className="td">{product.price * product.quantity}</td>
                    
                </tr>
                ))}
            </table>
            <p>Montant de la commande :{initialProductList.map(productPrice => productPrice.quantity * productPrice.price).reduce((a, b) => a + b)} €</p>
            <div>
            <form onSubmit={this.handleAddingProduct}>
                <h2>Ajouter un produit</h2>
                    <label htmlFor="name">Nom</label>
                    <input className="field" type="text" id="newProduct" name="newProduct" required/>
                    <label htmlFor="name">Prix</label>
                    <input className="field" type="number" id="newPrice" name="newPrice" required/>
                    <input type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    )
}}

export default Array2