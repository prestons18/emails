import { Text } from "@react-email/text";
import React from "react";

function Schedule(props: {
    schedule: Array<{
        timeStart: string;
        timeEnd: string;
        title: string;
    }>;
}) {
    const { schedule } = props;

    return (
        <ul style={styles.wrapper}>
            {schedule.map((item, i) => (
                <li key={i} style={{
                    margin: i === schedule.length - 1 ? "0" : "0 0 6px",
                    padding: "0 0 0 0"
                }}>
                    <Text style={styles.time}>
                        {item.timeStart}-{item.timeEnd}
                    </Text>

                    <Text style={styles.title}>{item.title}</Text>
                </li>
            ))}
        </ul>
    );
}

const styles = {
    wrapper: {
        padding: "0 0 26px",
        color: "#F8F7FF",
        listStyle: "none",
        margin: "0",
    },
    time: {
        color: "#A1A1AA",
        fontSize: "13px",
        margin: "0"
    },
    title: {
        margin: "0",
        fontSize: "16px",
        fontWeight: 600,
    }
};

export default Schedule;