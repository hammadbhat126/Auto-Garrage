function launch_mystickyelements(e="1"){var t="desktop",s=1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t="mobile"),jQuery(".mystickyelements-fixed .mystickyelements-lists").each(function(){if(!(s>1)){var i=1;jQuery(this).find("li").each(function(){if(jQuery(this).hasClass("mystickyelements-minimize"))jQuery(this).hasClass("element-minimize")&&jQuery(this).trigger("click");else if(jQuery(this).hasClass("element-"+t+"-on"))return e==i?(jQuery(this).addClass("elements-active"),jQuery(this).parent().parent().parent().hasClass("mystickyelements-on-click")||jQuery(this).parent().parent().parent().addClass("mystickyelements-on-click"),!1):void i++}),s++}})}!function(e){"use strict";var t="",s="",i=0,m=!1;function n(){if(e(window).width()<=1024){if(e(".mystickyelements-fixed").hasClass("mystickyelements-position-mobile-top")){var t=e(".mystickyelements-fixed").height();e("html").attr("style","margin-top: "+t+"px !important")}}else e("html").css("margin-top","")}function o(){if(0!==e(".element-contact-form").length){var n=e(window).height(),o=e(".mystickyelements-fixed").position().top,l=(e(".element-contact-form").offset().top,e("#mystickyelements-contact-form #stickyelements-form").innerHeight()+e(".element-contact-form h3").innerHeight());if(n<l){var c=n-70;e("#mystickyelements-contact-form .element-contact-form").css("max-height",c+"px"),e("#mystickyelements-contact-form .element-contact-form").css("overflowY","auto");var a=o-10;e(window).width()>1025&&!e(".mystickyelements-fixed").hasClass("mystickyelements-position-bottom")&&e("#mystickyelements-contact-form .element-contact-form").css("top","-"+a+"px"),e(window).width()<1024&&!e(".mystickyelements-fixed").hasClass("mystickyelements-position-mobile-bottom")&&e("#mystickyelements-contact-form .element-contact-form").css("top","-"+a+"px")}else{var r=e("ul.mystickyelements-lists .mystickyelements-minimize").height();null===r&&(r=0);a=o-(n-l)+r+10;e(window).width()>1025&&!e(".mystickyelements-fixed").hasClass("mystickyelements-position-bottom")&&e("#mystickyelements-contact-form .element-contact-form").css("top","-"+a+"px"),e(window).width()<1024&&!e(".mystickyelements-fixed").hasClass("mystickyelements-position-mobile-bottom")&&e("#mystickyelements-contact-form .element-contact-form").css("top","-"+a+"px"),e("#mystickyelements-contact-form .element-contact-form").css("overflowY",""),e("#mystickyelements-contact-form .element-contact-form").css("max-height","")}}var y="";/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(y="mobile-");var h=0;e(".mystickyelements-fixed ul li").each(function(){if("1"===mystickyelements.google_analytics&&!0!==e(this).hasClass("mystickyelements-minimize")&&"mystickyelements-contact-form"!==e(this).attr("id"))if(0!==e(this).find("a").length){var n=e(this).attr("id").split("mystickyelements-social-");e(this).find("a").addClass("update-analytics"),e(this).find("a").attr("data-social-slug",n[1])}else e(this).addClass("analytics-update");e(".mystickyelements-position-"+y+"left #"+e(this).attr("id")+" .mystickyelements-social-icon").css("border-radius",""),e(".mystickyelements-position-"+y+"right #"+e(this).attr("id")+" .mystickyelements-social-icon").css("border-radius",""),0==i&&(e(window).width()>1024&&!e(this).hasClass("element-desktop-on")&&(m=!0),e(window).width()<1025&&!e(this).hasClass("element-mobile-on")&&(m=!0)),1==i&&!0===m&&(e(window).width()>1024&&(s=e(this).attr("id")),e(window).width()<1025&&(s=e(this).attr("id"))),e(window).width()>1024&&e(this).hasClass("element-desktop-on")&&(t=e(this).attr("id")),e(window).width()<1025&&e(this).hasClass("element-mobile-on")&&(t=e(this).attr("id"),h++),i++}),e(".mystickyelements-fixed.mystickyelements-position-mobile-bottom").addClass("mystickyelements-bottom-social-channel-"+h),e(".mystickyelements-fixed.mystickyelements-position-mobile-top").addClass("mystickyelements-top-social-channel-"+h),""!=t?"mystickyelements-contact-form"===t?(e(".mystickyelements-position-"+y+"left #"+t+" .mystickyelements-social-icon").css("border-bottom-left-radius","10px"),e(".mystickyelements-position-"+y+"right #"+t+" .mystickyelements-social-icon").css("border-top-left-radius","10px"),e(".mystickyelements-position-"+y+"bottom #"+t+" .mystickyelements-social-icon").css("border-top-right-radius","10px"),1!==e("li.mystickyelements-minimize").length&&(e(".mystickyelements-position-"+y+"left #"+t+" .mystickyelements-social-icon").css("border-bottom-right-radius","10px"),e(".mystickyelements-position-"+y+"right #"+t+" .mystickyelements-social-icon").css("border-top-right-radius","10px"))):"mystickyelements-contact-form"!==t&&(1===i?(e(".mystickyelements-position-"+y+"left #"+t+" .mystickyelements-social-icon").css("border-radius","0px 10px 10px 0"),e(".mystickyelements-position"+y+"-right #"+t+" .mystickyelements-social-icon").css("border-radius","10px 0 0 10px")):(e(".mystickyelements-position-"+y+"left #"+t+" .mystickyelements-social-icon").css("border-bottom-right-radius","10px"),e(".mystickyelements-position-"+y+"right #"+t+" .mystickyelements-social-icon").css("border-bottom-left-radius","10px"),e(".mystickyelements-position-"+y+"bottom #"+t+" .mystickyelements-social-icon").css("border-top-right-radius","10px"))):(e(".mystickyelement-credit").hide(),e(".mystickyelements-fixed").hide()),""!=s&&"mystickyelements-contact-form"!==s&&1!==e("li.mystickyelements-minimize").length&&(e(".mystickyelements-position-"+y+"left #"+s+" .mystickyelements-social-icon").css("border-top-right-radius","10px"),e(".mystickyelements-position-"+y+"right #"+s+" .mystickyelements-social-icon").css("border-top-left-radius","10px"),e(".mystickyelements-position-"+y+"bottom #"+s+" .mystickyelements-social-icon").css("border-top-left-radius","10px"))}e(document).ready(function(){(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e(".mystickyelements-fixed").addClass("mystickyelements-on-click").removeClass("mystickyelements-on-hover"),e("#stickyelements-form").on("submit",function(t){t.preventDefault(),e("#stickyelements-form .mse-input-error").removeClass("mse-input-error"),e("#stickyelements-form .mse-input-message").remove();var s=0;return e("#stickyelements-form .required").length&&e("#stickyelements-form .required").each(function(){""==e.trim(e(this).val())&&(e(this).addClass("mse-input-error"),e(this).after("<span class='mse-input-message'>This field is required</span>"),s++)}),e("#stickyelements-form .email.required:not(.mse-input-error)").length&&e("#stickyelements-form .email.required:not(.mse-input-error)").each(function(){var t=e.trim(e(this).val());/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)||(e(this).addClass("mse-input-error"),e(this).after("<span class='mse-input-message'>Email address is not valid</span>"),s++)}),0==s&&jQuery.ajax({url:mystickyelements.ajaxurl,type:"post",data:"action=mystickyelements_contact_form&"+jQuery("form#stickyelements-form").serialize()+"&security="+mystickyelements.ajax_nonce,beforeSend:function(){e("#stickyelements-submit-form").prop("disabled",!0)},success:function(t){if(e("#stickyelements-submit-form").prop("disabled",!1),e("#stickyelements-form .mse-input-error").removeClass("mse-input-error"),e("#stickyelements-form .mse-input-message").remove(),"1"==(t=e.parseJSON(t)).error)for(var s=0;s<t.errors.length;s++)"mse-form-error"!=t.errors[s].key?(e("#stickyelements-form #"+t.errors[s].key).addClass("mse-input-error"),e("#stickyelements-form #"+t.errors[s].key).after("<span class='mse-input-message'>"+t.errors[s].message+"</span>")):(e("#mse-form-error").removeClass("mse-form-success-message").addClass("mse-form-error-message").show(),e("#mse-form-error").html(t.errors[s].message));else"0"==t.status?(e("#mse-form-error").removeClass("mse-form-success-message").addClass("mse-form-error-message").show(),e("#mse-form-error").html(t.message)):(e("#mse-form-error").removeClass("mse-form-error-message").addClass("mse-form-success-message").show(),e("#mse-form-error").html(t.message),e('#stickyelements-form input[type="text"], #stickyelements-form input[type="tel"], #stickyelements-form input[type="email"]').val(""),e("#stickyelements-form textarea").val(""),e.cookie("closed_contactform","closed",{path:"/"}));return setTimeout(function(){e(".mse-form-success-message").slideUp("slow")},5e3),1==t.status&&""!=t.redirect_link&&(window.location=t.redirect_link),!1}}),!1}),e(".mystickyelements-on-click .mystickyelements-social-icon").on("click touch",function(t){e(this).parent("li").hasClass("elements-active")?(e(this).parent("li").removeClass("elements-active"),e.cookie("closed_contactform","closed",{path:"/"}),t.preventDefault()):(e(".mystickyelements-on-click .elements-active").removeClass("elements-active"),e(this).parent("li").addClass("elements-active"))}),e(".mystickyelements-on-hover .mystickyelements-social-icon").on("click",function(t){e(this).parent("li").hasClass("elements-active")&&0==e(this).children("a").length&&(e(this).parent("li").removeClass("elements-hover-active"),t.preventDefault(),e(this).parent().parent().parent().parent(".mystickyelements-on-hover").removeClass("mystickyelements-on-click"))}),e(".mystickyelements-on-hover .mystickyelements-social-icon-li").on("mouseenter",function(){e(this).hasClass("elements-active"),e(this).hasClass("elements-active")||(e(".mystickyelements-on-click .elements-active").removeClass("elements-active"),e(this).addClass("elements-active"),e(this).addClass("elements-hover-active"),e(this).parent().parent().parent(".mystickyelements-on-hover").addClass("mystickyelements-on-click"))}).on("mouseleave",function(){e(this).removeClass("elements-active"),e(this).removeClass("elements-hover-active"),e(this).parent().parent().parent(".mystickyelements-on-hover").removeClass("mystickyelements-on-click")}),e(".mystickyelements-on-hover ul li.mystickyelements-contact-form").on("mouseenter",function(){e(this).addClass("element-contact-active")}).on("mouseleave",function(){e(this).removeClass("element-contact-active")}),e(".element-contact-close").on("click touch",function(t){e(".mystickyelements-contact-form").removeClass("elements-active"),e(".mystickyelements-contact-form").removeClass("element-contact-active"),e.cookie("closed_contactform","closed",{path:"/"})}),e("#stickyelements-form input:not(#stickyelements-submit-form), #stickyelements-form textarea ").on("keyup",function(t){e(this).val()&&(e(this).css("background-color","#EFF5F8"),e(this).css("border-color","#7761DF"))}),o(),e("li.mystickyelements-minimize").on("click",function(t){var s,i,m,n;e(this).toggleClass("element-minimize"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(i="mobile",m="mobile-",n="element-mobile-on"):(i="desktop",m="",n="element-desktop-on"),!0===e(this).hasClass("element-minimize")?(e.cookie("minimize_"+i,"minimize",{path:"/"}),s=!0):(e.cookie("minimize_"+i,"minimize_not",{path:"/"}),s=!1),e(".mystickyelements-position-"+m+"left ul li").each(function(){1==e(this).hasClass(n)&&(1==e(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?e(this).animate({width:"toggle",left:!0===s?"-=80":""}):e(this).animate({width:"toggle",left:!0===s?"-=50":""}))}),e(".mystickyelements-position-"+m+"right ul li").each(function(){1==e(this).hasClass(n)&&(1==e(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?e(this).animate({width:"toggle",left:!0===s?"+=80":""},300,function(){}):e(this).animate({width:"toggle",left:!0===s?"+=50":""},300,function(){}))}),e(".mystickyelements-position-"+m+"bottom ul li").each(function(){1==e(this).hasClass(n)&&(e(this).css("position","relative"),1==e(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?e(this).animate({height:"toggle",bottom:!0===s?"-=80":""},300,function(){e(this).css("position",!0===s?"relative":"static")}):e(this).animate({height:"toggle",bottom:!0===s?"-=60":""},300,function(){e(this).css("position",!0===s?"relative":"static")}))}),e(".mystickyelements-position-"+m+"top ul li").each(function(){1==e(this).hasClass(n)&&(e(this).css("position","relative"),1==e(".mystickyelements-fixed").hasClass("mystickyelements-size-large")?e(this).animate({height:"toggle",top:!0===s?"-=80":""},300,function(){e(this).css("position",!0===s?"relative":"static")}):e(this).animate({height:"toggle",top:!0===s?"-=60":""},300,function(){e(this).css("position",!0===s?"relative":"static")}))}),!0===e("span.mystickyelements-minimize").hasClass("minimize-position-"+m+"left")?!0===e("li.mystickyelements-minimize").hasClass("element-minimize")?e(".mystickyelements-minimize.minimize-position-"+m+"left").html("&rarr;"):e(".mystickyelements-minimize.minimize-position-"+m+"left").html("&larr;"):!0===e("span.mystickyelements-minimize").hasClass("minimize-position-"+m+"bottom")?!0===e("li.mystickyelements-minimize").hasClass("element-minimize")?e(".mystickyelements-minimize.minimize-position-"+m+"bottom").html("&uarr;"):e(".mystickyelements-minimize.minimize-position-"+m+"bottom").html("&darr;"):!0===e("span.mystickyelements-minimize").hasClass("minimize-position-"+m+"top")?!0===e("li.mystickyelements-minimize").hasClass("element-minimize")?e(".mystickyelements-minimize.minimize-position-"+m+"top").html("&darr;"):e(".mystickyelements-minimize.minimize-position-"+m+"top").html("&uarr;"):!0===e("li.mystickyelements-minimize").hasClass("element-minimize")?e(".mystickyelements-minimize.minimize-position-"+m+"right").html("&larr;"):e(".mystickyelements-minimize.minimize-position-"+m+"right").html("&rarr;")}),e(".mystickyelements-fixed ul li").each(function(){if(e(this).hasClass("mystickyelements-custom-html-main")&&e(this).hasClass("mystickyelements-custom-html-iframe"))e(this).find(".mystickyelements-custom-html").height(),e(".mystickyelements-fixed ul").height()}),setTimeout(function(){e(".mystickyelements-entry-effect-fade.entry-effect,.mystickyelements-entry-effect-slide-in.entry-effect").css("transition","all 0s ease 0s")},1e3),e(".mystickyelements-fixed ul li").on("click",function(){e(this).hasClass("mystickyelements-custom-html-iframe")?e(".mystickyelements-fixed").toggleClass("mystickyelements-custom-html-iframe-open"):e(".mystickyelements-fixed").removeClass("mystickyelements-custom-html-iframe-open")}),e(".mystickyelements-fixed").addClass("entry-effect"),e(window).width()>1024)&&(e(".mystickyelements-position-bottom .mystickyelements-lists").width()<300&&e(".mystickyelements-position-bottom .mystickyelements-contact-form .element-contact-form").width("300"));n()}),e(window).on("resize",function(){o(),n()})}(jQuery);