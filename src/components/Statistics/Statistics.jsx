import React from 'react';

import {
    ComposedChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
import { Helmet } from 'react-helmet-async';

const data = [
    { name: 'Page 1', uv: 590, pv: 800, amt: 1400, cnt: 490 },
    { name: 'Page 2', uv: 868, pv: 967, amt: 1506, cnt: 590 },
    { name: 'Page 3', uv: 1397, pv: 1098, amt: 989, cnt: 350 },
    { name: 'Page 4', uv: 1480, pv: 1200, amt: 1228, cnt: 480 },
    { name: 'Page 5', uv: 1520, pv: 1108, amt: 1100, cnt: 460 },
    { name: 'Page 6', uv: 1400, pv: 680, amt: 1700, cnt: 380 },
];

const Statistics = () => {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />
            </Helmet>

            <div className='bg-primary py-5 text-white'>
                        <h1 className='text-center text-2xl font-bold'>Statistics</h1>

                        <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
             </div>
            <div style={{ width: '100%', height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={data}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Scatter dataKey="cnt" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;