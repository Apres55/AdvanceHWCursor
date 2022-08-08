enum DAYS {
    MONDAY = 'MONDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY'
}

const day: DAYS = ["MONDAY", "FRIDAY", "SATURDAY"]
switch (day) {
    case DAYS.MONDAY:
        console.log("MONDAY PRICE")
    case DAYS.FRIDAY:
        console.log("FRIDAY PRICE")
}