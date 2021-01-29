  import React from 'react';
  import TableItem from './TableItem';
  import Callapi from './../ultils/apiCaller';
  import ManagerCategories from './ManagerCategories';
  	class TableCagories extends React.Component{
      constructor(props){
        super(props);
        this.state={
          categories:[]
        };
      }

      componentDidMount(){
         Callapi('categories','GET',null).then(res=>{
         this.setState({
          categories:res.data
         });
         });  
      }
      onDelete=(id)=>{
         Callapi(`categories/${id}`,'DELETE').then(res=>{
        console.log(res);
    });
      }
      
  		render() {
         var {categories}=this.state;
  			return (
             <div >
            <ManagerCategories/>
  				  <div className="table">
                <div class="table-responsive">
                  <table class="table table-hover mt-15">
                    <thead>
                      <tr>
                          <th>STT</th>
                        <th>Danh mục</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
            <td></td>
            <td><input type="text"></input></td>
            <td><select>
              <option value={false}>Ẩn</option>
              <option value={true}>Hoạt động</option>
            </select></td>
            <td></td>
          </tr>
                     {this.showcategories(categories)}
                    </tbody>
                  </table>
                </div>
               </div>
               </div>
  	        
  			)
  		}
      showcategories(categories){
       var result=null;
       if(categories.length>0){
        result=categories.map((category,index)=>{
        return(
           <TableItem
            key={index}
            category={category}
            index={index}
            onDelete={this.onDelete}
           />
          );
        });
       }
       return result;
      }
  	}
  export default TableCagories;