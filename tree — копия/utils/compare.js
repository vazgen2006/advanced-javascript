export const COMPARE = {
    BIGGER: "BIGGER",
    SMALLER: "SMALLER",
    EQUAL: "EQUAL",
}

export const compareNumber = (a, b) => {
    if (a > b) {
        return COMPARE.BIGGER
    }

    if (a < b) {
        return COMPARE.SMALLER
    }

    return COMPARE.EQUAL
}
