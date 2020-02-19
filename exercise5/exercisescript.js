<script>
function frasier() {
	map.panTo(new L.LatLng(42.067378, -93.626682));
}

$("#zoomOut").click(function(){
	map.setZoom(8);
});

$("zoomIn").click(function(){
	map.setView(new L.LatLng(42.026328, -93.646539, 4);
});
</script>