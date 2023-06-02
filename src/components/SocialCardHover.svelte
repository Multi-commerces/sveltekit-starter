<script>
	import Fa from 'svelte-fa';

	export let title;
	export let value = "C'est là que je partage du code et travaille sur des projets.";
	export let url = 'https://github.com/Multi-commerces';
	export let label = 'Julien ILARI';
	export let icon;
</script>

<div class="card">
	<div class="face face1">
		<div class="content">
			<div class="icon">
				<Fa
					{icon}
					style="	position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 80px;
                transition: 0.7s;
                color: #fff;"
				/>
			</div>
			<h2>{title}</h2>
		</div>
	</div>
	<div class="face face2">
		<div class="content">
			<h3>
				<a href={url} rel="noopener nofollow" target="_blank">{label}</a>
			</h3>
			<p>{value}</p>
		</div>
	</div>
</div>

<style>
	h2 {
		position: absolute;
		top: 0;
		left: 10px;
		color: #f7f6f6ba;
		background: antiquewhite;
		z-index: 1;
		border-radius: 20%;
		padding: 0.5rem;
		font-size: small;
	}
	.card:nth-child(1) h2 {
		background: #a85f5f;
	}

	.card:nth-child(2) h2 {
		background: #4d8094;
	}

	.card:nth-child(3) h2 {
		background: #1e8b67;
	}

	.card {
		position: relative;
		border-radius: 0px;
	}

	.card .icon {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #f00;
		transition: 0.7s;
		z-index: 1;
	}

	.card:nth-child(1) .icon {
		background: #e07768;
	}

	.card:nth-child(2) .icon {
		background: #6eadd4;
	}

	.card:nth-child(3) .icon {
		background: #4aada9;
	}

	.card .face {
		max-width: 300px;
		height: 200px;
		transition: 0.5s;
	}

	.card .face.face1 {
		position: relative;
		background: #333;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		transform: translateY(100px);
	}

	.card:hover .face.face1 {
		background: #ff0057;
		transform: translateY(0px);
	}

	.card .face.face1 .content {
		opacity: 1;
		transition: 0.5s;
		height: 100%;
	}

	.card:hover .face.face1 .content {
		opacity: 1;
	}

	.card .face.face2 {
		position: relative;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		box-sizing: border-box;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
		transform: translateY(-100px);
	}

	.card:hover .face.face2 {
		transform: translateY(0);
	}

	.card .face.face2 .content p {
		margin: 0;
		padding: 0;
		text-align: center;
		color: #414141;
	}

	.card .face.face2 .content h3 {
		margin: 0 0 10px 0;
		padding: 0;
		color: #fff;
		font-size: 24px;
		text-align: center;
		color: #414141;
	}

	a {
		text-decoration: none;
		color: #414141;
	}
</style>
