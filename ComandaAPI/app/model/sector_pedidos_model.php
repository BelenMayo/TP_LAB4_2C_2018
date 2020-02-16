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
                         ->leftJoin("pedidos on pedidos.id_pedido = sector_pedidos.id_pedido")
                         ->leftJoin("empleados on empleados.id_empleado = sector_pedidos.id_empleado")
                         ->leftJoin("menus on menus.id_menu = sector_pedidos.id_menu")
                         ->leftJoin("categorias on categorias.id_categoria = sector_pedidos.id_categoria")
                         ->leftJoin("secciones on secciones.id_seccion = sector_pedidos.id_seccion")
                         ->select("sector_pedidos.*, empleados.nombre as nombreEmpleado, empleados.apellido as apellidoEmpleado,menus.nombre as nombreMenu, secciones.nombre as detalleSeccion, categorias.nombre as detalleCategoria")
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