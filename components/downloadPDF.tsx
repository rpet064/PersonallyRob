export default function DownloadPDF() {

    const requestRegion = (event) => {
        window.open(event.target.value);
     };

    return (
            <select id="resume" onChange={requestRegion}>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+React+Front-End+Developer+CV+Resume.pdf">React Front-End CV</option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Full-Stack+Javascript+CV++Resume.pdf">Full-Stack Javacript CV</option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+.NET+Full-Stack+Developer+CV+Resume.pdf">Full-Stack .NET CV</option>
                <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+PHP+Full-Stack+Developer+CV+Resume.pdf">Full-Stack PHP CV</option>
            </select>
    )
}