import React from 'react';
import Callapi from './../ultils/apiCaller';
class AddCagories extends React.Component{
      constructor(props){
        super(props);
        this.state={
          id:'',
          name:'',
          status:'',
          header:''
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
      Onsave=(e)=>{
         e.preventDefault();
         var {name, status}=this.state;
        Callapi('categories','POST',{
          categoryName:name,
          status:status,
          header:name
        }).then(res=>{
          console.log(res);
        })
        this.setState({
          id:'',
          name:'',
          status:'',
          header:''
        });
      }

	render() {
    var {name,status}=this.state;
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
         </div>
        <button type="submit" className="btn btn-primary">Thêm</button>&nbsp;
        <button type="button"
         className="btn btn-danger"> Hủy</button>
        </form>
        </div>
        </div>
        
		)
	}
}
export default AddCagories;