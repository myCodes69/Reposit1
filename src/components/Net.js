import React from "react";
export default  class Net extends React.Component{
    state={
        nm :'',
        eid:'',
        ph:[]
    }
    mychng=(e)=>{
    
   this.setState({[e.target.name]:[e.target.value]})
        
    }
    myfuc=(e)=>{
        this.state.ph = e.target.value
        console.log(this.state.ph.length);
        console.log(this.state.ph);
    }
    mysubmit=(e)=>{
        e.preventDefault()
        let c=0
        
        if(this.state.nm === ''){
            c+=1
            alert('Enter your name')
        }
        if(this.state.eid === ''){
            c+=1
            alert('Enter your email Id')
        }
        if(document.getElementById('coun').value == ''){
            alert('Select a country')
        }
        if(this.state.ph.length != 10){
            alert('Must be a 10 digit number')
            c+=1
        }
        
       
        if(c==0){
            alert('Form submitted successfully')
        }
    }
   
    render(){
        return(<>
            <form name="f" onSubmit={this.mysubmit}>
         <table>
             <tr>
             <th colspan="2">Sign up</th>
           </tr>
           <tr>
               <td>Enter name &nbsp;</td>
               <td><input type="text"  name="nm" onChange={this.mychng}/></td>
           </tr>
           <tr>
            <td>Enter emailId &nbsp;</td>
            <td><input type="email" name="eid" onChange={this.mychng}/></td>
        </tr>
        <tr>
            <td>Enter Phoneno &nbsp;</td>
            <td><input type="number"  placeholder="Without country code" onKeyUp={this.myfuc} name="ph"/></td>
        </tr>
        <tr>
            <td colspan="2"><select id="coun"  >
                <option value="">Choose Your Country</option>
                <option value="ind">India</option>
                <option value="pak">Pakistan</option>
                <option value="Aus">Australia</option>
                <option value="new">New Zealand</option>
                <option value="SA">South Africa</option>
            </select></td>
            
        </tr>
        <tr><td colspan="2"><h3>Sample Images</h3></td></tr>
        <tr>
            <td colspan="2" ><img src="http://adwallpapers.xyz/uploads/posts/70733-northern-norway-4k-ultra-hd-wallpaper__nature.jpg" height={100} width={100}/>
               <img src="https://wallpaperaccess.com/full/496881.jpg" height="100" width="100"/>
               <img src="https://images.hdqwalls.com/download/windows-xp-bliss-4k-lu-1920x1080.jpg" height="100" width="100"/>
            </td>
        </tr>
        <tr>
            <td colspan="1"><mark>Description - ck editor</mark></td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit" value="Sign up" /></td>
        </tr>
            </table>


     </form>
     <br/>
     <table border="5">
          <tr>
              <th colSpan='2'>Listing in Table</th>
          </tr>
          <tr>
              <th >Country</th>
              <th>Capital</th>
              
          </tr>
          <tr>
              <td ><ol><li>India</li>
             <li>UK</li>
             <li>Spain</li>
            </ol>
            </td>
            <td>
        <ul>
            <li> New Delhi</li>
            <li>London</li>
            <li>Madrid</li>
        </ul>
        </td>
          </tr>
      </table>
        </>)
    }
}