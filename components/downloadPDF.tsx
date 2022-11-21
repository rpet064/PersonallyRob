export default function DownloadPDF() {

    const requestRegion = (event) => {
        window.open(event.target.value);
     };

    return (
            <select id="resume" onChange={requestRegion}>
                <option> View CV  </option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+React+Front-End+Developer+CV+Resume.pdf">React CV</option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Full-Stack+Javascript+CV++Resume.pdf">JS CV</option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+.NET+Full-Stack+Developer+CV+Resume.pdf">.NET CV</option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+PHP+Full-Stack+Developer+CV+Resume.pdf">PHP CV</option>
            </select>
    )
}