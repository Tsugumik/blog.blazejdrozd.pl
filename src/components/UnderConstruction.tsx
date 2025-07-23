export default function UnderConstruction() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-base-200 text-center px-4">
            <div className="max-w-md">
                <h1 className="text-4xl font-bold text-primary mb-4">🚧 Work in Progress</h1>
                <p className="text-lg mb-6">
                    This blog is currently under construction.<br />
                    I'm working hard to bring something interesting soon!
                </p>
                <div className="flex justify-center space-x-4">
                    <a target="_blank" href="https://github.com/Tsugumik" className="btn btn-outline btn-primary">
                        GitHub
                    </a>
                    <a target="_blank" href="mailto:tsugumi@duck.com" className="btn btn-outline">
                        Contact
                    </a>
                </div>
                <p className="mt-8 text-sm opacity-60">Last updated: July 2025</p>
            </div>
        </main>
    );
}