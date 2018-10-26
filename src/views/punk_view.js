

const PunkView = function(container, beer) {
  this.container = container;
  this.beer = beer;
};

PunkView.prototype.render = function() {
  const beerContainer = document.createElement('div');
  beerContainer.classList.add('beer');

  const name = this.createNameHeading();
  beerContainer.appendChild(name);

  const tagLine = this.createTagLine();
  beerContainer.appendChild(tagLine);

  const description = this.createDescription();
  beerContainer.appendChild(description);

  const otherInfo = this.createOtherInfoList();
  beerContainer.appendChild(otherInfo);

  const image = this.createBeerImage();
  beerContainer.appendChild(image);

  this.container.appendChild(beerContainer);
};

PunkView.prototype.createNameHeading = function() {
  const name = document.createElement('h1');
  name.classList.add('beer-name');
  name.textContent = this.beer.name;
  return name;
};


PunkView.prototype.createTagLine = function() {
  const tagLine = document.createElement('h4');
  tagLine.classList.add('tag-line');
  tagLine.textContent = this.beer.tagline;
  return tagLine;
};

PunkView.prototype.createDescription = function() {
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = this.beer.description;
  return description;
};

PunkView.prototype.createOtherInfoList = function() {
  const abv = document.createElement('p');
  abv.classList.add('other-info');
  abv.textContent = `ABV: ${this.beer.abv}%`;
  return abv;
};

PunkView.prototype.createBeerImage = function() {
  const image = document.createElement('img');
  image.classList.add('beer-image');
  image.src = this.beer.image_url;
  return image;
};

module.exports = PunkView;
