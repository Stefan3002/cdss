const useFetchHook = () => {
    const fetchData = async (url, method = "GET") => {
        try {
            const response = await fetch(url, {
                method
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    };

    return { fetchData };
}
export default useFetchHook