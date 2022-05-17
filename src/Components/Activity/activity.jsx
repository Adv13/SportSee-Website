import { getActivity } from "../../API/mockServices";
import { getApiActivity } from "../../API/services";
import oval from "../../assets/Oval.png";
import ovalRed from "../../assets/Oval_red.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Activity() {
  const [activityData, setActivityData] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    getApiActivity(id).then((datas) => {
      if (datas.data) {
        const formattedData = datas.data.sessions.map((activity) => ({
          date: activity.day,
          kg: activity.kilogram,
          cal: activity.calories,
        }));

        setActivityData(formattedData);
      }
    });
  }, [id]);


  function weekDays(num) {
    const week = [1, 2, 3, 4, 5, 6, 7];
    return week[num];
  }

  function customTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#E60000",
            height: 63,
            color: "white",
            fontSize: 10,
            fontWeight: 500,
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="activity">
      <div className="activity--top">
        <h2>Activité quotidienne</h2>
        <div className="legend">
          <img src={oval} alt="black" />
          <span>Poids (kg)</span>
          <img src={ovalRed} alt="red" />
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
      <div className="activity--graph">
        <ResponsiveContainer width="100%" aspect={4}>
          <BarChart
            width="100%"
            height={300}
            data={activityData}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickFormatter={weekDays} />
            <YAxis orientation="right" domain={[0, "dataMax"]} />
            <Tooltip content={customTooltip} offset={30} />
            <Bar radius={5} barSize={10} dataKey="kg" fill="#282D30" />
            <Bar radius={5} barSize={10} dataKey="cal" fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default Activity;
