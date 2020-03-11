function renameLabelName(e) {
  const updatedLabelName = e.currentTarget.value
  // e.currentTarget.name = updatedLabelName;
  e.currentTarget.setAttribute('for', `category[${updatedLabelName}]`);
  const answerInput = e.currentTarget.nextElementSibling;
  answerInput.name = `category[${updatedLabelName}]`;
}

export default renameLabelName;
