
import React from 'react';
import PropTypes from 'prop-types';
function Navbar({ title, theme, setTheme, isResponsiveGuideActive, setIsResponsiveGuideActive }) {
    const handleThemeToggle = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const handleDropdownChange = (event) => {
        const selectedTheme = event.target.value;
        if (selectedTheme !== 'default') {
            setTheme(selectedTheme);
        }
    };

    const getDropdownBaseBgClass = () => {
        if (theme === 'light' || theme === 'blue' || theme === 'green' || theme === 'red' || theme === 'purple' || theme === 'orange') {
            return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
        } else {
            return 'bg-gray-700 text-gray-200 hover:bg-gray-600';
        }
    };

    return (
        <nav className={`p-2 shadow-md rounded-b-xl flex flex-col md:flex-row items-cEnter your text justify-between ${
            theme === 'light' ? 'bg-gray-100 text-gray-800' :
            theme === 'dark' ? 'bg-gray-900 text-gray-100' :
            theme === 'blue' ? 'bg-blue-700 text-white' :
            theme === 'green' ? 'bg-green-700 text-white' :
            theme === 'red' ? 'bg-red-700 text-white' :
            theme === 'purple' ? 'bg-purple-700 text-white' :
            theme === 'orange' ? 'bg-orange-700 text-white' :
            'bg-gray-100 text-gray-800'
        }`}>
            <h1 className="text-2xl font-bold font-inter mb-4 md:mb-0">{title}</h1>
            <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                {/* Light/Dark Mode Toggle Button */}
                <button
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                        theme === 'light' ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500' : 'bg-blue-800 text-blue-100 hover:bg-blue-900'
                    }`}
                    onClick={handleThemeToggle}
                    title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                >
                    {theme === 'light' ? (
                        <>
                            {/* Sun Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                            </svg>
                        </>
                    ) : (
                        <>
                            {/* Moon Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                            </svg>
                            
                        </>
                    )}
                </button>

                {/* Dropdown for More Themes */}
                <select
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${getDropdownBaseBgClass()} ${
                        ['blue', 'green', 'red', 'purple', 'orange'].includes(theme) ?
                            (theme === 'blue' ? 'bg-blue-600 text-white' :
                             theme === 'green' ? 'bg-green-600 text-white' :
                             theme === 'red' ? 'bg-red-600 text-white' :
                             theme === 'purple' ? 'bg-purple-600 text-white' :
                             theme === 'orange' ? 'bg-orange-600 text-white' : '')
                            : ''
                    }`}
                    onChange={handleDropdownChange}
                    value={['blue', 'green', 'red', 'purple', 'orange'].includes(theme) ? theme : 'default'}
                >
                    <option value="default" disabled hidden>More Themes</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                </select>

                {/* Responsive Guide Button */}
                {/* <button
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        isResponsiveGuideActive ? 'bg-purple-600 text-white hover:bg-purple-700' : getDropdownBaseBgClass()
                    }`}
                    onClick={() => setIsResponsiveGuideActive(!isResponsiveGuideActive)}
                >
                    {isResponsiveGuideActive ? 'Hide Responsive Guide' : 'Show Responsive Guide'}
                </button> */}
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired,
    // isResponsiveGuideActive: PropTypes.bool.isRequired,
    // setIsResponsiveGuideActive: PropTypes.func.isRequired,
};


export default Navbar;