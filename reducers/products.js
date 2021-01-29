var initalState=[ 

 {  id:1,
 	title:'Title1',
     img:'./../ITEM.jpg',
     price:1000000,
     new:"Mới",
     code:"ABC1",
     discount:'abc'
    },
    {
     id:2,	
    title:'Title2',
     img:'./../ITEM.jpg',
     price:2000000,
    new:"Mới",
    code:"ABC2",
     discount:'ab'
    },
    {
    	id:3,
    title:'Title3',
     img:'./../ITEM.jpg',
     price:3000000,
     new:"",
     code:"ABC3",
     discount:'abc'    

   },
    {
     id:4,
    title:'Title4',
     img:'./../ITEM.jpg',
     price:4000000,
     new:"Mới",
     code:"ABC4",
     discount:'abc'

    },
    { 
     id:5,
    title:'Title5',
     img:'./../ITEM.jpg',
     price:5000000,
     new:"Mới",
     code:"ABC5" ,
     discount:'abc'   

    },
    {
    id:6,
    title:'Title6',
     img:'./../ITEM.jpg',
     price:6000000,
     new:"",
     code:"ABC6",
     discount:'abc'
    },
    {
     id:7,
     title:'Title7',
     img:'./../ITEM.jpg',
     price:7000000,
     new:"Mới",
     code:"ABC7",
     discount:'ab'
    },
    {
     id:8,
    title:'Title8',
     img:'./../ITEM.jpg',
     price:8000000,
     new:"",
     code:"ABC8",
     discount:'ab'
    }
];

const products =(state=initalState,action)=>{
	switch(action.type)
	{
		default : 
		return [...state];
	}
}
export default products;