import * as types from './../constants/ActionType'

export const actAddToCart=(product,quantity)=>{

	 return{
	 	type:types.ADD_TO_CART,
	 	product,
	 	quantity
	 }
}
export const actDeleteProductInCart=(product)=>{
	return{
		type:types.DELETE_PRODUCT_IN_CART,
		product
	}
}
export const actUpdateProductInCart=(product,quantity)=>{

	 return{
	 	type:types.UPDATE_PRODUCT_IN_CART,
	 	product,
	 	quantity
	 }
}
export const actDestroyCart=()=>{

	 return{
	 	type:types.DESTROY_CART,
	 }
}
