
$(document).ready(function(){
	var id = $("div[data-type='plugin']");
	id.css("background","url(../Project/_images/"+data.weather[0].icon+".jpg)");
 function set(ht){
 	$.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=jalandhar&APPID=9a0bfebddb482e7b0dd96255f3b22f67",
            datatype: "json",
            success:function(data){
            	var date= new Date(data.dt*1000);
            	$(ht).append("<h1>"+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+"</h1>");
            	
            }
         });
        }
 
 	set(id);

});