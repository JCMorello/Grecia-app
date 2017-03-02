angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('diosesCtrl', function($scope) {
    
    $scope.dioses = [
        { nombre: 'Zeus', id: 1, desc: "Sabio lider de todos los dioses" },
        { nombre: 'Poseidon', id: 2 , desc: "Rey de los mares" },
        { nombre: 'Atenea', id: 3 , desc: "Diosa de la sabiduría y las batallas" },
        { nombre: 'Ares', id: 4 , desc: "Dios de la guerra" },
        { nombre: 'Apolo', id: 5 , desc: "El sol, hermano de Artemisa" },
        { nombre: 'Artemisa', id: 6 , desc: "La luna, la cazadora nocturna" },
        { nombre: 'Hermes', id: 7 , desc: "Dios mensajero" },
        { nombre: 'Hefesto', id: 8 , desc: "El dios tuerto de la fragua divina" },
        { nombre: 'Hera', id: 9 , desc: "Esposa de Zeus, diosa de los terremotos" },
        { nombre: 'Dioniso', id: 10 , desc: "El dios mas joven, venerado por Satiros" },
        { nombre: 'Hades', id: 11 , desc: "Gobierna el inframundo" },
        { nombre: 'Persefone', id: 12 , desc: "La que trae el invierno" },
        { nombre: 'Jueces', id: 13 , desc: "Representados por Minos, Eaco y Radamantis" },
    ];
    
    
})

