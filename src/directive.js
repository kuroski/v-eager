// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event(name) {
  const evt = document.createEvent("Event");
  evt.initEvent(name, true, true);
  return evt;
}

export default function(el) {
  if (el.tagName.toLocaleUpperCase() !== "INPUT") {
    const els = el.getElementsByTagName("input");
    if (els.length !== 1) {
      throw new Error(
        "v-eager directive requires 1 input, found " + els.length
      );
    } else {
      el = els[0];
    }
  }

  el.oninput = function(evt) {
    if (!evt.isTrusted) return; // avoid infinite loop
    el.dispatchEvent(event("input"));
  };
}
