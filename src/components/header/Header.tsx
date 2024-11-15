export function Header ({ toggleTheme }: { toggleTheme: () => void }) {
    return (
        <header className="header">It's header <button onClick={() => toggleTheme()}>Toggle Theme</button></header>
    )
}