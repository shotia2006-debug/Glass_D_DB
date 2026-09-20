const ART_STATIC_ITEMS = [
  // ─────────────────────────────────────────────────────────────
  // 작업자 기준 체크리스트
  // - 개별 PNG/상태 단위가 아니라 "한 번에 제작·납품 가능한 세트" 단위로 체크
  // - members에는 기존 세부 리소스 ID를 모두 보존하여 누락 검증/체크 상태 이관에 사용
  // ─────────────────────────────────────────────────────────────

  // ── 아웃게임 ──
  {
    id: 'grp_title_screen',
    cat: '아웃게임',
    list: '타이틀 화면 세트',
    note: '포함: 로고 / 타이틀 배경',
    members: ['title_logo', 'title_bg']
  },
  {
    id: 'grp_char_select_bg',
    cat: '아웃게임',
    list: '캐릭터 선택 — 배경',
    note: '포함: 캐릭터 선택 화면 배경 1종',
    members: ['char_bg']
  },
  {
    id: 'grp_char_select_characters',
    cat: '아웃게임',
    list: '캐릭터 선택 — 전신 이미지 세트',
    note: '포함: 캐릭터 전신 이미지 1~4',
    members: ['char_full_1', 'char_full_2', 'char_full_3', 'char_full_4']
  },
  {
    id: 'grp_char_select_buttons',
    cat: '아웃게임',
    list: '캐릭터 선택 — 버튼 세트',
    note: '포함: 뒤로가기 / 다음 / 메뉴 / 캐릭터 선택 버튼 및 각 상태',
    members: ['char_btn_back', 'char_btn_next', 'char_btn_menu', 'char_select_btn']
  },
  {
    id: 'grp_char_select_status',
    cat: '아웃게임',
    list: '캐릭터 선택 — 상태 아이콘 세트',
    note: '포함: 잠김 / DLC 아이콘',
    members: ['char_lock_icon', 'char_dlc_icon']
  },
  {
    id: 'grp_stage_select',
    cat: '아웃게임',
    list: '스테이지 선택 화면 세트',
    note: '포함: 배경 / 시작 버튼 및 버튼 상태',
    members: ['stage_bg', 'stage_start_btn']
  },
  {
    id: 'grp_dialog_ui',
    cat: '아웃게임',
    list: '대화 씬 UI 세트',
    note: '포함: 대화 창 / 다음 버튼',
    members: ['dialog_next_btn', 'dialog_window']
  },

  // ── 인게임 UI : 프레임 ──
  {
    id: 'grp_ui_frame_megaroot',
    cat: '인게임 UI',
    list: '메가루트 기본 UI 프레임 세트',
    note: '포함: 전체 화면 외곽 / 좌측 장비·가방 패널 / 중앙·우측 전투 패널',
    members: ['ui_frame_root', 'ui_frame_left_panel', 'ui_frame_combat_panel']
  },
  {
    id: 'grp_ui_frame_hud',
    cat: '인게임 UI',
    list: 'HUD·상태 영역 프레임 세트',
    note: '포함: 상단 HUD / 하단 HUD / 플레이어 초상화 / 스탯 요약 블록',
    members: ['ui_frame_top_hud', 'ui_frame_bottom_hud', 'ui_frame_portrait', 'ui_frame_stat_block']
  },
  {
    id: 'grp_ui_frame_inventory',
    cat: '인게임 UI',
    list: '장비·가방 영역 프레임 세트',
    note: '포함: 장비 슬롯 영역 / 가방 격자 패널',
    members: ['ui_frame_equip_layer', 'ui_frame_bag_panel']
  },
  {
    id: 'grp_ui_frame_combat_support',
    cat: '인게임 UI',
    list: '전투 보조 패널 프레임 세트',
    note: '포함: 드롭 대기열 / 전투 로그 / 행동 버튼 바 / 적 정보 플레이트',
    members: ['ui_frame_drop_queue', 'ui_frame_combat_log', 'ui_frame_action_bar', 'ui_frame_enemy_plate']
  },
  {
    id: 'grp_ui_frame_overlay',
    cat: '인게임 UI',
    list: '팝업·상점·툴팁 프레임 세트',
    note: '포함: 공통 팝업·모달 / 상점 패널 / 툴팁 박스',
    members: ['ui_frame_popup', 'ui_frame_shop', 'ui_frame_tooltip']
  },
  {
    id: 'grp_ui_frame_common_parts',
    cat: '인게임 UI',
    list: '공통 패널 구성요소 세트',
    note: '포함: 가로·세로 구분선 / 공통 9-slice 패널 / 내부 딤·그림자',
    members: ['ui_frame_divider_h', 'ui_frame_divider_v', 'ui_panel_9slice', 'ui_panel_inner_shadow']
  },

  // ── 인게임 UI : 플레이어 HUD ──
  {
    id: 'grp_hud_player_status',
    cat: '인게임 UI',
    list: '플레이어 상태 HUD 세트',
    note: '포함: 초상화 / HP / AP / MP 바·구슬의 배경 및 채움 상태',
    members: ['hud_portrait_placeholder', 'hud_hp_bar_bg', 'hud_hp_bar_fill', 'hud_ap_bar_bg', 'hud_ap_bar_fill', 'hud_ap_orb_empty', 'hud_mp_bar_bg', 'hud_mp_bar_fill']
  },
  {
    id: 'grp_hud_stat_icons',
    cat: '인게임 UI',
    list: '플레이어 스탯 아이콘 세트',
    note: '포함: 공격력 / 방어력 / 회피 / 치명타',
    members: ['hud_icon_atk', 'hud_icon_def', 'hud_icon_eva', 'hud_icon_crit']
  },
  {
    id: 'grp_hud_wave_turn',
    cat: '인게임 UI',
    list: '웨이브·턴 진행 HUD 세트',
    note: '포함: Wave 플레이트 / 진행 세그먼트 ON·OFF / 턴 카운터',
    members: ['hud_wave_text_plate', 'hud_wave_progress_seg_on', 'hud_wave_progress_seg_off', 'hud_turn_counter']
  },
  {
    id: 'grp_hud_currency',
    cat: '인게임 UI',
    list: '골드 HUD 세트',
    note: '포함: 골드 아이콘 / 숫자 배경 플레이트',
    members: ['hud_gold_icon', 'hud_gold_plate']
  },

  // ── 인게임 UI : 장비 / 가방 ──
  {
    id: 'grp_slot_empty',
    cat: '인게임 UI',
    list: '장비 빈 슬롯 실루엣 세트',
    note: '포함: 머리 / 가슴 / 신발 / 목걸이 / 반지 L·R / 주무기 / 특수도구',
    members: ['slot_empty_head', 'slot_empty_chest', 'slot_empty_boots', 'slot_empty_necklace', 'slot_empty_ring_l', 'slot_empty_ring_r', 'slot_empty_weapon', 'slot_empty_toy']
  },
  {
    id: 'grp_slot_states',
    cat: '인게임 UI',
    list: '장비 슬롯 상태·오버레이 세트',
    note: '포함: 기본 / 호버 / 선택 / 잠금 테두리 / 자물쇠 / 파괴·균열',
    members: ['slot_border_normal', 'slot_border_hover', 'slot_border_selected', 'slot_border_locked', 'slot_lock_overlay', 'slot_broken_overlay']
  },
  {
    id: 'grp_slot_tier_bg',
    cat: '인게임 UI',
    list: '장비 티어 슬롯 배경 세트',
    note: '포함: T1~T5 슬롯 배경',
    members: ['slot_tier_bg_t1', 'slot_tier_bg_t2', 'slot_tier_bg_t3', 'slot_tier_bg_t4', 'slot_tier_bg_t5']
  },
  {
    id: 'grp_slot_tier_border',
    cat: '인게임 UI',
    list: '장비 티어 테두리 세트',
    note: '포함: T1~T5 티어 테두리',
    members: ['slot_tier_border_t1', 'slot_tier_border_t2', 'slot_tier_border_t3', 'slot_tier_border_t4', 'slot_tier_border_t5']
  },
  {
    id: 'grp_bag_cells',
    cat: '인게임 UI',
    list: '가방 셀·머지 피드백 세트',
    note: '포함: 빈 칸 / 호버 / 머지 가능·불가 / 드래그 고스트',
    members: ['bag_cell_empty', 'bag_cell_hover', 'bag_merge_ok', 'bag_merge_no', 'bag_drag_ghost']
  },
  {
    id: 'grp_bag_tabs',
    cat: '인게임 UI',
    list: '가방 상단 탭 아이콘 세트',
    note: '포함: 가방 / 도감 / 기타 탭',
    members: ['bag_tab_icon_bag', 'bag_tab_icon_codex', 'bag_tab_icon_misc']
  },
  {
    id: 'grp_bag_actions',
    cat: '인게임 UI',
    list: '가방 액션 버튼 세트',
    note: '포함: 상점 진입 / 리롤 / 버리기 확인',
    members: ['bag_btn_shop', 'bag_btn_reroll', 'bag_btn_discard']
  },

  // ── 전투 ──
  {
    id: 'grp_combat_backgrounds',
    cat: '전투',
    list: '전투 배경 세트',
    note: '포함: 인게임 배경 1~5',
    members: ['combat_bg_1', 'combat_bg_2', 'combat_bg_3', 'combat_bg_4', 'combat_bg_5']
  },
  {
    id: 'grp_combat_environment',
    cat: '전투',
    list: '전투장 환경 오브젝트 세트',
    note: '포함: 몬스터 발판·바닥 / 원경 아치·문 장식',
    members: ['combat_floor', 'combat_arch']
  },
  {
    id: 'grp_combat_atmosphere',
    cat: '전투',
    list: '전투장 분위기 오버레이',
    note: '포함: 전투장 안개·분위기 오버레이',
    members: ['combat_fog']
  },
  {
    id: 'grp_enemy_status_ui',
    cat: '전투',
    list: '일반 적 상태 UI 세트',
    note: '포함: 적 HP 바 배경·채움 / 장막 횟수 핍',
    members: ['enemy_hp_bar_bg', 'enemy_hp_bar_fill', 'enemy_shield_pip']
  },
  {
    id: 'grp_boss_status_ui',
    cat: '전투',
    list: '보스 상태 UI 세트',
    note: '포함: 보스 HP / 부위파괴 게이지 / Phase 1~3 배지',
    members: ['boss_hp_bar', 'boss_partbreak_bar_bg', 'boss_partbreak_bar_fill', 'boss_phase_badge_1', 'boss_phase_badge_2', 'boss_phase_badge_3']
  },
  {
    id: 'grp_combat_action_buttons',
    cat: '전투',
    list: '전투 행동 버튼 세트',
    note: '포함: 공격 / 스킬 / 방어 / Toy의 Normal·Pressed + Disabled 오버레이',
    members: ['btn_attack_n', 'btn_attack_p', 'btn_skill_n', 'btn_skill_p', 'btn_guard_n', 'btn_guard_p', 'btn_toy_n', 'btn_toy_p', 'btn_disabled_overlay']
  },

  // ── 이펙트·연출 ──
  {
    id: 'grp_fx_hit_feedback',
    cat: '이펙트·연출',
    list: '기본 전투 피드백 이펙트 세트',
    note: '포함: 물리·마법 히트 / 치명타 / 미스·회피',
    members: ['fx_hit_phys', 'fx_hit_magic', 'fx_crit', 'fx_miss']
  },
  {
    id: 'grp_fx_recovery',
    cat: '이펙트·연출',
    list: '회복·흡혈 이펙트 세트',
    note: '포함: 회복 / 흡혈',
    members: ['fx_heal', 'fx_lifesteal']
  },
  {
    id: 'grp_fx_status',
    cat: '이펙트·연출',
    list: '상태이상·특성 이펙트 세트',
    note: '포함: 분열 / 장막 / 독 / 광폭화 / 저주 / 봉인 / 마비 / 공포 / 소환',
    members: ['fx_split', 'fx_shield', 'fx_poison', 'fx_berserk', 'fx_curse', 'fx_seal', 'fx_stun', 'fx_fear', 'fx_summon']
  },
  {
    id: 'grp_fx_boss_phase',
    cat: '이펙트·연출',
    list: '보스 파괴·페이즈 전환 이펙트 세트',
    note: '포함: 부위파괴 / Phase 전환 플래시',
    members: ['fx_partbreak', 'fx_phase_flash']
  },
  {
    id: 'grp_fx_drop_numbers',
    cat: '이펙트·연출',
    list: '드롭·플로팅 숫자 피드백 세트',
    note: '포함: 코인·아이템 드롭 / 피해·회복 플로팅 숫자',
    members: ['fx_drop_coin', 'fx_drop_item', 'fx_float_dmg', 'fx_float_heal']
  },
  {
    id: 'grp_reward_ui',
    cat: '이펙트·연출',
    list: '드롭 보상 UI 세트',
    note: '포함: 보상 패널 / 아이템 카드 / 가방에 추가 버튼',
    members: ['reward_panel_bg', 'reward_card_frame', 'reward_btn_take']
  },
  {
    id: 'grp_shop_ui',
    cat: '이펙트·연출',
    list: '상점 UI 세트',
    note: '포함: 상품 카드 / 구매 / 새로고침 / 닫기',
    members: ['shop_item_card', 'shop_btn_buy', 'shop_btn_reroll', 'shop_btn_close']
  },
  {
    id: 'grp_result_ui',
    cat: '이펙트·연출',
    list: '전투 결과 화면 세트',
    note: '포함: 스테이지 클리어 / 게임오버 결과 패널',
    members: ['result_clear_panel', 'result_gameover_panel']
  },
  {
    id: 'grp_boss_cg',
    cat: '이펙트·연출',
    list: '히로인 보스 15금 CG 세트',
    note: '포함: ADULT_01 상반신 파괴 / ADULT_02 하반신 파괴 / ADULT_03 클리어',
    members: ['boss_cg_adult_01', 'boss_cg_adult_02', 'boss_cg_adult_03']
  },
  {
    id: 'grp_boss_armor_fx',
    cat: '이펙트·연출',
    list: '히로인 보스 갑옷 파괴 연출 세트',
    note: '포함: 갑옷 균열 / 갑옷 파괴 파티클',
    members: ['boss_fx_armor_crack', 'boss_fx_armor_break']
  },
  {
    id: 'grp_boss_climax_fx',
    cat: '이펙트·연출',
    list: '히로인 보스 클라이맥스 연출',
    note: '포함: Phase3 클라이맥스 오라',
    members: ['boss_fx_berserk_aura']
  },

  // ── 공통 ──
  {
    id: 'grp_system_cursor',
    cat: '공통',
    list: '커서 세트',
    note: '포함: 기본 / 드래그',
    members: ['sys_cursor_default', 'sys_cursor_drag']
  },
  {
    id: 'grp_system_icons',
    cat: '공통',
    list: '시스템 아이콘 세트',
    note: '포함: 설정 기어 / 일시정지',
    members: ['sys_settings_gear', 'sys_pause_icon']
  },
  {
    id: 'grp_system_fonts',
    cat: '공통',
    list: 'UI 숫자 폰트 세트',
    note: '포함: UI 숫자 / 데미지 숫자 폰트·비트맵',
    members: ['sys_font_ui_numbers', 'sys_font_damage']
  },
  {
    id: 'grp_system_checkbox',
    cat: '공통',
    list: '체크박스 상태 세트',
    note: '포함: ON / OFF',
    members: ['sys_checkbox_on', 'sys_checkbox_off']
  },
  {
    id: 'grp_common_option_button',
    cat: '공통',
    list: '공용 옵션 버튼 세트',
    note: '포함: Normal / Hover / Focus / Disabled',
    members: ['common_option_btn']
  },
];

