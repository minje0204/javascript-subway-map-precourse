const handleUnvalidInput = (inputTag, errMsg) => {
  alert(errMsg);
  inputTag.value = '';
  inputTag.focus();
};

export { handleUnvalidInput };
