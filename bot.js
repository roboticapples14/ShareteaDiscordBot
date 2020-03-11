const Eris = require("eris");
var Discord = require('discord.io');
var logger = require('winston');
require('dotenv').config();
var bot = new Eris("NTc1MDI0Mjk1NDI0NTU3MDg3.XOSoYg.Jtc2nnlVXPo-S-gtGX6o4aNKG2E");

var drinkCombos = []
var counter = 0;
function getDrink() {
    for (var i = 0; i < drinks.length; i++) {
        for (var j = 0; j < toppings.length; j++) {
            drinkCombos[counter] = drinks[i] + " with " + toppings[j];
            counter++;
        }
    }
    var order = drinkCombos[Math.floor(Math.random()*drinkCombos.length)];
    return order;
}

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});
bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    bot.createMessage(msg.channel.id, "Welcome to the ShareTea drink generator, here to help your indecisive ass order the drink of your life. Use the command !Sharetea to begin.");
  });
bot.on("messageCreate", (msg) => { // When a message is created
    const message = msg.content.substring(9);

    if(msg.content == "!Sharetea") { // If the message content is "!ShareTea"
        bot.createMessage(msg.channel.id, getDrink());
    }
});

bot.connect(); // Get the bot to connect to Discord

const drinks = ["Mango Green Tea",
    "Grapefruit Green Tea",
    "Honey Lemon",
    "Wintermelon with Lemon Juice",
    "Strawberry Black Tea",
    "Pineapple Green / Black Tea",
    "Hawaii Fruit Tea",
    "Kiwi Fruit Tea",
    "Mango & Passion Fruit Green Tea",
    "Whole Lemon Black Tea / Green Tea",
    "Passion Fruit Tea",
    "Orange Fruit Tea",
    "Grapefruit Tea",
    "Classic Black Tea",
    "Classic Green Tea",
    "Classic Oolong Tea",
    "Wintermelon Tea",
    "Honey Black / Green Tea",
    "Ginger Tea",
    "Black Creama Tea",
    "Green Creama Tea",
    "Oolong Creama Tea",
    "Wintermelon Tea Creama",
    "Coffee Creama",
    "Cocoa Creama",
    "Mango Green Tea Creama",
    "Matcha Green Tea Creama",
    "Fresh Milk Tea",
    "Wintermelon with Fresh Milk",
    "Cocoa Lover",
    "Boba Fresh Milk",
    "Matcha with Fresh Milk",
    "Classic Milk Tea",
    "Honey Milk Tea",
    "Classic Coffee",
    "Ginger Milk Tea",
    "Ice Cream Green Tea",
    "Coffee Milk Tea",
    "Hokkaido Pearl Milk Tea ( Caramel Toffee )",
    "Okinawa Pearl Milk Tea ( Roasted Brown Sugar )",
    "Taro Pearl Milk Tea",
    "Mango Green Milk Tea",
    "QQ Happy Family Milk Tea",
    "Matcha Red Bean Milk Tea",
    "Oreo Ice Blended",
    "Taro Ice Blended",
    "Milk Tea Ice Blended",
    "Matcha Red Bean",
    "Coffee Ice Blended",
    "Mango Ice Blended",
    "Strawberry Ice Blended"]

    const toppings = [
        "boba",
        "mini boba",
        "pudding",
        "aloe vera",
        "red bean",
        "aiyu jelly",
        "herb jelly",
        "lychee jelly",
        "ice cream"
    ]