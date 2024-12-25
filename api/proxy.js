

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.status(204).end(); // 204 No Content
        return;
    }
    const entity_id = 30921211;
    const url = `https://info7licenzeru.amocrm.ru/api/v4/contacts/${entity_id}/notes`;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYyODhkMjQ3ODY1NGVmM2UzODBlMmIyMzc5ZTA5NTNhOWE2YzM5MTVhYTMyNzI3YzRkZjhhYzgyNzg3ZGE1NDk2YjYxY2Y3MmQ0YThhNzMwIn0.eyJhdWQiOiI0MWYwNjU1MC1jNmNhLTQ3ZWUtOGEzNC0xNWE2NzQ4YzBlZWUiLCJqdGkiOiI2Mjg4ZDI0Nzg2NTRlZjNlMzgwZTJiMjM3OWUwOTUzYTlhNmMzOTE1YWEzMjcyN2M0ZGY4YWM4Mjc4N2RhNTQ5NmI2MWNmNzJkNGE4YTczMCIsImlhdCI6MTczNDk3MzA2MCwibmJmIjoxNzM0OTczMDYwLCJleHAiOjE4OTI2Nzg0MDAsInN1YiI6Ijc2MjIyNjAiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk4MTI2MzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiJlNjllOWU1MC1mMzhkLTQzYTQtOTc5Ni02ZGM3ZDkyNWRlYTYiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.M9DLXf4-j2c01b2gs6HyXZncHJqVahgYaDBpVr2OLo-LShuvn0-9v3-nYlWu79OpG5U7ZVQP0AOndrJ2OutCdExk4Nd-su3S68_h0IP5Ua329CyeqtHkjJxxJfk9Swf3bpwWLyLEzNoa2Yr8ecQtv9OTWDEh--yYBqw_LF34F9J_OMSe9U1jYHmcZ3R2yUKLryqi9eE3ZN19EFZX2CpXKVEYTfKz5NtHXohK46f47PwR4ttU0Cw5kJOo7eIJLJCpAOqrcXlZ49chRTGtba6dzGG0D7PUIHmmXS46MCl9ozAIea4lM-Ipv61Dx5RNgacD6YZhS_GexA5BLpxo9bK6Rw'; // Замените на свой токен
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    console.log("Запрос:", url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        console.log("Ответ от AmoCRM:", response);
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Ошибка при запросе к AmoCRM API: ${response.status} ${response.statusText}`, errorText);
            throw new Error(`Ошибка при запросе к AmoCRM API: ${response.status} ${response.statusText} ${errorText}`);
        }
        const data = await response.json();
        console.log("Данные от AmoCRM:", data);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Ошибка при выполнении запроса к AmoCRM:', error);
        res.status(500).json({ error: 'Ошибка при выполнении запроса', details: error.message });
    }
}




/*
async function fetchNotes(page, time) {
    const url = `https://info7licenzeru.amocrm.ru/api/v4/contacts/notes?filter[updated_at]=${time}&page=${page}&limit=250`;
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxMWNiMDNlNmFkOWNhYjE4YmI1MDIxNTMxNTBmNmNlMmM5ZTcxZDEwZWUzOWMwYzY0ZjU2ZDE1YmE4NGI0ZmFkYTNhNGI4NTZhMjU4NjQyIn0.eyJhdWQiOiJiMzdhZWM0Yi1kZmUyLTQ0OTAtYmZkYy00NDI2MTczZjI0ZjUiLCJqdGkiOiJkMTFjYjAzZTZhZDljYWIxOGJiNTAyMTUzMTUwZjZjZTJjOWU3MWQxMGVlMzljMGM2NGY1NmQxNWJhODRiNGZhZGEzYTRiODU2YTI1ODY0MiIsImlhdCI6MTczNTAzOTM3NywibmJmIjoxNzM1MDM5Mzc3LCJleHAiOjE4OTI0MTkyMDAsInN1YiI6Ijc2MjIyNjAiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6Mjk4MTI2MzAsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6Miwic2NvcGVzIjpbImNybSJdLCJoYXNoX3V1aWQiOiIwMDMzNGExYi1mMmFjLTRiZTctYTJhNi1kMzc0ZTYwMjQ1Y2MiLCJhcGlfZG9tYWluIjoiYXBpLWIuYW1vY3JtLnJ1In0.ey9CRrqGkvgAQubREQcUgiWVWbNieXXqbBA9Mc3-mZhxstjDQ2v5eO46j195jkn5oEe4LvkX0Lw_JJfUlAtsSNYJGvf-_-knB2H4VZx2c-6Axv_HOltMj79ZL2lX1ulUv4cQ20lIwQdf2sJZVvR0A5133DPskfubdN8YXNdaiF76W6120UxWB2vCCawHskV2o0FZpJux-WqSzpSpevm4LwCXybtxu9oJ8KJ__FfCFuH-Wj-hV2zgDit01FP1GpuFz6MhQ4tf3oosbu4ChaAIrVebC8LhLOV3_d-Dsi06Wp9Ccb6LmpbMRkN1_l25lcVt1BlnMkm5T4OhqDeVDd-BrA'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}

export default async function getAllCalls(req, res) {
    const now = new Date(); // Текущее время
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Сегодняшняя дата в 00:00:00
    const time = Math.floor(today.getTime() / 1000)
    let page = 1;
    let hasMoreData = true;
    const allNotes = [];
    while (hasMoreData) {
        try {
            const data = await fetchNotes(page, time);
            const array = data._embedded.notes.filter(e => e.note_type === 'call_in' || e.note_type === 'call_out').map(it => {
                return ({
                    id_user: it.updated_by,
                    timecalls: it.updated_at,
                    type: it.note_type,
                    duration: it.params.duration,
                    call_result: it.params.call_result
                })
            })
            allNotes.push(...array); // Добавляем новые записи в общий массив
            // Проверяем, есть ли следующая страница
            hasMoreData = data._embedded.notes.length === 250;
            page++;
        } catch (error) {
            console.error(error);
            hasMoreData = false; // В случае ошибки завершаем цикл
        }
    }
    const callsObject = filterUsers(allNotes)

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(response.status).json(callsObject);
}

function filterUsers(allNotes) {
    const usersId = [11859642, 10921330, 10916554, 8683795, 7983985, 9287458, 9158418]
    const notes = allNotes.filter(e => usersId.includes(e.id_user));
    return processCalls(notes)
}


function processCalls(notes) {
    const users = {
        11859642: { calls: 0, calls30: 0, calls60: 0 },
        10921330: { calls: 0, calls30: 0, calls60: 0 },
        10916554: { calls: 0, calls30: 0, calls60: 0 },
        8683795: { calls: 0, calls30: 0, calls60: 0 },
        7983985: { calls: 0, calls30: 0, calls60: 0 },
        9287458: { calls: 0, calls30: 0, calls60: 0 },
        9158418: { calls: 0, calls30: 0, calls60: 0 },
    }

    for (let i = 0; i < notes.length; i++) {
        users[notes[i].id_user].calls++
        if (notes[i].duration > 30) {
            users[notes[i].id_user].calls30++
        }
        if (notes[i].duration > 60) {
            users[notes[i].id_user].calls60++
        }
    }
    return users
}*/
