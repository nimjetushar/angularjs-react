import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../common/table/tableComponent';

export default function tableDirective() {
  return {
    link: (scope) => {
      const reactapp = document.getElementById('table-cont');
      function watcher(newValue) {
        if (newValue) {
          ReactDOM.render(
            <Table cols={scope.cols} data={newValue} />,
            reactapp
          );
        }
      }

      scope.$watch('data', watcher, true);
    },
    restrict: 'E',
    scope: {
      cols: '=',
      data: '='
    },
    template: '<div id="table-cont"></div>'
  };
}
