const details1 = ["Unlimited talk & text", "Nationwide coverage", "Uses 5G or 4G LTE, whichever is strongest"]
const details2 = ["Unlimited talk & text", "Nationwide coverage", "35GB of 5G or 4G LTE Data"]
const speed = "5G • 4G LTE DATA"

const sale_plans = [
    {
        speed: speed,
        data: 5,
        price: 15,
        details: details1,
        total: "$45 for 6 months of service"
    },
    {
        speed: speed,
        data: 10,
        price: 20,
        details: details1,
        total: "$60 for 6 months of service"
    },
    {
        speed: speed,
        data: 15,
        price: 25,
        details: details1,
        total: "$75 for 6 months of service"
    },
    {
        speed: "",
        data: "UNLIMITED",
        price: 30,
        details: details2,
        total: "$90 for 6 months of service"
    }
]

const sixMonths = [
    {
        speed: speed,
        data: 4,
        price: 20,
        details: details1,
    },
    {
        speed: speed,
        data: 10,
        price: 25,
        details: details1,
    },
    {
        speed: speed,
        data: 15,
        price: 35,
        details: details1,
    },
    {
        speed: "",
        data: "UNLIMITED",
        price: 40,
        details: details2,
    }
]

const twelveMonths = [
    {
        speed: speed,
        data: 4,
        price: 15,
        details: details1,
    },
    {
        speed: speed,
        data: 10,
        price: 20,
        details: details1,
    },
    {
        speed: speed,
        data: 15,
        price: 25,
        details: details1,
    },
    {
        speed: "",
        data: "UNLIMITED",
        price: 30,
        details: details2,
    }
]

export { sale_plans, sixMonths, twelveMonths }