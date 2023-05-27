
export default function handler(req: any, res: any) {
  if (req.method === 'GET') {

    // GET request when page first loaded - sends data to be displayed in each section
    res.status(200).json({ 
      webPageData: "nothing to get"
    })
  }
}
