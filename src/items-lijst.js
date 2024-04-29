import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const ItemsLijst = ({ items }) => {
    function MooieDescription({ description }) {
        var descKort = description.split(". ", 1);
        var descTrim = descKort[0].trim();
        if (descTrim.length < 10) {
            descTrim = "";
        } else if (descTrim.slice(-1) !== ".") {
            descTrim += ".";
        }
        return <span>{descTrim}</span>;
    }

    const FormattedTime = ({ timestamp }) => {
        const formattedHour = dayjs(timestamp).get("hour");
        const formattedMinuten = (dayjs(timestamp).get("minute") < 10 ? "0" : "") + dayjs(timestamp).get("minute");
        return (
            <div className="timestamp">
                {formattedHour}:{formattedMinuten}
            </div>
        );
    };

    return (
        <div className="wrapper">
            <ul className="item-lijst">
                {items.map((item) => (
                    <li key={item["id"]}>
                        <div className="title">
                            <a target="blank" href={item["link"]}>
                                {item["title"]}
                            </a>
                            {/* <Link to={"/item/" + item['id']}> */}
                            <summary className="description">
                                {item["description"] !== null && <MooieDescription description={item["description"]} />}
                            </summary>
                            {/* </Link> */}
                        </div>
                        <div className="bron">
                            {/* <Link to={"/bron/" + item['bron_id']}> */}
                            <img alt={item["bron_title"]} src={item["logo"]} data-bron={item["bron_id"]} />
                            {/* </Link> */}
                            <FormattedTime timestamp={item["timestamp_publicatie"]} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsLijst;
