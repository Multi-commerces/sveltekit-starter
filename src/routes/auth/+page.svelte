<script>
	export let data;
</script>

<h1>User Auth</h1>

{#if data?.user}
	<h1>Logged in as user: {data?.user?.email}</h1>
	<form method="POST" action="?/logout">
		<button type="submit">Log Out</button>
	</form>
{:else}
	<a href="/auth/login">Login</a>
	<a href="/auth/register">Register</a>
{/if}
