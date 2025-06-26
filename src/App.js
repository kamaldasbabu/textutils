import './App.css';
import  { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




// Import the separated components
// import Navbar from './Navbar';
// import TextForm from './TextForm';
// import Footer from './Footer';

export default function App() {
    const [theme, setTheme] = useState('light');
    const [isResponsiveGuideActive, setIsResponsiveGuideActive] = useState(false);

    const getAppContainerClasses = () => {
        let classes = "min-h-screen flex flex-col font-inter transition-colors duration-300";
        if (isResponsiveGuideActive) {
            classes += " border-4 border-dashed border-purple-500 p-4";
        }
        switch (theme) {
            case 'dark':
                classes += " bg-gray-900 text-gray-100";
                break;
            case 'blue':
                classes += " bg-blue-50 text-blue-900";
                break;
            case 'green':
                classes += " bg-green-50 text-green-900";
                break;
            case 'red':
                classes += " bg-red-50 text-red-900";
                break;
            case 'purple':
                classes += " bg-purple-50 text-purple-900";
                break;
            case 'orange':
                classes += " bg-orange-50 text-orange-900";
                break;
            case 'light':
            default:
                classes += " bg-gray-50 text-gray-800";
                break;
        }
        return classes;
    };

    return (
        <div className={getAppContainerClasses()}>
            <Navbar
                title="Text Utils"
                theme={theme}
                setTheme={setTheme}
                isResponsiveGuideActive={isResponsiveGuideActive}
                setIsResponsiveGuideActive={setIsResponsiveGuideActive}
            />

            <div className="flex-grow container mx-auto px-2 py-4">
                <TextForm heading="Enter your text below" theme={theme} />
            </div>

            <Footer />
        </div>
    );
}

