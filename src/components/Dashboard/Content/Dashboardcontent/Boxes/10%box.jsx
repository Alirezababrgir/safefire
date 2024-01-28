import dayjs from 'dayjs';
import { BarChart } from "@mui/x-charts";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useState } from "react";
const BOX_10 = () => {
    const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
    return (
        <div className="col-md-12 col-lg-6">
            <div className="mb-3 card">
                <div className="card-header-tab card-header-tab-animation card-header">
                    <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                        <h1 className="fs-4">40% Pool</h1>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><a href="javascript:void(0);" className="active nav-link">40%</a></li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tabs-eg-77">
                            <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                        <BarChart
                                            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                                            height={200}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="row mb-4">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['TimeField', 'TimeField']}>
                                        <TimeField
                                            label="Uncontrolled field"
                                            defaultValue={dayjs('2022-04-17T15:30')}
                                        />
                                        <TimeField
                                            label="Controlled field"
                                            value={value}
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                            <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">Details</h6>
                            <div className="scroll-area-sm">
                                <div className="scrollbar-container">
                                    <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <img width={42} className="rounded-circle" src="assets/images/avatars/5.jpg" alt="" />
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <h6 className="widget-heading">Sale Total</h6>
                                                        <div className="widget-subheading">UI Designer</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg text-muted">
                                                            <small className="opacity-5 pr-1">$</small>
                                                            <span>54</span>
                                                            <small className="text-success pl-2">
                                                                <i className="fa fa-angle-up" />
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <img width={42} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Share Value</div>
                                                        <div className="widget-subheading">Java Programmer</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg text-muted">
                                                            <small className="opacity-5 pr-1">$</small>
                                                            <span>429</span>
                                                            <small className="text-warning pl-2">
                                                                <i className="fa fa-dot-circle" />
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="widget-content p-0">
                                                <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <img width={42} className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Total Share Count</div>
                                                        <div className="widget-subheading">Web Developer</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="font-size-xlg text-muted">
                                                            <small className="opacity-5 pr-1">$</small>
                                                            <span>129</span>
                                                            <small className="text-danger pl-2">
                                                                <i className="fa fa-angle-down" />
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BOX_10;