<?php
namespace App\Model;

use App\Lib\Response;

class MenusModel
{
    private $db;
    private $table = 'menus';
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

    public function get($id)
    {
        $data = $this->db->from($this->table)
                     ->where('id_menu = ' . $id)
                     ->fetchAll();
               
        return ['data'  => $data];
    }

    public function getPorCategoria($id)
    {
        $data = $this->db->from($this->table)
                     ->where('id_categoria = ' . $id)
                     ->fetchAll();
               
        return ['data'  => $data];
    }

    public function getCompleto()
    {
        $data = $this->db->from($this->table)
                     ->orderBy('id_categoria asc')
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
        ->where('id_menu = ' . $id)
        ->execute();

        return $this->response->SetResponse(true);
    }

    public function delete($id)
    {     
        $this->db
        ->deleteFrom($this->table)
        ->where('id_menu = '. $id)
        ->execute();

        return $this->response->SetResponse(true);
    }
}