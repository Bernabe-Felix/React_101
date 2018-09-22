import React from 'react';
import './App.css';
import FormWrapper from "./Components/FormWrapper";

class App extends React.Component {

    state = {
        inputValue: 'default value',
        myNumber: 0,
        isLoading: true
    }

    updateInputValue = (value) => {
        this.setState({ inputValue: value })
    }

    updateMyNumber = () => this.setState(function(state){
        return { myNumber:  state.myNumber + 1 }
    })

    render(){
        // HOC = High order component
        // function(Component){ return <Component {...this.props} {...hocProps} />
        return <div  style={{padding: 50, backgroundColor: 'goldenrod'}}>
            <FormWrapper inputValue={this.state.inputValue} >
                <FormWrapper.Input >
                    {({value, y}) => <FormWrapper.Label value={value}/>}
                </FormWrapper.Input>

                <FormWrapper.Label value={'Im a new Input'}/>
                <FormWrapper.Input />
            </FormWrapper>

            <div >
                <label style={{marginRight: 20}}> Im a button</label>

                <button onClick={this.updateMyNumber}> Click me! </button>

                <label >{this.state.myNumber}</label>
            </div>
        </div>
    }
}

export default App;
