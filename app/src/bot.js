class Bot {

    constructor(name, cards, playerNumber) {
        this.name = name
        this.cards = cards
        this.playerNumber = playerNumber
    }


    whichCardCanIplay(board) {
        return this.cards.filter(card => {
            var color = card.color
            var deck = board[color]
            if (deck.length === 0) {
                return card.infoNumber === 1
            } else {
                return deck[deck.length - 1] === card.infoNumber - 1
            }
        })
    }


    whichCardCanIsuggest(board, player) {
        return player.cards.filter(card => {
            var color = card.color
            var deck = board[color]
            if (deck.length === 0) {
                return card.number === 1
            } else {
                return deck[deck.length - 1] === card.number - 1
            }
        })
    }

    informPlayer(playableCards, player) {

    }

    valuingPlayableCards(infoCards) {
        if (infoCards.length === 0) {
            console.log("NO INFOCARDS")
            return []
        } else if (infoCards.length === 1) {
            // SOME SICK LOGIC HERE
            console.log("SINGLE PLAYER .....")
            console.log("EVAULUTING CARDS OF " + infoCards[0].player.name)
            return { "player": infoCards[0].player, "card": infoCards[0].playableCards }
        } else {
            console.log("MULTIPLE PLAYER .....")
            console.log("DEEP EVAULATION! .....")
            console.log("EVAULUTING CARDS OF infoCards")
            infoCards.sort((a, b) => {
                if (a.playableCards.length > b.playableCards.length) {
                    return -1
                } else if (a.playableCards.length < b.playableCards.length) {
                    return +1
                }
                return 0
            })
            return { "player": infoCards[0].player, "card": infoCards[0].playableCards }
        }
    }

    valuingPlayableCards(cards) {

    }


    calucateNextMove(board, players) {
        var playableCards = this.whichCardCanIplay(board)
        if (playableCards.length === 0) {
            var infoCards = []
            console.log("IMMA SUGGESTING")
            players.forEach(player => {
                if (player.playerNumber !== this.playerNumber) {
                    var cards = this.whichCardCanIsuggest(board, player)
                    if (cards.length > 0) {
                        infoCards.push({ "player": player, "playableCards": cards })
                    }
                }
            })
            console.log(infoCards)
            var bestCard = this.valuingPlayableCards(infoCards)
            console.log(bestCard)
        }
    }

}

module.exports = {
    Bot
};