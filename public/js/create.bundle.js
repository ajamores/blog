// node_modules/@editorjs/editorjs/dist/editorjs.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(n2) {
  return n2 && n2.__esModule && Object.prototype.hasOwnProperty.call(n2, "default") ? n2.default : n2;
}
function Xn(n2) {
  if (n2.__esModule)
    return n2;
  var e = n2.default;
  if (typeof e == "function") {
    var t = function o4() {
      return this instanceof o4 ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(n2).forEach(function(o4) {
    var i = Object.getOwnPropertyDescriptor(n2, o4);
    Object.defineProperty(t, o4, i.get ? i : {
      enumerable: true,
      get: function() {
        return n2[o4];
      }
    });
  }), t;
}
function ot() {
}
Object.assign(ot, {
  default: ot,
  register: ot,
  revert: function() {
  },
  __esModule: true
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n2) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n2);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(n2) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n2))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o4) => {
    const i = o4 instanceof Node;
    t.appendChild(i ? o4 : document.createTextNode(o4));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n2) {
  n2 = arguments.length === 0 ? true : !!n2;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o4 = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s4 = this.offsetTop - e.offsetTop < e.scrollTop, r2 = this.offsetTop - e.offsetTop + this.clientHeight - o4 > e.scrollTop + e.clientHeight, a4 = this.offsetLeft - e.offsetLeft < e.scrollLeft, l2 = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c4 = s4 && !r2;
  (s4 || r2) && n2 && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o4 + this.clientHeight / 2), (a4 || l2) && n2 && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s4 || r2 || a4 || l2) && !n2 && this.scrollIntoView(c4);
});
window.requestIdleCallback = window.requestIdleCallback || function(n2) {
  const e = Date.now();
  return setTimeout(function() {
    n2({
      didTimeout: false,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(n2) {
  clearTimeout(n2);
};
var Vn = (n2 = 21) => crypto.getRandomValues(new Uint8Array(n2)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Lo = /* @__PURE__ */ ((n2) => (n2.VERBOSE = "VERBOSE", n2.INFO = "INFO", n2.WARN = "WARN", n2.ERROR = "ERROR", n2))(Lo || {});
var y = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
};
var qn = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function Ie(n2, e, t = "log", o4, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const s4 = ["info", "log", "warn", "error"].includes(t), r2 = [];
  switch (Ie.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!s4 || n2)
        return;
      break;
  }
  o4 && r2.push(o4);
  const a4 = "Editor.js 2.31.5", l2 = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  n2 && (s4 ? (r2.unshift(l2, i), e = `%c${a4}%c ${e}`) : e = `( ${a4} )${e}`);
  try {
    s4 ? o4 ? console[t](`${e} %o`, ...r2) : console[t](e, ...r2) : console[t](e);
  } catch {
  }
}
Ie.logLevel = "VERBOSE";
function Zn(n2) {
  Ie.logLevel = n2;
}
var S = Ie.bind(window, false);
var X = Ie.bind(window, true);
function le(n2) {
  return Object.prototype.toString.call(n2).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function A(n2) {
  return le(n2) === "function" || le(n2) === "asyncfunction";
}
function D(n2) {
  return le(n2) === "object";
}
function te(n2) {
  return le(n2) === "string";
}
function Gn(n2) {
  return le(n2) === "boolean";
}
function yo(n2) {
  return le(n2) === "number";
}
function wo(n2) {
  return le(n2) === "undefined";
}
function V(n2) {
  return n2 ? Object.keys(n2).length === 0 && n2.constructor === Object : true;
}
function Po(n2) {
  return n2 > 47 && n2 < 58 || // number keys
  n2 === 32 || n2 === 13 || // Space bar & return key(s)
  n2 === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  n2 > 64 && n2 < 91 || // letter keys
  n2 > 95 && n2 < 112 || // Numpad keys
  n2 > 185 && n2 < 193 || // ;=,-./` (in order)
  n2 > 218 && n2 < 223;
}
async function Qn(n2, e = () => {
}, t = () => {
}) {
  async function o4(i, s4, r2) {
    try {
      await i.function(i.data), await s4(wo(i.data) ? {} : i.data);
    } catch {
      r2(wo(i.data) ? {} : i.data);
    }
  }
  return n2.reduce(async (i, s4) => (await i, o4(s4, e, t)), Promise.resolve());
}
function No(n2) {
  return Array.prototype.slice.call(n2);
}
function Fe(n2, e) {
  return function() {
    const t = this, o4 = arguments;
    window.setTimeout(() => n2.apply(t, o4), e);
  };
}
function Jn(n2) {
  return n2.name.split(".").pop();
}
function ei(n2) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n2);
}
function Eo(n2, e, t) {
  let o4;
  return (...i) => {
    const s4 = this, r2 = () => {
      o4 = null, t || n2.apply(s4, i);
    }, a4 = t && !o4;
    window.clearTimeout(o4), o4 = window.setTimeout(r2, e), a4 && n2.apply(s4, i);
  };
}
function dt(n2, e, t = void 0) {
  let o4, i, s4, r2 = null, a4 = 0;
  t || (t = {});
  const l2 = function() {
    a4 = t.leading === false ? 0 : Date.now(), r2 = null, s4 = n2.apply(o4, i), r2 || (o4 = i = null);
  };
  return function() {
    const c4 = Date.now();
    !a4 && t.leading === false && (a4 = c4);
    const d4 = e - (c4 - a4);
    return o4 = this, i = arguments, d4 <= 0 || d4 > e ? (r2 && (clearTimeout(r2), r2 = null), a4 = c4, s4 = n2.apply(o4, i), r2 || (o4 = i = null)) : !r2 && t.trailing !== false && (r2 = setTimeout(l2, d4)), s4;
  };
}
function ti() {
  const n2 = {
    win: false,
    mac: false,
    x11: false,
    linux: false
  }, e = Object.keys(n2).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n2[e] = true), n2;
}
function je(n2) {
  return n2[0].toUpperCase() + n2.slice(1);
}
function ut(n2, ...e) {
  if (!e.length)
    return n2;
  const t = e.shift();
  if (D(n2) && D(t))
    for (const o4 in t)
      D(t[o4]) ? (n2[o4] || Object.assign(n2, { [o4]: {} }), ut(n2[o4], t[o4])) : Object.assign(n2, { [o4]: t[o4] });
  return ut(n2, ...e);
}
function vt(n2) {
  const e = ti();
  return n2 = n2.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? n2 = n2.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n2 = n2.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n2;
}
function oi(n2) {
  try {
    return new URL(n2).href;
  } catch {
  }
  return n2.substring(0, 2) === "//" ? window.location.protocol + n2 : window.location.origin + n2;
}
function ni() {
  return Vn(10);
}
function ii(n2) {
  window.open(n2, "_blank");
}
function si(n2 = "") {
  return `${n2}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function ht(n2, e, t) {
  const o4 = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
  n2 && X(o4, "warn");
}
function me(n2, e, t) {
  const o4 = t.value ? "value" : "get", i = t[o4], s4 = `#${e}Cache`;
  if (t[o4] = function(...r2) {
    return this[s4] === void 0 && (this[s4] = i.apply(this, ...r2)), this[s4];
  }, o4 === "get" && t.set) {
    const r2 = t.set;
    t.set = function(a4) {
      delete n2[s4], r2.apply(this, a4);
    };
  }
  return t;
}
var Ro = 650;
function be() {
  return window.matchMedia(`(max-width: ${Ro}px)`).matches;
}
var pt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function ri(n2, e) {
  const t = Array.isArray(n2) || D(n2), o4 = Array.isArray(e) || D(e);
  return t || o4 ? JSON.stringify(n2) === JSON.stringify(e) : n2 === e;
}
var u = class _u {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o4 = {}) {
    const i = document.createElement(e);
    if (Array.isArray(t)) {
      const s4 = t.filter((r2) => r2 !== void 0);
      i.classList.add(...s4);
    } else
      t && i.classList.add(t);
    for (const s4 in o4)
      Object.prototype.hasOwnProperty.call(o4, s4) && (i[s4] = o4[s4]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o4) => e.appendChild(o4)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o4) => e.prepend(o4))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o4 = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o4, e), i.insertBefore(e, t), i.insertBefore(t, o4), i.removeChild(o4);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return No(e.querySelectorAll(_u.allInputsSelector)).reduce((t, o4) => _u.isNativeInput(o4) || _u.containsOnlyInlineElements(o4) ? [...t, o4] : [...t, ..._u.getDeepestBlockElements(o4)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */
  static getDeepestNode(e, t = false) {
    const o4 = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o4]) {
      let s4 = e[o4];
      if (_u.isSingleTag(s4) && !_u.isNativeInput(s4) && !_u.isLineBreakTag(s4))
        if (s4[i])
          s4 = s4[i];
        else if (s4.parentNode[i])
          s4 = s4.parentNode[i];
        else
          return s4.parentNode;
      return this.getDeepestNode(s4, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return yo(e) ? false : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return yo(e) ? false : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = true;
    if (_u.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = false;
          break;
      }
    else
      t = _u.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o4;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? false : (this.isElement(e) && this.isNativeInput(e) ? o4 = e.value : o4 = e.textContent.replace("\u200B", ""), t && (o4 = o4.replace(new RegExp(t, "g"), "")), o4.length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : false;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    const o4 = [e];
    for (; o4.length > 0; )
      if (e = o4.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return false;
        e.childNodes && o4.push(...Array.from(e.childNodes));
      }
    return true;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = _u.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return _u.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    te(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o4 = (i) => !_u.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o4);
    return Array.from(t.children).every(o4);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return _u.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o4) => [...t, ..._u.getDeepestBlockElements(o4)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return te(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Returns the closest ancestor anchor (A tag) of the given element (including itself)
   * 
   * @param element - element to check
   * @returns {HTMLAnchorElement | null}
   */
  static getClosestAnchor(e) {
    return e.closest("a");
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o4 = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s4 = t.top + i, r2 = t.left + o4;
    return {
      top: s4,
      left: r2,
      bottom: s4 + t.height,
      right: r2 + t.width
    };
  }
  /**
   * Find text node and offset by total content offset
   *
   * @param {Node} root - root node to start search from
   * @param {number} totalOffset - offset relative to the root node content
   * @returns {{node: Node | null, offset: number}} - node and offset inside node
   */
  static getNodeByOffset(e, t) {
    let o4 = 0, i = null;
    const s4 = document.createTreeWalker(
      e,
      NodeFilter.SHOW_TEXT,
      null
    );
    let r2 = s4.nextNode();
    for (; r2; ) {
      const c4 = r2.textContent, d4 = c4 === null ? 0 : c4.length;
      if (i = r2, o4 + d4 >= t)
        break;
      o4 += d4, r2 = s4.nextNode();
    }
    if (!i)
      return {
        node: null,
        offset: 0
      };
    const a4 = i.textContent;
    if (a4 === null || a4.length === 0)
      return {
        node: null,
        offset: 0
      };
    const l2 = Math.min(t - o4, a4.length);
    return {
      node: i,
      offset: l2
    };
  }
};
function ai(n2) {
  return !/[^\t\n\r ]/.test(n2);
}
function li(n2) {
  const e = window.getComputedStyle(n2), t = parseFloat(e.fontSize), o4 = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s4 = parseFloat(e.borderTopWidth), r2 = parseFloat(e.marginTop), a4 = t * 0.8, l2 = (o4 - t) / 2;
  return r2 + s4 + i + l2 + a4;
}
function Do(n2) {
  n2.dataset.empty = u.isEmpty(n2) ? "true" : "false";
}
var ci = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": "",
    "Convert to": ""
  }
};
var di = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
};
var ui = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
};
var hi = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
};
var Fo = {
  ui: ci,
  toolNames: di,
  tools: ui,
  blockTunes: hi
};
var jo = class he {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, t) {
    return he._t(e, t);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, t) {
    return he._t(e, t);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    he.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, t) {
    const o4 = he.getNamespace(e);
    return !o4 || !o4[t] ? t : o4[t];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((o4, i) => !o4 || !Object.keys(o4).length ? {} : o4[i], he.currentDictionary);
  }
};
jo.currentDictionary = Fo;
var z = jo;
var Ho = class extends Error {
};
var Oe = class {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o4 = (i) => {
      const s4 = t(i), r2 = this.subscribers[e].indexOf(o4);
      return r2 !== -1 && this.subscribers[e].splice(r2, 1), s4;
    };
    this.subscribers[e].push(o4);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o4, i) => {
      const s4 = i(o4);
      return s4 !== void 0 ? s4 : o4;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o4 = 0; o4 < this.subscribers[e].length; o4++)
      if (this.subscribers[e][o4] === t) {
        delete this.subscribers[e][o4];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
};
function J(n2) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return n2.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return n2.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return n2.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return n2.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return n2.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return n2.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      n2.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return n2.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return n2.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o4) {
      return n2.call(t, o4);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return n2.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return n2.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      n2.dispatchChange();
    },
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    getActiveToolboxEntry() {
      return n2.getActiveToolboxEntry();
    }
  });
}
var _e = class {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o4, i = false) {
    const s4 = si("l"), r2 = {
      id: s4,
      element: e,
      eventType: t,
      handler: o4,
      options: i
    };
    if (!this.findOne(e, t, o4))
      return this.allListeners.push(r2), e.addEventListener(t, o4, i), s4;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o4, i) {
    const s4 = this.findAll(e, t, o4);
    s4.forEach((r2, a4) => {
      const l2 = this.allListeners.indexOf(s4[a4]);
      l2 > -1 && (this.allListeners.splice(l2, 1), r2.element.removeEventListener(r2.eventType, r2.handler, r2.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o4) {
    const i = this.findAll(e, t, o4);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o4) {
    let i;
    const s4 = e ? this.findByEventTarget(e) : [];
    return e && t && o4 ? i = s4.filter((r2) => r2.eventType === t && r2.handler === o4) : e && t ? i = s4.filter((r2) => r2.eventType === t) : i = s4, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
};
var E = class _E {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new _e(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o4, i, s4, r2 = false) => {
        this.mutableListenerIds.push(
          this.listeners.on(o4, i, s4, r2)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o4 of this.mutableListenerIds)
          this.listeners.offById(o4);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === _E)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
};
var b = class _b {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? u.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(_b.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return false;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o4 = null;
    return t && t instanceof Element && (o4 = t.closest(`.${_b.CSS.editorZone}`)), o4 ? o4.nodeType === Node.ELEMENT_NODE : false;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o4 = null;
    return t && t instanceof Element && (o4 = t.closest(`.${_b.CSS.editorZone}`)), o4 ? o4.nodeType === Node.ELEMENT_NODE : false;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!_b.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o4 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o4.x = t.boundingLeft, o4.y = t.boundingTop, o4.width = t.boundingWidth, o4.height = t.boundingHeight, o4;
    if (!window.getSelection)
      return S("Method window.getSelection is not supported", "warn"), o4;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return S("Method SelectionUtils.rangeCount is not supported", "warn"), o4;
    if (e.rangeCount === 0)
      return o4;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o4 = t.getBoundingClientRect()), o4.x === 0 && o4.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("\u200B")), t.insertNode(i), o4 = i.getBoundingClientRect();
        const s4 = i.parentNode;
        s4.removeChild(i), s4.normalize();
      }
    }
    return o4;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o4 = document.createRange(), i = window.getSelection();
    return u.isNativeInput(e) ? u.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o4.setStart(e, t), o4.setEnd(e, t), i.removeAllRanges(), i.addRange(o4), o4.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = _b.range;
    return t === null ? false : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = _b.range;
    if (e === null)
      return;
    const t = u.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return u.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = u.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (document.execCommand(this.commandBackground, false, "transparent"), this.isFakeBackgroundEnabled = false);
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = _b.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(false), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o4 = 10) {
    const i = window.getSelection();
    let s4 = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((a4) => {
      let l2 = o4;
      for (; l2 > 0 && a4.parentNode && !(a4.tagName === e && (s4 = a4, t && a4.classList && !a4.classList.contains(t) && (s4 = null), s4)); )
        a4 = a4.parentNode, l2--;
    }), s4);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o4 = document.createRange();
    o4.selectNodeContents(e), t.addRange(o4);
  }
};
function pi(n2, e) {
  const { type: t, target: o4, addedNodes: i, removedNodes: s4 } = n2;
  return n2.type === "attributes" && n2.attributeName === "data-empty" ? false : !!(e.contains(o4) || t === "childList" && (Array.from(i).some((l2) => l2 === e) || Array.from(s4).some((l2) => l2 === e)));
}
var ft = "redactor dom changed";
var $o = "block changed";
var zo = "fake cursor is about to be toggled";
var Uo = "fake cursor have been set";
var Te = "editor mobile layout toggled";
function gt(n2, e) {
  if (!n2.conversionConfig)
    return false;
  const t = n2.conversionConfig[e];
  return A(t) || te(t);
}
function He(n2, e) {
  return gt(n2.tool, e);
}
function Wo(n2, e) {
  return Object.entries(n2).some(([t, o4]) => e[t] && ri(e[t], o4));
}
async function Yo(n2, e) {
  const o4 = (await n2.save()).data, i = e.find((s4) => s4.name === n2.name);
  return i !== void 0 && !gt(i, "export") ? [] : e.reduce((s4, r2) => {
    if (!gt(r2, "import") || r2.toolbox === void 0)
      return s4;
    const a4 = r2.toolbox.filter((l2) => {
      if (V(l2) || l2.icon === void 0)
        return false;
      if (l2.data !== void 0) {
        if (Wo(l2.data, o4))
          return false;
      } else if (r2.name === n2.name)
        return false;
      return true;
    });
    return s4.push({
      ...r2,
      toolbox: a4
    }), s4;
  }, []);
}
function xo(n2, e) {
  return n2.mergeable ? n2.name === e.name ? true : He(e, "export") && He(n2, "import") : false;
}
function fi(n2, e) {
  const t = e == null ? void 0 : e.export;
  return A(t) ? t(n2) : te(t) ? n2[t] : (t !== void 0 && S("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Bo(n2, e, t) {
  const o4 = e == null ? void 0 : e.import;
  return A(o4) ? o4(n2, t) : te(o4) ? {
    [o4]: n2
  } : (o4 !== void 0 && S("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var _ = /* @__PURE__ */ ((n2) => (n2.Default = "default", n2.Separator = "separator", n2.Html = "html", n2))(_ || {});
var ee = /* @__PURE__ */ ((n2) => (n2.APPEND_CALLBACK = "appendCallback", n2.RENDERED = "rendered", n2.MOVED = "moved", n2.UPDATED = "updated", n2.REMOVED = "removed", n2.ON_PASTE = "onPaste", n2))(ee || {});
var R = class _R extends Oe {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = ni(),
    data: t,
    tool: o4,
    readOnly: i,
    tunesData: s4
  }, r2) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (a4 = void 0) => {
      const l2 = a4 === void 0, c4 = a4 instanceof InputEvent;
      !l2 && !c4 && this.detectToolRootChange(a4);
      let d4;
      l2 || c4 ? d4 = true : d4 = !(a4.length > 0 && a4.every((p3) => {
        const { addedNodes: g4, removedNodes: f2, target: v4 } = p3;
        return [
          ...Array.from(g4),
          ...Array.from(f2),
          v4
        ].some((T3) => (u.isElement(T3) || (T3 = T3.parentElement), T3 && T3.closest('[data-mutation-free="true"]') !== null));
      })), d4 && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o4.name, this.id = e, this.settings = o4.settings, this.config = o4.settings.config || {}, this.editorEventBus = r2 || null, this.blockAPI = new J(this), this.tool = o4, this.toolInstance = o4.create(t, this.blockAPI, i), this.tunes = o4.tunes, this.composeTunes(s4), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = u.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o4) => o4 === e || o4.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !V(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return A(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = u.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var i, s4;
    this.holder.classList.toggle(_R.CSS.selected, e);
    const t = e === true && b.isRangeInsideContainer(this.holder), o4 = e === false && b.isFakeCursorInsideContainer(this.holder);
    (t || o4) && ((i = this.editorEventBus) == null || i.emit(zo, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s4 = this.editorEventBus) == null || s4.emit(Uo, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(_R.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(_R.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(_R.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(_R.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (A(this.toolInstance[e])) {
      e === "appendCallback" && S(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o4) {
        S(`Error during '${e}' call: ${o4.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([s4, r2]) => {
      if (A(r2.save))
        try {
          t[s4] = r2.save();
        } catch (a4) {
          S(`Tune ${r2.constructor.name} save method throws an Error %o`, "warn", a4);
        }
    });
    const o4 = window.performance.now();
    let i;
    return Promise.resolve(e).then((s4) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: s4,
      tunes: t,
      time: i - o4
    })).catch((s4) => {
      S(`Saving process for ${this.name} tool failed due to the ${s4}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = true;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes() {
    const e = [], t = [], o4 = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return u.isElement(o4) ? e.push({
      type: _.Html,
      element: o4
    }) : Array.isArray(o4) ? e.push(...o4) : e.push(o4), [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((s4) => s4.render()).forEach((s4) => {
      u.isElement(s4) ? t.push({
        type: _.Html,
        element: s4
      }) : Array.isArray(s4) ? t.push(...s4) : t.push(s4);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = u.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), A(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data, o4 = e;
    return o4 == null ? void 0 : o4.find((i) => Wo(i.data, t));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return fi(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = u.make("div", _R.CSS.wrapper), t = u.make("div", _R.CSS.content), o4 = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o4, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s4) => {
      if (A(s4.wrap))
        try {
          i = s4.wrap(i);
        } catch (r2) {
          S(`Tune ${s4.constructor.name} wrap method throws an Error %o`, "warn", r2);
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o4]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o4);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), u.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), u.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o4 } = t;
      o4.some((s4) => pi(s4, this.toolRenderedElement)) && this.didMutated(o4);
    }, (e = this.editorEventBus) == null || e.on(ft, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(ft, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  toggleInputsEmptyMark() {
    this.inputs.forEach(Do);
  }
};
var gi = class extends E {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o4 = {}, i, s4, r2, a4) => {
      const l2 = this.Editor.BlockManager.insert({
        id: a4,
        tool: e,
        data: t,
        index: i,
        needToFocus: s4,
        replace: r2
      });
      return new J(l2);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new R({
        tool: t,
        api: this.Editor.API,
        readOnly: true,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t, o4) => {
      const { BlockManager: i } = this.Editor, s4 = i.getBlockById(e);
      if (s4 === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const r2 = await i.update(s4, t, o4);
      return new J(r2);
    }, this.convert = async (e, t, o4) => {
      var h6, p3;
      const { BlockManager: i, Tools: s4 } = this.Editor, r2 = i.getBlockById(e);
      if (!r2)
        throw new Error(`Block with id "${e}" not found`);
      const a4 = s4.blockTools.get(r2.name), l2 = s4.blockTools.get(t);
      if (!l2)
        throw new Error(`Block Tool with type "${t}" not found`);
      const c4 = ((h6 = a4 == null ? void 0 : a4.conversionConfig) == null ? void 0 : h6.export) !== void 0, d4 = ((p3 = l2.conversionConfig) == null ? void 0 : p3.import) !== void 0;
      if (c4 && d4) {
        const g4 = await i.convert(r2, t, o4);
        return new J(g4);
      } else {
        const g4 = [
          c4 ? false : je(r2.name),
          d4 ? false : je(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${r2.name}" to "${t}" is not possible. ${g4} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o4 = e.map(({ id: i, type: s4, data: r2 }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: s4 || this.config.defaultBlock,
        data: r2
      }));
      return this.Editor.BlockManager.insertMany(o4, t), o4.map((i) => new J(i));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, t = true) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      X("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      X("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new J(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new J(t);
  }
  /**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      X("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new J(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    S(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      X(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  async renderFromHTML(e) {
    return await this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, true);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = true) {
    ht(
      true,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o4 = this.Editor.BlockManager.getBlockByIndex(e);
    o4 && (o4.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    S("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
};
function mi(n2, e) {
  return typeof n2 == "number" ? e.BlockManager.getBlockByIndex(n2) : typeof n2 == "string" ? e.BlockManager.getBlockById(n2) : e.BlockManager.getBlockById(n2.id);
}
var bi = class extends E {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), true) : false, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), true) : false, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), true) : false, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), true) : false, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o4 = 0) => {
      const i = mi(e, this.Editor);
      return i === void 0 ? false : (this.Editor.Caret.setToBlock(i, t, o4), true);
    }, this.focus = (e = false) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
};
var vi = class extends E {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
};
var kt = class _kt extends E {
  /**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        X("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        t: (o4) => z.t(_kt.getNamespace(e, t), o4)
      }
    );
  }
};
var ki = class extends E {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
      }
    );
  }
};
var yi = class extends E {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
};
var wi = class extends E {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o4, i) => this.on(e, t, o4, i),
      off: (e, t, o4, i) => this.off(e, t, o4, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o4, i) {
    return this.listeners.on(e, t, o4, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o4, i) {
    this.listeners.off(e, t, o4, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
};
var Ko = { exports: {} };
(function(n2, e) {
  (function(t, o4) {
    n2.exports = o4();
  })(window, function() {
    return (function(t) {
      var o4 = {};
      function i(s4) {
        if (o4[s4])
          return o4[s4].exports;
        var r2 = o4[s4] = { i: s4, l: false, exports: {} };
        return t[s4].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
      }
      return i.m = t, i.c = o4, i.d = function(s4, r2, a4) {
        i.o(s4, r2) || Object.defineProperty(s4, r2, { enumerable: true, get: a4 });
      }, i.r = function(s4) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s4, "__esModule", { value: true });
      }, i.t = function(s4, r2) {
        if (1 & r2 && (s4 = i(s4)), 8 & r2 || 4 & r2 && typeof s4 == "object" && s4 && s4.__esModule)
          return s4;
        var a4 = /* @__PURE__ */ Object.create(null);
        if (i.r(a4), Object.defineProperty(a4, "default", { enumerable: true, value: s4 }), 2 & r2 && typeof s4 != "string")
          for (var l2 in s4)
            i.d(a4, l2, (function(c4) {
              return s4[c4];
            }).bind(null, l2));
        return a4;
      }, i.n = function(s4) {
        var r2 = s4 && s4.__esModule ? function() {
          return s4.default;
        } : function() {
          return s4;
        };
        return i.d(r2, "a", r2), r2;
      }, i.o = function(s4, r2) {
        return Object.prototype.hasOwnProperty.call(s4, r2);
      }, i.p = "/", i(i.s = 0);
    })([function(t, o4, i) {
      i(1), /*!
      * Codex JavaScript Notification module
      * https://github.com/codex-team/js-notifier
      */
      t.exports = (function() {
        var s4 = i(6), r2 = "cdx-notify--bounce-in", a4 = null;
        return { show: function(l2) {
          if (l2.message) {
            (function() {
              if (a4)
                return true;
              a4 = s4.getWrapper(), document.body.appendChild(a4);
            })();
            var c4 = null, d4 = l2.time || 8e3;
            switch (l2.type) {
              case "confirm":
                c4 = s4.confirm(l2);
                break;
              case "prompt":
                c4 = s4.prompt(l2);
                break;
              default:
                c4 = s4.alert(l2), window.setTimeout(function() {
                  c4.remove();
                }, d4);
            }
            a4.appendChild(c4), c4.classList.add(r2);
          }
        } };
      })();
    }, function(t, o4, i) {
      var s4 = i(2);
      typeof s4 == "string" && (s4 = [[t.i, s4, ""]]);
      var r2 = { hmr: true, transform: void 0, insertInto: void 0 };
      i(4)(s4, r2), s4.locals && (t.exports = s4.locals);
    }, function(t, o4, i) {
      (t.exports = i(3)(false)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o4) {
      t.exports = function(i) {
        var s4 = [];
        return s4.toString = function() {
          return this.map(function(r2) {
            var a4 = (function(l2, c4) {
              var d4 = l2[1] || "", h6 = l2[3];
              if (!h6)
                return d4;
              if (c4 && typeof btoa == "function") {
                var p3 = (f2 = h6, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f2)))) + " */"), g4 = h6.sources.map(function(v4) {
                  return "/*# sourceURL=" + h6.sourceRoot + v4 + " */";
                });
                return [d4].concat(g4).concat([p3]).join(`
`);
              }
              var f2;
              return [d4].join(`
`);
            })(r2, i);
            return r2[2] ? "@media " + r2[2] + "{" + a4 + "}" : a4;
          }).join("");
        }, s4.i = function(r2, a4) {
          typeof r2 == "string" && (r2 = [[null, r2, ""]]);
          for (var l2 = {}, c4 = 0; c4 < this.length; c4++) {
            var d4 = this[c4][0];
            typeof d4 == "number" && (l2[d4] = true);
          }
          for (c4 = 0; c4 < r2.length; c4++) {
            var h6 = r2[c4];
            typeof h6[0] == "number" && l2[h6[0]] || (a4 && !h6[2] ? h6[2] = a4 : a4 && (h6[2] = "(" + h6[2] + ") and (" + a4 + ")"), s4.push(h6));
          }
        }, s4;
      };
    }, function(t, o4, i) {
      var s4, r2, a4 = {}, l2 = (s4 = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r2 === void 0 && (r2 = s4.apply(this, arguments)), r2;
      }), c4 = /* @__PURE__ */ (function(k3) {
        var m4 = {};
        return function(w3) {
          if (typeof w3 == "function")
            return w3();
          if (m4[w3] === void 0) {
            var x3 = (function(I3) {
              return document.querySelector(I3);
            }).call(this, w3);
            if (window.HTMLIFrameElement && x3 instanceof window.HTMLIFrameElement)
              try {
                x3 = x3.contentDocument.head;
              } catch {
                x3 = null;
              }
            m4[w3] = x3;
          }
          return m4[w3];
        };
      })(), d4 = null, h6 = 0, p3 = [], g4 = i(5);
      function f2(k3, m4) {
        for (var w3 = 0; w3 < k3.length; w3++) {
          var x3 = k3[w3], I3 = a4[x3.id];
          if (I3) {
            I3.refs++;
            for (var C3 = 0; C3 < I3.parts.length; C3++)
              I3.parts[C3](x3.parts[C3]);
            for (; C3 < x3.parts.length; C3++)
              I3.parts.push(F3(x3.parts[C3], m4));
          } else {
            var N3 = [];
            for (C3 = 0; C3 < x3.parts.length; C3++)
              N3.push(F3(x3.parts[C3], m4));
            a4[x3.id] = { id: x3.id, refs: 1, parts: N3 };
          }
        }
      }
      function v4(k3, m4) {
        for (var w3 = [], x3 = {}, I3 = 0; I3 < k3.length; I3++) {
          var C3 = k3[I3], N3 = m4.base ? C3[0] + m4.base : C3[0], B3 = { css: C3[1], media: C3[2], sourceMap: C3[3] };
          x3[N3] ? x3[N3].parts.push(B3) : w3.push(x3[N3] = { id: N3, parts: [B3] });
        }
        return w3;
      }
      function O3(k3, m4) {
        var w3 = c4(k3.insertInto);
        if (!w3)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var x3 = p3[p3.length - 1];
        if (k3.insertAt === "top")
          x3 ? x3.nextSibling ? w3.insertBefore(m4, x3.nextSibling) : w3.appendChild(m4) : w3.insertBefore(m4, w3.firstChild), p3.push(m4);
        else if (k3.insertAt === "bottom")
          w3.appendChild(m4);
        else {
          if (typeof k3.insertAt != "object" || !k3.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var I3 = c4(k3.insertInto + " " + k3.insertAt.before);
          w3.insertBefore(m4, I3);
        }
      }
      function T3(k3) {
        if (k3.parentNode === null)
          return false;
        k3.parentNode.removeChild(k3);
        var m4 = p3.indexOf(k3);
        m4 >= 0 && p3.splice(m4, 1);
      }
      function M3(k3) {
        var m4 = document.createElement("style");
        return k3.attrs.type === void 0 && (k3.attrs.type = "text/css"), q3(m4, k3.attrs), O3(k3, m4), m4;
      }
      function q3(k3, m4) {
        Object.keys(m4).forEach(function(w3) {
          k3.setAttribute(w3, m4[w3]);
        });
      }
      function F3(k3, m4) {
        var w3, x3, I3, C3;
        if (m4.transform && k3.css) {
          if (!(C3 = m4.transform(k3.css)))
            return function() {
            };
          k3.css = C3;
        }
        if (m4.singleton) {
          var N3 = h6++;
          w3 = d4 || (d4 = M3(m4)), x3 = ie3.bind(null, w3, N3, false), I3 = ie3.bind(null, w3, N3, true);
        } else
          k3.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (w3 = (function(B3) {
            var W3 = document.createElement("link");
            return B3.attrs.type === void 0 && (B3.attrs.type = "text/css"), B3.attrs.rel = "stylesheet", q3(W3, B3.attrs), O3(B3, W3), W3;
          })(m4), x3 = (function(B3, W3, ve3) {
            var se3 = ve3.css, tt3 = ve3.sourceMap, Yn2 = W3.convertToAbsoluteUrls === void 0 && tt3;
            (W3.convertToAbsoluteUrls || Yn2) && (se3 = g4(se3)), tt3 && (se3 += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(tt3)))) + " */");
            var Kn2 = new Blob([se3], { type: "text/css" }), ko = B3.href;
            B3.href = URL.createObjectURL(Kn2), ko && URL.revokeObjectURL(ko);
          }).bind(null, w3, m4), I3 = function() {
            T3(w3), w3.href && URL.revokeObjectURL(w3.href);
          }) : (w3 = M3(m4), x3 = (function(B3, W3) {
            var ve3 = W3.css, se3 = W3.media;
            if (se3 && B3.setAttribute("media", se3), B3.styleSheet)
              B3.styleSheet.cssText = ve3;
            else {
              for (; B3.firstChild; )
                B3.removeChild(B3.firstChild);
              B3.appendChild(document.createTextNode(ve3));
            }
          }).bind(null, w3), I3 = function() {
            T3(w3);
          });
        return x3(k3), function(B3) {
          if (B3) {
            if (B3.css === k3.css && B3.media === k3.media && B3.sourceMap === k3.sourceMap)
              return;
            x3(k3 = B3);
          } else
            I3();
        };
      }
      t.exports = function(k3, m4) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (m4 = m4 || {}).attrs = typeof m4.attrs == "object" ? m4.attrs : {}, m4.singleton || typeof m4.singleton == "boolean" || (m4.singleton = l2()), m4.insertInto || (m4.insertInto = "head"), m4.insertAt || (m4.insertAt = "bottom");
        var w3 = v4(k3, m4);
        return f2(w3, m4), function(x3) {
          for (var I3 = [], C3 = 0; C3 < w3.length; C3++) {
            var N3 = w3[C3];
            (B3 = a4[N3.id]).refs--, I3.push(B3);
          }
          for (x3 && f2(v4(x3, m4), m4), C3 = 0; C3 < I3.length; C3++) {
            var B3;
            if ((B3 = I3[C3]).refs === 0) {
              for (var W3 = 0; W3 < B3.parts.length; W3++)
                B3.parts[W3]();
              delete a4[B3.id];
            }
          }
        };
      };
      var H3, Q3 = (H3 = [], function(k3, m4) {
        return H3[k3] = m4, H3.filter(Boolean).join(`
`);
      });
      function ie3(k3, m4, w3, x3) {
        var I3 = w3 ? "" : x3.css;
        if (k3.styleSheet)
          k3.styleSheet.cssText = Q3(m4, I3);
        else {
          var C3 = document.createTextNode(I3), N3 = k3.childNodes;
          N3[m4] && k3.removeChild(N3[m4]), N3.length ? k3.insertBefore(C3, N3[m4]) : k3.appendChild(C3);
        }
      }
    }, function(t, o4) {
      t.exports = function(i) {
        var s4 = typeof window < "u" && window.location;
        if (!s4)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var r2 = s4.protocol + "//" + s4.host, a4 = r2 + s4.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l2, c4) {
          var d4, h6 = c4.trim().replace(/^"(.*)"$/, function(p3, g4) {
            return g4;
          }).replace(/^'(.*)'$/, function(p3, g4) {
            return g4;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h6) ? l2 : (d4 = h6.indexOf("//") === 0 ? h6 : h6.indexOf("/") === 0 ? r2 + h6 : a4 + h6.replace(/^\.\//, ""), "url(" + JSON.stringify(d4) + ")");
        });
      };
    }, function(t, o4, i) {
      var s4, r2, a4, l2, c4, d4, h6, p3, g4;
      t.exports = (s4 = "cdx-notifies", r2 = "cdx-notify", a4 = "cdx-notify__cross", l2 = "cdx-notify__button--confirm", c4 = "cdx-notify__button--cancel", d4 = "cdx-notify__input", h6 = "cdx-notify__button", p3 = "cdx-notify__btns-wrapper", { alert: g4 = function(f2) {
        var v4 = document.createElement("DIV"), O3 = document.createElement("DIV"), T3 = f2.message, M3 = f2.style;
        return v4.classList.add(r2), M3 && v4.classList.add(r2 + "--" + M3), v4.innerHTML = T3, O3.classList.add(a4), O3.addEventListener("click", v4.remove.bind(v4)), v4.appendChild(O3), v4;
      }, confirm: function(f2) {
        var v4 = g4(f2), O3 = document.createElement("div"), T3 = document.createElement("button"), M3 = document.createElement("button"), q3 = v4.querySelector("." + a4), F3 = f2.cancelHandler, H3 = f2.okHandler;
        return O3.classList.add(p3), T3.innerHTML = f2.okText || "Confirm", M3.innerHTML = f2.cancelText || "Cancel", T3.classList.add(h6), M3.classList.add(h6), T3.classList.add(l2), M3.classList.add(c4), F3 && typeof F3 == "function" && (M3.addEventListener("click", F3), q3.addEventListener("click", F3)), H3 && typeof H3 == "function" && T3.addEventListener("click", H3), T3.addEventListener("click", v4.remove.bind(v4)), M3.addEventListener("click", v4.remove.bind(v4)), O3.appendChild(T3), O3.appendChild(M3), v4.appendChild(O3), v4;
      }, prompt: function(f2) {
        var v4 = g4(f2), O3 = document.createElement("div"), T3 = document.createElement("button"), M3 = document.createElement("input"), q3 = v4.querySelector("." + a4), F3 = f2.cancelHandler, H3 = f2.okHandler;
        return O3.classList.add(p3), T3.innerHTML = f2.okText || "Ok", T3.classList.add(h6), T3.classList.add(l2), M3.classList.add(d4), f2.placeholder && M3.setAttribute("placeholder", f2.placeholder), f2.default && (M3.value = f2.default), f2.inputType && (M3.type = f2.inputType), F3 && typeof F3 == "function" && q3.addEventListener("click", F3), H3 && typeof H3 == "function" && T3.addEventListener("click", function() {
          H3(M3.value);
        }), T3.addEventListener("click", v4.remove.bind(v4)), O3.appendChild(M3), O3.appendChild(T3), v4.appendChild(O3), v4;
      }, getWrapper: function() {
        var f2 = document.createElement("DIV");
        return f2.classList.add(s4), f2;
      } });
    }]);
  });
})(Ko);
var Ei = Ko.exports;
var xi = /* @__PURE__ */ Ke(Ei);
var Bi = class {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    xi.show(e);
  }
};
var Ci = class extends E {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new Bi();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
};
var Ti = class extends E {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
};
var Xo = { exports: {} };
(function(n2, e) {
  (function(t, o4) {
    n2.exports = o4();
  })(Ce, function() {
    function t(h6) {
      var p3 = h6.tags, g4 = Object.keys(p3), f2 = g4.map(function(v4) {
        return typeof p3[v4];
      }).every(function(v4) {
        return v4 === "object" || v4 === "boolean" || v4 === "function";
      });
      if (!f2)
        throw new Error("The configuration was invalid");
      this.config = h6;
    }
    var o4 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(h6) {
      return o4.indexOf(h6.nodeName) !== -1;
    }
    var s4 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r2(h6) {
      return s4.indexOf(h6.nodeName) !== -1;
    }
    t.prototype.clean = function(h6) {
      const p3 = document.implementation.createHTMLDocument(), g4 = p3.createElement("div");
      return g4.innerHTML = h6, this._sanitize(p3, g4), g4.innerHTML;
    }, t.prototype._sanitize = function(h6, p3) {
      var g4 = a4(h6, p3), f2 = g4.firstChild();
      if (f2)
        do {
          if (f2.nodeType === Node.TEXT_NODE)
            if (f2.data.trim() === "" && (f2.previousElementSibling && i(f2.previousElementSibling) || f2.nextElementSibling && i(f2.nextElementSibling))) {
              p3.removeChild(f2), this._sanitize(h6, p3);
              break;
            } else
              continue;
          if (f2.nodeType === Node.COMMENT_NODE) {
            p3.removeChild(f2), this._sanitize(h6, p3);
            break;
          }
          var v4 = r2(f2), O3;
          v4 && (O3 = Array.prototype.some.call(f2.childNodes, i));
          var T3 = !!p3.parentNode, M3 = i(p3) && i(f2) && T3, q3 = f2.nodeName.toLowerCase(), F3 = l2(this.config, q3, f2), H3 = v4 && O3;
          if (H3 || c4(f2, F3) || !this.config.keepNestedBlockElements && M3) {
            if (!(f2.nodeName === "SCRIPT" || f2.nodeName === "STYLE"))
              for (; f2.childNodes.length > 0; )
                p3.insertBefore(f2.childNodes[0], f2);
            p3.removeChild(f2), this._sanitize(h6, p3);
            break;
          }
          for (var Q3 = 0; Q3 < f2.attributes.length; Q3 += 1) {
            var ie3 = f2.attributes[Q3];
            d4(ie3, F3, f2) && (f2.removeAttribute(ie3.name), Q3 = Q3 - 1);
          }
          this._sanitize(h6, f2);
        } while (f2 = g4.nextSibling());
    };
    function a4(h6, p3) {
      return h6.createTreeWalker(
        p3,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        false
      );
    }
    function l2(h6, p3, g4) {
      return typeof h6.tags[p3] == "function" ? h6.tags[p3](g4) : h6.tags[p3];
    }
    function c4(h6, p3) {
      return typeof p3 > "u" ? true : typeof p3 == "boolean" ? !p3 : false;
    }
    function d4(h6, p3, g4) {
      var f2 = h6.name.toLowerCase();
      return p3 === true ? false : typeof p3[f2] == "function" ? !p3[f2](h6.value, g4) : typeof p3[f2] > "u" || p3[f2] === false ? true : typeof p3[f2] == "string" ? p3[f2] !== h6.value : false;
    }
    return t;
  });
})(Xo);
var Si = Xo.exports;
var Ii = /* @__PURE__ */ Ke(Si);
function yt(n2, e) {
  return n2.map((t) => {
    const o4 = A(e) ? e(t.tool) : e;
    return V(o4) || (t.data = wt(t.data, o4)), t;
  });
}
function Z(n2, e = {}) {
  const t = {
    tags: e
  };
  return new Ii(t).clean(n2);
}
function wt(n2, e) {
  return Array.isArray(n2) ? Oi(n2, e) : D(n2) ? _i(n2, e) : te(n2) ? Mi(n2, e) : n2;
}
function Oi(n2, e) {
  return n2.map((t) => wt(t, e));
}
function _i(n2, e) {
  const t = {};
  for (const o4 in n2) {
    if (!Object.prototype.hasOwnProperty.call(n2, o4))
      continue;
    const i = n2[o4], s4 = Ai(e[o4]) ? e[o4] : e;
    t[o4] = wt(i, s4);
  }
  return t;
}
function Mi(n2, e) {
  return D(e) ? Z(n2, e) : e === false ? Z(n2, {}) : n2;
}
function Ai(n2) {
  return D(n2) || Gn(n2) || A(n2);
}
var Li = class extends E {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return Z(e, t);
  }
};
var Pi = class extends E {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
};
var Ni = class extends E {
  constructor() {
    super(...arguments), this.selectionUtils = new b();
  }
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
};
var Ri = class extends E {
  /**
   * Available methods
   */
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
};
var Di = class extends E {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
};
var Fi = class extends E {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
};
var Vo = { exports: {} };
(function(n2, e) {
  (function(t, o4) {
    n2.exports = o4();
  })(window, function() {
    return (function(t) {
      var o4 = {};
      function i(s4) {
        if (o4[s4])
          return o4[s4].exports;
        var r2 = o4[s4] = { i: s4, l: false, exports: {} };
        return t[s4].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
      }
      return i.m = t, i.c = o4, i.d = function(s4, r2, a4) {
        i.o(s4, r2) || Object.defineProperty(s4, r2, { enumerable: true, get: a4 });
      }, i.r = function(s4) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s4, "__esModule", { value: true });
      }, i.t = function(s4, r2) {
        if (1 & r2 && (s4 = i(s4)), 8 & r2 || 4 & r2 && typeof s4 == "object" && s4 && s4.__esModule)
          return s4;
        var a4 = /* @__PURE__ */ Object.create(null);
        if (i.r(a4), Object.defineProperty(a4, "default", { enumerable: true, value: s4 }), 2 & r2 && typeof s4 != "string")
          for (var l2 in s4)
            i.d(a4, l2, (function(c4) {
              return s4[c4];
            }).bind(null, l2));
        return a4;
      }, i.n = function(s4) {
        var r2 = s4 && s4.__esModule ? function() {
          return s4.default;
        } : function() {
          return s4;
        };
        return i.d(r2, "a", r2), r2;
      }, i.o = function(s4, r2) {
        return Object.prototype.hasOwnProperty.call(s4, r2);
      }, i.p = "", i(i.s = 0);
    })([function(t, o4, i) {
      t.exports = i(1);
    }, function(t, o4, i) {
      i.r(o4), i.d(o4, "default", function() {
        return s4;
      });
      class s4 {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(true);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a4, l2, c4) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const d4 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c4);
          if (d4.hidingDelay && (this.hidingDelay = d4.hidingDelay), this.nodes.content.innerHTML = "", typeof l2 == "string")
            this.nodes.content.appendChild(document.createTextNode(l2));
          else {
            if (!(l2 instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof l2 + " given.");
            this.nodes.content.appendChild(l2);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), d4.placement) {
            case "top":
              this.placeTop(a4, d4);
              break;
            case "left":
              this.placeLeft(a4, d4);
              break;
            case "right":
              this.placeRight(a4, d4);
              break;
            case "bottom":
            default:
              this.placeBottom(a4, d4);
          }
          d4 && d4.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
          }, d4.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
        }
        hide(a4 = false) {
          if (this.hidingDelay && !a4)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(true);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a4, l2, c4) {
          a4.addEventListener("mouseenter", () => {
            this.show(a4, l2, c4);
          }), a4.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a4 = "codex-tooltips-style";
          if (document.getElementById(a4))
            return;
          const l2 = i(2), c4 = this.make("style", null, { textContent: l2.toString(), id: a4 });
          this.prepend(document.head, c4);
        }
        placeBottom(a4, l2) {
          const c4 = a4.getBoundingClientRect(), d4 = c4.left + a4.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h6 = c4.bottom + window.pageYOffset + this.offsetTop + l2.marginTop;
          this.applyPlacement("bottom", d4, h6);
        }
        placeTop(a4, l2) {
          const c4 = a4.getBoundingClientRect(), d4 = c4.left + a4.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h6 = c4.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", d4, h6);
        }
        placeLeft(a4, l2) {
          const c4 = a4.getBoundingClientRect(), d4 = c4.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l2.marginLeft, h6 = c4.top + window.pageYOffset + a4.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", d4, h6);
        }
        placeRight(a4, l2) {
          const c4 = a4.getBoundingClientRect(), d4 = c4.right + this.offsetRight + l2.marginRight, h6 = c4.top + window.pageYOffset + a4.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", d4, h6);
        }
        applyPlacement(a4, l2, c4) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a4]), this.nodes.wrapper.style.left = l2 + "px", this.nodes.wrapper.style.top = c4 + "px";
        }
        make(a4, l2 = null, c4 = {}) {
          const d4 = document.createElement(a4);
          Array.isArray(l2) ? d4.classList.add(...l2) : l2 && d4.classList.add(l2);
          for (const h6 in c4)
            c4.hasOwnProperty(h6) && (d4[h6] = c4[h6]);
          return d4;
        }
        append(a4, l2) {
          Array.isArray(l2) ? l2.forEach((c4) => a4.appendChild(c4)) : a4.appendChild(l2);
        }
        prepend(a4, l2) {
          Array.isArray(l2) ? (l2 = l2.reverse()).forEach((c4) => a4.prepend(c4)) : a4.prepend(l2);
        }
      }
    }, function(t, o4) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(Vo);
var ji = Vo.exports;
var Hi = /* @__PURE__ */ Ke(ji);
var U = null;
function Et() {
  U || (U = new Hi());
}
function $i(n2, e, t) {
  Et(), U == null || U.show(n2, e, t);
}
function $e(n2 = false) {
  Et(), U == null || U.hide(n2);
}
function ze(n2, e, t) {
  Et(), U == null || U.onHover(n2, e, t);
}
function zi() {
  U == null || U.destroy(), U = null;
}
var Ui = class extends E {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o4) => this.show(e, t, o4),
      hide: () => this.hide(),
      onHover: (e, t, o4) => this.onHover(e, t, o4)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o4) {
    $i(e, t, o4);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    $e();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o4) {
    ze(e, t, o4);
  }
};
var Wi = class extends E {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
};
function qo(n2, e) {
  const t = {};
  return Object.entries(n2).forEach(([o4, i]) => {
    if (D(i)) {
      const s4 = e ? `${e}.${o4}` : o4;
      Object.values(i).every((a4) => te(a4)) ? t[o4] = s4 : t[o4] = qo(i, s4);
      return;
    }
    t[o4] = i;
  }), t;
}
var K = qo(Fo);
function Yi(n2, e) {
  const t = {};
  return Object.keys(n2).forEach((o4) => {
    const i = e[o4];
    i !== void 0 ? t[i] = n2[o4] : t[o4] = n2[o4];
  }), t;
}
var Zo = class Ee {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(Ee.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(Ee.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === Ee.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === Ee.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, u.canSetCaret(this.items[t]) && Fe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
Zo.directions = {
  RIGHT: "right",
  LEFT: "left"
};
var ke = Zo;
var ce = class _ce {
  /**
   * @param options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (!(!this.isEventReadyForHandling(t) || t.shiftKey === true))
        switch (_ce.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case y.TAB:
            this.handleTabPress(t);
            break;
          case y.LEFT:
          case y.UP:
            this.flipLeft();
            break;
          case y.RIGHT:
          case y.DOWN:
            this.flipRight();
            break;
          case y.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new ke(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || _ce.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      y.TAB,
      y.LEFT,
      y.RIGHT,
      y.ENTER,
      y.UP,
      y.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = true, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, true);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? ke.directions.LEFT : ke.directions.RIGHT) {
      case ke.directions.RIGHT:
        this.flipRight();
        break;
      case ke.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), A(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
};
var Ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>';
var Xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>';
var Vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>';
var qi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>';
var Zi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>';
var Gi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>';
var Qi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>';
var Ji = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>';
var Co = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';
var es = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>';
var ts = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>';
var Go = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>';
var os = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
var ns = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
var is = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
var ss = "__";
var rs = "--";
function ne(n2) {
  return (e, t) => [[n2, e].filter((i) => !!i).join(ss), t].filter((i) => !!i).join(rs);
}
var ye = ne("ce-hint");
var we = {
  root: ye(),
  alignedStart: ye(null, "align-left"),
  alignedCenter: ye(null, "align-center"),
  title: ye("title"),
  description: ye("description")
};
var as = class {
  /**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
  constructor(e) {
    this.nodes = {
      root: u.make("div", [we.root, e.alignment === "center" ? we.alignedCenter : we.alignedStart]),
      title: u.make("div", we.title, { textContent: e.title })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = u.make("div", we.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
  }
  /**
   * Returns the root element of the hint content
   */
  getElement() {
    return this.nodes.root;
  }
};
var xt = class {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    this.params = e;
  }
  /**
   * Item name if exists
   */
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    $e();
  }
  /**
   * Called when children popover is opened (if exists)
   */
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  /**
   * Called when children popover is closed (if exists)
   */
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    var e, t;
    this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  /**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */
  addHint(e, t) {
    const o4 = new as(t);
    ze(e, o4.getElement(), {
      placement: t.position,
      hidingDelay: 100
    });
  }
  /**
   * Returns item children that are represented as popover items
   */
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  /**
   * Returns true if item has any type of children
   */
  get hasChildren() {
    return this.children.length > 0;
  }
  /**
   * Returns true if item children should be open instantly after popover is opened and not on item click/hover
   */
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === true;
  }
  /**
   * True if item children items should be navigatable via keyboard
   */
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === false);
  }
  /**
   * Returns true if item has children that should be searchable
   */
  get isChildrenSearchable() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === true;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  /**
   * True if item is active
   */
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? false : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === true;
  }
};
var Y = ne("ce-popover-item");
var L = {
  container: Y(),
  active: Y(null, "active"),
  disabled: Y(null, "disabled"),
  focused: Y(null, "focused"),
  hidden: Y(null, "hidden"),
  confirmationState: Y(null, "confirmation"),
  noHover: Y(null, "no-hover"),
  noFocus: Y(null, "no-focus"),
  title: Y("title"),
  secondaryTitle: Y("secondary-title"),
  icon: Y("icon"),
  iconTool: Y("icon", "tool"),
  iconChevronRight: Y("icon", "chevron-right"),
  wobbleAnimation: ne("wobble")()
};
var re = class extends xt {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var o4;
      (o4 = this.nodes.root) == null || o4.classList.remove(L.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var o4;
      (o4 = this.nodes.root) == null || o4.classList.remove(L.noHover);
    }, this.onErrorAnimationEnd = () => {
      var o4, i;
      (o4 = this.nodes.icon) == null || o4.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, t);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled === true;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root === null ? false : this.nodes.root.classList.contains(L.focused);
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */
  make(e, t) {
    var s4, r2;
    const o4 = (t == null ? void 0 : t.wrapperTag) || "div", i = u.make(o4, L.container, {
      type: o4 === "button" ? "button" : void 0
    });
    return e.name && (i.dataset.itemName = e.name), this.nodes.icon = u.make("div", [L.icon, L.iconTool], {
      innerHTML: e.icon || Qi
    }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(u.make("div", L.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && i.appendChild(u.make("div", L.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && i.appendChild(u.make("div", [L.icon, L.iconChevronRight], {
      innerHTML: qi
    })), this.isActive && i.classList.add(L.active), e.isDisabled && i.classList.add(L.disabled), e.hint !== void 0 && ((s4 = t == null ? void 0 : t.hint) == null ? void 0 : s4.enabled) !== false && this.addHint(i, {
      ...e.hint,
      position: ((r2 = t == null ? void 0 : t.hint) == null ? void 0 : r2.position) || "right"
    }), i;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    if (this.nodes.root === null)
      return;
    const t = {
      ...this.params,
      ...e,
      confirmation: "confirmation" in e ? e.confirmation : void 0
    }, o4 = this.make(t);
    this.nodes.root.innerHTML = o4.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    if (this.nodes.root === null)
      return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    var e, t, o4;
    (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o4 = this.nodes.root) == null || o4.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    var e, t, o4;
    (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o4 = this.nodes.icon) == null || o4.addEventListener("animationend", this.onErrorAnimationEnd));
  }
};
var nt = ne("ce-popover-item-separator");
var it = {
  container: nt(),
  line: nt("line"),
  hidden: nt(null, "hidden")
};
var Qo = class extends xt {
  /**
   * Constructs the instance
   */
  constructor() {
    super(), this.nodes = {
      root: u.make("div", it.container),
      line: u.make("div", it.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  /**
   * Returns popover separator root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(it.hidden, e);
  }
};
var G = /* @__PURE__ */ ((n2) => (n2.Closed = "closed", n2.ClosedOnActivate = "closed-on-activate", n2))(G || {});
var $ = ne("ce-popover");
var P = {
  popover: $(),
  popoverContainer: $("container"),
  popoverOpenTop: $(null, "open-top"),
  popoverOpenLeft: $(null, "open-left"),
  popoverOpened: $(null, "opened"),
  search: $("search"),
  nothingFoundMessage: $("nothing-found-message"),
  nothingFoundMessageDisplayed: $("nothing-found-message", "displayed"),
  items: $("items"),
  overlay: $("overlay"),
  overlayHidden: $("overlay", "hidden"),
  popoverNested: $(null, "nested"),
  getPopoverNestedClass: (n2) => $(null, `nested-level-${n2.toString()}`),
  popoverInline: $(null, "inline"),
  popoverHeader: $("header")
};
var fe = /* @__PURE__ */ ((n2) => (n2.NestingLevel = "--nesting-level", n2.PopoverHeight = "--popover-height", n2.InlinePopoverWidth = "--inline-popover-width", n2.TriggerItemLeft = "--trigger-item-left", n2.TriggerItemTop = "--trigger-item-top", n2))(fe || {});
var To = ne("ce-popover-item-html");
var So = {
  root: To(),
  hidden: To(null, "hidden")
};
var Se = class extends xt {
  /**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    var o4, i;
    super(e), this.nodes = {
      root: u.make("div", So.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o4 = t == null ? void 0 : t.hint) == null ? void 0 : o4.enabled) !== false && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
    });
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(So.hidden, e);
  }
  /**
   * Returns list of buttons and inputs inside custom content
   */
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${u.allInputsSelector}`
    );
    return Array.from(e);
  }
};
var Jo = class extends Oe {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t = {}) {
    super(), this.params = e, this.itemsRenderParams = t, this.listeners = new _e(), this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), this.nodes = {}, this.nodes.popoverContainer = u.make("div", [P.popoverContainer]), this.nodes.nothingFoundMessage = u.make("div", [P.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = u.make("div", [P.items]), this.items.forEach((o4) => {
      const i = o4.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o4) => this.handleClick(o4)), this.nodes.popover = u.make("div", [
      P.popover,
      this.params.class
    ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  /**
   * List of default popover items that are searchable and may have confirmation state
   */
  get itemsDefault() {
    return this.items.filter((e) => e instanceof re);
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.popover;
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.popover.classList.add(P.popoverOpened), this.search !== void 0 && this.search.focus();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(P.popoverOpened), this.nodes.popover.classList.remove(P.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(G.Closed);
  }
  /**
   * Clears memory
   */
  destroy() {
    var e;
    this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
  }
  /**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */
  activateItemByName(e) {
    const t = this.items.find((o4) => o4.name === e);
    this.handleItemClick(t);
  }
  /**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */
  buildItems(e) {
    return e.map((t) => {
      switch (t.type) {
        case _.Separator:
          return new Qo();
        case _.Html:
          return new Se(t, this.itemsRenderParams[_.Html]);
        default:
          return new re(t, this.itemsRenderParams[_.Default]);
      }
    });
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.filter((t) => t instanceof re || t instanceof Se).find((t) => {
      const o4 = t.getElement();
      return o4 === null ? false : e.composedPath().includes(o4);
    });
  }
  /**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(G.ClosedOnActivate));
    }
  }
  /**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof re && (e.toggle === true && e.toggleActive(), typeof e.toggle == "string")) {
      const t = this.itemsDefault.filter((o4) => o4.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((o4) => {
        o4.toggleActive(o4 === e);
      });
    }
  }
};
var Ue = /* @__PURE__ */ ((n2) => (n2.Search = "search", n2))(Ue || {});
var st = ne("cdx-search-field");
var rt = {
  wrapper: st(),
  icon: st("icon"),
  input: st("input")
};
var ls = class extends Oe {
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, placeholder: t }) {
    super(), this.listeners = new _e(), this.items = e, this.wrapper = u.make("div", rt.wrapper);
    const o4 = u.make("div", rt.icon, {
      innerHTML: os
    });
    this.input = u.make("input", rt.input, {
      placeholder: t,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(o4), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.emit(Ue.Search, {
        query: this.searchQuery,
        items: this.foundItems
      });
    });
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.emit(Ue.Search, {
      query: "",
      items: this.foundItems
    });
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var i, s4;
    const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o4 = (s4 = this.searchQuery) == null ? void 0 : s4.toLowerCase();
    return o4 !== void 0 ? t.includes(o4) : false;
  }
};
var cs = Object.defineProperty;
var ds = Object.getOwnPropertyDescriptor;
var us = (n2, e, t, o4) => {
  for (var i = o4 > 1 ? void 0 : o4 ? ds(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
    (r2 = n2[s4]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
  return o4 && i && cs(e, t, i), i;
};
var en = class tn extends Jo {
  /**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var o4;
      super.hide(), this.destroyNestedPopoverIfExists(), (o4 = this.flipper) == null || o4.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const o4 = this.itemsDefault.find((i) => i.isFocused);
      o4 == null || o4.onFocus();
    }, this.onSearch = (o4) => {
      var a4;
      const i = o4.query === "", s4 = o4.items.length === 0;
      this.items.forEach((l2) => {
        let c4 = false;
        l2 instanceof re ? c4 = !o4.items.includes(l2) : (l2 instanceof Qo || l2 instanceof Se) && (c4 = s4 || !i), l2.toggleHidden(c4);
      }), this.toggleNothingFoundMessage(s4);
      const r2 = o4.query === "" ? this.flippableElements : o4.items.map((l2) => l2.getElement());
      (a4 = this.flipper) != null && a4.isActivated && (this.flipper.deactivate(), this.flipper.activate(r2));
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(P.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o4) => this.handleHover(o4)), e.searchable && this.addSearch(), e.flippable !== false && (this.flipper = new ce({
      items: this.flippableElements,
      focusedItemClass: L.focused,
      allowedKeys: [
        y.TAB,
        y.UP,
        y.DOWN,
        y.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip));
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper === void 0 ? false : this.flipper.hasFocus();
  }
  /**
   * Scroll position inside items container of the popover
   */
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  /**
   * Returns visible element offset top
   */
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  /**
   * Open popover
   */
  show() {
    var e;
    this.nodes.popover.style.setProperty(fe.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(P.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(P.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.hide(), super.destroy();
  }
  /**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  /**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o4 = t.getElement(), i = (o4 ? o4.offsetTop : 0) - this.scrollTop, s4 = this.offsetTop + i;
    e.style.setProperty(fe.TriggerItemTop, s4 + "px");
  }
  /**
   * Destroys existing nested popover
   */
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(G.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    var o4;
    this.nestedPopover = new tn({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages
    }), e.onChildrenOpen(), this.nestedPopover.on(G.ClosedOnActivate, this.hide);
    const t = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(fe.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o4 = this.flipper) == null || o4.deactivate(), this.nestedPopover;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return false;
    const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o4 = this.size.height, i = e.top + o4, s4 = e.top - o4, r2 = Math.min(window.innerHeight, t.bottom);
    return s4 < t.top || i <= r2;
  }
  /**
   * Checks if popover should be opened left.
   * It should happen when there is enough space in the right or not enough space in the left
   */
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return false;
    const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o4 = this.size.width, i = e.right + o4, s4 = e.left - o4, r2 = Math.min(window.innerWidth, t.right);
    return s4 < t.left || i <= r2;
  }
  get size() {
    var i;
    const e = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null)
      return e;
    const t = this.nodes.popover.cloneNode(true);
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(P.popoverOpened), (i = t.querySelector("." + P.popoverNested)) == null || i.remove(), document.body.appendChild(t);
    const o4 = t.querySelector("." + P.popoverContainer);
    return e.height = o4.offsetHeight, e.width = o4.offsetWidth, t.remove(), e;
  }
  /**
   * Returns list of elements available for keyboard navigation.
   */
  get flippableElements() {
    return this.items.map((t) => {
      if (t instanceof re)
        return t.getElement();
      if (t instanceof Se)
        return t.getControls();
    }).flat().filter((t) => t != null);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new ls({
      items: this.itemsDefault,
      placeholder: this.messages.search
    }), this.search.on(Ue.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(P.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(P.nothingFoundMessageDisplayed, e);
  }
};
us([
  me
], en.prototype, "size", 1);
var Bt = en;
var hs = class extends Bt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    const t = !be();
    super(
      {
        ...e,
        class: P.popoverInline
      },
      {
        [_.Default]: {
          /**
           * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
           *
           * @todo figure out better way to solve the issue
           */
          wrapperTag: "button",
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        },
        [_.Html]: {
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        }
      }
    ), this.items.forEach((o4) => {
      !(o4 instanceof re) && !(o4 instanceof Se) || o4.hasChildren && o4.isChildrenOpen && this.showNestedItems(o4);
    });
  }
  /**
   * Returns visible element offset top
   */
  get offsetLeft() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
  }
  /**
   * Open popover
   */
  show() {
    this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
      fe.InlinePopoverWidth,
      this.size.width + "px"
    ), super.show();
  }
  /**
   * Disable hover event handling.
   * Overrides parent's class behavior
   */
  handleHover() {
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used to position nested popover right below clicked item
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o4 = t.getElement(), i = o4 ? o4.offsetLeft : 0, s4 = this.offsetLeft + i;
    e.style.setProperty(
      fe.TriggerItemLeft,
      s4 + "px"
    );
  }
  /**
   * Handles displaying nested items for the item.
   * Overriding in order to add toggling behaviour
   *
   * @param item – item to toggle nested popover for
   */
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
      return;
    }
    super.showNestedItems(e);
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    const t = super.showNestedPopoverForItem(e);
    return t.getElement().classList.add(P.getPopoverNestedClass(t.nestingLevel)), t;
  }
  /**
   * Overrides default item click handling.
   * Helps to close nested popover once other item is clicked.
   *
   * @param item - clicked item
   */
  handleItemClick(e) {
    var t;
    e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
  }
};
var on = class xe {
  constructor() {
    this.scrollPosition = null;
  }
  /**
   * Locks body element scroll
   */
  lock() {
    pt ? this.lockHard() : document.body.classList.add(xe.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    pt ? this.unlockHard() : document.body.classList.remove(xe.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(xe.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(xe.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
on.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
var ps = on;
var at = ne("ce-popover-header");
var lt = {
  root: at(),
  text: at("text"),
  backButton: at("back-button")
};
var fs = class {
  /**
   * Constructs the instance
   *
   * @param params - popover header params
   */
  constructor({ text: e, onBackButtonClick: t }) {
    this.listeners = new _e(), this.text = e, this.onBackButtonClick = t, this.nodes = {
      root: u.make("div", [lt.root]),
      backButton: u.make("button", [lt.backButton]),
      text: u.make("div", [lt.text])
    }, this.nodes.backButton.innerHTML = Vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  /**
   * Returns popover header root html element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
};
var gs = class {
  constructor() {
    this.history = [];
  }
  /**
   * Push new popover state
   *
   * @param state - new state
   */
  push(e) {
    this.history.push(e);
  }
  /**
   * Pop last popover state
   */
  pop() {
    return this.history.pop();
  }
  /**
   * Title retrieved from the current state
   */
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  /**
   * Items list retrieved from the current state
   */
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  /**
   * Returns history to initial popover state
   */
  reset() {
    for (; this.history.length > 1; )
      this.pop();
  }
};
var nn = class extends Jo {
  /**
   * Construct the instance
   *
   * @param params - popover params
   */
  constructor(e) {
    super(e, {
      [_.Default]: {
        hint: {
          enabled: false
        }
      },
      [_.Html]: {
        hint: {
          enabled: false
        }
      }
    }), this.scrollLocker = new ps(), this.history = new gs(), this.isHidden = true, this.nodes.overlay = u.make("div", [P.overlay, P.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({ items: e.items });
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.overlay.classList.remove(P.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = false;
  }
  /**
   * Closes popover
   */
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(P.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = true);
  }
  /**
   * Clears memory
   */
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  /**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  /**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */
  updateItemsAndHeader(e, t) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
      this.header = new fs({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const o4 = this.header.getElement();
      o4 !== null && this.nodes.popoverContainer.insertBefore(o4, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach((o4) => {
      var i;
      return (i = o4.getElement()) == null ? void 0 : i.remove();
    }), this.items = this.buildItems(e), this.items.forEach((o4) => {
      var s4;
      const i = o4.getElement();
      i !== null && ((s4 = this.nodes.items) == null || s4.appendChild(i));
    });
  }
};
var ms = class extends E {
  constructor() {
    super(...arguments), this.opened = false, this.hasMobileLayoutToggleListener = false, this.selection = new b(), this.popover = null, this.close = () => {
      this.opened && (this.opened = false, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(G.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = u.make("div", [this.CSS.settings]), this.eventsDispatcher.on(Te, this.close), this.hasMobileLayoutToggleListener = true;
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.hasMobileLayoutToggleListener && (this.eventsDispatcher.off(Te, this.close), this.hasMobileLayoutToggleListener = false);
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  async open(e = this.Editor.BlockManager.currentBlock) {
    var s4;
    this.opened = true, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const { toolTunes: t, commonTunes: o4 } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const i = be() ? nn : Bt;
    this.popover = new i({
      searchable: true,
      items: await this.getTunesItems(e, o4, t),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.popover.on(G.Closed, this.onPopoverClose), (s4 = this.nodes.wrapper) == null || s4.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
   *
   * @param currentBlock –  block we are about to open block tunes for
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */
  async getTunesItems(e, t, o4) {
    const i = [];
    o4 !== void 0 && o4.length > 0 && (i.push(...o4), i.push({
      type: _.Separator
    }));
    const s4 = Array.from(this.Editor.Tools.blockTools.values()), a4 = (await Yo(e, s4)).reduce((l2, c4) => (c4.toolbox.forEach((d4) => {
      l2.push({
        icon: d4.icon,
        title: z.t(K.toolNames, d4.title),
        name: c4.name,
        closeOnActivate: true,
        onActivate: async () => {
          const { BlockManager: h6, Caret: p3, Toolbar: g4 } = this.Editor, f2 = await h6.convert(e, c4.name, d4.data);
          g4.close(), p3.setToBlock(f2, p3.positions.END);
        }
      });
    }), l2), []);
    return a4.length > 0 && (i.push({
      icon: Go,
      name: "convert-to",
      title: z.ui(K.ui.popover, "Convert to"),
      children: {
        searchable: true,
        items: a4
      }
    }), i.push({
      type: _.Separator
    })), i.push(...t), i.map((l2) => this.resolveTuneAliases(l2));
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    if (e.type === _.Separator || e.type === _.Html)
      return e;
    const t = Yi(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
};
var sn = { exports: {} };
(function(n2, e) {
  (function(t, o4) {
    n2.exports = o4();
  })(window, function() {
    return (function(t) {
      var o4 = {};
      function i(s4) {
        if (o4[s4])
          return o4[s4].exports;
        var r2 = o4[s4] = { i: s4, l: false, exports: {} };
        return t[s4].call(r2.exports, r2, r2.exports, i), r2.l = true, r2.exports;
      }
      return i.m = t, i.c = o4, i.d = function(s4, r2, a4) {
        i.o(s4, r2) || Object.defineProperty(s4, r2, { enumerable: true, get: a4 });
      }, i.r = function(s4) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s4, "__esModule", { value: true });
      }, i.t = function(s4, r2) {
        if (1 & r2 && (s4 = i(s4)), 8 & r2 || 4 & r2 && typeof s4 == "object" && s4 && s4.__esModule)
          return s4;
        var a4 = /* @__PURE__ */ Object.create(null);
        if (i.r(a4), Object.defineProperty(a4, "default", { enumerable: true, value: s4 }), 2 & r2 && typeof s4 != "string")
          for (var l2 in s4)
            i.d(a4, l2, (function(c4) {
              return s4[c4];
            }).bind(null, l2));
        return a4;
      }, i.n = function(s4) {
        var r2 = s4 && s4.__esModule ? function() {
          return s4.default;
        } : function() {
          return s4;
        };
        return i.d(r2, "a", r2), r2;
      }, i.o = function(s4, r2) {
        return Object.prototype.hasOwnProperty.call(s4, r2);
      }, i.p = "", i(i.s = 0);
    })([function(t, o4, i) {
      function s4(l2, c4) {
        for (var d4 = 0; d4 < c4.length; d4++) {
          var h6 = c4[d4];
          h6.enumerable = h6.enumerable || false, h6.configurable = true, "value" in h6 && (h6.writable = true), Object.defineProperty(l2, h6.key, h6);
        }
      }
      function r2(l2, c4, d4) {
        return c4 && s4(l2.prototype, c4), d4 && s4(l2, d4), l2;
      }
      i.r(o4);
      var a4 = (function() {
        function l2(c4) {
          var d4 = this;
          (function(h6, p3) {
            if (!(h6 instanceof p3))
              throw new TypeError("Cannot call a class as a function");
          })(this, l2), this.commands = {}, this.keys = {}, this.name = c4.name, this.parseShortcutName(c4.name), this.element = c4.on, this.callback = c4.callback, this.executeShortcut = function(h6) {
            d4.execute(h6);
          }, this.element.addEventListener("keydown", this.executeShortcut, false);
        }
        return r2(l2, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r2(l2, [{ key: "parseShortcutName", value: function(c4) {
          c4 = c4.split("+");
          for (var d4 = 0; d4 < c4.length; d4++) {
            c4[d4] = c4[d4].toUpperCase();
            var h6 = false;
            for (var p3 in l2.supportedCommands)
              if (l2.supportedCommands[p3].includes(c4[d4])) {
                h6 = this.commands[p3] = true;
                break;
              }
            h6 || (this.keys[c4[d4]] = true);
          }
          for (var g4 in l2.supportedCommands)
            this.commands[g4] || (this.commands[g4] = false);
        } }, { key: "execute", value: function(c4) {
          var d4, h6 = { CMD: c4.ctrlKey || c4.metaKey, SHIFT: c4.shiftKey, ALT: c4.altKey }, p3 = true;
          for (d4 in this.commands)
            this.commands[d4] !== h6[d4] && (p3 = false);
          var g4, f2 = true;
          for (g4 in this.keys)
            f2 = f2 && c4.keyCode === l2.keyCodes[g4];
          p3 && f2 && this.callback(c4);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), l2;
      })();
      o4.default = a4;
    }]).default;
  });
})(sn);
var bs = sn.exports;
var vs = /* @__PURE__ */ Ke(bs);
var ks = class {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o4 = new vs({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o4]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o4 = this.findShortcut(e, t);
    if (!o4)
      return;
    o4.remove();
    const s4 = this.registeredShortcuts.get(e).filter((r2) => r2 !== o4);
    if (s4.length === 0) {
      this.registeredShortcuts.delete(e);
      return;
    }
    this.registeredShortcuts.set(e, s4);
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
  }
};
var ge = new ks();
var ys = Object.defineProperty;
var ws = Object.getOwnPropertyDescriptor;
var rn = (n2, e, t, o4) => {
  for (var i = o4 > 1 ? void 0 : o4 ? ws(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
    (r2 = n2[s4]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
  return o4 && i && ys(e, t, i), i;
};
var Le = /* @__PURE__ */ ((n2) => (n2.Opened = "toolbox-opened", n2.Closed = "toolbox-closed", n2.BlockAdded = "toolbox-block-added", n2))(Le || {});
var Ct = class an extends Oe {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: t, i18nLabels: o4 }) {
    super(), this.opened = false, this.listeners = new _e(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = false, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = t, this.i18nLabels = o4, this.enableShortcuts(), this.nodes = {
      toolbox: u.make("div", an.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(Te, this.handleMobileLayoutToggle);
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(G.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(Te, this.handleMobileLayoutToggle);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = true, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = false, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  /**
   * Creates toolbox popover and appends it inside wrapper element
   */
  initPopover() {
    var t;
    const e = be() ? nn : Bt;
    this.popover = new e({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: true,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(G.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
  }
  /**
   * Destroys popover instance and removes it from DOM
   */
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(G.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((t) => {
      t.toolbox && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o4, i = true) => ({
      icon: t.icon,
      title: z.t(K.toolNames, t.title || je(o4.name)),
      name: o4.name,
      onActivate: () => {
        this.toolButtonActivated(o4.name, t.data);
      },
      secondaryLabel: o4.shortcut && i ? vt(o4.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((t, o4) => (Array.isArray(o4.toolbox) ? o4.toolbox.forEach((i, s4) => {
      t.push(e(i, o4, s4 === 0));
    }) : o4.toolbox !== void 0 && t.push(e(o4.toolbox, o4)), t), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, t) {
    ge.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async (o4) => {
        o4.preventDefault();
        const i = this.api.blocks.getCurrentBlockIndex(), s4 = this.api.blocks.getBlockByIndex(i);
        if (s4)
          try {
            const r2 = await this.api.blocks.convert(s4.id, e);
            this.api.caret.setToBlock(r2, "end");
            return;
          } catch {
          }
        this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && ge.remove(this.api.ui.nodes.redactor, t);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, t) {
    const o4 = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o4);
    if (!i)
      return;
    const s4 = i.isEmpty ? o4 : o4 + 1;
    let r2;
    if (t) {
      const l2 = await this.api.blocks.composeBlockData(e);
      r2 = Object.assign(l2, t);
    }
    const a4 = this.api.blocks.insert(
      e,
      r2,
      void 0,
      s4,
      void 0,
      i.isEmpty
    );
    a4.call(ee.APPEND_CALLBACK), this.api.caret.setToBlock(s4), this.emit("toolbox-block-added", {
      block: a4
    }), this.api.toolbar.close();
  }
};
rn([
  me
], Ct.prototype, "toolsToBeDisplayed", 1);
rn([
  me
], Ct.prototype, "toolboxItemsToBeDisplayed", 1);
var Es = Ct;
var ln = "block hovered";
async function xs(n2, e) {
  const t = navigator.keyboard;
  if (!t)
    return e;
  try {
    return (await t.getLayoutMap()).get(n2) || e;
  } catch (o4) {
    return console.error(o4), e;
  }
}
var Bs = class extends E {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          S("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          S("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      S("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o4 } = this.Editor.UI;
    let i;
    const s4 = 20, r2 = e.firstInput, a4 = t.getBoundingClientRect(), l2 = r2 !== void 0 ? r2.getBoundingClientRect() : null, c4 = l2 !== null ? l2.top - a4.top : null, d4 = c4 !== null ? c4 > s4 : void 0;
    if (o4)
      i = t.offsetTop + t.offsetHeight;
    else if (r2 === void 0 || d4) {
      const h6 = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      i = t.offsetTop + h6;
    } else {
      const h6 = li(r2), p3 = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10), g4 = 8;
      i = t.offsetTop + h6 - p3 + g4 + c4;
    }
    this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = true) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    this.nodes.wrapper = u.make("div", this.CSS.toolbar), ["content", "actions"].forEach((s4) => {
      this.nodes[s4] = u.make("div", this.CSS[s4]);
    }), u.append(this.nodes.wrapper, this.nodes.content), u.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.make("div", this.CSS.plusButton, {
      innerHTML: ts
    }), u.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      $e(true), this.plusButtonClicked();
    }, false);
    const e = u.make("div");
    e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(u.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), ze(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = u.make("span", this.CSS.settingsToggler, {
      innerHTML: es
    }), u.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = u.make("div"), o4 = u.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i = await xs("Slash", "/");
    t.appendChild(o4), t.appendChild(u.make("div", this.CSS.plusButtonShortcut, {
      textContent: vt(`CMD + ${i}`)
    })), ze(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), u.append(this.nodes.actions, this.makeToolbox()), u.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), u.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Es({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: z.ui(K.ui.popover, "Filter"),
        nothingFound: z.ui(K.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(Le.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Le.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Le.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o4 } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o4.setToBlock(t.lastBlock)) : o4.setToBlock(t.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), $e(true);
    }, true), be() || this.eventsDispatcher.on(ln, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
};
var ae = /* @__PURE__ */ ((n2) => (n2[n2.Block = 0] = "Block", n2[n2.Inline = 1] = "Inline", n2[n2.Tune = 2] = "Tune", n2))(ae || {});
var Pe = /* @__PURE__ */ ((n2) => (n2.Shortcut = "shortcut", n2.Toolbox = "toolbox", n2.EnabledInlineTools = "inlineToolbar", n2.EnabledBlockTunes = "tunes", n2.Config = "config", n2))(Pe || {});
var cn = /* @__PURE__ */ ((n2) => (n2.Shortcut = "shortcut", n2.SanitizeConfig = "sanitize", n2))(cn || {});
var pe = /* @__PURE__ */ ((n2) => (n2.IsEnabledLineBreaks = "enableLineBreaks", n2.Toolbox = "toolbox", n2.ConversionConfig = "conversionConfig", n2.IsReadOnlySupported = "isReadOnlySupported", n2.PasteConfig = "pasteConfig", n2))(pe || {});
var We = /* @__PURE__ */ ((n2) => (n2.IsInline = "isInline", n2.Title = "title", n2.IsReadOnlySupported = "isReadOnlySupported", n2))(We || {});
var mt = /* @__PURE__ */ ((n2) => (n2.IsTune = "isTune", n2))(mt || {});
var Tt = class {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o4,
    api: i,
    isDefault: s4,
    isInternal: r2 = false,
    defaultPlaceholder: a4
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o4, this.isDefault = s4, this.isInternal = r2, this.defaultPlaceholder = a4;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (A(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (A(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === ae.Inline;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === ae.Block;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === ae.Tune;
  }
};
var Cs = class extends E {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar"
    }, this.opened = false, this.popover = null, this.toolbarVerticalMargin = be() ? 20 : 6, this.tools = /* @__PURE__ */ new Map(), window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   */
  async tryToShow(e = false) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    var e, t;
    if (this.opened) {
      for (const [o4, i] of this.tools) {
        const s4 = this.getToolShortcut(o4.name);
        s4 !== void 0 && ge.remove(this.Editor.UI.nodes.redactor, s4), A(i.clear) && i.clear();
      }
      this.tools = /* @__PURE__ */ new Map(), this.reset(), this.opened = false, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null;
    }
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? false : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    var e;
    this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = u.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), u.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Shows Inline Toolbar
   */
  async open() {
    var t;
    if (this.opened)
      return;
    this.opened = true, this.popover !== null && this.popover.destroy(), this.createToolsInstances();
    const e = await this.getPopoverItems();
    this.popover = new hs({
      items: e,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Move Toolbar to the selected text
   *
   * @param popoverWidth - width of the toolbar popover
   */
  move(e) {
    const t = b.rect, o4 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i = {
      x: t.x - o4.x,
      y: t.y + t.height - // + window.scrollY
      o4.top + this.toolbarVerticalMargin
    };
    i.x + e + o4.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o4.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = b.get(), o4 = b.text;
    if (!t || !t.anchorNode || t.isCollapsed || o4.length < 1)
      return false;
    const i = u.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (i === null || t !== null && e.includes(i.tagName))
      return false;
    const s4 = this.Editor.BlockManager.getBlock(t.anchorNode);
    return !s4 || this.getTools().some((c4) => s4.tool.inlineTools.has(c4.name)) === false ? false : i.closest("[contenteditable]") !== null;
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Returns tools that are available for current block
   *
   * Used to check if Inline Toolbar could be shown
   * and to render tools in the Inline Toolbar
   */
  getTools() {
    const e = this.Editor.BlockManager.currentBlock;
    return e ? Array.from(e.tool.inlineTools.values()).filter((o4) => !(this.Editor.ReadOnly.isEnabled && o4.isReadOnlySupported !== true)) : [];
  }
  /**
   * Constructs tools instances and saves them to this.tools
   */
  createToolsInstances() {
    this.tools = /* @__PURE__ */ new Map(), this.getTools().forEach((t) => {
      const o4 = t.create();
      this.tools.set(t, o4);
    });
  }
  /**
   * Returns Popover Items for tools segregated by their appearance type: regular items and custom html elements.
   */
  async getPopoverItems() {
    const e = [];
    let t = 0;
    for (const [o4, i] of this.tools) {
      const s4 = await i.render(), r2 = this.getToolShortcut(o4.name);
      if (r2 !== void 0)
        try {
          this.enableShortcuts(o4.name, r2);
        } catch {
        }
      const a4 = r2 !== void 0 ? vt(r2) : void 0, l2 = z.t(
        K.toolNames,
        o4.title || je(o4.name)
      );
      [s4].flat().forEach((c4) => {
        var h6, p3;
        const d4 = {
          name: o4.name,
          onActivate: () => {
            this.toolClicked(i);
          },
          hint: {
            title: l2,
            description: a4
          }
        };
        if (u.isElement(c4)) {
          const g4 = {
            ...d4,
            element: c4,
            type: _.Html
          };
          if (A(i.renderActions)) {
            const f2 = i.renderActions();
            g4.children = {
              isOpen: (h6 = i.checkState) == null ? void 0 : h6.call(i, b.get()),
              /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
              isFlippable: false,
              items: [
                {
                  type: _.Html,
                  element: f2
                }
              ]
            };
          } else
            (p3 = i.checkState) == null || p3.call(i, b.get());
          e.push(g4);
        } else if (c4.type === _.Html)
          e.push({
            ...d4,
            ...c4,
            type: _.Html
          });
        else if (c4.type === _.Separator)
          e.push({
            type: _.Separator
          });
        else {
          const g4 = {
            ...d4,
            ...c4,
            type: _.Default
          };
          "children" in g4 && t !== 0 && e.push({
            type: _.Separator
          }), e.push(g4), "children" in g4 && t < this.tools.size - 1 && e.push({
            type: _.Separator
          });
        }
      }), t++;
    }
    return e;
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o4 = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][cn.Shortcut] : o4 == null ? void 0 : o4.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param toolName - tool name
   * @param shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    ge.add({
      name: t,
      handler: (o4) => {
        var s4;
        const { currentBlock: i } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o4.preventDefault(), (s4 = this.popover) == null || s4.activateItemByName(e));
      },
      /**
       * We need to bind shortcut to the document to make it work in read-only mode
       */
      on: document
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param tool - Tool's instance
   */
  toolClicked(e) {
    var o4;
    const t = b.range;
    (o4 = e.surround) == null || o4.call(e, t), this.checkToolsState();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    var e;
    (e = this.tools) == null || e.forEach((t) => {
      var o4;
      (o4 = t.checkState) == null || o4.call(t, b.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o4]) => {
      e[t] = o4.create();
    }), e;
  }
};
function dn() {
  const n2 = window.getSelection();
  if (n2 === null)
    return [null, 0];
  let e = n2.focusNode, t = n2.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
}
function un(n2, e, t, o4) {
  const i = document.createRange();
  o4 === "left" ? (i.setStart(n2, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n2, n2.childNodes.length));
  const s4 = i.cloneContents(), r2 = document.createElement("div");
  r2.appendChild(s4);
  const a4 = r2.textContent || "";
  return ai(a4);
}
function Ne(n2) {
  const e = u.getDeepestNode(n2);
  if (e === null || u.isEmpty(n2))
    return true;
  if (u.isNativeInput(e))
    return e.selectionEnd === 0;
  if (u.isEmpty(n2))
    return true;
  const [t, o4] = dn();
  return t === null ? false : un(n2, t, o4, "left");
}
function Re(n2) {
  const e = u.getDeepestNode(n2, true);
  if (e === null)
    return true;
  if (u.isNativeInput(e))
    return e.selectionEnd === e.value.length;
  const [t, o4] = dn();
  return t === null ? false : un(n2, t, o4, "right");
}
var hn = {};
var St = {};
var Xe = {};
var de = {};
var It = {};
var Ot = {};
Object.defineProperty(Ot, "__esModule", { value: true });
Ot.allInputsSelector = Ts;
function Ts() {
  var n2 = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + n2.map(function(e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.allInputsSelector = void 0;
  var e = Ot;
  Object.defineProperty(n2, "allInputsSelector", { enumerable: true, get: function() {
    return e.allInputsSelector;
  } });
})(It);
var ue = {};
var _t = {};
Object.defineProperty(_t, "__esModule", { value: true });
_t.isNativeInput = Ss;
function Ss(n2) {
  var e = [
    "INPUT",
    "TEXTAREA"
  ];
  return n2 && n2.tagName ? e.includes(n2.tagName) : false;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isNativeInput = void 0;
  var e = _t;
  Object.defineProperty(n2, "isNativeInput", { enumerable: true, get: function() {
    return e.isNativeInput;
  } });
})(ue);
var pn = {};
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: true });
Mt.append = Is;
function Is(n2, e) {
  Array.isArray(e) ? e.forEach(function(t) {
    n2.appendChild(t);
  }) : n2.appendChild(e);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.append = void 0;
  var e = Mt;
  Object.defineProperty(n2, "append", { enumerable: true, get: function() {
    return e.append;
  } });
})(pn);
var At = {};
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: true });
Lt.blockElements = Os;
function Os() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.blockElements = void 0;
  var e = Lt;
  Object.defineProperty(n2, "blockElements", { enumerable: true, get: function() {
    return e.blockElements;
  } });
})(At);
var fn = {};
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: true });
Pt.calculateBaseline = _s;
function _s(n2) {
  var e = window.getComputedStyle(n2), t = parseFloat(e.fontSize), o4 = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s4 = parseFloat(e.borderTopWidth), r2 = parseFloat(e.marginTop), a4 = t * 0.8, l2 = (o4 - t) / 2, c4 = r2 + s4 + i + l2 + a4;
  return c4;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.calculateBaseline = void 0;
  var e = Pt;
  Object.defineProperty(n2, "calculateBaseline", { enumerable: true, get: function() {
    return e.calculateBaseline;
  } });
})(fn);
var gn = {};
var Nt = {};
var Rt = {};
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: true });
Dt.isContentEditable = Ms;
function Ms(n2) {
  return n2.contentEditable === "true";
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isContentEditable = void 0;
  var e = Dt;
  Object.defineProperty(n2, "isContentEditable", { enumerable: true, get: function() {
    return e.isContentEditable;
  } });
})(Rt);
Object.defineProperty(Nt, "__esModule", { value: true });
Nt.canSetCaret = Ps;
var As = ue;
var Ls = Rt;
function Ps(n2) {
  var e = true;
  if ((0, As.isNativeInput)(n2))
    switch (n2.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = false;
        break;
    }
  else
    e = (0, Ls.isContentEditable)(n2);
  return e;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.canSetCaret = void 0;
  var e = Nt;
  Object.defineProperty(n2, "canSetCaret", { enumerable: true, get: function() {
    return e.canSetCaret;
  } });
})(gn);
var Ve = {};
var Ft = {};
function Ns(n2, e, t) {
  const o4 = t.value !== void 0 ? "value" : "get", i = t[o4], s4 = `#${e}Cache`;
  if (t[o4] = function(...r2) {
    return this[s4] === void 0 && (this[s4] = i.apply(this, r2)), this[s4];
  }, o4 === "get" && t.set) {
    const r2 = t.set;
    t.set = function(a4) {
      delete n2[s4], r2.apply(this, a4);
    };
  }
  return t;
}
function mn() {
  const n2 = {
    win: false,
    mac: false,
    x11: false,
    linux: false
  }, e = Object.keys(n2).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e !== void 0 && (n2[e] = true), n2;
}
function jt(n2) {
  return n2 != null && n2 !== "" && (typeof n2 != "object" || Object.keys(n2).length > 0);
}
function Rs(n2) {
  return !jt(n2);
}
var Ds = () => typeof window < "u" && window.navigator !== null && jt(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Fs(n2) {
  const e = mn();
  return n2 = n2.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), e.mac ? n2 = n2.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n2 = n2.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n2;
}
function js(n2) {
  return n2[0].toUpperCase() + n2.slice(1);
}
function Hs(n2) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = n2, document.body.appendChild(e);
  const t = window.getSelection(), o4 = document.createRange();
  if (o4.selectNode(e), t === null)
    throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(), t.addRange(o4), document.execCommand("copy"), document.body.removeChild(e);
}
function $s(n2, e, t) {
  let o4;
  return (...i) => {
    const s4 = this, r2 = () => {
      o4 = void 0, t !== true && n2.apply(s4, i);
    }, a4 = t === true && o4 !== void 0;
    window.clearTimeout(o4), o4 = window.setTimeout(r2, e), a4 && n2.apply(s4, i);
  };
}
function oe(n2) {
  return Object.prototype.toString.call(n2).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function zs(n2) {
  return oe(n2) === "boolean";
}
function bn(n2) {
  return oe(n2) === "function" || oe(n2) === "asyncfunction";
}
function Us(n2) {
  return bn(n2) && /^\s*class\s+/.test(n2.toString());
}
function Ws(n2) {
  return oe(n2) === "number";
}
function De(n2) {
  return oe(n2) === "object";
}
function Ys(n2) {
  return Promise.resolve(n2) === n2;
}
function Ks(n2) {
  return oe(n2) === "string";
}
function Xs(n2) {
  return oe(n2) === "undefined";
}
function bt(n2, ...e) {
  if (!e.length)
    return n2;
  const t = e.shift();
  if (De(n2) && De(t))
    for (const o4 in t)
      De(t[o4]) ? (n2[o4] === void 0 && Object.assign(n2, { [o4]: {} }), bt(n2[o4], t[o4])) : Object.assign(n2, { [o4]: t[o4] });
  return bt(n2, ...e);
}
function Vs(n2, e, t) {
  const o4 = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
  n2 && console.warn(o4);
}
function qs(n2) {
  try {
    return new URL(n2).href;
  } catch {
  }
  return n2.substring(0, 2) === "//" ? window.location.protocol + n2 : window.location.origin + n2;
}
function Zs(n2) {
  return n2 > 47 && n2 < 58 || n2 === 32 || n2 === 13 || n2 === 229 || n2 > 64 && n2 < 91 || n2 > 95 && n2 < 112 || n2 > 185 && n2 < 193 || n2 > 218 && n2 < 223;
}
var Gs = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
};
var Qs = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
var Js = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o4) => {
      this.completed = this.completed.then(e).then(t).catch(o4);
    });
  }
};
function er(n2, e, t = void 0) {
  let o4, i, s4, r2 = null, a4 = 0;
  t || (t = {});
  const l2 = function() {
    a4 = t.leading === false ? 0 : Date.now(), r2 = null, s4 = n2.apply(o4, i), r2 === null && (o4 = i = null);
  };
  return function() {
    const c4 = Date.now();
    !a4 && t.leading === false && (a4 = c4);
    const d4 = e - (c4 - a4);
    return o4 = this, i = arguments, d4 <= 0 || d4 > e ? (r2 && (clearTimeout(r2), r2 = null), a4 = c4, s4 = n2.apply(o4, i), r2 === null && (o4 = i = null)) : !r2 && t.trailing !== false && (r2 = setTimeout(l2, d4)), s4;
  };
}
var tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: Js,
  beautifyShortcut: Fs,
  cacheable: Ns,
  capitalize: js,
  copyTextToClipboard: Hs,
  debounce: $s,
  deepMerge: bt,
  deprecationAssert: Vs,
  getUserOS: mn,
  getValidUrl: qs,
  isBoolean: zs,
  isClass: Us,
  isEmpty: Rs,
  isFunction: bn,
  isIosDevice: Ds,
  isNumber: Ws,
  isObject: De,
  isPrintableKey: Zs,
  isPromise: Ys,
  isString: Ks,
  isUndefined: Xs,
  keyCodes: Gs,
  mouseButtons: Qs,
  notEmpty: jt,
  throttle: er,
  typeOf: oe
}, Symbol.toStringTag, { value: "Module" }));
var Ht = /* @__PURE__ */ Xn(tr);
Object.defineProperty(Ft, "__esModule", { value: true });
Ft.containsOnlyInlineElements = ir;
var or = Ht;
var nr = At;
function ir(n2) {
  var e;
  (0, or.isString)(n2) ? (e = document.createElement("div"), e.innerHTML = n2) : e = n2;
  var t = function(o4) {
    return !(0, nr.blockElements)().includes(o4.tagName.toLowerCase()) && Array.from(o4.children).every(t);
  };
  return Array.from(e.children).every(t);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.containsOnlyInlineElements = void 0;
  var e = Ft;
  Object.defineProperty(n2, "containsOnlyInlineElements", { enumerable: true, get: function() {
    return e.containsOnlyInlineElements;
  } });
})(Ve);
var vn = {};
var $t = {};
var qe = {};
var zt = {};
Object.defineProperty(zt, "__esModule", { value: true });
zt.make = sr;
function sr(n2, e, t) {
  var o4;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var i = document.createElement(n2);
  if (Array.isArray(e)) {
    var s4 = e.filter(function(a4) {
      return a4 !== void 0;
    });
    (o4 = i.classList).add.apply(o4, s4);
  } else
    e !== null && i.classList.add(e);
  for (var r2 in t)
    Object.prototype.hasOwnProperty.call(t, r2) && (i[r2] = t[r2]);
  return i;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.make = void 0;
  var e = zt;
  Object.defineProperty(n2, "make", { enumerable: true, get: function() {
    return e.make;
  } });
})(qe);
Object.defineProperty($t, "__esModule", { value: true });
$t.fragmentToString = ar;
var rr = qe;
function ar(n2) {
  var e = (0, rr.make)("div");
  return e.appendChild(n2), e.innerHTML;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.fragmentToString = void 0;
  var e = $t;
  Object.defineProperty(n2, "fragmentToString", { enumerable: true, get: function() {
    return e.fragmentToString;
  } });
})(vn);
var kn = {};
var Ut = {};
Object.defineProperty(Ut, "__esModule", { value: true });
Ut.getContentLength = cr;
var lr = ue;
function cr(n2) {
  var e, t;
  return (0, lr.isNativeInput)(n2) ? n2.value.length : n2.nodeType === Node.TEXT_NODE ? n2.length : (t = (e = n2.textContent) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.getContentLength = void 0;
  var e = Ut;
  Object.defineProperty(n2, "getContentLength", { enumerable: true, get: function() {
    return e.getContentLength;
  } });
})(kn);
var Wt = {};
var Yt = {};
var Io = Ce && Ce.__spreadArray || function(n2, e, t) {
  if (t || arguments.length === 2)
    for (var o4 = 0, i = e.length, s4; o4 < i; o4++)
      (s4 || !(o4 in e)) && (s4 || (s4 = Array.prototype.slice.call(e, 0, o4)), s4[o4] = e[o4]);
  return n2.concat(s4 || Array.prototype.slice.call(e));
};
Object.defineProperty(Yt, "__esModule", { value: true });
Yt.getDeepestBlockElements = yn;
var dr = Ve;
function yn(n2) {
  return (0, dr.containsOnlyInlineElements)(n2) ? [n2] : Array.from(n2.children).reduce(function(e, t) {
    return Io(Io([], e, true), yn(t), true);
  }, []);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.getDeepestBlockElements = void 0;
  var e = Yt;
  Object.defineProperty(n2, "getDeepestBlockElements", { enumerable: true, get: function() {
    return e.getDeepestBlockElements;
  } });
})(Wt);
var wn = {};
var Kt = {};
var Ze = {};
var Xt = {};
Object.defineProperty(Xt, "__esModule", { value: true });
Xt.isLineBreakTag = ur;
function ur(n2) {
  return [
    "BR",
    "WBR"
  ].includes(n2.tagName);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isLineBreakTag = void 0;
  var e = Xt;
  Object.defineProperty(n2, "isLineBreakTag", { enumerable: true, get: function() {
    return e.isLineBreakTag;
  } });
})(Ze);
var Ge = {};
var Vt = {};
Object.defineProperty(Vt, "__esModule", { value: true });
Vt.isSingleTag = hr;
function hr(n2) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(n2.tagName);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isSingleTag = void 0;
  var e = Vt;
  Object.defineProperty(n2, "isSingleTag", { enumerable: true, get: function() {
    return e.isSingleTag;
  } });
})(Ge);
Object.defineProperty(Kt, "__esModule", { value: true });
Kt.getDeepestNode = En;
var pr = ue;
var fr = Ze;
var gr = Ge;
function En(n2, e) {
  e === void 0 && (e = false);
  var t = e ? "lastChild" : "firstChild", o4 = e ? "previousSibling" : "nextSibling";
  if (n2.nodeType === Node.ELEMENT_NODE && n2[t]) {
    var i = n2[t];
    if ((0, gr.isSingleTag)(i) && !(0, pr.isNativeInput)(i) && !(0, fr.isLineBreakTag)(i))
      if (i[o4])
        i = i[o4];
      else if (i.parentNode !== null && i.parentNode[o4])
        i = i.parentNode[o4];
      else
        return i.parentNode;
    return En(i, e);
  }
  return n2;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.getDeepestNode = void 0;
  var e = Kt;
  Object.defineProperty(n2, "getDeepestNode", { enumerable: true, get: function() {
    return e.getDeepestNode;
  } });
})(wn);
var xn = {};
var qt = {};
var Me = Ce && Ce.__spreadArray || function(n2, e, t) {
  if (t || arguments.length === 2)
    for (var o4 = 0, i = e.length, s4; o4 < i; o4++)
      (s4 || !(o4 in e)) && (s4 || (s4 = Array.prototype.slice.call(e, 0, o4)), s4[o4] = e[o4]);
  return n2.concat(s4 || Array.prototype.slice.call(e));
};
Object.defineProperty(qt, "__esModule", { value: true });
qt.findAllInputs = yr;
var mr = Ve;
var br = Wt;
var vr = It;
var kr = ue;
function yr(n2) {
  return Array.from(n2.querySelectorAll((0, vr.allInputsSelector)())).reduce(function(e, t) {
    return (0, kr.isNativeInput)(t) || (0, mr.containsOnlyInlineElements)(t) ? Me(Me([], e, true), [t], false) : Me(Me([], e, true), (0, br.getDeepestBlockElements)(t), true);
  }, []);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.findAllInputs = void 0;
  var e = qt;
  Object.defineProperty(n2, "findAllInputs", { enumerable: true, get: function() {
    return e.findAllInputs;
  } });
})(xn);
var Bn = {};
var Zt = {};
Object.defineProperty(Zt, "__esModule", { value: true });
Zt.isCollapsedWhitespaces = wr;
function wr(n2) {
  return !/[^\t\n\r ]/.test(n2);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isCollapsedWhitespaces = void 0;
  var e = Zt;
  Object.defineProperty(n2, "isCollapsedWhitespaces", { enumerable: true, get: function() {
    return e.isCollapsedWhitespaces;
  } });
})(Bn);
var Gt = {};
var Qt = {};
Object.defineProperty(Qt, "__esModule", { value: true });
Qt.isElement = xr;
var Er = Ht;
function xr(n2) {
  return (0, Er.isNumber)(n2) ? false : !!n2 && !!n2.nodeType && n2.nodeType === Node.ELEMENT_NODE;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isElement = void 0;
  var e = Qt;
  Object.defineProperty(n2, "isElement", { enumerable: true, get: function() {
    return e.isElement;
  } });
})(Gt);
var Cn = {};
var Jt = {};
var eo = {};
var to = {};
Object.defineProperty(to, "__esModule", { value: true });
to.isLeaf = Br;
function Br(n2) {
  return n2 === null ? false : n2.childNodes.length === 0;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isLeaf = void 0;
  var e = to;
  Object.defineProperty(n2, "isLeaf", { enumerable: true, get: function() {
    return e.isLeaf;
  } });
})(eo);
var oo = {};
var no = {};
Object.defineProperty(no, "__esModule", { value: true });
no.isNodeEmpty = Or;
var Cr = Ze;
var Tr = Gt;
var Sr = ue;
var Ir = Ge;
function Or(n2, e) {
  var t = "";
  return (0, Ir.isSingleTag)(n2) && !(0, Cr.isLineBreakTag)(n2) ? false : ((0, Tr.isElement)(n2) && (0, Sr.isNativeInput)(n2) ? t = n2.value : n2.textContent !== null && (t = n2.textContent.replace("\u200B", "")), e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")), t.trim().length === 0);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isNodeEmpty = void 0;
  var e = no;
  Object.defineProperty(n2, "isNodeEmpty", { enumerable: true, get: function() {
    return e.isNodeEmpty;
  } });
})(oo);
Object.defineProperty(Jt, "__esModule", { value: true });
Jt.isEmpty = Ar;
var _r = eo;
var Mr = oo;
function Ar(n2, e) {
  n2.normalize();
  for (var t = [n2]; t.length > 0; ) {
    var o4 = t.shift();
    if (o4) {
      if (n2 = o4, (0, _r.isLeaf)(n2) && !(0, Mr.isNodeEmpty)(n2, e))
        return false;
      t.push.apply(t, Array.from(n2.childNodes));
    }
  }
  return true;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isEmpty = void 0;
  var e = Jt;
  Object.defineProperty(n2, "isEmpty", { enumerable: true, get: function() {
    return e.isEmpty;
  } });
})(Cn);
var Tn = {};
var io = {};
Object.defineProperty(io, "__esModule", { value: true });
io.isFragment = Pr;
var Lr = Ht;
function Pr(n2) {
  return (0, Lr.isNumber)(n2) ? false : !!n2 && !!n2.nodeType && n2.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isFragment = void 0;
  var e = io;
  Object.defineProperty(n2, "isFragment", { enumerable: true, get: function() {
    return e.isFragment;
  } });
})(Tn);
var Sn = {};
var so = {};
Object.defineProperty(so, "__esModule", { value: true });
so.isHTMLString = Rr;
var Nr = qe;
function Rr(n2) {
  var e = (0, Nr.make)("div");
  return e.innerHTML = n2, e.childElementCount > 0;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isHTMLString = void 0;
  var e = so;
  Object.defineProperty(n2, "isHTMLString", { enumerable: true, get: function() {
    return e.isHTMLString;
  } });
})(Sn);
var In = {};
var ro = {};
Object.defineProperty(ro, "__esModule", { value: true });
ro.offset = Dr;
function Dr(n2) {
  var e = n2.getBoundingClientRect(), t = window.pageXOffset || document.documentElement.scrollLeft, o4 = window.pageYOffset || document.documentElement.scrollTop, i = e.top + o4, s4 = e.left + t;
  return {
    top: i,
    left: s4,
    bottom: i + e.height,
    right: s4 + e.width
  };
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.offset = void 0;
  var e = ro;
  Object.defineProperty(n2, "offset", { enumerable: true, get: function() {
    return e.offset;
  } });
})(In);
var On = {};
var ao = {};
Object.defineProperty(ao, "__esModule", { value: true });
ao.prepend = Fr;
function Fr(n2, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function(t) {
    return n2.prepend(t);
  })) : n2.prepend(e);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.prepend = void 0;
  var e = ao;
  Object.defineProperty(n2, "prepend", { enumerable: true, get: function() {
    return e.prepend;
  } });
})(On);
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.prepend = n2.offset = n2.make = n2.isLineBreakTag = n2.isSingleTag = n2.isNodeEmpty = n2.isLeaf = n2.isHTMLString = n2.isFragment = n2.isEmpty = n2.isElement = n2.isContentEditable = n2.isCollapsedWhitespaces = n2.findAllInputs = n2.isNativeInput = n2.allInputsSelector = n2.getDeepestNode = n2.getDeepestBlockElements = n2.getContentLength = n2.fragmentToString = n2.containsOnlyInlineElements = n2.canSetCaret = n2.calculateBaseline = n2.blockElements = n2.append = void 0;
  var e = It;
  Object.defineProperty(n2, "allInputsSelector", { enumerable: true, get: function() {
    return e.allInputsSelector;
  } });
  var t = ue;
  Object.defineProperty(n2, "isNativeInput", { enumerable: true, get: function() {
    return t.isNativeInput;
  } });
  var o4 = pn;
  Object.defineProperty(n2, "append", { enumerable: true, get: function() {
    return o4.append;
  } });
  var i = At;
  Object.defineProperty(n2, "blockElements", { enumerable: true, get: function() {
    return i.blockElements;
  } });
  var s4 = fn;
  Object.defineProperty(n2, "calculateBaseline", { enumerable: true, get: function() {
    return s4.calculateBaseline;
  } });
  var r2 = gn;
  Object.defineProperty(n2, "canSetCaret", { enumerable: true, get: function() {
    return r2.canSetCaret;
  } });
  var a4 = Ve;
  Object.defineProperty(n2, "containsOnlyInlineElements", { enumerable: true, get: function() {
    return a4.containsOnlyInlineElements;
  } });
  var l2 = vn;
  Object.defineProperty(n2, "fragmentToString", { enumerable: true, get: function() {
    return l2.fragmentToString;
  } });
  var c4 = kn;
  Object.defineProperty(n2, "getContentLength", { enumerable: true, get: function() {
    return c4.getContentLength;
  } });
  var d4 = Wt;
  Object.defineProperty(n2, "getDeepestBlockElements", { enumerable: true, get: function() {
    return d4.getDeepestBlockElements;
  } });
  var h6 = wn;
  Object.defineProperty(n2, "getDeepestNode", { enumerable: true, get: function() {
    return h6.getDeepestNode;
  } });
  var p3 = xn;
  Object.defineProperty(n2, "findAllInputs", { enumerable: true, get: function() {
    return p3.findAllInputs;
  } });
  var g4 = Bn;
  Object.defineProperty(n2, "isCollapsedWhitespaces", { enumerable: true, get: function() {
    return g4.isCollapsedWhitespaces;
  } });
  var f2 = Rt;
  Object.defineProperty(n2, "isContentEditable", { enumerable: true, get: function() {
    return f2.isContentEditable;
  } });
  var v4 = Gt;
  Object.defineProperty(n2, "isElement", { enumerable: true, get: function() {
    return v4.isElement;
  } });
  var O3 = Cn;
  Object.defineProperty(n2, "isEmpty", { enumerable: true, get: function() {
    return O3.isEmpty;
  } });
  var T3 = Tn;
  Object.defineProperty(n2, "isFragment", { enumerable: true, get: function() {
    return T3.isFragment;
  } });
  var M3 = Sn;
  Object.defineProperty(n2, "isHTMLString", { enumerable: true, get: function() {
    return M3.isHTMLString;
  } });
  var q3 = eo;
  Object.defineProperty(n2, "isLeaf", { enumerable: true, get: function() {
    return q3.isLeaf;
  } });
  var F3 = oo;
  Object.defineProperty(n2, "isNodeEmpty", { enumerable: true, get: function() {
    return F3.isNodeEmpty;
  } });
  var H3 = Ze;
  Object.defineProperty(n2, "isLineBreakTag", { enumerable: true, get: function() {
    return H3.isLineBreakTag;
  } });
  var Q3 = Ge;
  Object.defineProperty(n2, "isSingleTag", { enumerable: true, get: function() {
    return Q3.isSingleTag;
  } });
  var ie3 = qe;
  Object.defineProperty(n2, "make", { enumerable: true, get: function() {
    return ie3.make;
  } });
  var k3 = In;
  Object.defineProperty(n2, "offset", { enumerable: true, get: function() {
    return k3.offset;
  } });
  var m4 = On;
  Object.defineProperty(n2, "prepend", { enumerable: true, get: function() {
    return m4.prepend;
  } });
})(de);
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: true });
Qe.getContenteditableSlice = Hr;
var jr = de;
function Hr(n2, e, t, o4, i) {
  var s4;
  i === void 0 && (i = false);
  var r2 = document.createRange();
  if (o4 === "left" ? (r2.setStart(n2, 0), r2.setEnd(e, t)) : (r2.setStart(e, t), r2.setEnd(n2, n2.childNodes.length)), i === true) {
    var a4 = r2.extractContents();
    return (0, jr.fragmentToString)(a4);
  }
  var l2 = r2.cloneContents(), c4 = document.createElement("div");
  c4.appendChild(l2);
  var d4 = (s4 = c4.textContent) !== null && s4 !== void 0 ? s4 : "";
  return d4;
}
Object.defineProperty(Xe, "__esModule", { value: true });
Xe.checkContenteditableSliceForEmptiness = Ur;
var $r = de;
var zr = Qe;
function Ur(n2, e, t, o4) {
  var i = (0, zr.getContenteditableSlice)(n2, e, t, o4);
  return (0, $r.isCollapsedWhitespaces)(i);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.checkContenteditableSliceForEmptiness = void 0;
  var e = Xe;
  Object.defineProperty(n2, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
})(St);
var _n = {};
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.getContenteditableSlice = void 0;
  var e = Qe;
  Object.defineProperty(n2, "getContenteditableSlice", { enumerable: true, get: function() {
    return e.getContenteditableSlice;
  } });
})(_n);
var Mn = {};
var lo = {};
Object.defineProperty(lo, "__esModule", { value: true });
lo.focus = Yr;
var Wr = de;
function Yr(n2, e) {
  var t, o4;
  if (e === void 0 && (e = true), (0, Wr.isNativeInput)(n2)) {
    n2.focus();
    var i = e ? 0 : n2.value.length;
    n2.setSelectionRange(i, i);
  } else {
    var s4 = document.createRange(), r2 = window.getSelection();
    if (!r2)
      return;
    var a4 = function(p3) {
      var g4 = document.createTextNode("");
      p3.appendChild(g4), s4.setStart(g4, 0), s4.setEnd(g4, 0);
    }, l2 = function(p3) {
      return p3 != null;
    }, c4 = n2.childNodes, d4 = e ? c4[0] : c4[c4.length - 1];
    if (l2(d4)) {
      for (; l2(d4) && d4.nodeType !== Node.TEXT_NODE; )
        d4 = e ? d4.firstChild : d4.lastChild;
      if (l2(d4) && d4.nodeType === Node.TEXT_NODE) {
        var h6 = (o4 = (t = d4.textContent) === null || t === void 0 ? void 0 : t.length) !== null && o4 !== void 0 ? o4 : 0, i = e ? 0 : h6;
        s4.setStart(d4, i), s4.setEnd(d4, i);
      } else
        a4(n2);
    } else
      a4(n2);
    r2.removeAllRanges(), r2.addRange(s4);
  }
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.focus = void 0;
  var e = lo;
  Object.defineProperty(n2, "focus", { enumerable: true, get: function() {
    return e.focus;
  } });
})(Mn);
var co = {};
var Je = {};
Object.defineProperty(Je, "__esModule", { value: true });
Je.getCaretNodeAndOffset = Kr;
function Kr() {
  var n2 = window.getSelection();
  if (n2 === null)
    return [null, 0];
  var e = n2.focusNode, t = n2.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] !== void 0 ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], e.textContent !== null && (t = e.textContent.length))), [e, t]);
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.getCaretNodeAndOffset = void 0;
  var e = Je;
  Object.defineProperty(n2, "getCaretNodeAndOffset", { enumerable: true, get: function() {
    return e.getCaretNodeAndOffset;
  } });
})(co);
var An = {};
var et = {};
Object.defineProperty(et, "__esModule", { value: true });
et.getRange = Xr;
function Xr() {
  var n2 = window.getSelection();
  return n2 && n2.rangeCount ? n2.getRangeAt(0) : null;
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.getRange = void 0;
  var e = et;
  Object.defineProperty(n2, "getRange", { enumerable: true, get: function() {
    return e.getRange;
  } });
})(An);
var Ln = {};
var uo = {};
Object.defineProperty(uo, "__esModule", { value: true });
uo.isCaretAtEndOfInput = Zr;
var Oo = de;
var Vr = co;
var qr = St;
function Zr(n2) {
  var e = (0, Oo.getDeepestNode)(n2, true);
  if (e === null)
    return true;
  if ((0, Oo.isNativeInput)(e))
    return e.selectionEnd === e.value.length;
  var t = (0, Vr.getCaretNodeAndOffset)(), o4 = t[0], i = t[1];
  return o4 === null ? false : (0, qr.checkContenteditableSliceForEmptiness)(n2, o4, i, "right");
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isCaretAtEndOfInput = void 0;
  var e = uo;
  Object.defineProperty(n2, "isCaretAtEndOfInput", { enumerable: true, get: function() {
    return e.isCaretAtEndOfInput;
  } });
})(Ln);
var Pn = {};
var ho = {};
Object.defineProperty(ho, "__esModule", { value: true });
ho.isCaretAtStartOfInput = Jr;
var Ae = de;
var Gr = Je;
var Qr = Xe;
function Jr(n2) {
  var e = (0, Ae.getDeepestNode)(n2);
  if (e === null || (0, Ae.isEmpty)(n2))
    return true;
  if ((0, Ae.isNativeInput)(e))
    return e.selectionEnd === 0;
  if ((0, Ae.isEmpty)(n2))
    return true;
  var t = (0, Gr.getCaretNodeAndOffset)(), o4 = t[0], i = t[1];
  return o4 === null ? false : (0, Qr.checkContenteditableSliceForEmptiness)(n2, o4, i, "left");
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.isCaretAtStartOfInput = void 0;
  var e = ho;
  Object.defineProperty(n2, "isCaretAtStartOfInput", { enumerable: true, get: function() {
    return e.isCaretAtStartOfInput;
  } });
})(Pn);
var Nn = {};
var po = {};
Object.defineProperty(po, "__esModule", { value: true });
po.save = oa;
var ea = de;
var ta = et;
function oa() {
  var n2 = (0, ta.getRange)(), e = (0, ea.make)("span");
  if (e.id = "cursor", e.hidden = true, !!n2)
    return n2.insertNode(e), function() {
      var o4 = window.getSelection();
      o4 && (n2.setStartAfter(e), n2.setEndAfter(e), o4.removeAllRanges(), o4.addRange(n2), setTimeout(function() {
        e.remove();
      }, 150));
    };
}
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.save = void 0;
  var e = po;
  Object.defineProperty(n2, "save", { enumerable: true, get: function() {
    return e.save;
  } });
})(Nn);
(function(n2) {
  Object.defineProperty(n2, "__esModule", { value: true }), n2.save = n2.isCaretAtStartOfInput = n2.isCaretAtEndOfInput = n2.getRange = n2.getCaretNodeAndOffset = n2.focus = n2.getContenteditableSlice = n2.checkContenteditableSliceForEmptiness = void 0;
  var e = St;
  Object.defineProperty(n2, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
    return e.checkContenteditableSliceForEmptiness;
  } });
  var t = _n;
  Object.defineProperty(n2, "getContenteditableSlice", { enumerable: true, get: function() {
    return t.getContenteditableSlice;
  } });
  var o4 = Mn;
  Object.defineProperty(n2, "focus", { enumerable: true, get: function() {
    return o4.focus;
  } });
  var i = co;
  Object.defineProperty(n2, "getCaretNodeAndOffset", { enumerable: true, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var s4 = An;
  Object.defineProperty(n2, "getRange", { enumerable: true, get: function() {
    return s4.getRange;
  } });
  var r2 = Ln;
  Object.defineProperty(n2, "isCaretAtEndOfInput", { enumerable: true, get: function() {
    return r2.isCaretAtEndOfInput;
  } });
  var a4 = Pn;
  Object.defineProperty(n2, "isCaretAtStartOfInput", { enumerable: true, get: function() {
    return a4.isCaretAtStartOfInput;
  } });
  var l2 = Nn;
  Object.defineProperty(n2, "save", { enumerable: true, get: function() {
    return l2.save;
  } });
})(hn);
var na = class extends E {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case y.BACKSPACE:
        this.backspace(e);
        break;
      case y.DELETE:
        this.delete(e);
        break;
      case y.ENTER:
        this.enter(e);
        break;
      case y.DOWN:
      case y.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case y.UP:
      case y.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case y.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Po(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = true;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = false;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o4, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const s4 = o4.removeSelectedBlocks(), r2 = o4.insertDefaultBlockAtIndex(s4, true);
      i.setToBlock(r2, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, Caret: o4 } = this.Editor;
    if (t.opened)
      return;
    (e.shiftKey ? o4.navigatePrevious(true) : o4.navigateNext(true)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */
  slashPressed(e) {
    !this.Editor.UI.nodes.wrapper.contains(e.target) || !this.Editor.BlockManager.currentBlock.isEmpty || (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o4 } = this.Editor, i = t.currentBlock;
    if (i === void 0 || i.tool.isLineBreaksEnabled || o4.someToolbarOpened && o4.someFlipperButtonFocused || e.shiftKey && !pt)
      return;
    let s4 = i;
    i.currentInput !== void 0 && Ne(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Re(i.currentInput) ? s4 = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s4 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s4), this.Editor.Toolbar.moveAndOpen(s4), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o4 } = this.Editor, { currentBlock: i, previousBlock: s4 } = t;
    if (i === void 0 || !b.isCollapsed || !i.currentInput || !Ne(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
      o4.navigatePrevious();
      return;
    }
    if (s4 === null)
      return;
    if (s4.isEmpty) {
      t.removeBlock(s4);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i);
      const l2 = t.currentBlock;
      o4.setToBlock(l2, o4.positions.END);
      return;
    }
    xo(s4, i) ? this.mergeBlocks(s4, i) : o4.setToBlock(s4, o4.positions.END);
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o4 } = this.Editor, { currentBlock: i, nextBlock: s4 } = t;
    if (!b.isCollapsed || !Re(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
      o4.navigateNext();
      return;
    }
    if (s4 === null)
      return;
    if (s4.isEmpty) {
      t.removeBlock(s4);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i), o4.setToBlock(s4, o4.positions.START);
      return;
    }
    xo(i, s4) ? this.mergeBlocks(i, s4) : o4.setToBlock(s4, o4.positions.START);
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o4, Toolbar: i } = this.Editor;
    e.lastInput !== void 0 && (hn.focus(e.lastInput, false), o4.mergeBlocks(e, t).then(() => {
      i.close();
    }));
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = ce.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const { currentBlock: o4 } = this.Editor.BlockManager, s4 = ((o4 == null ? void 0 : o4.currentInput) !== void 0 ? Re(o4.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.DOWN && s4) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === y.DOWN || e.keyCode === y.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Fe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (ce.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: t } = this.Editor.BlockManager, i = ((t == null ? void 0 : t.currentInput) !== void 0 ? Ne(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.UP && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(false);
      return;
    }
    if (e.keyCode === y.UP || e.keyCode === y.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Fe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === y.ENTER && this.Editor.Toolbar.toolbox.opened, o4 = e.keyCode === y.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === y.ENTER && this.Editor.InlineToolbar.opened, s4 = e.keyCode === y.TAB;
    return !(e.shiftKey || s4 || t || o4 || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
};
var ct = class {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return No(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o4) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o4), true) : (e.insert(+t, o4), true);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o4 = this.blocks[t];
    u.swap(this.blocks[e].holder, o4.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o4;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o4 = this.blocks.splice(t, 1)[0], i = e - 1, s4 = Math.max(0, i), r2 = this.blocks[s4];
    e > 0 ? this.insertToDOM(o4, "afterend", r2) : this.insertToDOM(o4, "beforebegin", r2), this.blocks.splice(e, 0, o4);
    const a4 = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o4.call(ee.MOVED, a4);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o4 = false) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o4 && (this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED));
    const i = o4 ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const s4 = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", s4);
    } else {
      const s4 = this.blocks[e + 1];
      s4 ? this.insertToDOM(t, "beforebegin", s4) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o4 = new DocumentFragment();
    for (const i of e)
      o4.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o4);
      } else
        t === 0 && this.workingArea.prepend(o4);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o4);
    e.forEach((i) => i.call(ee.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(ee.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o4 = this.blocks.indexOf(e);
    this.insert(o4 + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o4) {
    t ? o4.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(ee.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
var _o = "block-removed";
var Mo = "block-added";
var ia = "block-moved";
var Ao = "block-changed";
var sa = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o4) => {
      this.completed = this.completed.then(e).then(t).catch(o4);
    });
  }
};
var ra = class extends E {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new ct(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: ct.set,
      get: ct.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o4 = void 0,
    tunes: i = {}
  }) {
    const s4 = this.Editor.ReadOnly.isEnabled, r2 = this.Editor.Tools.blockTools.get(e), a4 = new R({
      id: o4,
      data: t,
      tool: r2,
      api: this.Editor.API,
      readOnly: s4,
      tunesData: i
    }, this.eventsDispatcher);
    return s4 || window.requestIdleCallback(() => {
      this.bindBlockEvents(a4);
    }, { timeout: 2e3 }), a4;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o4 = {},
    index: i,
    needToFocus: s4 = true,
    replace: r2 = false,
    tunes: a4 = {}
  } = {}) {
    let l2 = i;
    l2 === void 0 && (l2 = this.currentBlockIndex + (r2 ? 0 : 1));
    const c4 = this.composeBlock({
      id: e,
      tool: t,
      data: o4,
      tunes: a4
    });
    return r2 && this.blockDidMutated(_o, this.getBlockByIndex(l2), {
      index: l2
    }), this._blocks.insert(l2, c4, r2), this.blockDidMutated(Mo, c4, {
      index: l2
    }), s4 ? this.currentBlockIndex = l2 : l2 <= this.currentBlockIndex && this.currentBlockIndex++, c4;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */
  async update(e, t, o4) {
    if (!t && !o4)
      return e;
    const i = await e.data, s4 = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, i, t ?? {}),
      tunes: o4 ?? e.tunes
    }), r2 = this.getBlockIndex(e);
    return this._blocks.replace(r2, s4), this.blockDidMutated(Ao, s4, {
      index: r2
    }), s4;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o4) {
    const i = this.getBlockIndex(e);
    return this.insert({
      tool: t,
      data: o4,
      index: i,
      replace: true
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o4 = false) {
    const i = this.insert({
      tool: e,
      replace: o4
    });
    try {
      window.requestIdleCallback(() => {
        i.call(ee.ON_PASTE, t);
      });
    } catch (s4) {
      S(`${e}: onPaste callback call is failed`, "error", s4);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = false) {
    const o4 = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o4, this.blockDidMutated(Mo, o4, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o4;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    let o4;
    if (e.name === t.name && e.mergeable) {
      const i = await t.data;
      if (V(i)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [s4] = yt([i], e.tool.sanitizeConfig);
      o4 = s4;
    } else if (e.mergeable && He(t, "export") && He(e, "import")) {
      const i = await t.exportDataAsString(), s4 = Z(i, e.tool.sanitizeConfig);
      o4 = Bo(s4, e.tool.conversionConfig);
    }
    o4 !== void 0 && (await e.mergeWith(o4), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = true) {
    return new Promise((o4) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      this._blocks.remove(i), e.destroy(), this.blockDidMutated(_o, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o4();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = u.make("div");
    t.appendChild(e);
    const o4 = {
      text: u.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o4 });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    u.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o4 = e.closest(`.${R.CSS.wrapper}`), i = t.indexOf(o4);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    u.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    if (!t)
      return;
    const o4 = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o4 != null && o4.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    u.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    return this.blocks.find((o4) => o4.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      S("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      S("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(ia, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o4) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const s4 = this.Editor.Tools.blockTools.get(t);
    if (!s4)
      throw new Error(`Could not convert Block. Tool \xAB${t}\xBB not found.`);
    const r2 = await e.exportDataAsString(), a4 = Z(
      r2,
      s4.sanitizeConfig
    );
    let l2 = Bo(a4, s4.conversionConfig, s4.settings);
    return o4 && (l2 = Object.assign(l2, o4)), this.replace(e, s4.name, l2);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = false) {
    const t = new sa();
    [...this.blocks].forEach((i) => {
      t.add(async () => {
        await this.removeBlock(i, false);
      });
    }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o4) => {
      t.keydown(o4);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o4) => {
      t.keyup(o4);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o4) => {
      t.dragOver(o4);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o4) => {
      t.dragLeave(o4);
    }), e.on("didMutated", (o4) => this.blockDidMutated(Ao, o4, {
      index: this.getBlockIndex(o4)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o4) {
    const i = new CustomEvent(e, {
      detail: {
        target: new J(t),
        ...o4
      }
    });
    return this.eventsDispatcher.emit($o, {
      event: i
    }), t;
  }
};
var aa = class extends E {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: true,
      img: {
        src: true,
        width: true,
        height: true
      },
      a: {
        href: true
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === true);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o4) => {
      o4.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === true)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new b(), ge.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o4 } = this.Editor;
        if (o4.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    b.get().removeAllRanges(), this.allBlocksSelected = false;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o4;
    isNaN(e) ? o4 = t.currentBlock : o4 = t.getBlockByIndex(e), o4.selected = false, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = false) {
    const { BlockManager: o4, Caret: i, RectangleSelection: s4 } = this.Editor;
    this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
    const r2 = e && e instanceof KeyboardEvent, a4 = r2 && Po(e.keyCode);
    if (this.anyBlockSelected && r2 && a4 && !b.isSelectionExists) {
      const l2 = o4.removeSelectedBlocks();
      o4.insertDefaultBlockAtIndex(l2, true), i.setToBlock(o4.currentBlock), Fe(() => {
        const c4 = e.key;
        i.insertContentAtCaretPosition(c4.length > 1 ? "" : c4);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s4.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = false;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = u.make("div");
    this.selectedBlocks.forEach((s4) => {
      const r2 = Z(s4.holder.innerHTML, this.sanitizerConfig), a4 = u.make("p");
      a4.innerHTML = r2, t.appendChild(a4);
    });
    const o4 = Array.from(t.childNodes).map((s4) => s4.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o4), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s4) => s4.save())).then((s4) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s4));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o4 = t.getBlockByIndex(e);
    o4 !== void 0 && this.selectBlock(o4);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), b.get().removeAllRanges(), e.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = false, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    ge.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), u.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = true;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o4 = t.inputs;
    if (o4.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = true;
      return;
    }
    if (o4.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = true;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = true);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
  }
};
var Ye = class _Ye extends E {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the block content
   */
  setToBlock(e, t = this.positions.DEFAULT, o4 = 0) {
    var c4;
    const { BlockManager: i, BlockSelection: s4 } = this.Editor;
    if (s4.clearSelection(), !e.focusable) {
      (c4 = window.getSelection()) == null || c4.removeAllRanges(), s4.selectBlock(e), i.currentBlock = e;
      return;
    }
    let r2;
    switch (t) {
      case this.positions.START:
        r2 = e.firstInput;
        break;
      case this.positions.END:
        r2 = e.lastInput;
        break;
      default:
        r2 = e.currentInput;
    }
    if (!r2)
      return;
    let a4, l2 = o4;
    if (t === this.positions.START)
      a4 = u.getDeepestNode(r2, false), l2 = 0;
    else if (t === this.positions.END)
      a4 = u.getDeepestNode(r2, true), l2 = u.getContentLength(a4);
    else {
      const { node: d4, offset: h6 } = u.getNodeByOffset(r2, o4);
      d4 ? (a4 = d4, l2 = h6) : (a4 = u.getDeepestNode(r2, false), l2 = 0);
    }
    this.set(a4, l2), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r2;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o4 = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, s4 = u.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s4, 0);
        break;
      case this.positions.END:
        this.set(s4, u.getContentLength(s4));
        break;
      default:
        o4 && this.set(s4, o4);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: i, bottom: s4 } = b.setCursor(e, t), { innerHeight: r2 } = window;
    i < 0 ? window.scrollBy(0, i - 30) : s4 > r2 && window.scrollBy(0, s4 - r2 + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = b.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o4 = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o4)
        if (u.isNativeInput(o4)) {
          const i = o4, s4 = document.createDocumentFragment(), r2 = i.value.substring(0, i.selectionStart), a4 = i.value.substring(i.selectionStart);
          return s4.textContent = a4, i.value = r2, s4;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o4), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = false) {
    const { BlockManager: t } = this.Editor, { currentBlock: o4, nextBlock: i } = t;
    if (o4 === void 0)
      return false;
    const { nextInput: s4, currentInput: r2 } = o4, a4 = r2 !== void 0 ? Re(r2) : void 0;
    let l2 = i;
    const c4 = e || a4 || !o4.focusable;
    if (s4 && c4)
      return this.setToInput(s4, this.positions.START), true;
    if (l2 === null) {
      if (o4.tool.isDefault || !c4)
        return false;
      l2 = t.insertAtEnd();
    }
    return c4 ? (this.setToBlock(l2, this.positions.START), true) : false;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = false) {
    const { currentBlock: t, previousBlock: o4 } = this.Editor.BlockManager;
    if (!t)
      return false;
    const { previousInput: i, currentInput: s4 } = t, r2 = s4 !== void 0 ? Ne(s4) : void 0, a4 = e || r2 || !t.focusable;
    return i && a4 ? (this.setToInput(i, this.positions.END), true) : o4 !== null && a4 ? (this.setToBlock(o4, this.positions.END), true) : false;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(_Ye.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${_Ye.CSS.shadowCaret}`);
    if (!t)
      return;
    new b().expandToTag(t);
    const i = document.createRange();
    i.selectNode(t), i.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o4 = document.createElement("div"), i = b.get(), s4 = b.range;
    o4.innerHTML = e, Array.from(o4.childNodes).forEach((c4) => t.appendChild(c4)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r2 = t.lastChild;
    s4.deleteContents(), s4.insertNode(t);
    const a4 = document.createRange(), l2 = r2.nodeType === Node.TEXT_NODE ? r2 : r2.firstChild;
    l2 !== null && l2.textContent !== null && a4.setStart(l2, l2.textContent.length), i.removeAllRanges(), i.addRange(a4);
  }
};
var la = class extends E {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o4 } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s4 = t.getBlockByChildNode(e.target);
      if (!(!i || !s4) && s4 !== i) {
        if (i === this.firstSelectedBlock) {
          b.get().removeAllRanges(), i.selected = true, s4.selected = true, o4.clearCache();
          return;
        }
        if (s4 === this.firstSelectedBlock) {
          i.selected = false, s4.selected = false, o4.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s4), this.lastSelectedBlock = s4;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== qn.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * Return boolean is cross block selection started:
   * there should be at least 2 selected blocks
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = true) {
    const { BlockManager: t, BlockSelection: o4 } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o4.clearCache(), b.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s4 = t.blocks[i];
    s4 && (this.lastSelectedBlock.selected !== s4.selected ? (s4.selected = true, o4.clearCache()) : (this.lastSelectedBlock.selected = false, o4.clearCache()), this.lastSelectedBlock = s4, this.Editor.InlineToolbar.close(), s4.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o4, Caret: i } = this.Editor, s4 = t.blocks.indexOf(this.firstSelectedBlock), r2 = t.blocks.indexOf(this.lastSelectedBlock);
    if (o4.anyBlockSelected && s4 > -1 && r2 > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case y.DOWN:
        case y.RIGHT:
          i.setToBlock(t.blocks[Math.max(s4, r2)], i.positions.END);
          break;
        case y.UP:
        case y.LEFT:
          i.setToBlock(t.blocks[Math.min(s4, r2)], i.positions.START);
          break;
        default:
          i.setToBlock(t.blocks[Math.max(s4, r2)], i.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o4, BlockSelection: i } = this.Editor, s4 = o4.blocks.indexOf(e), r2 = o4.blocks.indexOf(t), a4 = e.selected !== t.selected;
    for (let l2 = Math.min(s4, r2); l2 <= Math.max(s4, r2); l2++) {
      const c4 = o4.blocks[l2];
      c4 !== this.firstSelectedBlock && c4 !== (a4 ? e : t) && (o4.blocks[l2].selected = !o4.blocks[l2].selected, i.clearCache());
    }
  }
};
var ca = class extends E {
  constructor() {
    super(...arguments), this.isStartedAtEditor = false;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, true), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, true);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Paste: o4,
      Caret: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((r2) => {
      r2.dropTarget = false;
    }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false;
    const s4 = t.setCurrentBlockByChildNode(e.target);
    if (s4)
      this.Editor.Caret.setToBlock(s4, i.positions.END);
    else {
      const r2 = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r2, i.positions.END);
    }
    await o4.processDataTransfer(e.dataTransfer, true);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
};
var da = 180;
var ua = 400;
var ha = class extends E {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = false, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ua, this.mutationObserver = new MutationObserver((o4) => {
      this.redactorChanged(o4);
    }), this.eventsDispatcher.on($o, (o4) => {
      this.particularBlockChanged(o4.event);
    }), this.eventsDispatcher.on(zo, () => {
      this.disable();
    }), this.eventsDispatcher.on(Uo, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      }
    ), this.disabled = false;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = true;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !A(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(ft, {
      mutations: e
    });
  }
};
var Rn = class Dn extends E {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const t = e.create({}, {}, false);
        if (e.pasteConfig === false) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!A(t.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        S(
          `Paste handling for \xAB${e.name}\xBB Tool hasn't been set up because of the error`,
          "warn",
          t
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: t, Toolbar: o4 } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
      !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o4.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, t = false) {
    const { Tools: o4 } = this.Editor, i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const r2 = e.getData(this.MIME_TYPE), a4 = e.getData("text/plain");
    let l2 = e.getData("text/html");
    if (r2)
      try {
        this.insertEditorJSData(JSON.parse(r2));
        return;
      } catch {
      }
    t && a4.trim() && l2.trim() && (l2 = "<p>" + (l2.trim() ? l2 : a4) + "</p>");
    const c4 = Object.keys(this.toolsTags).reduce((p3, g4) => (p3[g4.toLowerCase()] = this.toolsTags[g4].sanitizationConfig ?? {}, p3), {}), d4 = Object.assign({}, c4, o4.getAllInlineToolsSanitizeConfig(), { br: {} }), h6 = Z(l2, d4);
    !h6.trim() || h6.trim() === a4 || !u.isHTMLString(h6) ? await this.processText(a4) : await this.processText(h6, true);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, t = false) {
    const { Caret: o4, BlockManager: i } = this.Editor, s4 = t ? this.processHTML(e) : this.processPlain(e);
    if (!s4.length)
      return;
    if (s4.length === 1) {
      s4[0].isBlock ? this.processSingleBlock(s4.pop()) : this.processInlinePaste(s4.pop());
      return;
    }
    const a4 = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    s4.map(
      async (l2, c4) => this.insertBlock(l2, c4 === 0 && a4)
    ), i.currentBlock && o4.setToBlock(i.currentBlock, o4.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return te(e) ? [e] : D(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === false)
      return;
    const t = e.pasteConfig.tags || [], o4 = [];
    t.forEach((i) => {
      const s4 = this.collectTagNames(i);
      o4.push(...s4), s4.forEach((r2) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, r2)) {
          S(
            `Paste handler for \xAB${e.name}\xBB Tool on \xAB${r2}\xBB tag is skipped because it is already used by \xAB${this.toolsTags[r2].tool.name}\xBB Tool.`,
            "warn"
          );
          return;
        }
        const a4 = D(i) ? i[r2] : null;
        this.toolsTags[r2.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a4
        };
      });
    }), this.tagsByTool[e.name] = o4.map((i) => i.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === false)
      return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: o4, mimeTypes: i } = t;
    !o4 && !i || (o4 && !Array.isArray(o4) && (S(`\xABextensions\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), o4 = []), i && !Array.isArray(i) && (S(`\xABmimeTypes\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), i = []), i && (i = i.filter((s4) => ei(s4) ? true : (S(`MIME type value \xAB${s4}\xBB for the \xAB${e.name}\xBB Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[e.name] = {
      extensions: o4 || [],
      mimeTypes: i || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === false || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o4]) => {
      o4 instanceof RegExp || S(
        `Pattern ${o4} for \xAB${e.name}\xBB Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: t,
        pattern: o4,
        tool: e
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return u.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let o4;
    o4 = await Promise.all(
      Array.from(e).map((r2) => this.processFile(r2))
    ), o4 = o4.filter((r2) => !!r2);
    const s4 = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o4.forEach(
      (r2, a4) => {
        t.paste(r2.type, r2.event, a4 === 0 && s4);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const t = Jn(e), o4 = Object.entries(this.toolsFiles).find(([r2, { mimeTypes: a4, extensions: l2 }]) => {
      const [c4, d4] = e.type.split("/"), h6 = l2.find((g4) => g4.toLowerCase() === t.toLowerCase()), p3 = a4.find((g4) => {
        const [f2, v4] = g4.split("/");
        return f2 === c4 && (v4 === d4 || v4 === "*");
      });
      return !!h6 || !!p3;
    });
    if (!o4)
      return;
    const [i] = o4;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: t } = this.Editor, o4 = u.make("DIV");
    return o4.innerHTML = e, this.getNodes(o4).map((s4) => {
      let r2, a4 = t.defaultTool, l2 = false;
      switch (s4.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          r2 = u.make("div"), r2.appendChild(s4);
          break;
        case Node.ELEMENT_NODE:
          r2 = s4, l2 = true, this.toolsTags[r2.tagName] && (a4 = this.toolsTags[r2.tagName].tool);
          break;
      }
      const { tags: c4 } = a4.pasteConfig || { tags: [] }, d4 = c4.reduce((g4, f2) => (this.collectTagNames(f2).forEach((O3) => {
        const T3 = D(f2) ? f2[O3] : null;
        g4[O3.toLowerCase()] = T3 || {};
      }), g4), {}), h6 = Object.assign({}, d4, a4.baseSanitizeConfig);
      if (r2.tagName.toLowerCase() === "table") {
        const g4 = Z(r2.outerHTML, h6);
        r2 = u.make("div", void 0, {
          innerHTML: g4
        }).firstChild;
      } else
        r2.innerHTML = Z(r2.innerHTML, h6);
      const p3 = this.composePasteEvent("tag", {
        data: r2
      });
      return {
        content: r2,
        isBlock: l2,
        tool: a4.name,
        event: p3
      };
    }).filter((s4) => {
      const r2 = u.isEmpty(s4.content), a4 = u.isSingleTag(s4.content);
      return !r2 || a4;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e)
      return [];
    const o4 = t;
    return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
      const s4 = u.make("div");
      s4.textContent = i;
      const r2 = this.composePasteEvent("tag", {
        data: s4
      });
      return {
        content: s4,
        tool: o4,
        isBlock: false,
        event: r2
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: o4 } = this.Editor, { currentBlock: i } = o4;
    if (!i || e.tool !== i.name || !u.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: o4 } = this.Editor, { content: i } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < Dn.PATTERN_PROCESSING_MAX_LENGTH) {
      const r2 = await this.processPattern(i.textContent);
      if (r2) {
        const a4 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, l2 = t.paste(r2.tool, r2.event, a4);
        o4.setToBlock(l2, o4.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const r2 = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        false,
        Z(i.innerHTML, r2)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const t = this.toolsPatterns.find((i) => {
      const s4 = i.pattern.exec(e);
      return s4 ? e === s4.shift() : false;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, t = false) {
    const { BlockManager: o4, Caret: i } = this.Editor, { currentBlock: s4 } = o4;
    let r2;
    if (t && s4 && s4.isEmpty) {
      r2 = o4.paste(e.tool, e.event, true), i.setToBlock(r2, i.positions.END);
      return;
    }
    r2 = o4.paste(e.tool, e.event), i.setToBlock(r2, i.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: o4, Tools: i } = this.Editor;
    yt(
      e,
      (r2) => i.blockTools.get(r2).sanitizeConfig
    ).forEach(({ tool: r2, data: a4 }, l2) => {
      let c4 = false;
      l2 === 0 && (c4 = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const d4 = t.insert({
        tool: r2,
        data: a4,
        replace: c4
      });
      o4.setToBlock(d4, o4.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, t, o4) {
    const i = Object.keys(this.toolsTags), s4 = e, { tool: r2 } = this.toolsTags[s4.tagName] || {}, a4 = this.tagsByTool[r2 == null ? void 0 : r2.name] || [], l2 = i.includes(s4.tagName), c4 = u.blockElements.includes(s4.tagName.toLowerCase()), d4 = Array.from(s4.children).some(
      ({ tagName: p3 }) => i.includes(p3) && !a4.includes(p3)
    ), h6 = Array.from(s4.children).some(
      ({ tagName: p3 }) => u.blockElements.includes(p3.toLowerCase())
    );
    if (!c4 && !l2 && !d4)
      return o4.appendChild(s4), [...t, o4];
    if (l2 && !d4 || c4 && !h6 && !d4)
      return [...t, o4, s4];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o4;
    const i = (s4, r2) => {
      if (u.isEmpty(r2) && !u.isSingleTag(r2))
        return s4;
      const a4 = s4[s4.length - 1];
      let l2 = new DocumentFragment();
      switch (a4 && u.isFragment(a4) && (l2 = s4.pop()), r2.nodeType) {
        case Node.ELEMENT_NODE:
          if (o4 = this.processElementNode(r2, s4, l2), o4)
            return o4;
          break;
        case Node.TEXT_NODE:
          return l2.appendChild(r2), [...s4, l2];
        default:
          return [...s4, l2];
      }
      return [...s4, ...Array.from(r2.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
Rn.PATTERN_PROCESSING_MAX_LENGTH = 450;
var pa = Rn;
var fa = class extends E {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = false;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o4 = [];
    Array.from(t.entries()).forEach(([i, s4]) => {
      s4.isReadOnlySupported || o4.push(i);
    }), this.toolsDontSupportReadOnly = o4, this.config.readOnly && o4.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, true);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */
  async toggle(e = !this.readOnlyEnabled, t = false) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const o4 = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const s4 in this.Editor)
      this.Editor[s4].toggleReadOnly && this.Editor[s4].toggleReadOnly(e);
    if (o4 === e)
      return this.readOnlyEnabled;
    if (t)
      return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const i = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new Ho(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
};
var Be = class _Be extends E {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = false, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = false, this.isScrolling = false, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o4 = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o4.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
    const s4 = [
      `.${R.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], r2 = o4.closest("." + this.Editor.UI.CSS.editorWrapper), a4 = s4.some((l2) => !!o4.closest(l2));
    !r2 || a4 || (this.mousedown = true, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = false;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, false), this.listeners.on(document.body, "mousemove", dt((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: true
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", dt((t) => {
      this.processScroll(t);
    }, 10), {
      passive: true
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, false);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(u.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = false;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o4 = u.make("div", _Be.CSS.overlay, {}), i = u.make("div", _Be.CSS.overlayContainer, {}), s4 = u.make("div", _Be.CSS.rect, {});
    return i.appendChild(s4), o4.appendChild(i), t.appendChild(o4), this.overlayRectangle = s4, {
      container: t,
      overlay: o4
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o4, index: i } = this.genInfoForMouseSelection(), s4 = this.startX > t && this.mouseX > t, r2 = this.startX < o4 && this.mouseX < o4;
    this.rectCrossesBlocks = !(s4 || r2), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o4 of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o4);
    if (!this.rectCrossesBlocks && t)
      for (const o4 of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o4);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2, o4 = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o4), s4 = this.Editor.BlockManager.getBlockByChildNode(i);
    let r2;
    s4 !== void 0 && (r2 = this.Editor.BlockManager.blocks.findIndex((h6) => h6.holder === s4.holder));
    const a4 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + R.CSS.content), l2 = Number.parseInt(window.getComputedStyle(a4).width, 10) / 2, c4 = t - l2, d4 = t + l2;
    return {
      index: r2,
      leftPos: c4,
      rightPos: d4
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o4 = this.stackOfSelected.length, i = 1, s4 = -1, r2 = 0;
    if (t)
      return;
    const a4 = this.stackOfSelected[o4 - 1] - this.stackOfSelected[o4 - 2] > 0;
    let l2 = r2;
    o4 > 1 && (l2 = a4 ? i : s4);
    const c4 = e > this.stackOfSelected[o4 - 1] && l2 === i, d4 = e < this.stackOfSelected[o4 - 1] && l2 === s4, p3 = !(c4 || d4 || l2 === r2);
    if (!p3 && (e > this.stackOfSelected[o4 - 1] || this.stackOfSelected[o4 - 1] === void 0)) {
      let v4 = this.stackOfSelected[o4 - 1] + 1 || e;
      for (v4; v4 <= e; v4++)
        this.addBlockInSelection(v4);
      return;
    }
    if (!p3 && e < this.stackOfSelected[o4 - 1]) {
      for (let v4 = this.stackOfSelected[o4 - 1] - 1; v4 >= e; v4--)
        this.addBlockInSelection(v4);
      return;
    }
    if (!p3)
      return;
    let g4 = o4 - 1, f2;
    for (e > this.stackOfSelected[o4 - 1] ? f2 = () => e > this.stackOfSelected[g4] : f2 = () => e < this.stackOfSelected[g4]; f2(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g4]), this.stackOfSelected.pop(), g4--;
  }
};
var ga = class extends E {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o4, BlockManager: i } = this.Editor;
      if (e.length === 0)
        i.insert();
      else {
        const s4 = e.map(({ type: r2, data: a4, tunes: l2, id: c4 }) => {
          o4.available.has(r2) === false && (X(`Tool \xAB${r2}\xBB is not found. Check 'tools' property at the Editor.js config.`, "warn"), a4 = this.composeStubDataForTool(r2, a4, c4), r2 = o4.stubTool);
          let d4;
          try {
            d4 = i.composeBlock({
              id: c4,
              tool: r2,
              data: a4,
              tunes: l2
            });
          } catch (h6) {
            S(`Block \xAB${r2}\xBB skipped because of plugins error`, "error", {
              data: a4,
              error: h6
            }), a4 = this.composeStubDataForTool(r2, a4, c4), r2 = o4.stubTool, d4 = i.composeBlock({
              id: c4,
              tool: r2,
              data: a4,
              tunes: l2
            });
          }
          return d4;
        });
        i.insertMany(s4);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o4) {
    const { Tools: i } = this.Editor;
    let s4 = e;
    if (i.unavailable.has(e)) {
      const r2 = i.unavailable.get(e).toolbox;
      r2 !== void 0 && r2[0].title !== void 0 && (s4 = r2[0].title);
    }
    return {
      savedData: {
        id: o4,
        type: e,
        data: t
      },
      title: s4
    };
  }
};
var ma = class extends E {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o4 = e.blocks, i = [];
    try {
      o4.forEach((a4) => {
        i.push(this.getSavedData(a4));
      });
      const s4 = await Promise.all(i), r2 = await yt(s4, (a4) => t.blockTools.get(a4).sanitizeConfig);
      return this.makeOutput(r2);
    } catch (s4) {
      X("Saving failed due to the Error %o", "error", s4);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o4 = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o4
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o4, tool: i, data: s4, tunes: r2, isValid: a4 }) => {
      if (!a4) {
        S(`Block \xAB${i}\xBB skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(s4);
        return;
      }
      const l2 = {
        id: o4,
        type: i,
        data: s4,
        ...!V(r2) && {
          tunes: r2
        }
      };
      t.push(l2);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.31.5"
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var n2 = document.createElement("style");
      n2.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n2);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var ba = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function va(n2) {
  const e = document.createElement("div");
  e.innerHTML = n2.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
var fo = class _fo {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o4, readOnly: i }) {
    this.api = o4, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : _fo.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? false;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = va(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: true
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: ba,
      title: "Text"
    };
  }
};
var go = class {
  constructor() {
    this.commandName = "bold";
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return {
      icon: Ki,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
};
go.isInline = true;
go.title = "Bold";
var mo = class {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Ji, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
};
mo.isInline = true;
mo.title = "Italic";
var bo = class {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = false, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: true,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Co, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.inputOpened ? (this.closeActions(false), this.checkState()) : (this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close());
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = ns, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.defaultValue = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = Co, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(false) : this.openActions(true);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = false) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = true;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = true) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new b();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = false;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), S("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o4 = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o4 && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, false, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
};
bo.isInline = true;
bo.title = "Link";
var Fn = class {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
  }
  /**
   * Returns tool's UI config
   */
  async render() {
    const e = b.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (t === void 0)
      return [];
    const o4 = this.toolsAPI.getBlockTools(), i = await Yo(t, o4);
    if (i.length === 0)
      return [];
    const s4 = i.reduce((c4, d4) => {
      var h6;
      return (h6 = d4.toolbox) == null || h6.forEach((p3) => {
        c4.push({
          icon: p3.icon,
          title: z.t(K.toolNames, p3.title),
          name: d4.name,
          closeOnActivate: true,
          onActivate: async () => {
            const g4 = await this.blocksAPI.convert(t.id, d4.name, p3.data);
            this.caretAPI.setToBlock(g4, "end");
          }
        });
      }), c4;
    }, []), r2 = await t.getActiveToolboxEntry(), a4 = r2 !== void 0 ? r2.icon : Go, l2 = !be();
    return {
      icon: a4,
      name: "convert-to",
      hint: {
        title: this.i18nAPI.t("Convert to")
      },
      children: {
        searchable: l2,
        items: s4,
        onOpen: () => {
          l2 && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          l2 && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
        }
      }
    };
  }
};
Fn.isInline = true;
var jn = class {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = u.make("div", this.CSS.wrapper), t = is, o4 = u.make("div", this.CSS.info), i = u.make("div", this.CSS.title, {
      textContent: this.title
    }), s4 = u.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o4.appendChild(i), o4.appendChild(s4), e.appendChild(o4), e;
  }
};
jn.isReadOnlySupported = true;
var ka = class extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[We.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Allows inline tool to be available in read-only mode
   * Can be used, for example, by comments tool
   */
  get isReadOnlySupported() {
    return this.constructable[We.IsReadOnlySupported] ?? false;
  }
};
var ya = class extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e
    });
  }
};
var j = class _j extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new _j(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new _j(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new _j(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new _j(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new _j(e);
  }
};
var wa = Object.defineProperty;
var Ea = Object.getOwnPropertyDescriptor;
var Hn = (n2, e, t, o4) => {
  for (var i = o4 > 1 ? void 0 : o4 ? Ea(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
    (r2 = n2[s4]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
  return o4 && i && wa(e, t, i), i;
};
var vo = class extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Block, this.inlineTools = new j(), this.tunes = new j();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o4) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o4,
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[pe.IsReadOnlySupported] === true;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[pe.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[pe.Toolbox], t = this.config[Pe.Toolbox];
    if (!V(e) && t !== false)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o4, i) => {
        const s4 = e[i];
        return s4 ? {
          ...s4,
          ...o4
        } : o4;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[pe.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[Pe.EnabledInlineTools] || false;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[Pe.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[pe.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (V(e))
      return t;
    const o4 = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const s4 = e[i];
        D(s4) ? o4[i] = Object.assign({}, t, s4) : o4[i] = s4;
      }
    return o4;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
};
Hn([
  me
], vo.prototype, "sanitizeConfig", 1);
Hn([
  me
], vo.prototype, "baseSanitizeConfig", 1);
var xa = class {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o4) {
    this.api = o4, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o4 = false, ...i } = this.config[e], s4 = this.getConstructor(t), r2 = t[mt.IsTune];
    return new s4({
      name: e,
      constructable: t,
      config: i,
      api: this.api.getMethodsForTool(e, r2),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o4
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (true) {
      case e[We.IsInline]:
        return ka;
      case e[mt.IsTune]:
        return ya;
      default:
        return vo;
    }
  }
};
var $n = class {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Xi,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o4 = t.holder, i = o4.getBoundingClientRect();
    let s4 = Math.abs(window.innerHeight - o4.offsetHeight);
    i.top < window.innerHeight && (s4 = window.scrollY + o4.offsetHeight), window.scrollTo(0, s4), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(true);
  }
};
$n.isTune = true;
var zn = class {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Gi,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
};
zn.isTune = true;
var Un = class {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Zi,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o4 = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o4)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, s4 = o4.holder, r2 = i.getBoundingClientRect(), a4 = s4.getBoundingClientRect();
    let l2;
    a4.top > 0 ? l2 = Math.abs(r2.top) - Math.abs(a4.top) : l2 = Math.abs(r2.top) + a4.height, window.scrollBy(0, -1 * l2), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(true);
  }
};
Un.isTune = true;
var Ba = Object.defineProperty;
var Ca = Object.getOwnPropertyDescriptor;
var Ta = (n2, e, t, o4) => {
  for (var i = o4 > 1 ? void 0 : o4 ? Ca(e, t) : e, s4 = n2.length - 1, r2; s4 >= 0; s4--)
    (r2 = n2[s4]) && (i = (o4 ? r2(e, t, i) : r2(i)) || i);
  return o4 && i && Ba(e, t, i), i;
};
var Wn = class extends E {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new j(), this.toolsUnavailable = new j();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = ut({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new xa(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Qn(t, (o4) => {
      this.toolPrepareMethodSuccess(o4);
    }, (o4) => {
      this.toolPrepareMethodFallback(o4);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      A(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      convertTo: {
        class: Fn,
        isInternal: true
      },
      link: {
        class: bo,
        isInternal: true
      },
      bold: {
        class: go,
        isInternal: true
      },
      italic: {
        class: mo,
        isInternal: true
      },
      paragraph: {
        class: fo,
        inlineToolbar: true,
        isInternal: true
      },
      stub: {
        class: jn,
        isInternal: true
      },
      moveUp: {
        class: Un,
        isInternal: true
      },
      delete: {
        class: zn,
        isInternal: true
      },
      moveDown: {
        class: $n,
        isInternal: true
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const i = ["render"].filter((s4) => !t.create()[s4]);
      if (i.length) {
        S(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          i
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o4, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: A(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o4,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== false) {
      if (e.enabledInlineTools === true) {
        e.inlineTools = new j(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new j(
        /** Prepend ConvertTo Inline Tool */
        ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== false) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new j(
          e.enabledBlockTunes.map((o4) => [o4, this.blockTunes.get(o4)])
        );
        e.tunes = new j([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new j(
          this.config.tunes.map((o4) => [o4, this.blockTunes.get(o4)])
        );
        e.tunes = new j([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!A(t) && !A(t.class))
          throw Error(
            `Tool \xAB${e}\xBB must be a constructor function or an object with function in the \xABclass\xBB property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      D(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
};
Ta([
  me
], Wn.prototype, "getAllInlineToolsSanitizeConfig", 1);
var Sa = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
var Ia = class extends E {
  constructor() {
    super(...arguments), this.isMobile = false, this.contentRectCache = null, this.resizeDebouncer = Eo(() => {
      this.windowResize();
    }, 200), this.selectionChangeDebounced = Eo(() => {
      this.selectionChanged();
    }, da), this.documentTouchedListener = (e) => {
      this.documentTouched(e);
    };
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache !== null)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${R.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.unbindReadOnlySensitiveListeners() : window.requestIdleCallback(() => {
      this.bindReadOnlySensitiveListeners();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o4 } = this.Editor;
    return !!(t.opened || o4.opened || e.toolbox.opened);
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? true : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof ce).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "", this.unbindReadOnlyInsensitiveListeners();
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o4 } = this.Editor;
    t.close(), o4.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and save the result
   */
  setIsMobile() {
    const e = window.innerWidth < Ro;
    e !== this.isMobile && this.eventsDispatcher.emit(Te, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = u.getHolder(this.config.holder), this.nodes.wrapper = u.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = u.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper), this.bindReadOnlyInsensitiveListeners();
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (u.get(e))
      return;
    const t = u.make("style", null, {
      id: e,
      textContent: Sa.toString()
    });
    this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), u.prepend(document.head, t);
  }
  /**
   * Adds listeners that should work both in read-only and read-write modes
   */
  bindReadOnlyInsensitiveListeners() {
    this.listeners.on(document, "selectionchange", this.selectionChangeDebounced), this.listeners.on(window, "resize", this.resizeDebouncer, {
      passive: true
    }), this.listeners.on(this.nodes.redactor, "mousedown", this.documentTouchedListener, {
      capture: true,
      passive: true
    }), this.listeners.on(this.nodes.redactor, "touchstart", this.documentTouchedListener, {
      capture: true,
      passive: true
    });
  }
  /**
   * Removes listeners that should work both in read-only and read-write modes
   */
  unbindReadOnlyInsensitiveListeners() {
    this.listeners.off(document, "selectionchange", this.selectionChangeDebounced), this.listeners.off(window, "resize", this.resizeDebouncer), this.listeners.off(this.nodes.redactor, "mousedown", this.documentTouchedListener), this.listeners.off(this.nodes.redactor, "touchstart", this.documentTouchedListener);
  }
  /**
   * Adds listeners that should work only in read-only mode
   */
  bindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e) => {
      this.redactorClicked(e);
    }, false), this.readOnlyMutableListeners.on(document, "keydown", (e) => {
      this.documentKeydown(e);
    }, true), this.readOnlyMutableListeners.on(document, "mousedown", (e) => {
      this.documentClicked(e);
    }, true), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", dt((t) => {
      const o4 = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o4 && e !== o4 && (e = o4, this.eventsDispatcher.emit(ln, {
        block: this.Editor.BlockManager.getBlockByChildNode(o4)
      }));
    }, 20), {
      passive: true
    });
  }
  /**
   * Unbind events that should work only in read-only mode
   */
  unbindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case y.ENTER:
        this.enterPressed(e);
        break;
      case y.BACKSPACE:
      case y.DELETE:
        this.backspacePressed(e);
        break;
      case y.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o4 = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o4 === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o4 || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o4, Caret: i } = this.Editor;
    if (o4.anyBlockSelected && !b.isSelectionExists) {
      const s4 = t.removeSelectedBlocks(), r2 = t.insertDefaultBlockAtIndex(s4, true);
      i.setToBlock(r2, i.positions.START), o4.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o4 } = this.Editor;
    if (this.someToolbarOpened)
      return;
    const i = t.currentBlockIndex >= 0;
    if (o4.anyBlockSelected && !b.isSelectionExists) {
      o4.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const s4 = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(s4), this.Editor.Toolbar.moveAndOpen(s4);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var a4, l2;
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const i = (a4 = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : a4.contains(t), s4 = (l2 = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : l2.contains(t), r2 = i || s4;
    if (this.Editor.BlockSettings.opened && !r2) {
      this.Editor.BlockSettings.close();
      const c4 = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(c4);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o4 = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o4, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.ReadOnly.isEnabled || this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!b.isCollapsed)
      return;
    const t = e.target, o4 = e.metaKey || e.ctrlKey, i = u.getClosestAnchor(t);
    if (i && o4) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const s4 = i.getAttribute("href"), r2 = oi(s4);
      ii(r2);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o4 = u.offset(t.holder).bottom, i = e.pageY, { BlockSelection: s4 } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !s4.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o4 < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: a4, Caret: l2, Toolbar: c4 } = this.Editor;
      (!a4.lastBlock.tool.isDefault || !a4.lastBlock.isEmpty) && a4.insertAtEnd(), l2.setToTheLastBlock(), c4.moveAndOpen(a4.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o4 = b.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o4) {
      b.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o4.closest(`.${R.CSS.content}`);
    (i === null || i.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o4) || this.Editor.InlineToolbar.close(), !(o4.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o4), this.Editor.InlineToolbar.tryToShow(true));
  }
  /**
   * Editor.js provides and ability to show placeholders for empty contenteditable elements
   *
   * This method watches for input and focus events and toggles 'data-empty' attribute
   * to workaroud the case, when inputs contains only <br>s and has no visible content
   * Then, CSS could rely on this attribute to show placeholders
   */
  enableInputsEmptyMark() {
    function e(t) {
      const o4 = t.target;
      Do(o4);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
};
var Oa = {
  // API Modules
  BlocksAPI: gi,
  CaretAPI: bi,
  EventsAPI: vi,
  I18nAPI: kt,
  API: ki,
  InlineToolbarAPI: yi,
  ListenersAPI: wi,
  NotifierAPI: Ci,
  ReadOnlyAPI: Ti,
  SanitizerAPI: Li,
  SaverAPI: Pi,
  SelectionAPI: Ni,
  ToolsAPI: Ri,
  StylesAPI: Di,
  ToolbarAPI: Fi,
  TooltipAPI: Ui,
  UiAPI: Wi,
  // Toolbar Modules
  BlockSettings: ms,
  Toolbar: Bs,
  InlineToolbar: Cs,
  // Modules
  BlockEvents: na,
  BlockManager: ra,
  BlockSelection: aa,
  Caret: Ye,
  CrossBlockSelection: la,
  DragNDrop: ca,
  ModificationsObserver: ha,
  Paste: pa,
  ReadOnly: fa,
  RectangleSelection: Be,
  Renderer: ga,
  Saver: ma,
  Tools: Wn,
  UI: Ia
};
var _a = class {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Oe();
    let t, o4;
    this.isReady = new Promise((i, s4) => {
      t = i, o4 = s4;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: s4, UI: r2, ModificationsObserver: a4 } = this.moduleInstances;
      r2.checkEmptiness(), a4.enable(), this.configuration.autofocus === true && this.configuration.readOnly !== true && s4.setToBlock(i.blocks[0], s4.positions.START), t();
    }).catch((i) => {
      S(`Editor.js is not ready because of ${i}`, "error"), o4(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o4, i;
    D(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, ht(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Lo.VERBOSE), Zn(this.config.logLevel), ht(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || {
      p: true,
      b: true,
      a: true
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : false, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : true, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || false, (o4 = this.config.i18n) != null && o4.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
    if (te(t) && !u.get(t))
      throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
    if (t && D(t) && !u.isElement(t))
      throw Error("\xABholder\xBB value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (t, o4) => t.then(async () => {
        try {
          await this.moduleInstances[o4].prepare();
        } catch (i) {
          if (i instanceof Ho)
            throw new Error(i.message);
          S(`Module ${o4} was skipped because of %o`, "warn", i);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Oa).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o4) {
        S("[constructModules]", `Module ${e} skipped because`, "error", o4);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o4 in this.moduleInstances)
      o4 !== e && (t[o4] = this.moduleInstances[o4]);
    return t;
  }
};
var Aa = class {
  /** Editor version */
  static get version() {
    return "2.31.5";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    D(e) && A(e.onReady) && (t = e.onReady);
    const o4 = new _a(e);
    this.isReady = o4.isReady.then(() => {
      this.exportAPI(o4), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o4 = () => {
      Object.values(e.moduleInstances).forEach((s4) => {
        A(s4.destroy) && s4.destroy(), s4.listeners.removeAll();
      }), zi(), e = null;
      for (const s4 in this)
        Object.prototype.hasOwnProperty.call(this, s4) && delete this[s4];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((s4) => {
      this[s4] = e[s4];
    }), this.destroy = o4, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([s4, r2]) => {
      Object.entries(r2).forEach(([a4, l2]) => {
        this[l2] = e.moduleInstances.API.methods[s4][a4];
      });
    });
  }
};

// node_modules/@editorjs/header/dist/header.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")), document.head.appendChild(e);
    }
  } catch (n2) {
    console.error("vite-plugin-css-injected-by-js", n2);
  }
})();
var a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>';
var l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>';
var o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>';
var h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>';
var d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>';
var u2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
var g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
var v = class {
  constructor({ data: e, config: t, api: s4, readOnly: r2 }) {
    this.api = s4, this.readOnly = r2, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Styles
   */
  get _CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "ce-header"
    };
  }
  /**
   * Check if data is valid
   * 
   * @param {any} data - data to check
   * @returns {data is HeaderData}
   * @private
   */
  isHeaderData(e) {
    return e.text !== void 0;
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: true,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    }));
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    this._element.insertAdjacentHTML("beforeend", e.text);
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      export: "text",
      // use 'text' property for other blocks
      import: "text"
      // fill 'text' property from other block's export string
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: false,
      text: {}
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: a
      },
      {
        number: 2,
        tag: "H2",
        svg: l
      },
      {
        number: 3,
        tag: "H3",
        svg: o
      },
      {
        number: 4,
        tag: "H4",
        svg: h
      },
      {
        number: 5,
        tag: "H5",
        svg: d
      },
      {
        number: 6,
        tag: "H6",
        svg: u2
      }
    ];
    return this._settings.levels ? e.filter(
      (t) => this._settings.levels.includes(t.number)
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const s4 = t.data;
      let r2 = this.defaultLevel.number;
      switch (s4.tagName) {
        case "H1":
          r2 = 1;
          break;
        case "H2":
          r2 = 2;
          break;
        case "H3":
          r2 = 3;
          break;
        case "H4":
          r2 = 4;
          break;
        case "H5":
          r2 = 5;
          break;
        case "H6":
          r2 = 6;
          break;
      }
      this._settings.levels && (r2 = this._settings.levels.reduce((n2, i) => Math.abs(i - r2) < Math.abs(n2 - r2) ? i : n2)), this.data = {
        level: r2,
        text: s4.innerHTML
      };
    }
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: g,
      title: "Heading"
    };
  }
};

// node_modules/@editorjs/list/dist/editorjs-list.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('.cdx-list{margin:0;padding:0;outline:none;display:grid;counter-reset:item;gap:var(--spacing-s);padding:var(--spacing-xs);--spacing-s: 8px;--spacing-xs: 6px;--list-counter-type: numeric;--radius-border: 5px;--checkbox-background: #fff;--color-border: #C9C9C9;--color-bg-checked: #369FFF;--line-height: 1.45em;--color-bg-checked-hover: #0059AB;--color-tick: #fff;--size-checkbox: 1.2em}.cdx-list__item{line-height:var(--line-height);display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;grid-template-areas:"checkbox content" ". child"}.cdx-list__item-children{display:grid;grid-area:child;gap:var(--spacing-s);padding-top:var(--spacing-s)}.cdx-list__item [contenteditable]{outline:none}.cdx-list__item-content{word-break:break-word;white-space:pre-wrap;grid-area:content;padding-left:var(--spacing-s)}.cdx-list__item:before{counter-increment:item;white-space:nowrap}.cdx-list-ordered .cdx-list__item:before{content:counters(item,".",var(--list-counter-type)) "."}.cdx-list-ordered{counter-reset:item}.cdx-list-unordered .cdx-list__item:before{content:"\u2022"}.cdx-list-checklist .cdx-list__item:before{content:""}.cdx-list__settings .cdx-settings-button{width:50%}.cdx-list__checkbox{padding-top:calc((var(--line-height) - var(--size-checkbox)) / 2);grid-area:checkbox;width:var(--size-checkbox);height:var(--size-checkbox);display:flex;cursor:pointer}.cdx-list__checkbox svg{opacity:0;height:var(--size-checkbox);width:var(--size-checkbox);left:-1px;top:-1px;position:absolute}@media (hover: hover){.cdx-list__checkbox:not(.cdx-list__checkbox--no-hover):hover .cdx-list__checkbox-check svg{opacity:1}}.cdx-list__checkbox--checked{line-height:var(--line-height)}@media (hover: hover){.cdx-list__checkbox--checked:not(.cdx-list__checkbox--checked--no-hover):hover .cdx-checklist__checkbox-check{background:var(--color-bg-checked-hover);border-color:var(--color-bg-checked-hover)}}.cdx-list__checkbox--checked .cdx-list__checkbox-check{background:var(--color-bg-checked);border-color:var(--color-bg-checked)}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg{opacity:1}.cdx-list__checkbox--checked .cdx-list__checkbox-check svg path{stroke:var(--color-tick)}.cdx-list__checkbox--checked .cdx-list__checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}.cdx-list__checkbox-check{cursor:pointer;display:inline-block;position:relative;margin:0 auto;width:var(--size-checkbox);height:var(--size-checkbox);box-sizing:border-box;border-radius:var(--radius-border);border:1px solid var(--color-border);background:var(--checkbox-background)}.cdx-list__checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:var(--color-bg-checked);visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}.cdx-list__checkbox-check--disabled{pointer-events:none}.cdx-list-start-with-field{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-list-start-with-field--invalid{background:#FFECED;border:1px solid #E13F3F}.cdx-list-start-with-field--invalid .cdx-list-start-with-field__input{color:#e13f3f}.cdx-list-start-with-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - var(--toolbox-buttons-size) - var(--icon-margin-right))}.cdx-list-start-with-field__input::placeholder{color:var(--grayText);font-weight:500}')), document.head.appendChild(e);
    }
  } catch (c4) {
    console.error("vite-plugin-css-injected-by-js", c4);
  }
})();
var Ct2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>';
var Ae2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
var $e2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
var Be2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
var St2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.2L10 7.4135C10 7.32872 9.90111 7.28241 9.83598 7.33668L7 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
var Ot2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 9.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 7.01L10 7" stroke="black" stroke-width="1.8" stroke-linecap="round"/></svg>';
var kt2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2087 14.2H13.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M10 14.2L10 7.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
var _t2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0087 14.2H16" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M7 14.2L7.78865 12M13 14.2L12.1377 12M7.78865 12C7.78865 12 9.68362 7 10 7C10.3065 7 12.1377 12 12.1377 12M7.78865 12L12.1377 12" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
var Et2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2087 14.2H14.2" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M11.5 14.5C11.5 14.5 11 13.281 11 12.5M7 9.5C7 9.5 7.5 8.5 9 8.5C10.5 8.5 11 9.5 11 10.5L11 11.5M11 11.5L11 12.5M11 11.5C11 11.5 7 11 7 13C7 15.3031 11 15 11 12.5" stroke="black" stroke-width="1.6" stroke-linecap="round"/></svg>';
var It2 = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 14.2L8 7.4135C8 7.32872 7.90111 7.28241 7.83598 7.33668L5 9.7" stroke="black" stroke-width="1.6" stroke-linecap="round"/><path d="M14 13L16.4167 10.7778M16.4167 10.7778L14 8.5M16.4167 10.7778H11.6562" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var A2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wt2(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n2 = function r2() {
      return this instanceof r2 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n2.prototype = t.prototype;
  } else
    n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e).forEach(function(r2) {
    var i = Object.getOwnPropertyDescriptor(e, r2);
    Object.defineProperty(n2, r2, i.get ? i : {
      enumerable: true,
      get: function() {
        return e[r2];
      }
    });
  }), n2;
}
var c = {};
var V2 = {};
var Y2 = {};
Object.defineProperty(Y2, "__esModule", { value: true });
Y2.allInputsSelector = Pt2;
function Pt2() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
  var t = Y2;
  Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
    return t.allInputsSelector;
  } });
})(V2);
var k = {};
var J2 = {};
Object.defineProperty(J2, "__esModule", { value: true });
J2.isNativeInput = jt2;
function jt2(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : false;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
  var t = J2;
  Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
    return t.isNativeInput;
  } });
})(k);
var Fe2 = {};
var Q = {};
Object.defineProperty(Q, "__esModule", { value: true });
Q.append = Tt2;
function Tt2(e, t) {
  Array.isArray(t) ? t.forEach(function(n2) {
    e.appendChild(n2);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
  var t = Q;
  Object.defineProperty(e, "append", { enumerable: true, get: function() {
    return t.append;
  } });
})(Fe2);
var Z2 = {};
var x = {};
Object.defineProperty(x, "__esModule", { value: true });
x.blockElements = Lt2;
function Lt2() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
  var t = x;
  Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
    return t.blockElements;
  } });
})(Z2);
var Re2 = {};
var ee2 = {};
Object.defineProperty(ee2, "__esModule", { value: true });
ee2.calculateBaseline = Mt2;
function Mt2(e) {
  var t = window.getComputedStyle(e), n2 = parseFloat(t.fontSize), r2 = parseFloat(t.lineHeight) || n2 * 1.2, i = parseFloat(t.paddingTop), a4 = parseFloat(t.borderTopWidth), l2 = parseFloat(t.marginTop), s4 = n2 * 0.8, o4 = (r2 - n2) / 2, d4 = l2 + a4 + i + o4 + s4;
  return d4;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
  var t = ee2;
  Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
    return t.calculateBaseline;
  } });
})(Re2);
var qe2 = {};
var te2 = {};
var ne2 = {};
var re2 = {};
Object.defineProperty(re2, "__esModule", { value: true });
re2.isContentEditable = Nt2;
function Nt2(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
  var t = re2;
  Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
    return t.isContentEditable;
  } });
})(ne2);
Object.defineProperty(te2, "__esModule", { value: true });
te2.canSetCaret = Bt2;
var At2 = k;
var $t2 = ne2;
function Bt2(e) {
  var t = true;
  if ((0, At2.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = false;
        break;
    }
  else
    t = (0, $t2.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
  var t = te2;
  Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
    return t.canSetCaret;
  } });
})(qe2);
var $2 = {};
var ie = {};
function Wt2(e, t, n2) {
  const r2 = n2.value !== void 0 ? "value" : "get", i = n2[r2], a4 = `#${t}Cache`;
  if (n2[r2] = function(...l2) {
    return this[a4] === void 0 && (this[a4] = i.apply(this, l2)), this[a4];
  }, r2 === "get" && n2.set) {
    const l2 = n2.set;
    n2.set = function(s4) {
      delete e[a4], l2.apply(this, s4);
    };
  }
  return n2;
}
function Ue2() {
  const e = {
    win: false,
    mac: false,
    x11: false,
    linux: false
  }, t = Object.keys(e).find((n2) => window.navigator.appVersion.toLowerCase().indexOf(n2) !== -1);
  return t !== void 0 && (e[t] = true), e;
}
function ae2(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function Dt2(e) {
  return !ae2(e);
}
var Ht2 = () => typeof window < "u" && window.navigator !== null && ae2(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Ft2(e) {
  const t = Ue2();
  return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function Rt2(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function qt2(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n2 = window.getSelection(), r2 = document.createRange();
  if (r2.selectNode(t), n2 === null)
    throw new Error("Cannot copy text to clipboard");
  n2.removeAllRanges(), n2.addRange(r2), document.execCommand("copy"), document.body.removeChild(t);
}
function Ut2(e, t, n2) {
  let r2;
  return (...i) => {
    const a4 = this, l2 = () => {
      r2 = void 0, n2 !== true && e.apply(a4, i);
    }, s4 = n2 === true && r2 !== void 0;
    window.clearTimeout(r2), r2 = window.setTimeout(l2, t), s4 && e.apply(a4, i);
  };
}
function S2(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Kt2(e) {
  return S2(e) === "boolean";
}
function Ke2(e) {
  return S2(e) === "function" || S2(e) === "asyncfunction";
}
function zt2(e) {
  return Ke2(e) && /^\s*class\s+/.test(e.toString());
}
function Xt2(e) {
  return S2(e) === "number";
}
function M(e) {
  return S2(e) === "object";
}
function Gt2(e) {
  return Promise.resolve(e) === e;
}
function Vt2(e) {
  return S2(e) === "string";
}
function Yt2(e) {
  return S2(e) === "undefined";
}
function X2(e, ...t) {
  if (!t.length)
    return e;
  const n2 = t.shift();
  if (M(e) && M(n2))
    for (const r2 in n2)
      M(n2[r2]) ? (e[r2] === void 0 && Object.assign(e, { [r2]: {} }), X2(e[r2], n2[r2])) : Object.assign(e, { [r2]: n2[r2] });
  return X2(e, ...t);
}
function Jt2(e, t, n2) {
  const r2 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n2}\xBB instead.`;
  e && console.warn(r2);
}
function Qt2(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function Zt2(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
var xt2 = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
};
var en2 = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
var tn2 = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n2, r2) => {
      this.completed = this.completed.then(t).then(n2).catch(r2);
    });
  }
};
function nn2(e, t, n2 = void 0) {
  let r2, i, a4, l2 = null, s4 = 0;
  n2 || (n2 = {});
  const o4 = function() {
    s4 = n2.leading === false ? 0 : Date.now(), l2 = null, a4 = e.apply(r2, i), l2 === null && (r2 = i = null);
  };
  return function() {
    const d4 = Date.now();
    !s4 && n2.leading === false && (s4 = d4);
    const u3 = t - (d4 - s4);
    return r2 = this, i = arguments, u3 <= 0 || u3 > t ? (l2 && (clearTimeout(l2), l2 = null), s4 = d4, a4 = e.apply(r2, i), l2 === null && (r2 = i = null)) : !l2 && n2.trailing !== false && (l2 = setTimeout(o4, u3)), a4;
  };
}
var rn2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: tn2,
  beautifyShortcut: Ft2,
  cacheable: Wt2,
  capitalize: Rt2,
  copyTextToClipboard: qt2,
  debounce: Ut2,
  deepMerge: X2,
  deprecationAssert: Jt2,
  getUserOS: Ue2,
  getValidUrl: Qt2,
  isBoolean: Kt2,
  isClass: zt2,
  isEmpty: Dt2,
  isFunction: Ke2,
  isIosDevice: Ht2,
  isNumber: Xt2,
  isObject: M,
  isPrintableKey: Zt2,
  isPromise: Gt2,
  isString: Vt2,
  isUndefined: Yt2,
  keyCodes: xt2,
  mouseButtons: en2,
  notEmpty: ae2,
  throttle: nn2,
  typeOf: S2
}, Symbol.toStringTag, { value: "Module" }));
var le2 = /* @__PURE__ */ wt2(rn2);
Object.defineProperty(ie, "__esModule", { value: true });
ie.containsOnlyInlineElements = sn2;
var an2 = le2;
var ln2 = Z2;
function sn2(e) {
  var t;
  (0, an2.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n2 = function(r2) {
    return !(0, ln2.blockElements)().includes(r2.tagName.toLowerCase()) && Array.from(r2.children).every(n2);
  };
  return Array.from(t.children).every(n2);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
  var t = ie;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
    return t.containsOnlyInlineElements;
  } });
})($2);
var ze2 = {};
var se = {};
var B = {};
var oe2 = {};
Object.defineProperty(oe2, "__esModule", { value: true });
oe2.make = on2;
function on2(e, t, n2) {
  var r2;
  t === void 0 && (t = null), n2 === void 0 && (n2 = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a4 = t.filter(function(s4) {
      return s4 !== void 0;
    });
    (r2 = i.classList).add.apply(r2, a4);
  } else
    t !== null && i.classList.add(t);
  for (var l2 in n2)
    Object.prototype.hasOwnProperty.call(n2, l2) && (i[l2] = n2[l2]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
  var t = oe2;
  Object.defineProperty(e, "make", { enumerable: true, get: function() {
    return t.make;
  } });
})(B);
Object.defineProperty(se, "__esModule", { value: true });
se.fragmentToString = cn2;
var un2 = B;
function cn2(e) {
  var t = (0, un2.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
  var t = se;
  Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
    return t.fragmentToString;
  } });
})(ze2);
var Xe2 = {};
var ue2 = {};
Object.defineProperty(ue2, "__esModule", { value: true });
ue2.getContentLength = fn2;
var dn2 = k;
function fn2(e) {
  var t, n2;
  return (0, dn2.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n2 = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n2 !== void 0 ? n2 : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
  var t = ue2;
  Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
    return t.getContentLength;
  } });
})(Xe2);
var ce2 = {};
var de2 = {};
var We2 = A2 && A2.__spreadArray || function(e, t, n2) {
  if (n2 || arguments.length === 2)
    for (var r2 = 0, i = t.length, a4; r2 < i; r2++)
      (a4 || !(r2 in t)) && (a4 || (a4 = Array.prototype.slice.call(t, 0, r2)), a4[r2] = t[r2]);
  return e.concat(a4 || Array.prototype.slice.call(t));
};
Object.defineProperty(de2, "__esModule", { value: true });
de2.getDeepestBlockElements = Ge2;
var pn2 = $2;
function Ge2(e) {
  return (0, pn2.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n2) {
    return We2(We2([], t, true), Ge2(n2), true);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
  var t = de2;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
    return t.getDeepestBlockElements;
  } });
})(ce2);
var Ve2 = {};
var fe2 = {};
var W = {};
var pe2 = {};
Object.defineProperty(pe2, "__esModule", { value: true });
pe2.isLineBreakTag = hn2;
function hn2(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
  var t = pe2;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
    return t.isLineBreakTag;
  } });
})(W);
var D2 = {};
var he2 = {};
Object.defineProperty(he2, "__esModule", { value: true });
he2.isSingleTag = mn2;
function mn2(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
  var t = he2;
  Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
    return t.isSingleTag;
  } });
})(D2);
Object.defineProperty(fe2, "__esModule", { value: true });
fe2.getDeepestNode = Ye2;
var gn2 = k;
var vn2 = W;
var bn2 = D2;
function Ye2(e, t) {
  t === void 0 && (t = false);
  var n2 = t ? "lastChild" : "firstChild", r2 = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n2]) {
    var i = e[n2];
    if ((0, bn2.isSingleTag)(i) && !(0, gn2.isNativeInput)(i) && !(0, vn2.isLineBreakTag)(i))
      if (i[r2])
        i = i[r2];
      else if (i.parentNode !== null && i.parentNode[r2])
        i = i.parentNode[r2];
      else
        return i.parentNode;
    return Ye2(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
  var t = fe2;
  Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
    return t.getDeepestNode;
  } });
})(Ve2);
var Je2 = {};
var me2 = {};
var T = A2 && A2.__spreadArray || function(e, t, n2) {
  if (n2 || arguments.length === 2)
    for (var r2 = 0, i = t.length, a4; r2 < i; r2++)
      (a4 || !(r2 in t)) && (a4 || (a4 = Array.prototype.slice.call(t, 0, r2)), a4[r2] = t[r2]);
  return e.concat(a4 || Array.prototype.slice.call(t));
};
Object.defineProperty(me2, "__esModule", { value: true });
me2.findAllInputs = kn2;
var yn2 = $2;
var Cn2 = ce2;
var Sn2 = V2;
var On2 = k;
function kn2(e) {
  return Array.from(e.querySelectorAll((0, Sn2.allInputsSelector)())).reduce(function(t, n2) {
    return (0, On2.isNativeInput)(n2) || (0, yn2.containsOnlyInlineElements)(n2) ? T(T([], t, true), [n2], false) : T(T([], t, true), (0, Cn2.getDeepestBlockElements)(n2), true);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
  var t = me2;
  Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
    return t.findAllInputs;
  } });
})(Je2);
var Qe2 = {};
var ge2 = {};
Object.defineProperty(ge2, "__esModule", { value: true });
ge2.isCollapsedWhitespaces = _n2;
function _n2(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
  var t = ge2;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(Qe2);
var ve = {};
var be2 = {};
Object.defineProperty(be2, "__esModule", { value: true });
be2.isElement = In2;
var En2 = le2;
function In2(e) {
  return (0, En2.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
  var t = be2;
  Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
    return t.isElement;
  } });
})(ve);
var Ze2 = {};
var ye2 = {};
var Ce2 = {};
var Se2 = {};
Object.defineProperty(Se2, "__esModule", { value: true });
Se2.isLeaf = wn2;
function wn2(e) {
  return e === null ? false : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
  var t = Se2;
  Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
    return t.isLeaf;
  } });
})(Ce2);
var Oe2 = {};
var ke2 = {};
Object.defineProperty(ke2, "__esModule", { value: true });
ke2.isNodeEmpty = Mn2;
var Pn2 = W;
var jn2 = ve;
var Tn2 = k;
var Ln2 = D2;
function Mn2(e, t) {
  var n2 = "";
  return (0, Ln2.isSingleTag)(e) && !(0, Pn2.isLineBreakTag)(e) ? false : ((0, jn2.isElement)(e) && (0, Tn2.isNativeInput)(e) ? n2 = e.value : e.textContent !== null && (n2 = e.textContent.replace("\u200B", "")), t !== void 0 && (n2 = n2.replace(new RegExp(t, "g"), "")), n2.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
  var t = ke2;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
    return t.isNodeEmpty;
  } });
})(Oe2);
Object.defineProperty(ye2, "__esModule", { value: true });
ye2.isEmpty = $n2;
var Nn2 = Ce2;
var An2 = Oe2;
function $n2(e, t) {
  e.normalize();
  for (var n2 = [e]; n2.length > 0; ) {
    var r2 = n2.shift();
    if (r2) {
      if (e = r2, (0, Nn2.isLeaf)(e) && !(0, An2.isNodeEmpty)(e, t))
        return false;
      n2.push.apply(n2, Array.from(e.childNodes));
    }
  }
  return true;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
  var t = ye2;
  Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
    return t.isEmpty;
  } });
})(Ze2);
var xe2 = {};
var _e2 = {};
Object.defineProperty(_e2, "__esModule", { value: true });
_e2.isFragment = Wn2;
var Bn2 = le2;
function Wn2(e) {
  return (0, Bn2.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
  var t = _e2;
  Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
    return t.isFragment;
  } });
})(xe2);
var et2 = {};
var Ee2 = {};
Object.defineProperty(Ee2, "__esModule", { value: true });
Ee2.isHTMLString = Hn2;
var Dn2 = B;
function Hn2(e) {
  var t = (0, Dn2.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
  var t = Ee2;
  Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
    return t.isHTMLString;
  } });
})(et2);
var tt = {};
var Ie2 = {};
Object.defineProperty(Ie2, "__esModule", { value: true });
Ie2.offset = Fn2;
function Fn2(e) {
  var t = e.getBoundingClientRect(), n2 = window.pageXOffset || document.documentElement.scrollLeft, r2 = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r2, a4 = t.left + n2;
  return {
    top: i,
    left: a4,
    bottom: i + t.height,
    right: a4 + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
  var t = Ie2;
  Object.defineProperty(e, "offset", { enumerable: true, get: function() {
    return t.offset;
  } });
})(tt);
var nt2 = {};
var we2 = {};
Object.defineProperty(we2, "__esModule", { value: true });
we2.prepend = Rn2;
function Rn2(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n2) {
    return e.prepend(n2);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
  var t = we2;
  Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
    return t.prepend;
  } });
})(nt2);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = V2;
  Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
    return t.allInputsSelector;
  } });
  var n2 = k;
  Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
    return n2.isNativeInput;
  } });
  var r2 = Fe2;
  Object.defineProperty(e, "append", { enumerable: true, get: function() {
    return r2.append;
  } });
  var i = Z2;
  Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
    return i.blockElements;
  } });
  var a4 = Re2;
  Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
    return a4.calculateBaseline;
  } });
  var l2 = qe2;
  Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
    return l2.canSetCaret;
  } });
  var s4 = $2;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
    return s4.containsOnlyInlineElements;
  } });
  var o4 = ze2;
  Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
    return o4.fragmentToString;
  } });
  var d4 = Xe2;
  Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
    return d4.getContentLength;
  } });
  var u3 = ce2;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
    return u3.getDeepestBlockElements;
  } });
  var p3 = Ve2;
  Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
    return p3.getDeepestNode;
  } });
  var g4 = Je2;
  Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
    return g4.findAllInputs;
  } });
  var w3 = Qe2;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
    return w3.isCollapsedWhitespaces;
  } });
  var _3 = ne2;
  Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
    return _3.isContentEditable;
  } });
  var ut3 = ve;
  Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
    return ut3.isElement;
  } });
  var ct3 = Ze2;
  Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
    return ct3.isEmpty;
  } });
  var dt3 = xe2;
  Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
    return dt3.isFragment;
  } });
  var ft3 = et2;
  Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
    return ft3.isHTMLString;
  } });
  var pt3 = Ce2;
  Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
    return pt3.isLeaf;
  } });
  var ht3 = Oe2;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
    return ht3.isNodeEmpty;
  } });
  var mt3 = W;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
    return mt3.isLineBreakTag;
  } });
  var gt3 = D2;
  Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
    return gt3.isSingleTag;
  } });
  var vt3 = B;
  Object.defineProperty(e, "make", { enumerable: true, get: function() {
    return vt3.make;
  } });
  var bt3 = tt;
  Object.defineProperty(e, "offset", { enumerable: true, get: function() {
    return bt3.offset;
  } });
  var yt3 = nt2;
  Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
    return yt3.prepend;
  } });
})(c);
var m = "cdx-list";
var h2 = {
  wrapper: m,
  item: `${m}__item`,
  itemContent: `${m}__item-content`,
  itemChildren: `${m}__item-children`
};
var v2 = class _v {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h2,
      orderedList: `${m}-ordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n2) {
    this.config = n2, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ol element
   */
  renderWrapper(t) {
    let n2;
    return t === true ? n2 = c.make("ol", [_v.CSS.wrapper, _v.CSS.orderedList]) : n2 = c.make("ol", [_v.CSS.orderedList, _v.CSS.itemChildren]), n2;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the ordered list
   * @returns - created html list item element
   */
  renderItem(t, n2) {
    const r2 = c.make("li", _v.CSS.item), i = c.make("div", _v.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r2.appendChild(i), r2;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n2 = t.querySelector(`.${_v.CSS.itemContent}`);
    return !n2 || c.isEmpty(n2) ? "" : n2.innerHTML;
  }
  /**
   * Returns item meta, for ordered list
   * @returns item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
};
var b2 = class _b {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h2,
      unorderedList: `${m}-unordered`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n2) {
    this.config = n2, this.readOnly = t;
  }
  /**
   * Renders ol wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n2;
    return t === true ? n2 = c.make("ul", [_b.CSS.wrapper, _b.CSS.unorderedList]) : n2 = c.make("ul", [_b.CSS.unorderedList, _b.CSS.itemChildren]), n2;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param _meta - meta of the list item unused in rendering of the unordered list
   * @returns - created html list item element
   */
  renderItem(t, n2) {
    const r2 = c.make("li", _b.CSS.item), i = c.make("div", _b.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    });
    return r2.appendChild(i), r2;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n2 = t.querySelector(`.${_b.CSS.itemContent}`);
    return !n2 || c.isEmpty(n2) ? "" : n2.innerHTML;
  }
  /**
   * Returns item meta, for unordered list
   * @returns Item meta object
   */
  getItemMeta() {
    return {};
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return {};
  }
};
function O(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
var j2 = {};
var Pe2 = {};
var H = {};
var F = {};
Object.defineProperty(F, "__esModule", { value: true });
F.getContenteditableSlice = Un2;
var qn2 = c;
function Un2(e, t, n2, r2, i) {
  var a4;
  i === void 0 && (i = false);
  var l2 = document.createRange();
  if (r2 === "left" ? (l2.setStart(e, 0), l2.setEnd(t, n2)) : (l2.setStart(t, n2), l2.setEnd(e, e.childNodes.length)), i === true) {
    var s4 = l2.extractContents();
    return (0, qn2.fragmentToString)(s4);
  }
  var o4 = l2.cloneContents(), d4 = document.createElement("div");
  d4.appendChild(o4);
  var u3 = (a4 = d4.textContent) !== null && a4 !== void 0 ? a4 : "";
  return u3;
}
Object.defineProperty(H, "__esModule", { value: true });
H.checkContenteditableSliceForEmptiness = Xn2;
var Kn = c;
var zn2 = F;
function Xn2(e, t, n2, r2) {
  var i = (0, zn2.getContenteditableSlice)(e, t, n2, r2);
  return (0, Kn.isCollapsedWhitespaces)(i);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.checkContenteditableSliceForEmptiness = void 0;
  var t = H;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
})(Pe2);
var rt2 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getContenteditableSlice = void 0;
  var t = F;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: true, get: function() {
    return t.getContenteditableSlice;
  } });
})(rt2);
var it2 = {};
var je2 = {};
Object.defineProperty(je2, "__esModule", { value: true });
je2.focus = Vn2;
var Gn2 = c;
function Vn2(e, t) {
  var n2, r2;
  if (t === void 0 && (t = true), (0, Gn2.isNativeInput)(e)) {
    e.focus();
    var i = t ? 0 : e.value.length;
    e.setSelectionRange(i, i);
  } else {
    var a4 = document.createRange(), l2 = window.getSelection();
    if (!l2)
      return;
    var s4 = function(g4, w3) {
      w3 === void 0 && (w3 = false);
      var _3 = document.createTextNode("");
      w3 ? g4.insertBefore(_3, g4.firstChild) : g4.appendChild(_3), a4.setStart(_3, 0), a4.setEnd(_3, 0);
    }, o4 = function(g4) {
      return g4 != null;
    }, d4 = e.childNodes, u3 = t ? d4[0] : d4[d4.length - 1];
    if (o4(u3)) {
      for (; o4(u3) && u3.nodeType !== Node.TEXT_NODE; )
        u3 = t ? u3.firstChild : u3.lastChild;
      if (o4(u3) && u3.nodeType === Node.TEXT_NODE) {
        var p3 = (r2 = (n2 = u3.textContent) === null || n2 === void 0 ? void 0 : n2.length) !== null && r2 !== void 0 ? r2 : 0, i = t ? 0 : p3;
        a4.setStart(u3, i), a4.setEnd(u3, i);
      } else
        s4(e, t);
    } else
      s4(e);
    l2.removeAllRanges(), l2.addRange(a4);
  }
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.focus = void 0;
  var t = je2;
  Object.defineProperty(e, "focus", { enumerable: true, get: function() {
    return t.focus;
  } });
})(it2);
var Te2 = {};
var R2 = {};
Object.defineProperty(R2, "__esModule", { value: true });
R2.getCaretNodeAndOffset = Yn;
function Yn() {
  var e = window.getSelection();
  if (e === null)
    return [null, 0];
  var t = e.focusNode, n2 = e.focusOffset;
  return t === null ? [null, 0] : (t.nodeType !== Node.TEXT_NODE && t.childNodes.length > 0 && (t.childNodes[n2] !== void 0 ? (t = t.childNodes[n2], n2 = 0) : (t = t.childNodes[n2 - 1], t.textContent !== null && (n2 = t.textContent.length))), [t, n2]);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getCaretNodeAndOffset = void 0;
  var t = R2;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: true, get: function() {
    return t.getCaretNodeAndOffset;
  } });
})(Te2);
var at2 = {};
var q = {};
Object.defineProperty(q, "__esModule", { value: true });
q.getRange = Jn2;
function Jn2() {
  var e = window.getSelection();
  return e && e.rangeCount ? e.getRangeAt(0) : null;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getRange = void 0;
  var t = q;
  Object.defineProperty(e, "getRange", { enumerable: true, get: function() {
    return t.getRange;
  } });
})(at2);
var lt2 = {};
var Le2 = {};
Object.defineProperty(Le2, "__esModule", { value: true });
Le2.isCaretAtEndOfInput = xn2;
var De2 = c;
var Qn2 = Te2;
var Zn2 = Pe2;
function xn2(e) {
  var t = (0, De2.getDeepestNode)(e, true);
  if (t === null)
    return true;
  if ((0, De2.isNativeInput)(t))
    return t.selectionEnd === t.value.length;
  var n2 = (0, Qn2.getCaretNodeAndOffset)(), r2 = n2[0], i = n2[1];
  return r2 === null ? false : (0, Zn2.checkContenteditableSliceForEmptiness)(e, r2, i, "right");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isCaretAtEndOfInput = void 0;
  var t = Le2;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: true, get: function() {
    return t.isCaretAtEndOfInput;
  } });
})(lt2);
var st2 = {};
var Me2 = {};
Object.defineProperty(Me2, "__esModule", { value: true });
Me2.isCaretAtStartOfInput = nr2;
var L2 = c;
var er2 = R2;
var tr2 = H;
function nr2(e) {
  var t = (0, L2.getDeepestNode)(e);
  if (t === null || (0, L2.isEmpty)(e))
    return true;
  if ((0, L2.isNativeInput)(t))
    return t.selectionEnd === 0;
  if ((0, L2.isEmpty)(e))
    return true;
  var n2 = (0, er2.getCaretNodeAndOffset)(), r2 = n2[0], i = n2[1];
  return r2 === null ? false : (0, tr2.checkContenteditableSliceForEmptiness)(e, r2, i, "left");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isCaretAtStartOfInput = void 0;
  var t = Me2;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: true, get: function() {
    return t.isCaretAtStartOfInput;
  } });
})(st2);
var ot2 = {};
var Ne2 = {};
Object.defineProperty(Ne2, "__esModule", { value: true });
Ne2.save = ar2;
var rr2 = c;
var ir2 = q;
function ar2() {
  var e = (0, ir2.getRange)(), t = (0, rr2.make)("span");
  if (t.id = "cursor", t.hidden = true, !!e)
    return e.insertNode(t), function() {
      var r2 = window.getSelection();
      r2 && (e.setStartAfter(t), e.setEndAfter(t), r2.removeAllRanges(), r2.addRange(e), setTimeout(function() {
        t.remove();
      }, 150));
    };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.save = void 0;
  var t = Ne2;
  Object.defineProperty(e, "save", { enumerable: true, get: function() {
    return t.save;
  } });
})(ot2);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.save = e.isCaretAtStartOfInput = e.isCaretAtEndOfInput = e.getRange = e.getCaretNodeAndOffset = e.focus = e.getContenteditableSlice = e.checkContenteditableSliceForEmptiness = void 0;
  var t = Pe2;
  Object.defineProperty(e, "checkContenteditableSliceForEmptiness", { enumerable: true, get: function() {
    return t.checkContenteditableSliceForEmptiness;
  } });
  var n2 = rt2;
  Object.defineProperty(e, "getContenteditableSlice", { enumerable: true, get: function() {
    return n2.getContenteditableSlice;
  } });
  var r2 = it2;
  Object.defineProperty(e, "focus", { enumerable: true, get: function() {
    return r2.focus;
  } });
  var i = Te2;
  Object.defineProperty(e, "getCaretNodeAndOffset", { enumerable: true, get: function() {
    return i.getCaretNodeAndOffset;
  } });
  var a4 = at2;
  Object.defineProperty(e, "getRange", { enumerable: true, get: function() {
    return a4.getRange;
  } });
  var l2 = lt2;
  Object.defineProperty(e, "isCaretAtEndOfInput", { enumerable: true, get: function() {
    return l2.isCaretAtEndOfInput;
  } });
  var s4 = st2;
  Object.defineProperty(e, "isCaretAtStartOfInput", { enumerable: true, get: function() {
    return s4.isCaretAtStartOfInput;
  } });
  var o4 = ot2;
  Object.defineProperty(e, "save", { enumerable: true, get: function() {
    return o4.save;
  } });
})(j2);
var f = class _f {
  /**
   * Getter for all CSS classes used in unordered list rendering
   */
  static get CSS() {
    return {
      ...h2,
      checklist: `${m}-checklist`,
      itemChecked: `${m}__checkbox--checked`,
      noHover: `${m}__checkbox--no-hover`,
      checkbox: `${m}__checkbox-check`,
      checkboxContainer: `${m}__checkbox`,
      checkboxCheckDisabled: `${m}__checkbox-check--disabled`
    };
  }
  /**
   * Assign passed readonly mode and config to relevant class properties
   * @param readonly - read-only mode flag
   * @param config - user config for Tool
   */
  constructor(t, n2) {
    this.config = n2, this.readOnly = t;
  }
  /**
   * Renders ul wrapper for list
   * @param isRoot - boolean variable that represents level of the wrappre (root or childList)
   * @returns - created html ul element
   */
  renderWrapper(t) {
    let n2;
    return t === true ? (n2 = c.make("ul", [_f.CSS.wrapper, _f.CSS.checklist]), n2.addEventListener("click", (r2) => {
      const i = r2.target;
      if (i) {
        const a4 = i.closest(`.${_f.CSS.checkboxContainer}`);
        a4 && a4.contains(i) && this.toggleCheckbox(a4);
      }
    })) : n2 = c.make("ul", [_f.CSS.checklist, _f.CSS.itemChildren]), n2;
  }
  /**
   * Redners list item element
   * @param content - content used in list item rendering
   * @param meta - meta of the list item used in rendering of the checklist
   * @returns - created html list item element
   */
  renderItem(t, n2) {
    const r2 = c.make("li", [_f.CSS.item, _f.CSS.item]), i = c.make("div", _f.CSS.itemContent, {
      innerHTML: t,
      contentEditable: (!this.readOnly).toString()
    }), a4 = c.make("span", _f.CSS.checkbox), l2 = c.make("div", _f.CSS.checkboxContainer);
    return n2.checked === true && l2.classList.add(_f.CSS.itemChecked), this.readOnly && l2.classList.add(_f.CSS.checkboxCheckDisabled), a4.innerHTML = Ct2, l2.appendChild(a4), r2.appendChild(l2), r2.appendChild(i), r2;
  }
  /**
   * Return the item content
   * @param item - item wrapper (<li>)
   * @returns - item content string
   */
  getItemContent(t) {
    const n2 = t.querySelector(`.${_f.CSS.itemContent}`);
    return !n2 || c.isEmpty(n2) ? "" : n2.innerHTML;
  }
  /**
   * Return meta object of certain element
   * @param item - will be returned meta information of this item
   * @returns Item meta object
   */
  getItemMeta(t) {
    const n2 = t.querySelector(`.${_f.CSS.checkboxContainer}`);
    return {
      checked: n2 ? n2.classList.contains(_f.CSS.itemChecked) : false
    };
  }
  /**
   * Returns default item meta used on creation of the new item
   */
  composeDefaultMeta() {
    return { checked: false };
  }
  /**
   * Toggle checklist item state
   * @param checkbox - checkbox element to be toggled
   */
  toggleCheckbox(t) {
    t.classList.toggle(_f.CSS.itemChecked), t.classList.add(_f.CSS.noHover), t.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(t), { once: true });
  }
  /**
   * Removes class responsible for special hover behavior on an item
   * @param el - item wrapper
   */
  removeSpecialHoverBehavior(t) {
    t.classList.remove(_f.CSS.noHover);
  }
};
function U2(e, t = "after") {
  const n2 = [];
  let r2;
  function i(a4) {
    switch (t) {
      case "after":
        return a4.nextElementSibling;
      case "before":
        return a4.previousElementSibling;
    }
  }
  for (r2 = i(e); r2 !== null; )
    n2.push(r2), r2 = i(r2);
  return n2.length !== 0 ? n2 : null;
}
function y2(e, t = true) {
  let n2 = e;
  return e.classList.contains(h2.item) && (n2 = e.querySelector(`.${h2.itemChildren}`)), n2 === null ? [] : t ? Array.from(n2.querySelectorAll(`:scope > .${h2.item}`)) : Array.from(n2.querySelectorAll(`.${h2.item}`));
}
function lr2(e) {
  return e.nextElementSibling === null;
}
function sr2(e) {
  return e.querySelector(`.${h2.itemChildren}`) !== null;
}
function C(e) {
  return e.querySelector(`.${h2.itemChildren}`);
}
function K2(e) {
  let t = e;
  e.classList.contains(h2.item) && (t = C(e)), t !== null && y2(t).length === 0 && t.remove();
}
function N(e) {
  return e.querySelector(`.${h2.itemContent}`);
}
function E2(e, t = true) {
  const n2 = N(e);
  n2 && j2.focus(n2, t);
}
var z2 = class {
  /**
   * Getter method to get current item
   * @returns current list item or null if caret position is not undefined
   */
  get currentItem() {
    const t = window.getSelection();
    if (!t)
      return null;
    let n2 = t.anchorNode;
    return !n2 || (O(n2) || (n2 = n2.parentNode), !n2) || !O(n2) ? null : n2.closest(`.${h2.item}`);
  }
  /**
   * Method that returns nesting level of the current item, null if there is no selection
   */
  get currentItemLevel() {
    const t = this.currentItem;
    if (t === null)
      return null;
    let n2 = t.parentNode, r2 = 0;
    for (; n2 !== null && n2 !== this.listWrapper; )
      O(n2) && n2.classList.contains(h2.item) && (r2 += 1), n2 = n2.parentNode;
    return r2 + 1;
  }
  /**
   * Assign all passed params and renderer to relevant class properties
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   * @param renderer - renderer instance initialized in tool class
   */
  constructor({ data: t, config: n2, api: r2, readOnly: i, block: a4 }, l2) {
    this.config = n2, this.data = t, this.readOnly = i, this.api = r2, this.block = a4, this.renderer = l2;
  }
  /**
   * Function that is responsible for rendering list with contents
   * @returns Filled with content wrapper element of the list
   */
  render() {
    return this.listWrapper = this.renderer.renderWrapper(true), this.data.items.length ? this.appendItems(this.data.items, this.listWrapper) : this.appendItems(
      [
        {
          content: "",
          meta: {},
          items: []
        }
      ],
      this.listWrapper
    ), this.readOnly || this.listWrapper.addEventListener(
      "keydown",
      (t) => {
        switch (t.key) {
          case "Enter":
            t.shiftKey || this.enterPressed(t);
            break;
          case "Backspace":
            this.backspace(t);
            break;
          case "Tab":
            t.shiftKey ? this.shiftTab(t) : this.addTab(t);
            break;
        }
      },
      false
    ), "start" in this.data.meta && this.data.meta.start !== void 0 && this.changeStartWith(this.data.meta.start), "counterType" in this.data.meta && this.data.meta.counterType !== void 0 && this.changeCounters(this.data.meta.counterType), this.listWrapper;
  }
  /**
   * Function that is responsible for list content saving
   * @param wrapper - optional argument wrapper
   * @returns whole list saved data if wrapper not passes, otherwise will return data of the passed wrapper
   */
  save(t) {
    const n2 = t ?? this.listWrapper, r2 = (l2) => y2(l2).map((o4) => {
      const d4 = C(o4), u3 = this.renderer.getItemContent(o4), p3 = this.renderer.getItemMeta(o4), g4 = d4 ? r2(d4) : [];
      return {
        content: u3,
        meta: p3,
        items: g4
      };
    }), i = n2 ? r2(n2) : [];
    let a4 = {
      style: this.data.style,
      meta: {},
      items: i
    };
    return this.data.style === "ordered" && (a4.meta = {
      start: this.data.meta.start,
      counterType: this.data.meta.counterType
    }), a4;
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - config that determines tags supposted by paste handler
   * @todo - refactor and move to list instance
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Method that specified hot to merge two List blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * Content of the first item of the next List would be merged with deepest item in current list
   * Other items of the next List would be appended to the current list without any changes in nesting levels
   * @param data - data of the second list to be merged with current
   */
  merge(t) {
    const n2 = this.block.holder.querySelectorAll(`.${h2.item}`), r2 = n2[n2.length - 1], i = N(r2);
    if (r2 === null || i === null || (i.insertAdjacentHTML("beforeend", t.items[0].content), this.listWrapper === void 0))
      return;
    const a4 = y2(this.listWrapper);
    if (a4.length === 0)
      return;
    const l2 = a4[a4.length - 1];
    let s4 = C(l2);
    const o4 = t.items.shift();
    o4 !== void 0 && (o4.items.length !== 0 && (s4 === null && (s4 = this.renderer.renderWrapper(false)), this.appendItems(o4.items, s4)), t.items.length > 0 && this.appendItems(t.items, this.listWrapper));
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   * @todo - refactor and move to list instance
   */
  onPaste(t) {
    const n2 = t.detail.data;
    this.data = this.pasteHandler(n2);
    const r2 = this.listWrapper;
    r2 && r2.parentNode && r2.parentNode.replaceChild(this.render(), r2);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   * @todo - refactor and move to list instance
   */
  pasteHandler(t) {
    const { tagName: n2 } = t;
    let r2 = "unordered", i;
    switch (n2) {
      case "OL":
        r2 = "ordered", i = "ol";
        break;
      case "UL":
      case "LI":
        r2 = "unordered", i = "ul";
    }
    const a4 = {
      style: r2,
      meta: {},
      items: []
    };
    r2 === "ordered" && (this.data.meta.counterType = "numeric", this.data.meta.start = 1);
    const l2 = (s4) => Array.from(s4.querySelectorAll(":scope > li")).map((d4) => {
      const u3 = d4.querySelector(`:scope > ${i}`), p3 = u3 ? l2(u3) : [];
      return {
        content: d4.innerHTML ?? "",
        meta: {},
        items: p3
      };
    });
    return a4.items = l2(t), a4;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    this.listWrapper.style.setProperty("counter-reset", `item ${t - 1}`), this.data.meta.start = t;
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    this.listWrapper.style.setProperty("--list-counter-type", t), this.data.meta.counterType = t;
  }
  /**
   * Handles Enter keypress
   * @param event - keydown
   */
  enterPressed(t) {
    var s4;
    const n2 = this.currentItem;
    if (t.stopPropagation(), t.preventDefault(), t.isComposing || n2 === null)
      return;
    const r2 = ((s4 = this.renderer) == null ? void 0 : s4.getItemContent(n2).trim().length) === 0, i = n2.parentNode === this.listWrapper, a4 = n2.previousElementSibling === null, l2 = this.api.blocks.getCurrentBlockIndex();
    if (i && r2)
      if (lr2(n2) && !sr2(n2)) {
        a4 ? this.convertItemToDefaultBlock(l2, true) : this.convertItemToDefaultBlock();
        return;
      } else {
        this.splitList(n2);
        return;
      }
    else if (r2) {
      this.unshiftItem(n2);
      return;
    } else
      this.splitItem(n2);
  }
  /**
   * Handle backspace
   * @param event - keydown
   */
  backspace(t) {
    var r2;
    const n2 = this.currentItem;
    if (n2 !== null && j2.isCaretAtStartOfInput(n2) && ((r2 = window.getSelection()) == null ? void 0 : r2.isCollapsed) !== false) {
      if (t.stopPropagation(), n2.parentNode === this.listWrapper && n2.previousElementSibling === null) {
        this.convertFirstItemToDefaultBlock();
        return;
      }
      t.preventDefault(), this.mergeItemWithPrevious(n2);
    }
  }
  /**
   * Reduce indentation for current item
   * @param event - keydown
   */
  shiftTab(t) {
    t.stopPropagation(), t.preventDefault(), this.currentItem !== null && this.unshiftItem(this.currentItem);
  }
  /**
   * Decrease indentation of the passed item
   * @param item - list item to be unshifted
   */
  unshiftItem(t) {
    if (!t.parentNode || !O(t.parentNode))
      return;
    const n2 = t.parentNode.closest(`.${h2.item}`);
    if (!n2)
      return;
    let r2 = C(t);
    if (t.parentElement === null)
      return;
    const i = U2(t);
    i !== null && (r2 === null && (r2 = this.renderer.renderWrapper(false)), i.forEach((a4) => {
      r2.appendChild(a4);
    }), t.appendChild(r2)), n2.after(t), E2(t, false), K2(n2);
  }
  /**
   * Method that is used for list splitting and moving trailing items to the new separated list
   * @param item - current item html element
   */
  splitList(t) {
    const n2 = y2(t), r2 = this.block, i = this.api.blocks.getCurrentBlockIndex();
    if (n2.length !== 0) {
      const o4 = n2[0];
      this.unshiftItem(o4), E2(t, false);
    }
    if (t.previousElementSibling === null && t.parentNode === this.listWrapper) {
      this.convertItemToDefaultBlock(i);
      return;
    }
    const a4 = U2(t);
    if (a4 === null)
      return;
    const l2 = this.renderer.renderWrapper(true);
    a4.forEach((o4) => {
      l2.appendChild(o4);
    });
    const s4 = this.save(l2);
    s4.meta.start = this.data.style == "ordered" ? 1 : void 0, this.api.blocks.insert(r2 == null ? void 0 : r2.name, s4, this.config, i + 1), this.convertItemToDefaultBlock(i + 1), l2.remove();
  }
  /**
   * Method that is used for splitting item content and moving trailing content to the new sibling item
   * @param currentItem - current item html element
   */
  splitItem(t) {
    const [n2, r2] = j2.getCaretNodeAndOffset();
    if (n2 === null)
      return;
    const i = N(t);
    let a4;
    i === null ? a4 = "" : a4 = j2.getContenteditableSlice(i, n2, r2, "right", true);
    const l2 = C(t), s4 = this.renderItem(a4);
    t == null || t.after(s4), l2 && s4.appendChild(l2), E2(s4);
  }
  /**
   * Method that is used for merging current item with previous one
   * Content of the current item would be appended to the previous item
   * Current item children would not change nesting level
   * @param item - current item html element
   */
  mergeItemWithPrevious(t) {
    const n2 = t.previousElementSibling, r2 = t.parentNode;
    if (r2 === null || !O(r2))
      return;
    const i = r2.closest(`.${h2.item}`);
    if (!n2 && !i || n2 && !O(n2))
      return;
    let a4;
    if (n2) {
      const p3 = y2(n2, false);
      p3.length !== 0 && p3.length !== 0 ? a4 = p3[p3.length - 1] : a4 = n2;
    } else
      a4 = i;
    const l2 = this.renderer.getItemContent(t);
    if (!a4)
      return;
    E2(a4, false);
    const s4 = N(a4);
    if (s4 === null)
      return;
    s4.insertAdjacentHTML("beforeend", l2);
    const o4 = y2(t);
    if (o4.length === 0) {
      t.remove(), K2(a4);
      return;
    }
    const d4 = n2 || i, u3 = C(d4) ?? this.renderer.renderWrapper(false);
    n2 ? o4.forEach((p3) => {
      u3.appendChild(p3);
    }) : o4.forEach((p3) => {
      u3.prepend(p3);
    }), C(d4) === null && a4.appendChild(u3), t.remove();
  }
  /**
   * Add indentation to current item
   * @param event - keydown
   */
  addTab(t) {
    var a4;
    t.stopPropagation(), t.preventDefault();
    const n2 = this.currentItem;
    if (!n2)
      return;
    if (((a4 = this.config) == null ? void 0 : a4.maxLevel) !== void 0) {
      const l2 = this.currentItemLevel;
      if (l2 !== null && l2 === this.config.maxLevel)
        return;
    }
    const r2 = n2.previousSibling;
    if (r2 === null || !O(r2))
      return;
    const i = C(r2);
    if (i)
      i.appendChild(n2), y2(n2).forEach((s4) => {
        i.appendChild(s4);
      });
    else {
      const l2 = this.renderer.renderWrapper(false);
      l2.appendChild(n2), y2(n2).forEach((o4) => {
        l2.appendChild(o4);
      }), r2.appendChild(l2);
    }
    K2(n2), E2(n2, false);
  }
  /**
   * Convert current item to default block with passed index
   * @param newBloxkIndex - optional parameter represents index, where would be inseted default block
   * @param removeList - optional parameter, that represents condition, if List should be removed
   */
  convertItemToDefaultBlock(t, n2) {
    let r2;
    const i = this.currentItem, a4 = i !== null ? this.renderer.getItemContent(i) : "";
    n2 === true && this.api.blocks.delete(), t !== void 0 ? r2 = this.api.blocks.insert(void 0, { text: a4 }, void 0, t) : r2 = this.api.blocks.insert(), i == null || i.remove(), this.api.caret.setToBlock(r2, "start");
  }
  /**
   * Convert first item of the list to default block
   * This method could be called when backspace button pressed at start of the first item of the list
   * First item of the list would be converted to the paragraph and first item children would be unshifted
   */
  convertFirstItemToDefaultBlock() {
    const t = this.currentItem;
    if (t === null)
      return;
    const n2 = y2(t);
    if (n2.length !== 0) {
      const l2 = n2[0];
      this.unshiftItem(l2), E2(t);
    }
    const r2 = U2(t), i = this.api.blocks.getCurrentBlockIndex(), a4 = r2 === null;
    this.convertItemToDefaultBlock(i, a4);
  }
  /**
   * Method that calls render function of the renderer with a necessary item meta cast
   * @param itemContent - content to be rendered in new item
   * @param meta - meta used in list item rendering
   * @returns html element of the rendered item
   */
  renderItem(t, n2) {
    const r2 = n2 ?? this.renderer.composeDefaultMeta();
    switch (true) {
      case this.renderer instanceof v2:
        return this.renderer.renderItem(t, r2);
      case this.renderer instanceof b2:
        return this.renderer.renderItem(t, r2);
      default:
        return this.renderer.renderItem(t, r2);
    }
  }
  /**
   * Renders children list
   * @param items - list data used in item rendering
   * @param parentElement - where to append passed items
   */
  appendItems(t, n2) {
    t.forEach((r2) => {
      var a4;
      const i = this.renderItem(r2.content, r2.meta);
      if (n2.appendChild(i), r2.items.length) {
        const l2 = (a4 = this.renderer) == null ? void 0 : a4.renderWrapper(false);
        this.appendItems(r2.items, l2), i.appendChild(l2);
      }
    });
  }
};
var I = {
  wrapper: `${m}-start-with-field`,
  input: `${m}-start-with-field__input`,
  startWithElementWrapperInvalid: `${m}-start-with-field--invalid`
};
function or2(e, { value: t, placeholder: n2, attributes: r2, sanitize: i }) {
  const a4 = c.make("div", I.wrapper), l2 = c.make("input", I.input, {
    placeholder: n2,
    /**
     * Used to prevent focusing on the input by Tab key
     * (Popover in the Toolbar lays below the blocks,
     * so Tab in the last block will focus this hidden input if this property is not set)
     */
    tabIndex: -1,
    /**
     * Value of the start property, if it is not specified, then it is set to one
     */
    value: t
  });
  for (const s4 in r2)
    l2.setAttribute(s4, r2[s4]);
  return a4.appendChild(l2), l2.addEventListener("input", () => {
    i !== void 0 && (l2.value = i(l2.value));
    const s4 = l2.checkValidity();
    !s4 && !a4.classList.contains(I.startWithElementWrapperInvalid) && a4.classList.add(I.startWithElementWrapperInvalid), s4 && a4.classList.contains(I.startWithElementWrapperInvalid) && a4.classList.remove(I.startWithElementWrapperInvalid), s4 && e(l2.value);
  }), a4;
}
var P2 = /* @__PURE__ */ new Map([
  /**
   * Value that represents default arabic numbers for counters
   */
  ["Numeric", "numeric"],
  /**
   * Value that represents lower roman numbers for counteres
   */
  ["Lower Roman", "lower-roman"],
  /**
   * Value that represents upper roman numbers for counters
   */
  ["Upper Roman", "upper-roman"],
  /**
   * Value that represents lower alpha characters for counters
   */
  ["Lower Alpha", "lower-alpha"],
  /**
   * Value that represents upper alpha characters for counters
   */
  ["Upper Alpha", "upper-alpha"]
]);
var He2 = /* @__PURE__ */ new Map([
  /**
   * Value that represents Icon for Numeric counter type
   */
  ["numeric", St2],
  /**
   * Value that represents Icon for Lower Roman counter type
   */
  ["lower-roman", Ot2],
  /**
   * Value that represents Icon for Upper Roman counter type
   */
  ["upper-roman", kt2],
  /**
   * Value that represents Icon for Lower Alpha counter type
   */
  ["lower-alpha", Et2],
  /**
   * Value that represents Icon for Upper Alpha counter type
   */
  ["upper-alpha", _t2]
]);
function ur2(e) {
  return e.replace(/\D+/g, "");
}
function cr2(e) {
  return typeof e.items[0] == "string";
}
function dr2(e) {
  return !("meta" in e);
}
function fr2(e) {
  return typeof e.items[0] != "string" && "text" in e.items[0] && "checked" in e.items[0] && typeof e.items[0].text == "string" && typeof e.items[0].checked == "boolean";
}
function pr2(e) {
  const t = [];
  return cr2(e) ? (e.items.forEach((n2) => {
    t.push({
      content: n2,
      meta: {},
      items: []
    });
  }), {
    style: e.style,
    meta: {},
    items: t
  }) : fr2(e) ? (e.items.forEach((n2) => {
    t.push({
      content: n2.text,
      meta: {
        checked: n2.checked
      },
      items: []
    });
  }), {
    style: "checklist",
    meta: {},
    items: t
  }) : dr2(e) ? {
    style: e.style,
    meta: {},
    items: e.items
  } : structuredClone(e);
}
var G2 = class _G {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Allow to use native Enter behaviour
   */
  static get enableLineBreaks() {
    return true;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return [
      {
        icon: $e2,
        title: "Unordered List",
        data: {
          style: "unordered"
        }
      },
      {
        icon: Be2,
        title: "Ordered List",
        data: {
          style: "ordered"
        }
      },
      {
        icon: Ae2,
        title: "Checklist",
        data: {
          style: "checklist"
        }
      }
    ];
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   * @returns - paste config object used in editor
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (t) => _G.joinRecursive(t),
      import: (t, n2) => ({
        meta: {},
        items: [
          {
            content: t,
            meta: {},
            items: []
          }
        ],
        style: (n2 == null ? void 0 : n2.defaultStyle) !== void 0 ? n2.defaultStyle : "unordered"
      })
    };
  }
  /**
   * Get list style name
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   * @param style - new style to set
   */
  set listStyle(t) {
    var r2;
    this.data.style = t, this.changeTabulatorByStyle();
    const n2 = this.list.render();
    (r2 = this.listElement) == null || r2.replaceWith(n2), this.listElement = n2;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - tool constructor options
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - Editor.js API
   * @param params.readOnly - read-only mode flag
   */
  constructor({ data: t, config: n2, api: r2, readOnly: i, block: a4 }) {
    var s4;
    this.api = r2, this.readOnly = i, this.config = n2, this.block = a4, this.defaultListStyle = ((s4 = this.config) == null ? void 0 : s4.defaultStyle) || "unordered", this.defaultCounterTypes = this.config.counterTypes || Array.from(P2.values());
    const l2 = {
      style: this.defaultListStyle,
      meta: {},
      items: []
    };
    this.data = Object.keys(t).length ? pr2(t) : l2, this.listStyle === "ordered" && this.data.meta.counterType === void 0 && (this.data.meta.counterType = "numeric"), this.changeTabulatorByStyle();
  }
  /**
   * Convert from list to text for conversionConfig
   * @param data - current data of the list
   * @returns - string of the recursively merged contents of the items of the list
   */
  static joinRecursive(t) {
    return t.items.map((n2) => `${n2.content} ${_G.joinRecursive(n2)}`).join("");
  }
  /**
   * Function that is responsible for content rendering
   * @returns rendered list wrapper with all contents
   */
  render() {
    return this.listElement = this.list.render(), this.listElement;
  }
  /**
   * Function that is responsible for content saving
   * @returns formatted content used in editor
   */
  save() {
    return this.data = this.list.save(), this.data;
  }
  /**
   * Function that is responsible for mergind two lists into one
   * @param data - data of the next standing list, that should be merged with current
   */
  merge(t) {
    this.list.merge(t);
  }
  /**
   * Creates Block Tune allowing to change the list style
   * @returns array of tune configs
   */
  renderSettings() {
    const t = [
      {
        label: this.api.i18n.t("Unordered"),
        icon: $e2,
        closeOnActivate: true,
        isActive: this.listStyle == "unordered",
        onActivate: () => {
          this.listStyle = "unordered";
        }
      },
      {
        label: this.api.i18n.t("Ordered"),
        icon: Be2,
        closeOnActivate: true,
        isActive: this.listStyle == "ordered",
        onActivate: () => {
          this.listStyle = "ordered";
        }
      },
      {
        label: this.api.i18n.t("Checklist"),
        icon: Ae2,
        closeOnActivate: true,
        isActive: this.listStyle == "checklist",
        onActivate: () => {
          this.listStyle = "checklist";
        }
      }
    ];
    if (this.listStyle === "ordered") {
      const n2 = or2(
        (a4) => this.changeStartWith(Number(a4)),
        {
          value: String(this.data.meta.start ?? 1),
          placeholder: "",
          attributes: {
            required: "true"
          },
          sanitize: (a4) => ur2(a4)
        }
      ), r2 = [
        {
          label: this.api.i18n.t("Start with"),
          icon: It2,
          children: {
            items: [
              {
                element: n2,
                // @ts-expect-error ts(2820) can not use PopoverItem enum from editor.js types
                type: "html"
              }
            ]
          }
        }
      ], i = {
        label: this.api.i18n.t("Counter type"),
        icon: He2.get(this.data.meta.counterType),
        children: {
          items: []
        }
      };
      P2.forEach((a4, l2) => {
        const s4 = P2.get(l2);
        this.defaultCounterTypes.includes(s4) && i.children.items.push({
          title: this.api.i18n.t(l2),
          icon: He2.get(s4),
          isActive: this.data.meta.counterType === P2.get(l2),
          closeOnActivate: true,
          onActivate: () => {
            this.changeCounters(P2.get(l2));
          }
        });
      }), i.children.items.length > 1 && r2.push(i), t.push({ type: "separator" }, ...r2);
    }
    return t;
  }
  /**
   * On paste callback that is fired from Editor.
   * @param event - event with pasted data
   */
  onPaste(t) {
    const { tagName: n2 } = t.detail.data;
    switch (n2) {
      case "OL":
        this.listStyle = "ordered";
        break;
      case "UL":
      case "LI":
        this.listStyle = "unordered";
    }
    this.list.onPaste(t);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   * @param element - html element that contains whole list
   */
  pasteHandler(t) {
    return this.list.pasteHandler(t);
  }
  /**
   * Changes ordered list counterType property value
   * @param counterType - new value of the counterType value
   */
  changeCounters(t) {
    var n2;
    (n2 = this.list) == null || n2.changeCounters(t), this.data.meta.counterType = t;
  }
  /**
   * Changes ordered list start property value
   * @param index - new value of the start property
   */
  changeStartWith(t) {
    var n2;
    (n2 = this.list) == null || n2.changeStartWith(t), this.data.meta.start = t;
  }
  /**
   * This method allows changing tabulator respectfully to passed style
   */
  changeTabulatorByStyle() {
    switch (this.listStyle) {
      case "ordered":
        this.list = new z2(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new v2(this.readOnly, this.config)
        );
        break;
      case "unordered":
        this.list = new z2(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new b2(this.readOnly, this.config)
        );
        break;
      case "checklist":
        this.list = new z2(
          {
            data: this.data,
            readOnly: this.readOnly,
            api: this.api,
            config: this.config,
            block: this.block
          },
          new f(this.readOnly, this.config)
        );
        break;
    }
  }
};

// node_modules/@editorjs/quote/dist/quote.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var De3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>';
var He3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>';
var Re3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
var b3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fe3(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n2 = function r2() {
      return this instanceof r2 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n2.prototype = t.prototype;
  } else
    n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e).forEach(function(r2) {
    var i = Object.getOwnPropertyDescriptor(e, r2);
    Object.defineProperty(n2, r2, i.get ? i : {
      enumerable: true,
      get: function() {
        return e[r2];
      }
    });
  }), n2;
}
var v3 = {};
var P3 = {};
var j3 = {};
Object.defineProperty(j3, "__esModule", { value: true });
j3.allInputsSelector = We3;
function We3() {
  var e = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + e.map(function(t) {
    return 'input[type="'.concat(t, '"]');
  }).join(", ");
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.allInputsSelector = void 0;
  var t = j3;
  Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
    return t.allInputsSelector;
  } });
})(P3);
var c2 = {};
var T2 = {};
Object.defineProperty(T2, "__esModule", { value: true });
T2.isNativeInput = Ue3;
function Ue3(e) {
  var t = [
    "INPUT",
    "TEXTAREA"
  ];
  return e && e.tagName ? t.includes(e.tagName) : false;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isNativeInput = void 0;
  var t = T2;
  Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
    return t.isNativeInput;
  } });
})(c2);
var ie2 = {};
var C2 = {};
Object.defineProperty(C2, "__esModule", { value: true });
C2.append = qe3;
function qe3(e, t) {
  Array.isArray(t) ? t.forEach(function(n2) {
    e.appendChild(n2);
  }) : e.appendChild(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.append = void 0;
  var t = C2;
  Object.defineProperty(e, "append", { enumerable: true, get: function() {
    return t.append;
  } });
})(ie2);
var L3 = {};
var S3 = {};
Object.defineProperty(S3, "__esModule", { value: true });
S3.blockElements = ze3;
function ze3() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.blockElements = void 0;
  var t = S3;
  Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
    return t.blockElements;
  } });
})(L3);
var ae3 = {};
var M2 = {};
Object.defineProperty(M2, "__esModule", { value: true });
M2.calculateBaseline = Ge3;
function Ge3(e) {
  var t = window.getComputedStyle(e), n2 = parseFloat(t.fontSize), r2 = parseFloat(t.lineHeight) || n2 * 1.2, i = parseFloat(t.paddingTop), a4 = parseFloat(t.borderTopWidth), l2 = parseFloat(t.marginTop), u3 = n2 * 0.8, d4 = (r2 - n2) / 2, s4 = l2 + a4 + i + d4 + u3;
  return s4;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.calculateBaseline = void 0;
  var t = M2;
  Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
    return t.calculateBaseline;
  } });
})(ae3);
var le3 = {};
var k2 = {};
var w = {};
var N2 = {};
Object.defineProperty(N2, "__esModule", { value: true });
N2.isContentEditable = Ke3;
function Ke3(e) {
  return e.contentEditable === "true";
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isContentEditable = void 0;
  var t = N2;
  Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
    return t.isContentEditable;
  } });
})(w);
Object.defineProperty(k2, "__esModule", { value: true });
k2.canSetCaret = Qe3;
var Xe3 = c2;
var Ye3 = w;
function Qe3(e) {
  var t = true;
  if ((0, Xe3.isNativeInput)(e))
    switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = false;
        break;
    }
  else
    t = (0, Ye3.isContentEditable)(e);
  return t;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.canSetCaret = void 0;
  var t = k2;
  Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
    return t.canSetCaret;
  } });
})(le3);
var y3 = {};
var I2 = {};
function Ve3(e, t, n2) {
  const r2 = n2.value !== void 0 ? "value" : "get", i = n2[r2], a4 = `#${t}Cache`;
  if (n2[r2] = function(...l2) {
    return this[a4] === void 0 && (this[a4] = i.apply(this, l2)), this[a4];
  }, r2 === "get" && n2.set) {
    const l2 = n2.set;
    n2.set = function(u3) {
      delete e[a4], l2.apply(this, u3);
    };
  }
  return n2;
}
function ue3() {
  const e = {
    win: false,
    mac: false,
    x11: false,
    linux: false
  }, t = Object.keys(e).find((n2) => window.navigator.appVersion.toLowerCase().indexOf(n2) !== -1);
  return t !== void 0 && (e[t] = true), e;
}
function A3(e) {
  return e != null && e !== "" && (typeof e != "object" || Object.keys(e).length > 0);
}
function Ze3(e) {
  return !A3(e);
}
var Je3 = () => typeof window < "u" && window.navigator !== null && A3(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function xe3(e) {
  const t = ue3();
  return e = e.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), t.mac ? e = e.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e = e.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), e;
}
function et3(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function tt2(e) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-999px", t.style.bottom = "-999px", t.innerHTML = e, document.body.appendChild(t);
  const n2 = window.getSelection(), r2 = document.createRange();
  if (r2.selectNode(t), n2 === null)
    throw new Error("Cannot copy text to clipboard");
  n2.removeAllRanges(), n2.addRange(r2), document.execCommand("copy"), document.body.removeChild(t);
}
function nt3(e, t, n2) {
  let r2;
  return (...i) => {
    const a4 = this, l2 = () => {
      r2 = void 0, n2 !== true && e.apply(a4, i);
    }, u3 = n2 === true && r2 !== void 0;
    window.clearTimeout(r2), r2 = window.setTimeout(l2, t), u3 && e.apply(a4, i);
  };
}
function o2(e) {
  return Object.prototype.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function rt3(e) {
  return o2(e) === "boolean";
}
function oe3(e) {
  return o2(e) === "function" || o2(e) === "asyncfunction";
}
function it3(e) {
  return oe3(e) && /^\s*class\s+/.test(e.toString());
}
function at3(e) {
  return o2(e) === "number";
}
function g2(e) {
  return o2(e) === "object";
}
function lt3(e) {
  return Promise.resolve(e) === e;
}
function ut2(e) {
  return o2(e) === "string";
}
function ot3(e) {
  return o2(e) === "undefined";
}
function O2(e, ...t) {
  if (!t.length)
    return e;
  const n2 = t.shift();
  if (g2(e) && g2(n2))
    for (const r2 in n2)
      g2(n2[r2]) ? (e[r2] === void 0 && Object.assign(e, { [r2]: {} }), O2(e[r2], n2[r2])) : Object.assign(e, { [r2]: n2[r2] });
  return O2(e, ...t);
}
function st3(e, t, n2) {
  const r2 = `\xAB${t}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${n2}\xBB instead.`;
  e && console.warn(r2);
}
function ct2(e) {
  try {
    return new URL(e).href;
  } catch {
  }
  return e.substring(0, 2) === "//" ? window.location.protocol + e : window.location.origin + e;
}
function dt2(e) {
  return e > 47 && e < 58 || e === 32 || e === 13 || e === 229 || e > 64 && e < 91 || e > 95 && e < 112 || e > 185 && e < 193 || e > 218 && e < 223;
}
var ft2 = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
};
var pt2 = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
var vt2 = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(t) {
    return new Promise((n2, r2) => {
      this.completed = this.completed.then(t).then(n2).catch(r2);
    });
  }
};
function gt2(e, t, n2 = void 0) {
  let r2, i, a4, l2 = null, u3 = 0;
  n2 || (n2 = {});
  const d4 = function() {
    u3 = n2.leading === false ? 0 : Date.now(), l2 = null, a4 = e.apply(r2, i), l2 === null && (r2 = i = null);
  };
  return function() {
    const s4 = Date.now();
    !u3 && n2.leading === false && (u3 = s4);
    const f2 = t - (s4 - u3);
    return r2 = this, i = arguments, f2 <= 0 || f2 > t ? (l2 && (clearTimeout(l2), l2 = null), u3 = s4, a4 = e.apply(r2, i), l2 === null && (r2 = i = null)) : !l2 && n2.trailing !== false && (l2 = setTimeout(d4, f2)), a4;
  };
}
var mt2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: vt2,
  beautifyShortcut: xe3,
  cacheable: Ve3,
  capitalize: et3,
  copyTextToClipboard: tt2,
  debounce: nt3,
  deepMerge: O2,
  deprecationAssert: st3,
  getUserOS: ue3,
  getValidUrl: ct2,
  isBoolean: rt3,
  isClass: it3,
  isEmpty: Ze3,
  isFunction: oe3,
  isIosDevice: Je3,
  isNumber: at3,
  isObject: g2,
  isPrintableKey: dt2,
  isPromise: lt3,
  isString: ut2,
  isUndefined: ot3,
  keyCodes: ft2,
  mouseButtons: pt2,
  notEmpty: A3,
  throttle: gt2,
  typeOf: o2
}, Symbol.toStringTag, { value: "Module" }));
var $3 = /* @__PURE__ */ Fe3(mt2);
Object.defineProperty(I2, "__esModule", { value: true });
I2.containsOnlyInlineElements = _t3;
var bt2 = $3;
var yt2 = L3;
function _t3(e) {
  var t;
  (0, bt2.isString)(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
  var n2 = function(r2) {
    return !(0, yt2.blockElements)().includes(r2.tagName.toLowerCase()) && Array.from(r2.children).every(n2);
  };
  return Array.from(t.children).every(n2);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.containsOnlyInlineElements = void 0;
  var t = I2;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
    return t.containsOnlyInlineElements;
  } });
})(y3);
var se2 = {};
var B2 = {};
var _2 = {};
var D3 = {};
Object.defineProperty(D3, "__esModule", { value: true });
D3.make = ht2;
function ht2(e, t, n2) {
  var r2;
  t === void 0 && (t = null), n2 === void 0 && (n2 = {});
  var i = document.createElement(e);
  if (Array.isArray(t)) {
    var a4 = t.filter(function(u3) {
      return u3 !== void 0;
    });
    (r2 = i.classList).add.apply(r2, a4);
  } else
    t !== null && i.classList.add(t);
  for (var l2 in n2)
    Object.prototype.hasOwnProperty.call(n2, l2) && (i[l2] = n2[l2]);
  return i;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.make = void 0;
  var t = D3;
  Object.defineProperty(e, "make", { enumerable: true, get: function() {
    return t.make;
  } });
})(_2);
Object.defineProperty(B2, "__esModule", { value: true });
B2.fragmentToString = Ot3;
var Et3 = _2;
function Ot3(e) {
  var t = (0, Et3.make)("div");
  return t.appendChild(e), t.innerHTML;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.fragmentToString = void 0;
  var t = B2;
  Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
    return t.fragmentToString;
  } });
})(se2);
var ce3 = {};
var H2 = {};
Object.defineProperty(H2, "__esModule", { value: true });
H2.getContentLength = jt3;
var Pt3 = c2;
function jt3(e) {
  var t, n2;
  return (0, Pt3.isNativeInput)(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : (n2 = (t = e.textContent) === null || t === void 0 ? void 0 : t.length) !== null && n2 !== void 0 ? n2 : 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getContentLength = void 0;
  var t = H2;
  Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
    return t.getContentLength;
  } });
})(ce3);
var R3 = {};
var F2 = {};
var re3 = b3 && b3.__spreadArray || function(e, t, n2) {
  if (n2 || arguments.length === 2)
    for (var r2 = 0, i = t.length, a4; r2 < i; r2++)
      (a4 || !(r2 in t)) && (a4 || (a4 = Array.prototype.slice.call(t, 0, r2)), a4[r2] = t[r2]);
  return e.concat(a4 || Array.prototype.slice.call(t));
};
Object.defineProperty(F2, "__esModule", { value: true });
F2.getDeepestBlockElements = de3;
var Tt3 = y3;
function de3(e) {
  return (0, Tt3.containsOnlyInlineElements)(e) ? [e] : Array.from(e.children).reduce(function(t, n2) {
    return re3(re3([], t, true), de3(n2), true);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestBlockElements = void 0;
  var t = F2;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
    return t.getDeepestBlockElements;
  } });
})(R3);
var fe3 = {};
var W2 = {};
var h3 = {};
var U3 = {};
Object.defineProperty(U3, "__esModule", { value: true });
U3.isLineBreakTag = Ct3;
function Ct3(e) {
  return [
    "BR",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isLineBreakTag = void 0;
  var t = U3;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
    return t.isLineBreakTag;
  } });
})(h3);
var E3 = {};
var q2 = {};
Object.defineProperty(q2, "__esModule", { value: true });
q2.isSingleTag = Lt3;
function Lt3(e) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(e.tagName);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isSingleTag = void 0;
  var t = q2;
  Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
    return t.isSingleTag;
  } });
})(E3);
Object.defineProperty(W2, "__esModule", { value: true });
W2.getDeepestNode = pe3;
var St3 = c2;
var Mt3 = h3;
var kt3 = E3;
function pe3(e, t) {
  t === void 0 && (t = false);
  var n2 = t ? "lastChild" : "firstChild", r2 = t ? "previousSibling" : "nextSibling";
  if (e.nodeType === Node.ELEMENT_NODE && e[n2]) {
    var i = e[n2];
    if ((0, kt3.isSingleTag)(i) && !(0, St3.isNativeInput)(i) && !(0, Mt3.isLineBreakTag)(i))
      if (i[r2])
        i = i[r2];
      else if (i.parentNode !== null && i.parentNode[r2])
        i = i.parentNode[r2];
      else
        return i.parentNode;
    return pe3(i, t);
  }
  return e;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.getDeepestNode = void 0;
  var t = W2;
  Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
    return t.getDeepestNode;
  } });
})(fe3);
var ve2 = {};
var z3 = {};
var p = b3 && b3.__spreadArray || function(e, t, n2) {
  if (n2 || arguments.length === 2)
    for (var r2 = 0, i = t.length, a4; r2 < i; r2++)
      (a4 || !(r2 in t)) && (a4 || (a4 = Array.prototype.slice.call(t, 0, r2)), a4[r2] = t[r2]);
  return e.concat(a4 || Array.prototype.slice.call(t));
};
Object.defineProperty(z3, "__esModule", { value: true });
z3.findAllInputs = $t3;
var wt3 = y3;
var Nt3 = R3;
var It3 = P3;
var At3 = c2;
function $t3(e) {
  return Array.from(e.querySelectorAll((0, It3.allInputsSelector)())).reduce(function(t, n2) {
    return (0, At3.isNativeInput)(n2) || (0, wt3.containsOnlyInlineElements)(n2) ? p(p([], t, true), [n2], false) : p(p([], t, true), (0, Nt3.getDeepestBlockElements)(n2), true);
  }, []);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.findAllInputs = void 0;
  var t = z3;
  Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
    return t.findAllInputs;
  } });
})(ve2);
var ge3 = {};
var G3 = {};
Object.defineProperty(G3, "__esModule", { value: true });
G3.isCollapsedWhitespaces = Bt3;
function Bt3(e) {
  return !/[^\t\n\r ]/.test(e);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isCollapsedWhitespaces = void 0;
  var t = G3;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
    return t.isCollapsedWhitespaces;
  } });
})(ge3);
var K3 = {};
var X3 = {};
Object.defineProperty(X3, "__esModule", { value: true });
X3.isElement = Ht3;
var Dt3 = $3;
function Ht3(e) {
  return (0, Dt3.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.ELEMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isElement = void 0;
  var t = X3;
  Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
    return t.isElement;
  } });
})(K3);
var me3 = {};
var Y3 = {};
var Q2 = {};
var V3 = {};
Object.defineProperty(V3, "__esModule", { value: true });
V3.isLeaf = Rt3;
function Rt3(e) {
  return e === null ? false : e.childNodes.length === 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isLeaf = void 0;
  var t = V3;
  Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
    return t.isLeaf;
  } });
})(Q2);
var Z3 = {};
var J3 = {};
Object.defineProperty(J3, "__esModule", { value: true });
J3.isNodeEmpty = zt3;
var Ft3 = h3;
var Wt3 = K3;
var Ut3 = c2;
var qt3 = E3;
function zt3(e, t) {
  var n2 = "";
  return (0, qt3.isSingleTag)(e) && !(0, Ft3.isLineBreakTag)(e) ? false : ((0, Wt3.isElement)(e) && (0, Ut3.isNativeInput)(e) ? n2 = e.value : e.textContent !== null && (n2 = e.textContent.replace("\u200B", "")), t !== void 0 && (n2 = n2.replace(new RegExp(t, "g"), "")), n2.trim().length === 0);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isNodeEmpty = void 0;
  var t = J3;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
    return t.isNodeEmpty;
  } });
})(Z3);
Object.defineProperty(Y3, "__esModule", { value: true });
Y3.isEmpty = Xt3;
var Gt3 = Q2;
var Kt3 = Z3;
function Xt3(e, t) {
  e.normalize();
  for (var n2 = [e]; n2.length > 0; ) {
    var r2 = n2.shift();
    if (r2) {
      if (e = r2, (0, Gt3.isLeaf)(e) && !(0, Kt3.isNodeEmpty)(e, t))
        return false;
      n2.push.apply(n2, Array.from(e.childNodes));
    }
  }
  return true;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isEmpty = void 0;
  var t = Y3;
  Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
    return t.isEmpty;
  } });
})(me3);
var be3 = {};
var x2 = {};
Object.defineProperty(x2, "__esModule", { value: true });
x2.isFragment = Qt3;
var Yt3 = $3;
function Qt3(e) {
  return (0, Yt3.isNumber)(e) ? false : !!e && !!e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isFragment = void 0;
  var t = x2;
  Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
    return t.isFragment;
  } });
})(be3);
var ye3 = {};
var ee3 = {};
Object.defineProperty(ee3, "__esModule", { value: true });
ee3.isHTMLString = Zt3;
var Vt3 = _2;
function Zt3(e) {
  var t = (0, Vt3.make)("div");
  return t.innerHTML = e, t.childElementCount > 0;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.isHTMLString = void 0;
  var t = ee3;
  Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
    return t.isHTMLString;
  } });
})(ye3);
var _e3 = {};
var te3 = {};
Object.defineProperty(te3, "__esModule", { value: true });
te3.offset = Jt3;
function Jt3(e) {
  var t = e.getBoundingClientRect(), n2 = window.pageXOffset || document.documentElement.scrollLeft, r2 = window.pageYOffset || document.documentElement.scrollTop, i = t.top + r2, a4 = t.left + n2;
  return {
    top: i,
    left: a4,
    bottom: i + t.height,
    right: a4 + t.width
  };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.offset = void 0;
  var t = te3;
  Object.defineProperty(e, "offset", { enumerable: true, get: function() {
    return t.offset;
  } });
})(_e3);
var he3 = {};
var ne3 = {};
Object.defineProperty(ne3, "__esModule", { value: true });
ne3.prepend = xt3;
function xt3(e, t) {
  Array.isArray(t) ? (t = t.reverse(), t.forEach(function(n2) {
    return e.prepend(n2);
  })) : e.prepend(t);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.prepend = void 0;
  var t = ne3;
  Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
    return t.prepend;
  } });
})(he3);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: true }), e.prepend = e.offset = e.make = e.isLineBreakTag = e.isSingleTag = e.isNodeEmpty = e.isLeaf = e.isHTMLString = e.isFragment = e.isEmpty = e.isElement = e.isContentEditable = e.isCollapsedWhitespaces = e.findAllInputs = e.isNativeInput = e.allInputsSelector = e.getDeepestNode = e.getDeepestBlockElements = e.getContentLength = e.fragmentToString = e.containsOnlyInlineElements = e.canSetCaret = e.calculateBaseline = e.blockElements = e.append = void 0;
  var t = P3;
  Object.defineProperty(e, "allInputsSelector", { enumerable: true, get: function() {
    return t.allInputsSelector;
  } });
  var n2 = c2;
  Object.defineProperty(e, "isNativeInput", { enumerable: true, get: function() {
    return n2.isNativeInput;
  } });
  var r2 = ie2;
  Object.defineProperty(e, "append", { enumerable: true, get: function() {
    return r2.append;
  } });
  var i = L3;
  Object.defineProperty(e, "blockElements", { enumerable: true, get: function() {
    return i.blockElements;
  } });
  var a4 = ae3;
  Object.defineProperty(e, "calculateBaseline", { enumerable: true, get: function() {
    return a4.calculateBaseline;
  } });
  var l2 = le3;
  Object.defineProperty(e, "canSetCaret", { enumerable: true, get: function() {
    return l2.canSetCaret;
  } });
  var u3 = y3;
  Object.defineProperty(e, "containsOnlyInlineElements", { enumerable: true, get: function() {
    return u3.containsOnlyInlineElements;
  } });
  var d4 = se2;
  Object.defineProperty(e, "fragmentToString", { enumerable: true, get: function() {
    return d4.fragmentToString;
  } });
  var s4 = ce3;
  Object.defineProperty(e, "getContentLength", { enumerable: true, get: function() {
    return s4.getContentLength;
  } });
  var f2 = R3;
  Object.defineProperty(e, "getDeepestBlockElements", { enumerable: true, get: function() {
    return f2.getDeepestBlockElements;
  } });
  var Oe3 = fe3;
  Object.defineProperty(e, "getDeepestNode", { enumerable: true, get: function() {
    return Oe3.getDeepestNode;
  } });
  var Pe3 = ve2;
  Object.defineProperty(e, "findAllInputs", { enumerable: true, get: function() {
    return Pe3.findAllInputs;
  } });
  var je3 = ge3;
  Object.defineProperty(e, "isCollapsedWhitespaces", { enumerable: true, get: function() {
    return je3.isCollapsedWhitespaces;
  } });
  var Te3 = w;
  Object.defineProperty(e, "isContentEditable", { enumerable: true, get: function() {
    return Te3.isContentEditable;
  } });
  var Ce3 = K3;
  Object.defineProperty(e, "isElement", { enumerable: true, get: function() {
    return Ce3.isElement;
  } });
  var Le3 = me3;
  Object.defineProperty(e, "isEmpty", { enumerable: true, get: function() {
    return Le3.isEmpty;
  } });
  var Se3 = be3;
  Object.defineProperty(e, "isFragment", { enumerable: true, get: function() {
    return Se3.isFragment;
  } });
  var Me3 = ye3;
  Object.defineProperty(e, "isHTMLString", { enumerable: true, get: function() {
    return Me3.isHTMLString;
  } });
  var ke3 = Q2;
  Object.defineProperty(e, "isLeaf", { enumerable: true, get: function() {
    return ke3.isLeaf;
  } });
  var we3 = Z3;
  Object.defineProperty(e, "isNodeEmpty", { enumerable: true, get: function() {
    return we3.isNodeEmpty;
  } });
  var Ne3 = h3;
  Object.defineProperty(e, "isLineBreakTag", { enumerable: true, get: function() {
    return Ne3.isLineBreakTag;
  } });
  var Ie3 = E3;
  Object.defineProperty(e, "isSingleTag", { enumerable: true, get: function() {
    return Ie3.isSingleTag;
  } });
  var Ae3 = _2;
  Object.defineProperty(e, "make", { enumerable: true, get: function() {
    return Ae3.make;
  } });
  var $e3 = _e3;
  Object.defineProperty(e, "offset", { enumerable: true, get: function() {
    return $e3.offset;
  } });
  var Be3 = he3;
  Object.defineProperty(e, "prepend", { enumerable: true, get: function() {
    return Be3.prepend;
  } });
})(v3);
var Ee3 = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e))(Ee3 || {});
var m2 = class _m {
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param params - Quote Tool constructor params
   * @param params.data - previously saved data
   * @param params.config - user config for Tool
   * @param params.api - editor.js api
   * @param params.readOnly - read only mode flag
   */
  constructor({ data: t, config: n2, api: r2, readOnly: i, block: a4 }) {
    const { DEFAULT_ALIGNMENT: l2 } = _m;
    this.api = r2, this.readOnly = i, this.quotePlaceholder = r2.i18n.t((n2 == null ? void 0 : n2.quotePlaceholder) ?? _m.DEFAULT_QUOTE_PLACEHOLDER), this.captionPlaceholder = r2.i18n.t((n2 == null ? void 0 : n2.captionPlaceholder) ?? _m.DEFAULT_CAPTION_PLACEHOLDER), this.data = {
      text: t.text || "",
      caption: t.caption || "",
      alignment: Object.values(Ee3).includes(t.alignment) ? t.alignment : (n2 == null ? void 0 : n2.defaultAlignment) ?? l2
    }, this.css = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    }, this.block = a4;
  }
  /**
   * Notify core that read-only mode is supported
   * @returns true
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   * @returns icon and title of the toolbox
   */
  static get toolbox() {
    return {
      icon: Re3,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   * @returns true
   */
  static get contentless() {
    return true;
  }
  /**
   * Allow to press Enter inside the Quote
   * @returns true
   */
  static get enableLineBreaks() {
    return true;
  }
  /**
   * Default placeholder for quote text
   * @returns 'Enter a quote'
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   * @returns 'Enter a caption'
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Default quote alignment
   * @returns Alignment.Left
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  /**
   * Allow Quote to be converted to/from other blocks
   * @returns conversion config object
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       * @param quoteData - Quote data object
       * @returns string
       */
      export: function(t) {
        return t.caption ? `${t.text} \u2014 ${t.caption}` : t.text;
      }
    };
  }
  /**
   * Tool`s styles
   * @returns CSS classes names
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Tool`s settings properties
   * @returns settings properties
   */
  get settings() {
    return [
      {
        name: "left",
        icon: He3
      },
      {
        name: "center",
        icon: De3
      }
    ];
  }
  /**
   * Create Quote Tool container with inputs
   * @returns blockquote DOM element - Quote Tool container
   */
  render() {
    const t = v3.make("blockquote", [
      this.css.baseClass,
      this.css.wrapper
    ]), n2 = v3.make("div", [this.css.input, this.css.text], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.text
    }), r2 = v3.make("div", [this.css.input, this.css.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption
    });
    return n2.dataset.placeholder = this.quotePlaceholder, r2.dataset.placeholder = this.captionPlaceholder, t.appendChild(n2), t.appendChild(r2), t;
  }
  /**
   * Extract Quote data from Quote Tool element
   * @param quoteElement - Quote DOM element to save
   * @returns Quote data object
   */
  save(t) {
    const n2 = t.querySelector(`.${this.css.text}`), r2 = t.querySelector(`.${this.css.caption}`);
    return Object.assign(this.data, {
      text: (n2 == null ? void 0 : n2.innerHTML) ?? "",
      caption: (r2 == null ? void 0 : r2.innerHTML) ?? ""
    });
  }
  /**
   * Sanitizer rules
   * @returns sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: true
      },
      caption: {
        br: true
      },
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   * @returns settings menu
   */
  renderSettings() {
    const t = (n2) => n2 && n2[0].toUpperCase() + n2.slice(1);
    return this.settings.map((n2) => ({
      icon: n2.icon,
      label: this.api.i18n.t(`Align ${t(n2.name)}`),
      onActivate: () => this._toggleTune(n2.name),
      isActive: this.data.alignment === n2.name,
      closeOnActivate: true
    }));
  }
  /**
   * Toggle quote`s alignment
   * @param tune - alignment
   */
  _toggleTune(t) {
    this.data.alignment = t, this.block.dispatchChange();
  }
};

