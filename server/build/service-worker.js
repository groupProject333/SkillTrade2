"use strict";var precacheConfig=[["/index.html","28434a88aa5c5a695d4a45874725dc27"],["/static/css/main.6ef8d358.css","eb7fb421236ade54dae500d8465ebb0c"],["/static/js/main.c26e1d79.js","c042f880b52b7a499c9f124e87c0668e"],["/static/media/advice.e3ab11cf.jpg","e3ab11cf5ed3384d4706bb0520be598e"],["/static/media/advice2.ab997273.jpg","ab997273cd7b17253ebf99a1bc545c41"],["/static/media/advice3.b0fcb30f.jpg","b0fcb30fda70c5d2a184edb11f6a05bf"],["/static/media/advice4.01304d27.jpg","01304d27851146f93d0c8ee1239ee3c6"],["/static/media/skill.41711331.jpg","4171133199153dff912412df2516a3ad"],["/static/media/skill1.2fc6c1b6.jpg","2fc6c1b677a3ae04a0492b8d3cd2f532"],["/static/media/skill11.734b4db4.jpg","734b4db4830156cbec6da59dfd5f74eb"],["/static/media/skill2.fa5e47a8.jpg","fa5e47a8492ccee2cd7ed24428952489"],["/static/media/skill6.66290886.jpg","66290886317ba45233fca4815b764857"],["/static/media/skill9.eb269844.jpg","eb269844f1f78b1ad38a3ddd29579a84"],["/static/media/skilllogo1.ff4f0268.png","ff4f02687692e9e18a4812b299941b4e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});