angular.module('app.controllers', ['ngStorage', 'ngMask'])
   
.controller('configuracoesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('categoriaProdutoCtrl', ['$scope', '$stateParams','$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading) {

function loading() {
    $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
};

loading();
 
  URLAPI = "http://silviobernardes.com.br/api_chinaImport/api/public/api/v1/auth/produto/categorias";
  $.post(
              URLAPI,
              function(response,status){
                  $scope.categorias = response;                
                  $ionicLoading.hide();
                                   
              }).fail(function(response){
                  $ionicLoading.hide();
                  console.log(response.statusText);
                  //$scope.$apply();
              });

}])

.controller('produtosCtrl', ['$scope', '$stateParams','$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicLoading) {
function loading() {
    $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
};

loading();

  var categoryid = $stateParams.category;
  
  console.log(categoryid);
  
  URLAPI = "http://silviobernardes.com.br/api_chinaImport/api/public/api/v1/auth/produto/lista";
  $.post(
              URLAPI,
              {
                'category_id':categoryid
              },

              function(response,status){
                  $scope.produtos = response;                
                  $ionicLoading.hide();
                  //$state.go("menu.produtos");
                                   
              }).fail(function(response){
                  $ionicLoading.hide();
                  //$scope.retornoStatus(response.statusText);
                  //$scope.$apply();
              });

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$state', '$localStorage',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $localStorage) {
  
  $scope.sairApp = function(){
      /*delete $localStorage.tbUserdata;*/
      $state.go("login");
  }	

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$state', '$localStorage','$ionicLoading',
function ($scope, $stateParams,$state, $localStorage,$ionicLoading) {

  $scope.ler = function(){

    $state.go("menu.revolucao-energetica");
    
  }
     

}]) 

.controller('revolucao-energeticaCtrl', ['$scope', '$stateParams', '$state', '$localStorage','$ionicLoading',
function ($scope, $stateParams,$state, $localStorage,$ionicLoading) {

 

}]) 

.controller('hidroeletricaCtrl', ['$scope', '$stateParams', '$state', '$localStorage','$ionicLoading',
function ($scope, $stateParams,$state, $localStorage,$ionicLoading) {

 

}]) 

.controller('biocombustiveisCtrl', ['$scope', '$stateParams', '$state', '$localStorage','$ionicLoading',
function ($scope, $stateParams,$state, $localStorage,$ionicLoading) {

 

}]) 

.controller('eolicaCtrl', ['$scope', '$stateParams', '$state', '$localStorage','$ionicLoading',
function ($scope, $stateParams,$state, $localStorage,$ionicLoading) {

 

}]) 