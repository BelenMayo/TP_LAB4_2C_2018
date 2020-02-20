<?php

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], Monolog\Logger::DEBUG));
    return $logger;
};

// Database
$container['db'] = function($c){
    $connectionString = $c->get('settings')['connectionString'];
    
    $pdo = new PDO($connectionString['dns'], $connectionString['user'], $connectionString['pass']);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

    return new FluentPDO($pdo); 
};

// Models
$container['model'] = function($c){
    return (object)[
        'categoria' => new App\Model\CategoriasModel($c->db),
        'cliente' => new App\Model\ClientesModel($c->db),
        'detalle_pedido' => new App\Model\DetallePedidosModel($c->db),
        'empleado' => new App\Model\EmpleadosModel($c->db),
        'encuesta' => new App\Model\EncuestasModel($c->db),
        'estado_empleado' => new App\Model\EstadoEmpleadosModel($c->db),
        'estado_mesa' => new App\Model\EstadoMesasModel($c->db),
        'estado_pedido' => new App\Model\EstadoPedidosModel($c->db),
        'estadistica' => new App\Model\EstadisticasModel($c->db),
        'menu' => new App\Model\MenusModel($c->db),
        'mesa' => new App\Model\MesasModel($c->db),
        'pedido' => new App\Model\PedidosModel($c->db),
        'seccion' => new App\Model\SeccionesModel($c->db),
        'sector_pedido' => new App\Model\SectorPedidosModel($c->db),
        'tipo_empleado' => new App\Model\TipoEmpleadosModel($c->db),
        'registro' => new App\Model\RegistroModel($c->db),
        'login' => new App\Model\LoginModel($c->db)
    ];
};