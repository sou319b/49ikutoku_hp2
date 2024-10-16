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
          { number: "フリースペース", name: "入試課" },
        ]
      },
      {
        floor: "8階",
        rooms: [
          { number: "803", name: "田中博研究室" },
          { number: "806", name: "鷹野研究室" },
          { number: "811", name: "納富研究室" },
          { number: "815", name: "田中哲雄研究室" }
        ]
      },
      {
        floor: "11階",
        rooms: [
          { number: "1115", name: "情報メディア学科 服部研究室" }
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
          { number: "3301", name: "air team" },
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
          { number: "3503", name: "メディアデザインサークル_Cretopia" },
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
    id: "⑤",
    name: "C2号館",
    coords: [0.07, 0.5, 0.35, 0.65],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "ラウンジ", name: "鉄道研究部" },
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "E204・E206", name: "H科・E科 EIコース" },
          { number: "E204・E206", name: "Life Hacker's" },
        ]
      },
      {
        floor: "3階",
        rooms: [
          { number: "E304", name: "教育機械工学研究室" },
        ]
      },
      {
        floor: "5階",
        rooms: [
          { number: "E501", name: "工藤研究室" },
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑥",
    name: "C5号館",
    coords: [0.1, 0.8, 0.25, 0.85],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "124", name: "知能モビリティ研究室" },
          { number: "109・130", name: "岡崎研究室" },
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑦",
    name: "C6号館",
    coords: [0.21, 0.8, 0.4, 0.85],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "102", name: "生命科学研究室" },
        ]
      },
      {
        floor: "2階",
        rooms: [
          { number: "Bio Lounge", name: "LOVOTサークル" },
        ]
      },
      {
        floor: "5階",
        rooms: [
          { number: "501", name: "利き酒サークル" },
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑧",
    name: "E1号館",
    coords: [0.2, 0.2, 0.5, 0.55],
    info: [
      {
        floor: "3階",
        rooms: [
          { number: "301", name: "フルードパワー・災害救助ロボット研究室" },
        ]
      },
      
    ],
    description: ""
  },
  {
    id: "⑨",
    name: "E2号館",
    coords: [0.21, 0.1, 0.5, 0.4],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "エントランスホール", name: "応用化学生物学科" },
        ]
      },
      {
        floor: "4階",
        rooms: [
          { number: "401", name: "髙村研究室" },
        ]
      },
      {
        floor: "5階",
        rooms: [
          { number: "501・502", name: "山口研究室" },
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑩",
    name: "E6号館",
    coords: [0.03, 0.25, 0.35, 0.5],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "V-07", name: "KAIT Racing" },
         
        ]
      },
      
    ],
    description: ""
  },
  {
    id: "⑪",
    name: "KAIT広場",
    coords: [0.3, 0.3, 0.75, 0.5],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "", name: "北本研究室" },
          
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑫",
    name: "KAIT TOWN",
    coords: [0.16, 0.25, 0.5, 0.7],
    info: [
      {
        floor: "2階",
        rooms: [
          { number: "コミュニティ室B", name: "KAIT SDGs HUB" },
         
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑬",
    name: "KAIT工房",
    coords: [0.3, 0.3, 0.6, 0.65],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "", name: "KAIT EDTC" },
         
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑭",
    name: "先進技術研究所",
    coords: [0.48, 0.5, 0.75, 0.65],
    info: [
      {
        floor: "1階・2階",
        rooms: [
          { number: "D2-207,208", name: "丸山研究室" },
          
        ]
      }
    ],
    description: ""
  },
  {
    id: "⑮",
    name: "中央緑地",
    coords: [0.3, 0.6, 0.75, 0.65],
    info: [
      {
        floor: "",
        rooms: [
          { number: "", name: "総合受付＆案内（ビンゴカード配布）" },
          { number: "", name: "縁日" },
          { number: "", name: "ふわふわお好み焼き" },
          { number: "", name: "陳研のクレープ屋さん" },
          { number: "", name: "たこ焼きサークル" },
          { number: "", name: "ポップコーン" },
          { number: "", name: "豚汁" },
          { number: "", name: "ラグビー部 焼きそば" },
          { number: "", name: "フルーツ飴" },
          { number: "", name: "ハッシュドポテト" },
          { number: "", name: "ホットドック屋" },
          { number: "", name: "わたあめ屋" },
          { number: "", name: "俺のから揚げ" },
          { number: "", name: "Pia's bakery・揚げパン" },
          { number: "", name: "ヒアリングポテト" },
          { number: "", name: "サーターアンダギー屋" },
          { number: "", name: "餃子BOSS・浜松餃子" },
          { number: "", name: "フランクフルト" },
          { number: "", name: "幾徳学園同窓会ダーツ" },
         

        ]
      }
    ],
    description: ""
  },
  {
    id: "⑯",
    name: "KAITアリーナ",
    coords: [0.75, 0.2, 0.75, 0.65],
    info: [
      {
        floor: "1階",
        rooms: [
          { number: "アリーナ", name: "トークショー" },
          { number: "アリーナ", name: "吹奏楽" },
          { number: "アリーナ", name: "合気道" },
          { number: "アリーナ", name: "ビンゴ大会" },
          
        ]
      }
    ],
    description: ""
  },
];


