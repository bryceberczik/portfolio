const ErrorPage = () => {
    const goBackHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl text-[whitesmoke] font-bold mb-4">Oops! 404</h1>
            <p className="text-lg text-[whitesmoke] mb-6">The page you're looking for doesn't exist.</p>
            <button onClick={goBackHome} className="px-4 py-2 underline text-white">
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;
