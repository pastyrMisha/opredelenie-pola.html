<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<script type="text/javascript">


		function valid() {
			var state = $("input[name= 'sex']:checked").val();
			if(!state) return $("#message").html("<font style='color:red'>Укажите Ваш пол!</font><br />");
		}

	</script>