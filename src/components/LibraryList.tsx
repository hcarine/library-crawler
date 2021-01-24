export const LibraryList = ( {data}: {data: any[]}) => {
    return (
        <div>
            {data.map( item=> <label key={item.id}>{item.link}</label>)}
        </div>
    )
}
