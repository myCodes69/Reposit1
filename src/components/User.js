import React from "react";
import axios from "axios";
class User extends React.Component{
    state={
       user:[]
    }
    componentWillMount(){
        axios.get('https://fakestoreapi.com/users')
        .then(res=>{
            let user=res.data
            this.setState({user});
            console.log(res.data);
        }).catch(err=>{
            console.log("error :"+err);
        })
    }
    render(){
        let mysle={
            margin:'10px 0px 20px 5px'
        }
        let met={
            marginLeft:'210px'
        }
        return(
            <div>
            <h1 style={met}>Users' Information are given below</h1>
            <div style={{marginLeft:'540px'}}>
                    <table  border="4" bgcolor="lightpink" cellspacing="10px" cellpadding="10px">
                        <tr>
                            <th>
                                Firstname 
                            </th>
                            <th>
                            Lastname
                            </th>
                            <th>
                            UserId
                            </th>
                            <th>Location(city)</th>
                        </tr>
                        
                            {this.state.user.map(item=>{
                  return(
                      
                     <tr>
                         <td>{item.name.firstname}</td>
                         <td>{item.name.lastname}</td>
                         <td>{item.username}</td>
                         <td>{item.address.city}</td>
                  
                     </tr>
                  )
              })}
                           
                    </table>
                </div>
            </div>
        );
    }
}
export default User;