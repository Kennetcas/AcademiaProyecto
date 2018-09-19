angular.module("AppAcademia",[])
.controller("Controlador1",function ($scope,$http) {
    $scope.Alumno={};//se recoge la informacion del formulario
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


    //llenar cursos
     $http.get("https://webapifinalfinal.azurewebsites.net/api/CURSOS")
         .then(function (data) {
             $scope.Cursos=data.data;//llena los select de cursos con esta data
             console.log(data);
         },function (err) {
             console.log("se ha producido un error ",err);
         });

     //LLENAR JORANADA
    $http.get("https://webapifinalfinal.azurewebsites.net/api/JORNADAS")
        .then(function (data) {
            $scope.Jornadas=data.data;//llena los select de jornadas con esta data
            console.log(data);
        },function (err) {
            console.log("se ha producido un error ",err);
        });

    //LLENAR HORARIO
    $http.get("https://webapifinalfinal.azurewebsites.net/api/HORARIOS")
            .then(function (data) {
            $scope.Horarios=data.data;//llena los select de horarios con esta data
            console.log(data);
            },function (err) {
            console.log("se ha producido un error ",err);
        });

     //cargar el control select con valores
            $http.get("https://webapifinalfinal.azurewebsites.net/api/BIMESTRES")
            .then(function (data) {
            $scope.Bimestres=data.data;//llenar los select con esta data
                console.log($scope.Bimestres);
            },function (err) {
            console.log("Se Ha Producido un Error ",err)
            });
     //cargar el listado de alumnos y sus notas
    $http.get("https://webapifinalfinal.azurewebsites.net/api/CALIFICACIONES/DesplegarNotas")
        .then(function (data) {
            $scope.ListaDeNotas=data.data;//se obtiene un listado con las nontas
        },function (errr) {
            console.log(err);
        });

//funcion que recibe los parametros para insertar los alumnos
$scope.InsertarAlumnos=function (cursoid,jonadaid,horarioid) {
    $scope.Alumno.CURSO_ID=cursoid;
    $scope.Alumno.JORNADA_ID=jonadaid;
    $scope.Alumno.HORARIO_ID=horarioid;
    $scope.Alumno.ALUMNO_ESTADO=1;
    console.log($scope.Alumno);
    $http.post("https://webapifinalfinal.azurewebsites.net/api/ALUMNOS",$scope.Alumno)
        .then(function (data) {
            console.log("enviado");
            console.log(data);
        },function (data) {
            console.log('errror');
            console.log(data);
        })
    $scope.Alumno={};
};
//devuelve los alumnos inscritos
$scope.AlumnosInscritos=function (cursoid,jornadaid,horarioid) {
    $http.get("https://webapifinalfinal.azurewebsites.net/api/inscritos/curso/"+cursoid+"/jornada/"+jornadaid+"/horario/"+horarioid+"")
        .then(function (data) {
            $scope.AlumnosInscritorResult=data.data;
           console.log($scope.AlumnosInscritorResult);
        },function (data,status) {
            console.log(status);
        })
};
//lista los alumnos para cargar notas
$scope.ListaAsignaNotas=function (curosid,horarioid) {
    $http.get("https://webapifinalfinal.azurewebsites.net/api/AsignaNotas/curso/"+curosid+"/horario/"+horarioid+"")
        .then(function (data) {
            $scope.ListaAlumnosAsisgaNota=data.data;
            console.log("DATATATA");
            console.log($scope.ListaAlumnosAsisgaNota);
        },function (err) {
            console.log(err);
        });
};
//inserta las notas
$scope.InsertarNotas=function (bimestreid,alumnoid,calificacion) {
  $http.get("https://webapifinalfinal.azurewebsites.net/api/CALIFICACIONES/insertar/bimestre/"+bimestreid+"/alumno/"+alumnoid+"/calificacion/"+calificacion+"")
      .then(function (data) {
          $scope.ListaDeNotas=data.data;//se actualiza el lisstado de notas al tener una nota nueva
          console.log(data);
      },function (err) {
          console.log(err);
      })
};


});