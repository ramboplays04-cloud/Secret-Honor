// AD SETTINGS - paste the ad code from your ad network here (one block per ad place).
// Leave a block empty ("") and nothing shows there. Pages work fine with no ads.
//   home    : on the home page (list of stories)
//   middle1 : inside a story, after the first part (best spot)
//   top     : under the story title
//   middle  : between the other parts of a story (repeats)
//   bottom  : after the story
// Note: one Native Banner code can only be used ONCE per page - for more ad places, create more ad units.
var NATIVE_1 = "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/2759591e1325ae64edcc63732fce63e8\"></script>\n<div id=\"container-2759591e1325ae64edcc63732fce63e8\"></div>";
window.AD_CODE = {
  home: NATIVE_1,
  middle1: NATIVE_1,
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
