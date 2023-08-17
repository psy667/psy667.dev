import { createSignal, createMemo } from "solid-js";
import { A } from "solid-start";
import "./index.css";
import { inject } from '@vercel/analytics';
 
inject();

export default function Home() {
    const noiseImg = (seed: number) => {
        const header = "data:image/svg+xml;base64,"
        const grain = `
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
                <filter id="noise" x="0" y="0">
                    <feTurbulence type="fractalNoise" seed="${seed}" baseFrequency="0.99" numOctaves="3" stitchTiles="stitch"/>
                    <feBlend mode="screen"/>
                </filter>
                <rect width="300" height="300" filter="url(#noise)" opacity="0.7"/>
            </svg>`;
        return `${header}${btoa(grain)}`
    }

    const [color, setColor] = createSignal(250);
    const [seed, setSeed] = createSignal(1);

    const noise = createMemo(() => noiseImg(seed()));


    setInterval(() => {
        setSeed(Math.round(Math.random() * 10));
        setColor((color() + 1) % 360);
    }, 10)


    return (
        <main class="max-w-2xl mx-auto text-gray-700 p-4">
            <div class="bg">
                <div
                    class="light"
                    style={{
                        "background": ` 
                    url(${noise()}),
                    radial-gradient(
                        circle at 0px 0px,
                        oklch(0.11 0.07 ${color()}) 30%,
                        oklch(0.55 0.13 ${color()}) 65%,
                        oklch(0.63 0.26 29.23) 90%,
                        oklch(0.87 0.07 18.63) 100%
                    ) no-repeat,
                    radial-gradient(
                        closest-side at 60% 50%, 
                        oklch(0.48 0.21 ${color()}) 30%, 
                        oklch(0 0 0)
                    100%)`,
                    }}
                ></div>
                <div class="grain"
                    style={{
                        "background": `url(${noise()}), black`
                    }}
                ></div>
            </div>
            <div class="text-white mt-8 sm:mt-[200px]">
                <h1 class="text-5xl mb-8">Hello, I am <u>psy667</u> 👋</h1>
                <p class="mb-4">I'm an enthusiastic Full-Stack Software Developer 👨‍💻 with over 4 years of experience.</p>
                <p>Proficient in frontend dev with React ⚛️, Angular 🅰️ & more, and backend dev in NestJS 🐈, PostgreSQL 🐘 & microservices 🚀. Also skilled in UI/UX design 🎨.</p>
                <ul class="flex flex-col mt-8 leading-loose">
                    <li>📩 <a class="text-slate-300 hover:underline" href="mailto:arseniyoguzov@gmail.com">arseniyoguzov@gmail.com</a></li>
                    <li>💻 <a class="text-slate-300 hover:underline" href="https://github.com/psy667">github.com/psy667</a></li>
                    <li>👤 <a class="text-slate-300 hover:underline" href="https://linked.in/in/psy667">linked.in/in/psy667</a></li>
                    <li>💬 <a class="text-slate-300 hover:underline" href="https://t.me/psy667">t.me/psy667</a></li>
                    <li>🖼️ <a class="text-slate-300 hover:underline" href="https://instagram.com/psy667">instagram.com/psy667</a></li>
                    <li>📄 <A href="/cv" class="text-slate-300 hover:underline">CV</A>{" "}</li>
                </ul>
            </div>
        </main>
    );
}
