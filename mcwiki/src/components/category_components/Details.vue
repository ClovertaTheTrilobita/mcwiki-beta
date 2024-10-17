<template>

<h1>Detalis page</h1>

<!-- 上浮组件 -->
<section class="pt-4 pb-5" data-aos="fade-up" id="example-carousel">
<h3 class="h5 mb-4 font-weight-bold">Carousel</h3>
	<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		</ol>
		<div class="carousel-inner shadow-sm rounded">
			<div class="carousel-item active">
				<img class="d-block w-100" src="https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="First slide">
				<div class="carousel-caption d-none d-md-block">
					<h5>Mission Beach, San Diego, United States by Matthew Hamilton</h5>
				</div>
			</div>
			<div class="carousel-item">
				<img class="d-block w-100" src="https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="Second slide">
				<div class="carousel-caption d-none d-md-block">
					<h5>Golden Gate Bridge, San Francisco, United States by Tim Foster</h5>
				</div>
			</div>
		</div>
	</div>
</section>

</template>

<script>
    export default{
        name: 'Details'
    }
</script>

<style>

</style>