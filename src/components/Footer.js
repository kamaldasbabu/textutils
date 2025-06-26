function Footer() {
    return (
        <footer className="p-4 rounded-t-xl shadow-inner mt-auto text-center font-inter bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Text Utils. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;