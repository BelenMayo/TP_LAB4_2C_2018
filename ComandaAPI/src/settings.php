<?php
return [
    'settings' => [
        'displayErrorDetails' => true,

        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../templates/',
        ],

        // Monolog settings
        'logger' => [
            'name' => 'slim-app',
            'path' => __DIR__ . '/../logs/app.log',
        ],
        
        // Configuración de mi APP
        'app_token_name'   => 'APP-TOKEN',
        'connectionString' => [
            // 'dns'  => 'mysql:host=localhost;dbname=final_lab4;charset=utf8',
			// 'user' => 'root',
            // 'pass' => ''
			'dns'  => 'mysql:host=localhost;dbname=u680201050_FinalLab4BM;charset=utf8',
            'user' => 'u680201050_BelenMayo',
            'pass' => 'belenmayosql'
        ]
    ],
];
