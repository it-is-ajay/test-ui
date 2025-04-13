import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function Performance() {
    const chartRef = useRef(null);
    const graphRef = useRef(null);


    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);
        const graphInstance = echarts.init(graphRef.current);
        // const graph2Instance = echarts.init(graph2Ref.current);

        const chartOptions = {
            tooltip: {
                trigger: "item",
            },
            legend: {
                bottom: '0%',
                left: 'center'
            },
            series: [
                {
                    name: "Portfolio",
                    type: "pie",
                    radius: ['40%', '70%'], // Adjust the thickness of the ring
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: "inside",
                        formatter: "{d}%", // Show percentage values
                        fontSize: 12,
                        color: "#fff",
                        fontWeight: "bold",
                    },
                    labelLine: {
                        show: false, // Hide label lines
                    },
                    data: [
                        { value: 20, name: "Equities", itemStyle: { color: "#4A90E2" } }, // Medium blue
                        { value: 30, name: "Private Bonds", itemStyle: { color: "#1976D2" } }, // Dark blue
                        { value: 10, name: "Government Bonds", itemStyle: { color: "#63A4FF" } }, // Light blue
                        { value: 40, name: "Others", itemStyle: { color: "#E0E0E0" } }, // Light gray
                    ],
                },
            ],
        };

        const graphOptions = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {},

            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };


        chartInstance.setOption(chartOptions);
        graphInstance.setOption(graphOptions);
        // graph2Instance.setOption(graphOptions);

        return () => {
            chartInstance.dispose();
            graphInstance.dispose();
            // graph2Instance.dispose();
        };
    }, []);

    return <>
        <section className="pp">
            <div className="pp_container">
                <div className="pp_container_left">
                    <div className="pp_container_left_top">
                        <div className="pp_container_left_top_card">
                            <p className="pp_container_left_top_card_topPara">Choose your investment style</p>
                            <select className="pp_container_left_top_card_dropdown">
                                <option value="" key="">Defensive</option>
                                <option value="" key="">Option 1</option>
                                <option value="" key="">Option 2</option>
                            </select>
                            <p className="pp_container_left_top_card_bottomPara">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            </p>
                        </div>
                    </div>
                    <div className="pp_container_left_bottom">
                        <label className="pp_container_left_bottom_heading">
                            Asset Allocation
                        </label>
                        <div ref={chartRef} className="pp_container_left_bottom_chart" />
                    </div>
                </div>
                <div className="pp_container_right">
                    <div className="pp_container_right_top">
                        <label className="pp_container_right_top_heading">
                            Overview of Historical Performance
                        </label>
                        <div className='cardContainer'>
                            <div className='cardContainer_card'>
                                <p className="cardContainer_card_top">
                                    <div className=""></div>
                                    <label className="">Beehive Portfolio</label>
                                </p>
                                <label className="cardContainer_card_bottom">
                                    40.20%
                                </label>
                            </div>
                            <div className='cardContainer_card'>
                                <p className="cardContainer_card_top">
                                    <div className=""></div>
                                    <label>Benchmark</label>
                                </p>
                                <label className="cardContainer_card_bottom">
                                    48.20%
                                </label>
                            </div>
                            <div className='cardContainer_card'>
                                <p className="cardContainer_card_top">
                                    <div className=""></div>
                                    <label>Competitor's</label>
                                </p>
                                <label className="cardContainer_card_bottom">
                                    33.50%
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="pp_container_right_bottom">
                        <div ref={graphRef} className="pp_container_right_bottom_graph" />
                    </div>
                </div>
            </div>
        </section>
    </>
}