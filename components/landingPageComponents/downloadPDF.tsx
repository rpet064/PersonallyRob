const DownloadPDF = () => {

    const requestRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.value;
        window.open(value, '_blank');
    };

    return (
        <select title="View CV" id="resume" onChange={requestRegion}>
            <option>View CV</option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Full-Stack+Developer+CV+Resume.pdf">Full-Stack .NET</option>
        </select>
    );
};

export default DownloadPDF;