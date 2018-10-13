import React from "react";
import ReactDOM from "react-dom";
import Table from "../common/table/tableComponent"

export default function tableDirective() {
  return {
    template: '<div id="table-cont"></div>',
    restrict: "E",
    scope: {
      cols: "=",
      data: "="
    },
    link: function(scope, el, attrs) {
      const reactapp = document.getElementById("table-cont");
      scope.$watch("data", watcher, true);

      function watcher(newValue, oldValue) {
        if (newValue) {
          ReactDOM.render(
            <Table cols={scope.cols} data={newValue} />,
            reactapp
          );
        }
      }
    }
  };
}
