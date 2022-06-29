import React from "react"


let ref1=React.createRef()
class V extends React.Component{
    // componentDidMount(){
    //     setTimeout(() => {
    //         ref1.current.innerText='created using reference'
    //         document.getElementById('i').value=100
    //     }, 4000);
    // }
   constructor()
   {
        super()
       this.state={
        i1:'',
        i2:''
    }

}
    mychn=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
        console.log(this.state);
    }

    render(){
        return(<>

            
          Text1 : <input name="i1" type='text' onChange={this.mychn}/>
            <br/>
          Text2 : <input name="i2" type='text' onChange={this.mychn} />
          <br/>
          {this.state.i1} {this.state.i2}
        </>)
    }
}

console.log(1);
console.log();

export default V
