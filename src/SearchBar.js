import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state={
            search: "",
            stock: "",
        }
        this.changeSearch = this.changeSearch.bind(this);
        this.changeStock = this.changeStock.bind(this);
    }
    changeSearch(e){
        // console.log(e.target)
        const newVal = e.target.value
        // console.log(newVal)
        // this.setState({
        //     search: newVal
        // })
        this.props.changeFromParent(newVal)
    }

    changeStock(e){
        const newVal=e.target.checked;
        // console.log(`changeStock: Target Checked?: ${newVal}`)
        this.props.changeStock(newVal)
        console.log(newVal)
        // console.log(this.props.changeStock)
    }
    render(){
        return(
            <div className="search-bar">
                <input type="text" placeholder="Search" value={this.props.search} onChange={this.changeSearch} />
                <div>
                    <input id="in-stock" type="checkbox" value={this.props.stock} onChange={this.changeStock} /> Only Show Products In Stock
                </div>
            </div>
        )
    }
}
// class SearchBar extends React.Component{
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
export default SearchBar;