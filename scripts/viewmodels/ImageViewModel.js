function ImageViewModel(src, altTitle, width, height){
	var self = this;

	self.src = ko.observable(src);
	self.alt = ko.observable(altTitle);
	self.title = ko.observable(altTitle);
	self.width = ko.observable(width);
	self.height = ko.observable(height);
}
