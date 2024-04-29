import React, { useState, useEffect } from "react";
import ItemsLijst from "./items-lijst.js";
import Footer from "./components/footer.js";
import Header from "./components/header.tsx";
import BottomControl from "./components/bottom-control.tsx";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import Day from "./models/day.model.ts";

dayjs.extend(customParseFormat);

const today: Day = {
    weekday: dayjs().day(),
    month: dayjs().month(),
    day: dayjs().date(),
    year: dayjs().year(),
};

const App = () => {
    const [error, setError] = useState(null); // TODO Doe iets nuttigs met error state
    const [isLoaded, setIsLoaded] = useState(true); // Doe iets nuttigs met loaded state
    const [resultaten, setResultaten] = useState([]);
    const [selectedDate, setSelectedDate] = useState<Day>(today);

    useEffect(() => {
        fetchData();
    }, []);

    const selectDate = (date: Day) => {
        console.log("heuj child naar parent", date);
        setSelectedDate(date);
    };

    const fetchData = () => {

        setSelectedDate(today);

        fetch(process.env.REACT_APP_BRAKDAGFLASK + "/items")
            .then((res) => res.json())
            .then(([resultItems]) => {
                setIsLoaded(true);

                resultItems = [
                    {
                        title: "Example Title 1",
                        link: "https://rtvnoord.nl/1",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:00:00",
                        description: "Example description 1.",
                    },
                    {
                        title: "Example Title 2",
                        link: "http://oogtv.nl/2",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:15:00",
                        description: "Example description 2.",
                    },
                    {
                        title: "Example Title 3",
                        link: "http://example.com/3",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:30:00",
                        description: "Example description 3.",
                    },
                    {
                        title: "Example Title 4",
                        link: "http://example.com/4",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:45:00",
                        description: "Example description 4.",
                    },
                    {
                        title: "Example Title 5",
                        link: "http://example.com/5",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T13:00:00",
                        description: "Example description 5.",
                    },
                    {
                        title: "Example Title 1",
                        link: "http://example.com/1",
                        logo: "logos/logo_focus.png",
                        timestamp_publicatie: "2024-04-24T12:00:00",
                        description: "Example description 1.",
                    },
                    {
                        title: "Example Title 2",
                        link: "http://example.com/2",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:15:00",
                        description: "Example description 2.",
                    },
                    {
                        title: "Example Title 3",
                        link: "http://example.com/3",
                        logo: "logos/logo_buurt.png",
                        timestamp_publicatie: "2024-04-24T12:30:00",
                        description: "Example description 3.",
                    },
                    {
                        title: "Example Title 4",
                        link: "http://example.com/4",
                        logo: "logos/logo_bereikbaar.png",
                        timestamp_publicatie: "2024-04-24T12:45:00",
                        description: "Example description 4.",
                    },
                    {
                        title: "Example Title 5",
                        link: "http://example.com/5",
                        logo: "logos/logo_campus.png",
                        timestamp_publicatie: "2024-04-24T13:00:00",
                        description: "Example description 5.",
                    },
                    {
                        title: "Example Title 1",
                        link: "http://example.com/1",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:00:00",
                        description: "Example description 1.",
                    },
                    {
                        title: "Example Title 2",
                        link: "http://example.com/2",
                        logo: "logos/logo_dvhn.png",
                        timestamp_publicatie: "2024-04-24T12:15:00",
                        description: "Example description 2.",
                    },
                    {
                        title: "Example Title 3",
                        link: "http://example.com/3",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:30:00",
                        description: "Example description 3.",
                    },
                    {
                        title: "Example Title 4",
                        link: "http://example.com/4",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T12:45:00",
                        description: "Example description 4.",
                    },
                    {
                        title: "Example Title 5",
                        link: "http://example.com/5",
                        logo: "logos/logo_gemeente.png",
                        timestamp_publicatie: "2024-04-24T13:00:00",
                        description: "Example description 5.",
                    },
                ];

                setResultaten(resultItems);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    };

    return (
        <div>
            <Header date={selectedDate} items={resultaten}></Header>
            <ItemsLijst items={resultaten} />
            <BottomControl selectDate={selectDate}></BottomControl>
            <Footer></Footer>
        </div>
    );
};

export default App;
