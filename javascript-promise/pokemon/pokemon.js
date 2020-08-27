console.log("hello");
const pokemonUrlArr = [];
axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
    .then((res) => {
        for (let i = 0; i < 3; i++) {
            const rdm = Math.floor(Math.random() * res.data.results.length + 1);
            pokemonUrlArr.push(res.data.results[rdm].url);
        }
        return Promise.all(pokemonUrlArr.map((url) => axios.get(url)));
    })
    .then((pData) => {
        console.log(pData)
        pNameImg = pData.map((p) => {
            return {
                name: p.data.name,
                img: p.data.sprites.front_default
            }

        });
        return Promise.all(pData.map((p) => axios.get(p.data.species.url)));
    })
    .then((speciesData) => {
        description = speciesData.map((s) => {
            entries = s.data.flavor_text_entries;
            return entries.find((e) => {
                return e.language.name == "en"
            });
        });
        description.forEach((text) => {
            console.log(text.flavor_text)
        });
    });