

(function(){




angular.module("topMusic").directive('tmArrowUp', function() {		//CUIDADO la directiva en el html es 'tm-arrow' o 'tm:arrow', no 'tmArrow'. porque en html separa las mayusculas con guion
    
	return {
		restrict: 'E',
    	template: '<span class="glyphicon glyphicon-arrow-up"></span>'
    };   

})
.directive('tmArrowDown', function() {
    
	return {
		restrict: 'E',
    	template: '<span class="glyphicon glyphicon-arrow-down"></span>'
    };   

});





}());