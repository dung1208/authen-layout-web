import React, { Component } from "react";
import "./header-top.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";

export class HeaderTop extends Component {
  render() {
    return (
      <div id="header_top" class="header_top">
        <div class="container">
          <div class="hleft">
            <a class="header-brand" href="javascript:void(0)"><div className="brand-logo"><FontAwesomeIcon icon={faFan} /></div></a>
            <div class="dropdown">
              <a href="javascript:void(0)" class="nav-link icon"><FontAwesomeIcon icon={faSearch} className="icon-header-top" /></a>
              <a href="javascript:void(0)" class="nav-link icon app_inbox"><FontAwesomeIcon icon={faCalendar} /></a>
              <a href="javascript:void(0)" class="nav-link icon xs-hide"><FontAwesomeIcon icon={faIdCard} /></a>
              <a href="javascript:void(0)" class="nav-link icon xs-hide"><FontAwesomeIcon icon={faComments} /></a>
              <a href="javascript:void(0)" class="nav-link icon app_file xs-hide" ><FontAwesomeIcon icon={faFolder} /></a>
            </div>
          </div>
          <div class="hright">
            <div class="dropdown">
              <a href="javascript:void(0)" class="nav-link icon theme_btn"><FontAwesomeIcon icon={faPaintBrush} data-toggle="tooltip" data-placement="right" title="Themes" /></a>
              <a href="javascript:void(0)" class="nav-link icon settingbar"><FontAwesomeIcon icon={faCog} data-toggle="tooltip" data-placement="right" title="Settings" /></a>
              <a href="javascript:void(0)" class="nav-link user_btn"><img class="avatar" src={require("../../assets/images/user.png")} alt="" data-toggle="tooltip" data-placement="right" title="User Menu" /></a>
              <a href="javascript:void(0)" class="nav-link icon menu_toggle"><FontAwesomeIcon icon={faAlignLeft} /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
