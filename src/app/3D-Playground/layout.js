import { Cabin } from 'next/font/google'
// import './globals.css'

export default function RootLayout({ children }) {
    return (
        <html>
        <h1> hello world </h1>
        </html>
    )
}


// 3D-Playground/
// │── layout.js          # Wraps the entire section (for shared UI)
// │── ProjectCanvas.js            # Main entry point (renders Three.js scene)
// │── components/
// │   ├── Scene.js       # Your main Three.js scene (Canvas, Renderer, etc.)
// │   ├── Model.js       #  3D models
// │   ├── Controls.js    #  Handle OrbitControls, Camera movement
// │── static-content/
// │   ├── Info.js        # Any non-Three.js UI (text, images, etc.)
// │   ├── Sidebar.js
// │── assets/            # 3D models, textures, images
// │   ├── model.glb
// │   ├── texture.jpg