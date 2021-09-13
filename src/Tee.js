 import React, { Component, useEffect, useState } from 'react'


 const Tee = () => {

     const [users, setUsers] = useState([]);

     const getUsers = async() => {
         const response = await fetch('./Flights.json');

         const data = await response.json();
         console.log(data);

     }
     useEffect(() => {
         getUsers();
     }, []);



     return (

         <
         React.Fragment >
         <
         h1 className = "text" > Welcome < /h1>


         <
         div id = "flights-container" >

         <
         form >
         <
         fieldset >
         <
         legend > Find a Flight < /legend>

         <
         div >
         <
         label
         for = "from-airport" > From: < /label> <
         input id = "from-airport"
         autocomplete = "off"
         required / >
         <
         /div> <
         div >
         <
         label
         for = "to-airport" > To: < /label> <
         input id = "to-airport"
         autocomplete = "off"
         required / >
         <
         /div> <
         div >
         <
         label
         for = "date" > Date: < /label> <
         input type = "date"
         id = "date"
         placeholder = "yyyy-mm-dd"
         required / >
         <
         /div> <
         div >
         <
         label
         for = "results" > Max# of Results: < /label> <
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
         label
         for = "order-by" > Order By: < /label> <
         select id = "order-by" >
         <
         option value = "0" > Arrival Time < /option> <
         option value = "1" > Departure Time < /option> <
         option value = "2" > Duration < /option> < /
         select > <
         /div> <
         div >
         <
         button id = "lookup"
         className = "ui-priority-primary" > Lookup < /button> < /
         div > <
         /fieldset> < /
         form >

         <
         /div>

         <
         script >

         {
             /* var rangeSlider = document.getElementById("rs-range-line");
             var rangeBullet = document.getElementById("rs-bullet");

             rangeSlider.addEventListener("input", showSliderValue, false);

             function showSliderValue() {
               rangeBullet.innerHTML = rangeSlider.value;
               var bulletPosition = (rangeSlider.value /rangeSlider.max);
               rangeBullet.style.left = (bulletPosition * 578) + "px";
             } */
         }





         <
         /script>

         <
         /React.Fragment>


     )
 }

 export default Tee




 //  export default class Tee extends Component {


 //     render() {
 //         return (<React.Fragment>


 // <div>
 // <h1>This is Api </h1>
 // </div>

 //         <script>
 //       {/* const axios = require('axios');

 //   async  function makeGetRequest() {

 //   let res = await axios.get('./Flight.json');

 //   let data = res.data;
 //   console.log(data);
 // }

 // makeGetRequest(); */}


 // {/* fetch('./Flight.json')
 // .then(results => results.json())
 // .then(console.log); */}


 //         </script>

 //         </React.Fragment>


 //         );
 //     }
 // }