import './Nav.css';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
    {
        name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
    },
    {
        name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
    },

];

const style = {
    top: 0,
    left: 200,
    lineHeight: '24px',
};


 class Pcircle extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9km41z5z/';

    render() {
        return (
            <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                <Legend iconSize={10} width={100} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style}  />
            </RadialBarChart>
        );
    }
}
export default Pcircle;