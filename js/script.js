const baseurl = 'https://swapi.dev/api/people'

const center = document.querySelector('.rows')


function getData(url , cb){
    fetch(`${url}/`)
    .then(res => res.json())
    .then(r =>{
        cb(r)
    } )
}

window.addEventListener('load' , () =>{

    getData(baseurl, res =>{
        console.log(res.results);
        const Card = res.results.map(item =>{
            return `
                <div class="cardinfo1">
                    <div class="cardinfo2">
                        <div class="cardinfo">
                            <h3>${item.name}</h3>
                            <h5>Eye-Color:  ${item.eye_color}</h5>
                            <h5>Hair-Color:  ${item.hair_color}</h5>
                            <h5>Height: ${item.height}</h5>
                            <h5>Massa: ${item.mass}</h5>
                            <h5>Skin-Color: ${item.skin_color}</h5>
                            <h5>Birth-Year: ${item.birth_year}</h5>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        center.innerHTML = Card
    })

})