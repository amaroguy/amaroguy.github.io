import { ProjectProps } from "../Project/Project"

export const Projects: ProjectProps[] = [
    {
        name: "UCSD Facility Tracker",
        githubLink: "https://github.com/amaroguy/UCSDFacilityTracker",
        toolsUsed: ["ReactJS", "NodeJS", "Prisma", "PostgreSQL", "Supabase", "Docker"],
        description: `
            A full stack application that periodically scrapes busy-ness data from UCSD's website and stores
            it in a database. Data is served to the front end via REST API. 
            The front end provides a Grafana-like dashboard to view busyness of a facility over time. 
        `
    },
    {
        name: "Vowelser (2024)",
        githubLink: "https://github.com/amaroguy/Vowelser",
        writeUpLink: "https://github.com/amaroguy/amaroguy.github.io/blob/main/LIGN168_Final_Paper.pdf",
        demoVideoLink: "https://youtu.be/luvUza0Pi9o",
        toolsUsed: [
            "Machine Learning",
            "Deep Learning: Convolutional Neural Networks",
            "SciPy: Logistic Regression",
            "Python",
            "Formant Analysis",
            "Natural Language Processing"
        ],
        description: `
        A controller entirely by your voice. 
        Using formant analysis of the voice input, the control stick is controlled via the vowel a user is producing, 
        which allows for a fully analog control stick.
        Button presses are handled by logistic regression on mel-spectrograms to regonize p,k,b,t to map to button inputs.
        I originally spent way too much time trying deep learning for the buttons. I was able to get a star in mario 64 with it!`
    },
    {
        name: "Tacotron voice cloning experiment (2021)",
        demoVideoLink: "https://drive.google.com/file/d/1F5mEK4NRkce-nI2rBDXm7Rmmrz8Uj5nk/view?usp=sharing",
        writeUpLink: "https://github.com/amaroguy/amaroguy.github.io/blob/main/LIGN6_Final_Paper.pdf",
        toolsUsed: [
            "Deep Learning: PyTorch",
            "Natural Language Processing",
            "Data Analysis"
        ],
        description: `
        I cloned my professor's voice in 2021.
        It used an existing Google Colab notebook which had me rewatch hours of lecture videos to manually labled/transcribe them and feed to the model.`
    },
    {
        name: "Korone/Discord Bot (2021?)", 
        toolsUsed: ["OAuth", "Firebase", "Javascript", "Python"],
        description: `A Discord bot written in Python that lets users link their UCSD email
         account to their Discord account. Server admins can restrict chatting privileges to 
         USCSD-email-verified users by forcing them to follow the bot's verification process
          (which is just a Discord OAuth login followed by a Google OAuth login).`
    },
    {
        name: "Goodlift (2022)",
        githubLink: "https://github.com/amaroguy/goodlift_scratch",
        demoVideoLink: "https://amaroguy.github.io/goodlift",
        toolsUsed: ["React", "Nodejs"],
        description: `
        A powerlifting competition management web application. Allows for competitor registration, score management, and page for competition staff directing them how much weight to load for the current competitor's attempt.
        The results/changes are also streamed to visitors via websocket. 
        `
    },
    {
        name: "Illuminate (Hackathon Project)",
        githubLink: "https://github.com/Sachin-dot-py/Illuminate",
        demoVideoLink: "https://www.youtube.com/watch?v=dDneyMvmDPc",
        toolsUsed: ["Python", "React", "Flask"],
        description: `An automatic course scheduler for UCSD students.
         Students can input a list of classes, set availability windows, and block
         professors from being put in the generated schedule(s). Scrapes the UCSD registrar of classes,
         compiles schedules, and displays them to students along with the professor's rating, also scraped.
         Due to being the biggest UC campus, we also warn students if the time between classes is less than the 
         estimated time it would take to walk between lecture rooms. 
        `
    },
    {
        name: "AI Flashcard App (2023)",
        githubLink: "",
        toolsUsed: ["ChatGPT API", "ReactJS", "Electron"],
        description: `
            Desktop application which allows for users to upload documents like lecture notes to be
            able to generate flashcards from them. The user can then quiz themselves, giving an answer to the term
            on the front of the flashcard and ChatGPT will grade their response, providing feedback if their
            definition may be off-track. 
        `
    }
]