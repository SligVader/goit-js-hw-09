!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,t){var n=Math.random()>.3,o={position:e,delay:t};return new Promise((function(e,r){setTimeout((function(){n?e(o):r(o)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var t=Number(e.target.elements.delay.value),n=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);console.dir(e.target.elements.amount.value);for(var a=0;a<o;a+=1)i(a,t).then((function(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))}),t).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}),t),t+=n;e.target.reset()}))}();
//# sourceMappingURL=03-promises.a5513fd2.js.map
