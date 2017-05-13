var app = angular.module("myGrid", []);
const colors=['white', 'white', 'white', 'white', 'white', 'white'];
//const colors2=['#C5B036', '#3B91A0', '#74B068', '#D16738', '#BE585B'];
const colors2=['red', 'orange', 'yellow', 'green', 'cyan', 'white'];
const NUM_OF_SQRS=360;
const NUM_OF_COLORS=colors.length;

app.controller('GridController', function($scope) {

	$scope.nextColor=function(color) {
		let index = colors2.indexOf(color);
		(index===NUM_OF_COLORS-1)?index=0:index++;
		return colors2[index];
	};

	$scope.getColors=function() {
		let colorsArr=[];
		for (let i=0; i<NUM_OF_SQRS;i++) {
		colorsArr.push(colors[i%NUM_OF_COLORS]);
		}
		return colorsArr;
	};

});
