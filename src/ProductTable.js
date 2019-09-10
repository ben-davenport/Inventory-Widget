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
        if (props.search ==="" && props.stock==false){
            tempProducts[key].forEach((product, i)=>{
                rows.push(<ProductRow product={product} key={key+i} />) //push this element on to rows;
            })}

        else if(props.search === "" && props.stock===true){
            tempProducts[key].filter((product, i) => {
                if (product.inStock == true){
                    rows.push(<ProductRow product={product} key={key+i} />)
                    }
            })}

        else if(props.search !=="" && props.stock===true){
            tempProducts[key].filter((product, i) => {
                if (product.inStock === true && product.name.includes(props.search)){
                    rows.push(<ProductRow product={product} key={key+i} />)
                    }
            })}

        else{
            const results = tempProducts[key].filter((product, i) => {
                if (product.name.includes(props.search)){
                    rows.push(<ProductRow product={product} key={key+i} />)
                }
            })
            console.log(results)
        }
    };

    console.log(props.stock)

    // console.log(props.search)

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