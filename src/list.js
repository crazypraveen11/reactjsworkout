export let List = () => {

    let Fruitsname =["Apple","Orange","Grapes","Gooseberry"];

    return(
        <>
        <ol start={5}>
            {
                Fruitsname.map(
                    (get,index) =>
                    (
                        <li>{get}</li>
                    )
                )
            }
        </ol>
        </>
    )
}

