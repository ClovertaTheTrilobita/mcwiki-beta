<template>

	<div class="container">

		<div class="row mt-5">
			<div class="col-md-3 offset-md-10 "><img src="../images/MC-Logo_300x51.svg"
					class="img-fluid Logo mx-auto d-block"></div>
		</div>
		<!-- hero组件1 -->
		<div class="px-4 pt-3 my-5 text-center ">
			<h1 class="display-4 fw-bold">{{ Item.Entry }}</h1>
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
		<div style="background-color: white;position: relative;top: -20px;" class="container my-5">
			<!-- <div style="background-color: white;position: relative;" class="container my-5"> -->
			<div class=" row p-5 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg">
				<h3 class=" fw-bold lh-1">Intro</h3>
				<div class="col-lg-9 p-lg-5 pt-lg-1">
					<p class="lead">A breif introduction</p>
					<div class="d-grid d-md-flex justify-content-md-start mb-2 mb-lg-1">
						<p>{{ Item.Text }}</p>
						<button @click="addToFavorites" class="btn btn-primary">收藏</button>
					</div>
				</div>
				<div class="col-lg-3  overflow-hidden ">
					<img class="rounded-lg-3" src="./images/tech.png" width="400" style="position: relative;">
				</div>
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



<style scoped></style>