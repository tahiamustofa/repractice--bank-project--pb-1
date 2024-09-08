function getFieldName(inputId) {
    const inputFieldValue = document.getElementById(inputId).value;
    const getFieldfinal = parseFloat(inputFieldValue);
    document.getElementById(inputId).value='';
    return getFieldfinal;
 }

 function getElementByText(text) {
    const getText = parseFloat(document.getElementById(text).innerText)
    return getText;
}
function setText(innertextId,totalvalue) {
    const set = document.getElementById(innertextId);
    set.innerText = totalvalue;
}