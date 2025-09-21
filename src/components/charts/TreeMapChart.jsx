import React from 'react';
import Plot from 'react-plotly.js';

const data = [
    {
        name: 'Financial Services',
        value: 35.4,
        change: 0.8,
        marketCap: 76250000000000,
        color: '#4361ee',
        children: [
            { name: 'HDFC Bank', value: 8.6, change: 1.2, marketCap: 18500000000000, color: '#22c55e' },
            { name: 'ICICI Bank', value: 7.3, change: 0.9, marketCap: 15700000000000, color: '#22c55e' },
            { name: 'SBI', value: 5.2, change: 1.5, marketCap: 11200000000000, color: '#22c55e' },
            { name: 'Kotak Mahindra', value: 4.8, change: -0.3, marketCap: 10300000000000, color: '#ef4444' },
            { name: 'Axis Bank', value: 3.9, change: 0.7, marketCap: 8400000000000, color: '#22c55e' },
            { name: 'Bajaj Finance', value: 3.1, change: 1.1, marketCap: 6700000000000, color: '#22c55e' },
            { name: 'HDFC Life', value: 1.2, change: -0.2, marketCap: 2600000000000, color: '#ef4444' },
            { name: 'SBI Life', value: 1.3, change: 0.5, marketCap: 2800000000000, color: '#22c55e' }
        ]
    },
    {
        name: 'IT',
        value: 23.6,
        change: -1.2,
        marketCap: 50800000000000,
        color: '#f72585',
        children: [
            { name: 'TCS', value: 6.8, change: -1.7, marketCap: 14600000000000, color: '#ef4444' },
            { name: 'Infosys', value: 6.3, change: -2.1, marketCap: 13600000000000, color: '#ef4444' },
            { name: 'HCL Tech', value: 3.2, change: -0.9, marketCap: 6900000000000, color: '#ef4444' },
            { name: 'Wipro', value: 2.1, change: -1.3, marketCap: 4500000000000, color: '#ef4444' },
            { name: 'Tech Mahindra', value: 1.9, change: -0.5, marketCap: 4100000000000, color: '#ef4444' },
            { name: 'LTI Mindtree', value: 1.8, change: 0.2, marketCap: 3900000000000, color: '#22c55e' },
            { name: 'Infosys ADR', value: 1.5, change: -1.8, marketCap: 3200000000000, color: '#ef4444' }
        ]
    },
    {
        name: 'Oil & Gas',
        value: 11.8,
        change: 1.6,
        marketCap: 25400000000000,
        color: '#2a9d8f',
        children: [
            { name: 'Reliance Industries', value: 7.4, change: 2.1, marketCap: 15900000000000, color: '#22c55e' },
            { name: 'ONGC', value: 1.5, change: 1.8, marketCap: 3200000000000, color: '#22c55e' },
            { name: 'BPCL', value: 1.2, change: 0.9, marketCap: 2600000000000, color: '#22c55e' },
            { name: 'Indian Oil', value: 0.9, change: 0.5, marketCap: 1900000000000, color: '#22c55e' },
            { name: 'GAIL', value: 0.8, change: 1.1, marketCap: 1700000000000, color: '#22c55e' }
        ]
    },
    {
        name: 'Consumer Goods',
        value: 8.7,
        change: -0.3,
        marketCap: 18700000000000,
        color: '#fb8500',
        children: [
            { name: 'ITC', value: 2.9, change: -0.5, marketCap: 6200000000000, color: '#ef4444' },
            { name: 'Hindustan Unilever', value: 2.4, change: -0.8, marketCap: 5200000000000, color: '#ef4444' },
            { name: 'Nestle India', value: 1.2, change: 0.3, marketCap: 2600000000000, color: '#22c55e' },
            { name: 'Britannia', value: 0.8, change: -0.1, marketCap: 1700000000000, color: '#ef4444' },
            { name: 'Tata Consumer', value: 0.7, change: 0.2, marketCap: 1500000000000, color: '#22c55e' },
            { name: 'Dabur', value: 0.7, change: -0.5, marketCap: 1500000000000, color: '#ef4444' }
        ]
    },
    {
        name: 'Automobile',
        value: 6.5,
        change: 2.3,
        marketCap: 14000000000000,
        color: '#8338ec',
        children: [
            { name: 'Maruti Suzuki', value: 2.2, change: 3.1, marketCap: 4700000000000, color: '#22c55e' },
            { name: 'Mahindra & Mahindra', value: 1.8, change: 2.8, marketCap: 3900000000000, color: '#22c55e' },
            { name: 'Tata Motors', value: 1.6, change: 1.9, marketCap: 3400000000000, color: '#22c55e' },
            { name: 'Hero MotoCorp', value: 0.9, change: 0.7, marketCap: 1900000000000, color: '#22c55e' }
        ]
    },
    {
        name: 'Metals & Mining',
        value: 5.2,
        change: -1.8,
        marketCap: 11200000000000,
        color: '#3a86ff',
        children: [
            { name: 'Tata Steel', value: 1.4, change: -2.1, marketCap: 3000000000000, color: '#ef4444' },
            { name: 'JSW Steel', value: 1.3, change: -1.9, marketCap: 2800000000000, color: '#ef4444' },
            { name: 'Hindalco', value: 1.2, change: -2.3, marketCap: 2600000000000, color: '#ef4444' },
            { name: 'Coal India', value: 1.3, change: -0.8, marketCap: 2800000000000, color: '#ef4444' }
        ]
    },
    {
        name: 'Pharma',
        value: 4.8,
        change: 0.5,
        marketCap: 10300000000000,
        color: '#4cc9f0',
        children: [
            { name: 'Sun Pharma', value: 1.6, change: 0.9, marketCap: 3400000000000, color: '#22c55e' },
            { name: 'Dr Reddy\'s', value: 1.2, change: 0.3, marketCap: 2600000000000, color: '#22c55e' },
            { name: 'Cipla', value: 1.1, change: 0.6, marketCap: 2400000000000, color: '#22c55e' },
            { name: 'Divi\'s Labs', value: 0.9, change: -0.2, marketCap: 1900000000000, color: '#ef4444' }
        ]
    },
    {
        name: 'Construction',
        value: 4.0,
        change: 1.2,
        marketCap: 8600000000000,
        color: '#560bad',
        children: [
            { name: 'L&T', value: 2.4, change: 1.5, marketCap: 5200000000000, color: '#22c55e' },
            { name: 'UltraTech Cement', value: 1.2, change: 0.8, marketCap: 2600000000000, color: '#22c55e' },
            { name: 'Grasim', value: 0.4, change: 0.5, marketCap: 860000000000, color: '#22c55e' }
        ]
    }
];

