import mockData from "../../public/mock_data/data.json";

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

  this.data = mockData.results;

  this.addContent = function() {
    const data = {
      id: this.data.length + 1,
      car_model: this.model,
      car_maker: this.maker
    };
    this.data = this.data.concat([data]);
  };
}

export default {
  templateUrl: "./landingComponent.html",
  controller: landingController
};
