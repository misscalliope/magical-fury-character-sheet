let diceTable = [
    [0],
    [0, 11, 12, 13, 14, 15, 16],
    [0, 21, 22, 23, 24, 25, 26],
    [0, 31, 32, 33, 34, 35, 36],
    [0, 41, 42, 43, 44, 45, 46],
    [0, 51, 52, 53, 54, 55, 56],
    [0, 61, 62, 63, 64, 65, 66]
    ];

let mundaneNameTable = [
    [0],
    [0, "Akiko", "Alexis", "Alice", "Ashley", "Catherine", "Chloe"],
    [0, "Emily", "Evangeline", "Heather", "Hikaru", "Ichigo", "Janice"],
    [0, "Leah", "Lillian", "Makoto", "Mami", "Megan", "Momo"],
    [0, "Nagisa", "Nancy", "Rina", "Ririka", "Rose", "Sae"],
    [0, "Sakura", "Samantha", "Setsuna", "Sumire", "Teresa", "Vicki"],
    [0, "Violet", "Wendy", "Yui", "Yuna", "Zakuro", "Zoe"]
];

let mundaneLastNameTable = [
    [0],
    [0, "Aizawa", "Akatsusumi", "Amano", "Aoyama", "Brennan", "Brooker"],
    [0, "Cameron", "Chambers", "Conway", "Frost", "Fujiwara", "Gibson"],
    [0, "Gray", "Hanazono", "Haneoka", "Hawkins", "Hiiragi", "Kagurazaka"],
    [0, "Kanzaki", "Kasuga", "Kawai", "Kinomoto", "Lawrence", "Martin"],
    [0, "Matsubara", "McMillan", "Midorikawa", "Momomiya", "Price", "Quinn"],
    [0, "Rodriguez", "Sawanoguchi", "Shirayuki", "Smith", "Stephenson", "Watanabe"]
];

let meaningTable = [
    [0],
    [0, "A heavy burden", "A subtler kind of strength", "Always being judged", "Bearing the trouble of others", "Being adaptable to any situation", "Being adorable"],
    [0, "Being at the mercy of others", "Being awesome", "Being beautiful", "Being ignored", "Being talked over", "Being the face of the future"],
    [0, "Being underestimated", "Being valued less", "Being vulnerable", "Being weaker than others", "Carrying on the family line", "Coming apart at the seams"],
    [0, "Dealing with lots of expectations", "Doing all the real work", "Getting married and having kids", "Getting to wear cute clothes", "Having a unique voice", "Having amazing potential"],
    [0, "Having lots of responsibilities", "Having power over others", "Having to look beautiful", "Having to work harder", "It doesn't define me", "Living up to my mother's legacy"],
    [0, "No one cares about me", "No one understands me", "People don't listen to me", "Sacrificing for others", "Taking care of others", "The worst possible fate"]
];

let afraidTable = [
    [0],
    [0, "Accidents", "Being abandoned", "Being attacked", "Being forgotten", "Being tied down", "Betrayal"],
    [0, "Blood", "Bugs", "Bullying", "Clowns", "Death", "Dogs"],
    [0, "Enclosed spaces", "Failure", "Fire", "Germs", "Getting lost", "Ghosts"],
    [0, "Growing old", "Heights", "Loneliness", "Loss", "Motherhood", "My father"],
    [0, "Needles", "Police", "Public speaking", "Snakes", "Social rejection", "Spiders"],
    [0, "Terrorism", "The dark", "The future", "Thunder", "Violence", "War"]
];

let wishTable = [
    [0],
    [0, "For freedom to do what I want", "For my father to be successful", "For my friend to be alive again", "For my friend to smile again", "For my imaginary lover to be real", "For my mom to be there for me"],
    [0, "For my mother to be well again", "For the pain to go away", "For the world to end", "For world peace", "To be beautiful", "To be healthy again"],
    [0, "To be loved by everyone", "To be my old self again", "To be popular", "To be remembered for all time", "To be rich and famous", "To be safe"],
    [0, "To be stronger", "To be the greatest singer in the world", "To become super smart", "To end everyone's suffering", "To find my friend who went missing", "To find my sister"],
    [0, "To fix my mistakes", "To fix the injustices of the world", "To fix what's wrong with me", "To forget the past", "To get into a good college", "To go back in time and fix things"],
    [0, "To have my family back", "To leave this terrible world behind", "To live forever", "To live in luxury", "To not be judged by my family's actions", "To undo my mistakes"]
];

let changesTable = [
    [0],
    [0, "Became athletic", "Became delicate", "Became more muscular", "Became older", "Became shorter", "Became sickly"],
    [0, "Became taller", "Bigger eyes", "Became younger", "Bigger eyes", "Birthmark appeared/disappeared", "Clearer skin"],
    [0, "Darker skin", "Different eye color", "Different hair color", "Different hairstyle", "Dyed hair", "Freckles appeared/disappeared"],
    [0, "Gained weight", "Heterochromia", "Less prominent nose", "Lighter skin", "Longer fingernails", "Longer hair"],
    [0, "More angular facial structures", "More prominent nose", "Outlandish hairstyle", "Scar appeared/disappeared", "Shorter hair", "Softer facial structure"],
    [0, "Started walking with a limp", "Tattoos appeared/disappeared", "Transformed into a girl", "Vision got worse", "Vision improved", "You now look like a different person"]
];

