onmessage = function (oEvent) {
	var count = oEvent.data.startCount,
		inside = oEvent.data.startInside,
		width = oEvent.data.width,
		height = oEvent.data.height,
		circle = oEvent.data.circle;
	var lastUpdate = Date.now();
	while(true) {
		var x = Math.random() * width,
		    y = Math.random() * width;
		var wasInside = false;
		var dx = x - circle.x,
			dy = y - circle.y;
		if (dx*dx + dy*dy < circle.radius*circle.radius) {
			inside++;
			wasInside = true;
		}
		count++;

		if (count % 12387 == 0 && Date.now() - lastUpdate > 100) {
			postMessage({
				count: count,
				inside: inside,
				x: x,
				y: y,
				inCircle: wasInside
			});
			lastUpdate = Date.now();
		}
	}
};