.controller('bendicionesCtrl', function($scope, $stateParams, $state) {
    
    //console.log($state.current);
    $scope.dios = $stateParams.bendicionesNombre;
    $scope.bendiciones = [];
    
    //lista de bendiciones
    $scope.bendiciones = [
    {
    diosB: "Zeus", nombreB: "Ira de Zeus", 
    descB: "Zeus ayuda a sus héroes lanzando un potente rayo desde el monte Olimpo.",
    dificultadB: "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Causará 1D10 de daño elemental (Rayo), por cada rango que tenga la bendición."},

    {
    diosB: "Zeus", nombreB: "Electrificar arma", 
    descB: "El héroe alza sus armas al cielo y un rayo cae sobre ellas, dotándolas de un gran poder.",
    dificultadB : "9",
    lanzamientoB : "1 turno",
    duracionB : "Igual al rango",
    efectoB : "El arma causará daño elemental (Rayo) y además aumentará el daño causado en 3 por cada rango que tenga la bendición."},

    {
    diosB: "Zeus", nombreB: "Lagrimas de Zeus", 
    descB: "El héroe alza sus armas al cielo y un rayo impacta en ellas, dotándolas de un gran poder eléctrico.",
    dificultadB : "11",
    lanzamientoB : "3 turnos",
    duracionB : "-",
    efectoB : "",
    o : "Lluvia, sin efectos aparentes.",
    oo : "Lluvia tropical, +2DI para todos los que estén afectados.",
    ooo : "Monzón, todos los afectados necesitarán superar una tirada de Resistencia de dificultadB 12, para realizar alguna acción.",
    oooo : "Nube cargada, causará a un enemigo un impacto de un rayo de rango aleatorio.",
    ooooo : "Nube eléctrica, causará a un enemigo 1D10 rayos de rango aleatorio.",
    oooooo : "Tormenta, causará a todos los enemigos un rayo de rango aleatorio.",
    ooooooo : "Tempestad eléctrica, causará a todos los enemigos 1D10 rayos de rango aleatorio.",
    efectoB2 : "*Para representar el daño de los rayos, se puede utilizar la bendición Ira de Zeus."},

    {
    diosB: ["Zeus", "Hefesto", "Apolo"], nombreB: "Llama olímpica", 
    descB: "El dios presta su luz a los héroes para iluminar las zonas mas oscuras.",
    dificultadB : "6",
    lanzamientoB : "Inmediato",
    duracionB : "1 hora",
    efectoB : "Se creará una luz brillante a partir de algún objeto metalico, como por ejemplo una armadura o una espada."},

    {
    diosB: "Zeus", nombreB: "Descenso de Zeus", descB: "El héroe entona unos extraños cánticos que aturden a los enemigos que los escuchan.",
    dificultadB : "10",
    lanzamientoB : "Inmediato",
    duracionB : "1D10 + rango en turnos",
    efectoB : " Esta bendición crea una nube de 5 metros de radioalrededor del héroe.",
    efecto2B : "Todos los héroes que se encuentren en su interior aumentará su DI en 1 por cada rango de esta bendición que tenga el héroe.Cualquiera que intente disparar o utilizar una bendición contra alguien que se encuentre dentro de la nube deberá superar una tirada de Percepción de dificultadB 8 + rango. Además el disparo o efectoB deberá determinarse aleatoriamente entre todos los que se encuentren en el interior de la nube."},

    {
    diosB: ["Zeus", "Poseidon", "Atenea", "Ares", "Artemisa", "Apolo", "Hermes", "Hefesto", "Hera", "Dioniso"], 
    nombreB: "Vigor olímpico", 
    descB: "El héroe está bendecido por los dioses que le otorgan vigor y longevidad.",
    efectoB : "Esta bendición aumenta permanentemente la vitalidad del héroe.",
    o : "+10 Vitalidad máxima",
    oo : "+20 Vitalidad máxima",
    ooo : "+30 Vitalidad máxima",
    oooo : "+40 Vitalidad máxima",
    ooooo : "+50 Vitalidad máxima",
    oooooo : "+60 Vitalidad máxima",
    ooooooo : "+100 Vitalidad máxima"},
        
    {
    diosB: ["Hades", "Persefone", "Jueces"], 
    nombreB: "Vigor oscuro", 
    descB: "El héroe está bendecido por los dioses que le otorgan vigor y longevidad.",
    efectoB : "Esta bendición aumenta permanentemente la vitalidad del héroe.",
    o : "+10 Vitalidad máxima",
    oo : "+20 Vitalidad máxima",
    ooo : "+30 Vitalidad máxima",
    oooo : "+40 Vitalidad máxima",
    ooooo : "+50 Vitalidad máxima",
    oooooo : "+60 Vitalidad máxima",
    ooooooo : "+100 Vitalidad máxima"},

    {
    diosB: ["Zeus", "Ares", "Apolo", "Hera", "Dioniso", "Artemisa"], 
    nombreB: "Aura divina", 
    descB: "El héroe está bendecido por los dioses que le otorgan vigor y longevidad.",
    efectoB : "Esta bendición aumenta permanentemente la dificultad de impacto del héroe.",
    o : "+1 DI",
    oo : "+2 DI",
    ooo : "+3 DI",
    oooo : "+4 DI",
    ooooo : "+5 DI",
    oooooo : "+6 DI",
    ooooooo : "+7 DI"},

    {
    diosB: "Jueces", 
    nombreB: "Aura espectral", descB: "El héroe está bendecido por los dioses que le otorgan vigor y longevidad.",
    efectoB : "Esta bendición aumenta permanentemente la dificultad de impacto del héroe.",
    o : "+1 DI",
    oo : "+2 DI",
    ooo : "+3 DI",
    oooo : "+4 DI",
    ooooo : "+5 DI",
    oooooo : "+6 DI",
    ooooooo : "+7 DI"},

    {
    diosB: "Poseidon", nombreB: "Cantos de sirena", descB: "El héroe entona unos extraños cánticos que aturden a los enemigos que los escuchan.",
    dificultadB : "9",
    lanzamientoB : "Cántico",
    duracionB : "-",
    efectoB : "Los enemigos que escuchen los cantos de sirena deberán superar una tirada de Fuerza de voluntad (dificultadB 7 + rango) cada turno, o no podrán realizar ninguna acción este turno. Si alguien supera la tirada, en los turnos siguientes la dificultadB será de 7."},

    {
    diosB: ["Poseidon", "Hera", "Atenea"], nombreB: "Visión de futuro", descB: "El héroe utiliza el poder del agua para navegar entre los hilos del destino.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "El héroe puede realizar una pregunta a los dioses para conocer su futuro o para obtener información de enemigos. A mayor rango, mas y mejor información."},

    {
    diosB: "Poseidon", nombreB: "Hijos de Poseidón", descB: "El héroe pedirá ayuda a Poseidón que enviará aliados para que le ayuden a su causa.",
    dificultadB : "9",
    lanzamientoB : "3 turnos",
    duracionB : "-",
    efectoB : "El héroe recibe ayuda en forma de animales marinos, para invocar cualquier criatura marina, se deberá estar cerca del mar o cualquier río lo suficientemente grande.",
    o : "Peces, sin efectoB aparente",
    oo : "Serpientes marinas/Peces grandes",
    ooo : "Mantas eléctricas/Delfines",
    oooo : "Tiburones/Tritones",
    ooooo : "Cangrejos gigantes",
    oooooo : "Pulpo gigante",
    ooooooo : "Leviathan",
    efectoB2 : "Esta bendición se puede utilizar de múltiples maneras, para comunicarse con los aliados o en forma de aliados que ataquen o defiendan al héroe. Las características de los aliados que no estén descritas en el bestiario, quedan a discreción del director de juego."},

    {
    diosB: "Poseidon", nombreB: "Maldición de Poseidon", descB: "Poseidón maldice a sus enemigos provocándoles una muerte por ahogamiento.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Causa 1D10 de daño por cada rango que tenga esta bendición."},

    {diosB: "Poseidon", nombreB: "La mano de Poseidón", descB: "El héroe podrá crear y moldear masas de agua a voluntad y también mover la tierra causando seísmos y tsunamis.",
    dificultadB : "11",
    lanzamientoB : "1 turno",
    duracionB : "Variable",
    o : "Golpe de agua, daño 1D10.",
    oo : "Ola, daño 2D10",
    ooo : "Gran ola, 2D10 a varios enemigos DI",
    oooo : "Grieta, Abre una pequeña grieta en el suelo (6 metros de longitud) y los enemigos deberán superar una tirada de Reflejos (dif. 10) para no sufrir 4D10.",
    ooooo : "Seísmo, El héroe podrá moldear un pequeño terreno a voluntad y los enemigos afectados sufrirán 4D10.",
    oooooo : "Remolino, El héroe creara una fuertecorriente de agua en espiral que se tragara embarcaciones. Quien caiga dentro deberá superar una tirada de Resistencia (dif. 10), para no recibir 7D10 de daño.",
    ooooooo : "Tsunami, El héroe provocara un Seísmo en el mar, que causara una enorme ola devastadora. Causando la destrucción de edifiios y un daño de 10D10 a cada personaje o enemigo afectados por la ola.",
    efectoB2 : "El Remolino y el Tsunami deben de ser lanzados desde el mar o desde una posición cercana."},

    {
    diosB: "Poseidon", nombreB: "Bendición de Poseidón", descB: "Los héroes con esta bendición reciben un favor especial de Poseidón.",
    efectoB : "Los héroes con esta bendición podrán  comunicarse con animales marinos, tendrán siempre buena pesca y navegaran ayudados de vientos favorables. También podrán respirar debajo del agua como si fuesen peces.",
    efectoB2 : "Además, se beneficiaran de un +2 DI cuando se encuentren en el mar, en un río o en cualquier superficie acuosa."},

    {
    diosB: "Atenea", nombreB: "Lanza de Atenea", descB: "Atenea descarga su furia contra sus enemigos en forma de lanza.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Causa 1D10+1 de daño por cada rango que tenga esta bendición."},

    {diosB: "Atenea", nombreB: "Purificar Arma", descB: "Atenea ayuda a su héroe purificando sus armas para que causen un daño mayor a sus enemigos.",
    dificultadB : "9",
    lanzamientoB : "1 turno",
    duracionB : "igual al rango",
    efectoB : "Aumentará el daño causado por las armas del héroe en 5 por cada rango que tenga esta bendición."},

    {diosB: "Atenea", nombreB: "Escudo de Atenea", descB: "La diosa protege a sus héroes con su escudo de cristal.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "3 turnos",
    efectoB : "Aumenta la dificultadB de impacto del héroe.",
    o : "+3 DI",
    oo : "+4 DI",
    ooo : "+5 DI",
    oooo : "+6 DI",
    ooooo : "+7 DI",
    oooooo : "+8 DI",
    ooooooo : "+9 DI"},

    {diosB: "Atenea", nombreB: "Juicio de Atenea", descB: "El héroe llama a Atenea para que juzgue a sus enemigos por sus actos.",
    dificultadB : "12",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "El héroe designara un objetivo para la bendición (que no podrá ser ninguna criatura).",
    efectoB2 : "Ambos lanzaran 1D10 y sumaran su atributo de Inteligencia, si el resultado del enemigo es igual o superior no ocurrirá nada. Pero si es inferior, recibirá 2D10 de daño por rango."},

    {diosB: "Atenea", nombreB: "Bendición de Atenea", descB: "El héroe bendecido por Atenea incrementa sus capacidades hasta valores sobrehumanos.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "3 turnos",
    efectoB : "Los atributos aumentados no podrán sobrepasar de 7.",
    o : "+2 a un atributo",
    oo : "+2 a dos atributos",
    ooo : "+2 a todos los atributos",
    oooo : "+4 a un atributo",
    ooooo : "+4 a dos atributos",
    oooooo : "+4 a todos los atributos",
    ooooooo : "+3 a todos los atributos de todos los héroes",
    efectoB2 : "Cuando se aumente la Resistencia, no aumentará la vitalidad."},

    {diosB: ["Ares","Hefesto"], nombreB: "Martillo de Ares", descB: "Ares usa su ira contra tus enemigos, en forma de un poderoso martillo.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Causa 1D10 de daño elemental (Fuego) por cada rango que tenga esta bendición."},

    {diosB: "Ares", nombreB: "Bendición de Ares", descB: "Los héroes de Ares están bendecidos con una fuerza sobrehumana, que les permite realizar proezas imposibles para cualquier ser humano.",
    efectoB : "Esta bendición aumenta permanentemente el daño causado por el héroe.",o : "+2 al daño",
    oo : "+5 al daño",
    ooo : "+7 al daño",
    oooo : "+10 al daño",
    ooooo : "+12 al daño",
    oooooo : "+15 al daño",
    ooooooo : "+18 al daño"},

    {diosB: "Ares", nombreB: "Fuerza de Ares", descB: "El héroe tocado por Ares incrementa sus atributos hasta valores sobrehumanos.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "3 turnos",
    o : "+2 Fuerza",
    oo : "+2 Fuerza, +2 Resistencia",
    ooo : "+2 Fuerza, +2 Resistencia, +7 Daño",
    oooo : "+4 Fuerza, +4 Resistencia, +7 Daño",
    ooooo : "+4 Fuerza, +4 Resistencia, +14 Daño",
    oooooo : "+2 Fuerza, +2 Resistencia, +7 Daño a todos los aliados",
    ooooooo : "+4 Fuerza, +4 Resistencia, +14 Daño a todos los aliados",
    efectoB2 : "Cuando se aumente la Resistencia, no aumentará la vitalidad."},

    {diosB: "Ares", nombreB: "Poder de Ares", descB: "El héroe es cubierto por un aura de poder que hace inútiles los ataques del enemigo.",
    dificultadB : "11",
    lanzamientoB : "Inmediato",
    duracionB : "igual al rango",
    efectoB : "El héroe será inmune a los ataques que reciba, pero cualquier otro efectoB como parálisis o cánticos le afectaran sin causarle daño adicional."},

    {diosB: "Ares", nombreB: "Juicio de Ares", descB: "Ares juzga desde su trono el valor de los guerreros que les honran así como las acciones de sus enemigos.",
    dificultadB : "12",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "El héroe designara un objetivo para la bendición (que no podrá ser ninguna criatura).",
    efectoB2 : "Ambos lanzaran 1D10 y sumaran su atributo de Presencia, si el resultado del enemigo es igual o superior no ocurrirá nada. Pero si es inferior, recibirá 2D10 de daño por rango."},

    {diosB: ["Artemisa","Hefesto"], nombreB: "Flechas de Artemisa", descB: "Artemisa convierte los disparos del héroe en una lluvia de flechas mortales.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Esta bendición se lanzara como un ataque del héroe y se tendrá que tirar para impactar por cada flecha.",
    o : "2 flechas",
    oo : "3 flechas",
    ooo : "4 flechas",
    oooo : "5 flechas",
    ooooo : "6 flechas",
    oooooo : "7 flechas",
    ooooooo : "9 flechas",
    efectoB2 : "El daño de las flechas de artemisa será de 1D10 + Rango + los bonificadores del arma, pero no los de la flecha."},

    {diosB: "Artemisa", nombreB: "Abrazo de la noche", descB: "El héroe se fusiona con la oscuridad volviéndose invisible ante los ojos enemigos.",
    dificultadB : "Variable",
    lanzamientoB : "Inmediato",
    duracionB : "1 hora",
    efectoB : "Esta bendición se lanzara como un ataque del héroe y se tendrá que tirar para impactar por cada flecha.",
    o : "dificultadB: 12",
    oo : "dificultadB: 11",
    ooo : "dificultadB: 10",
    oooo : "dificultadB: 9",
    ooooo : "dificultadB: 8",
    oooooo : "dificultadB: 7",
    ooooooo : "dificultadB: 5"},

    {diosB: ["Artemisa", "Apolo", "Dioniso"], nombreB: "Maldecir flechas", descB: "El héroe maldice las flechas para que causen un daño mayor a sus enemigos.",
    dificultadB : "9",
    lanzamientoB : "1 turno",
    duracionB : "Rango",
    efectoB : "Aumentará el daño causado por cada flecha en 3 por cada rango que tenga la bendición."},

    {diosB: "Artemisa", nombreB: "Espiritus de Artemisa", descB: "Artemisa bendice a sus héroes con la compañía de sus siervos.",
    efectoB : "Si un familiar muere, volverá a la vida tras varios días, al fin y al cabo se trata de un espíritu.",
    o : "Duende volador",
    oo : "Ardilla",
    ooo : "Búho",
    oooo : "Lobo",
    ooooo : "Águila",
    oooooo : "Dientes de sable",
    ooooooo : "Fénix",
    efectoB2 : "Esta bendición se podrá obtener varias veces, para tener varios familiares, el aspecto y los atributos del familiar están descritos en el apartado Bestiario del libro básico."},

    {diosB: "Artemisa", nombreB: "Bendición de Artemisa", descB: "Los héroes de artemisa aumentan sus habilidades al caer la noche, ya que es el momento del día que prefieren para cazar.",
    efectoB : "Mientras sea de noche la DI del héroe aumenta en 2 puntos y la vitalidad máxima en +20."},

    {diosB: "Apolo", nombreB: "Bendición de Apolo", descB: "Apolo bendice a sus aliados con su luz rejuvenecedora curando todos sus males.",
    dificultadB : "9",
    lanzamientoB : "Cántico",
    duracionB : "-",
    efectoB : "Cuando esta bendición afecte a varios héroes, se deberán tirar los dados de curación individualmente.",
    o : "Un héroe recupera 3D10 heridas",
    oo : "Un héroe recupera 4D10 heridas",
    ooo : "Un héroe recupera 5D10 heridas",
    oooo : "Todos los héroes recuperan 3D10 heridas",
    ooooo : "Un héroe recupera 7D10 heridas",
    oooooo : "Todos los héroes recuperan 5D10 heridas",
    ooooooo : "Todos los héroes recuperan 7D10 heridas",
    efectoB2 : "Los cánticos permanecen activos mientras su lanzador desee, aunque no podrá realizar ninguna otra acción."},

    {diosB: "Apolo", nombreB: "Protección de Apolo", descB: "La protección de Apolo protege al héroe ya a sus aliados en forma de escudos celestiales.",
    dificultadB : "9",
    lanzamientoB : "Cántico",
    duracionB : "-",
    efectoB : "Cuando se lance esta bendición el héroe de Apolo deberá elegir un atributo, y este será el aumentado a todos los héroes que escuchen el cántico.",
    o : "+1 DI",
    oo : "+2 DI",
    ooo : "+3 DI",
    oooo : "+4 DI",
    ooooo : "+5 DI",
    oooooo : "+6 DI",
    ooooooo : "+7 DI",
    efectoB2 : "Los cánticos permanecen activos mientras su lanzador desee, aunque no podrá realizar ninguna otra acción."},

    {diosB: "Apolo", nombreB: "Versos de Apolo", descB: "Los versos de Apolo premian a los héroes que los escuchen con valor, energía y claridad.",
    dificultadB : "9",
    lanzamientoB : "Cántico",
    duracionB : "-",
    efectoB : "Cuando se lance esta bendición el héroe de Apolo deberá elegir un atributo, y este será el aumentado a todos los héroes que escuchen el cántico.",
    o : "2 flechas",
    oo : "3 flechas",
    ooo : "4 flechas",
    oooo : "5 flechas",
    ooooo : "6 flechas",
    oooooo : "7 flechas",
    ooooooo : "9 flechas",
    efectoB2 : "Los cánticos permanecen activos mientras su lanzador desee, aunque no podrá realizar ninguna otra acción. Cuando se aumente la Resistencia, no aumentará la vitalidad."},

    {diosB: "Hefesto", nombreB: "Incendiar arma", descB: "Hefesto ayuda al héroe proporcionando el poder de su fragua a las armas de su protegido.",
    dificultadB : "9",
    lanzamientoB : "1 turno",
    duracionB : "Igual al rango",
    efectoB : "El arma causará daño elemental (Fuego) y además aumentará el daño causado en 3 por cada rango que tenga la bendición."},

    {diosB: "Hefesto", nombreB: "Casco de Hades", descB: "El casco de Hades fue forjado por Hefesto para el dios del Inframundo, otorgándole el poder de la invisibilidad.",
    dificultadB : "Variable",
    lanzamientoB : "Inmediato",
    duracionB : "1 hora",
    efectoB : "El héroe será invisible, siempre y cuando no realice ningún movimiento brusco, como por ejemplo, atacar. La dificultadB de la bendición cambiará según el rango.",
    o : "dificultadB: 12",
    oo : "dificultadB: 11",
    ooo : "dificultadB: 10",
    oooo : "dificultadB: 9",
    ooooo : "dificultadB: 8",
    oooooo : "dificultadB: 7",
    ooooooo : "dificultadB: 5"},

    {diosB: ["Hermes","Hefesto"], nombreB: "Sandalias de Hermes", descB: "Las sandalias de Hermes proporcionan al héroe una agilidad y velocidad de reacción sobrehumanas.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "3 turnos",
    o : "+1 Reflejos",
    oo : "+1 Reflejos, +1 Agilidad",
    ooo : "+1 Reflejos, +1 Agilidad, +1 DI",
    oooo : "+2 Reflejos, +1 Agilidad, +1 DI",
    ooooo : "+2 Reflejos, +2 Agilidad, +1 DI",
    oooooo : "+2 Reflejos, +2 Agilidad, +2 DI",
    ooooooo : "+3 Reflejos, +3 Agilidad, +3 DI",
    efectoB2 : "Cuando se aumenten los reflejos o la agilidad, se aumenta inmediatamente la DI."},

    {diosB: "Hermes", nombreB: "Mano de Hermes", descB: "Hermes golpea a sus adversarios a distancia, antes de que puedan darse cuenta.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Causará 1D10+1 de daño por cada rango que tenga la bendición."},

    {diosB: "Hermes", nombreB: "Salto", descB: "El héroe recibe parte del poder de Hermes, que le permite desplazarse rápidamente ignorando la gravedad.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Permite saltar en vertical u horizontal hasta una distancia en metros igual al triple del Rango."},

    {diosB: "Hermes", nombreB: "Bendición del viento", descB: "La bendición del viento es la bendición más poderosa que puede adquirir un héroe de Hermes, ya que proporciona la capacidad de encadenar varias acciones un mismo turno.",
    dificultadB : "Variable",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Si el héroe consigue lanzar con éxito esta bendición, podrá realizar 2 acciones adicionales este turno, que podrá emplear en atacar 2 veces,usar otras bendiciones o disminuir el tiempo de lanzamientoB de otras bendiciones, entre otras cosas.",
    o : "dificultadB: 13",
    oo : "dificultadB: 12",
    ooo : "dificultadB: 11",
    oooo : "dificultadB: 10",
    ooooo : "dificultadB: 9",
    oooooo : "dificultadB: 8",
    ooooooo : "dificultadB: 9 (3 acciones)",
    efectoB2 : "No se puede lanzar esta bendición más de una vez cada turno."},

    {diosB: "Hermes", nombreB: "Invocación de Eolo", descB: "El héroe podrá invocar a Eolo, dios de los vientos.",
    dificultadB : "11",
    lanzamientoB : "1 turno",
    duracionB : "Variable",
    efectoB : "Esta bendición desplaza a los enemigos causándoles además daño, también podrá se podrá utilizar para navegar con un viento fuerte o provocar olas y otros efectoBs.",
    o : "Golpe de Viento, desplaza a un enemigo 1D10 metros si no supera una tirada de Fuerza (dif. 7) Daño: 1D10",
    oo : "Siroco, desplaza a un enemigo 1D10 metros si no supera una tirada de Fuerza (dif.8)  Daño: 2D10",
    ooo : "Tramontana, desplaza a un enemigo 2D10 metros si no supera una tirada de Fuerza (dif.9) Daño: 3D10",
    oooo : "Dispersión de Vientos, desplaza a los enemigos 1D10 metros si no superan una tirada de Fuerza (dif.8) Daño 2D10 a varios enemigos.",
    ooooo : "Tornado, atrae y daña 5D10 a todoslos enemigos si no superan una tiradade Fuerza (dif.9).",
    oooooo : "Huracán, desplaza a los enemigos 1D10 metros si no superan una tirada de Fuerza (dif.10) Daño 7D10 a varios enemigos.",
    ooooooo : "Ciclón, atrae y daña 9D10 a todos los enemigos si no superan una tirada de Fuerza (dif.11)."},

    {diosB: "Hera", nombreB: "Lluvia de meteoros", descB: "Hera hace que lluevan meteoritos para eliminar a los enemigos de los héroes.",
    dificultadB : "13",
    lanzamientoB : "3 turnos",
    duracionB : "-",
    efectoB : "Caerán sobre los enemigos un número de meteoritos iguales al rango de la bendición. Cada meteorito causa 3D10 + Rango de daño."},

    {diosB: "Hera", nombreB: "Bendición de Hera", descB: "Los héroes bendecidos por Hera son mucho mas resistentes a los ataques enemigos.",
    efectoB : "Esta bendición protege al héroe reduciendo el daño que recibirá de cada ataque.",
    o : "-2 al daño",
    oo : "-5 al daño",
    ooo : "-7 al daño",
    oooo : "-9 al daño",
    ooooo : "-12 al daño",
    oooooo : "-15 al daño",
    ooooooo : "-18 al daño"},

    {diosB: "Hera", nombreB: "Armadura de Hera", descB: "Hera protege a sus héroes otorgándoles inmunidad frente a los ataques enemigos.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "hasta que reciba un impacto",
    efectoB : "Esta bendición protege al héroe reduciendo el daño que recibirá en el próximo ataque.",
    o : "-10 al daño",
    oo : "-17 al daño",
    ooo : "-24 al daño",
    oooo : "-30 al daño",
    ooooo : "-37 al daño",
    oooooo : "-45 al daño",
    ooooooo : "-70 al daño"},

    {diosB: "Hera", nombreB: "Ira de Hera", descB: "La furia de Hera es descargada en movimientos sísmicos que sacuden los cimientos de la tierra.",
    dificultadB : "11",
    lanzamientoB : "1 turno",
    duracionB : "-",
    efectoB : "",
    o : "Movimiento Sísmico, todos los personajes cercanos caerán al suelo, si no superan una tirada de Agilidad (dif. 7) para no sufrir un daño de 1D10.",
    oo : "Pequeño Seísmo, todos los personajes cercanos caen al suelo, si no superan una tirada de Agilidad (dif. 9) para no sufrir un daño de 2D10.",
    ooo : "Falla, el suelo se abre dejando escapar una corriente de gas, que causara 3D10 de daño a los personajes cercanos.",
    oooo : "Grieta, abre una pequeña grieta en el suelo (6 metros de longitud) y los enemigos  deberán superar una tirada de Agilidad (dif 10), para no sufrir 4D10 de daño.",
    ooooo : "Seísmo, el héroe podrá moldear un pequeño  terreno a voluntad y los enemigos  afectados sufrirán 4D10 de daño.",
    oooooo : "Terremoto, todos los personajes cercanos caen al suelo y reciben un daño de 5D10.",
    ooooooo : "Epicentro, el héroe se convierte en el foco del terremoto y cualquiera que esté cerca recibirá 10D10 de daño, cada 10 metros se verá reducido el daño en 1D10.",
    efectoB2 : "Cuando un personaje o enemigo caiga al suelo, perderá la acción que vaya a realizar este turno, y el siguiente turno tendrá Iniciativa 1. Además se interrumpirá cualquier acción que este efectuando, como un Cántico por ejemplo."},

    {diosB: "Dioniso", nombreB: "Transformación salvaje", descB: "Dioniso regala a sus héroes la capacidad de convertirse en criaturas salvajes, aumentando así sus capacidades físicas.",
    dificultadB : "11",
    lanzamientoB : "3 turnos",
    duracionB : "-",
    efectoB : "El héroe se transforma durante varios minutos en una criatura.",
    o : "Cuervo",
    oo : "Lobo",
    ooo : "Águila",
    oooo : "Oso",
    ooooo : "Dientes de sable",
    oooooo : "Minotauro",
    ooooooo : "Wyvern",
    efectoB2 : "Las criaturas y los efectoBs de las transformaciones están descritos en el apartado Bestiario del libro básico."},

    {diosB: "Dioniso", nombreB: "Bendición de Dioniso", descB: "El héroe bendecido por Dioniso incrementa sus capacidades hasta valores sobrehumanos.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "3 turnos",
    efectoB : "Los atributos aumentados no podrán sobrepasar de 7.",
    o : "+2 a un atributo",
    oo : "+2 a dos atributos",
    ooo : "+2 a todos los atributos",
    oooo : "+4 a un atributo",
    ooooo : "+4 a dos atributos",
    oooooo : "+4 a todos los atributos",
    ooooooo : "+3 a todos los atributos de todos los héroes",
    efectoB2 : "Cuando se aumente la Resistencia, no aumentará la vitalidad."},

    {diosB: "Dioniso", nombreB: "espiritus_de_dioniso", descB: "Dioniso bendice a sus héroes con la compañía de sus siervos.",
    efectoB : "Si un familiar muere, volverá a la vida tras varios días, al fin y al cabo se trata de un espíritu.",
    o : "Duende volador",
    oo : "Serpiente",
    ooo : "Cuervo",
    oooo : "Lobo",
    ooooo : "Oso",
    oooooo : "Dientes de sable",
    ooooooo : "Pegaso/Pesadilla",
    efectoB2 : "Esta bendición se podrá obtener varias veces, para tener varios familiares, el aspecto y los atributos del familiar están descritos en el apartado Bestiario del libro básico."},

    {diosB: ["Hades", "Persefone"], nombreB: "marchitar", descB: "Con esta bendición, el héroe quita la energía vital del enemigo que toque, envejeciendo sus cuerpos y secándolos.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "1 turno",
    efectoB : "Esta bendición solo afecta a un objetivo al que toques. El enemigo recibirá daño si no supera una tirada de Resistencia de Dif.7 + Rango de la bendición.",
    o : "2D10 de daño",
    oo : "3D10 de daño",
    ooo : "4D10 de daño",
    oooo : "5D10 de daño",
    ooooo : "6D10 de daño",
    oooooo : "7D10 de daño",
    ooooooo : "9D10 de daño"},

    {diosB: "Hades", nombreB: "robavidas", descB: "Los héroes con esta bendición pueden recuperar vitalidad, robandosela a sus enemigos.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "1 turno",
    efectoB : "Esta bendición se puede lanzar a una distancia de hasta 5 metros del objetivo.",
    o : "Roba 1D6 de vitalidad",
    oo : "Roba 2D6 de vitalidad",
    ooo : "Roba 3D6 de vitalidad",
    oooo : "Roba 4D6 de vitalidad",
    ooooo : "Roba 5D6 de vitalidad",
    oooooo : "Roba 6D6 de vitalidad",
    ooooooo : "Roba 7D6 de vitalidad"},

    {diosB: "Hades", nombreB: "ecos_del_mas_alla", descB: "El héroe podrá comunicarse con los espectros de los muertos para conocer su pasado o pedir consejo.",
    dificultadB : "8",
    lanzamientoB : "3 turnos",
    duracionB : "-"
    },

    {diosB: "Hades", nombreB: "alzar_a_los_muertos", descB: "El héroe realiza un extraño ritual para llamara las almas perdidas para que combatan por él.",
    dificultadB : "11",
    lanzamientoB : "3 turnos",
    duracionB : "Indefinida, pero cada turno que esté activa, el héroe perderá vitalidad igual al rango de lanzamientoB (este daño no se puede anular con ninguna armadura u objeto)",
    efectoB : "Esta bendición invoca a seres de ultratumba para que luchen al lado del héroe. Estos obedecerán solo al héroe que les ha invocado. Serán tratados como si fueran un familiar y el héroe puede decidir que desaparezcan cuando quiera.",
    efectoB2 : "Alzar a los Muertos podrá ser lanzada las veces que se quiera, aunque se recibirá el daño por cada bendición.",
    o : "1 Zombi",
    oo : "1 Esqueleto o 1D3 Zombis",
    ooo : "1D3 Esqueletos o 1D6 Zombis",
    oooo : "1D6 Esqueletos o 1D10 Zombis",
    ooooo : "1 Héroe caido",
    oooooo : "2D6 Esqueletos o 2D10 Zombis",
    ooooooo : "1 Monstruo"},

    {diosB: "Hades", nombreB: "vinculo_vital", descB: "El héroe ha aprendido a encantar las armas de sus aliados para absorber la sangre de sus enemigos.",
    dificultadB : "9",
    lanzamientoB : "1 turno",
    duracionB : "igual al rango",
    efectoB : "El objetivo de la bendición deberá ser el arma de un aliado o del héroe, todo el daño que cause el arma mientras dure la bendición, lo ganará en vitalidad el lanzador de la bendición."},

    {
    diosB: ["Hades", "Jueces"], nombreB: "espiritus_de_hades", descB: "Hades concede a sus héroes un poderoso aliado para que le ayude en sus  cometidos.",
    efectoB : "Si un familiar muere, volverá a la vida tras varios días, al fin y al cabo se trata de un espíritu.",
    o : "Duende volador",
    oo : "Búho/Cuervo",
    ooo : "Demonio de Hades",
    oooo : "Lobo",
    ooooo : "Águila",
    oooooo : "Mastín de fuego",
    ooooooo : "Pesadilla",
    efectoB2 : "Esta bendición se podrá obtener varias veces, para tener varios familiares, el aspecto y los atributos del familiar están descritos en el apartado Bestiario del libro básico o del Inframundo."},

    {diosB: ["Persefone", "Jueces"], nombreB: "abrazo_oscuro", descB: "Perséfone abraza a sus fieles otorgándoles invisibilidad.",
    dificultadB : "Variable",
    lanzamientoB : "Inmediato",
    duracionB : "1 hora",
    efectoB : "El héroe será invisible, siempre y cuando no realice ningún movimiento brusco, como por ejemplo, atacar. La dificultadB de la bendición cambiará según el rango.",
    o : "dificultadB: 12",
    oo : "dificultadB: 11",
    ooo : "dificultadB: 10",
    oooo : "dificultadB: 9",
    ooooo : "dificultadB: 8",
    oooooo : "dificultadB: 7",
    ooooooo : "dificultadB: 6"},

    {diosB: "Persefone", nombreB: "mirada_de_gorgona", descB: "El héroe proyecta una mirada capaz de petrificar a cualquier enemigo.",
    dificultadB : "12",
    lanzamientoB : "Inmediato",
    duracionB : "igual al rango",
    efectoB : "Esta bendición solo afecta a un objetivo, cuando la lances deberás tirar 1D10 y sumar el rango de la bendición, y el objetivo deberá tirar 1D10 y sumar su Fuerza de voluntad, si el resultado del objetivo es inferior quedará petrificado.",
    efectoB2 : "No podrá utilizarse con enemigos grandes."},

    {diosB: "Persefone", nombreB: "ira_de_persefone", descB: "Perséfone es la reina del invierno y concede sus dones a los héroes que más sacrificios le ofrecen.",
    dificultadB : "Variable",
    lanzamientoB : "1 turno",
    duracionB : "Variable",
    efectoB : "Todos los ataques causan daño elemental (hielo)",
    o : "Toque Frío. dificultadB: 9, daño 2D10 a un enemigo que toques.",
    oo : "Proyectil Gélido, dificultadB: 9, daño 2D10 a un enemigo a distancia.",
    ooo : "Ráfaga Invernal, dificultadB: 9, daño 2D10 a varios enemigos.",
    oooo : "Congelar, dificultadB: 10, daño 5D10 a un enemigo que toques. Con esta bendición se pueden congelar pequeñas superficies de agua, como un trozo de río o parte de un lago.",
    ooooo : "Bola de Hielo, dificultadB: 10, daño 5D10 a un enemigo a distancia.",
    oooooo : "Invocar Invierno, dificultadB: 11, duracionB: igual al rango. Todos los demás, amigos y enemigos, sufren una penalización de -4 a todas las acciones, a no se que superen una tirada de Resistencia de Dif.12. Además todos los afectados recibirán 1D10 de daño cada turno.",
    ooooooo : "Prisión de Hielo, dificultadB: 12. El objetivo que toques recibe 7D10 de daño y deberá superar una tirada de Fuerza Dif.12, para no quedar atrapado. Si queda atrapado recibirá 3D10 de daño cada turno."},

    {diosB: "Persefone", nombreB: "oscura_transformacion", descB: "Perséfone regala a sus héroes la capacidad de convertirse en criaturas del Inframundo, aumentando así sus  capacidades físicas.",
    dificultadB : "11",
    lanzamientoB : "3 turnos",
    duracionB : "Variable",
    efectoB : "El héroe se transforma durante varios minutos en una criatura.",
    o : "Cuervo",
    oo : "Demonio de Hades",
    ooo : "Mastín de fuego",
    oooo : "Harpía",
    ooooo : "Escorpión gigante",
    oooooo : "Engendro de Hades",
    ooooooo : "Esfinge",
    efectoB2 : "Las descripciones de las características se encuentran en el bestiario del libro básico o del Inframundo."},

    {diosB: "Jueces", nombreB: "absorber_almas", descB: "El héroe absorbe las almas de sus victimas para ofrecérselas en tributo a su dios Hades.",
    dificultadB : "9",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "Cuando el héroe con esta bendición acabe con un enemigo poderoso o  monstruo, podrá lanzar esta bendición. si tiene éxito recuperará 1D10 heridas por rango y ganará puntos de fama adicionales.",
    o : "+1 Fama",
    oo : "+2 Fama",
    ooo : "+3 Fama",
    oooo : "+4 Fama",
    ooooo : "+7 Fama",
    oooooo : "+9 Fama",
    ooooooo : "+12 Fama",
    efecto2B : "Esta bendición solo podrá ser lanzada por un héroe a un objetivo recién muerto, si se tardan mas de 3 turnos en reclamar el alma, esta se perderá."},

    {diosB: "Jueces", nombreB: "congelar_arma", descB: "El héroe se encomienda a su reina Perséfone, para que dote de poder a sus armas.",
    dificultadB : "9",
    lanzamientoB : "1 turno",
    duracionB : "Igual al rango",
    efectoB : "El arma causará daño elemental (Hielo) y además aumentará el daño causado en 3 por cada rango que tenga la bendición."},

    {diosB: "Jueces", nombreB: "juicio_de_minos", descB: "El héroe llama a Minos para que juzgue a sus enemigo por sus actos.",
    dificultadB : "11",
    lanzamientoB : "Inmediato",
    duracionB : "-",
    efectoB : "El héroe designara un objetivo para la bendición (que no podrá ser ninguna criatura).",
    efecto2B : "Ambos lanzaran 1D10 y sumaran su atributo de Inteligencia, si el resultado del enemigo es igual o superior no ocurrirá nada. Pero si es inferior, recibirá 2D10 de daño por rango."}
    ]
    
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
        };
    
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    
})

