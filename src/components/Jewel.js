import React from "react";
import axios from "axios";
class Jewel extends React.Component{
    state={
        jew:[],
        pri:'$',
        rt:'(x/5)',
        Ava:'Available',
        x:'x',

    };
    componentWillMount(){
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>{
            let jew;
            jew=res.data;
            this.setState({jew})
        }).catch(err=>{
            console.log("error :"+err)
        })
    }
    render(){
        return(<div >
        <h1 style={{marginLeft:'350px',textAlign:'center'}}>Sample jewelery items</h1>
       
               <ol style={{width:'1350px'}}>
                {this.state.jew.map(item=>{
                    return(
                        <li >
                        <img src={item.image} style={{width:'7%'}}/>----{item.title}---{item.price}{this.state.pri}----{item.rating.rate}{this.state.rt}----{this.state.x}{item.rating.count} {this.state.Ava}
                            <hr></hr>
                        </li>
                    )
                })}
            </ol>
            
        </div>)
    }
}
export default Jewel;