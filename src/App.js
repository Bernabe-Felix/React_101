import React from 'react';
import {func, object} from 'prop-types'
import './App.css';

function CustomInput(props){
    const doubleLog = (e) => {
        const newValue = e.target.value

        props.onUpdate(newValue)
    }


    console.log('custom input render')
    return <input onChange={doubleLog} type="text" style={props.styles}/>
}

CustomInput.propTypes = {
    styles: object,
    onUpdate: func.isRequired,
}

CustomInput.defaultProps = {
    styles: {}
}

class App extends React.Component {
    static propTypes = {
        something: func,
    }

    static defaultProps = {
        something: () => {}
    }

    state = {
        inputValue: 'default value',
        myNumber: 0,
        isLoading: true
    }

    constructor(props){
        super(props)

        this.divNode = React.createRef()
    }

    updateInputValue = (value) => {
        console.log('im updating with: ', value)
        this.setState({ inputValue: value })
    }

    updateMyNumber = () => this.setState(function(state){
        return { myNumber:  state.myNumber + 1 }
    })

    render(){
        console.log('im rendering')
        const arr = [1,2,3,4,5,6, 4]

        return <div  style={{padding: 50, backgroundColor: 'goldenrod'}}>
            <div >
                <label style={{marginRight: 20}}> Im an input</label>

                <CustomInput  onUpdate={this.updateInputValue}/>

                <label >{this.state.inputValue}</label>
            </div>

            {/*{arr.map((value, index) => <h4 key={index}>{value}</h4>)}*/}

            <div >
                <label style={{marginRight: 20}}> Im a button</label>

                <button onClick={this.updateMyNumber}> Click me! </button>

                <label >{this.state.myNumber}</label>
            </div>
        </div>
    }
}

export default App;
