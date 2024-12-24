

export default async function handler(req, res) {


    const entity_id = 30921211
    const url = `https://info7licenzeru.amocrm.ru/api/v4/contacts/${entity_id}/notes`;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxMWNiMDNlNmFkOWNhYjE4YmI1MDIxNTMxNTBmNmNlMmM5ZTcxZDEwZWUzOWMwYzY0ZjU2ZDE1YmE4NGI0ZmFkYTNhNGI4NTZhMjU4NjQyIn0.eyJhdWQiOiJiMzdhZWM0Yi1kZmUyLTQ0OTAtYmZkYy00NDI2MTczZjI0ZjUiLCJqdGkiOiJkMTFjYjAzZTZhZDljYWIxOGJiNTAyMTUzMTUwZjZjZTJjOWU3MWQxMGVlMzljMGM2NGY1NmQxNWJhODRiNGZhZGEzYTRiODU2YTI1ODY0MiIsImlhdCI6MTczNTAzOTM3NywibmJmIjoxNzM1MDM5Mzc3LCJleHAiOjE4OTI0MTkyMDAsInN1YiI6Ijc2MjIyNjAiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk4MTI2MzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiIwMDMzNGExYi1mMmFjLTRiZTctYTJhNi1kMzc0ZTYwMjQ1Y2MiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.ey9CRrqGkvgAQubREQcUgiWVWbNieXXqbBA9Mc3-mZhxstjDQ2v5eO46j195jkn5oEe4LvkX0Lw_JJfUlAtsSNYJGvf-_-knB2H4VZx2c-6Axv_HOltMj79ZL2lX1ulUv4cQ20lIwQdf2sJZVvR0A5133DPskfubdN8YXNdaiF76W6120UxWB2vCCawHskV2o0FZpJux-WqSzpSpevm4LwCXybtxu9oJ8KJ__FfCFuH-Wj-hV2zgDit01FP1GpuFz6MhQ4tf3oosbu4ChaAIrVebC8LhLOV3_d-Dsi06Wp9Ccb6LmpbMRkN1_l25lcVt1BlnMkm5T4OhqDeVDd-BrA'
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json' // Указываем тип содержимого, если это необходимо
    };
    try {
        const time = 1734998469
        const response = await fetch(url, {
            method: 'GET', // Метод запроса
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        // Парсим ответ в формате JSON
        const data = await response.json();
        //    console.log(F); // Выводим данные в консоль
        console.log(data._embedded.notes[10])
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при выполнении запроса' });
    }
}


