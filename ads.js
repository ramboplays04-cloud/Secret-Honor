// AD SETTINGS - paste the ad code from your ad network here (one block per ad place).
// Leave a block empty ("") and nothing shows there. Pages work fine with no ads.
//   top     : under the title
//   middle  : between the parts of a story (repeats)
//   bottom  : after the story
window.AD_CODE = {
  top: "",
  middle: "",
  bottom: ""
};

// Puts the ad code into every <div class="ad" data-slot="..."> on the page (scripts are run too).
window.fillAds = function () {
  document.querySelectorAll(".ad[data-slot]").forEach(function (box) {
    var code = (window.AD_CODE || {})[box.dataset.slot] || "";
    if (!code) return;
    var tmp = document.createElement("div");
    tmp.innerHTML = code;
    Array.from(tmp.childNodes).forEach(function (node) {
      if (node.tagName === "SCRIPT") {
        var s = document.createElement("script");
        Array.from(node.attributes).forEach(function (a) { s.setAttribute(a.name, a.value); });
        s.text = node.text;
        box.appendChild(s);
      } else {
        box.appendChild(node.cloneNode(true));
      }
    });
  });
};
