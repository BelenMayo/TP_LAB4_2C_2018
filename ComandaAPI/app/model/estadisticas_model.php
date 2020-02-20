<?php
namespace App\Model;

use App\Lib\Response;

class EstadisticasModel
{
    private $db;
    private $table = 'mesas';
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

    public function getAllDetallePedido($l, $p)
    {
        $l = $l * 100;

        $data = $this->db->from($this->table)
                         ->leftJoin("estado_pedidos on estado_pedidos.id_estado_pedido = detalle_pedidos.id_pedido")
                         ->leftJoin("menus on menus.id_menu = detalle_pedidos.id_menu")
                         ->leftJoin("secciones on secciones.id_seccion = detalle_pedidos.id_seccion")
                         ->leftJoin("categorias on categorias.id_categoria = detalle_pedidos.id_categoria")
                         ->select("detalle_pedidos.*, menus.nombre as nombreMenu, secciones.nombre as detalleSeccion, categorias.nombre as detalleCategoria, estado_pedidos.detalle as detalleEstadoPedido")
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

}