const grupoPalavras = [
    "aircraft", "airline", "airport", "arrival", "baggage", 
    "boarding", "booking", "business", "cabin", "check-in",
    "departure", "destination", "economy", "fare", "first class",
    "flight", "flights", "gate", "holiday", "jet",
    "journey", "land", "luggage", "passenger", "passport",
    "pilot", "reservation", "seat", "security", "ticket"
  ];
  
  const palavras = [];
  
for (let i = 0; i < 10; i++) {
palavras.push(...grupoPalavras);
}
  
  
palavras[114] = 'flights'
export {palavras}
  