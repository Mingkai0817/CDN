// 页脚养鱼
fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: -55,
        right: 0,
        left: 0,
        bottom: 0,
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        '<script src="https://fastly.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>'
      ),
      this
    );
  }