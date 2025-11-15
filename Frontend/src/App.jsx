
import React, { useState } from 'react'
import FileUploader from './components/FileUploader'
import PreviewPane from './components/PreviewPane'
import Visualizer from './components/Visualizer'
import Topbar from './components/Topbar'


export default function App() {
const [documents, setDocuments] = useState([])
const [extractedText, setExtractedText] = useState('')


// documents: [{id, name, type, text, previewUrl}]
function handleFilesProcessed(newDocs) {
// append and also aggregate text
setDocuments((d) => [...newDocs, ...d])
const combined = newDocs.map((nd) => nd.text || '').join('\n\n')
setExtractedText((t) => (combined ? combined + '\n\n' + t : t))
}


return (
<div className="min-h-screen bg-neutral-50 text-neutral-900">
<Topbar />
<div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<FileUploader onProcessed={handleFilesProcessed} />
<div className="mt-6 p-4 bg-white rounded-2xl shadow">
<h3 className="text-sm font-semibold text-neutral-500">Quick Stats</h3>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-2xl font-bold">{documents.length}</div>
<div className="text-xs text-neutral-500">Uploaded documents</div>
</div>
<div className="text-right">
<div className="text-2xl font-bold">{extractedText.split(/\s+/).filter(Boolean).length}</div>
<div className="text-xs text-neutral-500">Total words</div>
</div>
</div>
</div>
</div>


<div className="lg:col-span-2 space-y-6">
<PreviewPane text={extractedText} documents={documents} />
<Visualizer text={extractedText} />
</div>
</div>
</div>
)
}
