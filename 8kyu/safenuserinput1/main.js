function htmlspecialchars(formData) {
    var chars = {'<':'&lt;','>':'&gt;','"':'&quot;', '&': '&amp;'};
    return formData.replace(/[<>"&]/g, m => chars[m]);
  }