

function Editor({ children }) {
    return (
        <div className='editor' style={{ border: "1px solid grey", minHeight: "75vh" }}>
            {children}
        </div>
    )

}
export default Editor