const WAVE_COLS = [
  { key: 'theme', label: '테마', className: 'col-theme', placeholder: '예: 빌드 예열' },
  { key: 'monsters', label: '적 구성', className: 'col-monsters', multiline: true, placeholder: '예: MON-001 슬라임 ×2\nMON-003 고블린 ×1' },
  { key: 'turns', label: '목표 처리턴', className: 'col-turns', placeholder: '예: 4~6턴' },
  { key: 'gold', label: '골드 보상', className: 'col-gold', placeholder: '예: 30G' },
  { key: 'drop', label: '드롭 테이블', className: 'col-drop', placeholder: '예: T1 70% / T2 25% / T3 5%' },
  { key: 'power', label: '파워 지수', className: 'col-power', compute: (wave) => buildWavePowerText(wave.monsters) },
  { key: 'note', label: '비고', placeholder: '예: 첫 상점' }
];

const STAGE1_WAVES = [
  mkWave('분열 도입', 'MON-001 슬라임 ×1', '4~6턴', '30G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('소환+물리면역 견제', 'MON-004 고블린 사먼 ×1', '4~6턴', '35G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('선공 강화', 'MON-003 고블린 ×1', '4~6턴', '45G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('저주+물리면역 압박', 'MON-019 폴터가이스트 ×1', '4~6턴', '50G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('재생+저주 격돌', 'MON-012 좀비 메이드 ×1', '4~6턴', '55G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('방어무시 심화', 'MON-005 오크 ×1', '4~6턴', '65G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('흡혈+선공 도입', 'MON-013 뱀파이어아 ×1', '5~7턴', '70G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('공포+AP흡수 견제', 'MON-020 반시 ★ ×1', '5~7턴', '75G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('소환+물리면역 강화', 'MON-015 리치 ★ ×1', '5~7턴', '85G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('질서와 그림자 보스전 (1차 각성)', 'MON-064 보스 모드 (질서와 그림자 1차 각성)', '20~24턴(총)', '350G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('소환+물리면역 압박', 'MON-015 리치 ★ ×1', '5~7턴', '90G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('흡혈+보호막 격돌', 'MON-014 뱀파이어 로드 ★ ×1', '5~7턴', '110G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+광폭화 심화', 'MON-006 오크 워리어 ★ ×1', '5~7턴', '130G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('흡혈+선공 도입', 'MON-013 뱀파이어아 ×1\nMON-005 오크 ×1', '6~8턴', '150G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('흡혈+선공 견제', 'MON-013 뱀파이어아 ×1\nMON-008 아르피 ★ ×1', '6~8턴', '170G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+광폭화 강화', 'MON-006 오크 워리어 ★ ×1\nMON-020 반시 ★ ×1', '6~8턴', '190G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+광폭화 압박', 'MON-006 오크 워리어 ★ ×1\nMON-013 뱀파이어아 ×1', '6~8턴', '210G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('소환+물리면역 격돌', 'MON-015 리치 ★ ×1\nMON-013 뱀파이어아 ×1', '6~8턴', '230G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('공포+AP흡수 심화', 'MON-020 반시 ★ ×1\nMON-015 리치 ★ ×1', '6~8턴', '250G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('질서와 그림자 보스전 (2차 각성)', 'MON-064 보스 모드 (질서와 그림자 2차 각성)', '22~26턴(총)', '500G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('소환+물리면역 도입', 'MON-015 리치 ★ ×1\nMON-014 뱀파이어 로드 ★ ×1', '7~9턴', '220G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('흡혈+보호막 견제', 'MON-014 뱀파이어 로드 ★ ×1\nMON-020 반시 ★ ×2', '7~9턴', '270G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('방어무시+광폭화 강화', 'MON-006 오크 워리어 ★ ×1\nMON-014 뱀파이어 로드 ★ ×1', '7~9턴', '320G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('소환+물리면역 압박', 'MON-015 리치 ★ ×1\nMON-020 반시 ★ ×2', '7~9턴', '370G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('흡혈+보호막 격돌', 'MON-014 뱀파이어 로드 ★ ×1\nMON-006 오크 워리어 ★ ×1', '7~9턴', '420G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('소환+물리면역 심화', 'MON-015 리치 ★ ×1\nMON-020 반시 ★ ×2', '7~9턴', '470G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('방어무시+광폭화 도입', 'MON-006 오크 워리어 ★ ×1\nMON-020 반시 ★ ×1\nMON-013 뱀파이어아 ×1', '8~10턴', '515G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('방어무시+광폭화 견제', 'MON-006 오크 워리어 ★ ×1\nMON-020 반시 ★ ×1\nMON-015 리치 ★ ×1', '8~10턴', '565G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('흡혈+보호막 강화', 'MON-014 뱀파이어 로드 ★ ×1\nMON-015 리치 ★ ×1\nMON-020 반시 ★ ×1', '8~10턴', '615G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('질서와 그림자 보스전 (3차 각성)', 'MON-064 보스 모드 (질서와 그림자 3차 각성)', '24~28턴(총)', '650G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('소환+물리면역 압박', 'MON-015 리치 ★ ×1\nMON-006 오크 워리어 ★ ×1\nMON-013 뱀파이어아 ×2', '8~10턴', '450G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+물리면역 격돌', 'MON-015 리치 ★ ×1\nMON-020 반시 ★ ×2\nMON-014 뱀파이어 로드 ★ ×1', '8~10턴', '550G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+광폭화 심화', 'MON-006 오크 워리어 ★ ×1\nMON-014 뱀파이어 로드 ★ ×1\nMON-020 반시 ★ ×2', '8~10턴', '655G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('흡혈+보호막 도입', 'MON-014 뱀파이어 로드 ★ ×1\nMON-006 오크 워리어 ★ ×1\nMON-013 뱀파이어아 ×2', '9~11턴', '755G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+물리면역 견제', 'MON-015 리치 ★ ×1\nMON-020 반시 ★ ×2\nMON-014 뱀파이어 로드 ★ ×1', '9~11턴', '855G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+광폭화 강화', 'MON-006 오크 워리어 ★ ×1\nMON-014 뱀파이어 로드 ★ ×1\nMON-020 반시 ★ ×2', '9~11턴', '955G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('흡혈+보호막 압박', 'MON-014 뱀파이어 로드 ★ ×1\nMON-006 오크 워리어 ★ ×2\nMON-013 뱀파이어아 ×2', '9~11턴', '1060G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+물리면역 격돌', 'MON-015 리치 ★ ×1\nMON-020 반시 ★ ×2\nMON-014 뱀파이어 로드 ★ ×1', '9~11턴', '1160G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+광폭화 심화', 'MON-006 오크 워리어 ★ ×2\nMON-014 뱀파이어 로드 ★ ×1\nMON-020 반시 ★ ×2', '9~11턴', '1260G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('질서와 그림자 보스전 (최종 각성)', 'MON-064 보스 모드 (질서와 그림자 최종 각성)', '26~32턴(총)', '850G(보상)', '— (보상 없음, 클리어 보상)')
];

const STAGE2_WAVES = [
  mkWave('군집+선공 도입', 'MON-046 요정 ×1', '4~6턴', '30G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('군집+저주 견제', 'MON-047 픽시 ×1', '4~6턴', '35G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('재생+선공 강화', 'MON-042 엘프 ×1', '4~6턴', '45G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('군집+저주 압박', 'MON-047 픽시 ×1', '4~6턴', '50G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('물리면역+재생 격돌', 'MON-044 숲의 정령 ×1', '4~6턴', '55G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('관통+중독 심화', 'MON-041 다크엘프 ×1', '4~6턴', '65G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('재생+소환 도입', 'MON-043 드라이어드 ×1', '5~7턴', '70G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('AP흡수+봉인 견제', 'MON-023 인큐버스 ×1', '5~7턴', '75G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('저주+봉인 강화', 'MON-048 위치 ★ ×1', '5~7턴', '85G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('매혹의 요마숲 보스전 (1차 각성)', 'MON-064 보스 모드 (매혹의 요마숲 1차 각성)', '20~24턴(총)', '350G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('저주+봉인 압박', 'MON-048 위치 ★ ×1', '5~7턴', '90G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('소환+재생 격돌', 'MON-045 트레타니스 ★ ×1', '5~7턴', '110G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('저주+봉인 심화', 'MON-048 위치 ★ ×1', '5~7턴', '130G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('관통+중독 도입', 'MON-041 다크엘프 ×1\nMON-022 이네비 ×1', '6~8턴', '150G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('재생+소환 견제', 'MON-043 드라이어드 ×1\nMON-023 인큐버스 ×1', '6~8턴', '170G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('재생+소환 강화', 'MON-043 드라이어드 ×1\nMON-022 이네비 ×1', '6~8턴', '190G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('AP흡수+봉인 압박', 'MON-023 인큐버스 ×1\nMON-043 드라이어드 ×1', '6~8턴', '210G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('저주+봉인 격돌', 'MON-048 위치 ★ ×1\nMON-043 드라이어드 ×1', '6~8턴', '230G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('봉인+공포 심화', 'MON-022 이네비 ×1\nMON-048 위치 ★ ×1', '6~8턴', '250G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('매혹의 요마숲 보스전 (2차 각성)', 'MON-064 보스 모드 (매혹의 요마숲 2차 각성)', '22~26턴(총)', '500G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('저주+봉인 도입', 'MON-048 위치 ★ ×1\nMON-023 인큐버스 ×1', '7~9턴', '220G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('소환+재생 견제', 'MON-045 트레타니스 ★ ×1\nMON-023 인큐버스 ×1', '7~9턴', '270G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('저주+봉인 강화', 'MON-048 위치 ★ ×1\nMON-045 트레타니스 ★ ×1', '7~9턴', '320G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('봉인+흡혈 압박', 'MON-021 서큐버스 ★ ×1\nMON-048 위치 ★ ×1', '7~9턴', '370G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('소환+재생 격돌', 'MON-045 트레타니스 ★ ×1\nMON-048 위치 ★ ×1', '7~9턴', '420G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('AP흡수+저주 심화', 'MON-024 알라무스 ★ ×1\nMON-021 서큐버스 ★ ×1', '7~9턴', '470G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('저주+봉인 도입', 'MON-048 위치 ★ ×1\nMON-022 이네비 ×1\nMON-021 서큐버스 ★ ×1', '8~10턴', '515G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('AP흡수+봉인 견제', 'MON-023 인큐버스 ×1\nMON-021 서큐버스 ★ ×1\nMON-048 위치 ★ ×1', '8~10턴', '565G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('소환+재생 강화', 'MON-045 트레타니스 ★ ×1\nMON-023 인큐버스 ×1\nMON-048 위치 ★ ×1', '8~10턴', '615G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('매혹의 요마숲 보스전 (3차 각성)', 'MON-064 보스 모드 (매혹의 요마숲 3차 각성)', '24~28턴(총)', '650G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('저주+봉인 압박', 'MON-048 위치 ★ ×1\nMON-021 서큐버스 ★ ×1\nMON-022 이네비 ×1', '8~10턴', '450G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('봉인+흡혈 격돌', 'MON-021 서큐버스 ★ ×1\nMON-023 인큐버스 ×1\nMON-045 트레타니스 ★ ×1', '8~10턴', '550G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('저주+봉인 심화', 'MON-048 위치 ★ ×1\nMON-045 트레타니스 ★ ×1\nMON-023 인큐버스 ×1', '8~10턴', '655G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('봉인+흡혈 도입', 'MON-021 서큐버스 ★ ×1\nMON-048 위치 ★ ×1\nMON-023 인큐버스 ×1', '9~11턴', '755G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+재생 견제', 'MON-045 트레타니스 ★ ×1\nMON-048 위치 ★ ×1\nMON-021 서큐버스 ★ ×1', '9~11턴', '855G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('AP흡수+저주 강화', 'MON-024 알라무스 ★ ×1\nMON-021 서큐버스 ★ ×1\nMON-048 위치 ★ ×1', '9~11턴', '955G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('AP흡수+저주 압박', 'MON-024 알라무스 ★ ×1\nMON-045 트레타니스 ★ ×1\nMON-023 인큐버스 ×2', '9~11턴', '1060G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('봉인+흡혈 격돌', 'MON-021 서큐버스 ★ ×1\nMON-048 위치 ★ ×1\nMON-024 알라무스 ★ ×1', '9~11턴', '1160G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+재생 심화', 'MON-045 트레타니스 ★ ×1\nMON-024 알라무스 ★ ×1\nMON-048 위치 ★ ×1', '9~11턴', '1260G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('매혹의 요마숲 보스전 (최종 각성)', 'MON-064 보스 모드 (매혹의 요마숲 최종 각성)', '26~32턴(총)', '850G(보상)', '— (보상 없음, 클리어 보상)')
];

const STAGE3_WAVES = [
  mkWave('마비+마법면역 도입', 'MON-052 빙의 정령 ×1', '4~6턴', '30G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('가시+마법면역 견제', 'MON-049 화염정령 ×1', '4~6턴', '35G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('중독+부식 강화', 'MON-051 살라만더 ×1', '4~6턴', '45G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('마비+마법면역 압박', 'MON-052 빙의 정령 ×1', '4~6턴', '50G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('가시+마법면역 격돌', 'MON-049 화염정령 ×1', '4~6턴', '55G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('군집+선공 심화', 'MON-031 라피야 ×1', '4~6턴', '65G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('보호막+선공 도입', 'MON-025 미믹 ×1', '5~7턴', '70G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('관통+중독 견제', 'MON-028 만티코어 ×1', '5~7턴', '75G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('분열+소환 강화', 'MON-026 슬라임 퀸 ★ ×1', '5~7턴', '85G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('환영의 폭풍 보스전 (1차 각성)', 'MON-064 보스 모드 (환영의 폭풍 1차 각성)', '20~24턴(총)', '350G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('분열+소환 압박', 'MON-026 슬라임 퀸 ★ ×1', '5~7턴', '90G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('마비+AP흡수 격돌', 'MON-053 설녀 ★ ×1', '5~7턴', '110G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('마비+봉인 심화', 'MON-054 Frost Witch ★ ×1', '5~7턴', '130G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('보호막+선공 도입', 'MON-025 미믹 ×1\nMON-031 라피야 ×1', '6~8턴', '150G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('관통+중독 견제', 'MON-028 만티코어 ×1\nMON-055 바다 마녀 ×1', '6~8턴', '170G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('광폭화+선공 강화', 'MON-029 와이번 ×1\nMON-055 바다 마녀 ×1', '6~8턴', '190G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('광폭화+선공 압박', 'MON-029 와이번 ×1\nMON-028 만티코어 ×1', '6~8턴', '210G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('분열+소환 격돌', 'MON-026 슬라임 퀸 ★ ×1\nMON-028 만티코어 ×1', '6~8턴', '230G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('저주+소환 심화', 'MON-055 바다 마녀 ×1\nMON-026 슬라임 퀸 ★ ×1', '6~8턴', '250G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('환영의 폭풍 보스전 (2차 각성)', 'MON-064 보스 모드 (환영의 폭풍 2차 각성)', '22~26턴(총)', '500G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('분열+소환 도입', 'MON-026 슬라임 퀸 ★ ×1\nMON-029 와이번 ×1', '7~9턴', '220G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('분열+소환 견제', 'MON-026 슬라임 퀸 ★ ×1\nMON-054 Frost Witch ★ ×1', '7~9턴', '270G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+봉인 강화', 'MON-054 Frost Witch ★ ×1\nMON-053 설녀 ★ ×1', '7~9턴', '320G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('광폭화+가시 압박', 'MON-050 이프리트 ★ ×1\nMON-053 설녀 ★ ×1', '7~9턴', '370G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('소환+AP흡수 격돌', 'MON-056 크라켄 소환사 ★ ×1\nMON-027 아머 미믹 ★ ×1', '7~9턴', '420G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+봉인 심화', 'MON-054 Frost Witch ★ ×1\nMON-056 크라켄 소환사 ★ ×1', '7~9턴', '470G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('분열+소환 도입', 'MON-026 슬라임 퀸 ★ ×1\nMON-055 바다 마녀 ×1\nMON-028 만티코어 ×1', '8~10턴', '515G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+AP흡수 견제', 'MON-053 설녀 ★ ×1\nMON-055 바다 마녀 ×1\nMON-026 슬라임 퀸 ★ ×1', '8~10턴', '565G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('광폭화+가시 강화', 'MON-050 이프리트 ★ ×1\nMON-026 슬라임 퀸 ★ ×1\nMON-029 와이번 ×1', '8~10턴', '615G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('환영의 폭풍 보스전 (3차 각성)', 'MON-064 보스 모드 (환영의 폭풍 3차 각성)', '24~28턴(총)', '650G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('마비+AP흡수 압박', 'MON-053 설녀 ★ ×1\nMON-050 이프리트 ★ ×1\nMON-029 와이번 ×1', '8~10턴', '450G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('광폭화+가시 격돌', 'MON-050 이프리트 ★ ×1\nMON-026 슬라임 퀸 ★ ×1\nMON-053 설녀 ★ ×1', '8~10턴', '550G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('마비+봉인 심화', 'MON-054 Frost Witch ★ ×1\nMON-053 설녀 ★ ×1\nMON-056 크라켄 소환사 ★ ×1', '8~10턴', '655G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('광폭화+가시 도입', 'MON-050 이프리트 ★ ×1\nMON-053 설녀 ★ ×1\nMON-027 아머 미믹 ★ ×1', '9~11턴', '755G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('광폭화+가시 견제', 'MON-050 이프리트 ★ ×1\nMON-027 아머 미믹 ★ ×1\nMON-054 Frost Witch ★ ×1', '9~11턴', '855G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('마비+봉인 강화', 'MON-054 Frost Witch ★ ×1\nMON-056 크라켄 소환사 ★ ×1\nMON-050 이프리트 ★ ×1', '9~11턴', '955G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('보호막+가시 압박', 'MON-027 아머 미믹 ★ ×1\nMON-054 Frost Witch ★ ×1\nMON-030 드레곤 걸 ★ ×1', '9~11턴', '1060G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+AP흡수 격돌', 'MON-056 크라켄 소환사 ★ ×1\nMON-054 Frost Witch ★ ×1\nMON-027 아머 미믹 ★ ×1', '9~11턴', '1160G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+AP흡수 심화', 'MON-056 크라켄 소환사 ★ ×1\nMON-030 드레곤 걸 ★ ×1\nMON-054 Frost Witch ★ ×1', '9~11턴', '1260G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('환영의 폭풍 보스전 (최종 각성)', 'MON-064 보스 모드 (환영의 폭풍 최종 각성)', '26~32턴(총)', '850G(보상)', '— (보상 없음, 클리어 보상)')
];

const STAGE4_WAVES = [
  mkWave('분열 도입', 'MON-001 슬라임 ×1', '4~6턴', '30G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('중독+마비 견제', 'MON-059 스파이더 걸 ×1', '4~6턴', '35G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('마비+가시 강화', 'MON-034 고르곤 ×1', '4~6턴', '45G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('중독+마비 압박', 'MON-059 스파이더 걸 ×1', '4~6턴', '50G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('마비+가시 격돌', 'MON-034 고르곤 ×1', '4~6턴', '55G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('방어무시+광폭화 심화', 'MON-036 미노타우로스 ×1', '4~6턴', '65G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('중독+마비 도입', 'MON-059 스파이더 걸 ×1', '5~7턴', '70G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('마비+가시 견제', 'MON-034 고르곤 ×1', '5~7턴', '75G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('방어무시+광폭화 강화', 'MON-036 미노타우로스 ×1', '5~7턴', '85G', 'T1 60% / T2 30% / T3 10%'),
  mkWave('신화의 종언 보스전 (1차 각성)', 'MON-064 보스 모드 (신화의 종언 1차 각성)', '20~24턴(총)', '350G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('마비+가시 압박', 'MON-034 고르곤 ×1', '5~7턴', '90G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+광폭화 격돌', 'MON-036 미노타우로스 ×1', '5~7턴', '110G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+마비 심화', 'MON-057 사이클롭스 ×1', '5~7턴', '130G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('중독+마비 도입', 'MON-059 스파이더 걸 ×1\nMON-036 미노타우로스 ×1', '6~8턴', '150G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('마비+가시 견제', 'MON-034 고르곤 ×1\nMON-033 메두사 ★ ×1', '6~8턴', '170G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+광폭화 강화', 'MON-036 미노타우로스 ×1\nMON-059 스파이더 걸 ×1', '6~8턴', '190G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('마비+가시 압박', 'MON-034 고르곤 ×1\nMON-033 메두사 ★ ×1', '6~8턴', '210G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('방어무시+광폭화 격돌', 'MON-036 미노타우로스 ×1\nMON-033 메두사 ★ ×1', '6~8턴', '230G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('중독+마비 심화', 'MON-059 스파이더 걸 ×1\nMON-034 고르곤 ×1', '6~8턴', '250G', 'T1 30% / T2 40% / T3 25% / T4 5%'),
  mkWave('신화의 종언 보스전 (2차 각성)', 'MON-064 보스 모드 (신화의 종언 2차 각성)', '22~26턴(총)', '500G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('방어무시+광폭화 도입', 'MON-036 미노타우로스 ×1\nMON-033 메두사 ★ ×1', '7~9턴', '220G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+가시 견제', 'MON-034 고르곤 ×1\nMON-057 사이클롭스 ×1', '7~9턴', '270G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+가시 강화', 'MON-034 고르곤 ×1\nMON-033 메두사 ★ ×1', '7~9턴', '320G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+물리면역 압박', 'MON-033 메두사 ★ ×1\nMON-036 미노타우로스 ×1', '7~9턴', '370G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('방어무시+마비 격돌', 'MON-057 사이클롭스 ×1\nMON-058 거미 여왕 ★ ×1', '7~9턴', '420G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+물리면역 심화', 'MON-033 메두사 ★ ×1\nMON-057 사이클롭스 ×1', '7~9턴', '470G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+가시 도입', 'MON-034 고르곤 ×1\nMON-059 스파이더 걸 ×1\nMON-057 사이클롭스 ×1', '8~10턴', '515G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('방어무시+광폭화 견제', 'MON-036 미노타우로스 ×1\nMON-059 스파이더 걸 ×1\nMON-034 고르곤 ×1', '8~10턴', '565G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('마비+물리면역 강화', 'MON-033 메두사 ★ ×1\nMON-036 미노타우로스 ×1\nMON-059 스파이더 걸 ×1', '8~10턴', '615G', 'T2 30% / T3 40% / T4 25% / T5 5%'),
  mkWave('신화의 종언 보스전 (3차 각성)', 'MON-064 보스 모드 (신화의 종언 3차 각성)', '24~28턴(총)', '650G(보상)', '— (보상 없음, 클리어 보상)'),
  mkWave('방어무시+광폭화 압박', 'MON-036 미노타우로스 ×1\nMON-034 고르곤 ×1\nMON-059 스파이더 걸 ×1', '8~10턴', '450G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+광폭화 격돌', 'MON-036 미노타우로스 ×1\nMON-057 사이클롭스 ×1\nMON-033 메두사 ★ ×1', '8~10턴', '550G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+마비 심화', 'MON-057 사이클롭스 ×1\nMON-033 메두사 ★ ×1\nMON-034 고르곤 ×1', '8~10턴', '655G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('마비+물리면역 도입', 'MON-033 메두사 ★ ×1\nMON-036 미노타우로스 ×1\nMON-058 거미 여왕 ★ ×1', '9~11턴', '755G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('마비+물리면역 견제', 'MON-033 메두사 ★ ×1\nMON-036 미노타우로스 ×1\nMON-057 사이클롭스 ×1', '9~11턴', '855G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('소환+중독 강화', 'MON-058 거미 여왕 ★ ×1\nMON-057 사이클롭스 ×1\nMON-035 키메라 ★ ×1', '9~11턴', '955G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+마비 압박', 'MON-057 사이클롭스 ×1\nMON-035 키메라 ★ ×1\nMON-033 메두사 ★ ×1', '9~11턴', '1060G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('방어무시+마비 격돌', 'MON-057 사이클롭스 ×1\nMON-038 아누비스 ★ ×1\nMON-058 거미 여왕 ★ ×1', '9~11턴', '1160G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('저주+AP흡수 심화', 'MON-038 아누비스 ★ ×1\nMON-058 거미 여왕 ★ ×1\nMON-061 벌레 여왕 ★ ×1', '9~11턴', '1260G', 'T3 30% / T4 40% / T5 30%'),
  mkWave('신화의 종언 보스전 (최종 각성)', 'MON-064 보스 모드 (신화의 종언 최종 각성)', '26~32턴(총)', '850G(보상)', '— (보상 없음, 클리어 보상)')
];

const STAGE_DEFAULT_WAVES = [STAGE1_WAVES, STAGE2_WAVES, STAGE3_WAVES, STAGE4_WAVES];

const STAGE_TYPE_DESC = {
  stage1: {
    name: '질서와 그림자', groups: '기초 + 언데드 계열',
    body: '표준적인 물리 전투에 언데드 계열의 저주·공포·흡혈이 뒤섞이는 정석형 스타일입니다. 방어무시+광폭화 조합이 몰리는 구간의 순간 화력에 주의하세요.',
    tags: ['방어무시', '광폭화', '흡혈', '공포', '소환']
  },
  stage2: {
    name: '매혹의 요마숲', groups: '자연/요정 + 악마 계열',
    body: '매혹·저주·봉인 위주의 상태이상(CC) 싸움입니다. 순수 물리 딜보다 디버프 해제·면역 대응력이 승패를 가릅니다.',
    tags: ['저주', '봉인', 'AP흡수', '소환', '재생']
  },
  stage3: {
    name: '환영의 폭풍', groups: '트릭/드래곤 + 원소 계열',
    body: '분열·소환으로 물량을 불리고 마비·보호막으로 턴을 버티는 환영·원소 스타일입니다. 광역 처리력과 턴 관리가 중요합니다.',
    tags: ['분열', '마비', '보호막', '광폭화', '소환']
  },
  stage4: {
    name: '신화의 종언', groups: '신화/고대 + 강대 계열',
    body: '마비·방어무시·물리면역 등 묵직한 광역 디버프가 겹치는 신화급 스타일입니다. 소수의 강적이 전투 전체를 좌우합니다.',
    tags: ['마비', '방어무시', '물리면역', '저주', '소환']
  }
};

const STAGE_COUNT = 4; // 스테이지 타입 1~4 (난이도 차이가 아니라 속성/테마 차이)
const WAVE_COUNT = 40; // 타입별 Wave 1~40 연속 진행, 10웨이브마다 히로인 보스

function emptyWave() {
  return { theme: '', monsters: '', turns: '', gold: '', drop: '', note: '' };
}

function mkWave(theme, monsters, turns, gold, drop, note) {
  return { theme, monsters, turns, gold, drop, note: note || '' };
}

// 스테이지 타입 1: "질서와 그림자" — A.기초 + B.언데드 그룹 중심 (Wave 1~40, 10웨이브마다 히로인 보스).

// 스테이지 타입 2: "매혹의 요마숲" — F.자연/요정 + C.악마 그룹 중심 (Wave 1~40, 10웨이브마다 히로인 보스).

// 스테이지 타입 3: "환영의 폭풍" — D.트릭/드래곤 + G.원소 그룹 중심 (Wave 1~40, 10웨이브마다 히로인 보스).

// 스테이지 타입 4: "신화의 종언" — E.신화/고대 + H.강대 그룹 중심 (Wave 1~40, 10웨이브마다 히로인 보스).


function defaultStageDesign() {
  const d = {};
  for (let n = 1; n <= STAGE_COUNT; n++) {
    const preset = STAGE_DEFAULT_WAVES[n - 1];
    d['stage' + n] = {
      name: '스테이지 타입 ' + n,
      waves: preset ? preset.map(w => Object.assign({}, w)) : Array.from({ length: WAVE_COUNT }, emptyWave)
    };
  }
  return d;
}

// 스테이지 표는 읽기 전용 참고 자료이므로 localStorage 저장/불러오기 없이
// 항상 고정된 기본 디자인(defaultStageDesign)만 사용한다.
let STAGE_DESIGN = defaultStageDesign();
let currentStageKey = 'stage1';

// 드롭 테이블에 적힌 T1~T5 표기를 뱃지로 바꾸고, 호버하면 DB > 아이템 > "기본 아이템" 시트에서
// 해당 티어에 해당하는 실제 보상 아이템 목록을 툴팁으로 보여준다.
function getBasicItemsByTier(tier) {
  const rows = (((DATA['아이템'] || {})['기본 아이템']) || {}).rows || [];
  return rows.filter(r => cell(r['티어']) === tier);
}

function itemThumb(id) {
  return (typeof ITEM_SPRITES !== 'undefined' && ITEM_SPRITES && ITEM_SPRITES[id])
    ? ('data:image/png;base64,' + ITEM_SPRITES[id]) : '';
}

function monThumb(id) {
  return (typeof SPRITES !== 'undefined' && SPRITES && SPRITES[id])
    ? ('data:image/png;base64,' + SPRITES[id]) : '';
}

function buildDropBadges(text) {
  const wrap = document.createElement('div');
  wrap.className = 'drop-badges';
  const tiers = Array.from(new Set((text || '').match(/T[1-5]/g) || []));
  tiers.forEach(tier => {
    const items = getBasicItemsByTier(tier);
    const badge = document.createElement('span');
    badge.className = 'tier-badge';
    badge.tabIndex = 0;
    badge.textContent = tier;
    badge.title = '클릭하면 전체 목록 팝업';
    badge.addEventListener('click', () => openTierModal(tier));
    badge.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openTierModal(tier); }
    });

    const tip = document.createElement('div');
    tip.className = 'tier-tip';
    const h = document.createElement('div');
    h.className = 'tier-tip-h';
    h.textContent = tier + ' 보상 아이템 (' + items.length + '개)';
    tip.appendChild(h);
    items.slice(0, 10).forEach(it => {
      const id = cell(it['ID']);
      const line = document.createElement('div');
      line.className = 'tier-tip-item';
      const src = itemThumb(id);
      if (src) {
        const img = document.createElement('img');
        img.src = src;
        line.appendChild(img);
      }
      const label = document.createElement('span');
      label.textContent = cell(it['이름']) + ' (' + cell(it['슬롯']) + ')';
      line.appendChild(label);
      tip.appendChild(line);
    });
    if (items.length > 10) {
      const more = document.createElement('div');
      more.className = 'tier-tip-more';
      more.textContent = '+ ' + (items.length - 10) + '개 더 · 클릭하면 전체 목록';
      tip.appendChild(more);
    }
    badge.appendChild(tip);
    wrap.appendChild(badge);
  });
  return wrap;
}

// 티어 뱃지 클릭 시 화면 가운데 큰 리스트 팝업.
function openTierModal(tier) {
  const items = getBasicItemsByTier(tier);
  const overlay = document.getElementById('tierModalOverlay');
  const body = document.getElementById('tierModalBody');
  if (!overlay || !body) return;

  body.innerHTML = '';
  const title = document.createElement('h3');
  title.className = 'modal-title';
  title.textContent = tier + ' 보상 아이템 목록 (' + items.length + '개)';
  body.appendChild(title);

  const list = document.createElement('div');
  list.className = 'modal-item-list';
  items.forEach(it => {
    const id = cell(it['ID']);
    const row = document.createElement('div');
    row.className = 'modal-item';
    const src = itemThumb(id);
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      row.appendChild(img);
    }
    const info = document.createElement('div');
    const name = document.createElement('div');
    name.className = 'modal-item-name';
    name.textContent = cell(it['이름']);
    const sub = document.createElement('div');
    sub.className = 'modal-item-sub';
    sub.textContent = [cell(it['슬롯']), cell(it['스탯요약'])].filter(Boolean).join(' · ');
    info.appendChild(name);
    info.appendChild(sub);
    row.appendChild(info);
    list.appendChild(row);
  });
  body.appendChild(list);

  overlay.hidden = false;
}

function closeTierModal() {
  const overlay = document.getElementById('tierModalOverlay');
  if (overlay) overlay.hidden = true;
}

(function wireTierModalEvents() {
  const overlay = document.getElementById('tierModalOverlay');
  const closeBtn = document.getElementById('tierModalClose');
  if (closeBtn) closeBtn.addEventListener('click', closeTierModal);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeTierModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTierModal();
  });
})();

// 적 구성 텍스트에서 "MON-XXX ... ×N" 패턴을 찾아 이미지 칩 + 능력치 호버 툴팁으로 표시.
function findMonster(id) {
  const rows = (((DATA['몬스터'] || {})['몬스터 DB']) || {}).rows || [];
  return rows.find(r => cell(r['ID']) === id) || null;
}

function parseMonsterEntries(text) {
  const lines = (text || '').split('\n');
  const result = [];
  lines.forEach(line => {
    const idMatch = line.match(/MON-\d{3}/);
    if (!idMatch) return;
    const qtyMatch = line.match(/[×xX]\s*(\d+)/);
    result.push({ id: idMatch[0], qty: qtyMatch ? parseInt(qtyMatch[1], 10) : 1 });
  });
  return result;
}

// 적 구성 칸을 [번호][이미지][이름][등급(색상)][마리수] 리스트로 표시하고,
// 각 행에 마우스 오버하면 능력치 툴팁을 보여준다.
function buildMonsterList(text) {
  const wrap = document.createElement('div');
  wrap.className = 'mon-list';
  parseMonsterEntries(text).forEach((entry, idx) => {
    const mon = findMonster(entry.id);
    const row = document.createElement('div');
    row.className = 'mon-row';
    row.tabIndex = 0;

    const num = document.createElement('span');
    num.className = 'mon-row-num';
    num.textContent = String(idx + 1);
    row.appendChild(num);

    const src = monThumb(entry.id);
    if (src) {
      const img = document.createElement('img');
      img.className = 'mon-row-img';
      img.src = src;
      img.alt = mon ? cell(mon['한글명']) : entry.id;
      row.appendChild(img);
    }

    const name = document.createElement('span');
    name.className = 'mon-row-name';
    name.textContent = mon ? cell(mon['한글명']) : entry.id;
    row.appendChild(name);

    const gradeRaw = mon ? cell(mon['등급']) : '';
    const gradeKey = gradeRaw.replace('★', '');
    if (gradeRaw) {
      const grade = document.createElement('span');
      grade.className = 'mon-row-grade grade-' + gradeKey;
      grade.textContent = gradeRaw;
      row.appendChild(grade);
    }

    const qty = document.createElement('span');
    qty.className = 'mon-row-qty';
    qty.textContent = '×' + (entry.qty || 1);
    row.appendChild(qty);

    const tip = document.createElement('div');
    tip.className = 'tier-tip';
    if (mon) {
      const traits = [mon['특성1'], mon['특성2'], mon['특성3'], mon['특성4']].filter(Boolean).join(' / ');
      const h = document.createElement('div');
      h.className = 'tier-tip-h';
      h.textContent = cell(mon['한글명']) + ' (' + entry.id + (gradeRaw ? ', ' + gradeRaw : '') + ')';
      tip.appendChild(h);
      const stat = document.createElement('div');
      stat.className = 'tier-tip-item';
      stat.textContent = 'HP ' + cell(mon['HP']) + ' · ATK ' + cell(mon['ATK']) + ' · DEF ' + cell(mon['DEF']);
      tip.appendChild(stat);
      if (traits) {
        const tr = document.createElement('div');
        tr.className = 'tier-tip-item';
        tr.textContent = '특성: ' + traits;
        tip.appendChild(tr);
      }
    } else {
      const line = document.createElement('div');
      line.className = 'tier-tip-item';
      line.textContent = entry.id + ' (DB에 없음)';
      tip.appendChild(line);
    }
    row.appendChild(tip);
    wrap.appendChild(row);
  });
  return wrap;
}

// 적 구성 텍스트를 파싱해 "몬스터별 파워 지수 + ... = 총합" 형태의 문자열로 만든다.
// (파워 지수 계산식 자체는 아래 "몬스터 파워 지수" 섹션의 computePowerScore를 그대로 사용)
function buildWavePowerText(text) {
  const entries = parseMonsterEntries(text);
  const terms = [];
  let total = 0;
  entries.forEach(entry => {
    const mon = findMonster(entry.id);
    const score = mon ? computePowerScore(mon) : null;
    if (!score) return;
    const val = Math.round(score.total) * (entry.qty || 1);
    terms.push(val);
    total += val;
  });
  if (!terms.length) return '';
  if (terms.length === 1) return String(terms[0]);
  return terms.join(' + ') + ' = ' + total;
}


function renderStageTypeDesc() {
  const host = document.getElementById('stageTypeDesc');
  if (!host) return;
  const info = STAGE_TYPE_DESC[currentStageKey];
  if (!info) { host.innerHTML = ''; return; }
  host.innerHTML =
    '<div class="stage-type-desc-title">' + info.name + '<span class="stage-type-desc-groups">' + info.groups + '</span></div>' +
    '<div class="stage-type-desc-body">' + info.body +
    '<div class="stage-type-desc-tags">' + info.tags.map(t => '<span class="stage-type-desc-tag">' + t + '</span>').join('') + '</div>' +
    '</div>';
}

function renderStageTabs() {
  const wrap = document.getElementById('stageTabs');
  if (!wrap) return;
  wrap.innerHTML = '';
  for (let n = 1; n <= STAGE_COUNT; n++) {
    const key = 'stage' + n;
    const stage = STAGE_DESIGN[key];
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab' + (key === currentStageKey ? ' active' : '');
    b.textContent = stage.name;
    b.addEventListener('click', () => {
      currentStageKey = key;
      renderStagePage();
    });
    wrap.appendChild(b);
  }
}

// 셀 내용을 읽기 전용 텍스트로 표시 (줄바꿈은 그대로 유지).
function buildCellText(value) {
  const div = document.createElement('div');
  div.className = 'cell-text';
  div.textContent = value || '';
  return div;
}

function renderWaveTable() {
  const host = document.getElementById('waveTableWrap');
  if (!host) return;
  const stage = STAGE_DESIGN[currentStageKey];

  host.innerHTML = '';
  const table = document.createElement('table');
  table.className = 'wave-table';

  const thead = document.createElement('thead');
  const trh = document.createElement('tr');
  ['Wave'].concat(WAVE_COLS.map(c => c.label)).forEach(label => {
    const th = document.createElement('th');
    th.textContent = label;
    trh.appendChild(th);
  });
  thead.appendChild(trh);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  stage.waves.forEach((wave, i) => {
    const tr = document.createElement('tr');

    const tdWave = document.createElement('td');
    tdWave.innerHTML = '<strong>Wave ' + (i + 1) + '</strong>' + ((i + 1) % 10 === 0 ? '<br><span class="count">보스</span>' : '');
    tr.appendChild(tdWave);

    WAVE_COLS.forEach(col => {
      const td = document.createElement('td');
      if (col.className) td.className = col.className;
      const value = col.compute ? col.compute(wave) : (wave[col.key] || '');

      if (col.key === 'monsters') {
        // [번호][이미지][이름][등급][마리수] 리스트로 표시하므로 원본 텍스트는 노출하지 않는다.
        td.appendChild(buildMonsterList(value));
      } else if (col.key === 'drop') {
        td.appendChild(buildCellText(value));
        td.appendChild(buildDropBadges(value));
      } else {
        td.appendChild(buildCellText(value));
      }

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  host.appendChild(table);
}

function renderStagePage() {
  renderStageTabs();
  renderStageTypeDesc();
  renderWaveTable();
}

function exportStageDesign() {
  const blob = new Blob([JSON.stringify(STAGE_DESIGN, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'glass_d_stage_design.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

(function wireStagePageEvents() {
  const exportBtn = document.getElementById('stageExportBtn');
  if (exportBtn) exportBtn.addEventListener('click', exportStageDesign);
})();

/* ---------- 몬스터 파워 지수 (Power Score) ----------
   목적: 몬스터 스탯 + 특성을 하나의 점수로 환산해 스테이지/웨이브 난이도 설계 기준선을 만든다.
   계산식: 파워 지수 = HP×1 + ATK×10 + DEF×20 + Σ(보유 특성 점수) */
