Template.add.events({
  "click .js-submit":function(){
    var text1 = $(".js-text1").val();
        var text2 = $(".js-text2").val();
        var reqText = text1+text2;
    if(reqText.length>0){
      localData.insert({title:text1});
      localData.insert({body:text2});
      Router.go("/");
    }
  }
})
