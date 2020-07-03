import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

const IndexPage = (props) => {
    console.log(222, props)
    return  (
        <div style={{background: 'orange'}}>
        {/* <Layout> */}
            <Link to="/profile/1/overview">John's profile overview</Link>
            <Link to="/profile/1/statistics">Jane's profile statistics</Link>
            <hr />
            <Link to="/profile/2/overview">Foo's profile overview</Link>
            <Link to="/profile/2/statistics">Bar's profile statistics</Link>
            <hr />
            {props.children}
            <SEO title="Home" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
            </div>
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        {/* </Layout> */}
        </div>
    )
}

export default React.memo(IndexPage)
