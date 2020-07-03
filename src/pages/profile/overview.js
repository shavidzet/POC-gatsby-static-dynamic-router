import React from "react"
import ProfileLayout from './layout'

const IndexPage = (props) => {
    console.log(222, props)
    return  (
        <ProfileLayout>
            <h1>id: {props.id}</h1>
            <h2 id="test1">What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
        </ProfileLayout>
    )
}

export default IndexPage
