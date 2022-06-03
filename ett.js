const deck = document.querySelector('.deck');

let suites = ['Hjärter', 'Spader', 'Ruter', 'Klöver'];

let values = ['A',2,3,4,5,6,7,8,9,10,'J','D','K'];


for (let i = 0 ; i < suites.length; i++) {
    for (let j = 0; j < values.length; j++) {
     let card = {Value: values[j], Suit: suites[i]};
			deck.innerHTML += `${card.Suit} ${card.Value} <br>`;
            console.log(card);
    }
  
}