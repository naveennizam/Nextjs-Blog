import React from 'react'
import styles from '@/styles/Home.module.css'
import * as fs from "fs"


const Blog = (myBLog) => {

  return (
    <>
      <div>
        <div className={styles.main}  >
          <div className={styles.blog}>
            {myBLog.myBLog.map((item) => {
              return (
                <>
                  <div key={item.slug} style={{margin:'50px'}}>
                    <div style={{ width: "38rem" }} >
                      <div >
                        <div className={styles.blogItem}>
                          <a href='#'><h1>{item.slug}</h1></a>
                          <hr style={{ marginBottom: "20px" }} />
                          <h3 style={{ marginBottom: "20px" }}>{item.url}</h3>

                          <span >{item.description}</span>
                        </div>

                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {

  let myFile;
  let myBLog = [];
  let data = await fs.promises.readdir('blogdata')

  for (let x in data) {
    let itemd = data[x]
  myFile = await fs.promises.readFile((`blogdata/${encodeURIComponent(itemd)}`), ('utf-8'))

  myBLog.push(JSON.parse(myFile))
}

  return { props: { myBLog } }

}




export default Blog