import React from "react";

export default  class Regi extends React.Component{
    state={
        nam:'',
        nm_er:'',
        ag:'',
        ag_er:'',
        lan:[],
        lan_er:'',
        gen:'',
        gen_er:''    
    }
    mych=(e)=>{
        if(e.target.name ==='lan'){
            if(e.target.checked){
              this.state.lan.push(e.target.value)
              console.log(`Current ${this.state.lan}`);
              console.log(this.state.lan);
            }
            else{
                let index=this.state.lan.indexOf(e.target.value)
                this.state.lan.splice(index,1)
                console.log(`Current ${this.state.lan}`);
                console.log(this.state.lan);
            }
        }
        else{
            this.setState({[e.target.name]:[e.target.value]})
        }
    }
    mysub=(e)=>{
        let c=0
        e.preventDefault();
        if(this.state.nam==''){
           this.setState({nm_er:'Name must not be empty'})
           c+=1
        }
        else{
            this.state.nm_er=''
        }
        if(this.state.ag==''){
            this.setState({ag_er:'Age must not be empty'})
            c+=1
        }
        else{
            this.state.ag_er=''
        }
        if(this.state.lan == ''){
            this.setState({lan_er:'Language must not be empty'})
            c+=1
        }
        else{
            this.state.lan_er=''
        }
        if(this.state.gen==''){
            this.setState({gen_er:'Gender must not be empty'})
            c+=1
        }
        else{
            this.state.gen_er=''
        }
        if(c==0){
            alert('Form submitted successfully')
        }
        else{
            return false
        }
    }
    render(){
       // const {nam,ag}=this.props
        return (<>
            <form onSubmit={this.mysub}>
                Enter Name : <input type="text" onChange={this.mych} name="nam" ></input>   <span><strong>{this.state.nm_er}</strong></span>
                <br/>
                Enter Age : <input type="number" onChange={this.mych} name="ag"  ></input>    <span><strong>{this.state.ag_er}</strong></span>
                <br/>
                Languages Known :  <input type="checkbox" onChange={this.mych} value="Eng" name="lan"/> English
                                   <input type="checkbox" onChange={this.mych} name="lan" value="Hindi"/>  Hindi
                                   <input type="checkbox" onChange={this.mych} name="lan" value='Beng'/>  Bengali
                
               <span><strong>{this.state.lan_er}</strong></span>
                <br/>
                Choose your gender : <input type="radio" onChange={this.mych} name="gen"/>Male
                                    <input type="radio" onChange={this.mych} name="gen"/>Female
                                   <input type="radio" onChange={this.mych} name="gen"/>Others
                       <span><strong>{this.state.gen_er}</strong></span> 
                <br/>
                <input type="submit" value="Register"></input>
            </form>
        </>)
    }
}