// node_modules/@editorjs/code/dist/code.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")), document.head.appendChild(e);
    }
  } catch (o4) {
    console.error("vite-plugin-css-injected-by-js", o4);
  }
})();
function c3(l2, t) {
  let a4 = "";
  for (; a4 !== `
` && t > 0; )
    t = t - 1, a4 = l2.substr(t, 1);
  return a4 === `
` && (t += 1), t;
}
var h4 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
var d2 = class _d {
  /**
   * Notify core that read-only mode is supported
   * @returns true if read-only mode is supported
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Allows pressing Enter key to create line breaks inside the CodeTool textarea
   * This enables multi-line input within the code editor.
   * @returns true if line breaks are allowed in the textarea
   */
  static get enableLineBreaks() {
    return true;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   * @param options - tool constricting options
   * @param options.data — previously saved plugin code
   * @param options.config - user config for Tool
   * @param options.api - Editor.js API
   * @param options.readOnly - read only mode flag
   */
  constructor({ data: t, config: e, api: a4, readOnly: s4 }) {
    this.api = a4, this.readOnly = s4, this.placeholder = this.api.i18n.t(e.placeholder || _d.DEFAULT_PLACEHOLDER), this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: "ce-code",
      textarea: "ce-code__textarea"
    }, this.nodes = {
      holder: null,
      textarea: null
    }, this.data = {
      code: t.code ?? ""
    }, this.nodes.holder = this.drawView();
  }
  /**
   * Return Tool's view
   * @returns this.nodes.holder - Code's wrapper
   */
  render() {
    return this.nodes.holder;
  }
  /**
   * Extract Tool's data from the view
   * @param codeWrapper - CodeTool's wrapper, containing textarea with code
   * @returns - saved plugin code
   */
  save(t) {
    return {
      code: t.querySelector("textarea").value
    };
  }
  /**
   * onPaste callback fired from Editor`s core
   * @param event - event with pasted content
   */
  onPaste(t) {
    switch (t.type) {
      case "tag": {
        const e = t.detail.data;
        this.handleHTMLPaste(e);
        break;
      }
    }
  }
  /**
   * Returns Tool`s data from private property
   * @returns
   */
  get data() {
    return this._data;
  }
  /**
   * Set Tool`s data to private property and update view
   * @param data - saved tool data
   */
  set data(t) {
    this._data = t, this.nodes.textarea && (this.nodes.textarea.value = t.code);
  }
  /**
   * Get Tool toolbox settings.
   * Provides the icon and title to display in the toolbox for the CodeTool.
   * @returns An object containing:
   * - icon: SVG representation of the Tool's icon
   * - title: Title to show in the toolbox
   */
  static get toolbox() {
    return {
      icon: h4,
      title: "Code"
    };
  }
  /**
   * Default placeholder for CodeTool's textarea
   * @returns
   */
  static get DEFAULT_PLACEHOLDER() {
    return "Enter a code";
  }
  /**
   *  Used by Editor.js paste handling API.
   *  Provides configuration to handle CODE tag.
   * @returns
   */
  static get pasteConfig() {
    return {
      tags: ["pre"]
    };
  }
  /**
   * Automatic sanitize config
   * @returns
   */
  static get sanitize() {
    return {
      code: true
      // Allow HTML tags
    };
  }
  /**
   * Handles Tab key pressing (adds/removes indentations)
   * @param event - keydown
   */
  tabHandler(t) {
    t.stopPropagation(), t.preventDefault();
    const e = t.target, a4 = t.shiftKey, s4 = e.selectionStart, r2 = e.value, n2 = "  ";
    let i;
    if (!a4)
      i = s4 + n2.length, e.value = r2.substring(0, s4) + n2 + r2.substring(s4);
    else {
      const o4 = c3(r2, s4);
      if (r2.substr(o4, n2.length) !== n2)
        return;
      e.value = r2.substring(0, o4) + r2.substring(o4 + n2.length), i = s4 - n2.length;
    }
    e.setSelectionRange(i, i);
  }
  /**
   * Create Tool's view
   * @returns
   */
  drawView() {
    const t = document.createElement("div"), e = document.createElement("textarea");
    return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.value = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = true), t.appendChild(e), e.addEventListener("keydown", (a4) => {
      switch (a4.code) {
        case "Tab":
          this.tabHandler(a4);
          break;
      }
    }), this.nodes.textarea = e, t;
  }
  /**
   * Extracts the code content from the pasted element's innerHTML and populates the tool's data.
   * @param element - pasted HTML element
   */
  handleHTMLPaste(t) {
    this.data = {
      code: t.innerHTML
    };
  }
};

