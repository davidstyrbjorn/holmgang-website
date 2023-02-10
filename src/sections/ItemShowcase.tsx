import React, {useState} from "react";

type Props = {
    isSelected: boolean;
    index: number;
    name: string;
    image: string;
    handleClick: (index : number) => void;
};

const items = [
    {
        "name": "Hel's Blessing",
        "description": "Hel's Blessing is a powerful artifact that allows you to heal yourself and your allies. It is a great choice for those who like to play aggressively and want to stay in the fight for longer.",
        "image": "hel.png"
    },
    {
        "name": "Loki's Trickery",
        "description": "Loki's Trickery is a powerful artifact that allows you to heal yourself and your allies. It is a great choice for those who like to play aggressively and want to stay in the fight for longer.",
        "image": "loki.png"
    },
     {
        "name": "Thor's Hammer",
        "description": "Thor's Hammer is a powerful artifact that allows you to heal yourself and your allies. It is a great choice for those who like to play aggressively and want to stay in the fight for longer.",
        "image": "thor.png"
    },
    {
        "name": "Skadi's Blessing",
        "description": "Skadi's Blessing is a powerful artifact that allows you to heal yourself and your allies. It is a great choice for those who like to play aggressively and want to stay in the fight for longer.",
        "image": "skadi.png"
    },
   {
        "name": "Odin's Blessing",
        "description": "Odin's Blessing is a powerful artifact that allows you to heal yourself and your allies. It is a great choice for those who like to play aggressively and want to stay in the fight for longer.",
        "image": "odin.png"
    }
]

const Item = (props: Props) => {
    return (
        <div className="flex-1" onClick={() => props.handleClick(props.index)}>
            <img src={props.image}/> 
            <h4>{props.name}</h4>
            {
                props.isSelected ? <p>V</p> : <></>
            }
        </div>
    );
};

const ItemShowcase = () => {
    
    const [selectedItem, setSelectedItem] = useState(0);
    const handleSelect = (index : number) => {
        setSelectedItem(index);
    }
    return (
        <div className="p-8">
            <div className="flex justify-content">
                {
                    items.map((item, index) => 
                    {
                        return <Item isSelected={index == selectedItem} index={index} name={item.name} image={item.image} handleClick={handleSelect}/>
                    })
                }
            </div>
            <div className="">
                <h2>{items[selectedItem].name}</h2>
                <p>{items[selectedItem].description}</p>
                <img src={items[selectedItem].image} />
            </div>

        </div>
    );
};

export default ItemShowcase;
