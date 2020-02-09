function singlePageTab(e) {
  let otherTab = e.currentTarget.parentElement.previousElementSibling
  if (otherTab === null) {
    otherTab = e.currentTarget.parentElement.nextElementSibling
  };
  const otherActiveTab = otherTab.childNodes[1];
  otherActiveTab.classList.remove('active');
  e.currentTarget.classList.add('active');

  const profileSection = document.querySelector('.profile-active');
  const chapterSection = document.querySelector('.chapter-active');

  switch (e.currentTarget.textContent) {
    case "chapter": profileSection.classList.remove('active');
    chapterSection.classList.add('active');
      break;
    case "profile": chapterSection.classList.remove('active');
    profileSection.classList.add('active');
      break;
    default: null;
  }
  // displayProfileOrChapter(e.currentTarget.textContent)
}

export default singlePageTab;
