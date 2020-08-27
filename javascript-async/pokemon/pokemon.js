const pokemonUrlArr = [];

async function getURL() {
    res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1000`);
    for (let i = 0; i < 3; i++) {
        const rdm = Math.floor(Math.random() * res.data.results.length + 1);
        pokemonUrlArr.push(res.data.results[rdm].url);
    }
    for (let i = 0; i < 3; i++) {
        const res = await axios.get(pokemonUrlArr[i]);
        const obj = { name: res.data.name, img: res.data.sprites.front_default };
        const speciesData = await axios.get(res.data.species.url);
        const descriptionArr = speciesData.data.flavor_text_entries
        const description = descriptionArr.find((e) => {
            return e.language.name == "en"
        });
        obj['description'] = description.flavor_text;
        console.log(obj)
    }
}
getURL();