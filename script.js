// Code goes here
var userPopup = angular.module('userPopup', ['ui.bootstrap']);
userPopup.controller('popupController', function($scope, $modal, $log) {
        $scope.usrs = [];
        $scope.usr = {name: '', job: '', age: '', sal: '', addr:''};
        $scope.addUser = function(){
         var dialogInst = $modal.open({
    			  templateUrl: 'popup.html',
    			  controller: 'DialogInstCtrl',
    			  size: 'lg',
    			  resolve: {
    				selectedUsr: function () {
    				  return $scope.usr;
    				}
    			  }
			    });
			    dialogInst.result.then(function (newusr) {
			    $scope.usrs.push(newusr);
			    $scope.usr = {name: '', job: '', age: '', sal: '', addr:''};
			}, function () {
			  $log.info('Modal dismissed at: ' + new Date());
			});
        };
});
userPopup.controller('DialogInstCtrl', function($scope, $modalInstance, selectedUsr, $log) {
$scope.usr = selectedUsr;
		  $scope.submitUser = function () {
			$modalInstance.close($scope.usr);
		//	$scope.usr = {name: '', job: '', age: '', sal: '', addr:''};
  		};
		$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
		  };
});