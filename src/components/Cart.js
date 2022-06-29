import React from "react";
import axios from "axios";
class Cart extends React.Component{
    state={
        crt:[],
    };
    componentWillMount(){
        axios.get('https://fakestoreapi.com/carts')
        .then(re=>{
            let crt1=[];
            crt1=re.data;
            this.setState({crt:crt1
            });
            console.log(re.data);
        }).catch(err=>{
            console.log("Error :"+err);
        })
    }
    render(){
        let mysle={
            margin:'10px 0px 20px 55px'
        }
        let me={
            color:'brown',
            textalign:'center',
            fontstyle: 'italic',width:' 50%', height: '30%',border: '5px inset green'
        }
        let met={
            marginLeft:'310px'
        }
        return(
            <div >
                <h1 style={met}>
                    CART INFORMATIONS ARE GIVEN BELOW
                </h1>
                <br></br>
                <br></br>
                <br></br>
                
                <div style={{marginLeft:'455px'}}>
                   <table>
                   <tr>
                       <th>ID</th>
                       <th>userId</th>
                       <th>Date&Time</th>
                       </tr>
                       {/* <th>time&date</th> */}
                       {this.state.crt.map(i=>{
                           return(
                           <tr>
                           <td>{i.id}</td>
                           <td>{i.userId}</td>
                           <td>{i.date}</td>
                           </tr>)
                         
                        
                       })}
                   </table>
                </div>
            </div>
        );
    }
    
}
export default Cart;