import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    const toggled_theme = () => {
        return resolvedTheme === 'light' ? 'dark' : 'light';
    }

    const cap_first_letter = (s: string) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
      
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <span onClick={() => {setTheme(toggled_theme())}}>
            <a href='#'>
                {cap_first_letter(toggled_theme())} Mode
            </a>
        </span>
    )
}

export default ThemeSwitch