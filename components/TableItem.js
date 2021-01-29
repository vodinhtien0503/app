import React from 'react';
import Callapi from './../ultils/apiCaller'
import $ from 'jquery'

  class TableItem extends React.Component{
    constructor(props){
      super(props);
      this.state={
        isClick:false,
        index1:'',
        id:'',
        name:'',
        status1:''
      };
    }
  onDelete=(id)=>{
    if(confirm('Bạn có muốn xóa?')){//eslint-disable-line
      this.props.onDelete(id);
    }
  }
  onClick(id){
  var{category,index}=this.props; 
     // console.log(id);
      //console.log(category.id);  
      //console.log(index);  
      $(".panelUpdate").animate({width:'toggle'},500);
    this.setState({
      isClick:true,
      index1:index,
      name:category.categoryName,
      id:category.id,
      status1:category.status
    });
    
  }
 
      onChange=(e)=>{
        var target=e.target;
        var name=target.name;
        var value =target.value;
        this.setState({
          [name]:value
         });
      }
      Onsave=(e)=>{
        e.preventDefault();
        var{category,index}=this.props;
         var {name, status1}=this.state;
         if(category.id){
        Callapi(`categories/${category.id}`,'PUT',{
          categoryName:name,
          status:status1
        }).then(res=>{
          console.log(res);
        });
      }
        this.setState({
          id:'',
          name:'',
          status1:''
        });
      }


       

    render() {
      var{category,index}=this.props;
       var {isClick,index1,name,status1,id}=this.state;
       //console.log(this.state.isClick);
       //console.log(this.state.index1);
       
        
        
       
      return (
        <tr >
          <td>{category.id}</td>
          <td>{category.categoryName}</td>
          <td>{category.status?'Hoạt động':'Ẩn'}</td>
          <td>
          <button type="button" 
          id="click" 
          value="show" 
          className="btn btn-warning update"
          onClick={()=>this.onClick(category.id)}
          >Sửa</button>&nbsp;  
          <button type="button"
           className="btn btn-danger"
           onClick={()=>this.onDelete(category.id)}>Xóa</button>
          </td>
          <td> 
        <div className="panelUpdate">
         <form onSubmit={this.Onsave}>
        <div class="form-group">
          <label>Tên danh mục</label>
          <input class="form-control" 
          type="text" 
          name="name" 
          placeholder="Tên danh mục"
          value={name}
          onChange={this.onChange}
          ></input>
          <td><select 
          name='status1'
          onChange={this.onChange}
          value={status1}
          >
              <option value={false}>Ẩn</option>
              <option value={true}>Hoạt động</option>
            </select></td>
         </div>
        <button type="submit" 
        class="btn btn-warning"
        >Sửa</button>&nbsp;
        <button type="button"
         class="btn btn-danger"> Hủy</button>
        </form>
        </div>
       </td>
       </tr>
      )
    }
  }
export default TableItem;