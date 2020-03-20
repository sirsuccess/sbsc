import React from "react";

import DasboardShell from "../../components/features/dashboard-shell/DashboardShell"
import HomeFirstSec from "../../components/features/homeFirstSec/homeFirstSec"
import DashboardDate from "../../components/commons/DashboardDate/DashboardDate"



export default function Home(params) {
    return (
        <DasboardShell>
            <DashboardDate/>
            <HomeFirstSec/>
        </DasboardShell>
    
    )
}