(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function c(){var n=f(),i=l(o);if(n!==o){a(o=n,i);e(t).trigger(r)}else if(i!==o){location.href=location.href.replace(/#.*/,"")+i}s=setTimeout(c,e.fn[r].delay)}var i={},s,o=f(),u=function(e){return e},a=u,l=u;i.start=function(){s||c()};i.stop=function(){s&&clearTimeout(s);s=n};return i}()})(jQuery,this)