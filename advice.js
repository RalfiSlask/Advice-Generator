const advice_id = document.querySelector(".advice-id");
const advice_text = document.querySelector(".advice");
const advice_button = document.querySelector(".button-advice");

const adviceIds = [];

async function getRandomAdvice () {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const jsonData = await response.json();
        let advice_data = jsonData.slip.advice;
        let advice_number_data = jsonData.slip.id;
        if(adviceIds.includes(advice_number_data)) {
            getRandomAdvice();
        } else {
            adviceIds.push(advice_number_data);
            advice_id.innerHTML = advice_number_data;
            advice_text.innerHTML = advice_data;
        }

    } catch(error) {
        console.error("error");
    }
}

advice_button.onclick = () => {
    getRandomAdvice();
}

