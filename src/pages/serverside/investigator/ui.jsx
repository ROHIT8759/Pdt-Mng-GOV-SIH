import ProjectContainer from "./components/ProjectContainer";

function Ui() {
    return (
        <div className="bg-white text-black m-10">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-sans">Active Projects</h1>
                <h1 className="text-3xl font-bold font-sans">Inspector Console</h1>
            </div>

            <ProjectContainer />
        </div>
    );
}

export default Ui;