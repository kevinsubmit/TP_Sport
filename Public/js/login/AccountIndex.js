var AccountIndexView=Backbone.View.extend({el:$("#VwinBody"),initialize:function(){this.m_AccountCollection=new AccountCollection,this.CountDownConfirmNumber(),this.AreaCodeClick(),setTimeout(_.bind(this.CheckRememberMe,this),100),this.GetBrowserResolution(),this.Init()},events:{submit:"OnFormSubmit","change #intAreaCode":"AreaCodeClick","check #CountDownConfirmNumber":"CheckCountDownConfirmNumber","click .eye":"EyeClick"},Init:function(){typeof $("#strCaptchaCode")!="undefined"&&($("#strCaptchaCode").val(""),$("#SampleCaptcha_CaptchaImage").parent().attr("href","#"))},GetBrowserResolution:function(){$("#strBrowserResolution").val(document.body.clientWidth+"*"+document.body.clientHeight)},CheckRememberMe:function(){$("#checkbox_0").siblings("label").removeClass("ui-checkbox-on ui-checkbox-off"),$("#bCheckButton").val()=="true"||$("#bCheckButton").val()=="True"?$("#checkbox_0").siblings("label").addClass("ui-checkbox-on"):$("#checkbox_0").siblings("label").addClass("ui-checkbox-off")},OnFormSubmit:function(){$(".ui-checkbox>label.ui-checkbox-on").length?$("#bCheckButton").val(!0):$("#bCheckButton").val(!1),typeof $("#strCaptchaCode").get(0)!="undefined"&&$("#strInstanceId").val($("#strCaptchaCode").get(0).Captcha.InstanceId)},AreaCodeClick:function(){$("#spanAreaCodeFlag").removeClass(),$("#spanAreaCodeFlag").addClass("icon34 icon-language-"+$("#intAreaCode").val()),$("#spanAreaCodeNumber").text("+"+$("#intAreaCode").val())},CountDownConfirmNumber:function(){typeof $("#intConfirmDeadlineSeconds").val()!="undefined"&&this.m_AccountCollection.CountDownConfirmNumber()},EyeClick:function(n){$(n.currentTarget).hasClass("eye_close")?($(n.currentTarget).parent().find("input").attr("type","text"),$(n.currentTarget).removeClass("eye_close")):($(n.currentTarget).parent().find("input").attr("type","password"),$(n.currentTarget).addClass("eye_close"))}}),io_bb_callback;$().ready(function(){var n=new AccountIndexView}),io_bb_callback=function(n){typeof $("#strIOBB").val()!="undefined"&&$("#strIOBB").val(n)}