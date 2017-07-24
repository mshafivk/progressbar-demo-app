import React from 'react';
import PropTypes from 'prop-types';
class Dropdown extends React.Component{
	constructor(props) {
		super(props);
		let selected = this.getSelectedFromProps(props);
		this.state = {
			selected: selected
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		var selected = this.getSelectedFromProps(nextProps);
		this.setState({
		   selected: selected
		});
	}

	getSelectedFromProps(props) {
		var selected = null;
		if (props.value === null && props.options.length !== 0) {
			selected = props.options[0];
		} else {
			selected = props.value;
		}
		return selected;
	}

	render() {
		var self = this;
		var options = self.props.options.map(function(option) {
			return (
				<option key={option[self.props.valueField]} value={option[self.props.valueField]}>
					{option[self.props.labelField]}
				</option>
			)
		});
		return (
			<select id={this.props.id}
					className={this.props.className}
					value={this.state.selected}
					onChange={this.handleChange}>
				{options}
			</select>
		)
	}

	handleChange(e) {
		if (this.props.onChange) {
			var change = {
			  oldValue: this.state.selected,
			  newValue: e.target.value
			}
			this.props.onChange(change);
		}
		this.setState({selected: e.target.value});
	}

}
	Dropdown.propTypes = {
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
	Dropdown.getDefaultProps = {
		value: null,
		valueField: 'value',
		labelField: 'label',
		onChange: null
	};
export default Dropdown;
