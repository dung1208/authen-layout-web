import React, { Component } from 'react'
import './left-sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export class LeftSidebar extends Component {
    render() {
        return (
            <div id="left-sidebar" class="sidebar ">
                <h5 class="brand-name">Epic HR <a href="javascript:void(0)" class="menu_option float-right">< FontAwesomeIcon icon={faThLarge} className="icon-grid" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle" /></a></h5>
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul class="metismenu">
                        <li class="g_heading">Directories</li>
                        <li>
                            <a href="javascript:void(0)" class="has-arrow arrow-c"><FontAwesomeIcon icon={faRocket} /> <span>HRMS</span></a>
                            <ul>
                                <li><a href="javascript:void(0)"><span>Dashboard</span></a></li>
                                <li><a href="javascript:void(0)"><span>Users</span></a></li>
                                <li><a href="javascript:void(0)"><span>Departments</span></a></li>
                                <li><a href="javascript:void(0)"><span>Employee</span></a></li>
                                <li><a href="javascript:void(0)"><span>Activities</span></a></li>
                                <li><a href="javascript:void(0)"><span>Holidays</span></a></li>
                                <li><a href="javascript:void(0)"><span>Events</span></a></li>
                                <li><a href="javascript:void(0)"><span>Payroll</span></a></li>
                                <li><a href="javascript:void(0)"><span>Accounts</span></a></li>
                                <li><a href="javascript:void(0)"><span>Report</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="has-arrow arrow-c"><FontAwesomeIcon icon={faMugHot} /><span>Project</span></a>
                            <ul>
                                <li><a href="javascript:void(0)">Dashboard</a></li>
                                <li><a href="javascript:void(0)">Project list</a></li>
                                <li><a href="javascript:void(0)">Taskboard</a></li>
                                <li><a href="javascript:void(0)">Ticket List</a></li>
                                <li><a href="javascript:void(0)">Ticket Details</a></li>
                                <li><a href="javascript:void(0)">Clients</a></li>
                                <li><a href="javascript:void(0)">Todo List</a></li>
                            </ul>
                        </li>
                        <li class="active">
                            <a href="javascript:void(0)" class="has-arrow arrow-c"><FontAwesomeIcon icon={faBriefcase} /><span>Job Portal</span></a>
                            <ul>
                                <li class="active"><a href="javascript:void(0)"><span>Job Dashboard</span></a></li>
                                <li><a href="javascript:void(0)"><span>Positions</span></a></li>
                                <li><a href="javascript:void(0)"><span>Applicants</span></a></li>
                                <li><a href="javascript:void(0)"><span>Resumes</span></a></li>
                                <li><a href="javascript:void(0)"><span>Settings</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" class="has-arrow arrow-c"><FontAwesomeIcon icon={faLock} /><span>Authentication</span></a>
                            <ul>
                                <li><a href="javascript:void(0)">Login</a></li>
                                <li><a href="javascript:void(0)">Register</a></li>
                                <li><a href="javascript:void(0)">Forgot password</a></li>
                                <li><a href="javascript:void(0)">404 error</a></li>
                                <li><a href="javascript:void(0)">500 error</a></li>
                            </ul>
                        </li>
                        <li class="g_heading">UI Elements</li>
                        <li>
                            <a href="javascript:void(0)" class="has-arrow arrow-c"><FontAwesomeIcon icon={faLock} /><span>Layouts</span></a>
                            <ul>
                                <li><a href="javascript:void(0)">Menu with Tab</a></li>
                                <li><a href="javascript:void(0)">Dark Menu</a></li>
                                <li><a href="javascript:void(0)">Menu with Grid</a></li>
                                <li><a href="javascript:void(0)">Mini Dark Menu</a></li>
                                <li><a href="javascript:void(0)">Menu Collapse</a></li>
                                <li><a href="javascript:void(0)">RTL Version</a></li>
                                <li><a href="javascript:void(0)">RTL Menu Collapse</a></li>
                                <li><a href="javascript:void(0)">Header Dark</a></li>
                                <li><a href="javascript:void(0)">Header Top Fix</a></li>
                                <li><a href="javascript:void(0)">Full Dark</a></li>
                                <li><a href="javascript:void(0)">Dark Sidebar Color</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faTag} /><span>Icons</span></a></li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faChartBar} /><span>Charts</span></a></li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faLayerGroup} /><span>Forms</span></a></li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faTag} /><span>Tables</span></a></li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faPuzzlePiece} /><span>Widgets</span></a></li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faMap} /><span>Maps</span></a></li>
                        <li><a href="javascript:void(0)"><FontAwesomeIcon icon={faImage} /><span>Gallery</span></a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