// node_modules/@editorjs/inline-code/dist/inline-code.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}")), document.head.appendChild(e);
    }
  } catch (n2) {
    console.error("vite-plugin-css-injected-by-js", n2);
  }
})();
var a2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
var s = class _s2 {
  constructor({ api: t }) {
    this.tag = "CODE", this.api = t, this.button = null, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "inline-code";
  }
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return true;
  }
  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(t) {
    var n2;
    if (!t)
      return;
    let e = this.api.selection.findParentTag(this.tag, _s2.CSS);
    e ? this.unwrap(e) : (n2 = t.commonAncestorContainer.parentElement) != null && n2.querySelector(this.tag) || this.wrap(t);
  }
  /**
  * Wrap selection with term-tag
  *
  * @param {Range} range - selected fragment
  */
  wrap(t) {
    let e = document.createElement(this.tag);
    e.classList.add(_s2.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(t) {
    var o4;
    this.api.selection.expandToTag(t);
    const e = window.getSelection();
    if (!e)
      return;
    const n2 = e.getRangeAt(0), i = n2.extractContents();
    (o4 = t.parentNode) == null || o4.removeChild(t), n2.insertNode(i), e.removeAllRanges(), e.addRange(n2);
  }
  /**
   * Check and change Term's state for current selection
   * 
   * @return {boolean}
   */
  checkState() {
    const t = this.api.selection.findParentTag(this.tag, _s2.CSS);
    return this.button && this.button.classList.toggle(this.iconClasses.active, !!t), !!t;
  }
  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  get toolboxIcon() {
    return a2;
  }
  /**
   * Sanitizer rule
   * @return {SanitizerConfig}
   */
  static get sanitize() {
    return {
      code: {
        class: _s2.CSS
      }
    };
  }
};

// node_modules/@editorjs/marker/dist/marker.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".cdx-marker{background:rgba(245,235,111,.29);padding:3px 0}")), document.head.appendChild(e);
    }
  } catch (d4) {
    console.error("vite-plugin-css-injected-by-js", d4);
  }
})();
var o3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3536 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3536 9.31802L7.96729 12.7043C7.40889 13.2627 7.02827 13.9739 6.8734 14.7482L6.69798 15.6253C6.55804 16.325 7.17496 16.942 7.87468 16.802L8.75176 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3536 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
var s2 = class _s2 {
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "cdx-marker";
  }
  /**
   * @param {{api: object}}  - Editor.js API
   */
  constructor({ api: t }) {
    this.api = t, this.button = null, this.tag = "MARK", this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return true;
  }
  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(t) {
    if (!t)
      return;
    let e = this.api.selection.findParentTag(this.tag, _s2.CSS);
    e ? this.unwrap(e) : this.wrap(t);
  }
  /**
   * Wrap selection with term-tag
   *
   * @param {Range} range - selected fragment
   */
  wrap(t) {
    let e = document.createElement(this.tag);
    e.classList.add(_s2.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(t) {
    this.api.selection.expandToTag(t);
    let e = window.getSelection(), n2 = e.getRangeAt(0), i = n2.extractContents();
    t.parentNode.removeChild(t), n2.insertNode(i), e.removeAllRanges(), e.addRange(n2);
  }
  /**
   * Check and change Term's state for current selection
   */
  checkState() {
    const t = this.api.selection.findParentTag(this.tag, _s2.CSS);
    this.button.classList.toggle(this.iconClasses.active, !!t);
  }
  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  get toolboxIcon() {
    return o3;
  }
  /**
   * Sanitizer rule
   * @return {{mark: {class: string}}}
   */
  static get sanitize() {
    return {
      mark: {
        class: _s2.CSS
      }
    };
  }
};

// node_modules/@editorjs/delimiter/dist/delimiter.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
var n = class {
  /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return true;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data: t, config: s4, api: e }) {
    this.api = e, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-delimiter"
    }, this._element = this.drawView(), this.data = t;
  }
  /**
   * Create Tool's view
   * @return {HTMLDivElement}
   * @private
   */
  drawView() {
    let t = document.createElement("div");
    return t.classList.add(this._CSS.wrapper, this._CSS.block), t;
  }
  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */
  save(t) {
    return {};
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: r,
      title: "Delimiter"
    };
  }
  /**
   * Delimiter onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return { tags: ["HR"] };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(t) {
    this.data = {};
  }
};

// node_modules/@editorjs/simple-image/dist/simple-image.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".cdx-simple-image .cdx-loader{min-height:200px}.cdx-simple-image .cdx-input{margin-top:10px}.cdx-simple-image img{max-width:100%;vertical-align:bottom}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-simple-image__picture--with-background{background:#eff2f5;padding:10px}.cdx-simple-image__picture--with-background img{display:block;max-width:60%;margin:0 auto}.cdx-simple-image__picture--with-border{border:1px solid #e8e8eb;padding:1px}.cdx-simple-image__picture--stretched img{max-width:none;width:100%}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var s3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>';
var a3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>';
var d3 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
var h5 = class {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: SimpleImageData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data: t, config: e, api: r2, readOnly: o4 }) {
    this.api = r2, this.readOnly = o4, this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1, this.CSS = {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      /**
       * Tool's classes
       */
      wrapper: "cdx-simple-image",
      imageHolder: "cdx-simple-image__picture",
      caption: "cdx-simple-image__caption"
    }, this.nodes = {
      wrapper: null,
      imageHolder: null,
      image: null,
      caption: null
    }, this.data = {
      url: t.url || "",
      caption: t.caption || "",
      withBorder: t.withBorder !== void 0 ? t.withBorder : false,
      withBackground: t.withBackground !== void 0 ? t.withBackground : false,
      stretched: t.stretched !== void 0 ? t.stretched : false
    }, this.tunes = [
      {
        name: "withBorder",
        label: "Add Border",
        icon: a3
      },
      {
        name: "stretched",
        label: "Stretch Image",
        icon: d3
      },
      {
        name: "withBackground",
        label: "Add Background",
        icon: s3
      }
    ];
  }
  /**
   * Creates a Block:
   *  1) Show preloader
   *  2) Start to load an image
   *  3) After loading, append image and caption input
   *
   * @public
   */
  render() {
    const t = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]), e = this._make("div", this.CSS.loading), r2 = this._make("div", this.CSS.imageHolder), o4 = this._make("img"), i = this._make("div", [this.CSS.input, this.CSS.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption || ""
    });
    return i.dataset.placeholder = "Enter a caption", t.appendChild(e), this.data.url && (o4.src = this.data.url), o4.onload = () => {
      t.classList.remove(this.CSS.loading), r2.appendChild(o4), t.appendChild(r2), t.appendChild(i), e.remove(), this._acceptTuneView();
    }, o4.onerror = (n2) => {
      console.log("Failed to load an image", n2);
    }, this.nodes.imageHolder = r2, this.nodes.wrapper = t, this.nodes.image = o4, this.nodes.caption = i, t;
  }
  /**
   * @public
   * @param {Element} blockContent - Tool's wrapper
   * @returns {SimpleImageData}
   */
  save(t) {
    const e = t.querySelector("img"), r2 = t.querySelector("." + this.CSS.input);
    return e ? Object.assign(this.data, {
      url: e.src,
      caption: r2.innerHTML
    }) : this.data;
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      url: {},
      withBorder: {},
      withBackground: {},
      stretched: {},
      caption: {
        br: true
      }
    };
  }
  /**
   * Notify core that read-only mode is suppoorted
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Read pasted image and convert it to base64
   *
   * @static
   * @param {File} file
   * @returns {Promise<SimpleImageData>}
   */
  onDropHandler(t) {
    const e = new FileReader();
    return e.readAsDataURL(t), new Promise((r2) => {
      e.onload = (o4) => {
        r2({
          url: o4.target.result,
          caption: t.name
        });
      };
    });
  }
  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted config
   */
  onPaste(t) {
    switch (t.type) {
      case "tag": {
        const e = t.detail.data;
        this.data = {
          url: e.src
        };
        break;
      }
      case "pattern": {
        const { data: e } = t.detail;
        this.data = {
          url: e
        };
        break;
      }
      case "file": {
        const { file: e } = t.detail;
        this.onDropHandler(e).then((r2) => {
          this.data = r2;
        });
        break;
      }
    }
  }
  /**
   * Returns image data
   *
   * @returns {SimpleImageData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set image data and update the view
   *
   * @param {SimpleImageData} data
   */
  set data(t) {
    this._data = Object.assign({}, this.data, t), this.nodes.image && (this.nodes.image.src = this.data.url), this.nodes.caption && (this.nodes.caption.innerHTML = this.data.caption);
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link ../../../docs/tools.md#paste-handling}
   * @public
   */
  static get pasteConfig() {
    return {
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i
      },
      tags: [
        {
          img: { src: true }
        }
      ],
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Returns image tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.tunes.map((t) => ({
      ...t,
      label: this.api.i18n.t(t.label),
      toggle: true,
      onActivate: () => this._toggleTune(t.name),
      isActive: !!this.data[t.name]
    }));
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(t, e = null, r2 = {}) {
    const o4 = document.createElement(t);
    Array.isArray(e) ? o4.classList.add(...e) : e && o4.classList.add(e);
    for (const i in r2)
      o4[i] = r2[i];
    return o4;
  }
  /**
   * Click on the Settings Button
   *
   * @private
   * @param tune
   */
  _toggleTune(t) {
    this.data[t] = !this.data[t], this._acceptTuneView();
  }
  /**
   * Add specified class corresponds with activated tunes
   *
   * @private
   */
  _acceptTuneView() {
    this.tunes.forEach((t) => {
      this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder + "--" + t.name.replace(/([A-Z])/g, (e) => `-${e[0].toLowerCase()}`), !!this.data[t.name]), t.name === "stretched" && this.api.blocks.stretchBlock(this.blockIndex, !!this.data.stretched);
    });
  }
};