const ART_STORAGE_KEY = 'glass_d_art_checks';


function loadArtChecks() {
  try {
    const raw = localStorage.getItem(ART_STORAGE_KEY);
    if (!raw) return {};
    const obj = JSON.parse(raw);
    return obj && typeof obj === 'object' ? obj : {};
  } catch (e) {
    return {};
  }
}

function saveArtChecks(map) {
  try {
    localStorage.setItem(ART_STORAGE_KEY, JSON.stringify(map));
  } catch (e) {}
}

let artChecks = loadArtChecks();
let artTab = '';

function buildArtItems() {
  const items = ART_STATIC_ITEMS.map(x => ({ ...x, thumb: null }));

  // 몬스터: 작업 세트가 아니라 개별 몬스터 리소스 단위로 체크한다.
  const monsterRows = (((DATA['몬스터'] || {})['몬스터 DB'] || {}).rows) || [];

  monsterRows.forEach(r => {
    const id = cell(r['ID']);
    if (!id) return;

    const name = cell(r['한글명'] || r['이름'] || '');

    let thumb = null;
    if (typeof SPRITES !== 'undefined' && SPRITES && SPRITES[id]) {
      thumb = 'data:image/png;base64,' + SPRITES[id];
    }

    items.push({
      id: 'mon_' + id,
      cat: '몬스터',
      list: id + (name ? ' — ' + name : ''),
      thumb: thumb
    });
  });

  // 아이템: 작업 세트가 아니라 개별 아이템 리소스 단위로 체크한다.
  const itemPack = DATA['아이템'] || {};
  const seenItem = {};

  Object.keys(itemPack).forEach(sheetName => {
    const rows = (itemPack[sheetName] && itemPack[sheetName].rows) || [];

    rows.forEach(r => {
      const id = cell(r['ID']);
      if (!id || seenItem[id]) return;
      seenItem[id] = true;

      const name = cell(r['이름'] || '');

      let thumb = null;
      if (typeof ITEM_SPRITES !== 'undefined' && ITEM_SPRITES && ITEM_SPRITES[id]) {
        thumb = 'data:image/png;base64,' + ITEM_SPRITES[id];
      }

      items.push({
        id: 'item_' + id,
        cat: '아이템',
        list: id + (name ? ' — ' + name : ''),
        thumb: thumb
      });
    });
  });

  return items;
}

