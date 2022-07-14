import { ProjectCardProps } from "components/ProjectCard";

const project_cards: ProjectCardProps[] = [
    {
        title: "Chip-8 Interpretting Emulator",
        description: "A Chip-8 Interpretting Emulator Written in Rust.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/jy1263/chip-8-emu-rs',
                icon: 'mdi-github'
            }
        ]
    },
    {
        title: "Simple Australian Tax Calculator",
        description: "A simple tax calculator for the Australian taxation system.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/jy1263/TaxCalculatorLaravel',
                icon: 'mdi-github'
            },
            {
                text: "Demo",
                href: 'https://austaxcalc.000webhostapp.com/',
                icon: 'mdi-web'
            }
        ]
    },
    {
        title: "TapeSync",
        description: "A modification for the productivity and organization application Tape, to enable synchronization of items between different systems using existing sync services.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/jy1263/TapeSync',
                icon: 'mdi-github'
            }
        ]
    },
    {
        title: "TapeMobile",
        description: "A modification for the productivity and organization application Tape, that ports it to mobile devices and the PWA platform.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/jy1263/TapeMobile',
                icon: 'mdi-github'
            }
        ]
    },
    {
        title: "SRXDBepInExInstaller",
        description: "A installer for the modding framework BepInEx for the game Spin Rhythm XD written in Python and Tkinter.",
        actions: [
            {
                text: "GitHub",
                href: 'https://github.com/SRXDModdingGroup/SRXDBepInExInstaller',
                icon: 'mdi-github'
            }
        ]
    },
    {
        title: "Exalta Launcher",
        description: "A third-party open-source launcher built in Rust for Realm of the Mad God Exalted.",
        actions: [
            {
                text: "GitHub",
                href: "https://github.com/jy1263/exalta",
                icon: "mdi-github"
            },
            {
                text: "Download",
                href: "https://github.com/jy1263/exalta/releases/latest",
                icon: "mdi-download"
            }
        ]
    }
]

export default project_cards;