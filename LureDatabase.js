
/*
  FISHING ASSISTANT - LURE KNOWLEDGE BASE
  Version: 1.0

  Starting focus:
  - Largemouth bass
  - Lakes, ponds, and reservoirs
  - Georgia and the southeastern United States

  IMPORTANT:
  These are practical fishing guidelines, not guaranteed
  catch predictions. The recommendation engine should
  consider multiple conditions together.

  Do not treat lessSuitable situations as absolute exclusions.
*/

window.lureDatabase = [

  // ==================================================
  // MOVING BAITS
  // ==================================================

  {
    id: "spinnerbait",
    name: "Spinnerbait",
    category: "moving",
    presentation: "Steady retrieve, slow rolling, or changing retrieve speed",

    designFacts: [
      "Uses rotating blades to create flash and vibration.",
      "Usually has a skirt and a single main hook.",
      "Can be retrieved at different depths."
    ],

    helpfulSituations: [
      "Bass are actively feeding.",
      "Wind is creating movement on the water.",
      "Bass are around shallow or submerged cover.",
      "Water visibility makes vibration and flash useful."
    ],

    usefulCover: [
      "grass edges",
      "wood",
      "brush",
      "docks",
      "open water"
    ],

    lessSuitableSituations: [
      "Bass are holding deep and the selected spinnerbait cannot reach them.",
      "Fish respond better to a very slow or subtle presentation."
    ],

    depthGuidance:
      "Adjust blade style, lure weight, and retrieve speed to reach the target depth.",

    setup:
      "Spinnerbait with willow, Colorado, or combination blades.",

    colorGuidance:
      "Start by matching local forage. White and shad patterns are common baitfish choices; brighter or darker contrasts may help when visibility is reduced.",

    explanation:
      "Rotating blades produce flash and vibration while the lure moves through the water.",

    confidence: "high",
    sourceNotes: ["Georgia DNR", "Bass fishing technique references"]
  },

  {
    id: "chatterbait",
    name: "Chatterbait",
    category: "moving",
    presentation: "Steady retrieve with a vibrating blade",

    designFacts: [
      "A metal blade attached to the front creates vibration.",
      "Usually includes a skirt and often a soft plastic trailer.",
      "Can be fished at different depths by changing retrieve speed and weight."
    ],

    helpfulSituations: [
      "Bass are feeding around vegetation.",
      "Fish are using grass edges or shallow cover.",
      "A vibrating moving bait is appropriate.",
      "Bass are feeding on baitfish."
    ],

    usefulCover: [
      "grass",
      "vegetation edges",
      "shallow wood",
      "open water"
    ],

    lessSuitableSituations: [
      "The fish require a very subtle presentation.",
      "The cover is so dense that the blade and hooks repeatedly collect vegetation."
    ],

    depthGuidance:
      "Control depth with lure weight, retrieve speed, and rod position.",

    setup:
      "Bladed jig with a trailer selected to match the desired profile and action.",

    colorGuidance:
      "Match local forage such as shad or bluegill. Adjust contrast for water visibility.",

    explanation:
      "The blade creates strong vibration and movement, making this useful for covering water around vegetation and other cover.",

    confidence: "high",
    sourceNotes: ["Bass fishing technique references"]
  },

  {
    id: "squarebill",
    name: "Squarebill Crankbait",
    category: "moving",
    presentation: "Steady cranking with occasional contact and deflection",

    designFacts: [
      "Has a relatively short, square-shaped diving bill.",
      "The bill helps the lure deflect off objects.",
      "Different models reach different depths."
    ],

    helpfulSituations: [
      "Bass are holding around shallow cover.",
      "The lure can reach the depth of the cover.",
      "A moving reaction bait is appropriate."
    ],

    usefulCover: [
      "shallow wood",
      "stumps",
      "rock",
      "riprap",
      "shallow hard cover"
    ],

    lessSuitableSituations: [
      "Bass are much deeper than the lure can reach.",
      "Dense vegetation repeatedly fouls the hooks."
    ],

    depthGuidance:
      "Choose a model whose running depth matches the target cover.",

    setup:
      "Squarebill crankbait with hooks appropriate for its size.",

    colorGuidance:
      "Use shad or other baitfish patterns when appropriate. Crawfish and bluegill patterns can match those forage types.",

    explanation:
      "The bill helps the crankbait deflect off shallow objects, allowing it to search cover and trigger reaction strikes.",

    confidence: "high",
    sourceNotes: ["Bass fishing crankbait technique references"]
  },

  {
    id: "lipless_crankbait",
    name: "Lipless Crankbait",
    category: "moving",
    presentation: "Steady retrieve, yo-yo retrieve, or lift and fall",

    designFacts: [
      "Does not have a projecting diving bill.",
      "Creates vibration as it moves.",
      "Can sink to different depths before retrieval."
    ],

    helpfulSituations: [
      "Bass are using broad flats.",
      "Fish are around submerged grass.",
      "Baitfish are present.",
      "A fast search presentation is useful."
    ],

    usefulCover: [
      "grass edges",
      "flats",
      "open water",
      "submerged vegetation"
    ],

    lessSuitableSituations: [
      "Heavy wood and brush create repeated snags.",
      "Bass are holding in a place that requires a very slow presentation."
    ],

    depthGuidance:
      "Allow the lure to sink before retrieving. Change the sink time and speed to target different depths.",

    setup:
      "Sinking lipless vibrating crankbait.",

    colorGuidance:
      "Match local baitfish or crawfish forage when appropriate.",

    explanation:
      "Its vibration and sinking design allow anglers to search broad areas and fish different depths.",

    confidence: "high",
    sourceNotes: ["Bass fishing crankbait technique references"]
  },

  {
    id: "jerkbait",
    name: "Suspending Jerkbait",
    category: "moving",
    presentation: "Twitch, twitch, pause",

    designFacts: [
      "A hard bait designed to dart when moved.",
      "Suspending models are designed to remain near their running depth during pauses.",
      "Actual suspension depends on water temperature, line, and lure setup."
    ],

    helpfulSituations: [
      "Bass are following or feeding on baitfish.",
      "Fish are suspended at a reachable depth.",
      "A pause between movements may help keep the lure near fish.",
      "Water visibility allows fish to locate the lure."
    ],

    usefulCover: [
      "points",
      "open water",
      "rocky banks",
      "submerged structure"
    ],

    lessSuitableSituations: [
      "Heavy vegetation repeatedly catches the hooks.",
      "Fish are buried in thick cover.",
      "Visibility is extremely limited and fish cannot easily locate the bait."
    ],

    depthGuidance:
      "Choose a model that reaches the depth where bass are holding.",

    setup:
      "Suspending hard jerkbait.",

    colorGuidance:
      "Natural baitfish patterns are a useful starting point when bass are feeding on shad or similar forage.",

    explanation:
      "The darting movement imitates a fleeing baitfish, while pauses keep the lure near fish.",

    confidence: "high",
    sourceNotes: ["Bass fishing jerkbait technique references"]
  },

  {
    id: "topwater_walking",
    name: "Topwater Walking Bait",
    category: "moving",
    presentation: "Side-to-side surface retrieve",

    designFacts: [
      "Moves across the water surface.",
      "Creates surface disturbance.",
      "Does not fish below the surface like a diving lure."
    ],

    helpfulSituations: [
      "Bass are feeding near the surface.",
      "Baitfish are visible near the surface.",
      "Bass are striking at surface prey.",
      "Low light or surface activity makes a topwater presentation worth trying."
    ],

    usefulCover: [
      "open water",
      "points",
      "shallow flats",
      "open pockets near vegetation"
    ],

    lessSuitableSituations: [
      "Bass are consistently holding deep.",
      "The surface is heavily obstructed by vegetation.",
      "Fish are not responding to surface presentations."
    ],

    depthGuidance:
      "Surface presentation only. Bass may rise from below to strike.",

    setup:
      "Walking-style topwater hard bait.",

    colorGuidance:
      "Choose a visible silhouette and consider local baitfish.",

    explanation:
      "The side-to-side movement imitates prey moving across the surface.",

    confidence: "high",
    sourceNotes: ["Bass fishing topwater technique references"]
  },

  {
    id: "soft_swimbait",
    name: "Soft Swimbait",
    category: "moving",
    presentation: "Steady swimming retrieve",

    designFacts: [
      "Usually has a paddle tail that moves during retrieval.",
      "Can be rigged on a jig head or weedless hook.",
      "Weight and retrieve speed control depth."
    ],

    helpfulSituations: [
      "Bass are feeding on baitfish.",
      "Bass are chasing or following prey.",
      "Fish are holding at a depth the swimbait can reach.",
      "A natural swimming presentation is appropriate."
    ],

    usefulCover: [
      "open water",
      "grass edges",
      "points",
      "submerged structure"
    ],

    lessSuitableSituations: [
      "The selected hook or rig collects too much vegetation.",
      "Bass require a stationary or very slow presentation."
    ],

    depthGuidance:
      "Select jig-head weight and retrieve speed to reach the fish.",

    setup:
      "Paddle-tail soft plastic on a suitable jig head or weedless hook.",

    colorGuidance:
      "Match the size and appearance of local forage where practical.",

    explanation:
      "The paddle tail creates swimming movement that imitates a baitfish.",

    confidence: "high",
    sourceNotes: ["Bass fishing swimbait technique references"]
  },

  {
    id: "swim_jig",
    name: "Swim Jig",
    category: "moving",
    presentation: "Steady swimming retrieve",

    designFacts: [
      "Uses a skirted jig designed for swimming.",
      "Often includes a weedguard.",
      "Can be paired with a soft plastic trailer."
    ],

    helpfulSituations: [
      "Bass are using vegetation.",
      "Bass are around shallow cover.",
      "A skirted moving presentation is useful.",
      "Bluegill or baitfish are available as forage."
    ],

    usefulCover: [
      "grass",
      "vegetation edges",
      "wood",
      "shallow cover"
    ],

    lessSuitableSituations: [
      "Bass are holding deep and the jig cannot reach them.",
      "A stationary bottom presentation is more appropriate."
    ],

    depthGuidance:
      "Use jig weight and retrieve speed to control swimming depth.",

    setup:
      "Swim jig with a soft plastic trailer.",

    colorGuidance:
      "Consider bluegill or shad patterns according to local forage.",

    explanation:
      "A skirted jig swims through cover and provides a moving presentation with a larger profile than many finesse baits.",

    confidence: "high",
    sourceNotes: ["FishUSA bass jig guide"]
  },

  {
    id: "deep_crankbait",
    name: "Deep-Diving Crankbait",
    category: "moving",
    presentation: "Cranking at depth, often with bottom contact",

    designFacts: [
      "Has a larger diving bill than many shallow crankbaits.",
      "Different models reach different maximum depths.",
      "Can deflect off suitable bottom structure."
    ],

    helpfulSituations: [
      "Bass are holding around deeper structure.",
      "The lure can reach the fish.",
      "Rock, gravel, or other suitable hard cover is present.",
      "A moving search bait is appropriate."
    ],

    usefulCover: [
      "offshore rock",
      "points",
      "humps",
      "ledges",
      "submerged structure"
    ],

    lessSuitableSituations: [
      "The fish are shallower than the lure's useful running range.",
      "Thick vegetation repeatedly catches the hooks."
    ],

    depthGuidance:
      "Match the crankbait's running depth to the target area. Running depth varies by model and line setup.",

    setup:
      "Deep-diving crankbait.",

    colorGuidance:
      "Match local forage and visibility. Shad and crawfish patterns are common choices.",

    explanation:
      "The diving bill allows the lure to reach deeper structure while covering water.",

    confidence: "high",
    sourceNotes: ["Bass fishing crankbait technique references"]
  },

  {
    id: "shallow_crankbait",
    name: "Shallow Crankbait",
    category: "moving",
    presentation: "Steady shallow retrieve",

    designFacts: [
      "Designed to run relatively close to the surface.",
      "Running depth depends on the model.",
      "Can be used around shallow hard cover."
    ],

    helpfulSituations: [
      "Bass are using shallow water.",
      "Shallow rock or wood is present.",
      "Fish are feeding actively enough to respond to a moving bait."
    ],

    usefulCover: [
      "shallow rock",
      "wood",
      "stumps",
      "riprap"
    ],

    lessSuitableSituations: [
      "Bass are holding well below the lure's running depth.",
      "Dense vegetation repeatedly fouls the hooks."
    ],

    depthGuidance:
      "Choose a model that reaches the depth of the shallow cover.",

    setup:
      "Shallow-running crankbait.",

    colorGuidance:
      "Match local baitfish, bluegill, or crawfish forage.",

    explanation:
      "A shallow crankbait covers banks and shallow structure with a moving presentation.",

    confidence: "high",
    sourceNotes: ["Bass fishing crankbait technique references"]
  },

  // ==================================================
  // FINESSE AND SOFT-PLASTIC PRESENTATIONS
  // ==================================================

  {
    id: "texas_rig",
    name: "Texas-Rigged Worm",
    category: "finesse",
    presentation: "Falling, hopping, dragging, or swimming",

    designFacts: [
      "Uses an offset or worm hook.",
      "The hook point is often buried or lightly tucked into the plastic.",
      "A bullet weight may be used above the hook."
    ],

    helpfulSituations: [
      "Fishing around vegetation or wood.",
      "A weedless presentation is useful.",
      "Bass are near specific cover.",
      "The bait needs to reach the bottom."
    ],

    usefulCover: [
      "grass",
      "brush",
      "wood",
      "docks",
      "laydowns",
      "vegetation"
    ],

    lessSuitableSituations: [
      "Bass are actively chasing baitfish far from the bottom and a moving bait is more appropriate."
    ],

    depthGuidance:
      "Adjust sinker weight to reach the target depth while maintaining useful bait action.",

    setup:
      "Soft plastic worm, offset hook, and optional bullet weight.",

    colorGuidance:
      "Start with natural colors that resemble local forage. Adjust contrast based on water visibility.",

    explanation:
      "The hook arrangement helps the bait move through cover with fewer snags than many exposed-hook rigs.",

    confidence: "high",
    sourceNotes: ["Bass rigging references"]
  },

  {
    id: "weightless_texas",
    name: "Weightless Texas Rig",
    category: "finesse",
    presentation: "Slow, natural sinking fall",

    designFacts: [
      "Uses a Texas-style weedless hook arrangement.",
      "Does not use an added sinker.",
      "The bait's own weight controls its fall."
    ],

    helpfulSituations: [
      "Bass are in shallow water.",
      "A slow fall is useful.",
      "Fishing around grass, wood, docks, or shallow cover.",
      "A weedless presentation is needed."
    ],

    usefulCover: [
      "grass",
      "wood",
      "brush",
      "docks",
      "shallow vegetation"
    ],

    lessSuitableSituations: [
      "The bait cannot reach the depth of the fish efficiently.",
      "Wind or current makes it difficult to control the presentation."
    ],

    depthGuidance:
      "Most useful for shallow presentations. Bait size, plastic density, line, and added accessories affect fall speed.",

    setup:
      "Soft plastic worm or stick bait with a Texas-rigged hook and no added sinker.",

    colorGuidance:
      "Match local forage and water visibility.",

    explanation:
      "The unweighted bait falls naturally while the hook arrangement helps reduce snags.",

    confidence: "high",
    sourceNotes: ["Bass rigging references"]
  },

  {
    id: "wacky_rig",
    name: "Wacky Rig",
    category: "finesse",
    presentation: "Horizontal falling presentation",

    designFacts: [
      "The hook passes through the middle of a soft plastic stick bait.",
      "Both ends move during the fall.",
      "Can be fished weightless or with added weight."
    ],

    helpfulSituations: [
      "Bass are around docks or specific shallow targets.",
      "A slow falling presentation is useful.",
      "Bass are pressured or reluctant to chase.",
      "The bait needs to fall naturally beside cover."
    ],

    usefulCover: [
      "docks",
      "laydowns",
      "grass edges",
      "shallow cover",
      "open pockets"
    ],

    lessSuitableSituations: [
      "Heavy cover repeatedly catches the exposed hook.",
      "An unweighted bait cannot reach the fish."
    ],

    depthGuidance:
      "Weightless versions are useful for slower shallow falls. Added weight can help reach deeper fish.",

    setup:
      "Soft plastic stick worm hooked through the middle, often with an O-ring.",

    colorGuidance:
      "Natural worm colors are common starting points. Consider local forage and water visibility.",

    explanation:
      "Both ends of the bait move as it falls, creating a subtle presentation.",

    confidence: "high",
    sourceNotes: ["Bassmaster wacky rig guidance", "Bass rigging references"]
  },

  {
    id: "neko_rig",
    name: "Neko Rig",
    category: "finesse",
    presentation: "Weighted nose-first fall with subtle movement",

    designFacts: [
      "Uses a soft plastic worm or stick bait.",
      "A small nail weight is inserted into one end.",
      "The hook is usually positioned through the bait's body."
    ],

    helpfulSituations: [
      "Bass are near specific targets.",
      "A weighted finesse presentation is useful.",
      "More controlled sinking is needed than a weightless wacky rig provides.",
      "Bass are near hard structure or docks."
    ],

    usefulCover: [
      "rock",
      "docks",
      "wood",
      "specific targets",
      "hard structure"
    ],

    lessSuitableSituations: [
      "Heavy cover repeatedly catches the hook.",
      "A fast moving search bait is more appropriate."
    ],

    depthGuidance:
      "Adjust nail weight to control the fall and reach the target depth.",

    setup:
      "Soft plastic worm, hook, and nail weight inserted into one end.",

    colorGuidance:
      "Natural worm colors are a useful starting point. Match local forage when possible.",

    explanation:
      "The weight changes the bait's fall angle and gives the angler control over its nose-down presentation.",

    confidence: "high",
    sourceNotes: ["Bassmaster finesse guidance", "Bass rigging references"]
  },

  {
    id: "drop_shot",
    name: "Drop Shot",
    category: "finesse",
    presentation: "Bait held above a separate bottom weight",

    designFacts: [
      "The weight is tied below the hook.",
      "The bait is held above the weight.",
      "The distance between the hook and weight can be adjusted."
    ],

    helpfulSituations: [
      "Bass are suspended at a known depth.",
      "Bass are close to the bottom but a bait above the bottom is useful.",
      "Precise depth control is needed.",
      "A subtle presentation is appropriate.",
      "Fishing around docks or isolated structure."
    ],

    usefulCover: [
      "open water",
      "points",
      "docks",
      "submerged structure",
      "grass edges"
    ],

    lessSuitableSituations: [
      "Very thick vegetation or brush repeatedly catches the hook and line.",
      "A weedless presentation through heavy cover is needed."
    ],

    depthGuidance:
      "Adjust the hook-to-weight distance to place the bait at the fish's level. Drop shots can be used in shallow or deep water.",

    setup:
      "Drop-shot hook above a separate sinker, with a soft plastic bait.",

    colorGuidance:
      "Choose bait color based on local forage and visibility rather than depth alone.",

    explanation:
      "Separating the weight from the bait allows the bait to remain above the bottom at a controlled height.",

    confidence: "high",
    sourceNotes: ["Wired2Fish drop-shot guidance", "Bass rigging references"]
  },

  {
    id: "shaky_head",
    name: "Shaky Head",
    category: "finesse",
    presentation: "Slow bottom presentation",

    designFacts: [
      "Uses a weighted jig head and soft plastic worm.",
      "The head keeps the bait near the bottom.",
      "Some heads have screw locks or weedguards."
    ],

    helpfulSituations: [
      "Bass are near the bottom.",
      "A slow worm presentation is useful.",
      "Bass are around docks, rock, or specific targets.",
      "A smaller presentation is appropriate."
    ],

    usefulCover: [
      "rock",
      "points",
      "docks",
      "hard bottom",
      "light wood cover"
    ],

    lessSuitableSituations: [
      "Heavy vegetation repeatedly collects the exposed hook.",
      "Bass are actively chasing baitfish away from the bottom."
    ],

    depthGuidance:
      "Select jig-head weight to maintain bottom contact at the target depth.",

    setup:
      "Shaky-head jig with a straight-tail or other suitable soft plastic worm.",

    colorGuidance:
      "Natural worm colors are useful starting points. Match local forage and visibility.",

    explanation:
      "The jig head keeps a soft plastic worm near the bottom for a controlled presentation.",

    confidence: "high",
    sourceNotes: ["Wired2Fish shaky-head guidance"]
  },

  {
    id: "ned_rig",
    name: "Ned Rig",
    category: "finesse",
    presentation: "Slow bottom contact, dragging, or subtle movement",

    designFacts: [
      "Uses a small mushroom-style jig head.",
      "Usually paired with a short soft plastic bait.",
      "Buoyant baits can stand partly upright on the bottom."
    ],

    helpfulSituations: [
      "Bass respond to a smaller presentation.",
      "Bass are near the bottom.",
      "A subtle presentation is useful.",
      "Fishing relatively open bottom or light cover."
    ],

    usefulCover: [
      "rock",
      "gravel",
      "open bottom",
      "light vegetation"
    ],

    lessSuitableSituations: [
      "Heavy wood or brush repeatedly catches the exposed hook.",
      "Thick vegetation prevents the bait from reaching the bottom."
    ],

    depthGuidance:
      "Use a jig weight that allows the bait to reach and work near the bottom.",

    setup:
      "Small soft plastic bait on a mushroom-style jig head.",

    colorGuidance:
      "Choose a natural or contrasting color based on local forage and visibility.",

    explanation:
      "Its compact profile and subtle action provide a smaller bottom-oriented presentation.",

    confidence: "high",
    sourceNotes: ["Bass fishing finesse technique references"]
  },

  {
    id: "carolina_rig",
    name: "Carolina Rig",
    category: "bottom",
    presentation: "Dragging a bait across the bottom",

    designFacts: [
      "Uses a sliding sinker on the main line.",
      "A swivel separates the sinker from a leader.",
      "The hook and bait trail behind the sinker."
    ],

    helpfulSituations: [
      "Searching broad areas of bottom.",
      "Bass are around points, flats, or offshore structure.",
      "Bass are holding near the bottom.",
      "A bait needs to trail behind a moving sinker."
    ],

    usefulCover: [
      "points",
      "flats",
      "humps",
      "gravel",
      "shell beds",
      "open bottom"
    ],

    lessSuitableSituations: [
      "Dense brush creates repeated snags.",
      "Thick vegetation prevents effective bottom contact.",
      "A small isolated target requires a more precise presentation."
    ],

    depthGuidance:
      "Choose sinker weight for depth, wind, current, and bottom contact. Leader length changes how the bait trails behind the weight.",

    setup:
      "Sliding sinker, bead if desired, swivel, leader, hook, and soft plastic bait.",

    colorGuidance:
      "Match local forage and visibility. Color should not be chosen from depth alone.",

    explanation:
      "The sinker moves along the bottom while the bait follows behind on a separate leader.",

    confidence: "high",
    sourceNotes: ["Bass rigging references"]
  },

  // ==================================================
  // BASS JIGS
  // ==================================================

  {
    id: "flipping_jig",
    name: "Flipping Jig",
    category: "jig",
    presentation: "Accurate short drops and controlled movement through cover",

    designFacts: [
      "Usually has a skirt and a weedguard.",
      "Often paired with a craw or creature trailer.",
      "Designed for accurate presentations around cover."
    ],

    helpfulSituations: [
      "Bass are using wood or brush.",
      "Specific cover targets need to be fished.",
      "A bulky bottom or cover presentation is useful."
    ],

    usefulCover: [
      "brush",
      "laydowns",
      "docks",
      "wood",
      "heavier vegetation"
    ],

    lessSuitableSituations: [
      "Bass are feeding in open water away from cover.",
      "A small finesse presentation is more appropriate."
    ],

    depthGuidance:
      "Choose jig weight to reach the cover and maintain control.",

    setup:
      "Flipping jig with a crawfish or creature-style trailer.",

    colorGuidance:
      "Consider local bluegill and crawfish forage. Adjust contrast for visibility.",

    explanation:
      "Designed for accurate presentations around cover where bass may be hiding.",

    confidence: "high",
    sourceNotes: ["FishUSA bass jig guide"]
  },

  {
    id: "football_jig",
    name: "Football Jig",
    category: "jig",
    presentation: "Dragging, hopping, or slowly moving along hard bottom",

    designFacts: [
      "Uses a wide football-shaped head.",
      "Usually has a skirt and trailer.",
      "Designed primarily for bottom contact."
    ],

    helpfulSituations: [
      "Bass are around rocky bottom.",
      "Offshore structure is present.",
      "A bottom-oriented jig presentation is useful.",
      "The target area is relatively free of dense vegetation."
    ],

    usefulCover: [
      "rock",
      "gravel",
      "points",
      "offshore structure",
      "hard bottom"
    ],

    lessSuitableSituations: [
      "Thick vegetation repeatedly collects the jig.",
      "Dense brush creates repeated snags.",
      "Bass are actively chasing prey near the surface."
    ],

    depthGuidance:
      "Choose jig weight based on depth and the need to maintain bottom contact.",

    setup:
      "Football-head skirted jig with a craw or creature trailer.",

    colorGuidance:
      "Crawfish and bluegill patterns are useful starting points when they match local forage.",

    explanation:
      "The wide head is designed to move across hard bottom and maintain contact with rocky structure.",

    confidence: "high",
    sourceNotes: ["FishUSA bass jig guide"]
  },

  {
    id: "finesse_jig",
    name: "Finesse Jig",
    category: "jig",
    presentation: "Slow hopping, dragging, or short movements",

    designFacts: [
      "Generally smaller than many standard casting jigs.",
      "Usually includes a skirt and compact trailer.",
      "Can be fished around suitable light cover and bottom structure."
    ],

    helpfulSituations: [
      "A smaller jig profile is desired.",
      "Bass are reluctant to take larger presentations.",
      "Fishing pressure makes a more subtle presentation worth trying.",
      "Bass are near specific targets or the bottom."
    ],

    usefulCover: [
      "rock",
      "docks",
      "light wood",
      "light cover"
    ],

    lessSuitableSituations: [
      "Heavy cover requires a stronger flipping-style setup.",
      "A fast moving search bait is more appropriate."
    ],

    depthGuidance:
      "Choose jig weight based on target depth, cover, and desired fall speed.",

    setup:
      "Small skirted jig with a compact soft plastic trailer.",

    colorGuidance:
      "Match local crawfish or bluegill forage when practical.",

    explanation:
      "A smaller skirted jig provides a compact alternative to larger bass jigs.",

    confidence: "high",
    sourceNotes: ["FishUSA bass jig guide"]
  },

  {
    id: "casting_jig",
    name: "Casting Jig",
    category: "jig",
    presentation: "Casting, dragging, hopping, or swimming depending on design",

    designFacts: [
      "A general-purpose skirted bass jig.",
      "Head shape and weedguard design vary by model.",
      "Often paired with a soft plastic trailer."
    ],

    helpfulSituations: [
      "Bass are around docks, rock, or moderate cover.",
      "A skirted jig presentation is useful.",
      "A general-purpose jig is needed for casting to targets."
    ],

    usefulCover: [
      "docks",
      "rock",
      "wood",
      "moderate cover"
    ],

    lessSuitableSituations: [
      "The head design is poorly suited to the cover being fished.",
      "A very small finesse bait or fast moving lure is more appropriate."
    ],

    depthGuidance:
      "Select head shape and weight for the target depth and cover.",

    setup:
      "Casting jig with a trailer matched to the desired profile.",

    colorGuidance:
      "Match local forage and water visibility.",

    explanation:
      "A general-purpose skirted jig that can be selected for different cover and presentations depending on its head design.",

    confidence: "medium",
    sourceNotes: ["FishUSA bass jig guide"]
  }

];
