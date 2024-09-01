export const threeColArray = (data, Id, Code) => {
    const result = data?.map((sponsor) =>
        ({ value: sponsor[Code], label: sponsor[Code], id: sponsor[Id] })
    )
    return result
}

export const getYearMonthFromDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Adding 1 since getMonth() returns zero-based month
    return `${month} - ${year}`;
    // return { year, month };
}
