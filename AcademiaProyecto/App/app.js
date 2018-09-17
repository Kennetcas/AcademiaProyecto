angular.module("AppAcademia",[])
.controller("Controlador1",function ($scope) {
  /*  $scope.nombres = "la maria";*/

  // varialbes utiizadas para mostrar u ocultar formularios

    $scope.Finscribir = true;
    $scope.Falumnosinscritos = true;
    $scope.Fnotas=true;
    $scope.Fmensualiades=true;
    $scope.Fretalumnos=true;
    $scope.Frepgeneral=true;


//cambiar de estado las variables para mostrar u ocultar formularios
    $scope.FormInscripciones=function () {
        $scope.Finscribir=false;
        $scope.Falumnosinscritos=true
        $scope.Fnotas=true;
        $scope.Fmensualiades=true;
        $scope.Fretalumnos=true;
        $scope.Frepgeneral=true;

    };
    $scope.FormAlumnosInscritos=function () {
        $scope.Finscribir=true;
        $scope.Falumnosinscritos=false;
        $scope.Fnotas=true;
        $scope.Fmensualiades=true;
        $scope.Fretalumnos=true;
        $scope.Frepgeneral=true;


    };
    $scope.FormNotas=function () {
        $scope.Finscribir=true;
        $scope.Falumnosinscritos=true;
        $scope.Fnotas=false;
        $scope.Fmensualiades=true;
        $scope.Fretalumnos=true;
        $scope.Frepgeneral=true;


    };
    $scope.FormMensualidades=function () {
        $scope.Finscribir=true;
        $scope.Falumnosinscritos=true;
        $scope.Fnotas=true;
        $scope.Fmensualiades=false;
        $scope.Fretalumnos=true;
        $scope.Frepgeneral=true;


    };
    $scope.FormRetAlumnos=function () {
        $scope.Finscribir=true;
        $scope.Falumnosinscritos=true;
        $scope.Fnotas=true;
        $scope.Fmensualiades=true;
        $scope.Fretalumnos=false;
        $scope.Frepgeneral=true;


    };
    $scope.FormRepGeneral=function () {
        $scope.Finscribir=true;
        $scope.Falumnosinscritos=true;
        $scope.Fnotas=true;
        $scope.Fmensualiades=true;
        $scope.Fretalumnos=true;
        $scope.Frepgeneral=false;


    };


});