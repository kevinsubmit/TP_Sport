var AccountModel=Backbone.Model.extend({defaults:{cid:null,Second:null}}),AccountCollection=Backbone.Collection.extend({model:AccountModel,initialize:function(){if(typeof $("#intConfirmDeadlineSeconds").val()!="undefined"){var n=new AccountModel({Second:$("#intConfirmDeadlineSeconds").val()});n.set({cid:n.cid}),this.add(n)}},CountDownConfirmNumber:function(){if(this.models.length>0){var n=parseInt(this.models[0].get("Second"));n>0&&(n=n-1,this.models[0].set("Second",n),$("#spanConfirmDeadlineSecond").text(n+"秒"),n>0&&setTimeout(_.bind(this.CountDownConfirmNumber,this),1e3))}}})