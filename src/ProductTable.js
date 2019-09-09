import React from 'react';
import prodcutData from './data'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow';

console.log(prodcutData)
function ProductTable(props){
    let tempProducts = {};

    const products = prodcutData.data.forEach((product, i)=>{
        //run some quick code to see if this is a new category
        if (tempProducts[product.category] === undefined){
            tempProducts[product.category] = [];
        }
        tempProducts[product.category].push(product);
        // return(
        //     <ProductRow product={product} key={i} />
        // )
        })

    let rows= [];
    for(let key in tempProducts){
        // console.log(key);
        rows.push(<ProductCategoryRow key={key} header={key} />)
        //push the ProductCategoryRow onto rows
        //map through all the itesm of this type (e.g. sporting goods; electronics)
        tempProducts[key].forEach((product, i)=>{
            rows.push(<ProductRow product={product} key={key+i} />) //push this element on to rows;
        })
    };

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
// class ProductTable extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
            
//         }
//     }
 
//     render(){
//         return(<>
            
//         </>)
//     }
// }
export default ProductTable;