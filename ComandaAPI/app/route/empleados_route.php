<?php
use App\Lib\Auth,
    App\Lib\Response,
    App\Validation\TestValidation,
    App\Middleware\AuthMiddleware;

$app->group('/empleados/', function () {

    $this->get('listar/{l}/{p}', function ($req, $res, $args) {
        return $res->withHeader('Content-type', 'application/json')
                   ->write(json_encode($this->model->empleado->getAll($args['l'], $args['p'])));
    });

    $this->get('traer/{id}', function ($req, $res, $args) {
        return $res->withHeader('Content-type', 'application/json')
                   ->write(json_encode($this->model->empleado->get($args['id'])));
    });
    
    $this->post('registrar', function ($req, $res, $args) {
        return $res->withHeader('Content-type', 'application/json')
                   ->write(json_encode($this->model->empleado->insert($req->getParsedBody())));
    });

    $this->put('modificar/{id}', function ($req, $res, $args) {
        return $res->withHeader('Content-type', 'application/json')
                   ->write(json_encode($this->model->empleado->update($req->getParsedBody(),$args['id'])));
    });

    $this->delete('eliminar/{id}', function ($req, $res, $args) {
        return $res->withHeader('Content-type', 'application/json')
                   ->write(json_encode($this->model->empleado->delete($args['id'])));
    });
    
    $this->post('valida', function ($req, $res, $args) {
        $r = TestValidation::validate($req->getParsedBody());
        
        if(!$r->response){
            return $res->withHeader('Content-type', 'application/json')
                       ->withStatus(422)
                       ->write(json_encode($r->errors));            
        }
        
        return $res->withHeader('Content-type', 'application/json')
                   ->write(json_encode($this->model->test->getAll()));
    });
    
    $this->get('auth', function ($req, $res, $args) {
        $token = Auth::SignIn([
            'Nombre' => 'Eduardo',
            'Correo' => 'eduardo@anexsoft.com',
            'Imagen' => null
        ]);
        
        $res->write($token);
    });
    
    $this->get('auth/validate', function ($req, $res, $args) {
        $res->write('OK');
    })->add(new AuthMiddleware($this));
});