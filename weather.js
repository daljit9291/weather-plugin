
$(document).ready(function(){
	var id = $("div[data-type='plugin']");
 function set(ht){
 	$.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=jalandhar&APPID=9a0bfebddb482e7b0dd96255f3b22f67",
            datatype: "json",
            success:function(data){
            	var date= new Date(data.dt*1000);
            	$(ht).append("<h5 id='city' class='text'>"+data.name+"</h5>");
            	$(ht).append("<img id='icon' src='../weather-plugin/_images/"+data.weather[0].icon+".png' width='30' height='30'>");
            	$(ht).css("background","url(../weather-plugin/_images/"+data.weather[0].icon+".jpg)");
            	var num =data.main.temp-272.15;
					var n = parseInt(num, 10);
            	$(ht).append("<h5 id='temp' class='text'>"+n+"&deg;C</h5>");
            	$(ht).append("<h5 id='desc' class='text'>"+data.weather[0].description+"</h5>");
            }
         });
        }
 
 	set(id);

});