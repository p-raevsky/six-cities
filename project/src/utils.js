import {AlertValues} from './settings';

export function getOfferRating(rating) {
  return (Math.round(rating) * 20).toString();
}

export function getPoints(offers) {
  return offers.map((offer) => Object({
    id: offer.id,
    location: offer.location,
  }));
}

export function showAlert(message) {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = AlertValues.Z_INDEX;
  alertContainer.style.position = AlertValues.POSITION;
  alertContainer.style.width = AlertValues.WIDTH;
  alertContainer.style.height = AlertValues.HEIGHT;
  alertContainer.style.left = AlertValues.LEFT;
  alertContainer.style.top = AlertValues.TOP;
  alertContainer.style.transform = AlertValues.TRANSRORM;
  alertContainer.style.right = AlertValues.RIGHT;
  alertContainer.style.padding = AlertValues.PADDING;
  alertContainer.style.fontSize = AlertValues.FONT_SIZE;
  alertContainer.style.textAlign = AlertValues.TEXT_ALIGN;
  alertContainer.style.backgroundColor = AlertValues.BACKGROUND_COLOR;
  alertContainer.style.color = AlertValues.COLOR;
  alertContainer.style.borderTop = AlertValues.BORDER_TOP;
  alertContainer.style.boxShadow = AlertValues.BOX_SHADOW;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, AlertValues.SHOW_TIME);
}

export function updateData(offers, offer) {
  const idx = offers.findIndex((item) => item.id === offer.id);
  if (idx === -1) {
    return offers;
  }

  return [
    ...offers.slice(0, idx),
    offer,
    ...offers.slice(idx + 1),
  ];
}