// node_modules/@editorjs/embed/dist/embed.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(e);
    }
  } catch (o4) {
    console.error("vite-plugin-css-injected-by-js", o4);
  }
})();
var w2 = {
  vimeo: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
    embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
    height: 320,
    width: 580
  },
  youtube: {
    regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
    embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    id: ([o4, r2]) => {
      if (!r2 && o4)
        return o4;
      const i = {
        start: "start",
        end: "end",
        t: "start",
        // eslint-disable-next-line camelcase
        time_continue: "start",
        list: "list"
      };
      let e = r2.slice(1).split("&").map((s4) => {
        const [l2, t] = s4.split("=");
        return !o4 && l2 === "v" ? (o4 = t, null) : !i[l2] || t === "LL" || t.startsWith("RDMM") || t.startsWith("FL") ? null : `${i[l2]}=${t}`;
      }).filter((s4) => !!s4);
      return o4 + "?" + e.join("&");
    }
  },
  coub: {
    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
    embedUrl: "https://coub.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  vine: {
    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
    embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  imgur: {
    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
    embedUrl: "http://imgur.com/<%= remote_id %>/embed",
    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
    height: 500,
    width: 540
  },
  gfycat: {
    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
    embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
    html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
    height: 436,
    width: 580
  },
  "twitch-channel": {
    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  "twitch-video": {
    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
    embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  "yandex-music-album": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
    embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
    height: 400,
    width: 540
  },
  "yandex-music-track": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
    height: 100,
    width: 540,
    id: (o4) => o4.join("/")
  },
  "yandex-music-playlist": {
    regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
    height: 400,
    width: 540,
    id: (o4) => o4.join("/")
  },
  codepen: {
    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
    embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    height: 300,
    width: 600,
    id: (o4) => o4.join("/embed/")
  },
  instagram: {
    //it support both reel and post
    regex: /^https:\/\/(?:www\.)?instagram\.com\/(?:reel|p)\/(.*)/,
    embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 505,
    width: 400,
    id: (o4) => {
      var r2;
      return (r2 = o4 == null ? void 0 : o4[0]) == null ? void 0 : r2.split("/")[0];
    }
  },
  twitter: {
    regex: /^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,
    embedUrl: "https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",
    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    id: (o4) => o4[1]
  },
  reddit: {
    regex: /https:\/\/www\.reddit\.com\/(.*)/,
    embedUrl: "https://www.redditmedia.com/<%= remote_id %>?ref_source=embed&ref=share&embed=true",
    html: "<iframe height='300' width='100%' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    width: 600,
    height: 300,
    id: (o4) => o4[0]
  },
  pinterest: {
    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
    id: (o4) => o4[1]
  },
  facebook: {
    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
    id: (o4) => o4.join("/")
  },
  aparat: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
    embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600
  },
  miro: {
    regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
    embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
    html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
  },
  github: {
    regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
    embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
    html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
    height: 300,
    width: 600,
    id: (o4) => `${o4.join("/")}.js`
  }
};
function p2(o4, r2, i) {
  var e, s4, l2, t, a4;
  r2 == null && (r2 = 100);
  function n2() {
    var d4 = Date.now() - t;
    d4 < r2 && d4 >= 0 ? e = setTimeout(n2, r2 - d4) : (e = null, i || (a4 = o4.apply(l2, s4), l2 = s4 = null));
  }
  var h6 = function() {
    l2 = this, s4 = arguments, t = Date.now();
    var d4 = i && !e;
    return e || (e = setTimeout(n2, r2)), d4 && (a4 = o4.apply(l2, s4), l2 = s4 = null), a4;
  };
  return h6.clear = function() {
    e && (clearTimeout(e), e = null);
  }, h6.flush = function() {
    e && (a4 = o4.apply(l2, s4), l2 = s4 = null, clearTimeout(e), e = null);
  }, h6;
}
p2.debounce = p2;
var g3 = p2;
var m3 = class _m {
  /**
   * @param {{data: EmbedData, config: EmbedConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data: r2, api: i, readOnly: e }) {
    this.api = i, this._data = {}, this.element = null, this.readOnly = e, this.data = r2;
  }
  /**
   * @param {EmbedData} data - embed data
   * @param {RegExp} [data.regex] - pattern of source URLs
   * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
   * @param {string} [data.html] - iframe which contains embedded content
   * @param {number} [data.height] - iframe height
   * @param {number} [data.width] - iframe width
   * @param {string} [data.caption] - caption
   */
  set data(r2) {
    var h6;
    if (!(r2 instanceof Object))
      throw Error("Embed Tool data should be object");
    const { service: i, source: e, embed: s4, width: l2, height: t, caption: a4 = "" } = r2;
    this._data = {
      service: i || this.data.service,
      source: e || this.data.source,
      embed: s4 || this.data.embed,
      width: l2 || this.data.width,
      height: t || this.data.height,
      caption: a4 || this.data.caption || ""
    };
    const n2 = this.element;
    n2 && ((h6 = n2.parentNode) == null || h6.replaceChild(this.render(), n2));
  }
  /**
   * @returns {EmbedData}
   */
  get data() {
    if (this.element) {
      const r2 = this.element.querySelector(`.${this.api.styles.input}`);
      this._data.caption = r2 ? r2.innerHTML : "";
    }
    return this._data;
  }
  /**
   * Get plugin styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      container: "embed-tool",
      containerLoading: "embed-tool--loading",
      preloader: "embed-tool__preloader",
      caption: "embed-tool__caption",
      url: "embed-tool__url",
      content: "embed-tool__content"
    };
  }
  /**
   * Render Embed tool content
   *
   * @returns {HTMLElement}
   */
  render() {
    if (!this.data.service) {
      const a4 = document.createElement("div");
      return this.element = a4, a4;
    }
    const { html: r2 } = _m.services[this.data.service], i = document.createElement("div"), e = document.createElement("div"), s4 = document.createElement("template"), l2 = this.createPreloader();
    i.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), e.classList.add(this.CSS.input, this.CSS.caption), i.appendChild(l2), e.contentEditable = (!this.readOnly).toString(), e.dataset.placeholder = this.api.i18n.t("Enter a caption"), e.innerHTML = this.data.caption || "", s4.innerHTML = r2, s4.content.firstChild.setAttribute("src", this.data.embed), s4.content.firstChild.classList.add(this.CSS.content);
    const t = this.embedIsReady(i);
    return s4.content.firstChild && i.appendChild(s4.content.firstChild), i.appendChild(e), t.then(() => {
      i.classList.remove(this.CSS.containerLoading);
    }), this.element = i, i;
  }
  /**
   * Creates preloader to append to container while data is loading
   *
   * @returns {HTMLElement}
   */
  createPreloader() {
    const r2 = document.createElement("preloader"), i = document.createElement("div");
    return i.textContent = this.data.source, r2.classList.add(this.CSS.preloader), i.classList.add(this.CSS.url), r2.appendChild(i), r2;
  }
  /**
   * Save current content and return EmbedData object
   *
   * @returns {EmbedData}
   */
  save() {
    return this.data;
  }
  /**
   * Handle pasted url and return Service object
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(r2) {
    var c4;
    const { key: i, data: e } = r2.detail, { regex: s4, embedUrl: l2, width: t, height: a4, id: n2 = (u3) => u3.shift() || "" } = _m.services[i], h6 = (c4 = s4.exec(e)) == null ? void 0 : c4.slice(1), d4 = h6 ? l2.replace(/<%= remote_id %>/g, n2(h6)) : "";
    this.data = {
      service: i,
      source: e,
      embed: d4,
      width: t,
      height: a4
    };
  }
  /**
   * Analyze provided config and make object with services to use
   *
   * @param {EmbedConfig} config - configuration of embed block element
   */
  static prepare({ config: r2 = {} }) {
    const { services: i = {} } = r2;
    let e = Object.entries(w2);
    const s4 = Object.entries(i).filter(([t, a4]) => typeof a4 == "boolean" && a4 === true).map(([t]) => t), l2 = Object.entries(i).filter(([t, a4]) => typeof a4 == "object").filter(([t, a4]) => _m.checkServiceConfig(a4)).map(([t, a4]) => {
      const { regex: n2, embedUrl: h6, html: d4, height: c4, width: u3, id: f2 } = a4;
      return [t, {
        regex: n2,
        embedUrl: h6,
        html: d4,
        height: c4,
        width: u3,
        id: f2
      }];
    });
    s4.length && (e = e.filter(([t]) => s4.includes(t))), e = e.concat(l2), _m.services = e.reduce((t, [a4, n2]) => a4 in t ? (t[a4] = Object.assign({}, t[a4], n2), t) : (t[a4] = n2, t), {}), _m.patterns = e.reduce((t, [a4, n2]) => (n2 && typeof n2 != "boolean" && (t[a4] = n2.regex), t), {});
  }
  /**
   * Check if Service config is valid
   *
   * @param {Service} config - configuration of embed block element
   * @returns {boolean}
   */
  static checkServiceConfig(r2) {
    const { regex: i, embedUrl: e, html: s4, height: l2, width: t, id: a4 } = r2;
    let n2 = !!(i && i instanceof RegExp) && !!(e && typeof e == "string") && !!(s4 && typeof s4 == "string");
    return n2 = n2 && (a4 !== void 0 ? a4 instanceof Function : true), n2 = n2 && (l2 !== void 0 ? Number.isFinite(l2) : true), n2 = n2 && (t !== void 0 ? Number.isFinite(t) : true), n2;
  }
  /**
   * Paste configuration to enable pasted URLs processing by Editor
   *
   * @returns {object} - object of patterns which contain regx for pasteConfig
   */
  static get pasteConfig() {
    return {
      patterns: _m.patterns
    };
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Checks that mutations in DOM have finished after appending iframe content
   *
   * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
   * @returns {Promise<any>} - result that all mutations have finished
   */
  embedIsReady(r2) {
    let e;
    return new Promise((s4, l2) => {
      e = new MutationObserver(g3.debounce(s4, 450)), e.observe(r2, {
        childList: true,
        subtree: true
      });
    }).then(() => {
      e.disconnect();
    });
  }
};

