import React from "react";


const initialProductList = [
    { id: 1, name: "produit 1", price: 50, quantity: 1 },
    { id: 2, name: "produit 2", price: 75, quantity: 2 },
    { id: 3, name: "produit 3", price: 20, quantity: 5 },
];

function Array(props) {
    return (
        
    <table className="table">
        <tr>
            <td className="td">Produit</td>
            <td className="td">Prix unitaire</td>
            <td className="td">Quantité</td>
            <td className="td">Prix total</td>
        </tr>
        <tr>
            <td className="td">produit 1</td>
            <td className="td">{initialProductList.id.price}</td>
            <td className="td">
            <input 
                type="number" 
                id="1" 
                name="produit 1" 
                onChange="" 
                value="" 
    ></input>
        </td>
        <td className="td">8</td>
        </tr>
        <tr>
            <td className="td">produit 2</td>
            <td className="td">75€</td>
            <td className="td">
            <input 
                type="number" 
                id="2" 
                name="produit 2" 
                onChange="" 
                value=""
            />
        </td>
        <td className="td">3    </td>
        </tr>
        <tr>
            <td className="td">produit 3</td>
            <td className="td">20€</td>
            <td className="td">
            <input 
                type="number" 
                id="3" 
                name="produit 3" 
                onChange="" 
                value="" 
            />
            </td>
        <td className="td">3</td>
        </tr>
        <tr>
            <td className="td">nouveau produit</td>
            <td className="td">15€</td>
            <td className="td">
                <input 
                    type="number" 
                    id="number" 
                    name="number" 
                    onChange="" 
                    value="" 
                />
            </td>
            <td className="td">3</td>
        </tr>
    </table>
);
}

export default Array;
