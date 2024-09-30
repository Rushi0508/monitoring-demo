// pages/defect.tsx

const DefectivePage = () => {
    const defectiveComponent: any = undefined;

    return (
        <div style={{ padding: '50px' }}>
            <h1>Defective Page</h1>
            <p>This page will crash during rendering due to an undefined error:</p>
            <p>{defectiveComponent.render()}</p> {/* This line will cause a runtime error */}
        </div>
    );
};

export default DefectivePage;
