import React, { useState, useEffect } from "react";
import {
    Container,
    Select,
    Card,
    MenuItem,
    InputLabel
} from "@material-ui/core";
import "./App.css";
import { useWindowSize, useFetchedAlbums } from "./hooks";

function App() {
    const size = useWindowSize();
    const [sort, setSort] = useState("1");

    const results = useFetchedAlbums(sort);
    useEffect(() => {}, [sort]);
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
