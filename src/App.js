//import React from "react";
//import "./App.css";
//simple string
//const ei = < h1 > Hello Krishna < /h1>
//math expression
//const ei = < h1 > { 10 + 20 } < /h1>
//variable
// const name = "Krishna";
// const ei = < h1 >
//     Hello { name } <
//     /h1>

// //FUNCTION
// function show(name) {
//     return name;
// }

// const ei = < h1 > Hello { show("Krishna") } < /h1>
// export default ei;


//USING ATTRIBUTES
// const el = < h1 className = "bg" > Hello < /h1>
// export default el;



//useState Hook
// import React, { useState } from 'react';

// function App() {
//     const [name, setName] = useState("Rahul");
//     const [roll, setRoll] = useState(101);
//     const handleClick = () => {
//         setName("Geekyshow");
//         setRoll(105);
//     };

//     return ( <
//         React.Fragment >
//         <
//         h1 > Name: { name } < /h1> <
//         h2 > Roll: { roll } < /h2> <
//         button type = "button"
//         onClick = { handleClick } >
//         Change <
//         /button> < /
//         React.Fragment >

//     );
// }
// export default App;





//CUSTOM HOOK
// import React from "react";
// import useCustomCounter from "./custom";

// function App() {
//     const data = useCustomCounter();

//     return ( <
//         React.fragament >
//         <
//         h1 > Count Up: { data.count } < /h1> <
//         button type = "button"
//         onClick = { data.handleIncrement } > Increment < /button>

//         <
//         /React.fragament>
//     );
// }

//export default App;




//LIST
// import React, { Component } from 'react'
// export default class App extends Component {

//     render() {
// const arr = [10, 20, 30, 40];

//its too a big method
// const newArr = arr.map((num) => {
//     console.log("Num = ", num)
//     return <li > { num * 2 } < /li>
// });
// console.log("OldArray = ", arr)
// console.log("NewArray = ", newArr)
// return ( <
//     ul > { newArr } <
//     /ul>
// );
// const arr = this.props.numbers;
// return ( <
//     ul > {
//         arr.map(num => < li > { num } < /li> )}


//             <
//             /ul>
//         );
//     }
// }







// EXTERNAL CSS
// import React, { Component } from 'react'
// import "./App.css"
// import User from "./user"
// export default class App extends Component {
//     render() {
//         return ( <
//             React.Fragment >
//             <
//             h1 className = "text" > Hello App < /h1> <
//             User / >

//             <
//             /React.Fragment>
//         )
//     }
// }


// import React, { Component } from 'react'
// import Welccm from './Welcm'
// export default class App extends Component {
//     render() {
//         return ( < div className = "App" >
//             <
//             Welcm / >
//             <
//             /div>


//         )
//     }
//}


// import React, { Component } from 'react'
// import FragmentDemo from './FragmentDemo'

// export default class App extends Component {
//     render() {
//         return ( < div className = "App" >
//             <
//             FragmentDemo / >
//             <
//             /div>
//         )
//     }
//}







//WEBSITE
// import React from 'react';
// import './Website.css';
// import Website from './Website'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// function App() {
//     return ( < >

//         <
//         Router >

//         <
//         Website / >
//         <
//         Switch >
//         <
//         Route path = '/'
//         exact / >
//         <
//         /Switch>


//         <
//         /Router> < / >

//     );
// }

// export default App;



// import React, { Component } from 'react'
// import Skyage from './Skyage'

// export default class App extends Component {
//     render() {
//         return ( < div className = "App" >
//             <
//             FragmentDemo / >
//             <
//             /div>
//         )
//     }
// }

// import React, { Component } from 'react'
// import "./Flight.css"
// import User from "./Flight"
// export default class App extends Component {
//     render() {
//         return ( <
//             React.Fragment >
//             <
//             h1 className = "text" > Hello App < /h1> <
//             User / >

//             <
//             /React.Fragment>
//         )
//     }
// }


//----------------------FLIGHT--------------------------------------------------------------------------------------------



//  import React, { Component,useEffect } from 'react'
// import "./Flight.css"
// // import Flight from "./Flight"
// export default class App extends Component {


//     render() {
//         return (

// 		<React.Fragment>
// <h1 className="text"> Welcome </h1>


// <div id="flights-container">

// <form>
// 	<fieldset>
// 		<legend>Find a Flight</legend>

