

const PunkView = function(container, beer) {
  this.container = container;
  this.beer = beer;
};

PunkView.prototype.render = function() {
  const topBeerBox = document.createElement('div');
  topBeerBox.classList.add('top-level-grid', 'grid-row', 'grid-row-md');

  const beerContainer = document.createElement('div');
  beerContainer.classList.add('grid-row', 'beer', 'grid-row-md');

  const name = this.createNameHeading();
  beerContainer.appendChild(name);

  const tagLine = this.createTagLine();
  beerContainer.appendChild(tagLine);

  const description = this.createDescription();
  beerContainer.appendChild(description);

  const otherInfo = this.createOtherInfoList();
  beerContainer.appendChild(otherInfo);

  topBeerBox.appendChild(beerContainer);

  const beerPicture = document.createElement('div');
  beerPicture.classList.add('image-div');
  const beerImage = this.createBeerImage();
  beerPicture.appendChild(beerImage);

  topBeerBox.appendChild(beerPicture);

  this.container.appendChild(topBeerBox);
};

PunkView.prototype.createNameHeading = function() {
  const name = document.createElement('h1');
  name.classList.add('cell', 'beer-name');
  name.textContent = this.beer.name;
  return name;
};


PunkView.prototype.createTagLine = function() {
  const tagLine = document.createElement('h4');
  tagLine.classList.add('cell', 'tag-line');
  tagLine.textContent = this.beer.tagline;
  return tagLine;
};

PunkView.prototype.createDescription = function() {
  const description = document.createElement('p');
  description.classList.add('cell', 'description');
  description.textContent = `${this.beer.name} description:
  ${this.beer.description} `;
  return description;
};

PunkView.prototype.createOtherInfoList = function() {
  const abv = document.createElement('p');
  abv.classList.add('cell', 'other-info');
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
