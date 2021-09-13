import React, { Component } from 'react'

export default class Reff extends Component {
    constructor(props) {
        super(props)
            //creating ref
            // this.textInput = React.createRef();

        //creating ref using state
        this.state = {
            value: ""
        };
        this.textInput = React.createRef();

    }
    handleSubmit = e => {
        e.preventDefault();
        //console.log(this.textInput.curret.value)
        this.setState({ value: this.textInput.current.value })
    };
    //componentDidMount = () => {
    // console.log(this.textInput.current);
    // this.textInput.current.focus();
    //tumhi jith refrence dyal tith focus yeill
    // }
    render() {
        return ( //<
            //     form >
            //     Name: < input type = "text" / >
            //     <
            //     br / >
            //     <
            //     br / >
            //     Password: < input type = "text"
            //     ref = { this.textInput }
            //     /> <
            //     br / >
            //     <
            //     br / >
            //     Address: < input type = "text" / >

            //     <
            //     /form>


            //creating ref using state
            <
            React.Fragment >

            <
            h2 >
            You Type: { this.state.value } <
            /h2> <
            form onSubmit = { this.handleSubmit } >
            Input: < input type = "text"
            ref = { this.textInput }
            /> <
            input type = "submit"
            value = "submit" / >
            <
            /form> < /
            React.Fragment >
        )
    }
}