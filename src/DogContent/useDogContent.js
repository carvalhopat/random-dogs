import {useState} from 'react';

const axios = require('axios');

function useDogContent() {
    const [waitImage, setWaitImage] = useState(true);

    const catchData = () => { 
        let contentWrapper = document.querySelector(".dogs-img");

        contentWrapper.innerHTML = '<div class="loader"></div>'
        setWaitImage(false)
        axios.get("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                const dogImage = response.data.message;
                const sourceImage = `<img src ='${dogImage}'>`;
                contentWrapper.innerHTML = sourceImage;
                
            })
            .catch(error => {
                console.log(error);
                contentWrapper.innerHTML = '<div class="errorMessage">Não foi possível carregar a imagem.</div>'
            })
            }

return { waitImage, catchData}
}

export default useDogContent;