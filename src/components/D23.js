import axios from "axios"
import React from "react"


class R1 extends React.Component{
   state={
       list:[]
   }
    show=()=>{
       axios.get('http://localhost:5500/blogs').then(res=>{
           console.log(res.data);
          this.setState({list:res.data})
            console.log(this.state);            
       }).catch(e=>console.log(e))}
    render(){
        return(<>
        <button onClick={this.show}>Show</button>
        <table >
        {/* <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Comment</th>
        </tr> */}
           
               {
                   this.state.list.map(val=>{
                       return(<><tr><td>{val.id}</td>
                        <td> {val.nam}</td>
                         <td> {val.ph}</td>
                          <td> {val.email}</td>
                           <td> {val.comm}</td>
                            </tr></>)
                   })
               }
               {/* {
                   this.state.list.map(val=>{
                       return(<><tr><td>{val.nam}</td></tr></>)
                   })
               }
               {
                   this.state.list.map(val=>{
                       return(<><tr><td>{val.ph}</td></tr></>)
                   })
               }
               {
                   this.state.list.map(val=>{
                       return(<><tr><td>{val.email}</td></tr></>)
                   })
               }
               {
                   this.state.list.map(val=>{
                       return(<><tr><td>{val.comm}</td></tr></>)
                   })
               }
            */}
           </table>
        </>)
    }
}
export {R1}