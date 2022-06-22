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
     console.log(selectRandom(line1));
     console.log(selectRandom(line2));
     console.log(selectRandom(line3));
};
haikuGenerator();
