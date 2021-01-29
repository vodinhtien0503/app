import React from 'react';
import Callapi from './../ultils/apiCaller';
class AddCateItem extends React.Component{
      constructor(props){
        super(props);
        this.state={
          id:'',
          name:'',
          status:'',
          cateId:'1',
          categoryId:'1',
          categories:[],
          cates:[]
        };
      }
      onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value =target.value;
        this.setState({
          [name]:value
         });
      }
        componentDidMount(){
         Callapi('categories','GET',null).then(res=>{
         this.setState({
          categories:res.data
         });
         });  
      }
      onClick=(e)=>{
        e.preventDefault();
        var categoryId=this.state.categoryId;
         Callapi(`categories/${categoryId}/cate`,'GET',null).then(res=>{
         this.setState({
          cates:res.data
         });
         console.log(res)
         });  
      }
      
      Onsave=(e)=>{
         e.preventDefault();
         var {name, status,cateId,categoryId}=this.state;
        Callapi(`categories/${categoryId}/cate/${cateId}/cateItem`,'POST',{
          cateItemName:name,
          status:status,
          cateId:cateId
        }).then(res=>{
          console.log(res);
        })
        this.setState({
          id:'',
          name:'',
          status:'',
          
        });
      }

	render() {
    var {name,status,cateId,cates,categories,categoryId}=this.state;
		return (
      <div>
      <div className="card">
        <div className="card-heading">
          <div className="card-title ">Thêm danh mục</div>
        </div>
           </div>
        <div className="card-body">
        <form onSubmit={this.Onsave}>
        <div className="form-group">
          <label>Tên danh mục</label>
          <input className="form-control" 
          type="text" 
          name="name" 
          placeholder="Tên danh mục"
          value={name}
          onChange={this.onChange}
          ></input>
          <td><select 
          name='status'
          onChange={this.onChange}
          value={status}
          >
              <option value={false}>Ẩn</option>
              <option value={true}>Hoạt động</option>
            </select></td>
           <td><select 
          name='cateId'
          onChange={this.onChange}
          value={cateId}
          >
              {this.showcate(cates)}
            </select></td>

             <select
          name='categoryId'
          onChange={this.onChange}
          value={categoryId}
          >   {this.showcategories(categories)}
             </select>
         </div>
        <button type="submit" className="btn btn-primary">Thêm</button>&nbsp;
        <button type="button"
         className="btn btn-danger"> Hủy</button>
        </form>
        </div>
        </div>
        
		)
	
}
        showcate(categories){
       var result1=null;
       if(categories.length>0){
        result1=categories.map((categories,k)=>{
        
        return(
           <option value={categories.id}  key={k}>{categories.cateName}  </option>
          );
      
        });
       }
       return result1;
      }
       showcategories(categories){
       var result=null;
       if(categories.length>0){
        result=categories.map((categories,k)=>{
        return(
           <option value={categories.id} key={k}
                         onClick={this.onClick} 
           >{categories.categoryName}  </option>
          );
        });
       }
       return result;
      }
}
export default AddCateItem;