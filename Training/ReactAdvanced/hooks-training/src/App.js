import React, { useState, useEffect } from "react";
import {
    Container,
    Select,
    Card,
    MenuItem,
    InputLabel
} from "@material-ui/core";
import "./App.css";

function App() {
    const [sort, setSort] = useState("1");
    const [results, setResults] = useState([]);

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
    const size = useWindowSize();

    useEffect(() => {
        const request = new Request(
            `https://jsonplaceholder.typicode.com/photos?albumId=${sort}`,
            { method: "GET" }
        );
        fetch(request).then(data => {
            data.json().then(results => setResults(results));
        });
    }, [sort]);
    const handleOnChange = event => {
        setSort(event.target.value);
    };
    return (
        <>
            <InputLabel htmlFor="age-native-simple">
                Number of the page
            </InputLabel>
            <Select
                id="age-native-simple"
                value={sort}
                onChange={handleOnChange}
            >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
            </Select>
            <Container
                maxWidth={size < 600 ? "xs" : "md"}
                className="container"
            >
                {results.map(result => {
                    return (
                        <Card className="item">
                            <h6>{result.id}</h6>
                            <img src={result.thumbnailUrl} alt="flower" />
                        </Card>
                    );
                })}
            </Container>
        </>
    );
}

export default App;
