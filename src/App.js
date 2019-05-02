import React from 'react';
import './App.css';
import ButtonSimpson from './component/ButtonSimpson/index'
import CartSimpson from './component/CartSimpson/index'



const simpson = {
  
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
    
   
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={citation: simpson};
  };

  lesSimpson = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data =>{
      this.setState({
        citation: data[0]
      });
    });
  }

  render(){
    return(
      <div>
        <CartSimpson citation={this.state.citation} />
        <ButtonSimpson massimo={this.lesSimpson} />
    </div>


    )
  }
}


export default App;
