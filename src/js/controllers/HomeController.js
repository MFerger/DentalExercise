var HomeController = function ($scope) {

    var people = require('../people.json');
    $scope.tableRows = [];
    $scope.users = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    $scope.step2Instructions = true;
    $scope.step2 = false;
    $scope.total = 0;
    $scope.person = {
      'value': 0,
    }
    $scope.setRows = function(num) {
      if($scope.person.value == 0){
        $scope.tableRows = [];
        for (var i = 0; i < num; i++) {
          $scope.tableRows[i] = {
            "oral": false,
            "cleaning": false,
            "filling": false,
            "xray": false,
            "crown": false,
            "canal": false,
            "dentures": false,
            "braces": false,
            "visible": false,
            "analCost": 0
          };
          $scope.person.value = num;
        }
      } else {
        return;
      }
      $scope.step2Instructions = false;
      $scope.step2 = true;
    }
    $scope.selectAll = function(procedure, checked) {
      if (checked) {
      angular.forEach($scope.tableRows, function (person) {
        person.oral = true;
      })
    } else if (!checked) {
      angular.forEach($scope.tableRows, function (person) {
        person.oral = false;
      })
    }
  }
    $scope.addRow = function () {
      $scope.tableRows.push({analCost: 0})
    }
    $scope.prices = {
            oral: 100,
            cleaning: 50,
            filling: 75,
            xray: 200,
            crown: 125,
            canal: 100,
            dentures: 60,
            braces: 130
        }
    $scope.selected = {
        value: 0
    };
    $scope.totalSavings = function(){
      var total = 0;
      angular.forEach($scope.tableRows, function (values, index) {
        total += values.analCost;
        $scope.total = total;
      })
      return total;
    }
    $scope.dollarAmmount = 0.00;
    $scope.checked = function(amount, position, checked, procedure) {
        if (checked) {
          angular.forEach($scope.tableRows, function (person, index) {
            if (index == position) {
              person.procedure = false;
            }
          })
            $scope.dollarAmmount = $scope.dollarAmmount + amount;
            $scope.tableRows[position].analCost += amount;
        } else if(!checked){
          angular.forEach($scope.tableRows, function (person, index) {
            if (index == position) {
              person.procedure = true;
            }
          })
            $scope.dollarAmmount = $scope.dollarAmmount - amount;
            $scope.tableRows[position].analCost -= amount;
        }
    };
    $scope.moneyWorth = function (amount) {
      var movieTickets = 7;
      var total = Math.round(amount/movieTickets);
      return total;
    }
};

HomeController.$inject = ['$scope'];
module.exports = HomeController;
