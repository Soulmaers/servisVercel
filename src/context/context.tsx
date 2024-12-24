

import CalculateStruktura from '../jsClasses/CalculateStruktura'
import React, { useEffect, useState, createContext, ReactNode } from 'react'
import { GlobalDataOP, ManagersDataOP, GlobalDataTM, ManagersDataTM } from '../interfaces/interfaces'

interface DashboardsData {
    opStruktura: {
        globalData: GlobalDataOP;
        managersData: ManagersDataOP[];
    };
    tmStruktura: {
        globalData: GlobalDataTM;
        managersData: ManagersDataTM[];
    };
}

interface DashBoardProvider {
    children: ReactNode
}
export const ContextStateDataGoggle = createContext<DashboardsData | null>(null)





const DashboardDataprovider: React.FC<DashBoardProvider> = ({ children }) => {

    const [data, setData] = useState<DashboardsData | null>(null)
    useEffect(() => {
        const sheetkey = process.env.REACT_APP_SHEET_ID
        const apikey = process.env.REACT_APP_GOOGLE_API_KEY
        const sheetName = `ОП ${getDay()}`;
        const sheetNameTM = `ТМ ${getDay()}`;

        const fetchFunction = async () => {

            try {
                const [responseOP, responseTM] = await Promise.all([
                    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetkey}/values/${`${sheetName}!A1:Z`}?key=${apikey}`),
                    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetkey}/values/${`${sheetNameTM}!A1:Z`}?key=${apikey}`)
                ]);


                const dataOP = await responseOP.json();
                const dataTM = await responseTM.json();
                console.log('гугл')
                const instance = new CalculateStruktura([dataOP.values, dataTM.values])
                setData(instance.init())
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        // Функция для выполнения запроса
        const fetchData = async () => {
            const response = await fetch('https://servis-vercel.vercel.app//api/proxy', {
                method: 'POST', // Или другой метод, в зависимости от вашего API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ /* ваши данные */ }),
            });

            const data = await response.json();
            console.log(data);
        };
        fetchData()
        fetchFunction();
        // getAccount()
        const interval = setInterval(fetchFunction, 60000);
        return () => clearInterval(interval);
    }, []);


    return (
        <ContextStateDataGoggle.Provider value={data}>
            {children}
        </ContextStateDataGoggle.Provider>
    )
}



function getDay() {
    const unixTime = Math.floor(new Date().getTime() / 1000)
    const date = new Date(unixTime * 1000);
    const monthName = date.toLocaleString('ru-RU', { month: 'long' });
    const year = date.getFullYear()
    return `${monthName} ${year}`
}
export default DashboardDataprovider