import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return size;
};
const useFetchedAlbums = sort => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const request = new Request(
            `https://jsonplaceholder.typicode.com/photos?albumId=${sort}`,
            { method: "GET" }
        );
        fetch(request).then(data => {
            data.json().then(results => setResults(results));
        });
    });
    return results;
};

export { useWindowSize, useFetchedAlbums }