// public/js/api.js
var BASE_URL = `http://localhost:8080`;
var createBlogPost = async (body) => {
  const res = await fetch(`${BASE_URL}/api/blog/admin/create`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-type": "application/json" },
    body
  });
  if (!res.ok) {
    throw new Error("Error creating new blog post");
  }
  const data = await res.json();
  return data;
};

// public/js/create.js
var tags = [];
var renderTag = (tag) => {
  const t = document.createElement("div");
  t.className = "t";
  t.innerHTML = `${tag}<span class="tag-remove">\xD7</span>`;
  t.querySelector(".tag-remove").addEventListener("click", () => {
    tags = tags.filter((t2) => t2 !== tag);
    console.log(tags);
    t.remove();
  });
  document.getElementById("categories").append(t);
};
var tagInput = document.getElementById("tag-input");
var tagBtn = document.getElementById("add-tag");
var tagError = document.getElementById("add-error");
tagBtn.addEventListener("click", () => {
  const input = tagInput.value.trim().toLowerCase();
  if (!tags.includes(input)) {
    renderTag(input);
    tags.push(input);
    tagInput.value = "";
    tagError.textContent = "";
  } else {
    tagError.textContent = ` Error: ${input} already exists`;
  }
});
var status = "DRAFT";
var statusToggle = document.getElementById("statusToggle");
var statusLabel = document.getElementById("statusLabel");
statusLabel.textContent = `Status: ${status}`;
statusToggle.checked = false;
statusToggle.addEventListener("change", () => {
  status = statusToggle.checked ? "PUBLISHED" : "DRAFT";
  statusLabel.textContent = `Status: ${status}`;
});
var editor = new Aa({
  holder: "editorjs",
  autofocus: true,
  tools: {
    header: {
      class: v,
      inlineToolbar: true,
      config: {
        placeholder: "Enter a header",
        levels: [2, 3, 4],
        defaultLevel: 2
      }
    },
    list: {
      class: G2,
      inlineToolbar: true
    },
    image: { class: h5 },
    embed: { class: m3 },
    code: { class: d2 },
    delimiter: { class: n },
    inlineCode: { class: s },
    marker: { class: s2 },
    quote: { class: m2 }
  },
  onReady: () => {
    console.log("Editor.js is ready to work!");
  }
});
var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", async () => {
  const content = await editor.save();
  const payload = {
    readingTime: Number(document.getElementById("ttr").value),
    title: document.getElementById("title-content").value,
    excerpt: document.getElementById("excerpt-content").value,
    categories: tags,
    status,
    content
  };
  console.log(payload);
  for (const [key, val] of Object.entries(payload)) {
    const size = new Blob([JSON.stringify(val)]).size;
    console.log(`  ${key}: ${(size / 1024).toFixed(2)} KB`);
  }
  content.blocks.forEach((block, i) => {
    const size = new Blob([JSON.stringify(block)]).size;
    console.log(`Block ${i} [${block.type}]: ${(size / 1024).toFixed(2)} KB`);
  });
  let saveStatus = document.getElementById("save-status");
  try {
    const req = await createBlogPost(JSON.stringify(payload));
    console.log(req);
    saveStatus.textContent = req.status === "success" ? "Blog post saved successfully!" : "Error when saving post";
  } catch (error) {
    console.log(error);
    saveStatus.textContent = "Error when saving post";
  }
});
lucide.createIcons();
/*! Bundled license information:

@editorjs/editorjs/dist/editorjs.mjs:
  (*!
   * CodeX.Tooltips
   * 
   * @version 1.0.5
   * 
   * @licence MIT
   * @author CodeX <https://codex.so>
   * 
   * 
   *)
  (*!
   * Library for handling keyboard shortcuts
   * @copyright CodeX (https://codex.so)
   * @license MIT
   * @author CodeX (https://codex.so)
   * @version 1.2.0
   *)
  (**
   * Base Paragraph Block for the Editor.js.
   * Represents a regular text block
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   *)
  (**
   * Editor.js
   *
   * @license Apache-2.0
   * @see Editor.js <https://editorjs.io>
   * @author CodeX Team <https://codex.so>
   *)

@editorjs/header/dist/header.mjs:
  (**
   * Header block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license MIT
   * @version 2.0.0
   *)

@editorjs/code/dist/code.mjs:
  (**
   * CodeTool for Editor.js
   * @version 2.0.0
   * @license MIT
   *)

@editorjs/delimiter/dist/delimiter.mjs:
  (**
   * Delimiter Block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   * @version 2.0.0
   *)
*/
//# sourceMappingURL=create.bundle.js.map
