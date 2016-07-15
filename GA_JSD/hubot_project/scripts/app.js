module.exports = function(robot) {

    robot.hear(/hello|hi/i, function(res) {
        return res.send("Hello, World!");
    });

    robot.hear(/cat/i, function(res){
        return res.send("meow!");
    });

    robot.respond(/how are you?/i, function(res){
      return res.send("I'm feeling great!");
    });

    robot.respond(/my name is (.*)/i, function(res){
      var name = res.match[1];
      //console.log(name);
      return res.reply("Hi " + name + "! nice to meet you");
    });

    robot.hear(/add(.*) and (.*)/i, function(res){
      var x = parseInt(res.match[1]);
      var y = parseInt(res.match[2]);
      var sum = x + y;

      return res.send(x + " + " + y + " = " + sum);
    });

    //own command #1: cus bot
    robot.hear(/fuck|shit/i, function(res){
      return res.reply("No cursing on this Slack team please");
    });

    //own command #2: poke bot
    robot.hear(/pokemon/i, function(res){
      return res.reply("Please hold this conversation for during lunch or after work hours and move it to the random channel");
    });

    //own command #3: random number bot
    robot.respond(/random number between (.*) and (.*)/i, function(res){
      var low = parseInt(res.match[1]);
      var high = parseInt(res.match[2]);
      var min = high - low + 1;
      var random = Math.floor(Math.random()* min) + low;
      
        if (low >= high){
          return res.reply("The first number must be smaller than the second number");
        } 
        else {
          return res.reply(random);
        }
    });
    // Own #4: gif of ..
    /*
    robot.hear(/gif of (.*)/i, function(res){
      var gif = res.match[1];
        robot.http("https://api.giphy.com/v1/gifs/search?q="+gif+"&api_key=dc6zaTOxFJmzC");
        .get(request, function(response){
       var result = response.data[0].images.fixed_width.url;
       return result;
    });
    */
}