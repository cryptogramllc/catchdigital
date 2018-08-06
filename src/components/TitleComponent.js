import React, {Component} from "react";
import ReactDOM from "react-dom";



class TitleComponent extends Component {


   render(){
     const {
       text
     } = this.props

     return(
       <h1 className="headline-1">
          {text}
       </h1>
     )
   }

}

export default TitleComponent;
