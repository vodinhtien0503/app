import React from 'react';
import Callapi from './../ultils/apiCaller';
class AddCate extends React.Component{
      constructor(props){
        super(props);
        this.state={
          id:'',
          name:'',
          status:'',
          cateId:''
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
         var {name, status,cateId}=this.state;
        Callapi(`categories/${cateId}/cate`,'POST',{
          categoryId:cateId,
          cateName:name,
          status:status
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
    var {name,status,cateId}=this.state;
    console.log(cateId);
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
              <option value={1}>PHÂN PHỐI ĐIỆN HẠ THẾ</option>
              <option value={2}>ĐIỀU KHIỂN VÀ TỰ ĐỘNG HÓA</option>
               <option value={3}>THIẾT BỊ TRUNG THẾ</option>
              <option value={4}>CÁP ĐIỆN,THANH CẢI,PHỤ KIỆN ĐẤU NỐI</option>
               <option value={5}>THIẾT BỊ CHIẾU SÁNG</option>
              <option value={6}>BỘ LƯU ĐIỆN UPS</option>
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
export default AddCate;