'use strict';

angular.module('_z.app.z_').controller('_zObjectz__zActionz_ComponentCtrl', function ($scope) {
  var vm = $scope.vm = {};
});

angular.module('_z.app.z_').directive('_zobjectz__zActionz_', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'components/_z-object-z_/_z-action-z_.html',
    controller: '_zObjectz__zActionz_ComponentCtrl'
  };
});

document.createElement('_z-object-z_-_z-action-z_');