// URLパラメータを解析する関数
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// メイン関数
function initializeMap() {
  const container = document.getElementById('map-container');
  container.innerHTML = `
    <h1 class="title">幾徳祭マップ</h1>
    <div class="map-wrapper">
      <img id="campus-map" src="http://kait-circle.jp/jikkou/Ikutokusai-MAP2/facility_map.jpg" alt="学園祭マップ">
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
  const areaId = getUrlParameter('area');
  if (areaId) {
    const area = areas.find(a => a.id === areaId);
    if (area) {
      setTimeout(() => {
        showAreaInfo(area);
        highlightArea(area.id);
      }, 250); // マップの読み込みを待つために少し遅延させる
    }
  }
}

// マップオーバーレイの更新
function updateMapOverlay() {
  const mapImage = document.getElementById('campus-map');
  const mapOverlay = document.getElementById('map-overlay');
  mapOverlay.setAttribute('viewBox', `0 0 ${mapImage.width} ${mapImage.height}`);

  mapOverlay.innerHTML = areas.map(area => {
    const cx = (area.coords[0] + area.coords[2]) / 2 * mapImage.width;
    const cy = (area.coords[1] + area.coords[3]) / 2 * mapImage.height;
    return `
        <g class="map-area" data-id="${area.id}">
            <circle
                cx="${cx}"
                cy="${cy}"
                r="12"  // 円の半径
                fill="rgba(59, 130, 246, 0.8)"
            />
            <text
                x="${cx - 0.5}"
                y="${cy + 1}"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="white"
                font-size="18"  // テキストのフォントサイズ
                font-weight="bold"
            >${area.id}</text>
        </g>
    `;
}).join('');

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
  areaInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  areaInfo.innerHTML = `
    <div class="area-card">
      <h2>${area.id} ${area.name}</h2>
      <p>${area.description}</p>
      <div class="area-details">
        <table>
          <thead>
            <tr>
              <th>階</th>
              <th>教室番号</th>
              <th>団体名</th>
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
    <br>
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


// エリアをハイライトする関数を追加
function highlightArea(areaId) {
  document.querySelectorAll('.map-area').forEach(element => {
    if (element.getAttribute('data-id') === areaId) {
      element.querySelector('circle').setAttribute('fill', 'rgba(255, 0, 0, 0.8)'); // 赤色でハイライト
    } else {
      element.querySelector('circle').setAttribute('fill', 'rgba(59, 130, 246, 0.8)'); // 元の色に戻す
    }
  });
}


// スタイルの適用
const style = document.createElement('style');
style.textContent = `
  body {
    display: flex; /* フレックスボックスを使用 */
    justify-content: center; /* 水平方向の中央揃え */
    height: 100vh; /* ビューポートの高さを100%に設定 */
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 0;
    background: url('../images/back1.png') no-repeat center center fixed;
    background-size: cover;
    
   
   
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
    max-height: none; /* スクロールをなくすために高さ制限を解除 */
    overflow-y: visible; /* スクロールをなくすためにオーバーフローを表示 */
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