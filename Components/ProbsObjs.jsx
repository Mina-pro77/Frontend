function ProbsObjs({ val }) {
    const { Name, Temp, Hum } = val
    return (
        <>
            <h1> Device Name is : {Name}</h1>
            <p> Temp is : {Temp}</p>
            <p> Hum is : {Hum}</p>
        </>
    )
}

export default ProbsObjs