let colorTable = [
    [0],
    [0, "Red", "Red", "Orange", "Orange", "Yellow", "Yellow"],
    [0, "Green", "Green", "Blue", "Blue", "Indigo", "Indigo"],
    [0, "Violet", "Violet", "Pink", "Pink", "Brown", "Brown"],
    [0, "Gray", "Gray", "White", "White", "Black", "Black"],
    [0, "Pearl", "Pearl", "Gold", "Gold", "Silver", "Silver"],
    [0, "Bronze", "Bronze", "Iridescent", "Iridescent", "Rainbow", "Rainbow"]
];

let themeTable = [
    [0],
    [0, "Animals", "Blood", "Butterflies", "Chains", "Dreams", "Earth"],
    [0, "Fate", "Fear", "Feathers", "Fire", "Flowers", "Force"],
    [0, "Gold", "Gravity", "Hate", "Healing", "Ice", "Leaves"],
    [0, "Light", "Lightning", "Love", "Magnetism", "Metal", "Moon"],
    [0, "Nothingness", "Rainbows", "Ribbons", "Sadness", "Shadow", "Stars"],
    [0, "Sun", "Swords", "Time", "Water", "Wind", "Wood"]
];

let magicalNameTable = [
    [0],
    [0, "Aeon", "Blaze", "Chaos", "Cosmic", "Divine", "Dream"],
    [0, "Earth", "Eden", "Exalted", "Fancy", "Flame", "Flower"],
    [0, "Fortune", "Lovely", "Luminous", "Lunar", "Mystical", "Magical"],
    [0, "Miracle", "Phantom", "Pretty", "Revolution", "Shadow", "Shining"],
    [0, "Smile", "Solar", "Star", "Stardust", "Sugar", "Time"],
    [0, "Trinity", "Twilight", "Ultimate", "Universal", "Void", "Wind"]
];

let magicalSecondNameTable = [
    [0],
    [0, "Acolyte", "Angel", "Captor", "Champion", "Corrector", "Crusader"],
    [0, "Cure", "Diva", "Doll", "Dragoon", "Empress", "Fairy"],
    [0, "Flame", "Girl", "Goddess", "Guardian", "Harmony", "Healer"],
    [0, "Huntress", "Idol", "Knight", "Lady", "Legend", "Maiden"],
    [0, "Muse", "Nurse", "Oracle", "Paladin", "Priestess", "Princess"],
    [0, "Prophet", "Queen", "Savior", "Sorceress", "Valkyrie", "Witch"]
];

let magicalThirdNameTable = [
    [0],
    [0, "Andromeda", "Arjuna", "Artemis", "Astraia", "Atalanta", "Athena"],
    [0, "Aura", "Aurora", "Ceres", "Circe", "Concordia", "Diana"],
    [0, "Erica", "Eris", "Fortuna", "Galatea", "Galaxia", "Harmonia"],
    [0, "Io", "Ishtar", "Isis", "Kali", "Lala", "Leona"],
    [0, "Lilith", "Luna", "Miyuki", "Morrigan", "Nanoha", "Nemesis"],
    [0, "Ophelia", "Selene", "Umbra", "Venus", "Vesta", "Zephryna"]
];

