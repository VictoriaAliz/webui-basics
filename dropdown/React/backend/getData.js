const getNames = (array) => array.map(element => element.name);

const getObjectsAccordingCountry = (obj, country) => obj.countries.find(element => element.name === country);

let getCountries = (obj) => obj.countries.map(element => element.name);

let getAlbums = (obj, country, group) => {
    const objectsAccordingCountry = getObjectsAccordingCountry(obj, country);
    const objectsAccordingGroup = objectsAccordingCountry.groups.find(element => element.name === group);
    const albums = getNames(objectsAccordingGroup.albums);
    return albums;
}

let getGroups = (obj, country) => {
    const objectsAccordingCountry = obj.countries.find(element => element.name === country);
    const groups = getNames(objectsAccordingCountry.groups);
    return groups;
}

module.exports.getCountries = getCountries;
module.exports.getAlbums = getAlbums;
module.exports.getGroups = getGroups;
