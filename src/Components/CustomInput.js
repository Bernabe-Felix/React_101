import React from "react";
import {func, object} from 'prop-types'

class CustomInput extends React.Component {
    state = {
        inputValue: 'default value',
    }

    updateInputValue = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render(){
        return <React.Fragment>
            <input onChange={this.updateInputValue} type="text" />
            {this.props.children({value: this.state.inputValue, x: 'x', y: 'y'})}
        </React.Fragment>
    }
}

CustomInput.propTypes = {
    styles: object,
    children: func,
}

CustomInput.defaultProps = {
    styles: {},
    children: () => {}
}

export default CustomInput