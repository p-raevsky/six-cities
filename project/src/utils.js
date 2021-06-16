export function getOfferRating(rating) {
  return (Math.round(rating) * 20).toString();
}

export function getPoints(offers) {
  return offers.map((offer) => Object({
    id: offer.id,
    location: offer.location,
  }));
}
