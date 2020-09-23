import React, { Component } from 'react';
import {storeProducts,detailProduct} from './Data'
const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        products:[],
        productdetail:detailProduct,
        cart:[],
        modelOpen:false,
        modelData:detailProduct,
        cartTotal:0,
        cartTax:0,
        cartSubTotal:0
      }
    }
    componentDidMount()
    {
        this.setProducts();
    }
    increment=(id)=>{
      let tempCart=[...this.state.cart];
      let selectedItem = tempCart.find(item=>item.id===id);
      const indexofselectedItem = tempCart.indexOf(selectedItem);

      const product = tempCart[indexofselectedItem];

      product.count+=1;
      product.total= product.count*product.price;
      this.setState({
        count:[...tempCart]
      },()=>{this.addTotals();})


    }
    decrement=(id)=>{
        let tempCart = [...this.state.cart];
        let selectedItem = tempCart.find(item=>item.id===id);
        if(selectedItem.count<=1)
        {
            this.removeItem(id);
            console.log(`Item with Id=${id} removed successfully`);
        }
        else{
            const indexofselectedItem=tempCart.indexOf(selectedItem);
            const product = tempCart[indexofselectedItem];
            product.count-=1;
            product.total = product.count*product.price;
            this.setState({
              cart:[...tempCart]
            },()=>{
              this.addTotals();
            })
        }
    }
    removeItem=(id)=>{
      let tempProducts=[...this.state.products];
      let tempCart = [...this.state.cart];

      tempCart = tempCart.filter(item=>item.id!==id)
      const index = tempProducts.indexOf(this.getProd(id));
      let removedItem = tempProducts[index];
      removedItem.inCart=false;
      removedItem.count=0;
      removedItem.total=0;
      this.setState({
        cart:[...tempCart],
        products:[...tempProducts]
      },()=>{
        this.addTotals();
      })
    }
    clearCart=()=>{
      this.setState({
        cart:[]
      },()=>{
          this.setProducts();
          this.addTotals();
      })
    }
    addTotals=()=>{
      let subtotal = 0 ;
      this.state.cart.map(item=>(subtotal+=item.total));
      let tempTax = subtotal * 0.1 ;
      let tax = parseFloat(tempTax.toFixed(2));
      let total = subtotal + tax ;
      this.setState({
        cartSubTotal:subtotal,
        cartTax:tax,
        cartTotal:total
      })
    }
    openModel=(id)=>{
      const temp = this.getProd(id);
      this.setState({
        modelOpen:true,
        modelData:temp
      },()=>console.log("ModelData:",this.state.modelData))
    }
    closeModel=()=>{
      this.setState({
        modelOpen:false
      })
    }
    setProducts=()=>
    {
      let temp=[];
      storeProducts.forEach(item=>{
        const ttt={...item};
        temp=[...temp,ttt];
        console.log("array madhe:",temp);
      });
      this.setState({
                      products:temp
      });
    }
    getProd=(id)=>
    {
        const prod = this.state.products.find(item=>item.id===id);
        return prod;
    }
    showDetails=(id)=>
    {
      const prod=this.getProd(id);
      this.setState({
            productdetail:prod
        },
        ()=>console.log("Show Details Called"))
    }
    addtocart=(id)=>
    {
        const tempprod = [...this.state.products];
        const index = tempprod.indexOf(this.getProd(id));
        const product = tempprod[index];
        console.log("product",product);
        product.count=1;
        product.inCart = true;
        product.total = product.price;
        console.log("product",product);
        this.setState(()=>{
         return{products:tempprod,cart:[...this.state.cart,product]}
    },this.addTotals)
  }
   
    
  render() {
    return (
        <ProductContext.Provider value={
                                {...this.state,
                                addtocart:this.addtocart,
                                showDetails:this.showDetails,
                                closeModel:this.closeModel,
                                openModel:this.openModel,
                                increment:this.increment,
                                decrement:this.decrement,
                                removeItem:this.removeItem,
                                clearCart:this.clearCart}}>
        
            {this.props.children}
        </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}