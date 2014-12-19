function ImageViewModel(src, altTitle, width, height){
	var self = this;

	var imageMaxHeight = 192;
	self.src = ko.observable(src);
	self.alt = ko.observable(altTitle);
	self.title = ko.observable(altTitle);
	self.width = ko.observable(width);
	self.height = ko.observable(height);
	self.style = setStyle();

	function setStyle (){
		if (self.height() < imageMaxHeight) {
			//console.log('padding-top: ' + (self.height() - imageMaxHeight) / 2 + 'px');
			return 'padding-top: ' + (imageMaxHeight - self.height()) / 2 + 'px';
		}

		return '';
	}
}