export default function TreeMapChart({width}) {
    // Prepare Plotly treemap data
    const ids = ['Nifty 50']; // Add root node
    const labels = ['Nifty 50'];
    const parents = ['']; // Root has no parent
    const values = [100]; // You can set a dummy value; Plotly will calculate

    const colors = ['black'];

    data.forEach(sector => {
        ids.push(sector.name);
        labels.push(sector.name);
        parents.push("Nifty 50");
        values.push(sector.value);
        colors.push(sector.color);

        sector.children.forEach(company => {
            ids.push(sector.name + " - " + company.name); // unique id
            labels.push(company.name);
            parents.push(sector.name);
            values.push(company.value);
            colors.push(company.color);
        });
    });

    const plotData = [
        {
            type: 'treemap',
            ids: ids,
            labels: labels,
            parents: parents,
            values: values,
            marker: {
                colors: colors,
            },
            // textinfo: "label+value+percent parent",
            // hoverinfo: "label+value+percent parent",
            texttemplate:
                "<span style='font-size:16px;color:black;border-radius:50px'>%{label}</span> <span style='font-size:12px;color:black;'>(%{percentParent:.2%})</span><br>" +
                "<span style='font-size:12px;color:black;'>%{value}%</span><br>",
            hovertemplate: "<b>%{label}</b><br>Value: %{value}<br>Parent %: %{percentParent:.2%}<br><extra></extra>",
            branchvalues: "total",
            // maxdepth: 2
        }
    ];

    return (
        <div>
            <Plot
                data={plotData}
                layout={{
                    title: "Sector & Companies Treemap",
                    width: width,
                    height: "400",
                    autosize: false,
                    margin: {
                        l: 0, // left margin
                        r: 0, // right margin
                        t: 0, // top margin (give a little space for title)
                        b: 0  // bottom margin
                    }
                }}
                config={{ responsive: true, displaylogo: false }}
                style={{ padding: "0" }}
                className='p-10'
            />
        </div>
    );
}
