import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

console.log("background loaded");

const domains = ["https://www.aliyundrive.com"];
const headers = ["X-Frame-Options", "Frame-Options"];

const ruleId = 1;

const rules: any = {
  removeRuleIds: [ruleId],
  addRules: [
    {
      id: ruleId,
      priority: 1,
      condition: {
        domains: ["https://www.aliyundrive.com"],
        urlFilter: "https://www.aliyundrive.com",
        resourceTypes: [
          "csp_report",
          "font",
          "image",
          "main_frame",
          "media",
          "object",
          "other",
          "ping",
          "script",
          "stylesheet",
          "sub_frame",
          "webbundle",
          "websocket",
          "webtransport",
          "xmlhttprequest",
        ],
      },
      action: {
        type: "modifyHeaders",
        requestHeaders: [
          {
            header: "X-Frame-Options",
            operation: "remove",
          },
          {
            header: "x-frame-options",
            operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
          },
          {
            header: "user-agent",
            operation: "set",
            value: `Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25`,
          },
        ],
        responseHeaders: [
          {
            header: "X-Frame-Options",
            operation: "remove",
          },
          {
            header: "x-frame-options",
            operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
          },
        ],
      },
    },
  ],
};
console.log(rules);

// chrome.declarativeNetRequest.updateDynamicRules(rules, () => {
//   if (chrome.runtime.lastError) {
//     console.error(chrome.runtime.lastError);
//   } else {
//     chrome.declarativeNetRequest.getDynamicRules((rules) => console.log(rules));
//   }
// });

// chrome.declarativeNetRequest.updateDynamicRules({
//   addRules: [
//     {
//       id: 1001,
//       priority: 1,
//       action: {
//         type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
//         responseHeaders: [
//           {
//             header: "X-Frame-Options",
//             operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
//           },
//           {
//             header: "x-frame-options",
//             operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
//           },
//           {
//             header: "Frame-Options",
//             operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
//           },
//         ],
//         requestHeaders: [
//           {
//             header: "X-Frame-Options",
//             operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
//           },
//           {
//             header: "Frame-Options",
//             operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
//           },
//         ],
//       },
//       condition: {
//         domains: ["https://www.aliyundrive.com"],
//         urlFilter: "*",
//         resourceTypes: [
//           "csp_report",
//           "font",
//           "image",
//           "main_frame",
//           "media",
//           "object",
//           "other",
//           "ping",
//           "script",
//           "stylesheet",
//           "sub_frame",
//           "webbundle",
//           "websocket",
//           "webtransport",
//           "xmlhttprequest",
//         ],
//       },
//     },
//   ],
//   removeRuleIds: [1001],
// });
