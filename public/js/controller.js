var app = angular.module('app', ['ngMaterial', 'ngMessages']);

app.controller('ctrl', function($scope, $mdDialog, $http) {
    $scope.showOnOneScreen = function(){
        $scope.change = !$scope.change;
    };
    $scope.user = {
        firstName: '',
        lastName: '',
        address: '',
        state: '',
        city:'',
        postalCode: ''
    };
    $scope.users = [];
    $scope.reset = function() {
        $scope.form.$setPristine();
    }
    $scope.save = function(valid) {
        if(valid){
            $scope.users.push($scope.user);
            var data = {
                firstName:$scope.user.firstName,
                lastName:$scope.user.lastName,
                address:$scope.user.address,
                state:$scope.user.state,
                city:$scope.user.city,
                postalCode:$scope.user.postalCode
            }
            $http.post('/', data).success(function(data, status){
                $scope.myInfo = data;
            });
            console.log(data);
            $scope.user = {
                firstName: '',
                lastName: '',
                address: '',
                state: '',
                city:'',
                postalCode: ''
            };
        }

    };
    $scope.delete = function(index, ev) {
//        var confirm = $mdDialog.confirm()
//                .title('Do you want to delete this user')
//                .content()
//                .ok('Delete')
//                .cancel('Cancel')
//                .targetEvent(ev);
//        $mdDialog.show(confirm).then(function() {
        $scope.users.splice(index, 1);
//        }, function() {});
    }

});
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
/**
 * Created by digimuflon1 on 10/28/16.
 */
