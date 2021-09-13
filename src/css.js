// import React, { Component } from 'react'

// export default class css extends Component {
//     render() {
//         const btnStyle = {
//             color: 'blue',
//             backgroundColor: "orange"
//         };
//         return ( <
//             div >
//             <
//             button style = { btnStyle } > Button < /button>

//             <
//             /div>
//         )
//     }
// }




//IF YOU WANT TO ADD MOREE STYLE


// import React, { Component } from 'react'

// export default class App extends Component {
//     render() {
//         const txtc = {
//             color: 'blue'
//         }
//         const txts = {
//             fontSize: "80px"
//         }
//         return ( <
//             h1 style = {
//                 {...txtc }
//             } > Hello App < /h1>
//         )
//     }
// }



//change css after click
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        change: false
    };

    clickHandle = () => {
        this.setState({ change: true })
    }

    render() {
        const btnStyle = {
            color: 'blue',
            backgroundColor: "orange"
        };
        if (this.state.change) {
            btnStyle.backgroundColor = "white";
        }
        return ( <
            div >
            <
            button onClick = { this.clickHandle }
            style = { btnStyle } > Button < /button>

            <
            /div>
        )
    }
}