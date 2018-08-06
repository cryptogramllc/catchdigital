import React from "react";
import ReactDOM from "react-dom";
import MenuComponent from './components/MenuComponent';
import FilterComponent from './components/FilterComponent';
import TitleComponent from './components/TitleComponent';
import CardComponent from './components/CardComponent';
import LogoComponent from './components/LogoComponent';


import './styles/main.scss';


const Index = () => {


  return (

    <div className="main_cont">
          <div className="masthead">
               <MenuComponent  />
               <LogoComponent
                 img="../assets/card-1.png"
               />

          </div>

         <TitleComponent
           text="Work"
         />
         <FilterComponent />
         <div className="cardCont">
             <CardComponent
              title="360 degree flight experience"
              subtitle="Thomas cook Airlines"
              img="../assets/card-1.png"
             />

             <CardComponent
              title="Going beyond frontiers"
              subtitle="21 Dec 2016"
              img="../assets/card-2.png"
             />

             <CardComponent
              title="The Lobster"
              subtitle="Picture House Entertainment"
              img="../assets/card-3.png"
             />

             <CardComponent
              title="Cats on a plane"
              subtitle="Thomas Cook Airlines"
              img="../assets/card-4.jpg"
             />

             <CardComponent
              title="DADIs- Best User of VR"
              subtitle="21 Dec 2016"
              img="../assets/card-5.png"
             />

             <CardComponent
              title="Ronaldo's Debut Fragrance"
              subtitle="Christiano Ronaldo Fragrances"
              img="../assets/card-6.png"
             />
        </div>
    </div>
  );

};


ReactDOM.render(<Index />, document.getElementById("index"));
