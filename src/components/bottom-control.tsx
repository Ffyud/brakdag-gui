import React, { useState, useEffect } from "react";
import { ReactElement } from "react";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import dayjs from "dayjs";
import Day from "../models/day.model";

dayjs.extend(isSameOrBefore);

interface BottomControlProps {
    selectDate;
}

interface MonthYear {
    month: number;
    year: number;
}

const monthName = (index: number) => {
    const names = ["jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    return names[index];
};

const dayName = (index: number) => {
    const names = ["zo", "ma", "di", "wo", "do", "vr", "za"];
    return names[index];
};

const todayYearMonth: MonthYear = { month: dayjs().month(), year: dayjs().year() };

const daysListOfSelectedMonthYear = (selectedMonthYear: MonthYear): Day[] => {
    const year = selectedMonthYear.year;
    const month = selectedMonthYear.month;

    const startOfMonth = dayjs().year(year).month(month).startOf("month");
    const endOfMonth = dayjs().year(year).month(month).endOf("month");

    const daysList: Day[] = [];

    let currentDate = startOfMonth;
    while (currentDate.isSameOrBefore(endOfMonth)) {
        daysList.push({
            weekday: currentDate.day(),
            month: currentDate.month(),
            day: currentDate.date(),
            year: currentDate.year()
        });
        currentDate = currentDate.add(1, "day");
    }

    return daysList;
};

const BottomControl: React.FC<BottomControlProps> = ({ selectDate }): ReactElement => {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [selectedMonthYear, setSelectedMonthYear] = useState<MonthYear>();
    const [selectedDay, setSelectedDay] = useState<Day>();
    const [daysList, setDaysList] = useState<Day[]>();
    const [monthList, setMonthList] = useState<MonthYear[]>([]);

    useEffect(() => {
        const list: MonthYear[] = [
            { month: 0, year: 2024 },
            { month: 1, year: 2024 },
            { month: 2, year: 2024 },
            { month: 3, year: 2024 },
            { month: 4, year: 2024 },
            { month: 5, year: 2024 },
            { month: 6, year: 2024 },
            { month: 7, year: 2024 },
            { month: 8, year: 2024 },
            { month: 9, year: 2024 },
            { month: 10, year: 2024 },
            { month: 11, year: 2024 },
        ]; // Deze lijst van maanden moet alle mogelijke data bevatten waar nieuws voor is
        setMonthList(list);

        // FIXME hardcoded een monthyear erin
        setDaysList(daysListOfSelectedMonthYear(todayYearMonth));
    }, []);

    const onSelectMonthYear = (monthYear: MonthYear): void => {
        setSelectedMonthYear(monthYear);
        setSelectedDay(undefined);
        setDaysList(daysListOfSelectedMonthYear(monthYear));
    };

    const onSelectDay = (day: Day): void => {   
        setSelectedDay(day);
        selectDate(day);
    };

    return (
        <div className="bottom-control">
            <div className="search-filter">
                <button>Z</button>
                <button>F</button>
            </div>
            <div className="date-picker">
                <ul className="month-pick">
                    {monthList.map((monthYear: MonthYear) => (
                        <li>
                            <button
                                className={` ${
                                    todayYearMonth.month === monthYear.month && todayYearMonth.year === monthYear.year
                                        ? "current"
                                        : ""
                                }
                                ${
                                    selectedMonthYear?.month === monthYear.month &&
                                    selectedMonthYear?.year === monthYear.year
                                        ? " active"
                                        : ""
                                }
                                `}
                                onClick={() => onSelectMonthYear(monthYear)}
                            >
                                {monthName(monthYear.month)} {monthYear.year}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className="day-pick">
                    {daysList?.map((day: Day) => (
                        <li>
                            <button
                                className={`
                                ${selectedDay?.day === day.day ? " active" : ""}
                                `}
                                onClick={() => onSelectDay(day)}
                            >
                                <span className="weekday">{dayName(day.weekday)}</span>
                                <span className="day">{day.day}</span>
                                <span className="month">{monthName(day.month)}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BottomControl;
