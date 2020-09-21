//JavaScript PlanetGen



//output = GenPlanet();


function PD(PlanetNumber,PlanetDescription,PlanetName,Government) {
    this.PlanetNumber=PlanetNumber;
    this.PlanetDescription=PlanetDescription;
    this.PlanetName=PlanetName;
    this.Government=Government;
}

var PlanetData = new PD;

var NumberOfPlanets = 10;

output = "";
for (let x = 0; x < NumberOfPlanets; x++)
{
GenPlanet(x);
output = output +
"Planet number: " + PlanetData.PlanetNumber + "<br>" +
"Planet name: " + PlanetData.PlanetName + "<br>" +
"Governent Type: " +PlanetData.Government + "<br>" +
"Planet Description: "+ PlanetData.PlanetDescription + "<br>"
+ "<br>"
;
}

document.write(output);

function GenPlanet(PN) {
  RNDCurrent = PN;
  var Starts = ["R", "B", "Le", "Sn", "Cr", "Pl", "L", "K", "Qu", "Ap"]
  var Middles = ["ara", "er", "oh", "ee", "al", "am", "ra", "o", "e", "apa"]
  var Ends = ["ard", "et", "eck", "als", "ck", "la", "re", "t", "d", "do"];
  var OPara = ["The planet ", "The delightful destination ", "A popular tourist spot, ", "A wretched hive of scum and villainy, ", "A planet long thought lost, ", "The often overlooked "];
  var SFamed = [" is famed for its ", " is well known for its ", " is sometimes avoided due to its reputation for ", " is plagued by "];
  var Adjective = ["incredible ", "jumping ", "edible ", "incredulous ", "fashionable ", "dancing ", "sporty ", "mostly harmless ", "death-defying ", "musical ", "theatrical ", "electrically operated "];
  var NotorietyObject = ["lizards", "liberals", "politicians", "guitarists", "robots", "crab people", "astute intellectuals", "robotic assassins", "humanoid felines", "ZX81 enthusiasts"];
  var GovernmentsAdj = ["Feudal", "Anarchic", "Liberal", "Social", "Mostly Unfair", "Republican"];
  var GovernmentType = ["Democracy", "Autocracy", "Technocracy", "Despotism", "Republic"];
  var AltEnding = [" of death", " of moon cheese", " of legend", " of joyfulness"];

  var PNStart = PNMiddle = PNEnd = "";
  PlanetData.PlanetName = Starts[GenRND(Starts.length)] + Middles[GenRND(Middles.length)] + Ends[GenRND(Ends.length)];
  var FirstHalf = OPara[GenRND(OPara.length)] + PlanetData.PlanetName + SFamed[GenRND(SFamed.length)] + Adjective[GenRND(Adjective.length)] + NotorietyObject[GenRND(NotorietyObject.length)];
  PlanetData.PlanetNumber = PN;
  var SecondHalf = "";
  if (GenRND(3) == 1) {
    SecondHalf = AltEnding[GenRND(AltEnding.length)];
  } else {
    SecondHalf = "";
  }
  PlanetData.PlanetDescription = FirstHalf + SecondHalf + ".";
  PlanetData.Government = GovernmentsAdj[GenRND(GovernmentsAdj.length)] + " " + GovernmentType[GenRND(GovernmentType.length)];


}

function GenRND(size) {
  let Modulus = 2147483648;
  let Mult = 214013;
  let Addition = 2531011;
  let Divisor = 65536;
  let newNumber = (Mult * RNDCurrent + Addition) % Modulus;
  newNumber = newNumber / Divisor;
  newNumber = newNumber % size;
  RNDCurrent = newNumber;
  RNDCurrent = newNumber;
  return (Math.floor(RNDCurrent % size));
}
