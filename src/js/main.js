import $ from "jquery"

function currency_dropdown(){
		$(".selected-currency").on("click", function() {
		  $("#currencies").slideToggle();      
		});
		$("#currencies li").on("click", function() {
			$(this).parent().slideUp();
		});
    console.log("cuurency working")
	}
currency_dropdown