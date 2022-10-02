var runtime=function(a){"use strict";var t=Object.prototype;var l=t.hasOwnProperty;var c;var r=typeof Symbol==="function"?Symbol:{};var o=r.iterator||"@@iterator";var e=r.asyncIterator||"@@asyncIterator";var n=r.toStringTag||"@@toStringTag";function i(t,r,e){Object.defineProperty(t,r,{value:e,enumerable:true,configurable:true,writable:true});return t[r]}try{i({},"")}catch(t){i=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof f?r:f;var i=Object.create(o.prototype);var a=new N(n||[]);i._invoke=j(t,e,a);return i}a.wrap=u;function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}var s="suspendedStart";var p="suspendedYield";var v="executing";var y="completed";var g={};function f(){}function d(){}function m(){}var w={};i(w,o,function(){return this});var L=Object.getPrototypeOf;var x=L&&L(L(T([])));if(x&&x!==t&&l.call(x,o)){w=x}var b=m.prototype=f.prototype=Object.create(w);d.prototype=m;i(b,"constructor",m);i(m,"constructor",d);d.displayName=i(m,n,"GeneratorFunction");function E(t){["next","throw","return"].forEach(function(r){i(t,r,function(t){return this._invoke(r,t)})})}a.isGeneratorFunction=function(t){var r=typeof t==="function"&&t.constructor;return r?r===d||(r.displayName||r.name)==="GeneratorFunction":false};a.mark=function(t){if(Object.setPrototypeOf){Object.setPrototypeOf(t,m)}else{t.__proto__=m;i(t,n,"GeneratorFunction")}t.prototype=Object.create(b);return t};a.awrap=function(t){return{__await:t}};function _(u,c){function f(t,r,e,n){var o=h(u[t],u,r);if(o.type==="throw"){n(o.arg)}else{var i=o.arg;var a=i.value;if(a&&typeof a==="object"&&l.call(a,"__await")){return c.resolve(a.__await).then(function(t){f("next",t,e,n)},function(t){f("throw",t,e,n)})}return c.resolve(a).then(function(t){i.value=t;e(i)},function(t){return f("throw",t,e,n)})}}var r;function t(e,n){function t(){return new c(function(t,r){f(e,n,t,r)})}return r=r?r.then(t,t):t()}this._invoke=t}E(_.prototype);i(_.prototype,e,function(){return this});a.AsyncIterator=_;a.async=function(t,r,e,n,o){if(o===void 0)o=Promise;var i=new _(u(t,r,e,n),o);return a.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})};function j(a,u,c){var f=s;return function t(r,e){if(f===v){throw new Error("Generator is already running")}if(f===y){if(r==="throw"){throw e}return F()}c.method=r;c.arg=e;while(true){var n=c.delegate;if(n){var o=O(n,c);if(o){if(o===g)continue;return o}}if(c.method==="next"){c.sent=c._sent=c.arg}else if(c.method==="throw"){if(f===s){f=y;throw c.arg}c.dispatchException(c.arg)}else if(c.method==="return"){c.abrupt("return",c.arg)}f=v;var i=h(a,u,c);if(i.type==="normal"){f=c.done?y:p;if(i.arg===g){continue}return{value:i.arg,done:c.done}}else if(i.type==="throw"){f=y;c.method="throw";c.arg=i.arg}}}}function O(t,r){var e=t.iterator[r.method];if(e===c){r.delegate=null;if(r.method==="throw"){if(t.iterator["return"]){r.method="return";r.arg=c;O(t,r);if(r.method==="throw"){return g}}r.method="throw";r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=h(e,t.iterator,r.arg);if(n.type==="throw"){r.method="throw";r.arg=n.arg;r.delegate=null;return g}var o=n.arg;if(!o){r.method="throw";r.arg=new TypeError("iterator result is not an object");r.delegate=null;return g}if(o.done){r[t.resultName]=o.value;r.next=t.nextLoc;if(r.method!=="return"){r.method="next";r.arg=c}}else{return o}r.delegate=null;return g}E(b);i(b,n,"Generator");i(b,o,function(){return this});i(b,"toString",function(){return"[object Generator]"});function k(t){var r={tryLoc:t[0]};if(1 in t){r.catchLoc=t[1]}if(2 in t){r.finallyLoc=t[2];r.afterLoc=t[3]}this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal";delete r.arg;t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}];t.forEach(k,this);this.reset(true)}a.keys=function(e){var n=[];for(var t in e){n.push(t)}n.reverse();return function t(){while(n.length){var r=n.pop();if(r in e){t.value=r;t.done=false;return t}}t.done=true;return t}};function T(r){if(r){var t=r[o];if(t){return t.call(r)}if(typeof r.next==="function"){return r}if(!isNaN(r.length)){var e=-1,n=function t(){while(++e<r.length){if(l.call(r,e)){t.value=r[e];t.done=false;return t}}t.value=c;t.done=true;return t};return n.next=n}}return{next:F}}a.values=T;function F(){return{value:c,done:true}}N.prototype={constructor:N,reset:function(t){this.prev=0;this.next=0;this.sent=this._sent=c;this.done=false;this.delegate=null;this.method="next";this.arg=c;this.tryEntries.forEach(G);if(!t){for(var r in this){if(r.charAt(0)==="t"&&l.call(this,r)&&!isNaN(+r.slice(1))){this[r]=c}}}},stop:function(){this.done=true;var t=this.tryEntries[0];var r=t.completion;if(r.type==="throw"){throw r.arg}return this.rval},dispatchException:function(e){if(this.done){throw e}var n=this;function t(t,r){i.type="throw";i.arg=e;n.next=t;if(r){n.method="next";n.arg=c}return!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];var i=o.completion;if(o.tryLoc==="root"){return t("end")}if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc");var u=l.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc){return t(o.catchLoc,true)}else if(this.prev<o.finallyLoc){return t(o.finallyLoc)}}else if(a){if(this.prev<o.catchLoc){return t(o.catchLoc,true)}}else if(u){if(this.prev<o.finallyLoc){return t(o.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}if(o&&(t==="break"||t==="continue")&&o.tryLoc<=r&&r<=o.finallyLoc){o=null}var i=o?o.completion:{};i.type=t;i.arg=r;if(o){this.method="next";this.next=o.finallyLoc;return g}return this.complete(i)},complete:function(t,r){if(t.type==="throw"){throw t.arg}if(t.type==="break"||t.type==="continue"){this.next=t.arg}else if(t.type==="return"){this.rval=this.arg=t.arg;this.method="return";this.next="end"}else if(t.type==="normal"&&r){this.next=r}return g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t){this.complete(e.completion,e.afterLoc);G(e);return g}}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if(n.type==="throw"){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){this.delegate={iterator:T(t),resultName:r,nextLoc:e};if(this.method==="next"){this.arg=c}return g}};return a}(typeof module==="object"?module.exports:{});try{regeneratorRuntime=runtime}catch(t){if(typeof globalThis==="object"){globalThis.regeneratorRuntime=runtime}else{Function("r","regeneratorRuntime = r")(runtime)}}