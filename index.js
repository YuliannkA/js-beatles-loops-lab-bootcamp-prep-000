function theBeatlesPlay(musicians, instruments) {
  var Band = [];
  for ( var i=0; i<musicians.length; i++) {
    Band.push(musicians[i] + " plays " + instruments[i])
  }
  return Band
}

function johnLennonFacts(facts) {
  var newfacts = [];
  while (facts.length > 0) {
    for (var i=0; i<facts.length; i++) {
      newfacts.push(facts[i] + "!!!");
    }
  }
  return newfacts
}