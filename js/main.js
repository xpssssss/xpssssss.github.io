$((function(){const t=void 0!==GLOBAL_CONFIG.Snackbar,e=$("#nav"),i=$("#rightside"),n=$("body"),o=$("#blog_name").width(),s=$(".menus").width(),a=$("#sidebar").width();function c(t){let i;1===t?i=o+s>e.width()-a-20:2===t&&(i=o+s>e.width()-20),i?l():(e.find(".toggle-menu").removeClass("is-visible-inline"),e.find(".menus_items").removeClass("is-invisible"),e.find("#search_button span").removeClass("is-invisible"))}function l(){e.find(".toggle-menu").addClass("is-visible-inline"),e.find(".menus_items").addClass("is-invisible"),e.find("#search_button span").addClass("is-invisible")}function d(){window.innerWidth<768?l():c(2)}function r(){$("#sidebar").removeClass("tocOpenPc"),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout((function(){c(2)}),400)}function h(){$("#sidebar").addClass("tocOpenPc"),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});const t=window.setInterval((function(){e.hasClass("fixed")?c(1):c(2)}),100);setTimeout((function(){clearInterval(t)}),400)}d(),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),$(window).on("resize",(function(){$("#sidebar").hasClass("tocOpenPc")&&e.hasClass("fixed")?c(1):d()})),GLOBAL_CONFIG_SITE.isPost&&window.innerWidth>1024&&$("#toggle-sidebar").hasClass("on")&&setTimeout((function(){h()}),400),$("#toggle-sidebar").on("click",(function(){const t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on"),t?r():h()}));const u=$(".toggle-menu"),f=$("#mobile-sidebar-menus"),m=$("#mobile-toc-button"),p=$("#menu_mask");function g(t){if(sidebarPaddingR(),$("body").css("overflow","hidden"),p.fadeIn(),"menu"===t){u.removeClass("close").addClass("open"),f.css("transform","translate3d(-100%,0,0)");const t=f.children();for(let e=0;e<=t.length;e++){const i=e/5+.2;t.eq(e).css("animation","sidebarItem "+i+"s")}}"toc"===t&&(m.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function b(t){$("body").css({overflow:"","padding-right":""}),p.fadeOut(),"menu"===t&&(u.removeClass("open").addClass("close"),f.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===t&&(m.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}u.on("click",(function(){g("menu")})),m.on("click",(function(){g("toc")})),p.on("click touchstart",(function(t){u.hasClass("open")&&b("menu"),m.hasClass("open")&&b("toc")})),$(window).on("resize",(function(t){u.is(":visible")||u.hasClass("open")&&b("menu")}));window.matchMedia("(max-width: 1024px)").addListener((function(t){t.matches?$("#sidebar").hasClass("tocOpenPc")&&r():($("#toggle-sidebar").hasClass("on")&&h(),m.hasClass("open")&&b("toc"))})),$("#scroll_down").on("click",(function(){scrollToDest("#content-inner")})),$("#bookmark-it").on("click",(function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;if(t){const t=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".";snackbarShow(t)}else alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}}));const C=$("figure.highlight");if(C.length){const e=GLOBAL_CONFIG.highlightCopy,i=GLOBAL_CONFIG.highlightLang,n=GLOBAL_CONFIG_SITE.isHighlightShrink;(e||i||void 0!==n)&&C.prepend('<div class="highlight-tools"></div>');const o=$(".highlight-tools");if(!0===n?o.append('<i class="fas fa-angle-down code-expand code-closed"></i>'):!1===n&&o.append('<i class="fas fa-angle-down code-expand"></i>'),$(document).on("click",".highlight-tools >.code-expand",(function(){const t=$(this).parent().nextAll();$(this).hasClass("code-closed")?(t.css("display","block"),$(this).removeClass("code-closed")):(t.css("display","none"),$(this).addClass("code-closed"))})),i){let t,e;C.each((function(){t=e=$(this).attr("class").split(" ")[1],"plain"!==t&&void 0!==t||(e="Code"),$(this).find(".highlight-tools").append('<div class="code-lang">'+e+"</div>")}))}if(e){o.append('<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>');const e=function(e,i){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),t?snackbarShow(GLOBAL_CONFIG.copy.success):$(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,(function(){setTimeout((function(){$(i).prev(".copy-notice").animate({opacity:0},650)}),400)}))}catch(e){if(!t)return $(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1},650,(function(){setTimeout((function(){$(i).prev(".copy-notice").animate({opacity:0},650)}),400)})),!1;snackbarShow(GLOBAL_CONFIG.copy.success)}else t?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(i).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)};$(document).on("click",".highlight-tools>.copy-button",(function(){const t=$(this).parents("figure.highlight");t.addClass("copy-true");const i=window.getSelection(),n=document.createRange();n.selectNodeContents(t.find("table .code pre")[0]),i.removeAllRanges(),i.addRange(n);const o=i.toString();e(o,this),i.removeAllRanges(),t.removeClass("copy-true")}))}}GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each((function(t,e){const i=$(e);if(i.attr("alt")){const t=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>");i.after(t)}}));const v=$(".justified-gallery");let w=!1;if(v.length){w=!0;const t=v.find("img");t.unwrap(),t.length&&t.each((function(t,e){$(e).attr("data-src")&&$(e).attr("src",$(e).attr("data-src")),$(e).wrap("<div></div>")})),$("head").append(`<link rel="stylesheet" type="text/css" href="${GLOBAL_CONFIG.justifiedGallery.css}">`),loadScript(`${GLOBAL_CONFIG.justifiedGallery.js}`,(function(){initJustifiedGallery(v)}))}const O=GLOBAL_CONFIG.medium_zoom;if(GLOBAL_CONFIG.fancybox){$("#article-container img:not(.gallery-group-img)").not($("a>img")).each((function(t,e){const i=$(e).attr("data-src")?$(e).attr("data-src"):$(e).attr("src");$(e).wrap(`<a href="${i}" data-fancybox="group" data-caption="${$(e).attr("alt")}" class="fancybox"></a>`)})),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]})}else if(O){const t=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"));t.on("open",(function(e){const i="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";t.update({background:i})}))}let y=0,_=!0;const L="function"==typeof chatBtnHide,G="function"==typeof chatBtnShow;if($(window).scroll(throttle((function(t){const n=$(this).scrollTop(),o=function(t){const e=t>y;return y=t,e}(n);n>56?(o?(e.hasClass("visible")&&e.removeClass("visible"),G&&!0===_&&(chatBtnHide(),_=!1)):(e.hasClass("visible")||e.addClass("visible"),L&&!1===_&&(window.chatBtnShow(),_=!0)),e.addClass("fixed"),"0"===i.css("opacity")&&i.css({opacity:"1",transform:"translateX(-38px)"})):(0===n&&e.removeClass("fixed").removeClass("visible"),i.css({opacity:"",transform:""}))}),200)),$("#go-up").on("click",(function(){scrollToDest("body")})),GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar){$(".toc-child").hide(),$(window).scroll(throttle((function(t){const i=$(this).scrollTop();e(i),o(i),s(i)}),100)),$(".toc-link").on("click",(function(t){window.innerWidth<=1024?b("toc"):(t.preventDefault(),scrollToDest($(this).attr("href")))}));const t=function(t){t.is(":visible")||t.fadeIn(400)},e=function(t){const e=$("#article-container").height(),i=$(window).height(),n=t/(e>i?e-i:$(document).height()-i),o=Math.round(100*n),s=o>100?100:o<=0?0:o;$(".progress-num").text(s),$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)},i=GLOBAL_CONFIG.isanchor,n=function(t){window.history.replaceState&&t!==window.location.hash&&window.history.replaceState(void 0,void 0,t)},o=function(e){if(0===$(".toc-link").length)return!1;const o=$("#article-container").find("h1,h2,h3,h4,h5,h6");let s="";o.each((function(){const t=$(this);e>t.offset().top-25&&(s="#"+$(this).attr("id"))})),""===s&&($(".toc-link").removeClass("active"),$(".toc-child").hide());const a=$(".toc-link.active");if(s&&a.attr("href")!==s){i&&n(s),$(".toc-link").removeClass("active");const e=$('.toc-link[href="'+s+'"]');e.addClass("active");const o=e.parents(".toc-child"),a=o.length>0?o.last():e;t(a.closest(".toc-item").find(".toc-child")),a.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}},s=function(t){if($(".toc-link").hasClass("active")){const e=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop();e>t+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),e<t+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100)}}}$("#readmode").click((function(){$("body").toggleClass("read-mode")})),$("#font_plus").click((function(){n.css("font-size",parseFloat(n.css("font-size"))+1)})),$("#font_minus").click((function(){n.css("font-size",parseFloat(n.css("font-size"))-1)})),$("#mobile-sidebar-menus .menus-expand").on("click",(function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))})),$(window).on("touchmove",(function(t){const e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")})),$("#rightside_config").on("click",(function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")}));const k=GLOBAL_CONFIG.copyright;void 0!==k&&(document.body.oncopy=function(t){let e;t.preventDefault();const i=window.getSelection(0).toString();return e=i.length>45?i+"\n\n\n"+k.languages.author+"\n"+k.languages.link+window.location.href+"\n"+k.languages.source+"\n"+k.languages.info:i,t.clipboardData?t.clipboardData.setData("text",e):window.clipboardData.setData("text",e)});if($("#darkmode").click((function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),t&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),t&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme()})),GLOBAL_CONFIG.runtime){const t=$("#webinfo-runtime-count"),e=t.attr("publish_date"),i=function(){const i=new Date(e),n=(new Date).getTime()-i.getTime(),o=Math.floor(n/864e5);t.text(o+" "+GLOBAL_CONFIG.runtime_unit)};i(),setInterval(i,1e4)}$("#article-container table").not($("figure.highlight > table")).each((function(){$(this).wrap('<div class="table-wrap"></div>')})),GLOBAL_CONFIG.baiduPush&&function(){const t=document.createElement("script"),e=window.location.protocol.split(":")[0];t.src="https"===e?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";const i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}();const I=$(".hide-button");I.length&&I.on("click",(function(t){const e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&w&&i.find(".justified-gallery").length>0&&initJustifiedGallery(i.find(".justified-gallery"))}));$("#article-container .tabs").find(".tab button").on("click",(function(t){const e=$(this),i=e.parent();if(!i.hasClass("active")){const t=e.parents(".nav-tabs").next();i.siblings(".active").removeClass("active"),i.addClass("active");const n=e.attr("data-href");t.find("> .tab-item-content").removeClass("active"),t.find(`> ${n}`).addClass("active");const o=t.find(n).find(".justified-gallery");w&&o.length>0&&initJustifiedGallery(o)}}));$(".card-category-list-item.parent a").on("click",(function(t){if($(event.target).hasClass("card-category-list-icon")){const t=$(this);return t.find(".card-category-list-icon").toggleClass("expand"),t.parent().next().toggle(),!1}}));let A=!1;if($("#switch-comments-btn").change((function(){$("#post-comment > .comment-wrap > div").each((function(){$(this).is(":visible")?$(this).hide():$(this).css({display:"block",animation:"tabshow .5s"})})),A||"function"!=typeof loadOtherComment||(A=!0,loadOtherComment())})),GLOBAL_CONFIG_SITE.isPost&&void 0!==GLOBAL_CONFIG.noticeOutdate){const t=GLOBAL_CONFIG.noticeOutdate;var x=function(t){const e=new Date,i=new Date(t.replace(/-/g,"/")),n=e.getTime()-i.getTime();return Math.floor(n/864e5)}(GLOBAL_CONFIG_SITE.postUpdate);if(x>=t.limitDay){const e=`<div class="post-outdate-notice">${t.messagePrev+" "+x+" "+t.messageNext}</div>`;"top"===t.position?$("#article-container").prepend(e):$("#article-container").append(e)}}}));