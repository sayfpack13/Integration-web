class App extends React.Component{
	 h1_style={color:"red",fontSize:30,fontStyle:"bold",textAlign:"center"};
	 btn_style={color:"red",fontSize:30,padding:20,marginTop:20,display:"block"};
	 name_style={color:"red",fontSize:25,height:50,textAlign:"center",display:"block"};
	
	
	
	constructor(props){
		super(props);
		this.state={msg:"please sign up !!",btn_msg:"Sign Up",name:"",name_style:this.name_style,img:"chap2/signup.png"};
		
	}
	
	btnClick=()=>{
		if(this.state.btn_msg=="Done"){
		this.setState({msg:"please sign up !!",btn_msg:"Sign Up",name:"",img:"chap2/signup.png"});
		
		let name_style2 = Object.assign({}, this.state.name_style);
		name_style2.display = 'block';  
		this.setState({name_style:name_style2});
		
		}else{
		this.setState({msg:"Welldone "+this.state.name+" !!",btn_msg:"Done",img:"chap2/done.png"});
		
		let name_style2 = Object.assign({}, this.state.name_style);
		name_style2.display = 'none';  
		this.setState({name_style:name_style2});
		
		}
	}
	
	mouseOver=()=>{
		this.btnClick();
	}
	
	handleNameChange=(event)=>{
		this.setState({name:event.target.value});
	}
	
	render(){
		return (
		<>
		<h1 style={this.h1_style}>{this.state.msg}</h1>
		
		<input style={this.state.name_style} type="text" placeholder="name" onChange={this.handleNameChange}></input>

		<button style={this.btn_style} onMouseOver={this.mouseOver} onClick={this.btnClick}>{this.state.btn_msg}</button>
		
		<img src={this.state.img} />
		</>
		);
	}
}


const app=<App/>;
ReactDOM.render(app,document.getElementById("container"));


let message;
message=()=>{
	return "Test message...";
}


let test_msg=document.createElement("div");
test_msg.id="test";
test_msg.style="margin-top:50px;font-size:30px;";
test_msg.innerHTML=message();
document.getElementById("container").appendChild(test_msg);