import { Sun, Moon } from 'lucide-react';
import { NeuButton } from '../src/components/BUTTON/Button';
import { useTheme } from '../src/providers/Theme-provider'

function Nav() {

    const { theme, setTheme } = useTheme();

    return(
        <nav className='py-8 px-12 flex justify-between items-center'>
            <h1 className='font-bold'>Neumorphism UI</h1>
            <NeuButton size={'icon'} shape={"circle"} onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
                {
                    theme === "light" ? 
                    <Moon className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 '/> 
                    : 
                    <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-90 dark:rotate-0 '/>
                }
            </NeuButton>
        </nav>
    )
}

export default Nav;