function artLegacySafeGroupId(value) {
  const safe = String(value || '')
    .trim()
    .replace(/[^0-9A-Za-z가-힣_-]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return safe || 'group';
}

function migrateGroupedArtChecks(items) {
  let changed = false;

  // 정적 작업 세트:
  // 기존 세부 항목이 전부 체크돼 있었다면 새 그룹 완료로 이관한다.
  items.forEach(it => {
    if (it.cat === '몬스터' || it.cat === '아이템') return;
    if (artChecks[it.id]) return;
    if (!Array.isArray(it.members) || !it.members.length) return;

    if (it.members.every(memberId => artChecks[memberId])) {
      artChecks[it.id] = true;
      it.members.forEach(memberId => {
        if (artChecks[memberId]) delete artChecks[memberId];
      });
      changed = true;
    }
  });

  // 이전 버전의 몬스터 그룹 완료 체크를 개별 몬스터 체크로 복원한다.
  const monsterRows = (((DATA['몬스터'] || {})['몬스터 DB'] || {}).rows) || [];
  const monsterGroups = {};

  monsterRows.forEach(r => {
    const id = cell(r['ID']);
    if (!id) return;

    const groupName =
      cell(r['등급'] || r['Grade'] || r['그레이드'] || r['타입'] || r['분류'] || '') ||
      '전체';

    if (!monsterGroups[groupName]) monsterGroups[groupName] = [];
    monsterGroups[groupName].push(id);
  });

  Object.keys(monsterGroups).forEach((groupName, idx) => {
    const legacyKey = 'mon_group_' + artLegacySafeGroupId(groupName) + '_' + (idx + 1);

    if (!artChecks[legacyKey]) return;

    monsterGroups[groupName].forEach(id => {
      artChecks['mon_' + id] = true;
    });

    delete artChecks[legacyKey];
    changed = true;
  });

  // 이전 버전의 아이템 시트 그룹 완료 체크를 개별 아이템 체크로 복원한다.
  const itemPack = DATA['아이템'] || {};
  const seenItem = {};

  Object.keys(itemPack).forEach((sheetName, sheetIndex) => {
    const legacyKey = 'item_group_' + artLegacySafeGroupId(sheetName) + '_' + (sheetIndex + 1);
    if (!artChecks[legacyKey]) return;

    const rows = (itemPack[sheetName] && itemPack[sheetName].rows) || [];

    rows.forEach(r => {
      const id = cell(r['ID']);
      if (!id || seenItem[id]) return;
      seenItem[id] = true;
      artChecks['item_' + id] = true;
    });

    delete artChecks[legacyKey];
    changed = true;
  });

  if (changed) saveArtChecks(artChecks);
}

function isArtItemChecked(it) {
  return !!artChecks[it.id];
}

function artCatOrder(items) {
  const order = [];
  items.forEach(it => {
    if (!order.includes(it.cat)) order.push(it.cat);
  });
  const commonIdx = order.indexOf('공용');
  if (commonIdx >= 0) {
    order.splice(commonIdx, 1);
    order.push('공용');
  }
  return order;
}

function updateArtProgress(items) {
  const total = items.length;
  const checked = items.reduce((n, it) => n + (isArtItemChecked(it) ? 1 : 0), 0);
  const el = document.getElementById('artProgressText');
  if (el) el.textContent = '작업 세트 ' + checked + ' / ' + total;
  const fill = document.getElementById('artProgressFill');
  if (fill) fill.style.width = (total ? Math.round(checked * 100 / total) : 0) + '%';
}

function renderArtTabs(order) {
  const el = document.getElementById('artTabs');
  if (!el) return;
  el.innerHTML = '';
  order.forEach(cat => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab' + (artTab === cat ? ' active' : '');
    b.textContent = cat;
    b.onclick = () => {
      if (artTab === cat) return;
      artTab = cat;
      renderArtPage();
    };
    el.appendChild(b);
  });
}

