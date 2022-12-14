export default function DownloadPDF() {

    const requestRegion = (event) => {
        window.open(event.target.value);
     };

    return (
        <select title="View CV" id="resume" onChange={requestRegion}>
            <option> View CV  </option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Full-Stack+Javascript+CV++Resume.pdf">JS CV</option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+.NET+Full-Stack+Developer+CV+Resume.pdf">.Net CV</option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+PHP+Full-Stack+Developer+CV+Resume.pdf">PHP CV</option>
        </select>
    )
}