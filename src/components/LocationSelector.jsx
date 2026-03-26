import React, { useState } from 'react';
import { LocationEdit, Building2Icon } from 'lucide-react';


const locationList = [ 
    {
        id: 'Kolkata',
        name: 'Kolkata',
        icon: Building2Icon
    },
    {
        id: 'Siliguri',
        name: 'Siliguri',
        icon: Building2Icon
    },
    {
        id: 'Delhi',
        name: 'Delhi',
        icon: Building2Icon
    },
    {
        id: 'Mumbai',
        name: 'Mumbai',
        icon: Building2Icon
    },
    {
        id: 'Bangalore',
        name: 'Bangalore',
        icon: Building2Icon
    },
    {
        id: 'Hydrabad',
        name: 'Hydrabad',
        icon: Building2Icon
    },
]
const LocationSelector = ({}) => {
  const [openLocationSelectBox, setOpenLocationSelectBox] = useState(false)


  return (
    <div id="location-selector" className='relative'>
        <button aria-label='click to open location selector' className='text-sm cursor-pointer flex gap-2 justify-center items-center py-1 px-2 border-solid border-b-2 border-border focus:border-primary focus:text-primary focus:outline-0 hover:border-primary hover:text-primary'><LocationEdit size={16} /> Select Location</button>
        <div className='flex gap-2'>
            {
                locationList?.map((location) => {
                    const Icon = location.icon
                    return(
                        <div className='p-4 border-2 border-solid border-border ' key={location.id}>
                        <label className='flex flex-col justify-center items-center' htmlFor={location.id}  >
                         <Icon />
                        {location.name}
                            </label>
                        <input className='sr-only' type='radio' name='location selector' id={location.id}/>
                       
                        
                
                    </div>)
                })
            }

        </div>
      
    </div>
  );
}

export default LocationSelector;
