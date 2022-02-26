function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val("play.verymc.fr").select();
    document.execCommand("copy");
    $temp.remove();
  }
  