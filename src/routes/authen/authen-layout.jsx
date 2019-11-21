
import React, { Component } from 'react';
import './authen-layout.scss';
import { HeaderTop } from '../../components/header-top/header-top';
import { RightSidebar } from '../../components/right-sidebar/right-sidebar';
import { ThemeDiv } from '../../components/theme-sidebar/theme-sidebar';
import { UserDiv } from '../../components/user-sidebar/user-sidebar';
import { LeftSidebar } from '../../components/left-sidebar/left-sidebar';
export class AuthenLayout extends Component {
    render() {
        return (
            <div className="authen-layout">
                <HeaderTop />
                <RightSidebar />
                <ThemeDiv />
                <UserDiv />
                <LeftSidebar />

            </div>
        )
    }
}
