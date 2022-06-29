import axios from "axios"
import React from "react"



class Delete extends React.Component{
    state={
        total:[]
    }
      componentDidMount(){
          axios.get('http://jsonplaceholder.typicode.com/posts/1').then(res=>{
             this.setState({total:res.data})
          }).catch(e=>{
              console.log(e);
          })
      }
      del=(id)=>{
        //  let d=document.getElementById('s').value
       if(window.confirm('are u want to delete ?')){
          axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`).then(r=>{
              console.log(r)
          }).catch(e=>{
              console.log(e)
          })
       }
          this.componentDidMount()
      }
      render(){
          return(<>
             <table>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Department</th>
                 </tr>
                 {/* {
                   this.state.total.map((val)=>{
                       return(<><tr><td>{val.id}</td>
                        <td> {val.userId}</td>
                         <td> {val.title}</td>
                          <td> {val.body}</td>
                           
                           <td><button onClick={this.del(val.id)}>Delete</button></td>
                            </tr></>)
                   })
               } */}
             </table>
             {/* <select id="s">
             
               <option value="1">1</option>
               <option value="2">2</option>
             </select> */}
             {/* <button onClick={this.del(2)}>update</button> */}
          </>)
      }
}
export {Delete}