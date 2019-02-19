import React, { Component } from 'react';

import './SearchDish.css';

class SearchDish extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div className="search-dish-container">
               <p>
               This is Search Dish Component
               </p> 
               
                
            </div>
            <input type="text" name="search" class="round" placeholder="Search Dish" />
            <p>Results:</p>
            </div>
            
            
        );
    }
}

export default SearchDish;