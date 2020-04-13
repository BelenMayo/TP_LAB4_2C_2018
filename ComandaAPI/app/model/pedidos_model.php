<?php
namespace App\Model;

use App\Lib\Response;

class PedidosModel
{
    private $db;
    private $table = 'pedidos';
    private $table2 = 'sector_pedidos';
    private $response;
    
    public function __CONSTRUCT($db)
    {
        $this->db = $db;
        $this->response = new Response();
    }
    
    public function getAll($l, $p)
    {
        $l = $l * 100;

        $data = $this->db->from($this->table)
                         ->limit($l)
                         ->offset($p)
                         ->fetchAll();
        
        $total = $this->db->from($this->table)
                          ->select('COUNT(*) Total')
                          ->fetch()
                          ->Total;
        
        return [
            'data'  => $data,
            'total' => $total
        ];
    }

    public function getAllEmpleados($l, $p, $tipoEmpleado)
    {
        $l = $l * 100;

        $data = $this->db->from($this->table)
                         ->leftJoin("estado_pedidos on estado_pedidos.id_estado_pedido = pedidos.id_estado_pedido")
                         ->leftJoin("clientes on clientes.id_cliente = pedidos.id_cliente")
                         ->leftJoin("sector_pedidos on sector_pedidos.id_pedido = pedidos.id_pedido")
                         ->leftJoin("tipo_empleados on tipo_empleados.id_tipo_empleado = sector_pedidos.id_tipo_empleado")
                         ->leftJoin("menus on menus.id_menu = sector_pedidos.id_menu")
                         ->select("pedidos.*, estado_pedidos.detalle as detalleEstadoPedido, clientes.nombre as nombreCliente, 
                                    clientes.apellido as apellidoCliente, menus.nombre as detalleMenu, sector_pedidos.id_estado_pedido as estadoPedido,
                                    sector_pedidos.id_menu as idMenu, 
                                    sector_pedidos.id_estado_pedido as idEstadoPedido, sector_pedidos.id_sector_pedido as idSectorPedido") 
                         ->where("(sector_pedidos.id_estado_pedido = 1 or sector_pedidos.id_estado_pedido = 2) and tipo_empleados.id_tipo_empleado = " . $tipoEmpleado)               
                         ->limit($l)
                         ->offset($p)
                         ->fetchAll();
        
        return [
            'data'  => $data
        ];
    }

    public function getAllMozo($l, $p)
    {
        $l = $l * 100;

        $data = $this->db->from($this->table)
                         ->leftJoin("estado_pedidos on estado_pedidos.id_estado_pedido = pedidos.id_estado_pedido")
                         ->leftJoin("clientes on clientes.id_cliente = pedidos.id_cliente")
                         ->leftJoin("sector_pedidos on sector_pedidos.id_pedido = pedidos.id_pedido")
                         ->leftJoin("tipo_empleados on tipo_empleados.id_tipo_empleado = sector_pedidos.id_tipo_empleado")
                         ->leftJoin("menus on menus.id_menu = sector_pedidos.id_menu")
                         ->select("pedidos.*, estado_pedidos.detalle as detalleEstadoPedido, clientes.nombre as nombreCliente, 
                                    clientes.apellido as apellidoCliente, menus.nombre as detalleMenu, sector_pedidos.id_estado_pedido as estadoPedido,
                                    sector_pedidos.id_tipo_empleado as idTipoEmpleado, sector_pedidos.id_menu as idMenu, 
                                    sector_pedidos.id_estado_pedido as idEstadoPedido, sector_pedidos.id_sector_pedido as idSectorPedido")      
                         ->where("sector_pedidos.id_estado_pedido = 3")
                         ->limit($l)
                         ->offset($p)
                         ->fetchAll();
        
        $total = $this->db->from($this->table)
                          ->select('COUNT(*) Total')
                          ->fetch()
                          ->Total;
        
        return [
            'data'  => $data,
            'total' => $total
        ];
    }

    public function getUltimoPedido()
    {
        $data = $this->db->from($this->table)
                         ->where("id_pedido = (select max(id_pedido) from pedidos)")
                         ->fetch("id_pedido");
        
        return [
            'data'  => $data
        ];
    }

    public function get($id)
    {
        $data = $this->db->from($this->table)
                     ->where('id_pedido = ' . $id)
                     ->fetchAll();
               
        return ['data'  => $data];
    }
    
    public function insert($data)
    {   
        //$id_pedido= string;

        //$id_pedido = 
        // $this->db->insertInto($this->table, $pedido)
        //          ->execute();

        // for ($index=0; $index < $pedido['detallePedido'].length; $index++) {
        //     $this->db->insertInto($this->table2, $pedido['detallePedido'][$index])
        //     ->execute();     
        // }


        $comandaID = $this->db
                ->insertInto($this->table, [
                    'id_cliente'         => $data['id_cliente'],
                    'id_mesa'            => $data['id_mesa'],
                    'codigo_pedido'      => $data['codigo_pedido'],
                    'id_estado_pedido'   => $data['id_estado_pedido'],
                    'hora_pedido'        => $data['hora_pedido'],
                    'tiempo_espera'      => $data['tiempo_espera'],
                    'total'              => $data['total']
                ])->execute();

        foreach($data["detallePedido"] as $item){
            $this->db->insertInto($this->table2, [
                'id_pedido'             => $comandaID,
                'id_tipo_empleado'      => $item['id_tipo_empleado'],
                'id_menu'               => $item['id_menu'],
                'cantidad'              => $item['cantidad'],
                'hora_inicio'           => $item['hora_inicio'],
                'tiempo_finalizacion'   => $item['tiempo_finalizacion'],
                'id_estado_pedido'      => $item['id_estado_pedido']
            ])->execute();
      }

      return $this->response->SetResponse(true);
    }

    public function update($data, $id)
    {
        $this->db
        ->update($this->table, $data)
        ->where('id_pedido = ' . $id)
        ->execute();

        return $this->response->SetResponse(true);
    }

    public function delete($id)
    {     
        $this->db
        ->deleteFrom($this->table)
        ->where('id_pedido = '. $id)
        ->execute();

        return $this->response->SetResponse(true);
    }
}