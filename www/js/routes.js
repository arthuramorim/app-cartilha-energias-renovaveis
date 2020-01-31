angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
  .state('menu.configuracoes', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuracoes.html',
        controller: 'configuracoesCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })


  .state('menu.revolucao-energetica', {
    url:'/revolucao-energetica',
    views:{
      'side-menu21':{
        templateUrl: 'templates/revolucao-energetica.html',
        controller: 'revolucao-energeticaCtrl'
      }
    }
  })
  .state('menu.hidroeletrica', {
    url:'/hidroeletrica',
    views:{
      'side-menu21':{
        templateUrl: 'templates/hidroeletrica.html',
        controller: 'hidroeletricaCtrl'
      }
    }
  })

  .state('menu.biocombustiveis', {
    url:'/biocombustiveis',
    views:{
      'side-menu21':{
        templateUrl: 'templates/biocombustiveis.html',
        controller: 'biocombustiveisCtrl'
      }
    }
  })

  .state('menu.eolica', {
    url:'/eolica',
    views:{
      'side-menu21':{
        templateUrl: 'templates/eolica.html',
        controller: 'eolicaCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/login')

  

});