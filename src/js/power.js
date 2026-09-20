const POWER_TRAIT_GROUPS = [
  {
    label: '공격형 특성',
    traits: [
      { key: 'ARMOR_BREAK', label: '방어 무시', pt: 40, desc: '상대 방어력을 무시하고 피해 — 방어력이 높을수록 가치가 커짐' },
      { key: 'PIERCE', label: '관통', pt: 25, desc: '방어력 일부를 무시' },
      { key: 'FIRST_STRIKE', label: '선공', pt: 20, desc: '매 교전 선타 이득(선제 피해/생존)' },
      { key: 'BERSERK', label: '광폭화', pt: 30, desc: '체력↓/턴 경과 시 공격력 상승 — 후반 딜 폭증' },
      { key: 'SWARM', label: '군집(태그)', pt: 0, desc: '개별 능력이 아닌 "다수 등장" 표기 — 웨이브 마리수로 별도 반영' }
    ]
  },
  {
    label: '방어/생존형 특성',
    traits: [
      { key: 'SHIELD(1)', label: '보호막 Lv1', pt: 15, desc: '고정 피해 흡수막(소)' },
      { key: 'SHIELD(2)', label: '보호막 Lv2', pt: 30, desc: '고정 피해 흡수막(중)' },
      { key: 'SHIELD(3)', label: '보호막 Lv3', pt: 45, desc: '고정 피해 흡수막(대)' },
      { key: 'REGEN', label: '재생', pt: 25, desc: '매 턴 자연 회복' },
      { key: 'LIFESTEAL', label: '흡혈', pt: 25, desc: '가한 피해 일부를 회복' },
      { key: 'THORNS', label: '가시', pt: 30, desc: '반사 피해 — 공격+생존 복합' },
      { key: 'IMMUNE_PHYS', label: '물리 면역', pt: 35, desc: '물리 피해 완전 무효화(상황부 강력)' },
      { key: 'IMMUNE_MAGIC', label: '마법 면역', pt: 35, desc: '마법 피해 완전 무효화(상황부 강력)' },
      { key: 'SPLIT', label: '분열', pt: 30, desc: '사망 시 분신 생성 — 전투 지속시간 실질 연장' }
    ]
  },
  {
    label: '디버프형 특성 (플레이어에게 불리)',
    traits: [
      { key: 'POISON', label: '중독', pt: 20, desc: '지속 피해(DOT)' },
      { key: 'CURSE', label: '저주', pt: 25, desc: '스탯 감소 + 지속 피해' },
      { key: 'CORROSION', label: '부식', pt: 20, desc: '대상 방어력 감소' },
      { key: 'AP_DRAIN', label: 'AP 흡수', pt: 30, desc: '자원(AP) 견제 — 진행 방해형' },
      { key: 'SEAL', label: '스킬 봉인', pt: 35, desc: '스킬 사용 자체를 막는 강한 디버프' }
    ]
  },
  {
    label: '군중제어(CC) & 물량형 특성',
    traits: [
      { key: 'STUN', label: '마비', pt: 35, desc: '행동 불가 — 강력한 CC' },
      { key: 'FEAR', label: '공포', pt: 30, desc: '행동 제약형 CC' },
      { key: 'SUMMON', label: '소환', pt: 35, desc: '전장의 유닛 수를 늘려 총 전투력 상승' }
    ]
  }
];

const POWER_TIER_BANDS = [
  { grade: 'F', min: 0,    max: 250,       desc: '약체 — 초반 웨이브 잡몹' },
  { grade: 'E', min: 250,  max: 400,       desc: '평범 — 기본 구성원' },
  { grade: 'D', min: 400,  max: 600,       desc: '표준 — 중반 웨이브 주력' },
  { grade: 'C', min: 600,  max: 850,       desc: '강함 — 준정예급' },
  { grade: 'B', min: 850,  max: 1150,      desc: '정예 — 웨이브 핵심 위협' },
  { grade: 'A', min: 1150, max: Infinity,  desc: '강대/후반 정예 — 스테이지 최상급 위협' }
];

