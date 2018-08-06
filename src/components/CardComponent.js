import React, {Component} from "react";
import ReactDOM from "react-dom";


class CardComponent extends Component {

    render(){
      const {
        title,
        subtitle,
        img
      } = this.props
      return (
        <div className="cardTile">
          <div className="cardContent">
              <h3> {title} </h3>
              <h4> {subtitle} </h4>
          </div>
          <div className="image">
              <img src={img} />
          </div>
        </div>
      )
    }


}


export default CardComponent;
