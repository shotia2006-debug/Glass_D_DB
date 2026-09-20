const PAGE_META = {
  layout: { title: '레이아웃', sub: '타이틀 · 캐릭터 · 스테이지 · 대화 · 옵션 · 인게임 — 흑백 와이어프레임' },
  stage: { title: '스테이지', sub: '' },
  power: { title: '파워 지수', sub: '몬스터 스탯 · 특성을 하나의 숫자로 환산 — 스테이지 난이도 설계 기준(v1 초안)' },
  art: { title: '아트 리소스', sub: '' },
  data: { title: 'DB', sub: '몬스터 · 아이템(기본/재료/세트/조합) — HTML 파일만 공유해도 열람 가능 · 장비 크기 당분간 1×1' }
};

const LAYOUT_PANELS = {
  title: 'outgameTitlePanel',
  char: 'outgameCharPanel',
  stage: 'outgameStagePanel',
  dialog: 'outgameDialogPanel',
  option: 'layoutOptionPanel',
  ingame: 'layoutIngamePanel'
};

function showLayoutTab(tab) {
  const key = LAYOUT_PANELS[tab] ? tab : 'title';
  Object.keys(LAYOUT_PANELS).forEach(k => {
    const el = document.getElementById(LAYOUT_PANELS[k]);
    if (el) el.hidden = (k !== key);
  });
  document.querySelectorAll('#layoutSubTabs .subtab').forEach(b => {
    b.classList.toggle('active', b.dataset.layoutTab === key);
  });
}

function showPage(page) {
  if (page === 'outgame' || page === 'ingame') page = 'layout';
  const meta = PAGE_META[page] || PAGE_META.data;
  const pageData = document.getElementById('page-data');
  const pageArt = document.getElementById('page-art');
  const pageLayout = document.getElementById('page-layout');
  const pageStage = document.getElementById('page-stage');
  const pagePower = document.getElementById('page-power');
  const pagePlaceholder = document.getElementById('page-placeholder');
  const mainTabs = document.getElementById('mainTabs');
  document.getElementById('pageTitle').textContent = meta.title;
  document.getElementById('pageSub').textContent = meta.sub;
  document.querySelectorAll('.sidebar .nav button').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
  if (pageData) pageData.hidden = true;
  if (pageArt) pageArt.hidden = true;
  if (pageLayout) pageLayout.hidden = true;
  if (pageStage) pageStage.hidden = true;
  if (pagePower) pagePower.hidden = true;
  if (pagePlaceholder) pagePlaceholder.hidden = true;
  if (mainTabs) mainTabs.style.display = 'none';
  if (page === 'data') {
    if (pageData) pageData.hidden = false;
    if (mainTabs) mainTabs.style.display = '';
  } else if (page === 'art') {
    if (pageArt) pageArt.hidden = false;
    renderArtPage();
  } else if (page === 'layout') {
    if (pageLayout) pageLayout.hidden = false;
    showLayoutTab('title');
  } else if (page === 'stage') {
    if (pageStage) pageStage.hidden = false;
    renderStagePage();
  } else if (page === 'power') {
    if (pagePower) pagePower.hidden = false;
    renderPowerPage();
  } else {
    if (pagePlaceholder) pagePlaceholder.hidden = false;
    const msg = document.getElementById('placeholderMsg');
    if (msg) msg.textContent = '준비 중';
  }
}

document.querySelectorAll('#layoutSubTabs .subtab').forEach(b => {
  b.addEventListener('click', () => {
    if (b.disabled) return;
    showLayoutTab(b.dataset.layoutTab);
  });
});

document.querySelectorAll('.sidebar .nav button').forEach(b => {
  b.addEventListener('click', () => showPage(b.dataset.page));
});
