import React, { ReactElement } from "react";
import Day from "../models/day.model.ts";

interface HeaderProps {
    date: Day;
    items: never[];
}

const dayName = (index: number) => {
    const names = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
    return names[index];
};

const monthName = (index: number) => {
    const names = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
    return names[index];
};

const Header: React.FC<HeaderProps> = ({ date, items }): ReactElement => {
    const getHeaderDate = (date: Day) => {
        return dayName(date.weekday) + " " + date.day + " " + monthName(date.month);
    };

    return (
        <header>
            <div className="logo">BD</div>
            <div className="date">{getHeaderDate(date)}</div>
            <div className="tag">{items.length} artikelen</div>
        </header>
    );
};

export default Header;
