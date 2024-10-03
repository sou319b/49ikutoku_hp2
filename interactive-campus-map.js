const areas = [

  { 
    id: "①", 
    name: "K1号館", 
    coords: [0.87, 1.1, 0.35, 0.50], 
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "106", name: "ソフトウェア工房" },   
        ]
      },
      {
        floor: "8階",
        rooms: [
          { number: "803", name: "田中博研究室" },
          { number: "806", name: "鷹野研究室" },
          { number: "811", name: "納富研究室" }
        ]
      },
      {
        floor: "11階",
        rooms: [
          { number: "815", name: "情報メディア学科 服部研究室" }
        ]
      }

    ],
    description: ""
  },
  
  
  { 
    id: "②", 
    name: "K2号館", 
    coords: [0.42, 0.8, 0.5, 0.85],
    info: [
      {
        floor: "3階",
        rooms: [
          { number: "1302", name: "PSE" },
          { number: "1308", name: "KAIT BLUE" }
        ]
      },
    ],
    description: ""
  },
  { 
    id: "③", 
    name: "K3号館", 
    coords: [0.7, 0.7, 0.8, 0.85],
    info: [
      {
        floor: "地下1階",
        rooms: [
          { number: "3001", name: "作曲研究部" },
        ]
      },
      {
        floor: "1階",
        rooms: [
          { number: "3101", name: "JAZZ研究部" },
          { number: "3101", name: "D科西口研究室" },
          { number: "3102", name: "軽音サークル" },
          { number: "3102", name: "Rock in KAIT" }
        ]
      },
      {
        floor: "3階",
        rooms: [
          { number: "3301", name: "airteam" },
          { number: "3303", name: "ポケモンだいすきクラブ" },
          { number: "3304", name: "オーディオ研究部" },
          { number: "3306", name: "KAIT VR" },
          { number: "3308", name: "漫画研究会" }
        ]
      },
      {
        floor: "4階",
        rooms: [
          { number: "3401", name: "写真部" },
          { number: "3403", name: "KAITTCG" },
          { number: "3404", name: "放送研究部" },
          { number: "3406", name: "特撮模型研究部" },
          { number: "3408", name: "ゲーム創作同好会" }
        ]
      },
      {
        floor: "5階",
        rooms: [
          { number: "3501", name: "工学部システムエネルギー学研究室" },
          { number: "3503", name: "メディアデザインサークル_Cretopia~メディアデザインサークル~" },
          { number: "3504", name: "神奈川工科大学 サバゲーサークル Kaits" },
          { number: "3505", name: "KAITRPG" }
        ]
      },
      {
        floor: "6階",
        rooms: [
          { number: "3601", name: "鈴木研究室" },
          { number: "3602", name: "お笑いサークル" },
          { number: "3603", name: "天文部" },
          { number: "3606", name: "ECO推進チーム「みどり」" }
        ]
      }
    ],
    description: ""
  },
  { 
    id: "④", 
    name: "K4号館", 
    coords: [0.6, 0.55, 0.85, 0.7],
    info: [
      {
        floor: "1階",
        rooms: [
         
          { number: "101・103", name: "健康医療科学部　看護学科" },
          { number: "101・103", name: "看護学科教員企画（国際交流企画）" }
        ]
      },
      {
        floor: "3階",
        rooms: [
          { number: "301", name: "臨床工学科" }
         
        ]
      }
    ],
    description: ""
  },
  { 
    id: "よ", 
    name: "図書館", 
    coords: [0.75, 0.55, 0.85, 0.7],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "開架図書室" },
          { number: "102", name: "閲覧室" }
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "201", name: "学習室" },
          { number: "202", name: "AV資料室" }
        ]
      }
    ],
    description: "図書館は24時間開館しており、豊富な蔵書と快適な学習環境を提供しています。"
  },
  { 
    id: "⑤", 
    name: "体育館", 
    coords: [0.2, 0.5, 0.35, 0.65],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "アリーナ" },
          { number: "102", name: "器具室" }
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "201", name: "観覧席" },
          { number: "202", name: "部室" }
        ]
      }
    ],
    description: "体育館では体育の授業や各種スポーツ大会が開催されます。"
  },
  { 
    id: "⑥", 
    name: "学生会館", 
    coords: [0.15, 0.7, 0.25, 0.85],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "学生ラウンジ" },
          { number: "102", name: "売店" }
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "201", name: "サークル室" },
          { number: "202", name: "多目的ホール" }
        ]
      }
    ],
    description: "学生会館は学生生活の中心となる施設です。"
  },
  { 
    id: "⑦", 
    name: "食堂", 
    coords: [0.3, 0.75, 0.4, 0.85],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "メインダイニング" },
          { number: "102", name: "カフェテリア" }
        ]
      }
    ],
    description: "食堂では多様なメニューを提供しており、学生や教職員の憩いの場となっています。"
  },
  { 
    id: "⑧", 
    name: "情報センター", 
    coords: [0.4, 0.4, 0.5, 0.55],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "コンピュータ実習室" },
          { number: "102", name: "サーバー室" }
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "201", name: "メディアラボ" },
          { number: "202", name: "IT相談室" }
        ]
      }
    ],
    description: "情報センターは最新のIT設備を備え、情報教育の中心となっています。"
  },
  { 
    id: "⑨", 
    name: "理科棟", 
    coords: [0.5, 0.25, 0.6, 0.4],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "化学実験室" },
          { number: "102", name: "物理実験室" }
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "201", name: "生物実験室" },
          { number: "202", name: "地学実験室" }
        ]
      }
    ],
    description: "理科棟では自然科学系の実験や実習が行われています。"
  },
  { 
    id: "⑩", 
    name: "芸術棟", 
    coords: [0.25, 0.35, 0.35, 0.5],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "101", name: "美術室" },
          { number: "102", name: "音楽室" }
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "201", name: "演劇スタジオ" },
          { number: "202", name: "ギャラリー" }
        ]
      }
    ],
    description: "芸術棟では美術、音楽、演劇などの芸術活動が行われています。"
  },
  { 
    id: "⑪", 
    name: "野球場", 
    coords: [0.55, 0.3, 0.75, 0.5],
    info: [
      {
        floor: "施設",
        rooms: [
          { number: "1", name: "メインスタンド" },
          { number: "2", name: "ブルペン" }
        ]
      }
    ],
    description: "野球場は本格的な設備を備え、大学リーグの試合も開催されています。"
  },
  { 
    id: "⑫", 
    name: "陸上競技場", 
    coords: [0.3, 0.55, 0.5, 0.7],
    info: [
      {
        floor: "施設",
        rooms: [
          { number: "1", name: "トラック" },
          { number: "2", name: "フィールド" }
        ]
      }
    ],
    description: "陸上競技場は400mトラックを備え、各種陸上競技大会が開催されています。"
  },
  { 
    id: "⑬", 
    name: "プール", 
    coords: [0.5, 0.55, 0.6, 0.65],
    info: [
      {
        floor: "施設",
        rooms: [
          { number: "1", name: "25mプール" },
          { number: "2", name: "更衣室" }
        ]
      }
    ],
    description: "プールは温水設備を備え、年間を通して利用可能です。"
  },
  { 
    id: "⑭", 
    name: "テニスコート", 
    coords: [0.65, 0.55, 0.75, 0.65],
    info: [
      {
        floor: "施設",
        rooms: [
          { number: "1-4", name: "ハードコート" },
          { number: "5-6", name: "クレーコート" }
        ]
      }
    ],
    description: "テニスコートは6面あり、テニス部の活動や一般学生の利用に供されています。"
  }
];


