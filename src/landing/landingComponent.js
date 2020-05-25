/* eslint-disable camelcase */

import mockData from '../../public/mock_data/data.json';

function landingController() {
  this.cols = [
    {
      label: 'Id',
      value: 'id'
    },
    {
      label: 'Model',
      value: 'car_model'
    },
    {
      label: 'Maker',
      value: 'car_maker'
    }
  ];

  this.data = mockData.results;

  this.addContent = () => {
    const data = {
      car_maker: this.maker,
      car_model: this.model,
      id: this.data.length + 1
    };
    this.data.push(data);
    this.model = '';
    this.maker = '';
  };
}
landingController.$inject = [];

export default {
  controller: landingController,
  templateUrl: './landingComponent.html'
};
