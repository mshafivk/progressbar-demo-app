import React from 'react';
import PropTypes from 'prop-types';
class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			percentage: this.getPercentage(),
			value: props.value,
			progressBarColor: '#43b7e1'
		}
		this.getPercentage = this.getPercentage.bind(this)
	}
	componentDidUpdate(props) {
	//Comparing to make sure the percentage state updates on value change
	  if (this.props.value !== props.value) {
	  	this.setState(() => ({
			  percentage: this.getPercentage(),
			  progressBarColor: '#43b7e1'
			}));
	  }
	  if (this.state.percentage > 100 && this.state.progressBarColor === '#43b7e1') {
			this.setState(() => ({
			 progressBarColor: 'red'
			}))
		}
		if (this.state.percentage < 0) {
			this.props.onReset(this.props.id);
			this.setState (() => ({
			 percentage: 0
			}))
		}
	}
	getPercentage() {
	console.log(Math.floor((this.props.value/this.props.limit)*100));
	 return Math.floor((this.props.value/this.props.limit)*100);
	}
  render() {
    let width = this.state.percentage > 100 ? 100 : this.state.percentage;
  	var style = {
      width: width + '%',
      backgroundColor: this.state.progressBarColor
    };
    return (
      <div className="progressContainer">
      <div className="progressBody">
        <div className="progress__bar" style={style}></div>
        <span className="progress__value">{this.state.percentage}%</span>
      </div>
      </div>
    )
  }
}
/*ProgressBar.propTypes = {
		id: PropTypes.string.isRequired,
		options: PropTypes.array.isRequired,
		value: PropTypes.oneOfType(
			[
				PropTypes.number,
				PropTypes.string
			]
		),
		valueField: PropTypes.string,
		labelField: PropTypes.string,
		onChange: PropTypes.func
	}
	ProgressBar.getDefaultProps = {
		value: null,
		valueField: 'value',
		labelField: 'label',
		onChange: null
	};*/
	export default ProgressBar;
