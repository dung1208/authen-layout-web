import React, { Component } from 'react'
import './theme-sidebar.scss'

export class ThemeDiv extends Component {
    render() {
        return (
            <div class="theme_div open">
                <div class="card">
                    <div class="card-body">
                        <ul class="list-group list-unstyled">
                            <li class="list-group-item mb-2">
                                <p>Default Theme</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/default.png")} class="img-fluid" /></a>
                            </li>
                            <li class="list-group-item mb-2">
                                <p>Night Mode Theme</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/dark.png")} class="img-fluid" /></a>
                            </li>
                            <li class="list-group-item mb-2">
                                <p>RTL Version</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/rtl.png")} class="img-fluid" /></a>
                            </li>
                            <li class="list-group-item mb-2">
                                <p>Theme Version2</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/theme2.png")} class="img-fluid" /></a>
                            </li>
                            <li class="list-group-item mb-2">
                                <p>Theme Version3</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/theme3.png")} class="img-fluid" /></a>
                            </li>
                            <li class="list-group-item mb-2">
                                <p>Theme Version4</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/theme4.png")} class="img-fluid" /></a>
                            </li>
                            <li class="list-group-item mb-2">
                                <p>Horizontal Version</p>
                                <a href="javascript:void(0)"><img src={require("../../assets/images/themes/horizontal.png")} class="img-fluid" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
