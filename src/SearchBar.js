import React from 'react';

function SearchBar(props){
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search" />
            <div>
                <input id="in-stock" type="checkbox" /> Only Show Products In Stock
            </div>
        </div>
    )
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