function renderArtTable(items) {
  const root = document.getElementById('artRoot');
  if (!root) return;
  const rows = items.filter(it => it.cat === artTab);
  const body = rows.map(it => {
    const on = isArtItemChecked(it);
    const thumb = it.thumb
      ? '<img class="art-thumb" src="' + it.thumb + '" alt="" />'
      : '';
    const note = it.note ? '<span class="art-note">' + String(it.note).replace(/</g,'&lt;') + '</span>' : '';
    return '<tr class="' + (on ? 'checked' : '') + '" data-art-id="' + it.id.replace(/"/g,'&quot;') + '">'
      + '<td><div class="art-list">' + thumb
      + '<div class="art-list-text">' + String(it.list).replace(/</g,'&lt;') + note + '</div></div></td>'
      + '<td class="art-check-cell"><button type="button" class="art-check" aria-pressed="' + (on ? 'true' : 'false') + '" title="작업 세트 완료 체크">'
      + (on ? '✓' : '') + '</button></td></tr>';
  }).join('');
  root.innerHTML =
    '<div class="art-table-wrap"><table class="art-table"><thead><tr>'
    + '<th>작업 세트 <span class="badge">' + rows.length + '</span></th><th style="width:72px">완료</th>'
    + '</tr></thead><tbody>' + body + '</tbody></table></div>';

  root.querySelectorAll('tr[data-art-id]').forEach(tr => {
    const id = tr.getAttribute('data-art-id');
    const btn = tr.querySelector('.art-check');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const item = items.find(x => x.id === id);
      const wasOn = item ? isArtItemChecked(item) : !!artChecks[id];

      if (wasOn) {
        delete artChecks[id];

        // 이전 세부 체크 데이터가 남아 있으면 함께 비워야 그룹이 다시 자동 완료되지 않는다.
        if (item && Array.isArray(item.members)) {
          item.members.forEach(memberId => delete artChecks[memberId]);
        }
      } else {
        artChecks[id] = true;
      }

      saveArtChecks(artChecks);
      const on = !!artChecks[id];
      tr.classList.toggle('checked', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.textContent = on ? '✓' : '';
      updateArtProgress(items);
    });
  });
}

function renderArtPage() {
  const root = document.getElementById('artRoot');
  if (!root) return;

  const items = buildArtItems();
  migrateGroupedArtChecks(items);

  const order = artCatOrder(items);
  if (!order.length) {
    artTab = '';
    const tabs = document.getElementById('artTabs');
    if (tabs) tabs.innerHTML = '';
    root.innerHTML = '';
    updateArtProgress(items);
    return;
  }

  if (!artTab || !order.includes(artTab)) artTab = order[0];

  renderArtTabs(order);
  renderArtTable(items);
  updateArtProgress(items);

  const resetBtn = document.getElementById('artResetBtn');
  if (resetBtn && !resetBtn.dataset.bound) {
    resetBtn.dataset.bound = '1';
    resetBtn.addEventListener('click', () => {
      if (!confirm('아트 작업 세트 체크 상태를 모두 초기화할까요?')) return;
      artChecks = {};
      saveArtChecks(artChecks);
      renderArtPage();
    });
  }
}

/* ---------- Stage wave design tool (table form) ---------- */
