const Snake = ({ snakeDots }) => {
    return ( <div>
        {snakeDots.map((dot, i)=> {
            console.log(dot)
            const style={
                left: `${dot[0]}%`,
                top: `${dot[1]}%`
            }

            return (
                <div className="snake-dot" key={i} style={style} />
            )
        })}
    </div> );
}
 
export default Snake;