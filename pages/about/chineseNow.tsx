import CollapsibleSection from './chineseNowComponents/collapsible'
import CallToAction from './chineseNowComponents/callToAction'
// import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/header"), {
    suspense: true,
  })
  
  const Navbar = dynamic(() => import("../../components/navbar"), {
    suspense: true,
  })
  
  const Footer = dynamic(() => import("../../components/footer"), {
    suspense: true,
  })

export default function ChineseNow() {

  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState(
    [
      {
      "sectionClass":"",
      "label":"",
      "videoLink":"",
      "resourceLink":[""],
      "initialState": "",
      "title": ""
      }
    ]
  );

    // useEffect fetch web data to be displayed on app
    useEffect(() => {
      fetch(`../api/app`)
      .then(response => response.json())
        .then((data) => {
          setIsLoading(false)
          setPageData(data.webPageData)
        })
        .catch((e) => {
          alert(`An error occurred: ${e}`)
        });
    }, []);

  return (
    <>
      <main className={styles.main}>
      <Navbar />
      <div className={styles.maincontent}>
        { 
        // map array of dicts onto children elements of collapsibleSection component
        !isLoading && pageData.map(({videoLink, label, resourceLink, sectionClass, initialState, title},  index: number) => {
          return (
        <div key={index}>
        <CollapsibleSection label={label} initialState={initialState} title={title}>
          <div className={styles.playerwrapper}>
            <ReactPlayer url={videoLink} />
          </div>
          <div className="largetext">
            <h1 >Recommended Resources</h1>
            <h1>推薦資料</h1>
          </div>
            {
              // render array of resources seperately from pageData array
              resourceLink.map((resource: any, index: number) => {
              return <div className="smalltext" key={index}>{resource}</div>
              })}
        </CollapsibleSection>
        </div>
        )})}
      </div>
      <CallToAction />
      <Footer />
      </main>
    </>
  )
}