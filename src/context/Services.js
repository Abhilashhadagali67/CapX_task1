const API_KEY = import.meta.env.VITE_API_KEY;

export const getMultipleStockData = async (symbols) => {
    if (!Array.isArray(symbols)) {
        throw new Error("symbols must be an array");
    }

    const promises = symbols.map(symbol =>
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`)
            .then(response => response.json())
    );

    try {
        const results = await Promise.all(promises);
        const data = symbols.reduce((acc, symbol, index) => {
            acc[symbol] = results[index];
            return acc;
        }, {});
        return data;
    } catch (error) {
        console.error("Error fetching stock data:", error);
        throw error;
    }
};
