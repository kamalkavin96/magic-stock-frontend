import { Link, useParams } from "react-router-dom";
import { SECTOR_ICON_URL } from "../config/urlConfig";
import { useEffect, useState } from "react";
import HeaderRow from "../components/ui/HeaderRow";
import { Search, Filter } from 'lucide-react';
import { API_V1_BASSE_URL } from "../config/urlConfig";


export default function IndustriesPage() {
    const params = useParams()
    

    return (
        <div className="space-y-6 m-1 mb-10">

            <HeaderRow header={params.sectorName} link={"/market/indices"} linkText={"View All"} />

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">



            </div>
        </div>

    );
}