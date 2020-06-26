	function buildGraph(){
		//this will hold of our main data consists of multiple chart data
		var data = [];
		
		//variables to hold monthly month
		var monthList = ['Ene 2016','Feb 2016','Mar 2016','Apr 2016','May 2014','Jun 2016','Jul 2016','Aug 2016', 'Sep 2016', 'Oct 2016', 'Nov 2016', 'Dec 2016'];
		var monthlyIncome = [0, 2757820, 3447270, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var companiesNumber = [0, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		//Array to hold each individual coordinate x and y values
		var monthlyIncomeValues = [];
		var companiesNumberValues = [];
		
		//Looping the data and fetch into array
		for(var i = 0; i < monthList.length; i++){
			var xyIncome = {x: i, y: monthlyIncome[i]};
			monthlyIncomeValues.push(xyIncome);
			
			var xyCompanies = {x: i, y: companiesNumber[i]};
			companiesNumberValues.push(xyCompanies);
			
		}
		
		//bar chart
		var dataIncome = { key: "Monthly Income", values: monthlyIncomeValues, type: "bar", yAxis: 2, color: '#00913B' }
		
		//line chart
        var dataCompanies = { key: "Amount of companies", values: companiesNumberValues, type: "line", yAxis: 1, color: '#00C3D9' }
		
		//Insert the values array into data variable
        data.push(dataIncome);
        data.push(dataCompanies);
		
		//build the graph
		nv.addGraph(function () {
			//build as multichart graphs and set the margin right and left to 100px.
			var chart = nv.models.multiChart()
					    .margin({left: 100, right: 100})
			
			//customize the tool tip
			chart.tooltip.contentGenerator(function (key, x, y, e, graph) {
				return "<div class='tooltip'><span>Month:</span> " + monthList[key.index || key.pointIndex] + "</div>" + "<div class='tooltip'><span>Value:</span> " + key.series[0].value + "</div><div class='tooltip'><span>Legend:</span> <div style='background:" + key.series[0].color + ";display:inline-block;height:15px;width:15px;'>&#160;</div></div>";
			});
		
			//Overwrite the x axis label and replace it with the month name
			chart.xAxis.tickFormat(function (d) { return monthList[d] });
			
			//Chart Interpolate
			chart.interpolate("linear")
			
			//Dollar Sign
			chart.yAxis2.tickFormat(function(d) { return '$' + d3.format(',f')(d) });
			
			//get the chart svg object and fecth the data to build the chart
			d3.select('#chart svg')
				.datum(data)
				.transition().duration(500).call(chart);
			return chart;
		});
	}
	
	//call the function to build the graph.
	buildGraph();