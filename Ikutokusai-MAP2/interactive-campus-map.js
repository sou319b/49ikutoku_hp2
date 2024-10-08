// データ定義
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


// メイン関数
function initializeMap() {
  const container = document.getElementById('map-container');
  container.innerHTML = `
    <h1 class="title">幾徳祭マップ</h1>
    <div class="map-wrapper">
      <img id="campus-map" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/facility_map-ccL63FThoLb2qr0S9oq4rLh9NaN5hU.jpg" alt="学園祭マップ">
      <svg id="map-overlay"></svg>
    </div>
    <div id="area-info"></div>
    <div id="area-list"></div>
  `;

  const mapImage = document.getElementById('campus-map');
  const mapOverlay = document.getElementById('map-overlay');

  mapImage.onload = () => {
    updateMapOverlay();
    window.addEventListener('resize', updateMapOverlay);
  };

  createAreaList();
}

// マップオーバーレイの更新
function updateMapOverlay() {
  const mapImage = document.getElementById('campus-map');
  const mapOverlay = document.getElementById('map-overlay');
  mapOverlay.setAttribute('viewBox', `0 0 ${mapImage.width} ${mapImage.height}`);
  
  mapOverlay.innerHTML = areas.map(area => `
    <g class="map-area" data-id="${area.id}">
      <circle
        cx="${(area.coords[0] + area.coords[2]) / 2 * mapImage.width}"
        cy="${(area.coords[1] + area.coords[3]) / 2 * mapImage.height}"
        r="18"
        fill="rgba(59, 130, 246, 0.8)"
      />
      <text
        x="${(area.coords[0] + area.coords[2]) / 2 * mapImage.width}"
        y="${(area.coords[1] + area.coords[3]) / 2 * mapImage.height}"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="white"
        font-size="24"
        font-weight="bold"
      >${area.id}</text>
    </g>
  `).join('');

  document.querySelectorAll('.map-area').forEach(element => {
    element.addEventListener('click', () => {
      const areaId = element.getAttribute('data-id');
      const area = areas.find(a => a.id === areaId);
      showAreaInfo(area);
    });
  });
}

// エリア情報の表示
function showAreaInfo(area) {
  const areaInfo = document.getElementById('area-info');
  areaInfo.innerHTML = `
    <div class="area-card">
      <h2>${area.id} ${area.name}</h2>
      <p>${area.description}</p>
      <div class="area-details">
        <table>
          <thead>
            <tr>
              <th>階</th>
              <th>部屋番号</th>
              <th>名称</th>
            </tr>
          </thead>
          <tbody>
            ${area.info.flatMap(floor => 
              floor.rooms.map((room, index) => `
                <tr>
                  ${index === 0 ? `<td rowspan="${floor.rooms.length}">${floor.floor}</td>` : ''}
                  <td>${room.number}</td>
                  <td>${room.name}</td>
                </tr>
              `).join('')
            ).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// エリアリストの作成
function createAreaList() {
  const areaList = document.getElementById('area-list');
  areaList.innerHTML = `
    <h2>施設一覧</h2>
    <ul class="area-buttons">
      ${areas.map(area => `
        <li>
          <button class="area-button" data-id="${area.id}">
            <span class="area-icon">${area.id}</span>
            <span class="area-name">${area.name}</span>
          </button>
        </li>
      `).join('')}
    </ul>
  `;

  document.querySelectorAll('.area-button').forEach(button => {
    button.addEventListener('click', () => {
      const areaId = button.getAttribute('data-id');
      const area = areas.find(a => a.id === areaId);
      showAreaInfo(area);
    });
  });
}

// スタイルの適用
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(to bottom right, #f0f0f0, #e0e0e0);
  }
  .title {
    text-align: center;
    color: #1a202c;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  .map-wrapper {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  #campus-map {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  #map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .map-area {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .map-area:hover circle {
    fill-opacity: 1;
  }
  .area-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .area-card h2 {
    color: #2c5282;
    border-bottom: 2px solid #2c5282;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
  .area-details {
    max-height: 400px;
    overflow-y: auto;
    margin-top: 15px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #e2e8f0;
    padding: 12px;
    text-align: left;
  }
  th {
    background-color: #edf2f7;
    font-weight: bold;
  }
  .area-buttons {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 20px;
  }
  .area-button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    border: 1px solid #cbd5e0;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .area-button:hover {
    background-color: #edf2f7;
  }
  .area-icon {
    width: 30px;
    height: 30px;
    background-color: #3182ce;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 10px;
  }
  .area-name {
    flex-grow: 1;
    text-align: left;
  }
`;
document.head.appendChild(style);

// 初期化
document.addEventListener('DOMContentLoaded', initializeMap);