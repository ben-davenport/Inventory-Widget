import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends Component{
    constructor(){
        super();
        this.state ={
            search: "",
            stock: ""
        }
    }

    handleFilterChange = (value)=>{
        this.setState({
            search: value
        })
    }
    handleStockChange = (value)=>{
        console.log(value)
        this.setState({
            stock: value
        })
    }

    render(){
        return(
            <div className="col-sm-3">
                <SearchBar search={this.state.search} changeFromParent={this.handleFilterChange} stock={this.state.stock} changeStock={this.handleStockChange} />
                <ProductTable search={this.state.search} stock={this.state.stock} />
            </div>
        )
    }
}

export default FilterableProductTable;