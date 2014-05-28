


window.onload = function () {

	var paper = Raphael("map", 600, 500);

	removeElements = function() {
		console.log("removeElements");
		var i = 0;
		for(var d in toRemove)
		{
			console.log(i + "removing " + d.toString());	
			i = i+1;
			paper.remove(d);
		}
	};

	var toRemove = [];
	drawNames = function(hid) {
		paper.text(500,100,"Counties Served:").attr;
		var y = 130;
		removeElements();
		for(var id in mapData)
		{
			var text;
			if(mapData[id].num === hid) {
				console.log("yes");
				text = paper.text(520, y, mapData[id].name);
				drawBigName(hid);
			} else {
				console.log("no");
				text = paper.text(500, y, mapData[id].name);
			}
			y+= 10;
			toRemove.push(text.id);
		}
	};

	drawBigName = function(hid) {
		for(var id in mapData)
		{
			console.log(id+","+hid)
			var text;
			if(mapData[id].num === hid)
			{
				text = paper.text(100,300,mapData[id].name);
			}
			else {
				text = paper.text(100,300,"Bay Area");
			}
		}
	};


	// Create canvas at 20, 20, and size 420 x 620
	
	var id = null;
	paper.rect(0,2,600,500).attr({stroke: "none", fill: "0-#9bb7cb-#adc8da"});
	var over = function () {
		this.c = this.c || this.attr("fill");
		id = this.id;
		// console.log("id"+id);
		if(id !== mapData.border.num) {
			this.stop().animate({fill: "#bacabd"},250);
			this.transform("s 1.05");
			this.toFront();

			drawNames(id);
			}

	}, out = function () {
		this.stop().animate({fill: this.c}, 250);
		this.transform("");
		
	}, click = function () {
		id = this.id;
		removeElements();
		drawBigName(id);
	};

	paper.setStart();
	// for(var p in mapData)
	// {
	// 	console.log(paper.path(mapData[p].shape).attr({stroke: "#ccc6ae", fill: "#f0efeb", "stroke-width": 2,"stroke-opacity": 0.25}).id);
	// }
	paper.add(mapData);
	var world = paper.setFinish();
	world.hover(over,out);
	world.click(click);

	drawNames(-1);
	drawBigName();


}


