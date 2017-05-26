const kOrigin = [105, 105];

const kLowerRadius = 177;
const kUpperRadius = 267;

const kItemsCount = 5;
const kSectorAngle = 360 / kItemsCount;

var gvLinks = ['facebook','github','email','instagram','curriculum-vitae'];

var gvNextSector = 4;

function addToSector(pId) {
	var lvElem = document.getElementById(pId);

	var lvAngle = (gvNextSector * kSectorAngle) + Math.round(Math.random() * (kSectorAngle + 1));
	var lvRadius = Math.round(Math.random() * (kUpperRadius - kLowerRadius + 1) + kLowerRadius);

	gvNextSector--;

	lvElem.style.left = (kOrigin[0] + (lvRadius * Math.cos(lvAngle*(Math.PI/180)))).toString() + "px";
	lvElem.style.top = (kOrigin[1] - (lvRadius * Math.sin(lvAngle*(Math.PI/180)))).toString() + "px";
}

window.addEventListener('load', initializeMenu, false);

function initializeMenu() {
	while(gvNextSector >= 0) {
		addToSector(gvLinks[gvNextSector]);
	}
}