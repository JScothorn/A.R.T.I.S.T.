

define([
	"text!home/home.html",
	"text!home/Risks.html",
	"text!home/Risks/alternatives.html",
	"text!home/Risks/Risks_to_Offspring.html",
	"text!home/Risks/Risks_to_Offspring/birth_defects.html",
	"text!home/Risks/Risks_to_Offspring/multiple_pregnancy.html",
	"text!home/Risks/Risks_to_Offspring/overall_risks.html",
	"text!home/Risks/Risks_to_Women.html",
	"text!home/Risks/Risks_to_Women/cancer.html",
	"text!home/Risks/Risks_to_Women/ohs.html",
	"text!home/Risks/Risks_to_Women/pregnancy.html",
	"text!home/Social_Legal.html",
	"text!home/Social_Legal/effects.html",
	"text!home/Social_Legal/ethics.html",
	"text!home/Social_Legal/financial.html",
	"text!home/Social_Legal/offspring.html",
	"text!home/Social_Legal/outcomes.html",
	"text!home/Social_Legal/references.html",
	"text!home/Technique_of_IVF.html",
	"text!home/Technique_of_IVF/Additional_Elements_and_Their_Risks.html",
	"text!home/Technique_of_IVF/Additional_Elements_and_Their_Risks/embryo_disposition.html",
	"text!home/Technique_of_IVF/Additional_Elements_and_Their_Risks/hatching.html",
	"text!home/Technique_of_IVF/Additional_Elements_and_Their_Risks/injection.html",
	"text!home/Technique_of_IVF/Additional_Elements_and_Their_Risks/research.html",
	"text!home/Technique_of_IVF/Additional_Elements_and_Their_Risks/storage.html",
	"text!home/Technique_of_IVF/Core_Elements_and_Their_Risks.html",
	"text!home/Technique_of_IVF/Core_Elements_and_Their_Risks/culture.html",
	"text!home/Technique_of_IVF/Core_Elements_and_Their_Risks/embryo_transfer.html",
	"text!home/Technique_of_IVF/Core_Elements_and_Their_Risks/medications.html",
	"text!home/Technique_of_IVF/Core_Elements_and_Their_Risks/oocyte_retrieval.html",
	"text!home/Technique_of_IVF/Core_Elements_and_Their_Risks/uterine_lining.html"
], function() {   

	var that = this,
		templates = [];

	that.arguments = arguments;

	var getTemplates = function() {
	    _.each(that.arguments, function(arg) {
	    	var html = arg,
		    	name = html.match(/\{\{.+\}\}/)[0].split("{{")[1].split("}}")[0].trim(),
		    html = html.split(/\{\{.+\}\}/)[1];
	        templates.push({
	        	name : name,
	        	template: html
	        });
	    });
	    return templates;
	}

	return getTemplates;
});