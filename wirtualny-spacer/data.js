var APP_DATA = {
  "scenes": [
    {
      "id": "0-korytarz",
      "name": "korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.3718530627607315,
        "pitch": 0.08036758513979514,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -0.18193022763527367,
          "pitch": 0.23528268768966853,
          "rotation": 0,
          "target": "5-azienka"
        },
        {
          "yaw": 0.4262010893234187,
          "pitch": 0.2884010308795375,
          "rotation": 0,
          "target": "3-sypiania"
        },
        {
          "yaw": 2.380073076436899,
          "pitch": 0.3044605463982837,
          "rotation": 0,
          "target": "4-gabinet"
        },
        {
          "yaw": -3.0305928988464768,
          "pitch": 0.23173940919339486,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.307932350630722,
          "pitch": -0.05313980532449669,
          "title": "Zapraszamy do kontaktu",
          "text": "Mieszkanie już prawie gotowe. Zapraszamy do oglądania."
        },
        {
          "yaw": -0.9985609046465402,
          "pitch": -0.15555727447740253,
          "title": "Duża zabudowana szafa",
          "text": "W środku miejsce na pralkę i wieszaki na ubrania"
        }
      ]
    },
    {
      "id": "1-salon",
      "name": "salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.6057441369842866,
        "pitch": 0.10134824356809702,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 2.2,
          "pitch": 0.2,
          "rotation": 0,
          "target": "0-korytarz"
        },
        {
          "yaw": -2.62,
          "pitch": 0.2,
          "rotation": 0,
          "target": "2-kuchnia"
        },
        {
          "yaw": -2.45,
          "pitch": 0,
          "rotation": 0,
          "target": "6-balkon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.5,
          "pitch": 0.11895362642477281,
          "title": "Wyjątkowe połączenie lameli i lustra",
          "text": "Wysokie lustro nadające charakteru"
        },
		{
          "yaw": -0.4,
          "pitch": 0,
          "title": "Katarzyna Rzepka",
          "text": "Obraz"
        }
      ]
    },
    {
      "id": "2-kuchnia",
      "name": "kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0583897709293826,
        "pitch": -0.0023083190687458455,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 3.8,
          "pitch": 0,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.9,
          "pitch": 0,
          "rotation": 0,
          "target": "6-balkon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7,
          "pitch": 0,
          "title": "Przestronna kuchnia",
          "text": "Ze zmywarką, piekarnikiem, lodówką, płytą indukcyją i nowoczesnym okapem."
        },
        {
          "yaw": 2,
          "pitch": 0,
          "title": "Katarzyna Rzepka",
          "text": "Obraz"
        }
      ]
    },
    {
      "id": "3-sypiania",
      "name": "sypiania",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.011841103169159,
        "pitch": 0.20307743665363986,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -3,
          "pitch": 0,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2,
          "pitch": -0.1,
          "title": "Miejsce na szafę",
          "text": "W sypialni jest dużo miejsca na aranżację szafy"
        },
        {
          "yaw": -2.08323130930444123,
          "pitch": -0.2,
          "title": "Katarzyna rzepka",
          "text": "Oraz"
        },
		{
          "yaw": -1.4,
          "pitch": -0.1,
          "title": "Cicha sypialnia",
          "text": "Z łóżkiem szerokości 140cm oraz miejscem na szafki nocne"
        }
      ]
    },
    {
      "id": "4-gabinet",
      "name": "gabinet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8784507048275554,
        "pitch": 0.15038494885871856,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 3.9,
          "pitch": 0.1192030308624524,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2,
          "pitch": 0.1477536801243069,
          "title": "Katarzyna Rzepka",
          "text": "Obraz"
        }
      ]
    },
    {
      "id": "5-azienka",
      "name": "łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.785193343167169,
        "pitch": -0.07897474584543751,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": -2.773304459696421,
          "pitch": 0.3770338722691342,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2174337745366088,
          "pitch": -0.15385580086493533,
          "title": "Duże lustro",
          "text": "Duże podświetlane lustro"
        }
      ]
    },
    {
      "id": "6-balkon",
      "name": "balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0826420222112425,
        "pitch": 0.1822896448319078,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 2.735022280369269,
          "pitch": 0.1760684911551973,
          "rotation": 0,
          "target": "2-kuchnia"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0952285909370296,
          "pitch": 0.26808173189104423,
          "title": "Zaciszne miejsce",
          "text": "Duży balkon otoczony drzewami"
        }
      ]
    }
  ],
  "name": "Apartament Bociana",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
