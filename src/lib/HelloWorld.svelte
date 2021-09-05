<script>
	let count = 0;
	function inc() {
		count += 1;
	}
</script>

<h1>Count {count}</h1>
<button on:click={inc}>+</button>
