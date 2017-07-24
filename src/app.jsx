import React from 'react';
import '../styles/index.scss';
import ProgressBar from './ProgressBar.jsx';
import Dropdown from './Dropdown.jsx';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.addItem = this.addItem.bind(this);
		this.onValueReset = this.onValueReset.bind(this);
		this.onDropdownChange = this.onDropdownChange.bind(this);
		this.state = {
			buttons: [],
			progressBarValues: [],
			limit: 0,
			activeBarId: 0
		}
	}
	componentDidMount() {
		fetch('http://pb-api.herokuapp.com/bars')
		.then((response) => response.json())
		.then((responseJSON)=>{
			this.setState(() => ({
			  buttons: responseJSON.buttons,
				progressBarValues: responseJSON.bars,
				limit: responseJSON.limit,
				activeBarId: 0
			}));
		});
	}
	addItem(value) {
		let progressBarValues = this.state.progressBarValues;
		let activeBarId = this.state.activeBarId;
		progressBarValues[activeBarId] = this.state.progressBarValues[activeBarId] + parseInt(value);
		this.setState({
			progressBarValues: progressBarValues
		});
	}
	onValueReset(progressBarIndex) {
		let progressBarValues = this.state.progressBarValues;
		progressBarValues[progressBarIndex] = 0;
		this.setState(() => ({
				progressBarValues: progressBarValues
			}));
	}
	onDropdownChange(change) {
		this.setState(() => ({
				activeBarId: change.newValue
			}));
	}
	render() {
  	const buttons = this.state.buttons.map((buttonValue, index)=> {
  		 return <button key={index} className={`btn btn-default appMenu`} value={buttonValue} onClick={()=>this.addItem(buttonValue)}>{buttonValue}</button>
  	});
  	const progressbars = this.state.progressBarValues.map((progressBarValue, index)=> {
  		return <ProgressBar id={index} key={index} value={progressBarValue} limit ={this.state.limit} onReset={this.onValueReset}/>
  	});
  	const options = this.state.progressBarValues.map((progressBarValue, index)=> {
  		return {code: index, description: "progress#" + index}
  	});
    return (
      <div>
         {progressbars}
         <Dropdown className="btn btn-default appMenu" id='myDropdown'
                  options={options}
                  value={this.state.activeBarId}
                  labelField='description'
                  valueField='code'
                  onChange={this.onDropdownChange}/>
         {buttons}

      </div>

    )
  }
}
