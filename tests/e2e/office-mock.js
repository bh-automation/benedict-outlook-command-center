/* Office.js-Attrappe NUR für lokale Tests (wird nicht veröffentlicht). Fiktive Beispieldaten. */
(function () {
  var cfg = window.__PW_MOCK__ || {};
  var master = cfg.master || ["ACTION", "WAITING", "PROJECT", "DONE", "REFERENCE", "CAREER", "FINANCE", "PRIVATE"];
  var maxMinor = cfg.maxMinor || 14; /* Mailbox 1.14 */
  window.__calls = [];
  var cats = (cfg.initial || ["CAREER"]).map(function (n) { return { displayName: n, color: "Preset0" }; });
  window.Office = {
    HostType: { Outlook: "Outlook" },
    AsyncResultStatus: { Succeeded: "succeeded", Failed: "failed" },
    EventType: { ItemChanged: "olkItemSelectedChanged" },
    onReady: function (cb) { setTimeout(function () { cb({ host: "Outlook" }); }, 0); },
    context: {
      requirements: { isSetSupported: function (n, v) { return n === "Mailbox" && parseInt(String(v).split(".")[1] || "0", 10) <= maxMinor; } },
      mailbox: {
        addHandlerAsync: function (t, h, cb) { window.__itemChanged = h; cb && cb({ status: "succeeded" }); },
        item: {
          subject: "Angebot Walzenschleifen – Rückmeldung bis Freitag",
          from: { displayName: "Muster, Max", emailAddress: "max.muster@example.invalid" },
          categories: {
            getAsync: function (cb) { window.__calls.push(["get"]); setTimeout(function () { cb({ status: "succeeded", value: cats.slice() }); }, 5); },
            addAsync: function (list, cb) {
              window.__calls.push(["add", list.slice()]);
              if (list.some(function (x) { return master.indexOf(x) === -1; })) {
                setTimeout(function () { cb({ status: "failed", error: { name: "InvalidCategory", message: "Invalid categories were provided." } }); }, 5);
                return;
              }
              list.forEach(function (x) { if (!cats.some(function (c) { return c.displayName === x; })) cats.push({ displayName: x, color: "Preset0" }); });
              setTimeout(function () { cb({ status: "succeeded" }); }, 5);
            },
            removeAsync: function (list, cb) {
              window.__calls.push(["remove", list.slice()]);
              cats = cats.filter(function (c) { return list.indexOf(c.displayName) === -1; });
              setTimeout(function () { cb({ status: "succeeded" }); }, 5);
            }
          }
        }
      }
    }
  };
})();