// 		<div>
// 			<label for="from-airport">From:</label>
// 			<input id="from-airport" autocomplete="off" required/>
// 		</div>
// 		<div>
// 			<label for="to-airport">To:</label>
// 			<input id="to-airport" autocomplete="off" required/>
// 		</div>
// 		<div>
// 			<label for="date">Date:</label>
// 			<input type="date" id="date" placeholder="yyyy-mm-dd" required/>
// 		</div>
// 		<div>
// 			<label for="results">Max # of Results:</label>
// 			<input type="number" id="results" value="10" min="10" max="100" step="10"/>
// 		</div>

//   <div className="range-slider">
//     <span id="rs-bullet" className="rs-label">0</span>
//     <input id="rs-range-line" className="rs-range" type="range" value="0" min="0" max="10,000"/>

//   </div>

//   <div id="box-minmax">
//     <span></span><span>10,000</span>
//   </div>


// 		<div>
// 			<label for="order-by">Order By:</label>
// 			<select id="order-by">
// 				<option value="0">Arrival Time</option>
// 				<option value="1">Departure Time</option>
// 				<option value="2">Duration</option>
// 			</select>
// 		</div>
// 		<div>
// 			<button id="lookup" className="ui-priority-primary">Lookup</button>
// 		</div>
// 	</fieldset>
// </form>

// </div>

// <script>

// {/* var rangeSlider = document.getElementById("rs-range-line");
// var rangeBullet = document.getElementById("rs-bullet");

// rangeSlider.addEventListener("input", showSliderValue, false);

// function showSliderValue() {
//   rangeBullet.innerHTML = rangeSlider.value;
//   var bulletPosition = (rangeSlider.value /rangeSlider.max);
//   rangeBullet.style.left = (bulletPosition * 578) + "px";
// } */}





// </script>

//         </React.Fragment>


//         );
//     }
// }




// ---------------------------------Flight by function-----------------------------
import React, { useEffect, useState } from 'react'
import "./Flight.css"
import Flight from "./Flight"


const App = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch('./Flights.json');

        const data = await response.json();

        console.log(data);


    }
    useEffect(() => {
        getUsers();
    }, []);



    const [origincity, setOriginCity] = useState("");
    const [desticity, setDestiCity] = useState("");
    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { origincity: origincity, desticity: desticity };

        setallEntry([...allEntry, newEntry]);
        console.log(allEntry);

    }





    return (

        <
        React.Fragment >
        <
        h1 className = "text" > Welcome < /h1>


        <
        div id = "flights-container" >

        <
        form id = "form"
        action = ""
        onSubmit = { submitForm } >
        <
        fieldset >
        <
        legend > Find a Flight < /legend>

        <
        div >
        <
        label type = "text"
        placeholder = "Enter Original City"
        id = "from-airport" > From: < /label> 

        <
        input type = "text"
        id = "from-airport"
        autoComplete = "off"
        value = { origincity }
        onChange = {
            (e) => setOriginCity(e.target.value)
        }
        required / >
        <
        /div>

        <
        div >
        <
        label id = "to-airport" > To: < /label> <
        input type = "text"
        placeholder = ""
        id = "desticity"
        autoComplete = "off"
        value = { desticity }
        onChange = {
            (e) => setDestiCity(e.target.value)
        }
        required / >
        <
        /div> 

        <
        div >
        <
        label id = "date" > Date: < /label> <
        input type = "date"
        id = "date"
        placeholder = "yyyy-mm-dd"
        required / >
        <
        /div>  <
        div >
        <
        label id = "results" > Max# of Results: < /label> <
        input type = "number"
        id = "results"
        value = "10"
        min = "10"
        max = "100"
        step = "10" / >
        <
        /div>

        <
        div className = "range-slider" >
        <
        span id = "rs-bullet"
        className = "rs-label" > 0 < /span> <
        input id = "rs-range-line"
        className = "rs-range"
        type = "range"
        value = "0"
        min = "0"
        max = "10,000" / >

        <
        /div>

        <
        div id = "box-minmax" >
        <
        span > < /span><span>10,000</span >
        <
        /div>


        <
        div >
        <
        button types = "submit"
        id = "lookup" >
        Search For Flight < /button> < /
        div >
        <
        /fieldset> 

        <
        /form >

        <
        /div>

        <
        div > {
            allEntry.map((curElem) => {
                    return ( <
                            div className = "showDataStyles" >
                            <
                            p > { curElem.origincity } < /p> <
                            p > { curElem.desticity } < /p>  { < div > < p > {} < /p >


                            <
                            /div>

                        } <
                        /
                    div >
                )
            })
    }


    <
    /div>






    <
    /React.Fragment>


)
}


export default App