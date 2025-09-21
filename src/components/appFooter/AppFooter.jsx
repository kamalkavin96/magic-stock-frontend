export default function AppFooter() {
    return (
        <footer className="bg-gray-200 text-gray-700 text-sm py-6 px-6 shadow-inner">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <h5 className="font-semibold mb-2">About</h5>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Company</a></li>
                        <li><a href="#" className="hover:underline">Team</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-2">Help</h5>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Support</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Live Chat</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-2">Legal</h5>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Use</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        <li><a href="#" className="hover:underline">Security</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-semibold mb-2">Connect</h5>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}
