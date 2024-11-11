import { memo } from "react"
import PropTypes from "prop-types"
import "./pageHead.css"

const PageHead = memo(function PageHead({title}) {
    return (
        <div className="pageHead">
            <div className="pageHead__overlay"></div>
            <div className="pageHead__content container" >
                <h1 className="pageHead__heading">{title}</h1>
            </div>
        </div>
    )
})

export default PageHead

PageHead.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}