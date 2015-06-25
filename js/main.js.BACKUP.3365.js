define([
	'checkMobile',
	'templateLoader',
	'text!contentTemplate.html',
	'text!nav_buttons.html',
	'dotdotdot'
], function(CheckMobile, TemplateLoader, Layout, Buttons, Dot) {

	"use strict";

	// LOCAL VARS 
<<<<<<< HEAD
	var SITE_ROOT = "/130.108.85.103/",
=======

<<<<<<< HEAD
	var SITE_ROOT = "http://130.108.85.103//",
>>>>>>> a9ec855ef25c62b354c5599ecdb897f5beafd8f0
=======
	var SITE_ROOT = window.location,
>>>>>>> d4d308c25422962ea04900fc3c0c0afdb1e48637
		templates = TemplateLoader(),
		pagesObject = [{name: "home", url: "home/home.html", children:
						 [{name: "Risks", url: "home/Risks.html", children: 
						 	[{name: "Alternatives to IVF", url: "home/Risks/alternatives.html"},
						 	{name: "Risks_to_Offspring", url: "home/Risks/Risks_to_Offspring.html", children: 
						 		[{name: "Overall Risks", url: "home/Risks/Risks_to_Offspring/overall_risks.html"},
						 		{name: "Birth Defects", url: "home/Risks/Risks_to_Offspring/birth_defects.html"},
						 		{name: "Risks of Multiple Pregnancy", url: "home/Risks/Risks_to_Offspring/multiple_pregnancy.html"}] },
						 	{name: "Risks_to_Women", url: "home/Risks/Risks_to_Women.html", children: 
						 		[{name: "Ovarian Hyperstimulation Syndrome", url: "home/Risks/Risks_to_Women/ohs.html"},
						 		{name: "cancer", url: "home/Risks/Risks_to_Women/cancer.html"},
						 		{name: "Risks of Pregnancy", url: "home/Risks/Risks_to_Women/pregnancy.html"}] }], },
					  	 {name: "Social_Legal", url: "home/Social_Legal.html", children: 
					  	 	[{name: "Ethical and Religious Considerations in Infertility Treatment", url: "home/Social_Legal/ethics.html"},
					  	 	{name: "Psychological Effects of Infertility Treatment", url: "home/Social_Legal/effects.html"},
					  	 	{name: "Legal Considerations to Offspring", url: "home/Social_Legal/offspring.html"},
					  	 	{name: "Financial", url: "home/Social_Legal/financial.html"},
					  	 	{name: "Reporting Outcomes", url: "home/Social_Legal/outcomes.html"}], },
					     {name: "Technique_of_IVF", url: "home/Technique_of_IVF.html", children: 
						 	[{name: "Core_Elements_and_Their_Risks", url: "home/Technique_of_IVF/Core_Elements_and_Their_Risks.html", children: 
						 		[{name: "Medications for IVF Treatment", url: "home/Technique_of_IVF/Core_Elements_and_Their_Risks/medications.html"},
						 		{name: "Embryo Transfer", url: "home/Technique_of_IVF/Core_Elements_and_Their_Risks/embryo_transfer.html"},
						 		{name: "Transvaginal Oocyte Retrieval", url: "home/Technique_of_IVF/Core_Elements_and_Their_Risks/oocyte_retrieval.html"},
						 		{name: "IVF and Embryo Culture", url: "home/Technique_of_IVF/Core_Elements_and_Their_Risks/culture.html"},
						 		{name: "Hormonal Support of the Utarine Lining", url: "home/Technique_of_IVF/Core_Elements_and_Their_Risks/uterine_lining.html"}] },
						 	{name: "Additional_Elements_and_Their_Risks", url: "home/Technique_of_IVF/Additional_Elements_and_Their_Risks.html", children: 
						 		[{name: "Intracytoplasmic Sperm Injection", url: "home/Technique_of_IVF/Additional_Elements_and_Their_Risks/injection.html"},
						 		{name: "Embryo Disposition", url: "home/Technique_of_IVF/Additional_Elements_and_Their_Risks/embryo_disposition.html"},
						 		{name: "Assisted Hatching", url: "home/Technique_of_IVF/Additional_Elements_and_Their_Risks/hatching.html"},
						 		{name: "Cryopreserved Embryo Storage", url: "home/Technique_of_IVF/Additional_Elements_and_Their_Risks/storage.html"},
						 		{name: "Donated or Research Embryo Fate", url: "home/Technique_of_IVF/Additional_Elements_and_Their_Risks/research.html"}] }] }] }],
		that = {
			list: [],
			object: {},
			lastPage: SITE_ROOT+"home.html"
		};

	// SET UP SOME USEFUL SWIG FILTERS
	swig.init({ filters: {
        split: function(string) {
            return string.split('_');
        },
        join: function(array) {
            return array.join(" ");
        }
    }})

	// SET UP INITIAL PAGE AND RENDER THE HOME PAGE
	var init = function() {
		
		var file = swig.compile(Layout),
			renderHTML = file({
				mobile: CheckMobile()
			});

		$("#content").html(renderHTML);
		render(window.location+"home.html");
	} 

	// RENDER THE CONTENT AND NAVIGATION BUTTONS
	var render = function(href) {
		
		var name = _.last(href.split("/"));
		name = name==="" ? "home.html" : name;
		var locations = _.last(href.split(SITE_ROOT)).split("/"),
			page = _.where(templates,{name: name})[0],
			n = name.split(".")[0],
			back = name==="home.html" ? false : true;
			that.object = pagesObject;

		// GENERATE THE LIST OF BUTTONS TO DISPLAY
		_.each(locations, function(l) {
			l = l.split(".html")[0];
			var object = _.flatten(_.pluck(_.where(that.object, {name: l}), "children"));
			if ( !_.isEmpty(object) && !_.isUndefined(object[0])) {
				that.list = that.object = object;
			} else {
				that.list = [];
			that.object = object = {};
}
		});

		// UPDATE THE BREADCRUMB
		$('.breadcrumb').empty();
		var url = SITE_ROOT;
		for (var i=0;i<locations.length;i++) {
			var thisPage = locations[i];
			thisPage = thisPage.indexOf(".html")===-1 ? thisPage+".html" : thisPage;
			if (i===0) {
				url+=thisPage
			} else {
				url=url.split(".html")[0]+"/"+thisPage;
			}
			var text = thisPage.split(".html")[0]||thisPage;
			$('.breadcrumb').append('<li><a class="link" href="'+url+'">'+text+'</a></li>');
			if (i===locations.length-2) {
				that.lastPage = url;
			}
		}

		// RENDER BUTTONS
		var	file = swig.compile(Buttons),
			renderHTML = file({
				back: back,
				url: that.lastPage,
				list: that.list
			});
		$("#navButtons").html(renderHTML);

		// RENDER CONTENT
		var	file = swig.compile(page.template),
			mobile = CheckMobile(),
			renderHTML = file({
				mobile: mobile
			});
		// ONLY DISPLAY IF NOT MOBILE OR THERE ARE NO MORE CHILDREN

		///////////////////////////////////////////////////////////
		//
		// Maybe change this to only show when at a child.....IVF techniques has a page that isnt achild though
		//
		///////////////////////////////////////////////////////////
		if (!mobile || that.list.length===0) {
			$("#pageContent").html(renderHTML).removeClass("hidden");
		} else {
			$("#pageContent").empty().addClass("hidden");
		}
		

		// BIND CLICK EVENT
		$('.link').off();
		$('.link').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			render(e.currentTarget.href);
		});

		$('.dot').dotdotdot({
			height	: "20px",
		});
	}

	return init;

});
