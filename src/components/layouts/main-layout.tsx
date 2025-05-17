import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header'

export default function MainLayout() {
    return (
        <div className="relative">
            <div className="fixed inset-0 z-[-1]">
                {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" /> */}
                {/* <Blobs /> */}
                <div
                    className="absolute inset-0 bg-linear-to-t from-red-900/15 via-red-950/15 to-zinc-950 blur-2xl z-[-1]"
                ></div>
            </div>
            <div className='z-10 relative'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}
