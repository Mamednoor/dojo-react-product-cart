import React, { useState } from "react";

import "./App.css";

const initialProductList = [
  { id: 1, name: "produit 1", price: 50, quantity: 1 },
  { id: 2, name: "produit 2", price: 75, quantity: 2 },
  { id: 3, name: "produit 3", price: 20, quantity: 5 },
];

function App() {
  const [product,setNewProduct] = useState(initialProductList);

  const Add = e => {
    let adding = [...product]    
    adding.forEach(item => {
      if(item.id === parseInt(e.target.id)){        
        item.quantity = e.target.value
      }
    })
    setNewProduct(adding)
  }

  return (
    <div className="App">
      <h1>Ma commande</h1>
      <table>
      <thead>
        <tr>
          <td className="td">Produit</td>
          <td className="td">Prix unitaire</td>
          <td className="td">Quantité</td>
          <td className="td">Prix total</td>
        </tr>
      </thead>
      <tbody>
        {product.map(value => (
          <tr key={value.id}>
            <td className="td">{value.name}</td>
            <td className="td">{value.price} €</td>
            <td className="td">
              <input
                id={value.id}
                htmlfor='number'
                className="td"
                onChange={Add}
              ></input>
            </td>
            <td className="td">{value.quantity*value.price} €</td>
          </tr>
        ))} 
      </tbody>
      </table>
        <p>Montant de la commande :{product.map(productPrice => productPrice.quantity * productPrice.price).reduce((a, b) => a + b)} €</p>
          <div>
            <form>
                <h2>Ajouter un produit</h2>
                    <label className="field">Nom :</label>
                    <input type="text" id="name" name="name" onChange="" value=""/>                        
                    <label className="field">Prix :</label>
                    <input type="number" id="name" name="prix" onChange="" value=""/> 
                <input className= "button" type="submit" value="Ajouter" />
            </form>
          </div>
    </div>
  );
}

export default App;
