export function renderPriceWithSpaces(price) {
    if (!price) {
        return "- €";
    }

    return new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"})
        .format(price)
        .replace(",00", "");
}
