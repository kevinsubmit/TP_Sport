(function(){function g(t){function r(n,i,r,u,f,e){for(;f>=0&&e>f;f+=t){var o=u?u[f]:f;r=i(r,n[o],o,n)}return r}return function(u,e,o,s){e=f(e,s,4);var h=!i(u)&&n.keys(u),l=(h||u).length,c=t>0?0:l-1;return arguments.length<3&&(o=u[h?h[c]:c],c+=t),r(u,e,o,h,c,l)}}function nt(n){return function(i,r,u){r=t(r,u);for(var e=null!=i&&i.length,f=n>0?0:e-1;f>=0&&e>f;f+=n)if(r(i[f],f,i))return f;return-1}}function tt(t,i){var u=k.length,f=t.constructor,e=n.isFunction(f)&&f.prototype||a,r="constructor";for(n.has(t,r)&&!n.contains(i,r)&&i.push(r);u--;)r=k[u],r in t&&t[r]!==e[r]&&!n.contains(i,r)&&i.push(r)}var l=this,ot=l._,o=Array.prototype,a=Object.prototype,st=Function.prototype,ht=o.push,r=o.slice,e=a.toString,ct=a.hasOwnProperty,lt=Array.isArray,it=Object.keys,v=st.bind,rt=Object.create,y=function(){},n=function(t){return t instanceof n?t:this instanceof n?void(this._wrapped=t):new n(t)},f,t,s,u,w,b,k,h,et,c;"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports._=n):l._=n,n.VERSION="1.8.2",f=function(n,t,i){if(t===void 0)return n;switch(null==i?3:i){case 1:return function(i){return n.call(t,i)};case 2:return function(i,r){return n.call(t,i,r)};case 3:return function(i,r,u){return n.call(t,i,r,u)};case 4:return function(i,r,u,f){return n.call(t,i,r,u,f)}}return function(){return n.apply(t,arguments)}},t=function(t,i,r){return null==t?n.identity:n.isFunction(t)?f(t,i,r):n.isObject(t)?n.matcher(t):n.property(t)},n.iteratee=function(n,i){return t(n,i,1/0)};var p=function(n,t){return function(i){var e=arguments.length,r,u;if(2>e||null==i)return i;for(r=1;e>r;r++)for(var o=arguments[r],s=n(o),h=s.length,f=0;h>f;f++)u=s[f],t&&i[u]!==void 0||(i[u]=o[u]);return i}},at=function(t){if(!n.isObject(t))return{};if(rt)return rt(t);y.prototype=t;var i=new y;return y.prototype=null,i},vt=Math.pow(2,53)-1,i=function(n){var t=n&&n.length;return"number"==typeof t&&t>=0&&vt>=t};n.each=n.forEach=function(t,r,u){var e,o,s;if(r=f(r,u),i(t))for(e=0,o=t.length;o>e;e++)r(t[e],e,t);else for(s=n.keys(t),e=0,o=s.length;o>e;e++)r(t[s[e]],s[e],t);return t},n.map=n.collect=function(r,u,f){var s;u=t(u,f);for(var o=!i(r)&&n.keys(r),h=(o||r).length,c=Array(h),e=0;h>e;e++)s=o?o[e]:e,c[e]=u(r[s],s,r);return c},n.reduce=n.foldl=n.inject=g(1),n.reduceRight=n.foldr=g(-1),n.find=n.detect=function(t,r,u){var f;return f=i(t)?n.findIndex(t,r,u):n.findKey(t,r,u),f!==void 0&&f!==-1?t[f]:void 0},n.filter=n.select=function(i,r,u){var f=[];return r=t(r,u),n.each(i,function(n,t,i){r(n,t,i)&&f.push(n)}),f},n.reject=function(i,r,u){return n.filter(i,n.negate(t(r)),u)},n.every=n.all=function(r,u,f){var s;u=t(u,f);for(var o=!i(r)&&n.keys(r),h=(o||r).length,e=0;h>e;e++)if(s=o?o[e]:e,!u(r[s],s,r))return!1;return!0},n.some=n.any=function(r,u,f){var s;u=t(u,f);for(var o=!i(r)&&n.keys(r),h=(o||r).length,e=0;h>e;e++)if(s=o?o[e]:e,u(r[s],s,r))return!0;return!1},n.contains=n.includes=n.include=function(t,r,u){return i(t)||(t=n.values(t)),n.indexOf(t,r,"number"==typeof u&&u)>=0},n.invoke=function(t,i){var u=r.call(arguments,2),f=n.isFunction(i);return n.map(t,function(n){var t=f?i:n[i];return null==t?t:t.apply(n,u)})},n.pluck=function(t,i){return n.map(t,n.property(i))},n.where=function(t,i){return n.filter(t,n.matcher(i))},n.findWhere=function(t,i){return n.find(t,n.matcher(i))},n.max=function(r,u,f){var h,o,e=-1/0,c=-1/0,s,l;if(null==u&&null!=r)for(r=i(r)?r:n.values(r),s=0,l=r.length;l>s;s++)h=r[s],h>e&&(e=h);else u=t(u,f),n.each(r,function(n,t,i){o=u(n,t,i),(o>c||o===-1/0&&e===-1/0)&&(e=n,c=o)});return e},n.min=function(r,u,f){var h,o,e=1/0,c=1/0,s,l;if(null==u&&null!=r)for(r=i(r)?r:n.values(r),s=0,l=r.length;l>s;s++)h=r[s],e>h&&(e=h);else u=t(u,f),n.each(r,function(n,t,i){o=u(n,t,i),(c>o||1/0===o&&1/0===e)&&(e=n,c=o)});return e},n.shuffle=function(t){for(var u,e=i(t)?t:n.values(t),o=e.length,f=Array(o),r=0;o>r;r++)u=n.random(0,r),u!==r&&(f[r]=f[u]),f[u]=e[r];return f},n.sample=function(t,r,u){return null==r||u?(i(t)||(t=n.values(t)),t[n.random(t.length-1)]):n.shuffle(t).slice(0,Math.max(0,r))},n.sortBy=function(i,r,u){return r=t(r,u),n.pluck(n.map(i,function(n,t,i){return{value:n,index:t,criteria:r(n,t,i)}}).sort(function(n,t){var i=n.criteria,r=t.criteria;if(i!==r){if(i>r||i===void 0)return 1;if(r>i||r===void 0)return-1}return n.index-t.index}),"value")},s=function(i){return function(r,u,f){var e={};return u=t(u,f),n.each(r,function(n,t){var f=u(n,t,r);i(e,n,f)}),e}},n.groupBy=s(function(t,i,r){n.has(t,r)?t[r].push(i):t[r]=[i]}),n.indexBy=s(function(n,t,i){n[i]=t}),n.countBy=s(function(t,i,r){n.has(t,r)?t[r]++:t[r]=1}),n.toArray=function(t){return t?n.isArray(t)?r.call(t):i(t)?n.map(t,n.identity):n.values(t):[]},n.size=function(t){return null==t?0:i(t)?t.length:n.keys(t).length},n.partition=function(i,r,u){r=t(r,u);var f=[],e=[];return n.each(i,function(n,t,i){(r(n,t,i)?f:e).push(n)}),[f,e]},n.first=n.head=n.take=function(t,i,r){if(null!=t)return null==i||r?t[0]:n.initial(t,t.length-i)},n.initial=function(n,t,i){return r.call(n,0,Math.max(0,n.length-(null==t||i?1:t)))},n.last=function(t,i,r){if(null!=t)return null==i||r?t[t.length-1]:n.rest(t,Math.max(0,t.length-i))},n.rest=n.tail=n.drop=function(n,t,i){return r.call(n,null==t||i?1:t)},n.compact=function(t){return n.filter(t,n.identity)},u=function(t,r,f,e){for(var o,c,l,s=[],a=0,h=e||0,v=t&&t.length;v>h;h++)if(o=t[h],i(o)&&(n.isArray(o)||n.isArguments(o)))for(r||(o=u(o,r,f)),c=0,l=o.length,s.length+=l;l>c;)s[a++]=o[c++];else f||(s[a++]=o);return s},n.flatten=function(n,t){return u(n,t,!1)},n.without=function(t){return n.difference(t,r.call(arguments,1))},n.uniq=n.unique=function(i,r,u,f){var e,h;if(null==i)return[];n.isBoolean(r)||(f=u,u=r,r=!1),null!=u&&(u=t(u,f));for(var o=[],c=[],s=0,l=i.length;l>s;s++)e=i[s],h=u?u(e,s,i):e,r?(s&&c===h||o.push(e),c=h):u?n.contains(c,h)||(c.push(h),o.push(e)):n.contains(o,e)||o.push(e);return o},n.union=function(){return n.uniq(u(arguments,!0,!0))},n.intersection=function(t){var r,i;if(null==t)return[];for(var u=[],e=arguments.length,f=0,o=t.length;o>f;f++)if(r=t[f],!n.contains(u,r)){for(i=1;e>i&&n.contains(arguments[i],r);i++);i===e&&u.push(r)}return u},n.difference=function(t){var i=u(arguments,!0,!0,1);return n.filter(t,function(t){return!n.contains(i,t)})},n.zip=function(){return n.unzip(arguments)},n.unzip=function(t){for(var r=t&&n.max(t,"length").length||0,u=Array(r),i=0;r>i;i++)u[i]=n.pluck(t,i);return u},n.object=function(n,t){for(var r={},i=0,u=n&&n.length;u>i;i++)t?r[n[i]]=t[i]:r[n[i][0]]=n[i][1];return r},n.indexOf=function(t,i,u){var f=0,e=t&&t.length;if("number"==typeof u)f=0>u?Math.max(0,e+u):u;else if(u&&e)return f=n.sortedIndex(t,i),t[f]===i?f:-1;if(i!==i)return n.findIndex(r.call(t,f),n.isNaN);for(;e>f;f++)if(t[f]===i)return f;return-1},n.lastIndexOf=function(t,i,u){var f=t?t.length:0;if("number"==typeof u&&(f=0>u?f+u+1:Math.min(f,u+1)),i!==i)return n.findLastIndex(r.call(t,0,f),n.isNaN);for(;--f>=0;)if(t[f]===i)return f;return-1},n.findIndex=nt(1),n.findLastIndex=nt(-1),n.sortedIndex=function(n,i,r,u){var e;r=t(r,u,1);for(var s=r(i),f=0,o=n.length;o>f;)e=Math.floor((f+o)/2),r(n[e])<s?f=e+1:o=e;return f},n.range=function(n,t,i){arguments.length<=1&&(t=n||0,n=0),i=i||1;for(var u=Math.max(Math.ceil((t-n)/i),0),f=Array(u),r=0;u>r;r++,n+=i)f[r]=n;return f},w=function(t,i,r,u,f){if(!(u instanceof i))return t.apply(r,f);var e=at(t.prototype),o=t.apply(e,f);return n.isObject(o)?o:e},n.bind=function(t,i){if(v&&t.bind===v)return v.apply(t,r.call(arguments,1));if(!n.isFunction(t))throw new TypeError("Bind must be called on a function");var f=r.call(arguments,2),u=function(){return w(t,u,i,this,f.concat(r.call(arguments)))};return u},n.partial=function(t){var i=r.call(arguments,1),u=function(){for(var f=0,o=i.length,e=Array(o),r=0;o>r;r++)e[r]=i[r]===n?arguments[f++]:i[r];for(;f<arguments.length;)e.push(arguments[f++]);return w(t,u,this,this,e)};return u},n.bindAll=function(t){var i,r,u=arguments.length;if(1>=u)throw new Error("bindAll must be passed function names");for(i=1;u>i;i++)r=arguments[i],t[r]=n.bind(t[r],t);return t},n.memoize=function(t,i){var r=function(u){var f=r.cache,e=""+(i?i.apply(this,arguments):u);return n.has(f,e)||(f[e]=t.apply(this,arguments)),f[e]};return r.cache={},r},n.delay=function(n,t){var i=r.call(arguments,2);return setTimeout(function(){return n.apply(null,i)},t)},n.defer=n.partial(n.delay,n,1),n.throttle=function(t,i,r){var f,e,s,u=null,o=0,h;return r||(r={}),h=function(){o=r.leading===!1?0:n.now(),u=null,s=t.apply(f,e),u||(f=e=null)},function(){var l=n.now(),c;return o||r.leading!==!1||(o=l),c=i-(l-o),f=this,e=arguments,0>=c||c>i?(u&&(clearTimeout(u),u=null),o=l,s=t.apply(f,e),u||(f=e=null)):u||r.trailing===!1||(u=setTimeout(h,c)),s}},n.debounce=function(t,i,r){var u,f,e,s,o,h=function(){var c=n.now()-s;i>c&&c>=0?u=setTimeout(h,i-c):(u=null,r||(o=t.apply(e,f),u||(e=f=null)))};return function(){e=this,f=arguments,s=n.now();var c=r&&!u;return u||(u=setTimeout(h,i)),c&&(o=t.apply(e,f),e=f=null),o}},n.wrap=function(t,i){return n.partial(i,t)},n.negate=function(n){return function(){return!n.apply(this,arguments)}},n.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,i=n[t].apply(this,arguments);r--;)i=n[r].call(this,i);return i}},n.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},n.before=function(n,t){var i;return function(){return--n>0&&(i=t.apply(this,arguments)),1>=n&&(t=null),i}},n.once=n.partial(n.before,2),b=!{toString:null}.propertyIsEnumerable("toString"),k=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],n.keys=function(t){var i,r;if(!n.isObject(t))return[];if(it)return it(t);i=[];for(r in t)n.has(t,r)&&i.push(r);return b&&tt(t,i),i},n.allKeys=function(t){var i,r;if(!n.isObject(t))return[];i=[];for(r in t)i.push(r);return b&&tt(t,i),i},n.values=function(t){for(var r=n.keys(t),u=r.length,f=Array(u),i=0;u>i;i++)f[i]=t[r[i]];return f},n.mapObject=function(i,r,u){r=t(r,u);for(var f,o=n.keys(i),h=o.length,s={},e=0;h>e;e++)f=o[e],s[f]=r(i[f],f,i);return s},n.pairs=function(t){for(var r=n.keys(t),u=r.length,f=Array(u),i=0;u>i;i++)f[i]=[r[i],t[r[i]]];return f},n.invert=function(t){for(var u={},r=n.keys(t),i=0,f=r.length;f>i;i++)u[t[r[i]]]=r[i];return u},n.functions=n.methods=function(t){var r=[],i;for(i in t)n.isFunction(t[i])&&r.push(i);return r.sort()},n.extend=p(n.allKeys),n.extendOwn=n.assign=p(n.keys),n.findKey=function(i,r,u){r=t(r,u);for(var f,o=n.keys(i),e=0,s=o.length;s>e;e++)if(f=o[e],r(i[f],f,i))return f},n.pick=function(t,i,r){var c,o,l={},e=t,s,v,h,a;if(null==e)return l;for(n.isFunction(i)?(o=n.allKeys(e),c=f(i,r)):(o=u(arguments,!1,!1,1),c=function(n,t,i){return t in i},e=Object(e)),s=0,v=o.length;v>s;s++)h=o[s],a=e[h],c(a,h,e)&&(l[h]=a);return l},n.omit=function(t,i,r){if(n.isFunction(i))i=n.negate(i);else{var f=n.map(u(arguments,!1,!1,1),String);i=function(t,i){return!n.contains(f,i)}}return n.pick(t,i,r)},n.defaults=p(n.allKeys,!0),n.clone=function(t){return n.isObject(t)?n.isArray(t)?t.slice():n.extend({},t):t},n.tap=function(n,t){return t(n),n},n.isMatch=function(t,i){var e=n.keys(i),o=e.length,f,r,u;if(null==t)return!o;for(f=Object(t),r=0;o>r;r++)if(u=e[r],i[u]!==f[u]||!(u in f))return!1;return!0},h=function(t,i,r,u){var c,a,o,s,f,l,v;if(t===i)return 0!==t||1/t==1/i;if(null==t||null==i)return t===i;if(t instanceof n&&(t=t._wrapped),i instanceof n&&(i=i._wrapped),c=e.call(t),c!==e.call(i))return!1;switch(c){case"[object RegExp]":case"[object String]":return""+t==""+i;case"[object Number]":return+t!=+t?+i!=+i:0==+t?1/+t==1/i:+t==+i;case"[object Date]":case"[object Boolean]":return+t==+i}if(a="[object Array]"===c,!a&&("object"!=typeof t||"object"!=typeof i||(o=t.constructor,s=i.constructor,o!==s&&!(n.isFunction(o)&&o instanceof o&&n.isFunction(s)&&s instanceof s)&&"constructor"in t&&"constructor"in i)))return!1;for(r=r||[],u=u||[],f=r.length;f--;)if(r[f]===t)return u[f]===i;if(r.push(t),u.push(i),a){if(f=t.length,f!==i.length)return!1;for(;f--;)if(!h(t[f],i[f],r,u))return!1}else{if(v=n.keys(t),f=v.length,n.keys(i).length!==f)return!1;for(;f--;)if(l=v[f],!n.has(i,l)||!h(t[l],i[l],r,u))return!1}return r.pop(),u.pop(),!0},n.isEqual=function(n,t){return h(n,t)},n.isEmpty=function(t){return null==t?!0:i(t)&&(n.isArray(t)||n.isString(t)||n.isArguments(t))?0===t.length:0===n.keys(t).length},n.isElement=function(n){return!(!n||1!==n.nodeType)},n.isArray=lt||function(n){return"[object Array]"===e.call(n)},n.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},n.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){n["is"+t]=function(n){return e.call(n)==="[object "+t+"]"}}),n.isArguments(arguments)||(n.isArguments=function(t){return n.has(t,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(n.isFunction=function(n){return"function"==typeof n||!1}),n.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},n.isNaN=function(t){return n.isNumber(t)&&t!==+t},n.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===e.call(n)},n.isNull=function(n){return null===n},n.isUndefined=function(n){return n===void 0},n.has=function(n,t){return null!=n&&ct.call(n,t)},n.noConflict=function(){return l._=ot,this},n.identity=function(n){return n},n.constant=function(n){return function(){return n}},n.noop=function(){},n.property=function(n){return function(t){if(null!=t)return t[n]}},n.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},n.matcher=n.matches=function(t){return t=n.extendOwn({},t),function(i){return n.isMatch(i,t)}},n.times=function(n,t,i){var u=Array(Math.max(0,n)),r;for(t=f(t,i,1),r=0;n>r;r++)u[r]=t(r);return u},n.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},n.now=Date.now||function(){return+new Date};var ut={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},yt=n.invert(ut),ft=function(t){var r=function(n){return t[n]},i="(?:"+n.keys(t).join("|")+")",u=RegExp(i),f=RegExp(i,"g");return function(n){return n=null==n?"":""+n,u.test(n)?n.replace(f,r):n}};n.escape=ft(ut),n.unescape=ft(yt),n.result=function(t,i,r){var u=null==t?void 0:t[i];return u===void 0&&(u=r),n.isFunction(u)?u.call(t):u},et=0,n.uniqueId=function(n){var t=++et+"";return n?n+t:t},n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var d=/(.)^/,pt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},wt=/\\|'|\r|\n|\u2028|\u2029/g,bt=function(n){return"\\"+pt[n]};n.template=function(t,i,r){var o,f,s;!i&&r&&(i=r),i=n.defaults({},i,n.templateSettings);var h=RegExp([(i.escape||d).source,(i.interpolate||d).source,(i.evaluate||d).source].join("|")+"|$","g"),e=0,u="__p+='";t.replace(h,function(n,i,r,f,o){return u+=t.slice(e,o).replace(wt,bt),e=o+n.length,i?u+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'":r?u+="'+\n((__t=("+r+"))==null?'':__t)+\n'":f&&(u+="';\n"+f+"\n__p+='"),n}),u+="';\n",i.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{o=new Function(i.variable||"obj","_",u)}catch(c){throw c.source=u,c;}return f=function(t){return o.call(this,t,n)},s=i.variable||"obj",f.source="function("+s+"){\n"+u+"}",f},n.chain=function(t){var i=n(t);return i._chain=!0,i},c=function(t,i){return t._chain?n(i).chain():i},n.mixin=function(t){n.each(n.functions(t),function(i){var r=n[i]=t[i];n.prototype[i]=function(){var t=[this._wrapped];return ht.apply(t,arguments),c(this,r.apply(n,t))}})},n.mixin(n),n.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var i=o[t];n.prototype[t]=function(){var n=this._wrapped;return i.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],c(this,n)}}),n.each(["concat","join","slice"],function(t){var i=o[t];n.prototype[t]=function(){return c(this,i.apply(this._wrapped,arguments))}}),n.prototype.value=function(){return this._wrapped},n.prototype.valueOf=n.prototype.toJSON=n.prototype.value,n.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return n})}).call(this)