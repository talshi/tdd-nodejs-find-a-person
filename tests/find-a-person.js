var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() {
	it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() {
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var posts = map.find_a_person("Or A.")
		expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
	});
  
	it('Given a name, check if the map includes a location information for it (a place or geo. location)', function() {
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var location_exsit = map.find_a_location("Or A.");
		expect(location_exsit).to.be.eql(true);
	});

	it('Check if there are map inconsistencies, e.g., the same name with different locations', function() {  
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var isInconsistencies = map.isInconsistencies("Or A.");
		expect(isInconsistencies).to.be.eql(true);
	});
	
	it('Given a person name, check if he appears in a post', function() {
		var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
		var isAppear = map.is_name_show_by_post("Or A.");
		expect(isAppear).to.be.eql(true);
	});
 
});
