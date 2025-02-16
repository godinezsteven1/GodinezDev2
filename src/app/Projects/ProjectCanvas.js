// 'use client';
"use client";

import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'


const parameters = {
    materialColor: '#91092e'

}

export default function ProjectsShowcase() {
    useEffect(() => {

        //scene + canvas
        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene()


        // Textures
        const textureLoader = new THREE.TextureLoader()
        const gradientTexture = textureLoader.load('/static/texture/gradients/5.jpg')
        gradientTexture.magFilter =THREE.NearestFilter // for meshToon pixel art

        //material
        const material = new THREE.MeshToonMaterial({
            color: parameters.materialColor,
            gradientMap: gradientTexture,
                                                    })


        /*
        NOTE : IF adding new projects:
         1. add mesh here
         2. update its position to appear either above or below (below is better)
         3. append it to the sectionMeshes array
         4. add it to the scene
         make sure to not go out of bounds for the gsap.to
         */


        // geometries... expand this section as project size grows .
        const mesh1 = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1),
        material)
        const mesh2 = new THREE.Mesh(
        new THREE.OctahedronGeometry(1),
        material)
        const mesh3  = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.7, 0.35, 100, 16),
        material)
        const objectDistance = 4

        mesh1.position.y = 0
        mesh1.position.x = 2

        mesh2.position.y = - objectDistance
        mesh2.position.x = -2

        mesh3.position.y = - objectDistance * 2
        mesh3.position.x = 2
        scene.add(mesh1,mesh2,mesh3)
        const sectionMesh = [mesh1,mesh2,mesh3]


        // light
        const directionalLight = new THREE.DirectionalLight('#ffffff', 4)
        directionalLight.position.set(1,1,0)
        scene.add(directionalLight)


        // full screen - for some reason its not going full screen
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        // sizes update
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            renderer.setSize(sizes.width, sizes.height)
        })


        //camera
        const cameraGroup = new THREE.Group()
        scene.add(cameraGroup)
        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1,100)
        camera.position.z = 6
        cameraGroup.add(camera)


        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas, // query select
            alpha: true // transparancey
                                                 })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


        // scroll
        // let variables instead of constants
        let scrollY = window.scrollY
        let currentSection = 0

        window.addEventListener('scroll', () => {
            scrollY = window.scrollY
            const newSection = Math.round(scrollY / sizes.height)
            if (newSection !== currentSection) { // if we get into new section
                currentSection = newSection // update
                gsap.to(sectionMesh[currentSection].rotation, {
                    duration: 1.5,
                    ease: 'power2.inout',
                    x: '+= 6',
                    y: '+= 3',
                    z: '+= 1.5'
                        }

                        )
            }
        })

        // cursor -- so we do not use raycaster
        const cursor = {}
        cursor.x = 0
        cursor.y = 0




        // in next.js event is a class not instance of event
        // next.js enforces stricter rules around global event handling
        window.addEventListener('mousemove', (event) => {
            cursor.x = event.clientX / sizes.width - 0.5
            cursor.y = (event.clientY / sizes.height - 0.5)
        })


        // animation
        const clock = new THREE.Clock()
        let previousTime = 0

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            camera.position.y = - scrollY / sizes.height * objectDistance
            const parallelX = cursor.x
            const parallelY = - cursor.y

            cameraGroup.position.x += (parallelX - cameraGroup.position.x) * 2 * deltaTime
            cameraGroup.position.y += (parallelY - cameraGroup.position.y) * 2 * deltaTime

            //speed essentially
            for (const mesh of sectionMesh) {
                mesh.rotation.x += 0.1 * deltaTime
                mesh.rotation.y += 0.12 * deltaTime
            }

            renderer.render(scene,camera)
            window.requestAnimationFrame(tick)
        }
        tick()
    }, [])

    return (
        <div className="fixed top-0 left-0 w-screen h-screen">
            <canvas className="webgl absolute top-0 left-0 w-full h-full"/>
        </div>
    );

}