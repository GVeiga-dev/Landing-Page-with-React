import React from "react"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Cards = function () {
	return (
		<>
	<div className="card" style={{width: "18rem"}}>
  <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/03/gato-botas-ultimo-deseo-2649871.jpg?itok=mgMGhFC8" className="card-img-top" alt=".."/>
  <div className="card-body">
    <h5 className="card-title">El gato mas popular</h5>
    <p className="card-text">Es un gato que lucha como un mosquetero, aunque lo que más se caracteriza de él son sus botas, que es lo que le dan nombre. Nació en España. Poniendo una cara triste puede conseguir todo lo que quiere, haciendo que los demás le vean como un "minino indefenso".</p>
    <a href="#" className="btn btn-primary">"Lámeme" para saber mas...</a>
  </div>
</div>
	</>);
};

export default Cards;