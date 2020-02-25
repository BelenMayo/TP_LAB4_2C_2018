<?php
namespace App\Model;

use App\Lib\Response;

class SectorPedidosModel
{
    private $db;
    private $table = 'sector_pedidos';
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

    public function getAllSectorPedidos($l, $p)
    {
        $l = $l * 100;

        $data = $this->db->from($this->table)
                         ->leftJoin("estado_pedidos on estado_pedidos.id_estado_pedido = pedidos.id_estado_pedido")
                         ->leftJoin("clientes on clientes.id_cliente = pedidos.id_cliente")
                         ->leftJoin("pedidos on sector_pedidos.id_pedido = pedidos.id_pedido")
                         ->leftJoin("empleados on empleados.id_empleado = sector_pedidos.id_empleado")
                         ->leftJoin("tipo_empleados on tipo_empleados.id_tipo_empleado = empleados.id_tipo_empleado")
                         ->leftJoin("menus on menus.id_menu = sector_pedidos.id_menu")
                         ->select("sector_pedidos.*, estado_pedidos.detalle as detalleEstadoPedido, clientes.nombre as nombreCliente, clientes.apellido as apellidoCliente, menus.nombre as detalleMenu")
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

    public function consultarEstados($codigoPedido)
    {
        $data = $this->db->from($this->table)
                         ->leftJoin("pedidos on sector_pedidos.id_pedido = pedidos.id_pedido")
                         ->leftJoin("estado_pedidos on estado_pedidos.id_estado_pedido = sector_pedidos.id_estado_pedido")
                         ->leftJoin("clientes on clientes.id_cliente = pedidos.id_cliente")
                         ->leftJoin("menus on menus.id_menu = sector_pedidos.id_menu")
                         ->select("sector_pedidos.*, estado_pedidos.detalle as detalleEstadoPedido, clientes.nombre as nombreCliente, clientes.apellido as apellidoCliente, 
                                    menus.nombre as detalleMenu, sector_pedidos.tiempo_finalizacion as tiempoEspera")
                         ->where('pedidos.codigo_pedido', $codigoPedido)
                         ->fetchAll();
        
        return [
            'data'  => $data
        ];
    }


    public function get($id)
    {
        $data = $this->db->from($this->table)
                     ->where('id_sector_pedido = ' . $id)
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
        ->where('id_sector_pedido = ' . $id)
        ->execute();

        return $this->response->SetResponse(true);
    }

    public function delete($id)
    {     
        $this->db
        ->deleteFrom($this->table)
        ->where('id_sector_pedido = '. $id)
        ->execute();

        return $this->response->SetResponse(true);
    }
}