.controller('ventajasCtrl', function($scope) {
    
    $scope.ventajas = [];
    
    $scope.ventajas = [   
        {nombre: "Adicción", puntos: "2 o 4 ", 
         tipo: "D", desc:"El héroe es adicto a alguna sustancia, alimento o cualquier otra manía, a discreción del director de juego."},
        {nombre: "Agilidad felina", puntos: "1 ", tipo: "V", desc:"El héroe ha desarrollado una habilidad especial para caer bien desde cualquier altura, por eso sólo recibirá la mitad de daño provocado por una caída."},
        {nombre: "Alimentación alternativa", 
         puntos: "4 ", tipo: "D", desc:"El estómago del héroe no digiere correctamente los alimentos normales y deberá llevar una dieta especial, comiendo solo los alimentos que pueda.\n \n \n Esta desventaja necesitará establecer entre el jugador y el director de juego unos alimentos o substancias de las que podrá alimentarse el héroe, el coste de la desventaja quedará discreción del director."},
        {nombre: "Amor perdido", puntos: "2 ", 
         tipo: "D", desc:"Conociste el amor en otra época y lo perdiste. Tienes penalizaciones a todas las tiradas, siempre que algo te recuerde a tu antiguo amor."},
        {nombre: "Anciano", puntos: "7 ", tipo: "D", desc:"Superados los 80 años de vida, el cuerpo del héroe ya no responde tan bien, aunque ha alcanzado un grado de sabiduría superior.<br />+2 Inteligencia<br />-30 Vitalidad<br />-2 a todas las acciones que impliquen, Fuerza, Resistencia, Destreza, Agilidad y Reflejos."},
        {nombre: "Ascendencia helada", puntos: "4 ", tipo: "V", desc:"Perséfone tiene un especial aprecio al personaje a quien ayudará en su camino.Todos los ataques cuerpo a cuerpo del héroe causarán daño de Hielo, a no ser que las armas tengan otro daño elemental, entonces prevalecerá el daño del arma."},
        {nombre: "Asmático", puntos: "4 ", tipo: "V", desc:"El personaje no puede realizar esfuerzos físicos durante mucho tiempo.Cada vez que esté haciendo alguna acción que implique esfuerzo físico deberá superar una tirada de Resistencia a partir del segundo turno (Dificultad 4). Cada turno posterior incrementara la dificultad en un punto."},
        {nombre: "Bebedor de sangre", puntos: "5 ", tipo: "V", desc:"El héroe se alimenta de la muerte de sus enemigos, lo que le hace ser aun más peligroso.Recuperará 1 punto de vitalidad por cada 5 puntos de daño que cause en cuerpo a cuerpo"},
        {nombre: "Bien nacido", puntos: "3 ", tipo: "V", desc:"Por alguna extraña razón les caes bien a los dioses y sueles tener esa suerte que todos desean. Una vez por día, podrás repetir cualquier tirada fallida."},
        {nombre: "Calar a la gente", puntos: "3 ", tipo: "V", desc:"Siempre sabes cuándo te mienten y sueles saber de antemano lo que van a decirte."},
        {nombre: "Cazador", puntos: "2 ", tipo: "V", desc:"Los cazadores son especialistas en eliminar a cierto tipo de criaturas. El jugador y el director deberán acordar que a que tipo de criaturas afectará esta ventaja. Siempre que el héroe ataque a este tipo de criatura, obtendrá un +1 a la tirada para impactar. Algunos ejemplos de Cazador pueden ser: Cazador de felinos, Cazador de aves, Cazador de dragones..."},
        {nombre: "Cenizo", puntos: "3 ", tipo: "D", desc:"Sueles traer mala suerte y eso puede afectarte en las relaciones con los demás. Una vez al día tendrás mala suerte y lo sabes."},
        {nombre: "Cicatriz", puntos: "1 ", tipo: "D", desc:"El héroe ha sobrevivido a grandes hazañas y muestra de ello son las grandes marcas que adornan su cuerpo, +1 a presencia cuando se intente intimidar y -2 a carisma cuando se trate con otras personas."},
        {nombre: "Crédulo", puntos: "2 ", tipo: "D", desc:"Te crees casi cualquier cosa que te cuenten y eres fácil de engañar."},
        {nombre: "Debilidad", puntos: "2 ", tipo: "D", desc:" (Frio o Calor) El héroe no está acostumbrado a las altas o bajas temperaturas y sufrirá 1D6 adicional cuando reciba daño de Frío o de Fuego.<br />*Esta desventaja puede ser adquirida dos veces por el mismo héroe, una por la debilidad al frío y otra para el calor."},
        {nombre: "Deuda de sangre", puntos: "5 ", tipo: "D", desc:"Un héroe que tenga un juramento de sangre con algún dios, ha sido beneficiado anteriormente por la deidad, puede que le haya sanado de alguna enfermedad mortal o salvado de alguna otra forma. Ahora el héroe debe corresponder al dios y cada vez que utilice alguna de sus bendiciones, perderá vitalidad igual al rango de la bendición.<br />*Solo se puede tener una deuda de sangre con una deidad afín."},
        {nombre: "Doble personalidad", puntos: "3 ", tipo: "D", desc:"Algo raro te pasa y no puedes comprenderlo muy bien, la gente alrededor ha empezado a preocuparse por tus bruscos cambios de humor. Cuando el héroe se vea sometido a una gran presión, deberá efectuar una tirada de Fuerza de Voluntad, para poder contenerse y no dejar salir a su lado oscuro.<br />*Estos efectos suelen ser variables, normalmente se llega a un acuerdo con el director, sobre la personalidad de su alter ego, si el personaje es un bien nacido, podría pasar un rato a ser cenizo o si utiliza armas a distancia, quizás este es el momento para lanzarse al cuerpo a cuerpo."},
        {nombre: "Don de gentes", puntos: "1 ", tipo: "V", desc:"El personaje tiene el don de caer bien a la gente que conoce y sus relaciones con los demás personajes serán siempre más fluidas. Sumará 2 a todas las tiradas de carisma que impliquen trato con otras personas."},
        {nombre: "Dudosa ascendencia", puntos: "4 ", tipo: "D", desc:"Los dioses tienen a prueba al héroe, ya que no están claras las pautas de su nacimiento. El héroe tendrá un penalizador de -1 a todos los lanzamientos de bendiciones."},
        {nombre: "Duelista", puntos: "4 ", tipo: "V", desc:"El héroe ha desarrollado una capacidad innata para anticiparse a sus contrincantes y se beneficiará de un +5 a la iniciativa el primer turno de cada combate."},
        {nombre: "Familiar", puntos: "X ", tipo: "V", desc:"Por fortuna o como recompensa a alguna de tus ofrendas, se te concedió un familiar, un pequeño animal o ser mitológico, que puede ayudarte según su humor y sus propias habilidades. (3 puntos): Un gato, una lechuza o cualquier tipo de pájaro o animal pequeño. Ofrecerá consejo o ayuda de forma esporádica, sin participación en los combates.(5 puntos): Un perro de caza, águilas, caballos o un tritón, puede participar en el combate, aunque se puede usar para cualquier otra causa, como espiar, transporte o rastreo.(9 puntos): Un caballo alado o un joven dientes de sable es tu aliado, también podría ser una críade wyvern, dragón, gorgona o sierpe marina."},
        {nombre: "Feromonas", puntos: "3 ", tipo: "V", desc:"El héroe desprende un aroma especial que atrae a la personas del sexo opuesto o del mismo sexo (deberá indicarse al comprar la Ventaja), esto le proporciona un bonificador de +3 a Carisma al tratar con ellas."},
        {nombre: "Fobia", puntos: "2 o 4 ", tipo: "D", desc:"El héroe tiene una fobia a cierto tipo de situación o elemento, cada vez que se enfrente a sus miedos deberá esperar una tirada de fuerza de voluntad para no quedarse paralizado por el miedo o huir."},
        {nombre: "Forma de Centauro", puntos: "7 ", tipo: "V", desc:"El personaje tendrá aspecto de Centauro, mitad humano, mitad caballo, con las siguientes modificaciones a su perfil:<br />+1 Fuerza<br />+1 Presencia<br />-2 Carisma (entre humanos)<br />+25 Vitalidad<br />*Esta Ventaja sólo está disponible para héroes afines a Dioniso."},
        {nombre: "Forma de Sátiro", puntos: "5 ", tipo: "V", desc:"El personaje tendrá aspecto de sátiro, es decir, cuernos en la cabeza, piernas de carnero y cola, con las siguientes modificaciones a su perfil:<br />+1 Agilidad<br />+1 Percepción<br />-2 Carisma (entre humanos)<br />*Esta Ventaja sólo está disponible para héroes afines a Dioniso."},
        {nombre: "Fotosensible", puntos: "3 ", tipo: "D", desc:"El héroe está acostumbrado a la oscuridad y tiene difiultades para moverse durante el día.<br />Sufrirá un penalizador de -1 a todas las tiradas que realice a la luz del sol."},
        {nombre: "Gran comerciante", puntos: "4 ", tipo: "V", desc:"Tu carisma y la forma que tienes para regatear a los mercaderes hace que puedas aprovecharte siempre de una rebaja al intentar comprar cualquier objeto."},
        {nombre: "Hígado débil", puntos: "4 ", tipo: "D", desc:"El héroe tiene intolerancia a alguna substancia o a determinado tipo de alimento. Si lo consume puede caer enfermo unos cuantos días."},
        {nombre: "Historiador", puntos: "3 ", tipo: "V", desc:"Te han enseñado la antigua historia desde que naciste y podrías recitar la vida y obra de cualquier dios del Olimpo, así como la de todos sus descendientes."},
        {nombre: "Incapaz de mentir", puntos: "3 ", tipo: "D", desc:"Cada cosa que piensas la dices y esto no siempre es bueno."},
        {nombre: "Inmunidad", puntos: "2 ", tipo: "V", desc:"El héroe disfruta de inmunidad contra algo que puede envenenar o matar a cualquiera. Puede tratarse de cianuro, gas, el alcohol o cualquier otra cosa."},
        {nombre: "Irrespetuoso", puntos: "1 ", tipo: "D", desc:"El tono o la forma en la que suele hablar el héroe no acaba de gustar a la gente que le rodea, tendrá un modificador de -1 a carisma en todas las relaciones con gente."},
        {nombre: "Lisiado", puntos: "4 ", tipo: "D", desc:"El héroe está cojo debido a las heridas de guerra o desde su nacimiento.<br />Sufrirá un -3 a todas las tiradas que impliquen Refljos o Agilidad."},
        {nombre: "Maestría en combate", puntos: "3 ", tipo: "V", desc:"Te has convertido en un maestro con tu arma preferida y esto añade una bonificación de 3 al daño de cada ataque."},
        {nombre: "Maestro de la finta", puntos: "3 ", tipo: "V", desc:"Si el héroe consigue con éxito esquivar un ataque cuerpo a cuerpo, actuará en primer lugar el siguiente turno de combate."},
        {nombre: "Maestro de los cánticos", puntos: "7 ", tipo: "V", desc:"El héroe ha caído en gracia a los dioses por la manera de alabarles que podrá usar dos cánticos a la vez. (se lanzaran las tiradas de dificultad pertinentes y no se podrá repetir un cántico, la duración de cada cántico será la que se indique en cada caso)"},
        {nombre: "Mala fama", puntos: "2 ", tipo: "D", desc:"El héroe se ha ganado una mala reputación en el pasado y la gente no acabara de firse de él, será difícil que le encarguen misiones o que le paguen al finalizarlas."},
        {nombre: "Maldición de Afrodita", puntos: "2 ", tipo: "D", desc:"Te pierden las mujeres (o los hombres), siempre que realices alguna tirada en presencia de alguien de tu agrado, perderás un poco la concentración y sufrirás un -1 a todas tus acciones."},
        {nombre: "Maldito", puntos: "X ", tipo: "V", desc:"El héroe tiene alguna mutación extraña, que puede haber sido causa del enfurecimiento de algún dios.<br />El efecto de esta maldición puede ser de lo más variado, desde cuernos, cola o extremidades adicionales.<br />Tanto el efecto que pueda tener sobre el personaje como el coste de puntos queda a discreción del director de juego.<br />*Por ejemplo, unas alas con las que el héroe pudiera volar deberían costar más de 9 puntos."},
        {nombre: "Marca de Hades", puntos: "2 ", tipo: "D", desc:"Hay algo oscuro en ti, pueden ser los ojos rojos, tu tacto frío o las uñas extremadamente afiadas, te costara ganarte la confinza de la gente, pero también te ayudara a la hora de intimidar."},
        {nombre: "Negado por los dioses", puntos: "5 ", tipo: "D", desc:"Los dioses no están del todo contentos con el héroe y son reticentes a regalarle sus favores.<br />El héroe recibe la mitad de fama que recibiría normalmente, redondeando a la baja."},
        {nombre: "Obsesion", puntos: "3 ", tipo: "D", desc:"Tienes un objetivo, y lo sacrifiarías todo para lograrlo, aunque esto te lleve a la muerte."},
        {nombre: "Pasado oscuro", puntos: "5 ", tipo: "D", desc:"El héroe tiene un pasado que desconoce y esto puede traerle problemas en un futuro próximo, puede que tuviese un hermano que desea acabar con él, o alguna ofensa a un dios."},
        {nombre: "Popular", puntos: "4 ", tipo: "V", desc:"El personaje es conocido en toda Grecia, o en parte de ella, cualquier persona puede reconocerle vaya donde vaya. Y las relaciones que pueda tener con cualquier persona serán siempre más fluidas."},
        {nombre: "Poseido", puntos: "3 o 5 ", tipo: "D", desc:"Cuando el héroe se encuentra en un momento de mucha presión, su cuerpo y mente pueden ser poseídos por alguna alma en pena.<br />Al menos una vez al día el héroe deberá superar una tirada de Fuerza de Voluntad (Dif.7/9), para no perder el control.<br />*Los efectos de esta desventaja, quedan a discreción del director de juego, se recomienda que el jugador pierda el control de su personaje durante unos pocos turnos y se le permita realizar la misma tirada en turnos sucesivos para volver a tomar el control de su cuerpo."},
        {nombre: "Predicción", puntos: "1 ", tipo: "V", desc:"El personaje tiene el don de la Predicción y puede percibir el futuro con alguno de sus trucos: leyendo runas, con marcas de sangre o mirando las nubes.<br />Una vez al día, el héroe puede realizar una predicción sobre su futuro, el ritual quedará a discreción del director de juego.<br />Para que tenga éxito deberá realizar una tirada de 1D10 con Dif.7 sin modificadores por atributos, el resultado de la predicción queda a discreción del director de juego."},
        {nombre: "Punto débil", puntos: "3 ", tipo: "D", desc:"Aquiles tenía su talón y Polifemo su ojo, ¿cuál es el tuyo?<br />Esta maldición puede aplicarse a cualquier parte del cuerpo, o de cualquier otra forma, por ejemplo una espada inseparable, tu familiar o algún tipo de material."},
        {nombre: "Recuperación rápida", puntos: "1, 3 o 5 ", tipo: "V", desc:"El héroe ha desarrollado una capacidad de regeneración más rápida de lo normal, por eso se curará 1, 3 o 5 puntos más cada vez que recupere vitalidad."},
        {nombre: "Respirar bajo del agua", puntos: "2 ", tipo: "V", desc:"El héroe ha desarrollado un modo alternativo de respiración debajo del agua, que le impide morir por ahogamiento."},
        {nombre: "Sangre de Hades", puntos: "5 ", tipo: "V", desc:"El héroe ha seguido también la senda de la nigromancia que le permite invocar muertos para sus propósitos. Podrá elegir bendiciones de Hades como si fuesen afies.<br />*Esta ventaja solo puede ser elegida por un héroe del Inframundo."},
        {nombre: "Sangre de Perséfone", puntos: "5 ", tipo: "V", desc:"El héroe ha aprendido la poderosa senda de la magia negra. Podrá elegir bendiciones de<br />Perséfone como si fuesen afines.<br />*Esta ventaja solo puede ser elegida por un héroe del Inframundo."},
        {nombre: "Sangre de Juez", puntos: "5 ", tipo: "V", desc:"Por las venas del héroe corre la sangre de lo que antaño fue un Juez.<br />El héroe podrá elegir bendiciones de Juez como si fuesen afines.<br />*Esta ventaja solo puede ser elegida por un héroe del Inframundo."},
        {nombre: "Sano", puntos: "2 ", tipo: "V", desc:"El héroe lleva una buena alimentación y no suele tener problemas con las enfermedades.<br />Tira 1D10 adicional para calcular la vitalidad inicial."},
        {nombre: "Sed de sangre", puntos: "2 ", tipo: "V", desc:"El héroe tiene una Sed de Sangre que solo paliará con la muerte de sus enemigos, convirtiéndole en un enemigo aun más terrible.<br />Esta ventaja proporciona al héroe un +2 al daño, por cada enemigo que haya matado en la última media hora. Además, no podrá declarar que huye de ningún combate."},
        {nombre: "Sentido común", puntos: "2 ", tipo: "V", desc:"Cada vez que vayas a cometer una estupidez, algo en tu interior tratará de impedírtelo, pero una tirada de Fuerza de voluntad te puede ayudar a salvar la vida y la de tus compañeros."},
        {nombre: "Sentido desarrollado", puntos: "2 ", tipo: "V", desc:"Has desarrollado uno de los 5 sentidos (gusto, tacto, oído, vista o olfato) podrás repetir una tirada fallida cada día, que implique el sentido que has elegido."},
        {nombre: "Señor de los muertos", puntos: "3 ", tipo: "V", desc:"Siempre que lance con éxito la bendición Alzar a los Muertos, levantará un zombi o esqueleto adicional."},
        {nombre: "Terror", puntos: "3 ", tipo: "D", desc:"De pequeño siempre te aterrorizaban las historias sobre los centauros o las esfiges, puede ser que cuando estés frente a alguno de tus temores, no puedas enfrentarte a ellos. Una tirada de Fuerza de voluntad te puede dar coraje."},
        {nombre: "Tocado por los dioses", puntos: "5 ", tipo: "V", desc:"Tu dedicación o alguna de tus hazañas pasadas ha hecho que caigas en gracia con algún otro dios. Podrás elegir bendiciones de otro dios como si fuese afín, deberás elegir un dios al seleccionar esta bendición."},
        {nombre: "Tuerto", puntos: "3 ", tipo: "D", desc:"El héroe ha recibido una herida en el ojo que le impide usarlo completamente. -2 a percepción cuando se use la vista."},
        {nombre: "Valentía estúpida", puntos: "2 ", tipo: "D", desc:"La bendición de los tontos, creerse un ser inmortal puede tener graves consecuencias, no puedes dejar nadie atrás y siempre eres el primero en lanzarse al ataque."},
        {nombre: "Viejo", puntos: "3 ", tipo: "D", desc:"El héroe tiene más de 60 años y ha perdido algunas de sus facultades de combate.<br />+1 Inteligencia<br />-15 Vitalidad"},
        {nombre: "Visión nocturna", puntos: "2 ", tipo: "V", desc:"Los héroes con esta bendición están acostumbrados a la oscuridad y no son penalizados por realizar acciones cuando se encuentran en estas condiciones."},
        {nombre: "Vulnerable", puntos: "5 ", tipo: "D", desc:"Las condiciones físicas que tienes no son las más adecuadas para ser un verdadero héroe.<br />Siempre que recibas daño, de cualquier tipo, recibirás 3 de daño adicional."}
        
    ]
    
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
        };
    
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    
})

