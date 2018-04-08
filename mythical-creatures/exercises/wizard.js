function Wizard(args){
  this.name = args.name;
  this.bearded = true;
  this.isRested = true;
  if (args.bearded == false){
    this.bearded = false;
  }
  this.casts = 0;
}

Wizard.prototype.cast = function(){
  this.casts++;
  if (this.casts <3){
    return "MAGIC BULLET";
  } else {
    this.isRested = false;
    return "I SHALL NOT CAST!";
  }

}

Wizard.prototype.incantation = function(spell){
  return spell.toUpperCase();
}


module.exports = Wizard;
