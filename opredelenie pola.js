function valid() {
			var state = $("input[name= 'sex']:checked").val();
			$("#message").show();
			if(!state) return $("#message").html("<font style='color:red'>Укажите Ваш пол!</font><br />");
			$("#message").hide();
			if(state == "male")
					$("#img").show();

		}