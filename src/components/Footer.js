import PropTypes from 'prop-types';
function Footer({ theme }) {


    const getTextAreaClasses = () => {
        let classes = "form-control w-full p-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors duration-200";
        if (theme === 'light') {
            // classes += ' bg-gray-100 tet-gray-800';
            classes += ' bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
        }
        if (theme === 'dark') {
            classes += ' bg-gray-900 text-gray-100';
        } else if (theme === 'blue') {
            classes += ' bg-blue-700 text-white';
        } else if (theme === 'green') {
            classes += ' bg-green-700 text-white'
        } else if (theme === 'red') {
            classes += ' bg-red-700 text-white';
        } else if (theme === 'purple') {
            classes += ' bg-purple-700 text-white';
        } else if (theme === 'orange') {
            classes += ' bg-orange-700 text-white';
        }
        else {
            classes += ' bg-gray-100 text-gray-800';
        }
        return classes;
    };
    // bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300
    return (
        <footer className={`p-4 rounded-t-xl shadow-inner mt-auto text-center font-inter transition-colors duration-200 ${getTextAreaClasses()}`} >
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Text Utils. All rights reserved.
            </p>
        </footer>
    );
}

Footer.propTypes = {

    theme: PropTypes.string.isRequired,
};
export default Footer;