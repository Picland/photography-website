angular.module('love', []).controller('love', function ($scope, $http) {
	$scope.love = {
		photos: [
			{src: 'img/love/photos/1.jpg'},
			{src: 'img/love/photos/2.jpg'},
			{src: 'img/love/photos/3.jpg'},
			{src: 'img/love/photos/4.jpg'},
			{src: 'img/love/photos/5.jpg'},
			{src: 'img/love/photos/6.jpg'},
			{src: 'img/love/photos/7.jpg'},
			{src: 'img/love/photos/8.jpg'},
			{src: 'img/love/photos/9.jpg'},
			{src: 'img/love/photos/10.jpg'},
			{src: 'img/love/photos/11.jpg'},
			{src: 'img/love/photos/12.jpg'},
			{src: 'img/love/photos/13.jpg'},
			{src: 'img/love/photos/14.jpg'},
			{src: 'img/love/photos/15.jpg'},
			{src: 'img/love/photos/16.jpg'},
			{src: 'img/love/photos/17.jpg'},
			{src: 'img/love/photos/1.jpg'},
			{src: 'img/love/photos/2.jpg'},
			{src: 'img/love/photos/3.jpg'},
			{src: 'img/love/photos/4.jpg'},
			{src: 'img/love/photos/5.jpg'},
			{src: 'img/love/photos/6.jpg'},
			{src: 'img/love/photos/7.jpg'},
			{src: 'img/love/photos/8.jpg'},
			{src: 'img/love/photos/9.jpg'},
			{src: 'img/love/photos/10.jpg'},
			{src: 'img/love/photos/11.jpg'},
			{src: 'img/love/photos/12.jpg'},
			{src: 'img/love/photos/13.jpg'},
			{src: 'img/love/photos/11.jpg'},
			{src: 'img/love/photos/12.jpg'},
			{src: 'img/love/photos/13.jpg'},
			{src: 'img/love/photos/14.jpg'},
			{src: 'img/love/photos/15.jpg'},
			{src: 'img/love/photos/16.jpg'},
			{src: 'img/love/photos/17.jpg'},
			{src: 'img/love/photos/1.jpg'},
			{src: 'img/love/photos/2.jpg'},
			{src: 'img/love/photos/3.jpg'}
		]
	};

	$scope.love.photos = _.shuffle($scope.love.photos);


})
	.controller('album-nav', function ($scope) {

	});
