export const getTotal = (product) => {
    return product.reduce((total, product) => 
        product.count * product.price + total, 0);
};

export default () => {
    console.log("Default FUNC");
}
