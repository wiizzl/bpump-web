import { cn } from "@/lib/utils";
import { IconRobot } from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Footer() {
    const footer = [
        {
            title: "Réseaux",
            content: [
                { title: "Instagram", href: "https://www.instagram.com/b.pump76/" },
                { title: "TikTok", href: "" },
                { title: "GitHub", href: "https://github.com/B-Pump" },
            ],
        },
        {
            title: "Crédits",
            content: [
                { title: "shadcn/ui", href: "https://ui.shadcn.com/" },
                { title: "Aceternity UI", href: "https://ui.aceternity.com/" },
                { title: "", href: "" },
            ],
        },
        {
            title: "Aide",
            content: [
                { title: "FAQ", href: "faq" },
                { title: "Politique de confidentialité", href: "confidentitality" },
                { title: "Termes d'utilisation", href: "terms" },
            ],
        },
    ];

    const author = [
        { name: "Pierre", url: "https://github.com/wiizzl" },
        { name: "Galaad", url: "https://github.com/Neipe-the-Patatitator" },
    ];

    return (
        <footer className="border-t p-10">
            <div className="container">
                <div className="mx-auto flex flex-col items-center justify-between md:flex-row md:items-start">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="flex space-x-1">
                            <IconRobot />
                            <p className="font-bold">B-Pump</p>
                        </Link>
                    </div>
                    {footer.map((item, index) => (
                        <div key={index}>
                            <h3 className="font-bold">{item.title}</h3>
                            <div>
                                <ul>
                                    {item.content.map((item, index) => (
                                        <li key={index} className="-mx-3">
                                            <Link
                                                href={item.href}
                                                target="_blank"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "link",
                                                        size: "sm",
                                                        className: "text-sm text-muted-foreground",
                                                    }),
                                                )}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-1 text-sm text-muted-foreground">
                    <p>Fait par</p>
                    {author.map((item, index) => (
                        <div key={index}>
                            <Link href={item.url} className="font-bold hover:text-accent-foreground">
                                {item.name}
                            </Link>
                            {index < author.length - 1 && <>&nbsp;&</>}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
