import React from 'react';
import './App.css';
import AddCategories from './components/AddCategories'
import AddCate from './components/AddCate'
import AddCateItem from './components/AddCateItem'
import TableCategory from './components/TableCategory'
import Header from './components/Header'
import MenuCategories from './components/MenuCategories'
import {BrowserRouter as Router,Route} from 'react-router-dom';
	class App extends React.Component{
	
		render() {
			return (
		<Router>
		<div className="container-fluid">
		<div className="row">
		<Header/>
		</div>
		<div className="row">
		<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"> 
		<MenuCategories/>	
		</div>
		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 mt-60 ">	 
        <Route path="/add" exact component={AddCategories}/>
        <Route path="/addcate" exact component={AddCate}/>
         <Route path="/addcateitem" exact component={AddCateItem}/>
        </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-60">
            <Route path="/table" exact component={TableCategory}/>
          </div>   

         </div>

      </div>
	  </Router>      
			);
		}
	}
export default App;