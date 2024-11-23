import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface NavItem {
    href: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/program', label: 'Programs' },
    { href: '/talents', label: 'Talents' },
    { href: '/local-solutions', label: 'Local Solutions' },
];

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#012A47] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-white">iT Central</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:flex sm:items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm font-medium text-white "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="text-gray-600">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[200px] sm:w-[300px]">
                                <nav className="flex flex-col gap-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;