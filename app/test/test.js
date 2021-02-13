var { Bot } = require("../src/bot.js")

var game = require("../src/game.js")

var assert = require('assert');

var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }


describe('Array', function() {
    describe('#getDeck()', function() {
        it('should return 50 cards', function() {
            var deck = game.getDeck()
            assert.equal(deck.length, (50))
        });
    });

    describe('#assignCards()', function() {
        it('should return 5 cards', function() {
            var deck = game.getDeck()
            var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            game.assignCards(players, deck, 5)
            assert.equal(players[0].cards.length, (5))
            assert.equal(players[1].cards.length, (5))
            assert.equal(players[2].cards.length, (5))
            assert.equal(deck.length, (35))
            // players.forEach(player => {
            //     console.log(player.name)
            //     console.log(player.cards)
            // })
            // console.log(deck)
        });

        it('should add a card', function() {
            var deck = game.getDeck()
            var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            game.assignCards(players, deck, 5)
            game.assignCard(players[0], deck)
            assert.equal(players[0].cards.length, (6))
        });
    });

    describe('#placeCard()', function() {
        it('should place a card', function() {
            //var deck = game.getDeck()
            //var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }
            var card = { "color": "white", "number": 1 }
            game.placeCard(card, board)
            assert.equal(board["white"].length, (1))
        });
        it('should place a card - expects bomb', function() {
            //var deck = game.getDeck()
            //var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }
            var card = { "color": "white", "number": 2 }
            assert.throws(function() { game.placeCard(card, board) }, Error)
        });

        it('should place a card - expects bomb', function() {
            //var deck = game.getDeck()
            //var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }
            var card = { "color": "white", "number": 5 }
            assert.throws(function() { game.placeCard(card, board) }, Error)
        });
        it('should place multiple cards - expects bomb', function() {
            //var deck = game.getDeck()
            //var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }
            var card = { "color": "white", "number": 1 }
            game.placeCard(card, board)
            //assert.equal(board["white"].length, 1)
            card = { "color": "white", "number": 2 }
            game.placeCard(card, board)
            //assert.equal(board["white"].length, 2)
            card = { "color": "white", "number": 4 }
            assert.throws(function() { game.placeCard(card, board) }, Error)
        });

        it('should place multiple cards - expects bomb', function() {
            //var deck = game.getDeck()
            //var players = [{ "name": "Alice", "cards": [] }, { "name": "Bob", "cards": [] }, { "name": "Charlie", "cards": [] }]
            var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }
            var card = { "color": "white", "number": 1 }
            game.placeCard(card, board)
            //assert.equal(board["white"].length, 1)
            card = { "color": "yellow", "number": 1 }
            game.placeCard(card, board)
            //assert.equal(board["white"].length, 2)
            card = { "color": "red", "number": 4 }
            assert.throws(function() { game.placeCard(card, board) }, Error)
        });
    });

    describe('#calucateMove()', function() {
        it('should return 5 cards', function() {
            var deck = game.getDeck()
            var players = [new Bot("Alice", [], 0), new Bot("Bob", [], 1), new Bot("Charlie", [], 2)]
            var board = { "white": [], "yellow": [], "blue": [], "red": [], "green": [] }
            game.assignCards(players, deck, 5)

            players[0].calucateNextMove(board, players)
        });
    });
});