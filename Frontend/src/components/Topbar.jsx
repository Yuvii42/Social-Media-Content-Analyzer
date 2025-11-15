import React from 'react'


export default function Topbar() {
return (
<header className="w-full bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-linear-to-br from-sky-500 to-indigo-600 rounded-xl shadow flex items-center justify-center text-white font-bold">S</div>
<div>
<div className="font-semibold text-lg">Social Media Content Analyzer</div>
<div className="text-xs text-neutral-500">Upload, Inspect & Improve your posts</div>
</div>
</div>
<nav className="flex items-center gap-4">
<button className="px-4 py-2 rounded-md bg-sky-50 text-sky-700 text-sm">Sign in</button>
<button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Create Report</button>
</nav>
</div>
</header>
)
}