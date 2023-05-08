export default function DownloadPDF() {

    const requestRegion = (event) => {
        window.open(event.target.value);
     };

    return (
        <select title="View CV" id="resume" onChange={requestRegion}>
            <option> View CV  </option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Full-Stack+Developer+CV+Resume.pdf">Full-Stack JS CV</option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Junior+Cyber+Security+Analyst+CV+Resume.pdf">Junior Cyber Analyst</option>
            <option value="https://robertpethercvbucket.s3.amazonaws.com/Robert+Pether+Front+End+CV+Resume.pdf">Front-End React CV</option>
        </select>
    )
}