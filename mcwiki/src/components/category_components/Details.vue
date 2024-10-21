<template>

	<div class="container">

		<!-- hero组件1 -->
		<div class="px-4 pt-3 my-5 text-center">
			<h1 class="display-4 fw-bold" style="margin-top: 100px;">{{ Item.Entry }}</h1>
			<div class="col-lg-6 mx-auto">
				<p class="lead mb-4">{{ Item.Category }}</p>
				<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
				</div>
			</div>
			<div>
				<div class="container px-5">
					<img :src=Item.Image class="img-fluid border rounded-3 shadow-lg mb-4" width="192" height="192"
						loading="lazy">
				</div>
			</div>
		</div>


		<!-- hero组件2 -->
		<div style="background-color: white;position: relative;top: -15px;" class="container my-5">
			<!-- <div style="background-color: white;position: relative;" class="container my-5"> -->
			<div class=" row p-5 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
				<h3 class=" fw-bold lh-1" style="font-size: 35px;">Intro</h3>
				<div class="col-lg-9 p-lg-5 pt-lg-1">
					<p class="lead" style="font-size:22px;">A breif introduction</p>
					<div class="d-grid d-md-flex justify-content-md-start mb-2 mb-lg-1">
						<p style="font-size:18px;">&nbsp;{{ Item.Text }}</p>
					</div>
					<button @click="addToFavorites" class="btn btn-success Button">like</button>
				</div>
				<div class="col-lg-3  overflow-hidden ">
					<img class="rounded-lg-3" src="./images/tech.png" width="350" height="350" style="position: relative;">
				</div>
				<div class="col-md-3" style=" margin-bottom: 45px;"><img src="../images/MC-Logo_300x51.svg"
					class="img-fluid Logo mx-auto d-block"></div>
			</div>
		</div>
	</div>

</template>



<script>

import { mapActions, mapState } from 'vuex';

export default {
	name: 'Details',
	props: {
		Item: {
			type: Object,
		}
	},
	computed: {
		...mapState(['user'])
	},
	methods: {
		...mapActions(['addFavorite']),
		async addToFavorites() {
			try {
				const favorite = {
					userId: localStorage.getItem('username'),
					item: this.Item
				};
				const token = localStorage.getItem('token');   //读取 JWT
				console.log('token:', token);
				if (!token) {
					alert('请先登录');
					setTimeout(() => {
						window.location.reload();
					}, 1)
					return;
				}
				await this.addFavorite({ favorite, token });
				alert('收藏成功');
			} catch (error) {
				if (error.response && error.response.status === 409) {
					alert('该项目已经在收藏列表中');
				} else {
					console.error('收藏失败:', error);
					alert('收藏失败');
				}
			}
		},
	},
};

</script>



<style scoped>

</style>