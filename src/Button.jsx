export default function Button({ onHandleToggle, children }) {
    return <button className="button" onClick={onHandleToggle}>{children}</button>
}