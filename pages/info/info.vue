<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<view class="art-content">
			<rich-text :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				content: ''
			}
		},
		onLoad(e) {
			console.log('onload:',e)
			uni.showLoading({
				title: '加载中。。。'
			})
			uni.request({
				url: `https://unidemo.dcloud.net.cn/api/news/36kr/${e.newsid}`,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title = res.data.title;
					this.content = res.data.content;
					uni.hideLoading();
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
		}
	}
</script>

<style>
	.content {
		padding: 10upx 2%;
		width: 100%;
		flex-wrap: wrap;
	}
	.title {line-height: 2em; font-size: 38upx;}
	.art-content {
		line-height: 2em; font-size: 24upx;
	}
</style>
