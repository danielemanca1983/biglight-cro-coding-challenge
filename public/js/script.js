window.addEventListener("load", function() {
	var basketDiv = document.getElementById("basket");
	basketDiv.id = "basket";
	basketDiv.innerHTML = `
	  <select id="item-select">
		<option value="item1">Item 1</option>
		<option value="item2">Item 2</option>
		<option value="item3">Item 3</option>
	  </select>
	  <button id="add-to-basket">Add to basket</button>
	`;
	document.body.appendChild(basketDiv);
  
	window.addEventListener("scroll", function() {
	  var basket = document.getElementById("basket");
	  if (window.pageYOffset > 0) {
		basket.style.opacity = "1";
	  } else {
		basket.style.opacity = "0";
	  }
	});
});
  