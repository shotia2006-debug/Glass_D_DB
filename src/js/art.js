const ART_STATIC_ITEMS = [
  // ── 아웃게임 (기존) ──
  { id: 'title_logo', cat: '타이틀', list: '로고 1종' },
  { id: 'title_bg', cat: '타이틀', list: '배경 이미지 1종' },

  { id: 'char_bg', cat: '캐릭터 선택화면', list: '배경 이미지 1종' },
  { id: 'char_full_1', cat: '캐릭터 선택화면', list: '캐릭터 전신 이미지 1' },
  { id: 'char_full_2', cat: '캐릭터 선택화면', list: '캐릭터 전신 이미지 2' },
  { id: 'char_full_3', cat: '캐릭터 선택화면', list: '캐릭터 전신 이미지 3' },
  { id: 'char_full_4', cat: '캐릭터 선택화면', list: '캐릭터 전신 이미지 4' },
  { id: 'char_btn_back', cat: '캐릭터 선택화면', list: '뒤로가기 버튼 (Normal/Hover/Focus/Disabled)' },
  { id: 'char_btn_next', cat: '캐릭터 선택화면', list: '다음 버튼 (Normal/Hover/Focus/Disabled)' },
  { id: 'char_btn_menu', cat: '캐릭터 선택화면', list: '메뉴 버튼 (Normal/Hover/Focus/Disabled)' },
  { id: 'char_select_btn', cat: '캐릭터 선택화면', list: '캐릭터 선택 버튼' },
  { id: 'char_lock_icon', cat: '캐릭터 선택화면', list: '잠김 아이콘 이미지' },
  { id: 'char_dlc_icon', cat: '캐릭터 선택화면', list: 'DLC 아이콘 이미지' },

  { id: 'stage_bg', cat: '스테이지 선택', list: '배경 이미지 1종' },
  { id: 'stage_start_btn', cat: '스테이지 선택', list: '시작 버튼 (Normal/Hover/Focus/Disabled)' },

  { id: 'dialog_next_btn', cat: '대화 씬', list: '다음 버튼' },
  { id: 'dialog_window', cat: '대화 씬', list: '대화 창' },


  // ── UI 프레임 (세분화, 메가루트 기준) ──
  { id: 'ui_frame_root', cat: 'UI 프레임', list: '전체 화면 외곽 프레임', note: '메가루트 전체 윈도우 테두리' },
  { id: 'ui_frame_left_panel', cat: 'UI 프레임', list: '좌측 패널 프레임 (장비+가방 영역)', note: '메가루트 좌측 박스' },
  { id: 'ui_frame_combat_panel', cat: 'UI 프레임', list: '우측/중앙 전투 패널 프레임', note: '메가루트 전투 영역 박스' },
  { id: 'ui_frame_top_hud', cat: 'UI 프레임', list: '상단 HUD 프레임 (Wave/골드/턴)' },
  { id: 'ui_frame_bottom_hud', cat: 'UI 프레임', list: '하단 HUD 프레임 (상태이상/적 미리보기)' },
  { id: 'ui_frame_portrait', cat: 'UI 프레임', list: '플레이어 초상화 프레임' },
  { id: 'ui_frame_stat_block', cat: 'UI 프레임', list: '스탯 요약 블록 프레임' },
  { id: 'ui_frame_equip_layer', cat: 'UI 프레임', list: '장비 슬롯 영역 프레임 (생존/자원/특화 구분)' },
  { id: 'ui_frame_bag_panel', cat: 'UI 프레임', list: '가방 격자 패널 프레임' },
  { id: 'ui_frame_drop_queue', cat: 'UI 프레임', list: '드롭 보상 대기열 프레임' },
  { id: 'ui_frame_combat_log', cat: 'UI 프레임', list: '전투 로그 패널 프레임' },
  { id: 'ui_frame_action_bar', cat: 'UI 프레임', list: '행동 버튼 바 프레임' },
  { id: 'ui_frame_enemy_plate', cat: 'UI 프레임', list: '적 정보 플레이트 프레임 (스프라이트+HP+특성)' },
  { id: 'ui_frame_popup', cat: 'UI 프레임', list: '공통 팝업/모달 프레임' },
  { id: 'ui_frame_shop', cat: 'UI 프레임', list: '상점 패널 프레임' },
  { id: 'ui_frame_tooltip', cat: 'UI 프레임', list: '툴팁 말풍선/박스 프레임' },
  { id: 'ui_frame_divider_h', cat: 'UI 프레임', list: '가로 구분선' },
  { id: 'ui_frame_divider_v', cat: 'UI 프레임', list: '세로 구분선' },
  { id: 'ui_panel_9slice', cat: 'UI 프레임', list: '공통 패널 9-slice 텍스처' },
  { id: 'ui_panel_inner_shadow', cat: 'UI 프레임', list: '패널 내부 딤/그림자 오버레이' },

  // ── 플레이어 상태 HUD ──
  { id: 'hud_portrait_placeholder', cat: '플레이어 HUD', list: '플레이어 초상화 플레이스홀더' },
  { id: 'hud_hp_bar_bg', cat: '플레이어 HUD', list: 'HP 바 배경' },
  { id: 'hud_hp_bar_fill', cat: '플레이어 HUD', list: 'HP 바 채움' },
  { id: 'hud_ap_bar_bg', cat: '플레이어 HUD', list: 'AP(행동력) 바/구슬 배경' },
  { id: 'hud_ap_bar_fill', cat: '플레이어 HUD', list: 'AP 바/구슬 채움(활성)' },
  { id: 'hud_ap_orb_empty', cat: '플레이어 HUD', list: 'AP 구슬 빈 상태' },
  { id: 'hud_mp_bar_bg', cat: '플레이어 HUD', list: '마나 바 배경' },
  { id: 'hud_mp_bar_fill', cat: '플레이어 HUD', list: '마나 바 채움' },
  { id: 'hud_icon_atk', cat: '플레이어 HUD', list: '스탯 아이콘 — 공격력' },
  { id: 'hud_icon_def', cat: '플레이어 HUD', list: '스탯 아이콘 — 방어력' },
  { id: 'hud_icon_eva', cat: '플레이어 HUD', list: '스탯 아이콘 — 회피' },
  { id: 'hud_icon_crit', cat: '플레이어 HUD', list: '스탯 아이콘 — 치명타' },
  { id: 'hud_wave_text_plate', cat: '플레이어 HUD', list: 'Wave 표시 플레이트' },
  { id: 'hud_wave_progress_seg_on', cat: '플레이어 HUD', list: 'Wave 진행 세그먼트 ON', note: '메가루트 FLOOR 버블' },
  { id: 'hud_wave_progress_seg_off', cat: '플레이어 HUD', list: 'Wave 진행 세그먼트 OFF' },
  { id: 'hud_turn_counter', cat: '플레이어 HUD', list: '턴 카운터 플레이트' },
  { id: 'hud_gold_icon', cat: '플레이어 HUD', list: '골드 아이콘' },
  { id: 'hud_gold_plate', cat: '플레이어 HUD', list: '골드 숫자 배경 플레이트' },

  // ── 장비 슬롯 UI ──
  { id: 'slot_empty_head', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 머리' },
  { id: 'slot_empty_chest', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 가슴' },
  { id: 'slot_empty_boots', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 신발' },
  { id: 'slot_empty_necklace', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 목걸이' },
  { id: 'slot_empty_ring_l', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 반지 L' },
  { id: 'slot_empty_ring_r', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 반지 R' },
  { id: 'slot_empty_weapon', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 주무기' },
  { id: 'slot_empty_toy', cat: '장비 슬롯 UI', list: '빈 슬롯 실루엣 — 특수도구' },
  { id: 'slot_border_normal', cat: '장비 슬롯 UI', list: '슬롯 테두리 — 기본' },
  { id: 'slot_border_hover', cat: '장비 슬롯 UI', list: '슬롯 테두리 — 호버' },
  { id: 'slot_border_selected', cat: '장비 슬롯 UI', list: '슬롯 테두리 — 선택' },
  { id: 'slot_border_locked', cat: '장비 슬롯 UI', list: '슬롯 테두리 — 저주 잠금' },
  { id: 'slot_lock_overlay', cat: '장비 슬롯 UI', list: '저주 자물쇠 오버레이' },
  { id: 'slot_broken_overlay', cat: '장비 슬롯 UI', list: '장비 파괴/균열 오버레이 (보스전)' },
  { id: 'slot_tier_bg_t1', cat: '장비 슬롯 UI', list: '티어 슬롯 배경 — T1' },
  { id: 'slot_tier_bg_t2', cat: '장비 슬롯 UI', list: '티어 슬롯 배경 — T2' },
  { id: 'slot_tier_bg_t3', cat: '장비 슬롯 UI', list: '티어 슬롯 배경 — T3' },
  { id: 'slot_tier_bg_t4', cat: '장비 슬롯 UI', list: '티어 슬롯 배경 — T4' },
  { id: 'slot_tier_bg_t5', cat: '장비 슬롯 UI', list: '티어 슬롯 배경 — T5' },
  { id: 'slot_tier_border_t1', cat: '장비 슬롯 UI', list: '티어 테두리 — T1' },
  { id: 'slot_tier_border_t2', cat: '장비 슬롯 UI', list: '티어 테두리 — T2' },
  { id: 'slot_tier_border_t3', cat: '장비 슬롯 UI', list: '티어 테두리 — T3' },
  { id: 'slot_tier_border_t4', cat: '장비 슬롯 UI', list: '티어 테두리 — T4' },
  { id: 'slot_tier_border_t5', cat: '장비 슬롯 UI', list: '티어 테두리 — T5' },

  // ── 가방 / 머지 UI ──
  { id: 'bag_cell_empty', cat: '가방 UI', list: '가방 1×1 빈 칸' },
  { id: 'bag_cell_hover', cat: '가방 UI', list: '가방 칸 호버' },
  { id: 'bag_merge_ok', cat: '가방 UI', list: '머지 가능 하이라이트 (녹색)' },
  { id: 'bag_merge_no', cat: '가방 UI', list: '머지 불가 하이라이트 (빨강)' },
  { id: 'bag_drag_ghost', cat: '가방 UI', list: '드래그 중 고스트 아이콘 프레임' },
  { id: 'bag_tab_icon_bag', cat: '가방 UI', list: '인벤 탭 아이콘 — 가방', note: '메가루트 상단 탭' },
  { id: 'bag_tab_icon_codex', cat: '가방 UI', list: '인벤 탭 아이콘 — 도감/기타' },
  { id: 'bag_tab_icon_misc', cat: '가방 UI', list: '인벤 탭 아이콘 — 기타' },
  { id: 'bag_btn_shop', cat: '가방 UI', list: '상점 진입 버튼 아이콘' },
  { id: 'bag_btn_reroll', cat: '가방 UI', list: '새로고침/리롤 버튼' },
  { id: 'bag_btn_discard', cat: '가방 UI', list: '버리기 확인 아이콘' },

  // ── 전투 영역 ──
  { id: 'combat_bg_1', cat: '전투 배경', list: '인게임 배경 1 (던전/홀)' },
  { id: 'combat_bg_2', cat: '전투 배경', list: '인게임 배경 2' },
  { id: 'combat_bg_3', cat: '전투 배경', list: '인게임 배경 3' },
  { id: 'combat_bg_4', cat: '전투 배경', list: '인게임 배경 4' },
  { id: 'combat_bg_5', cat: '전투 배경', list: '인게임 배경 5' },
  { id: 'combat_floor', cat: '전투 배경', list: '몬스터 발판/바닥 타일' },
  { id: 'combat_arch', cat: '전투 배경', list: '원경 아치/문 장식', note: '메가루트 아치 홀' },
  { id: 'combat_fog', cat: '전투 배경', list: '전투장 안개/분위기 오버레이' },

  { id: 'enemy_hp_bar_bg', cat: '전투 UI', list: '적 HP 바 배경' },
  { id: 'enemy_hp_bar_fill', cat: '전투 UI', list: '적 HP 바 채움' },
  { id: 'enemy_shield_pip', cat: '전투 UI', list: '장막(Shield) 횟수 핍' },
  { id: 'boss_hp_bar', cat: '전투 UI', list: '히로인 보스 전용 HP 바' },
  { id: 'boss_partbreak_bar_bg', cat: '전투 UI', list: '부위파괴 게이지 배경' },
  { id: 'boss_partbreak_bar_fill', cat: '전투 UI', list: '부위파괴 게이지 채움' },
  { id: 'boss_phase_badge_1', cat: '전투 UI', list: 'Phase 1 배지' },
  { id: 'boss_phase_badge_2', cat: '전투 UI', list: 'Phase 2 배지' },
  { id: 'boss_phase_badge_3', cat: '전투 UI', list: 'Phase 3 배지' },
  { id: 'btn_attack_n', cat: '전투 UI', list: '행동 버튼 — 공격 Normal' },
  { id: 'btn_attack_p', cat: '전투 UI', list: '행동 버튼 — 공격 Pressed' },
  { id: 'btn_skill_n', cat: '전투 UI', list: '행동 버튼 — 스킬 Normal' },
  { id: 'btn_skill_p', cat: '전투 UI', list: '행동 버튼 — 스킬 Pressed' },
  { id: 'btn_guard_n', cat: '전투 UI', list: '행동 버튼 — 방어 Normal' },
  { id: 'btn_guard_p', cat: '전투 UI', list: '행동 버튼 — 방어 Pressed' },
  { id: 'btn_toy_n', cat: '전투 UI', list: '행동 버튼 — Toy Normal' },
  { id: 'btn_toy_p', cat: '전투 UI', list: '행동 버튼 — Toy Pressed' },
  { id: 'btn_disabled_overlay', cat: '전투 UI', list: '행동 버튼 Disabled 오버레이' },

  // ── 전투 이펙트 / 피드백 ──
  { id: 'fx_hit_phys', cat: '전투 이펙트', list: '물리 히트 이펙트' },
  { id: 'fx_hit_magic', cat: '전투 이펙트', list: '마법 히트 이펙트' },
  { id: 'fx_crit', cat: '전투 이펙트', list: '치명타 이펙트' },
  { id: 'fx_miss', cat: '전투 이펙트', list: '미스/회피 이펙트' },
  { id: 'fx_heal', cat: '전투 이펙트', list: '회복 이펙트' },
  { id: 'fx_lifesteal', cat: '전투 이펙트', list: '흡혈 이펙트' },
  { id: 'fx_split', cat: '전투 이펙트', list: '분열(SPLIT) 이펙트' },
  { id: 'fx_shield', cat: '전투 이펙트', list: '장막(SHIELD) 이펙트' },
  { id: 'fx_poison', cat: '전투 이펙트', list: '독(POISON) 이펙트' },
  { id: 'fx_berserk', cat: '전투 이펙트', list: '광폭화(BERSERK) 이펙트' },
  { id: 'fx_curse', cat: '전투 이펙트', list: '저주(CURSE) 이펙트' },
  { id: 'fx_seal', cat: '전투 이펙트', list: '봉인(SEAL) 이펙트' },
  { id: 'fx_stun', cat: '전투 이펙트', list: '마비(STUN) 이펙트' },
  { id: 'fx_fear', cat: '전투 이펙트', list: '공포(FEAR) 이펙트' },
  { id: 'fx_summon', cat: '전투 이펙트', list: '소환(SUMMON) 이펙트' },
  { id: 'fx_partbreak', cat: '전투 이펙트', list: '부위파괴 이펙트' },
  { id: 'fx_phase_flash', cat: '전투 이펙트', list: 'Phase 전환 플래시' },
  { id: 'fx_drop_coin', cat: '전투 이펙트', list: '드롭 연출 — 코인 팝' },
  { id: 'fx_drop_item', cat: '전투 이펙트', list: '드롭 연출 — 아이템 팝' },
  { id: 'fx_float_dmg', cat: '전투 이펙트', list: '플로팅 숫자 — 피해' },
  { id: 'fx_float_heal', cat: '전투 이펙트', list: '플로팅 숫자 — 회복' },


  // ── 보상 / 상점 / 결과 ──
  { id: 'reward_panel_bg', cat: '보상·상점', list: '드롭 보상 패널 배경' },
  { id: 'reward_card_frame', cat: '보상·상점', list: '드롭 아이템 카드 프레임' },
  { id: 'reward_btn_take', cat: '보상·상점', list: '가방에 추가 버튼' },
  { id: 'shop_item_card', cat: '보상·상점', list: '상점 상품 카드 프레임' },
  { id: 'shop_btn_buy', cat: '보상·상점', list: '구매 버튼' },
  { id: 'shop_btn_reroll', cat: '보상·상점', list: '상점 새로고침 버튼' },
  { id: 'shop_btn_close', cat: '보상·상점', list: '상점 닫기 버튼' },
  { id: 'result_clear_panel', cat: '보상·상점', list: '스테이지 클리어 결과 패널' },
  { id: 'result_gameover_panel', cat: '보상·상점', list: '게임오버 결과 패널' },

  // ── 히로인 보스 전용 (스프라이트는 몬스터 탭, 여기 UI/연출만) ──
  { id: 'boss_cg_adult_01', cat: '히로인 보스 연출', list: '15금 CG — ADULT_01 (상반신 파괴)' },
  { id: 'boss_cg_adult_02', cat: '히로인 보스 연출', list: '15금 CG — ADULT_02 (하반신 파괴)' },
  { id: 'boss_cg_adult_03', cat: '히로인 보스 연출', list: '15금 CG — ADULT_03 (클리어)' },
  { id: 'boss_fx_armor_crack', cat: '히로인 보스 연출', list: '갑옷 균열 이펙트' },
  { id: 'boss_fx_armor_break', cat: '히로인 보스 연출', list: '갑옷 파괴 파티클' },
  { id: 'boss_fx_berserk_aura', cat: '히로인 보스 연출', list: 'Phase3 클라이맥스 오라' },

  // ── 공통 시스템 ──
  { id: 'sys_cursor_default', cat: '공통 시스템', list: '커서 — 기본' },
  { id: 'sys_cursor_drag', cat: '공통 시스템', list: '커서 — 드래그' },
  { id: 'sys_settings_gear', cat: '공통 시스템', list: '설정 기어 아이콘' },
  { id: 'sys_pause_icon', cat: '공통 시스템', list: '일시정지 아이콘' },
  { id: 'sys_font_ui_numbers', cat: '공통 시스템', list: 'UI 숫자 폰트/비트맵' },
  { id: 'sys_font_damage', cat: '공통 시스템', list: '데미지 숫자 폰트/비트맵' },
  { id: 'sys_checkbox_on', cat: '공통 시스템', list: '체크박스 ON' },
  { id: 'sys_checkbox_off', cat: '공통 시스템', list: '체크박스 OFF' },

  // ── 공용 (맨 뒤) ──
  { id: 'common_option_btn', cat: '공용', list: '옵션 버튼 (Normal/Hover/Focus/Disabled)' },
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
  const checked = items.reduce((n, it) => n + (artChecks[it.id] ? 1 : 0), 0);
  const el = document.getElementById('artProgressText');
  if (el) el.textContent = '체크 ' + checked + ' / 전체 ' + total;
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
    const on = !!artChecks[it.id];
    const thumb = it.thumb
      ? '<img class="art-thumb" src="' + it.thumb + '" alt="" />'
      : '';
    const note = it.note ? '<span class="art-note">' + String(it.note).replace(/</g,'&lt;') + '</span>' : '';
    return '<tr class="' + (on ? 'checked' : '') + '" data-art-id="' + it.id.replace(/"/g,'&quot;') + '">'
      + '<td><div class="art-list">' + thumb
      + '<div class="art-list-text">' + String(it.list).replace(/</g,'&lt;') + note + '</div></div></td>'
      + '<td class="art-check-cell"><button type="button" class="art-check" aria-pressed="' + (on ? 'true' : 'false') + '" title="체크">'
      + (on ? '✓' : '') + '</button></td></tr>';
  }).join('');
  root.innerHTML =
    '<div class="art-table-wrap"><table class="art-table"><thead><tr>'
    + '<th>리스트 <span class="badge">' + rows.length + '</span></th><th style="width:72px">체크</th>'
    + '</tr></thead><tbody>' + body + '</tbody></table></div>';
  root.querySelectorAll('tr[data-art-id]').forEach(tr => {
    const id = tr.getAttribute('data-art-id');
    const btn = tr.querySelector('.art-check');
    if (!btn) return;
    btn.addEventListener('click', () => {
      artChecks[id] = !artChecks[id];
      if (!artChecks[id]) delete artChecks[id];
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
      if (!confirm('아트 체크 상태를 모두 초기화할까요?')) return;
      artChecks = {};
      saveArtChecks(artChecks);
      renderArtPage();
    });
  }
}

/* ---------- Stage wave design tool (table form) ---------- */
