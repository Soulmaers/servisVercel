

class CalculateStruktura {
    constructor(data) {
        this.data = data

    }

    init() {
        const [op, tm] = this.data.map(e => e.slice(0, 5))
        const opStruktura = this.webpackStrukturaOP(op)
        const tmStruktura = this.webpackStrukturaTM(tm)
        return { opStruktura, tmStruktura }
    }

    webpackStrukturaTM(data) {
        const planMonth = this.helpersFunc(data[1]?.[6])
        const qualityApplications = this.helpersFunc(data[2]?.[6])
        const globalData = {
            jobDay: data[0][1],
            planMonth: planMonth,
            qualityApplications: this.helpersFunc(data[2]?.[6]),
            application: this.helpersFunc(data[4]?.[6]),
            factDay: data[3][6],
            factMonth: ((qualityApplications / planMonth) * 100).toFixed(3) + '%'
        }
        console.log(globalData)
        const managersData = data[0].map((e, index) => {
            if (index > 1 && index < 6 && data[0]?.[index] !== '') {
                const planMonth = this.helpersFunc(data[1]?.[index])
                const qualityApplications = this.helpersFunc(data[2]?.[index])
                const application = this.helpersFunc(data[4]?.[index])
                const factMonth = ((qualityApplications / planMonth) * 100).toFixed(3)
                const factDay = data[3]?.[index]
                const object = {
                    name: data[0]?.[index],
                    color: 'url(./ques.png)',
                    calls: '',
                    calls30sec: '',
                    calls60sek: '',
                    application: isNaN(application) ? 0 : application,
                    qualityApplications: isNaN(qualityApplications) ? 0 : qualityApplications,
                    factDay: factDay === '#DIV/0!' ? 0 + '%' : factDay,
                    factMonth: isNaN(factMonth) ? 0 + '%' : factMonth + '%',
                    factMonthNumber: isNaN((qualityApplications / planMonth) * 100) ? 0 : ((qualityApplications / planMonth) * 100)

                }
                return object
            }
        }).filter(t => t)
        managersData.sort((a, b) => b.factMonthNumber - a.factMonthNumber)
        return { globalData, managersData }
    }
    webpackStrukturaOP(data) {
        const factBalls = this.helpersFunc(data[2]?.[6])
        const planMonth = this.helpersFunc(data[1]?.[6])
        const globalData = {
            jobDay: data[0][1],
            planMonth: planMonth,
            factBalls: factBalls,
            factMonth: isNaN((factBalls / planMonth) * 100) ? 0 + '%' : ((factBalls / planMonth) * 100).toFixed(3) + '%',
            planDay: this.helpersFunc(data[3]?.[6]),
            factDay: data[4]?.[6]
        }
        const managersData = data[0].map((e, index) => {
            if (index > 1 && index < 6 && data[0]?.[index] !== '') {
                const factballs = this.helpersFunc(data[2]?.[index])
                const planMonth = this.helpersFunc(data[1]?.[index])
                const planDay = this.helpersFunc(data[3]?.[index])
                const factMonthNumber = isNaN((factballs / planMonth) * 100) ? 0 : ((factballs / planMonth) * 100)
                const object = {
                    name: data[0]?.[index],
                    color: 'url(./ques.png)',
                    calls: '',
                    factballs: isNaN(factballs) ? 0 : factballs,
                    planMonth: isNaN(planMonth) ? 0 : planMonth,
                    factMonth: isNaN(factMonthNumber) ? 0 + '%' : this.truncateToThreeDecimals(factMonthNumber) + '%',
                    factMonthNumber: factMonthNumber,
                    planDay: planDay,
                    factDay: data[4]?.[index] === '#DIV/0!' ? '0%' : data[4]?.[index],
                    month: ''
                }
                return object
            }
        }).filter(t => t)
        managersData.sort((a, b) => b.factMonthNumber - a.factMonthNumber)
        return { globalData, managersData }
    }

    truncateToThreeDecimals(num) {
        return Math.floor(num * 1000) / 1000;
    }

    helpersFunc(element) {
        return parseFloat(element.toString().replace(',', '.'))
    }
}


module.exports = CalculateStruktura