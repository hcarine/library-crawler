export const LibraryList = ( {data}: {data: any[]}) => {
    return (
        <div>
            {data.map( item=> <label key={item.name}>{item.link}</label>)}
        </div>
    )
}
