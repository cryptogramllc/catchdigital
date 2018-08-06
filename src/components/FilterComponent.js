import React, {Component} from "react";
import ReactDOM from "react-dom";


class Filter extends Component {
  constructor(){
    super();
    this.state = { filterOpen : false}
  }

  toggleFilter = () => {
      this.state.filterOpen ?
      this.setState((state) => ({ filterOpen: false})) :
      this.setState((state) => ({ filterOpen: true}))
  }

  render(){
    return(
      <div className="filter">
        <button onClick={(e) => this.toggleFilter()}> SHOW FILTERS </button>
        <nav className={` filtersOpt ${this.state.filterOpen}`}>
          <a href="#"> Opt 1</a>
          <a href="#"> Opt 2</a>
          <a href="#"> Opt 3</a>
          <a href="#"> Opt 4</a>
          <a href="#"> Opt 5</a>
          <a href="#"> Opt 6</a>
        </nav>
      </div>
    )
  }
}


export default Filter;