const TRAIT_POINTS = POWER_TRAIT_GROUPS.reduce((acc, g) => {
  g.traits.forEach(t => { acc[t.key] = t.pt; });
  return acc;
}, {});


function computePowerScore(row) {
  const hp = typeof row.HP === 'number' ? row.HP : null;
  const atk = typeof row.ATK === 'number' ? row.ATK : null;
  const def = typeof row.DEF === 'number' ? row.DEF : null;
  if (hp === null || atk === null || def === null) return null;
  const traits = [row['특성1'], row['특성2'], row['특성3'], row['특성4']].filter(Boolean);
  let traitPt = 0;
  traits.forEach(t => {
    if (TRAIT_POINTS[t] !== undefined) traitPt += TRAIT_POINTS[t];
  });
  const statScore = hp * 1 + atk * 10 + def * 20;
  return { statScore, traitPt, total: statScore + traitPt, traits };
}

function powerGradeOf(total) {
  const band = POWER_TIER_BANDS.find(b => total >= b.min && total < b.max) || POWER_TIER_BANDS[POWER_TIER_BANDS.length - 1];
  return band.grade;
}

function renderTraitGroups() {
  const root = document.getElementById('traitGroupsRoot');
  if (!root || root.dataset.rendered) return;
  root.innerHTML = '';
  POWER_TRAIT_GROUPS.forEach(g => {
    const box = document.createElement('div');
    box.className = 'trait-group';
    const h = document.createElement('h4');
    h.textContent = g.label;
    box.appendChild(h);
    g.traits.forEach(t => {
      const row = document.createElement('div');
      row.className = 'trait-row';
      row.title = t.desc;
      const label = document.createElement('span');
      label.textContent = t.label + ' (' + t.key + ')';
      const pt = document.createElement('span');
      pt.className = 'trait-pt';
      pt.textContent = '+' + t.pt + 'pt';
      row.appendChild(label);
      row.appendChild(pt);
      box.appendChild(row);
    });
    root.appendChild(box);
  });
  root.dataset.rendered = '1';
}

function renderTierBands() {
  const root = document.getElementById('tierBandRoot');
  if (!root || root.dataset.rendered) return;
  root.innerHTML = '';
  POWER_TIER_BANDS.forEach(b => {
    const tr = document.createElement('tr');
    const range = b.max === Infinity ? (b.min + '+') : (b.min + ' ~ ' + (b.max - 1));
    tr.innerHTML =
      '<td><span class="grade-badge grade-' + b.grade + '">' + b.grade + '</span></td>' +
      '<td>' + range + '</td>' +
      '<td>' + b.desc + '</td>';
    root.appendChild(tr);
  });
  root.dataset.rendered = '1';
}

let POWER_ROWS_CACHE = null;
function getPowerRows() {
  if (POWER_ROWS_CACHE) return POWER_ROWS_CACHE;
  const rows = (((DATA['몬스터'] || {})['몬스터 DB']) || {}).rows || [];
  POWER_ROWS_CACHE = rows.map(r => {
    const score = computePowerScore(r);
    return {
      id: r['ID'], name: r['한글명'], group: r['그룹'], grade: r['등급'],
      hp: r.HP, atk: r.ATK, def: r.DEF, traits: score ? score.traits : [],
      statScore: score ? score.statScore : null, traitPt: score ? score.traitPt : null,
      total: score ? score.total : null,
      calcGrade: score ? powerGradeOf(score.total) : null
    };
  });
  return POWER_ROWS_CACHE;
}

function isGradeMismatch(row) {
  if (row.total === null) return false;
  const origElite = row.grade === '정예★' || row.grade === '히로인보스';
  const calcElite = row.calcGrade === 'B' || row.calcGrade === 'A';
  return origElite !== calcElite;
}

