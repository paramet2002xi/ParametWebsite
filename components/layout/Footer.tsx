export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-zinc-900 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Designed & Built with Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