let unnaturalFeaturesTable = [
    [0],
    [0, ["Bionic Limbs","Your arms and legs are apparently artificial on the inside, because when you exert yourself they make a motor whining nose"], 
        ["Blood Smell", "Your body smells of fresh blood; it is a coppery, unnerving smell"],
        ["Bloody Eyes", "Your eyes take on a creepy blood-red color"], 
        ["Camera Eyes", "It's subtle, but your eyes are, in fact, cameras"], 
        ["Candy Scent", "Your body smells strongly of sweet candy"], 
        ["Cat Eyes", "Your eyes have slit-like irises, not unlike a cat's eyes"]
    ],
    [0, ["Catgirl", "You have the pointed ears and long tail of a house cat"], 
        ["Cold-Blooded", "You become cold-blooded; Your skin feels unnaturally cold at times, and you become very sluggish when it's cold"], 
        ["Compartment", "There is a compartment with a simple door on your back or stomach; it seems to have random objects in it when opened"], 
        ["Crystal Rash", "Translucent crystals start growing out of your skin; They can easily break off"], 
        ["Dead Eye", "One of your eyes becomes milky-white and sightless"], 
        ["Discolored Skin", "Your body takes on a strange color"]
    ], 
    [0, ["Fast-Growing Hair", "Your hair grows unnaturally fast, such that you would need a haircut every few days just to have it be remotely manageable"], 
        ["Forehead Gem", "There is a colorful gem planted in your forehead"], 
        ["Glittery", "Your skin is faintly glittery, like some kind of makeup"], 
        ["Heterochromia", "One of your eyes is red, and the other is blue (or some other combination); both are vivid, unnatural colors"], 
        ["High Density", "Your body becomes exceptionally dense, so that although you're the same size, you weigh several times more"], 
        ["Magical Reflection", "Your reflection in any given surface has a mind of it's own"]
    ],
    [0, ["Magnetic", "Your body becomes mildly magnetic, so that small metal objects are attracted to you"], 
        ["Maw", "Somewhere on your body is a large mouth with many sharp teeth; you can conceal it with normal clothing, but sometimes it gets hungry and restless"], 
        ["Moe Girl", "Your proportions are a little too perfect, your skin looks photoshopped, your eyes become just a little too large, and your hair looks like a cosplay wig"], 
        ["Pallor", "Your skin becomes innervingly pale, and your eyes become sunken"], 
        ["Prehensile Hair", "Your hair becomes prehensile, and will move on its own when you are emotional"], 
        ["Prismatic Hair", "Your hair is made of transparent strands that display countless different colors when they catch the light"]
    ],
    [0, ["Rubbery Limbs", "Your limbs have a rubbery quality, as though your bones are made of rubber. It looks freaky if you're not careful how you move"], 
        ["Scarred", "You acquire a rather nasty-looking scar somewhere on your body"], 
        ["Scroll Body", "Your body becomes covered in magical writing"], 
        ["Second Mouth", "You have a second mouth on the side of your head or somewhere else on your body"], 
        ["Silly Voice", "Your voice sounds silly and high-pitched"], 
        ["Smell of Sulfer", "There is always a smell of sulfur around you"]
    ],
    [0, ["Stigmata", "You have one or more wounds that never quite seem to heal"], 
        ["Stretchy Neck", "Your neck is exceptionally stretchy; although you can look normal if you're careful, your neck can stretch out to six feet or so"], 
        ["Third Eye", "A third eye opens up on your forehead"], 
        ["Vivid Eyes", "Your eyes take on an unnaturally vibrant hue"], 
        ["White Eyes", "Your eyes are all white, with no irises or pupils"], 
        ["Wings", "You sprout a pair of wings, large enough to be conspicuous but not large enough to fly"]
    ]
];

let environmentChangesTable = [
    [0],
    [0, "A door doesn't take someone to the right place", "A fruit tree starts sprouting and growing unnaturally fast", "A sudden gust of wind fills the air with slips of paper", "A wind comes up carrying choking ash", "All sound magically ceases", "Animals speak nonsense words"],
    [0, "Birds fly backwards", "Bugs crawl out of cracks in the walls", "Clocks start changing times at random", "Drawings in the area become animated", "Droplets of water float mid-air", "Electronics play strange, indecipherable voices"],
    [0, "Every alarm goes off at once", "Every phone in the area receives wrong number calls", "Gravity is abruptly doubled around you", "It suddenly becomes extremely cold in the area", "It suddenly becomes very hot in the area", "Magical writing temporarily appears on the walls"],
    [0, "Mirrors don't reflect people", "Objects float as though controlled by unseen hands", "Objects wink out of existence", "Patterns on the floor contort and writhe", "Raindrops rise up from the ground", "Random arrangements of leaves, mildew, etc. seems to be faces"],
    [0, "Reflective surfaces have a short time delay", "Small candies rain from the sky", "Small objects start hopping around as though alive", "The area becomes eerily quiet as background noises fade away", "The walls flicker like a software glitch", "The weather changes very abruptly"],
    [0, "There is a rain of blood", "There is a small pocket of low gravity", "There is a small pocket of zero gravity", "There is a smell of sulfer", "There is an oddly sweet smell in the air", "There is an unnatural snowfall"]
];

let pastLifeActionsTable = [
    [0],
    [0, "Something incongruous makes you laugh out loud", "Something seemingly insignificant makes you weep uncontrollably", "The moon in the sky horrifies you for some reason", "The sight of someone makes you rush up and tearfully hug them", "You beg forgiveness for a sin from a past life", "You break something small and fragile"],
    [0, "You change your clothes, donning a rather outrageous and nonsensical outfit", "You claim something as a crown and don it", "You climb up somewhere particularly high", "You conduct a strange ritual", "You decide to go hunting for food", "You deface something"],
    [0, "You find modern technology baffling and laughable", "You give someone a lingering hug", "You have a severe panic attack and can barely move", "You insistently sing a song in an unknown language", "You interrogate your friends about the details of everyday things", "You lie down somewhere and refuse to move"],
    [0, "You make a marriage proposal", "You offer someone food and won't take no for an answer", "You react with abject horror the the presence of things like cars", "You seek out a particular food or drug to indulge in", "You slap someone", "You spew what seems to be an equation that will be a major breakthrough in physics"],
    [0, "You start an elaborate dance and try to get someone to join in", "You start frantically painting something", "You start frantically writing in magical runes", "You start playing a traditional game, and show an uncharactertistic talent for it", "You steal something small and give it to someone", "You take on an arrogant attitude, and get mad when people don't obey you without question"],
    [0, "You threaten to kill somone", "You throw a temper tantrum over something seemingly trivial", "You try to find somewhere to hide", "You try to steal something valuable", "You wander off in a daze", "You worship an object"]
];