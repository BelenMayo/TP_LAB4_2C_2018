<?php
namespace App\Model;

use App\Lib\Response;

class PedidosModel
{
    private $db;
    private $table = 'pedidos';
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

    public function get($id)
    {
        $data = $this->db->from($this->table)
                     ->where('id_pedido = ' . $id)
                     ->fetchAll();
               
        return ['data'  => $data];
    }
    
    public function insert($data)
    {   
        $this->db->insertInto($this->table, $data)
                 ->execute();
        
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