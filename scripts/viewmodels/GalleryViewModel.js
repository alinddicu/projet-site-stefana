function GalleryViewModel(){
	var self = this;

	self.imageIndex = ko.observable(0);
	self.images = [
		new ImageViewModel('images/partenaires/taln.jpg', 'Traitement Automatique du Langage Naturel', 173, 192),
		new ImageViewModel('images/partenaires/logo_limsi.gif', 'Laboratoire d\'Informatique pour la Mécanique et les Sciences de l\'Ingénieur', 104, 75),
		new ImageViewModel('images/partenaires/afia.gif', 'Association Française pour l\'Intelligence Artificielle', 318, 192),
		new ImageViewModel('images/partenaires/logo_u-montreal.gif', 'Université de Montréal', 120, 47),
		new ImageViewModel('images/partenaires/elda.jpg', 'L\'Agence pour l\'évaluation et la distribution des ressources linguistiques', 80, 96),

		new ImageViewModel('images/partenaires/lab_recherche_informatique.jpg', 'Laboratoire de recherche en informatique de Paris-Sud - CNRS', 60, 59),
		/*
		new ImageViewModel('images/partenaires/', '', , ),
		new ImageViewModel('images/partenaires/', '', , ),
		new ImageViewModel('images/partenaires/', '', , ),
		new ImageViewModel('images/partenaires/', '', , ),
		new ImageViewModel('images/partenaires/', '', , )
		*/
	];
	var imageCount = self.images.length;

	self.mainImage = ko.computed(function() {
		return self.images[self.imageIndex()];
	}, self);

	self.prev = function() {
		if(self.imageIndex() == 0) {
			self.imageIndex(imageCount - 1);
		} else {
			self.imageIndex(self.imageIndex() - 1);
		}
	};

	self.next = function() {
		if(self.imageIndex() == imageCount - 1) {
			self.imageIndex(0);
		} else {
			self.imageIndex(self.imageIndex() + 1);
		}
	};
}
