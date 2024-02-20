// NAVIGATION
const navBtn = document.querySelector('.mobile-nav-toggle');

navBtn.addEventListener('click', function() {
  document.body.classList.toggle('jsOpenNav');
  const ariaExpandedAttr = this.getAttribute('aria-expanded');
  if (ariaExpandedAttr === 'false') {
    this.setAttribute('aria-expanded', 'true')
  } else {
    this.setAttribute('aria-expanded', 'false');
  }  
})

// TABS

const tabList = document.querySelector('[role="tablist"');
const tabs = tabList.querySelectorAll('[role="tab"]');
// const destinationInfoArticles = document.querySelectorAll('.destination-info');

tabList.addEventListener('keydown', changeTabFocus);
// tabList.addEventListener('keydown', activateTab);
tabs.forEach(tab => {
  tab.addEventListener('click', changeTabPanel);
})

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  if (e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    tabs[tabFocus].setAttribute('tabindex', '-1');
    // tabs[tabFocus].setAttribute('aria-selected', 'false');
      if(e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    };

    if (e.keyCode === keydownLeft) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].focus();
    tabs[tabFocus].setAttribute('tabindex', "0");
  }
  
  
  
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach(item => item.hidden = true);
}

function showContent(parent, content) {
  parent.querySelector(content).hidden = false;
}

function changeTabPanel(e) {
  const targetBtn = e.target;
  const targetPanel = targetBtn.getAttribute('aria-controls');
  const targetImage = targetBtn.dataset.image;
  const tabContainer = targetBtn.parentNode;
  const mainContainer = tabContainer.parentNode;
  
  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, [`#${targetPanel}`]);
  
  hideContent(mainContainer, 'picture');
  showContent(mainContainer, [`#${targetImage}`]);

  tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false);
  targetBtn.setAttribute('aria-selected', true);
}