.controller('oraculoCtrl', function($scope) {
    
    $scope.oraculo = [];
    
    $scope.donde = ["Atenas","Delfos","Argos","Troya","Hefestia","Arcadia","Lemnos","Lesbos","Tesalia","Termopilas"];
        
    $scope.quien = ["Ateneo","Zeus","Hefesto","Ares","Apolo","Artemisa","Hades","Hera","Hermes","Dioniso"];
    
    $scope.como = [
        "Ha robado ...",
        "Ha atacado ..",
        "Ha sido secuestrado en..",
        "le gusta...",
        "Le buscan..",
        "Le temen..",
        "Ha desaparecido",
        "Ha sido visto...",
        "Juega con...",
        "Destruye ..."];
    
    //Math.floor((Math.random() * 10) + 1);
    
    $scope.oraculoCard = {}
    $scope.oraculoCard.show = false;
    
    $scope.oraculo.preguntar = function(){
        $scope.oraculo.donde = $scope.donde[Math.floor((Math.random() * $scope.donde.length))];
        $scope.oraculo.quien = $scope.quien[Math.floor((Math.random() * $scope.quien.length))];
        $scope.oraculo.como = $scope.como[Math.floor((Math.random() * $scope.como.length))];
        $scope.oraculoCard.show = true;
    }
        

})

