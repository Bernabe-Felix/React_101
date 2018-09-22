import React from 'react'
import CustomInput from "./CustomInput";

// <App
//  <InputWrapper prop
//      <CustomInput props

export const CustomLabel = props => <label style={{marginRight: 20}}>{props.value}</label>

class FormWrapper extends React.Component {
    static Input = CustomInput
    static Label = CustomLabel

    render(){
        return <div>
            <CustomLabel value='Im an input'/>

            {this.props.children}
        </div>
    }
}

export default FormWrapper