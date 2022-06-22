const line1 = ["The sun rises east,", "Gold tunnel of light,", "Bucket list dreaming,", "Neckline drips desire,", "An ocean voyage,", "Summer here again,"];
const line2 = ["The morning lilies blossom,", "Crimson leaves clinging to trees,", "All the Mountains I will climb,", "Inner furnace rages heat,", "As waves break over the bow,", "Music plays sweetly drifting,"];
const line3 = ["Capturing the warmth.", "Leaves whispering by.", "And the things I will see.", "Summer passion burns.", "The sea welcomes me.", "And life is renewed."];

const selectRandom = arr =>{
    //Returns a random line from an array
   let randLine = arr[Math.floor(Math.random() * arr.length)];
   return randLine;
};

const haikuGenerator = () =>{
    //Uses selectRandom to log a haiku.
  
     document.getElementById('line-1').innerHTML = selectRandom(line1);
     document.getElementById('line-2').innerHTML = selectRandom(line2);
     document.getElementById('line-3').innerHTML = selectRandom(line3);
};

haikuGenerator();

const newRandomHaiku = document.getElementById('random');

newRandomHaiku.onclick = haikuGenerator;