.controller('dadosCtrl', function($scope) {
    
    $scope.oraculo = [];
    
    //Math.floor((Math.random() * 10) + 1);
    
    $scope.oraculoCard = {}
    $scope.oraculoCard.show = false;
    
    $scope.oraculo.preguntar = function(){
        $scope.oraculo.donde = $scope.donde[Math.floor((Math.random() * $scope.donde.length))];
        $scope.oraculo.quien = $scope.quien[Math.floor((Math.random() * $scope.quien.length))];
        $scope.oraculo.como = $scope.como[Math.floor((Math.random() * $scope.como.length))];
        $scope.oraculoCard.show = true;
    }
        

})

.controller('escuelasCtrl', function($scope) {
    
    $scope.escuelas = [
        { nombre: 'Fuego', id: 1 },
        { nombre: 'Mar', id: 2 },
        { nombre: 'Aire', id: 3 },
        { nombre: 'Tierra', id: 4 },
        { nombre: 'Serenidad', id: 5 },
        { nombre: 'Tinieblas', id: 6 }
    ];
    
    
})

.controller('tecnicasCtrl', function($scope, $stateParams, $state) {
    
    //console.log($state.current);
    $scope.escuela = $stateParams.tecnicasNombre;
    $scope.tecnicas = [];
    
    $scope.tecnicas = [
        {escuelaB:"Fuego", diosB: "Zeus", nombreB: "Ira de Zeus", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Fuego", diosB: "Zeus", nombreB: "Ira de poseidon", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:["Fuego","Mar"], diosB: "Zeus", nombreB: "Ira de Poseidon y zeus", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Aire", diosB: "Zeus", nombreB: "Ira de atenea", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Aire", diosB: "Zeus", nombreB: "Ira de Zeus2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Aire", diosB: "Zeus", nombreB: "Ira de Zeus2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Mar", nombreB: "Ira de poseidon2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Mar", nombreB: "Ira de poseidon3", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Mar", nombreB: "Ira de hades2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Serenidad", nombreB: "Ira de ares", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
        {escuelaB:"Serenidad", nombreB: "Ira de ares2", descB:"descripcion corta", difB:"8", duracionB:"3 turnos", efectoB:"efecto de la bendicion", desc2B:"lo de los puntos"},
    ]
    
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
        };
    
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    
})

.controller('fotoCtrl', function($scope, $cordovaCamera, $ionicPlatform) {

    $ionicPlatform.ready(function() {
        
        console.log("dentro de sacar foto deviceready");
        
        $scope.sacarFoto = function(group) {
            console.log("dentro de sacar foto funcion");
            
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation:true
            };
            
            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                // error
            });
        }
    });
    
    
    
})

.controller('scannerCtrl', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {
    
    $scope.test = "hol SCANNER"; 
    
    $scope.vm = [];

    $scope.vm.scan = function(){
        $ionicPlatform.ready(function() {
            $cordovaBarcodeScanner
                .scan()
                .then(function(result) {
                    // Success! Barcode data is here
                    $scope.vm.scanResults = "We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled;
                }, function(error) {
                    // An error occurred
                    $scope.vm.scanResults = 'Error: ' + error;
                });
        });
    };

    $scope.vm.scanResults = '';
});
