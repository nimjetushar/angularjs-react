import React from "react";
import ReactDOM from "react-dom";
import Table from "../common/table/TableComponent";

landingController.$inject = [];

function landingController() {
  this.cols = [
    {
      label: "Id",
      value: "id"
    },
    {
      label: "Model",
      value: "car_model"
    },
    {
      label: "Maker",
      value: "car_maker"
    }
  ];

  this.$postLink = function() {
    const landing = document.getElementById("table-cont");
    ReactDOM.render(<Table cols={this.cols} />, landing);
  };
}

export default {
  template: `
  <div>
    <div id="table-cont"></div>
  </div>`,
  controller: landingController
};
