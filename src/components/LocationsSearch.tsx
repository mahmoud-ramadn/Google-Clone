import React, { Fragment, useState } from 'react';
import { Place } from '../api/Place';
import Search from '../api/Serarch';

interface LocationsSearchProps {
    onPlaceClick: (place: Place) => void;
}

const LocationsSearch: React.FC<LocationsSearchProps> = ({ onPlaceClick }) => {
    const [term, setTerm] = useState('');
    const [places, setPlaces] = useState<Place[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const results = await Search(term);
        setPlaces(results);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="font-bold" htmlFor="term">
                    Search
                </label>
                <input
                    className="
                        border border-gray-300
                        rounded-md shadow-sm
                        focus:border-indigo-500 px-4
                        py-2
                    "
                    id="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </form>

            <h1 className="font-bold mt-6">Found Locations</h1>
          
            <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
                {places.map(place => (
                    <Fragment key={place.id}>
                        <p className="text-sm">{place.name}</p>
                        <button
                            className="
                                bg-blue-500 text-xs text-white font-bold
                                p-2 rounded
                            "
                            onClick={() => onPlaceClick(place)}
                        >
                            Go
                        </button>
                        <div className="border-b w-full col-span-2 flex" />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default LocationsSearch;
