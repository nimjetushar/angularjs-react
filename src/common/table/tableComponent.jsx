import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const header = this.props.cols.map((col, idx) => (
      <th key={idx}>{col.label}</th>
    ));

    const tableBody = this.props.data.map((data, idx) => (
      <tr key={idx}>
        {this.props.cols.map((col, i) => (
          <td key={i}>{data[col.value]}</td>
        ))}
      </tr>
    ));
    return (
      <table className="table">
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    );
  }
}

const colPropType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.any
});

Table.propTypes = {
  cols: PropTypes.arrayOf(colPropType).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired
};

Table.defaultProps = {
  cols: [],
  data: []
};

export default Table;
