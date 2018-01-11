function theBeatlesPlay(musicians, instruments) {
  var Band = [];
  for ( var i=0; i<musicians.length; i++) {
    Band.push(musicians[i] + " plays " + instruments[i])
  }
  return Band
}

function johnLennonFacts(facts) {
  var newfacts = [];
  var i =0;
  while (i < facts.length) {
    newfacts.push(facts[i] + "!!!");
    i++;
    }
  return newfacts
}

function iLoveTheBeatles(n) {
  var array = [];
  
  do {
    array.push("I love the Beatles!")
  } while ( array.length > 0 && maybeTrue());
  return array
}