function InteractiveCampusMap() {
  const [imageSize, setImageSize] = React.useState({ width: 0, height: 0 });
  const [selectedArea, setSelectedArea] = React.useState(null);
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    const updateImageSize = () => {
      if (imageRef.current) {
        setImageSize({
          width: imageRef.current.offsetWidth,
          height: imageRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', updateImageSize);
    updateImageSize();

    return () => window.removeEventListener('resize', updateImageSize);
  }, []);

  const handleAreaClick = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="interactive-map-container">
      <h2 className="text-center mb-4">インタラクティブ学園祭マップ</h2>
      <div className="map-image-container position-relative">
        <img 
          ref={imageRef}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/facility_map-ccL63FThoLb2qr0S9oq4rLh9NaN5hU.jpg" 
          alt="学園祭マップ" 
          className="img-fluid"
        />
        <svg className="position-absolute top-0 left-0 w-100 h-100">
          {areas.map((area) => (
            <g key={area.id} style={{cursor: 'pointer'}} onClick={() => handleAreaClick(area)}>
              <circle
                cx={`${(area.coords[0] + area.coords[2]) / 2 * 100}%`}
                cy={`${(area.coords[1] + area.coords[3]) / 2 * 100}%`}
                r="18"
                fill="rgba(59, 130, 246, 0.8)"
              />
              <text
                x={`${(area.coords[0] + area.coords[2]) / 2 * 100}%`}
                y={`${(area.coords[1] + area.coords[3]) / 2 * 100}%`}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="24"
                fontWeight="bold"
              >
                {area.id}
              </text>
            </g>
          ))}
        </svg>
      </div>
      {selectedArea && (
        <div className="mt-4 p-3 border rounded">
          <h3>{selectedArea.id} {selectedArea.name}</h3>
          <p>{selectedArea.description}</p>
          <div style={{maxHeight: '200px', overflowY: 'auto'}}>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>階</th>
                  <th>部屋番号</th>
                  <th>名称</th>
                </tr>
              </thead>
              <tbody>
                {selectedArea.info.flatMap((floor) =>
                  floor.rooms.map((room, index) => (
                    <tr key={`${floor.floor}-${room.number}`}>
                      {index === 0 && (
                        <td rowSpan={floor.rooms.length}>
                          {floor.floor}
                        </td>
                      )}
                      <td>{room.number}</td>
                      <td>{room.name}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <div className="mt-4">
        <h3 className="mb-3">施設一覧</h3>
        <div className="row">
          {areas.map((area) => (
            <div key={area.id} className="col-md-3 col-sm-6 mb-3">
              <button
                className="btn btn-outline-primary w-100 text-left d-flex align-items-center"
                onClick={() => handleAreaClick(area)}
              >
                <span className="mr-2 d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{width: '30px', height: '30px'}}>
                  {area.id}
                </span>
                <span>{area.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<InteractiveCampusMap />, document.getElementById('interactive-map'));