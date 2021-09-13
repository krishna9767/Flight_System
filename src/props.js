import React, { component } from "react";
import Pt from "prop-types";

//CLASS COMPONENT

class Student extends component {
    render() {
        return ( <
            div >
            <
            h1 > Hello, { this.props.name } < /h1> <
            h2 > Your Roll: { this.props.roll } < /h2> < /
            div > );
    }

};

Student.propTypes = {
    name: Pt.string.isRequired
};
Student.defaultProps = {
    name: "GeekyShow"
}
export default Student;