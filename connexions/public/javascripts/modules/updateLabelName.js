function renameLabelName(e) {
  const updatedLabelName = e.currentTarget.value
  e.currentTarget.name = updatedLabelName
  const answerInput = e.currentTarget.nextElementSibling;
  answerInput.name = `category[${updatedLabelName}]`;
}

export default renameLabelName;
