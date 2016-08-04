var HomeController = function ($scope) {
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
            "subtotal": 0
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
      if(checked == true) {
    angular.forEach($scope.tableRows, function(person, index) {
      if (person[procedure] == false) {
        person[procedure] = true;
      } else if (person[procedure] == true) {
        return
      }
      $scope.checked($scope.prices[procedure], index, checked, procedure);
    });
  } else if(checked == false) {
    angular.forEach($scope.tableRows, function(person, index) {
      $scope.checked($scope.prices[procedure], index, checked, procedure);
    });
  }
};
    $scope.addRow = function () {
      $scope.tableRows.push({subtotal: 0})
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
        total += values.subtotal;
        $scope.total = total;
      })
      return total;
    }
    $scope.dollarAmmount = 0.00;
    $scope.checked = function(amount, position, checked, procedure) {
        if (checked) {
          angular.forEach($scope.tableRows, function (person, index) {
            if (index == position) {
              $scope.tableRows[position][procedure] = true;
              person.procedure = false;
            }
          })
            $scope.dollarAmmount = $scope.dollarAmmount + amount;
            $scope.tableRows[position].subtotal += amount;
        } else if(!checked){
          angular.forEach($scope.tableRows, function (person, index) {
            if (index == position) {
              $scope.tableRows[position][procedure] = false;
              person.procedure = true;
            }
          })
            $scope.dollarAmmount = $scope.dollarAmmount - amount;
            $scope.tableRows[position].subtotal -= amount;
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
