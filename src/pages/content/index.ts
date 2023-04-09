/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */

if (
  !window.location.href.startsWith("https://www.aliyundrive.com/") &&
  top == self
) {
  import("./wpane/index");
}

if (
  window.location.href.startsWith("https://www.aliyundrive.com/") &&
  top != self
) {
  import("./contents/aliyunContent");
}
