//An atom component that returns in a span a value. The amount of tasks there are.
export default function Badge({number}){
    return (
        <span className="badge">{number}</span>
    )
}