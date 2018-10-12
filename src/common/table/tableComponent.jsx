import React, { Component } from "react";
import PropTypes from "prop-types";

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = this.props.cols.map((col, idx) => (
      <th key={idx}>{col.label}</th>
    ));
    return (
      <table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>
          <tr>
            <td>Hello</td>
          </tr>
        </tbody>
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
