export default function Character({item}) {
    let first;
    let middle;
    let last;
    if (item.name) {
        first = item.name.first;
        middle = item.name.middle;
        last = item.name.last;
        // let {first, middle, last} = item.name;
        // console.log(first);
    } else {
        first = 'Noname';
        middle = '';
        last = '';
    }
    let source = '';
    item.images ? source = item.images.main : source = "no Image";


// const imga = (obj) =>{
//     for (const objKey in obj) {
//         console.log(obj[objKey]);
//         return obj[objKey];
//     }
// }


    return (
        <div>
            <div>
                {first} -- {middle} -- {last} -- {item.age} -- {item.gender} -- {item.homePlanet}
            </div>
            <div>
                {/*{<img src={source+'.jpg'} alt=""/>}*/}
            </div>

        </div>
    )
}