const { Card } = require("./card.js")

var colors = ["blue", "yellow", "red", "green", "white"]
var cardOneSize = 3
var cardTwoSize = 2
var cardThreeSize = 2
var cardFourSize = 2
var cardFiveSize = 1


exports.placeCard = (card, board) => {
    colorDeck = board[card.color]
    if (colorDeck.length === 0) {
        if (card.number !== 1) {
            throw new Error("BOMB")
        } else {
            colorDeck.push(card)
        }
    } else {
        lastCard = colorDeck[colorDeck.length - 1]
        if (lastCard.number + 1 === card.number) {
            colorDeck.push(card)
        } else {
            throw new Error("BOMB")
        }
    }
}


exports.assignCard = (player, deck) => {
    var index = deck.length - 1
    player.cards.push(index)
    deck.splice(index, 1)
}

exports.assignCards = (players, deck, handSize) => {
    players.forEach(player => {
        for (var i = 0; i < handSize; i++) {
            var randomIndex = Math.floor(Math.random() * deck.length);
            player.cards.push(deck[randomIndex])
            deck.splice(randomIndex, 1)
        }
    })
}

exports.getDeck = () => {
    var deck = []
    for (var i = 0; i < colors.length; i++) {
        for (var j = 0; j < cardOneSize; j++) {
            var number = 1
            var card = new Card(colors[i], number)
            deck.push(card)
        }
        for (var j = 0; j < cardTwoSize; j++) {
            var number = 2
            var card = new Card(colors[i], number)
            deck.push(card)
        }
        for (var j = 0; j < cardThreeSize; j++) {
            var number = 3
            var card = new Card(colors[i], number)
            deck.push(card)
        }
        for (var j = 0; j < cardFourSize; j++) {
            var number = 4
            var card = new Card(colors[i], number)
            deck.push(card)
        }
        for (var j = 0; j < cardFiveSize; j++) {
            var number = 5
            var card = new Card(colors[i], number)
            deck.push(card)
        }
    }
    var mixedDeck = []

    for (var i = 0; i < 50; i++) {
        for (var i = 0; i < 50; i++) {
            var randomIndex = Math.floor(Math.random() * deck.length);
            mixedDeck.push(deck[randomIndex])
            deck.splice(randomIndex, 1)
        }
        deck = mixedDeck
    }

    return mixedDeck
}