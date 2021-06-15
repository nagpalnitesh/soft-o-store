import React from 'react'
import "../css/header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="header-menu">
                <div className="menubtn">
                    <span id="menubtn">
                        <hr />
                        <hr />
                        <hr />
                    </span>
                </div>
                <div className="menutxt" id="menutxt"></div>
            </div>
        </div >
    )
}
