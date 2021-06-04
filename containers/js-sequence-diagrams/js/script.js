// Based on https://codepen.io/fazouane-marouane/pen/GxPMOe
//	let currentState = 'list';
//	const listView = document.querySelector(".master-detail__list-view");
//	const items = document.querySelectorAll(".master-detail__list-view>.list>.item");
//	const detailView = document.querySelector(".master-detail__detail-view");
//	const backButton = document.querySelector(".master-detail__to-list-view");
//	const content = document.querySelector(".master-detail__detail-view__content");

//	function goToListView() {
//	  console.log("goToListView");
//	  detailView.classList.remove("active");
//	  listView.classList.add("active");
//	  currentState = 'list';
//	}
//	function goToDetailView() {
//	  goToDetailViewWithId(this.dataset.id);
//	}

//	function goToDetailViewWithId(id) {
//	  detailView.classList.add("active");
//	  listView.classList.remove("active");
//	  currentState = id;
//	  content.innerText = `Here are some details for Item #${id}`;
//	}

//	listView.addEventListener('focus', (event) => goToListView(), false);
//	detailView.addEventListener('focus', () => goToDetailViewWithId(currentState), false);
//	items.forEach(item => {
//	  item.addEventListener('click', goToDetailView);
//	})
//	backButton.addEventListener('click', (event) => goToListView());
	
// Based on https://stackoverflow.com/questions/486896/adding-a-parameter-to-the-url-with-javascript
// Set theme to 'hand' if no theme was provided in url
const urlParams = new URLSearchParams(window.location.search);
if(urlParams == ""){
  urlParams.set('theme', 'hand');
  window.location.search = urlParams;
}

// Based on https://webdesign.tutsplus.com/tutorials/dropdown-navigation-how-to-maintain-the-selected-option-on-page-load--cms-32210
const select_theme = document.querySelector("#select-theme");
	
// Listen for select changes
select_theme.addEventListener("change", function(){
  const url = this.options[this.selectedIndex].dataset.url;
  if(url) {
    location.href = url;
  }
});
	
// Set selected option based on URL
const theme_options = document.querySelectorAll("#select-theme option");
for(let i = 0; i < theme_options.length; i++){
  var url = theme_options[i].dataset.url;
  if(location.href.includes(url)){
	theme_options[i].setAttribute("selected", "");
	break;
  }
}
	
// Load diagram data
var data;
$.get('data.txt', function(text) {
  data=text;
  console.log(data); // Optional	  
  var diagram = Diagram.parse(data);
  // Based on https://www.sitepoint.com/get-url-parameters-with-javascript/
  const queryString = window.location.search.substring(1); // Remove '?' from start
  const urlParams = new URLSearchParams(queryString);
  const theme_value = urlParams.get('theme')
  var options = {theme: theme_value};
  diagram.drawSVG("diagram", options);
});

// Listen for button clicks
const download_button = document.querySelector("#downloadButton");
download_button.addEventListener("click", function(){
  var svg = $("#diagram").find("svg")[0];
  var width = parseInt(svg.width.baseVal.value);
  var height = parseInt(svg.height.baseVal.value);
  var xml = '<?xml version="1.0" encoding="utf-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" xmlns:xlink="http://www.w3.org/1999/xlink"><source><![CDATA[' + data + ']]></source>' + svg.innerHTML + '</svg>';
  var a = $(this);
  a.attr("download", "diagram.svg"); // TODO I could put title here
  a.attr("href", "data:image/svg+xml," + encodeURIComponent(xml));
  return false;
});
	
// Spinner whilst loading ...
$(document).ready(function() {
  $('#spinner').css('display', 'none');
  $('#downloadButtonWrapper').hide().fadeIn('slow'); 
  $('#diagram').hide().fadeIn('slow');
});