function renderPowerTable() {
  const wrap = document.getElementById('powerTableWrap');
  if (!wrap) return;
  const groupSel = document.getElementById('powerGroupFilter');
  const gradeSel = document.getElementById('powerGradeFilter');
  const searchInput = document.getElementById('powerSearchInput');
  const rows = getPowerRows();

  if (groupSel && !groupSel.dataset.filled) {
    const groups = ['전체'].concat(Array.from(new Set(rows.map(r => r.group).filter(Boolean))).sort());
    groupSel.innerHTML = groups.map(g => '<option value="' + g + '">' + g + '</option>').join('');
    groupSel.dataset.filled = '1';
  }
  if (gradeSel && !gradeSel.dataset.filled) {
    const grades = ['전체'].concat(Array.from(new Set(rows.map(r => r.grade).filter(Boolean))));
    gradeSel.innerHTML = grades.map(g => '<option value="' + g + '">' + g + '</option>').join('');
    gradeSel.dataset.filled = '1';
  }

  const groupVal = groupSel ? groupSel.value : '전체';
  const gradeVal = gradeSel ? gradeSel.value : '전체';
  const search = (searchInput ? searchInput.value : '').trim().toLowerCase();

  const filtered = rows.filter(r => {
    if (r.total === null) return false; // 보스 등 산정 제외
    if (groupVal && groupVal !== '전체' && r.group !== groupVal) return false;
    if (gradeVal && gradeVal !== '전체' && r.grade !== gradeVal) return false;
    if (search && !((r.id || '').toLowerCase().indexOf(search) > -1 || (r.name || '').toLowerCase().indexOf(search) > -1)) return false;
    return true;
  }).sort((a, b) => b.total - a.total);

  const table = document.createElement('table');
  table.className = 'power-table';
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr>' +
    ['', 'ID', '이름', '그룹', '기존 등급', 'HP', 'ATK', 'DEF', '특성', '스탯점수', '특성점수', '총점', '산출 등급']
      .map(h => '<th>' + h + '</th>').join('') + '</tr>';
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  filtered.forEach(r => {
    const tr = document.createElement('tr');
    if (isGradeMismatch(r)) tr.className = 'mismatch-row';
    const src = monThumb(r.id);
    const gradeShort = (r.grade || '').replace('★', '');
    tr.innerHTML =
      '<td>' + (src ? '<img class="power-thumb" src="' + src + '" />' : '') + '</td>' +
      '<td>' + r.id + '</td>' +
      '<td class="power-name">' + r.name + '</td>' +
      '<td>' + (r.group || '') + '</td>' +
      '<td><span class="grade-badge grade-' + gradeShort + '">' + (r.grade || '') + '</span></td>' +
      '<td>' + r.hp + '</td>' +
      '<td>' + r.atk + '</td>' +
      '<td>' + r.def + '</td>' +
      '<td>' + r.traits.join(', ') + '</td>' +
      '<td>' + r.statScore + '</td>' +
      '<td>' + r.traitPt + '</td>' +
      '<td class="power-total">' + r.total + (isGradeMismatch(r) ? ' <span class="mismatch-dot" title="기존 등급과 산출 등급 불일치"></span>' : '') + '</td>' +
      '<td><span class="grade-badge grade-' + r.calcGrade + '">' + r.calcGrade + '</span></td>';
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  wrap.innerHTML = '';
  wrap.appendChild(table);
}

function renderPowerPage() {
  renderTraitGroups();
  renderTierBands();
  renderPowerTable();
}

(function wirePowerPageEvents() {
  const groupSel = document.getElementById('powerGroupFilter');
  const gradeSel = document.getElementById('powerGradeFilter');
  const searchInput = document.getElementById('powerSearchInput');
  if (groupSel) groupSel.addEventListener('change', renderPowerTable);
  if (gradeSel) gradeSel.addEventListener('change', renderPowerTable);
  if (searchInput) searchInput.addEventListener('input', renderPowerTable);
})();
