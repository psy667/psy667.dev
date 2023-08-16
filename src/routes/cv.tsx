import "./cv.css";


export default function CV() {
    return (
    <div class="cv-bg">
        <a class="text-xs block p-2 bg-slate-200 text-center w-full cursor-pointer" href="./arseniioguzov-cv.pdf" target="_blank">download .pdf</a>
        <main class="cv">
            <h1>Arsenii Oguzov</h1>

            <p>Full-Stack Software Developer</p>

            <section>
                <article>
                    <h2>About Me</h2>

                    <p>I am an enthusiastic Full-Stack Software Developer with over <mark>four years</mark> of experience. I am proficient in frontend development through <mark>React</mark>, <mark>Angular</mark> and other frameworks, perfectly complemented by my backend development skills in <mark>NestJS</mark>, <mark>PostgreSQL</mark> and <mark>microservice architecture</mark> with <mark>Kafka</mark> and <mark>gRPC</mark>.</p>

                    <p>In addition to these, I also have a robust background in UI/UX design and have adept skills in swiftly crafting MVP prototypes. My knowledge doesn't stop at my primary competencies, I also have familiarity with several areas like blockchain technology, ChatGPT, functional programming and computer architecture.</p>
                </article>

                <article>
                    <h2>Contact Information</h2>
                    <ul>
                        <li>Email: <a href="mailto:arseniyoguzov@gmail.com">arseniyoguzov@gmail.com</a></li>
                        <li>Telegram: <a href="https://t.me/psy667">t.me/psy667</a></li>
                        <li>Github: <a href="https://github.com/psy667">github.com/psy667</a></li>
                        <li>Linkedin: <a href="https://linked.in/in/psy667">linked.in/in/psy667</a></li>
                    </ul>

                    <h2>Skills</h2>

                    <ul>
                        <li>TypeScript</li>
                        <li>Angular</li>
                        <li>NodeJS, NestJS</li>
                        <li>Postgres, TypeORM, MikroORM</li>
                        <li>Microservices, gRPC, Kafka</li>
                        <li>Docker, Kubernetes, GCP</li>
                        <li>React, Redux</li>
                        <li>Kotlin</li>
                        <li>UI/UX</li>
                        <li>System Design</li>
                    </ul>

                </article>
            </section>

            <h2>Experience</h2>

            <ul>
                <li><b>Newity, Software Developer (Apr 2021 - Present)</b>
                    <ul>
                        <li>Built backend for a payment microservice</li>
                        <li>Worked as a frontend developer and created a new module for a major investment platform</li>
                        <li>Developed several MVPs with a team in an extremely short period of time</li>
                    </ul>
                </li>

                <li><b>EnkiSoft, Frontend Developer (Aug 2019 - Feb 2021)</b>
                    <ul>
                        <li>Designed and implemented the frontend architecture for a large-scale application using Angular, GraphQL, and Apollo</li>
                    </ul>
                </li>

                <li><b>DomRf, Front-end Developer (Feb 2019 - Aug 2019)</b>
                    <ul>
                        <li>Developed a dashboard for the HR department using React and NodeJS</li>
                    </ul>
                </li>
            </ul>

            <h2>Education</h2>

            <p>Bachelor's Degree in Computer Science, VIHT, 2017-2021</p>
        </main>
        </div>
        
    )
}
