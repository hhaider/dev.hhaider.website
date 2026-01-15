let previousSectionName = "";
let currentSectionName = "";
let defaultSection = "profile";

function renderSection(sectionName) {
    if (currentSectionName === sectionName) {
        return;
    }
    let currentSection = document.getElementById(currentSectionName + '-card');
    if (currentSection) {
        let section = document.getElementById(sectionName + '-card');
        section.removeAttribute('hidden');
        renderNavBar(sectionName, true);
        currentSection.setAttribute('hidden', '');
        renderNavBar(currentSectionName, false);
        previousSectionName = currentSectionName;
        currentSectionName = sectionName;
    } else {
        let section = document.getElementById(sectionName + '-card');
        section.removeAttribute('hidden');
        renderNavBar(sectionName, true);
        currentSectionName = sectionName;
    }
}

function renderNavBar(sectionName, selected) {
    if (sectionName === defaultSection) {
        return;
    }
    let navBar = document.getElementById('nav-' + sectionName);
    if (selected) {
        navBar?.setAttribute('class', 'selected');
    } else {
        navBar?.removeAttribute('class');
    }
}

renderSection(defaultSection);


let paymentWindowReference = null;
let currentUrl = null;
function openPaymentWindow(url) {
  if (paymentWindowReference === null || paymentWindowReference.closed) {
    createPaymentWindow(url);
  } else {
    if (url !== currentUrl) {
        paymentWindowReference.close();
        createPaymentWindow(url);
    } else {
        paymentWindowReference.focus();
    }
  }
}

function createPaymentWindow(url) {
    const paymentWindowSize = "left=800,top=100,width=480,height=999";
    currentUrl = url;
    paymentWindowReference = window.open(url, "paymentWindow", paymentWindowSize);
}