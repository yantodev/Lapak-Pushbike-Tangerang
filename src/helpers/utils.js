
// Display Money in Indian Format
export const displayMoney = (n) => {
    const numFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    return numFormat.format(n);
};


// Calculate Discount Percentage
export const calculateDiscount = (discountedPrice, originalPrice) => {
    const discountedPercent = (discountedPrice / originalPrice) * 100;
    return Math.round(discountedPercent);
};


// Calculate Total Amount
export const calculateTotal = (arr) => {
    return arr.reduce((accum, val) => accum + val, 0);
};
