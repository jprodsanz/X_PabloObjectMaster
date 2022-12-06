const pokémon = Object.freeze
([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// [ x ] an array of pokémon objects where the id is evenly divisible by 3

    // console.log ("pokémon divided by tres")
    // const byTres = pokémon.filter( p => p.id % 3 === 0).map( p => p)
    // byTres.forEach( p => console.log(p.name))

// [ x ] an array of pokémon objects that are "fire" type

    // console.log ("these pokémon(s) are lit")
    // const byFire = pokémon.filter ( p => p.types.includes("fire")).map(p => p) 
    // byFire.forEach(p => console.log(p.name))

// [ x ]an array of pokémon objects that have more than one type
    
    // console.log ("pokémon with more than one type")
    // const moreTypes = pokémon.filter( p => p.types.length > 1).map (p => p)
    // moreTypes.forEach( p => console.log(p.name))

// [ x ]an array with just the names of the pokémon

    // console.log("my name is pokémon, names only")
    // const namesOnly = pokémon.filter( p => p.name).map(p => p)
    // namesOnly.forEach( p => console.log(p.name))

// [ x ]an array with just the names of pokémon with an id greater than 99

    // console.log("pokémon with an id greater than 99")
    // const nameIds = pokémon.filter( p => p.name && p.id > 99).map(p => p)
    // nameIds.forEach( p => console.log(p.name))

// [ x ]an array with just the names of the pokémon whose only type is poison
    
    console.log ("pokémon whose only type is poison")
    const typePoison = pokémon.filter( p => p.name && p.types.includes("poison") && p.types.length ===1).map(p => p)
    typePoison.forEach ( p => console.log(p.name))

// [ x ]an array containing just the first type of all the pokémon whose second type is "flying"
    console.log("pokémon(s) who fly")
    const typeFlying = pokémon.filter(p => p.name && p.types.includes("flying", 1)).map(p => p)
    typeFlying.forEach (p => console.log(p.name, p.types[0]))

// [ x ]a count of the number of pokémon that are "normal" type
    console.log("normal pokémon(s)")
    const normal = pokémon.filter(p => p.name && p.types.includes("normal")).map (p => p)
    console.log(normal.length)